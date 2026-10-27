import type { Metadata } from "next";
import AutomobilePageContent from "@/components/automobile/AutomobilePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Auto Parts POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam auto parts POS for spare parts billing, item inventory and purchasing. Review catalogue, barcode and branch requirements during a demo.",
  path: "/products/automobile",
});

export default function AutomobileSolutionPage() {
  return <AutomobilePageContent />;
}
