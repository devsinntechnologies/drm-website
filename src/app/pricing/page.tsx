import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";
import PricingSeoSections from "@/components/pricing/PricingSeoSections";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata, type FaqItem } from "@/lib/seo";

const pricingFaqs: FaqItem[] = [
  {
    "q": "How much does POS software cost?",
    "a": "DigiNizam does not currently have fixed published pricing. Book a demo first. If you want to proceed, discuss your business requirements with the team and agree on pricing."
  },
  {
    "q": "What affects POS software pricing?",
    "a": "Your outlets, billing counters, selected modules, inventory workflows, hardware needs and setup requirements shape the pricing discussion. DigiNizam reviews these requirements with you after the demo if you choose to proceed."
  },
  {
    "q": "Is POS hardware included in software pricing?",
    "a": "Hardware is not assumed to be included in software pricing. Confirm your specific quote for terminals, receipt printers, scanners and any other devices, along with setup and support. Use the written agreement to establish what is included."
  },
  {
    "q": "How do I get a DigiNizam quote?",
    "a": "Book a Demo to Discuss Pricing. Start with a DigiNizam walkthrough. If you want to proceed, share your business type, outlets, counters and required workflows, then discuss and agree on pricing with the team."
  }
];

export const metadata: Metadata = pageMetadata({
  title: "POS Software Pricing | DigiNizam",
  description:
    "Book a DigiNizam demo first. If you choose to proceed, discuss your requirements with our team and agree on pricing for your business.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="bg-background">
      <PricingHero />
      <PricingPlans />
      <PricingSeoSections />
      <PricingBenefits />
      <SeoFaq
        title="Pricing FAQ"
        description="Find direct answers about cost, hardware and requesting a quote below."
        items={pricingFaqs}
      />
      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software" },
          { href: "/features", label: "POS and inventory features" },
          { href: "/industries", label: "industry workflows" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/products/restaurant", label: "restaurant POS software" },
          { href: "/demo", label: "get a POS software demo" },
        ]}
      />
      <SiteCTA
        title="Book a Demo to Discuss Pricing"
        primaryCtaLabel="Book a Demo to Discuss Pricing"
        description="See the product first. If you choose to proceed, discuss your requirements and agree on pricing with the DigiNizam team."
      />
    </div>
  );
}
