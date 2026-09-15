import type { Metadata } from "next";
import RetailPageContent from "@/components/retail/RetailPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Retail POS Software in Pakistan | DigiNizam",
  description:
    "DigiNizam retail POS software in Pakistan connects billing, inventory, stock alerts, reporting and multi-store operations in one system. Book a free demo.",
  path: "/products/retail",
});

export default function RetailSolutionPage() {
  return <RetailPageContent />;
}
