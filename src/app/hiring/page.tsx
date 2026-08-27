import type { Metadata } from "next";
import HiringPageContent from "@/components/hiring/HiringPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "We Are Hiring | DigiNizam",
  description: "Join the DigiNizam team. Open roles in sales, implementation, and support.",
  path: "/hiring",
});

export default function HiringPage() {
  return <HiringPageContent />;
}
