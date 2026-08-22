import type { Metadata } from "next";
import FurniturePageContent from "@/components/furniture/FurniturePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Store POS Software Pakistan | DigiNizam",
  description:
    "Manage furniture-store billing, showroom and warehouse stock, supplier purchases, invoices, reports and multi-branch visibility with DigiNizam POS.",
  path: "/products/furniture",
});

export default function FurnitureSolutionPage() {
  return <FurniturePageContent />;
}
