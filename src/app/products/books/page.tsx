import type { Metadata } from "next";
import BooksPageContent from "@/components/books/BooksPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bookstore POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam bookstore POS for billing, book inventory and purchasing. Review catalogue records, barcode requirements and store reports in a demo.",
  path: "/products/books",
});

export default function BookShopSolutionPage() {
  return <BooksPageContent />;
}
