import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant POS & Inventory Insights | DigiNizam",
  description:
    "Practical guides on restaurant POS, inventory, billing, kitchen workflows and smarter day-to-day operations from the DigiNizam team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="bg-background">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
