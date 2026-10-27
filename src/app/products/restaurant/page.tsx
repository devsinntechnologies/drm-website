import type { Metadata } from "next";
import RestaurantPageContent from "@/components/restaurant/RestaurantPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant POS & Management Software | DigiNizam",
  description:
    "Explore DigiNizam restaurant POS for orders, billing, kitchen workflow and reports. Review inventory, connectivity and outlet requirements in a demo.",
  path: "/products/restaurant",
});

export default function RestaurantSolutionPage() {
  return <RestaurantPageContent />;
}
