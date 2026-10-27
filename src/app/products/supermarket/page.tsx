import type { Metadata } from "next";
import SupermarketPageContent from "@/components/supermarket/SupermarketPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Supermarket POS & Inventory Software | DigiNizam",
  description:
    "Review DigiNizam supermarket POS for grocery billing, item inventory, purchasing and reports. Confirm checkout hardware and branch requirements in a demo.",
  path: "/products/supermarket",
});

export default function SupermarketSolutionPage() {
  return <SupermarketPageContent />;
}
