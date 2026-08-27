import type { Metadata } from "next";
import AutomobilePageContent from "@/components/automobile/AutomobilePageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Automobile & Auto Parts POS Software Pakistan | DigiNizam",
  description:
    "POS and inventory software for auto parts stores and dealership workshops, with supplier ledgers, barcode billing, and multi-branch stock sync.",
  path: "/products/automobile",
});

export default function AutomobileSolutionPage() {
  return <AutomobilePageContent />;
}
