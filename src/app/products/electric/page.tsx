import type { Metadata } from "next";
import ElectricPageContent from "@/components/electric/ElectricPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Electrical Store POS Software Pakistan | DigiNizam",
  description:
    "Manage electrical store billing, SKU inventory, supplier purchases, stock alerts, reports and multi-branch operations with DigiNizam POS software.",
  path: "/products/electric",
});

export default function ElectricSolutionPage() {
  return <ElectricPageContent />;
}
