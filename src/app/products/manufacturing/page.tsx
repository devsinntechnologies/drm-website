import type { Metadata } from "next";
import ManufacturingPageContent from "@/components/manufacturing/ManufacturingPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Manufacturing Inventory Software Pakistan | DigiNizam",
  description:
    "Connect manufacturing inventory, purchasing, warehouse stock, sales, invoicing and reporting with DigiNizam business software for Pakistan.",
  path: "/products/manufacturing",
});

export default function ManufacturingSolutionPage() {
  return <ManufacturingPageContent />;
}
