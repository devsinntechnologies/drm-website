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

const toysFaqs: FaqItem[] = [
  {
    q: "What is toy store POS software?",
    a: "Toy store POS software records sales and connects them with inventory, purchasing, discounts and reporting so toy retailers can manage daily store operations from one system.",
  },
  {
    q: "What is a toy store POS system?",
    a: "A toy store POS system is software that helps toy shops manage billing, sales, inventory, and reporting in one place. DigiNizam is designed to support these everyday retail operations.",
  },
  {
    q: "What is the best POS software for a toy shop?",
    a: "The right system depends on catalogue size, billing workflow, inventory accuracy, purchasing, seasonal promotions, low-stock visibility, reporting and number of locations. Compare these requirements before choosing a POS.",
  },
  {
    q: "Can DigiNizam handle a large toy catalogue?",
    a: "Review your actual toy catalogue and category structure in a demo. Confirm item limits, import requirements, supported fields and performance for the selected setup before rollout.",
  },
  {
    q: "Can toy store software manage inventory?",
    a: "Yes. DigiNizam supports retail inventory management so toy stores can maintain product records, monitor stock, and review inventory-related information alongside sales activity.",
  },
  {
    q: "Does DigiNizam support low-stock monitoring for toy stores?",
    a: "Yes. DigiNizam includes low-stock alerts to help teams identify popular products that may need restocking.",
  },
  {
    q: "Can a toy store run seasonal discounts through DigiNizam?",
    a: "Review the discount options available in the selected DigiNizam setup using your seasonal offer examples. Confirm the promotion rules you need before rollout.",
  },
  {
    q: "Can DigiNizam manage multiple toy-store branches?",
    a: "Yes. DigiNizam supports connected branch-level stock, sales and reporting across multiple outlets.",
  },
  {
    q: "What features should toy store POS software have?",
    a: "Important features include fast billing, product and category inventory, purchasing, discounts, low-stock monitoring, reporting and multi-store visibility.",
  },
];

export default function ToysPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(toysFaqs)} />
      <PageHero
        label="Toys Store"
        title="Toy Store POS Software for Billing & Inventory"
        description="Connect toy and gift sales with product records and stock visibility. Review purchasing, supported discounts and reports for everyday store decisions."
      />

      <SectionCopy label="Overview" title="What Is Toy Store POS Software?">
        <p>
          Toy store POS software records checkout sales and links them with product inventory,
          purchasing and reports. Toy retailers can use these records to review stock by item or
          category and plan for seasonal demand without relying on separate sales and stock
          lists.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Checkout"
        title="Fast Checkout for Busy Toy & Gift Stores"
        reverse
        image="https://images.unsplash.com/photo-1774979300729-4eeeb4e8ad01?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Toys Store POS solution"
        imageBrief="Bright but professional toy-store checkout with DigiNizam POS categories/product grid; avoid childish design, keep business-focused."
      >
        <p>
          Process toy-store counter sales through one POS workflow while keeping transactions
          connected with inventory and reporting.
        </p>
      </SectionCopy>

      <SectionCopy label="Catalogue" title="Inventory Across Many Toy Categories">
        <p>
          Organize toys and gift items by product and category while keeping stock connected
          with sales, purchases and returns.
        </p>
      </SectionCopy>

      <SectionCopy label="Promotions" title="Discounts & Promotions for Seasonal Sales" reverse>
        <p>
          Review the supported discounts for seasonal or promotional pricing using your offer
          examples, instead of maintaining separate manual discount lists.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Low-stock"
        title="Low-Stock Monitoring for Popular Items"
        image="https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Toys Store inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam stock or low-stock view showing multiple toy categories and, where available, branch stock or promotions."
      >
        <p>
          Use low-stock alerts to identify popular items that may need replenishment before
          high-demand periods.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="12–18 sec real-product clip: scan toy → apply supported discount → take payment → show stock updated / low-stock view."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Add toy products and categories.",
          "Receive inventory from suppliers.",
          "Process customer sales through the POS.",
          "Apply supported seasonal discounts or offers.",
          "Monitor low-stock items and review branch reports.",
        ]}
      />

      <SectionCopy label="Multi-store" title="Multi-Store Toy Retail Management">
        <p>
          Monitor connected branch-level stock, sales and reporting from a centralized view.
        </p>
      </SectionCopy>

      <SectionCopy label="Reporting" title="Sales & Stock Reports" reverse>
        <p>
          Review product sales, stock movement and branch activity using the reports available
          in the live DigiNizam workspace.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Toys Store For?">
        <p>
          Toy shops, gift stores and multi-branch specialty retailers that need fast billing,
          inventory control and seasonal stock visibility.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact workflow for your store.
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Business Setup" reverse>
        <p>
          Toy and gift stores in Pakistan can review their product catalogue, purchasing and
          seasonal sales requirements in a DigiNizam demo before agreeing on the setup and price.
        </p>
        <IndustryContextLinks peer="retail" />
      </SectionCopy>

      <SeoFaq
        label="Toy Store POS"
        title="Toy store software questions"
        description="Direct answers for common toy and gift store software questions."
        items={toysFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Toy Store"
        description="Book a demo to review your toy catalogue, sales, stock and seasonal discount requirements. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
