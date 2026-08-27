import type { Metadata } from "next";
import DistributionPageContent from "@/components/distribution/DistributionPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Distribution & Wholesale ERP Software Pakistan | DigiNizam",
  description:
    "ERP and distribution management software for wholesale and warehouse operations, with order tracking, supplier ledgers, and multi-branch inventory.",
  path: "/products/distribution",
});

export default function DistributionSolutionPage() {
  return <DistributionPageContent />;
}
