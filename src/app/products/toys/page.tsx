import type { Metadata } from "next";
import ToysPageContent from "@/components/toys/ToysPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Toy Store POS Software in Pakistan | DigiNizam",
  description:
    "Toy store POS software in Pakistan for billing, product inventory, seasonal discounts, low-stock monitoring and multi-store reporting. Book a free demo.",
  path: "/products/toys",
});

export default function ToysSolutionPage() {
  return <ToysPageContent />;
}
