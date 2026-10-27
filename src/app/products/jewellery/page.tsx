import type { Metadata } from "next";
import JewelleryPageContent from "@/components/jewellery/JewelleryPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Jewellery POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam jewellery POS for item inventory, billing and sales reports. Confirm label requirements and specialist pricing needs during a demo.",
  path: "/products/jewellery",
});

export default function JewellerySolutionPage() {
  return <JewelleryPageContent />;
}
