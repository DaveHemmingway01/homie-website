import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteSettings.canonicalUrl}/sitemap.xml`,
    host: siteSettings.canonicalUrl
  };
}
