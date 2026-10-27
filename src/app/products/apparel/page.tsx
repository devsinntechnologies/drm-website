import type { Metadata } from "next";
import ApparelPageContent from "@/components/apparel/ApparelPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Apparel & Clothing Store POS Software | DigiNizam",
  description:
    "Review DigiNizam apparel POS for clothing store billing, item inventory and reports. Confirm size, colour, barcode and branch requirements during a demo.",
  path: "/products/apparel",
});

export default function ApparelSolutionPage() {
  return <ApparelPageContent />;
}
