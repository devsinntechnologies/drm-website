import type { Metadata } from "next";
import AutomobilePageContent from "@/components/automobile/AutomobilePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Automobile & Auto Parts POS Software in Pakistan | DigiNizam",
  description:
    "Auto parts POS software in Pakistan for billing, spare parts inventory, barcode checkout, supplier purchases and multi-branch stock sync. Book a free demo.",
  path: "/products/automobile",
});

export default function AutomobileSolutionPage() {
  return <AutomobilePageContent />;
}
