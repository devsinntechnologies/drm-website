import type { Metadata } from "next";
import SalonPageContent from "@/components/salon/SalonPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Salon POS & Billing Software | DigiNizam",
  description:
    "Explore DigiNizam salon POS for service billing, product sales and stock reports. Review your salon checkout requirements and available configuration in a demo.",
  path: "/products/salon",
});

export default function SalonSolutionPage() {
  return <SalonPageContent />;
}
