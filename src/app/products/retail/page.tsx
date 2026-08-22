import type { Metadata } from "next";
import RetailPageContent from "@/components/retail/RetailPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Retail POS Software in Pakistan | DigiNizam",
  description:
    "Manage retail billing, inventory, stock alerts, sales and multi-store operations with DigiNizam retail POS software in Pakistan. Book a free demo.",
  path: "/products/retail",
});

export default function RetailSolutionPage() {
  return <RetailPageContent />;
}
