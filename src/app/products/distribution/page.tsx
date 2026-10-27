import type { Metadata } from "next";
import DistributionPageContent from "@/components/distribution/DistributionPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wholesale & Distribution Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam wholesale inventory software for stock, purchasing and billing. Review item records, locations and distribution requirements in a demo.",
  path: "/products/distribution",
});

export default function DistributionSolutionPage() {
  return <DistributionPageContent />;
}
