import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactStats from "@/components/contact/ContactStats";
import ContactForm from "@/components/contact/ContactForm";
import ContactWhyUs from "@/components/contact/ContactWhyUs";
import ContactFAQ from "@/components/contact/ContactFAQ";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact DigiNizam | POS & Business Management Software",
  description:
    "Contact DigiNizam about POS, billing, inventory and implementation for your business. Book a demo or send our team a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <ContactHero />
      <ContactStats />
      <ContactForm />
      <ContactWhyUs />
      <ContactFAQ />
      <SiteCTA
        title="Prefer a live walkthrough?"
        description="Book a free demo to review your workflow, then discuss your requirements and agree on pricing if you choose to proceed."
      />
    </div>
  );
}
