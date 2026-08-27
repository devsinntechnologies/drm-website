import type { Metadata } from "next";
import SnookerPageContent from "@/components/snooker/SnookerPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Snooker & Pool Club POS Software Pakistan | DigiNizam",
  description:
    "POS software for snooker and pool clubs with per-table and per-branch pricing, session timing, and daily billing built for club operations.",
  path: "/products/snooker",
});

export default function SnookerPosPage() {
  return <SnookerPageContent />;
}
