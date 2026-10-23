import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Crawlers must be able to read page-level noindex on unfinished services
      // and thank-you pages. These routes remain outside the sitemap.
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
