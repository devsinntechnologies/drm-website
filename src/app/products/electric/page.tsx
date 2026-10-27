import type { Metadata } from "next";
import ElectricPageContent from "@/components/electric/ElectricPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Electrical Store POS & Inventory Software | DigiNizam",
  description:
    "Explore electrical store POS for counter billing, SKU inventory and purchasing. Review DigiNizam stock records, reports and your shop requirements in a demo.",
  path: "/products/electric",
});

export default function ElectricSolutionPage() {
  return <ElectricPageContent />;
}
