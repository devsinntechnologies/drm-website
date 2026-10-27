import type { Metadata } from "next";
import RetailPageContent from "@/components/retail/RetailPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Retail POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam retail POS for billing, inventory and store reports. Review purchasing, branch requirements and your daily workflow in a demo.",
  path: "/products/retail",
});

export default function RetailSolutionPage() {
  return <RetailPageContent />;
}
