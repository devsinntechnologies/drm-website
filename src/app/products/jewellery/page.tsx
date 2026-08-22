import type { Metadata } from "next";
import JewelleryPageContent from "@/components/jewellery/JewelleryPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Jewellery POS Software in Pakistan | DigiNizam",
  description:
    "Manage jewellery billing, item inventory, barcode labels, payments, reports and multi-branch visibility with DigiNizam POS software in Pakistan.",
  path: "/products/jewellery",
});

export default function JewellerySolutionPage() {
  return <JewelleryPageContent />;
}
