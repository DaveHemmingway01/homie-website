import { writeFile } from "node:fs/promises";

const SITE = "https://www.athomie.pt";
const EXTRA_URLS = [
  `${SITE}/specs`,
  `${SITE}/contact`,
  `${SITE}/category/all-products`,
  `${SITE}/category/made-by-homie`,
  `${SITE}/category/partner-co`,
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 HomieContentScraper/1.0",
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`);
  }
  return response.text();
}

function decodeEntities(value) {
  const named = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    sup2: "²",
    rsquo: "'",
    lsquo: "'",
    rdquo: '"',
    ldquo: '"',
    ndash: "-",
    mdash: "-",
    hellip: "...",
    aacute: "á",
    Aacute: "Á",
  };

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-zA-Z][a-zA-Z0-9]+);/g, (match, name) => named[name] ?? match);
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function extractUrlsFromSitemap(xml) {
  return unique([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeEntities(match[1])));
}

function extractBetween(html, pattern) {
  const match = html.match(pattern);
  return match ? decodeEntities(match[1].trim()) : "";
}

function cleanHtmlToText(html) {
  const withoutNoise = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ");

  const withBreaks = withoutNoise
    .replace(/<\/(h[1-6]|p|div|section|article|main|header|footer|li|ul|ol|br|tr)>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ");

  return decodeEntities(withBreaks)
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line !== "-" && line !== "top of page" && line !== "bottom of page")
    .filter((line) => !/^\{.*\}$/.test(line))
    .join("\n");
}

function extractImages(html) {
  const imageUrls = [...html.matchAll(/https:\/\/static\.wixstatic\.com\/media\/[^"'\\<\s)]+/g)].map((m) =>
    decodeEntities(m[0].replace(/\\\//g, "/"))
  );
  const alts = [...html.matchAll(/alt=["']([^"']+)["']/gi)].map((m) => decodeEntities(m[1].trim()));
  return {
    urls: unique(imageUrls),
    altText: unique(alts),
  };
}

function pageToRecord(url, html) {
  const title = extractBetween(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = extractBetween(
    html,
    /<meta[^>]+(?:name|property)=["'](?:description|og:description)["'][^>]+content=["']([^"']*)["'][^>]*>/i
  );
  const h1 = extractBetween(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, " ");
  return {
    url,
    title,
    description,
    h1: h1 ? decodeEntities(h1.replace(/\s+/g, " ").trim()) : "",
    text: cleanHtmlToText(html),
    images: extractImages(html),
  };
}

async function getAllUrls() {
  const sitemapIndex = await fetchText(`${SITE}/sitemap.xml`);
  const sitemapUrls = extractUrlsFromSitemap(sitemapIndex).filter((url) => url.endsWith(".xml"));
  const pageUrls = [];

  for (const sitemapUrl of sitemapUrls) {
    const xml = await fetchText(sitemapUrl);
    pageUrls.push(...extractUrlsFromSitemap(xml).filter((url) => !url.endsWith(".xml")));
  }

  return unique([SITE, ...EXTRA_URLS, ...pageUrls]).sort();
}

function toMarkdown(records) {
  return [
    "# athomie.pt scraped content",
    "",
    `Scraped: ${new Date().toISOString()}`,
    `Pages: ${records.length}`,
    "",
    ...records.flatMap((record) => [
      `## ${record.title || record.h1 || record.url}`,
      "",
      `URL: ${record.url}`,
      record.description ? `Description: ${record.description}` : "",
      record.h1 ? `H1: ${record.h1}` : "",
      "",
      "### Text",
      "",
      record.text,
      "",
      record.images.altText.length ? "### Image alt text" : "",
      "",
      ...record.images.altText.map((alt) => `- ${alt}`),
      "",
    ]),
  ]
    .filter((line) => line !== "")
    .join("\n");
}

async function main() {
  const urls = await getAllUrls();
  const records = [];

  for (const url of urls) {
    process.stderr.write(`Scraping ${url}\n`);
    const html = await fetchText(url);
    records.push(pageToRecord(url, html));
    await sleep(250);
  }

  await Promise.all([
    writeFile("scraped/athomie-content.json", JSON.stringify(records, null, 2)),
    writeFile("scraped/athomie-content.md", toMarkdown(records)),
    writeFile("scraped/athomie-urls.txt", urls.join("\n") + "\n"),
  ]);

  process.stderr.write(`Done. Scraped ${records.length} pages.\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
