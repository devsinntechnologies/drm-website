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
    q: "How much does POS software cost?",
    a: "POS software pricing depends on the plan, features, users or terminals, locations and setup requirements. DigiNizam confirms the appropriate configuration and quote for the business.",
  },
  {
    q: "What affects POS software pricing?",
    a: "The number of outlets, billing counters, inventory requirements, business modules, setup complexity and support needs all influence the final price. DigiNizam matches the setup to the workflow your business requires.",
  },
  {
    q: "Is POS hardware included in software pricing?",
    a: "Hardware should be confirmed separately from software unless a plan explicitly states otherwise. The final hardware scope depends on the selected setup and business operations.",
  },
  {
    q: "How do I get a DigiNizam quote?",
    a: "Book a demo so the team can review your outlets, billing counters, inventory and required modules, then confirm the configuration and pricing that fits your business.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "POS Software Pricing & Plans | DigiNizam",
  description:
    "Explore DigiNizam POS software plans and the factors that affect pricing, including business size, outlets, terminals, modules, inventory needs and setup requirements.",
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
          { href: "/", label: "POS software" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/products/restaurant", label: "restaurant POS software" },
          { href: "/demo", label: "get a POS software demo" },
        ]}
      />
      <SiteCTA
        title="Book a Demo"
        description="Get a confirmed quote for your POS, billing, inventory and business management requirements."
      />
    </main>
  );
}
