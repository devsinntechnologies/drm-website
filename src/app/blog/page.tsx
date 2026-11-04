import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "POS and Inventory Guides for Retail and Restaurants | DigiNizam",
  description:
    "Explore practical guides to retail and restaurant POS, inventory, billing and software selection. Learn what to check before choosing a setup.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="bg-background">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}
