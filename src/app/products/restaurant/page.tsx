import type { Metadata } from "next";
import RestaurantPageContent from "@/components/restaurant/RestaurantPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant Management Software Pakistan | DigiNizam",
  description:
    "Manage restaurant POS, billing, orders, kitchen workflow, inventory and reporting with DigiNizam restaurant management software built for daily operations.",
  path: "/products/restaurant",
});

export default function RestaurantSolutionPage() {
  return <RestaurantPageContent />;
}
