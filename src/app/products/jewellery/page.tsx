import type { Metadata } from "next";
import JewelleryPageContent from "@/components/jewellery/JewelleryPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Jewellery POS Software in Pakistan | DigiNizam",
  description:
    "Jewellery POS software in Pakistan for billing, item inventory, labels, payments, discounts and multi-branch reporting. Book a free demo.",
  path: "/products/jewellery",
});

export default function JewellerySolutionPage() {
  return <JewelleryPageContent />;
}
