export const siteSettings = {
  brand: "HOMIE",
  tagline: "tiny home algarve",
  description:
    "Architectural timber tiny homes for Portugal, launching first in the Algarve for buyers who want a serious small home, not a disposable chalet.",
  email: "hello@athomie.pt",
  address: "Lagos / Algarve, Portugal - service area details to confirm before launch",
  canonicalUrl: "https://www.athomie.pt",
  foundingLocation: "Portugal",
  areaServed: ["Algarve", "Portugal", "European Union"],
  keywords: [
    "tiny home Algarve",
    "tiny homes Portugal",
    "timber tiny home",
    "tiny house Algarve",
    "architectural tiny homes",
    "factory built tiny home Portugal"
  ],
  socials: {
    youtube: "https://www.youtube.com/",
    x: "https://x.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    maps: "https://www.google.com/maps/search/?api=1&query=Lagos%20Algarve%20Portugal"
  }
};

export const locales = ["en", "pt", "de", "nl"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Portuguese",
  de: "German",
  nl: "Dutch"
};

export function localePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}`;
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteSettings.canonicalUrl).toString();
}

export const navigation = [
  { href: "#model", label: "Models" },
  { href: "#configure", label: "Configurator" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" }
];

export const legalNotice =
  "Identity, email, address, socials, and legal text must be confirmed before launch.";
