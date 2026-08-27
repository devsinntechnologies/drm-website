import type { Metadata } from "next";
import React from "react";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// Placeholder page — keep out of the sitemap and out of the index until real
// client-story content replaces the "coming soon" content.
export const metadata: Metadata = pageMetadata({
  title: "Clientele | DigiNizam",
  description: "Businesses that trust DigiNizam. Client stories coming soon.",
  path: "/clientele",
  index: false,
});

export default function ClientelePage() {
  return <ComingSoon pageName="Clientele" />;
}
