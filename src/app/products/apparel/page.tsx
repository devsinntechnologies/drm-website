import type { Metadata } from "next";
import ApparelPageContent from "@/components/apparel/ApparelPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Apparel & Garments POS Software Pakistan | DigiNizam",
  description:
    "POS software for apparel stores and garment shops with matrix size/color inventory, barcode billing, and FBR-compliant reporting.",
  path: "/products/apparel",
});

export default function ApparelSolutionPage() {
  return <ApparelPageContent />;
}
