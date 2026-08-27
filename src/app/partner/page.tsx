import type { Metadata } from "next";
import PartnerPageContent from "@/components/partner/PartnerPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a Partner | DigiNizam",
  description: "Join the DigiNizam partner network. Resell ERP & POS solutions across Pakistan.",
  path: "/partner",
});

export default function PartnerPage() {
  return <PartnerPageContent />;
}
