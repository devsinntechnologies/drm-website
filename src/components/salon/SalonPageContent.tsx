import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import SectionCopy from "@/components/common/SectionCopy";
import WorkflowSteps from "@/components/common/WorkflowSteps";
import MediaSlot from "@/components/common/MediaSlot";
import SiteCTA from "@/components/common/SiteCTA";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
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
    a: "Appointment booking, staff commissions, memberships and packages are not included in the core salon billing scope described here. Tell the team if your salon needs those functions so the requirements can be assessed separately before you choose a setup.",
  },
  {
    q: "Can DigiNizam support multiple salon branches?",
    a: "Yes. DigiNizam supports multi-branch setups for connected branch-level sales, stock and reporting.",
  },
];

export default function SalonPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(salonFaqs)} />
      <PageHero
        label="Salon / SPA"
        title="Salon POS Software for Service Billing & Product Sales"
        description="Keep service billing, retail product sales and daily reports organised. Review the billable items, stock records and branch requirements for your salon setup."
      />

      <SectionCopy
        label="Overview"
        title="What Is Salon POS Software?"
        image="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Salon / SPA POS solution"
        imageBrief="Professional salon reception/cash desk with DigiNizam service + retail product billing screen; elegant salon environment, realistic staff/customer context."
      >
        <p>
          Salon POS software records service and retail product sales and keeps billing, product
          stock and business reports organised. DigiNizam focuses on that commercial workflow.
          Appointment booking, commissions, memberships and packages are separate requirements
          from the core billing scope described here.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Configure salon services and retail products.",
          "Record service/product sales through the POS.",
          "Record payment details and apply supported discounts.",
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

      <SectionCopy label="Payments" title="Payment Records and Supported Discounts">
        <p>
          Record payment details and the discounts available in the selected checkout
          configuration. DigiNizam does not provide online payment integration.
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
          For salons operating more than one location, DigiNizam supports multi-branch
          visibility so owners can review branch-level sales, stock and reports from a connected
          setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Salon / SPA For?" reverse>
        <p>
          Beauty salons, barbershops and spas that need organized billing, product inventory,
          payment records and reporting from one POS platform.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact modules for your setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Business Setup">
        <p>
          Salons, barbershops and spas in Pakistan can review service billing and retail product
          inventory with DigiNizam. Confirm any booking or commission requirements separately.
        </p>
        <IndustryContextLinks />
      </SectionCopy>

      <SeoFaq
        label="Salon POS"
        title="Salon and spa software questions"
        description="Direct answers for common salon and spa software questions."
        items={salonFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Salon"
        description="Book a demo to review service billing, retail product inventory and reports. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
