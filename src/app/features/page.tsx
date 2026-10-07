import type { Metadata } from "next";
import FeaturesPageContent from "@/components/features/FeaturesPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "POS & Inventory Management Software Features | DigiNizam",
  description:
    "Explore DigiNizam POS and inventory management features for billing, stock, reporting, offline-ready operations and multi-location workflows.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
