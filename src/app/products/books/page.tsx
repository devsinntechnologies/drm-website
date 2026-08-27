import type { Metadata } from "next";
import BooksPageContent from "@/components/books/BooksPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Store POS Software Pakistan | DigiNizam",
  description:
    "POS software for bookshops and publishers with inventory tracking, barcode billing, supplier management, and FBR-compliant tax reporting.",
  path: "/products/books",
});

export default function BookShopSolutionPage() {
  return <BooksPageContent />;
}
