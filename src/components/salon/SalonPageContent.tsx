import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import SectionCopy from "@/components/common/SectionCopy";
import WorkflowSteps from "@/components/common/WorkflowSteps";
import MediaSlot from "@/components/common/MediaSlot";
import SiteCTA from "@/components/common/SiteCTA";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const salonFaqs: FaqItem[] = [
  {
    q: "What is salon POS software?",
    a: "Salon POS software records service and product sales, payments, retail inventory and reports in one system so salon owners can manage daily commercial activity more clearly.",
  },
  {
    q: "Can DigiNizam bill salon services and retail products?",
    a: "DigiNizam can be configured so services and retail products are recorded through the POS. The exact salon configuration should be confirmed in a demo.",
  },
  {
    q: "Can DigiNizam track salon retail inventory?",
    a: "Yes. DigiNizam inventory tools can track products such as cosmetics, shampoos and other retail stock used in the salon's sales workflow.",
  },
  {
    q: "Does DigiNizam include appointment booking and staff commissions?",
    a: "Appointment booking, staff commissions, memberships and package management are not part of the core salon billing workflow shown here. Ask our team during a demo whether these fit your salon's setup.",
  },
  {
    q: "Can DigiNizam support multiple salon branches?",
    a: "Yes. DigiNizam supports multi-store setups for connected branch-level sales, stock and reporting.",
  },
];

export default function SalonPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(salonFaqs)} />
      <PageHero
        label="Salon / SPA"
        title="Salon POS Software in Pakistan for Daily Salon Operations"
        description="Bring salon service billing, product sales, inventory, payments and branch reporting into one connected DigiNizam POS workflow."
      />

      <SectionCopy
        label="Overview"
        title="What Is Salon POS Software?"
        image="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Salon / SPA POS solution"
        imageBrief="Professional salon reception/cash desk with DigiNizam service + retail product billing screen; elegant salon environment, realistic staff/customer context."
      >
        <p>
          Salon POS software helps beauty businesses record service and product sales while
          keeping payments, retail inventory and daily reports organized. DigiNizam focuses on
          salon billing and retail operations — appointment booking, staff commissions,
          memberships and package management can be reviewed with our team based on your
          salon's setup.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Configure salon services and retail products.",
          "Record service/product sales through the POS.",
          "Apply supported payment methods or discounts.",
          "Keep retail product stock connected with sales and purchases.",
          "Review daily sales, stock and branch reports.",
        ]}
      />

      <SectionCopy label="Billing" title="Service & Product Billing in One POS">
        <p>
          Set up salon services and retail products as billable items so cashiers can record
          customer purchases from one checkout workflow. This keeps service revenue and product
          sales inside the same daily sales record.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="12–18 sec real-product clip: select a salon service + retail product → checkout/payment → show retail stock or daily sales report updated."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <SectionCopy
        label="Inventory"
        title="Retail Product Inventory for Salons"
        reverse
        image="https://images.unsplash.com/photo-1776651993626-7cc836bf03aa?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Salon / SPA inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam inventory/report screen focused on salon retail products such as shampoo, skincare or cosmetics; no appointment UI unless product confirms it."
      >
        <p>
          Track shampoos, skincare, cosmetics and other products sold or stocked at the salon
          using DigiNizam inventory tools. Stock visibility helps teams know what is available
          and what may need replenishment.
        </p>
      </SectionCopy>

      <SectionCopy label="Payments" title="Flexible Payments, Discounts & Offers">
        <p>
          Use supported payment options and discounts during checkout so salon teams can handle
          everyday customer billing without maintaining separate manual discount records.
        </p>
      </SectionCopy>

      <SectionCopy label="Reporting" title="Daily Sales & Inventory Reports" reverse>
        <p>
          Review sales, product movement and branch activity in the reports available in the
          live DigiNizam workspace. This gives owners a clearer daily view than relying only on
          handwritten registers.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-branch" title="Multi-Branch Visibility for Salon Groups">
        <p>
          For salons operating more than one location, DigiNizam supports multi-store visibility
          so owners can review branch-level sales, stock and reports from a connected setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Salon / SPA For?" reverse>
        <p>
          Beauty salons, barbershops and spas that need organized billing, product inventory,
          payments and multi-branch reporting from one POS platform.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact modules for your setup.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "salon inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Salon POS"
        title="Salon and spa software questions"
        description="Direct answers for common salon and spa software questions."
        items={salonFaqs}
      />

      <SiteCTA
        title="See DigiNizam for Your Salon or Spa"
        description="Book a free demo to review billing, product inventory, payments, reports and the exact modules available for your salon or spa workflow."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
