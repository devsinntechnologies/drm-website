import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactStats from "@/components/contact/ContactStats";
import ContactForm from "@/components/contact/ContactForm";
import ContactWhyUs from "@/components/contact/ContactWhyUs";
import ContactFAQ from "@/components/contact/ContactFAQ";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact DigiNizam | POS Software Pakistan",
  description:
    "Contact DigiNizam about restaurant POS, billing, inventory and implementation. Book a demo or send a message—we reply on working days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <ContactStats />
      <ContactForm />
      <ContactWhyUs />
      <ContactFAQ />
      <SiteCTA
        title="Prefer a live walkthrough?"
        description="Book a free demo and see DigiNizam configured for your business—in under 30 minutes."
      />
    </main>
  );
}
