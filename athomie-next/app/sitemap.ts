import type { MetadataRoute } from "next";
import { absoluteUrl, localePath, locales } from "@/content/site";

const staticRoutes = ["", "configure", "privacy", "terms", "cookies", "brochure-download"] as const;
const lastModified = new Date("2026-05-29");

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => {
    const localeBase = localePath(locale).replace(/\/$/, "");

    return staticRoutes.map((route) => {
      const path = `${localeBase}${route ? `/${route}` : ""}` || "/";
      const languages = Object.fromEntries(
        locales.map((supportedLocale) => {
          const supportedBase = localePath(supportedLocale).replace(/\/$/, "");
          return [supportedLocale, absoluteUrl(`${supportedBase}${route ? `/${route}` : ""}` || "/")];
        })
      );

      return {
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: {
            ...languages,
            "x-default": absoluteUrl(route ? `/${route}` : "/")
          }
        }
      };
    });
  });
}
