import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// Placeholder page — keep out of the sitemap and out of the index until real
// support content replaces the "coming soon" content.
export const metadata: Metadata = pageMetadata({
  title: "Support | DigiNizam",
  description: "DigiNizam customer support.",
  path: "/support",
  index: false,
});

export default function SupportPage() {
  return <ComingSoon pageName="Support" />;
}
