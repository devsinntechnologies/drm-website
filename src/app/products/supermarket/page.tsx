import type { Metadata } from "next";
import SupermarketPageContent from "@/components/supermarket/SupermarketPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Supermarket POS Software Pakistan | DigiNizam",
  description:
    "Supermarket POS software in Pakistan for fast billing, barcode inventory, supplier purchases, stock control, reports and multi-branch operations. Book a free demo.",
  path: "/products/supermarket",
});

export default function SupermarketSolutionPage() {
  return <SupermarketPageContent />;
}
