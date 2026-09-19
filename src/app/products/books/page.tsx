import type { Metadata } from "next";
import BooksPageContent from "@/components/books/BooksPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Store POS Software in Pakistan | DigiNizam",
  description:
    "Book store POS software in Pakistan for billing, catalogue inventory, ISBN barcode checkout, publisher purchases and multi-branch reporting. Book a free demo.",
  path: "/products/books",
});

export default function BookShopSolutionPage() {
  return <BooksPageContent />;
}
