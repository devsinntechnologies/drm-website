import type { Metadata } from "next";
import ApparelPageContent from "@/components/apparel/ApparelPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Apparel & Garments POS Software Pakistan | DigiNizam",
  description:
    "Explore POS software for apparel stores and garment shops. Discuss size/color inventory, barcode billing and reporting requirements in a DigiNizam demo.",
  path: "/products/apparel",
});

export default function ApparelSolutionPage() {
  return <ApparelPageContent />;
}
