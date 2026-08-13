import type { Metadata } from "next";
import FeaturesPageContent from "@/components/features/FeaturesPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant Inventory Software Pakistan | DigiNizam",
  description:
    "Manage restaurant stock and inventory with DigiNizam. Improve inventory visibility, connect stock with operations and reduce manual inventory work.",
  path: "/features",
});

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
