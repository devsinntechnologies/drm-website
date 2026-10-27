import type { Metadata } from "next";
import FurniturePageContent from "@/components/furniture/FurniturePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Store POS & Inventory Software | DigiNizam",
  description:
    "Review DigiNizam furniture store POS for showroom billing, item inventory and reports. Discuss stock locations, supplier purchases and your setup in a demo.",
  path: "/products/furniture",
});

export default function FurnitureSolutionPage() {
  return <FurniturePageContent />;
}
