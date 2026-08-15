import type { Metadata } from "next";
import ContactThankYouContent from "@/components/contact/ContactThankYouContent";
import ThankYouGate from "@/components/demo/ThankYouGate";
import { CONTACT_SUCCESS_TOKEN_KEY } from "@/lib/form-success";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Message sent | DigiNizam",
  description:
    "Your DigiNizam contact message was received. Our team will reply shortly.",
  path: "/contact/thank-you",
  index: false,
});

export default function ContactThankYouPage() {
  return (
    <ThankYouGate
      tokenKey={CONTACT_SUCCESS_TOKEN_KEY}
      redirectTo="/contact"
      leadSource="contact"
    >
      <main className="bg-background">
        <ContactThankYouContent />
      </main>
    </ThankYouGate>
  );
}
