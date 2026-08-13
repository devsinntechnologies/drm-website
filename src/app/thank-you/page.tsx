import type { Metadata } from "next";
import ThankYouContent from "@/components/demo/ThankYouContent";

export const metadata: Metadata = {
  title: "Demo booked | DigiNizam",
  description: "Your DigiNizam demo request was received. Our team will contact you shortly to confirm the walkthrough.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="bg-background">
      <ThankYouContent />
    </main>
  );
}
