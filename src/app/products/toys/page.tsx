import type { Metadata } from "next";
import ToysPageContent from "@/components/toys/ToysPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Toy Store POS & Inventory Software | DigiNizam",
  description:
    "Review DigiNizam toy store POS for billing, product inventory and sales reports. Discuss catalogue, purchasing and seasonal discount requirements in a demo.",
  path: "/products/toys",
});

export default function ToysSolutionPage() {
  return <ToysPageContent />;
}
