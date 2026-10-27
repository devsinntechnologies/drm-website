import type { Metadata } from "next";
import SnookerPageContent from "@/components/snooker/SnookerPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Snooker Club Management & Billing Software | DigiNizam",
  description:
    "Explore DigiNizam snooker club software for table sessions, game billing and receipts. Review Single, Double and timed Century workflows in a demo.",
  path: "/products/snooker",
});

export default function SnookerPosPage() {
  return <SnookerPageContent />;
}
