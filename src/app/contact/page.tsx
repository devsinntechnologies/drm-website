import ContactHero from "@/components/contact/ContactHero";
import ContactStats from "@/components/contact/ContactStats";
import ContactWhyUs from "@/components/contact/ContactWhyUs";
import ContactForm from "@/components/contact/ContactForm";
import ContactOfficeInfo from "@/components/contact/ContactOfficeInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <ContactStats />
      <ContactWhyUs />
      <ContactForm />
      <ContactOfficeInfo />
      <ContactFAQ />
    </main>
  );
}
