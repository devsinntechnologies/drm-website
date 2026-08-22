import type { Metadata } from "next";
import SalonPageContent from "@/components/salon/SalonPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Salon POS Software in Pakistan | DigiNizam",
  description:
    "Manage salon billing, retail product inventory, payments, discounts, reports and multi-branch visibility with DigiNizam POS software in Pakistan.",
  path: "/products/salon",
});

export default function SalonSolutionPage() {
  return <SalonPageContent />;
}
