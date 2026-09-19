import type { Metadata } from "next";
import ElectricPageContent from "@/components/electric/ElectricPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Electrical Store POS Software in Pakistan | DigiNizam",
  description:
    "Electrical store POS software in Pakistan for billing, SKU inventory, supplier purchases, low-stock monitoring and multi-branch reporting. Book a free demo.",
  path: "/products/electric",
});

export default function ElectricSolutionPage() {
  return <ElectricPageContent />;
}
