import type { Metadata } from "next";
import PartnerPageContent from "@/components/partner/PartnerPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become a DigiNizam Partner | Reseller & Consultant Program",
  description:
    "Resellers, integrators and consultants can apply to offer DigiNizam POS and business management software in the markets they serve. Tell us about your company.",
  path: "/partner",
});

export default function PartnerPage() {
  return <PartnerPageContent />;
}
