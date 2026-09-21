import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import PricingTestimonial from "@/components/pricing/PricingTestimonial";
import PricingSeoSections from "@/components/pricing/PricingSeoSections";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import JsonLd from "@/components/seo/JsonLd";
import SiteCTA from "@/components/common/SiteCTA";
import { faqJsonLd, pageMetadata, type FaqItem } from "@/lib/seo";

const pricingFaqs: FaqItem[] = [
  {
    q: "How much does a POS system cost in Pakistan?",
    a: "A POS system in Pakistan can include software, terminals, printers, setup and other hardware depending on the business. DigiNizam pricing is configured according to your outlets, counters, inventory requirements and selected modules rather than using one price for every business.",
  },
  {
    q: "How much does POS software cost?",
    a: "POS software cost depends on the subscription or plan, number of outlets, billing terminals, inventory requirements and additional modules. DigiNizam confirms the appropriate setup and pricing based on your business requirements.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "POS Software Pricing in Pakistan | DigiNizam",
  description:
    "Explore DigiNizam POS software pricing for retail stores, restaurants, pharmacies and multi-location businesses. Compare plans, features and setup options.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="bg-background">
      <JsonLd data={faqJsonLd(pricingFaqs)} />
      <PricingHero />
      <PricingPlans />
      <PricingSeoSections />
      <PricingBenefits />
      <PricingTestimonial />
      <SeoFaq
        title="Pricing FAQ"
        description="How DigiNizam POS software pricing differs from a generic POS system cost in Pakistan."
        items={pricingFaqs}
      />
      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/products/restaurant", label: "restaurant management software" },
          { href: "/demo", label: "book a demo" },
        ]}
      />
      <SiteCTA
        title="Book a Demo"
        description="Get a confirmed quote for your POS, billing, inventory and business management requirements."
      />
    </main>
  );
}
