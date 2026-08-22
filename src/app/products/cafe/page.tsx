import type { Metadata } from "next";
import CafePageContent from "@/components/cafe/CafePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cafe POS Software in Pakistan | DigiNizam",
  description:
    "Manage cafe billing, orders, KOT/KDS, inventory, offline-ready sales and reporting with DigiNizam cafe POS software in Pakistan.",
  path: "/products/cafe",
});

export default function CafeSolutionPage() {
  return <CafePageContent />;
}
