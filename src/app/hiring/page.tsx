import type { Metadata } from "next";
import HiringPageContent from "@/components/hiring/HiringPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers at DigiNizam | We Are Hiring",
  description:
    "Join the DigiNizam team building POS and business management software. View current openings in sales, implementation and support, or send your CV.",
  path: "/hiring",
});

export default function HiringPage() {
  return <HiringPageContent />;
}
