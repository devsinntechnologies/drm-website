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

/**
 * Access is enforced in middleware via a one-time cookie set after successful demo submit.
 * Unauthorized refresh/direct visits never render this page (no GA page_view / lead).
 * generate_lead is NOT fired here — Demo lead is configured in GA4 for /thank-you.
 */
export default function ThankYouPage() {
  return (
    <main className="bg-background">
      <ThankYouContent />
    </main>
  );
}
