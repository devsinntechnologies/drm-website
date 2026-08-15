import type { Metadata } from "next";
import ThankYouContent from "@/components/demo/ThankYouContent";
import ThankYouGate from "@/components/demo/ThankYouGate";
import {
  DEMO_SUCCESS_TOKEN_KEY,
} from "@/lib/form-success";
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
    <ThankYouGate
      tokenKey={DEMO_SUCCESS_TOKEN_KEY}
      redirectTo="/demo"
      leadSource="demo"
    >
      <main className="bg-background">
        <ThankYouContent />
      </main>
    </ThankYouGate>
  );
}
