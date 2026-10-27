import type { Metadata } from "next";
import CafePageContent from "@/components/cafe/CafePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cafe & Coffee Shop POS Software | DigiNizam",
  description:
    "Review DigiNizam cafe POS for coffee shop orders, billing, preparation tickets and reports. Confirm stock, connectivity and outlet requirements in a demo.",
  path: "/products/cafe",
});

export default function CafeSolutionPage() {
  return <CafePageContent />;
}
