import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// Placeholder page — keep out of the sitemap and out of the index until real
// Terms & Conditions copy replaces the "coming soon" content.
export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions | DigiNizam",
  description: "DigiNizam Terms & Conditions.",
  path: "/terms",
  index: false,
});

export default function TermsPage() {
  return <ComingSoon pageName="Terms" />;
}
