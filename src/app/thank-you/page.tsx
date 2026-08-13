import type { Metadata } from "next";
import ThankYouContent from "@/components/demo/ThankYouContent";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Demo booked | DigiNizam",
  description:
    "Your DigiNizam demo request was received. Our team will contact you shortly to confirm the walkthrough.",
  path: "/thank-you",
  index: false,
});

export default function ThankYouPage() {
  return (
    <main className="bg-background">
      <ThankYouContent />
    </main>
  );
}
