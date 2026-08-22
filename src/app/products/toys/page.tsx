import type { Metadata } from "next";
import ToysPageContent from "@/components/toys/ToysPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Toy Store POS Software in Pakistan | DigiNizam",
  description:
    "Manage toy-store billing, stock, low-stock alerts, discounts, reports and multiple outlets with DigiNizam POS software for retail businesses in Pakistan.",
  path: "/products/toys",
});

export default function ToysSolutionPage() {
  return <ToysPageContent />;
}
