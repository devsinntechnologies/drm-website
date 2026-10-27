import type { Metadata } from "next";
import ManufacturingPageContent from "@/components/manufacturing/ManufacturingPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Manufacturing Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam inventory software for manufacturers managing materials, finished goods, purchasing and invoices. Review the available stock workflow in a demo.",
  path: "/products/manufacturing",
});

export default function ManufacturingSolutionPage() {
  return <ManufacturingPageContent />;
}
