import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt", "de", "nl"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false
});
