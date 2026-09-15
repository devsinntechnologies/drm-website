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
    a: "A POS system in Pakistan usually combines software, terminals, printers and setup. Hardware and the number of outlets change the total more than a single advertised figure. DigiNizam POS software pricing is quoted for your retail stores, restaurants, billing counters and inventory needs on a demo—we do not publish a one-size market price that would mix hardware bundles with software-only plans.",
  },
  {
    q: "How much does POS software cost?",
    a: "POS software cost is the subscription or licence for billing, inventory and reporting. It is separate from printers, cash drawers and on-site setup. DigiNizam shares confirmed plan inclusions and a price for your setup during a demo so you can compare software cost clearly against general market POS packages that bundle hardware.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "POS Software Price in Pakistan | DigiNizam Pricing",
  description:
    "See DigiNizam POS software pricing, plan inclusions and options for retail stores, restaurants and growing multi-location businesses.",
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
        description="Get a confirmed quote for POS, billing and inventory for retail stores, restaurants and multi-location businesses—not a placeholder price."
      />
    </main>
  );
}
