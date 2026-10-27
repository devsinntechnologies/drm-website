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

const electricFaqs: FaqItem[] = [
  {
    q: "What is electrical store POS software?",
    a: "Electrical store POS software is a retail billing and inventory system that helps electrical shops manage sales, product stock, supplier purchasing and reporting from one platform.",
  },
  {
    q: "What is the best POS software for an electrical shop?",
    a: "The right system depends on SKU volume, billing workflow, inventory accuracy, supplier purchasing, low-stock visibility, reporting and number of locations. Compare these requirements before choosing a POS.",
  },
  {
    q: "Can electrical store POS software manage inventory?",
    a: "Yes. DigiNizam connects product inventory with sales, purchases and returns so electrical stores can maintain clearer stock visibility.",
  },
  {
    q: "Can POS software track electrical products by SKU?",
    a: "Yes. DigiNizam's electrical-store workflow organizes products by SKU and category and tracks stock as sales, purchases and returns are recorded.",
  },
  {
    q: "Does electrical store POS support low-stock monitoring?",
    a: "Yes. DigiNizam includes low-stock alerts to help teams identify products that may need replenishment.",
  },
  {
    q: "Can electrical store POS manage multiple branches?",
    a: "Yes. DigiNizam supports connected branch-level inventory, sales and reporting for businesses with more than one outlet or stock location.",
  },
  {
    q: "Can electrical store POS manage suppliers and purchases?",
    a: "Yes. DigiNizam connects supplier purchases and stock receiving with inventory records so teams can track what has been ordered and received.",
  },
  {
    q: "Does electrical store POS support barcode billing?",
    a: "Yes. DigiNizam supports barcode billing. Check your item barcodes and scanner with sample electrical products during the demo. Unit conversions, weighing scales and other specialist hardware need separate confirmation.",
  },
  {
    q: "Does DigiNizam track serial numbers or warranties?",
    a: "Serial-number and warranty tracking are not part of the current DigiNizam electrical-store workflow. Contact the team if your store requires these capabilities.",
  },
  {
    q: "What features should electrical store POS software have?",
    a: "Review counter billing, item or SKU records, purchasing, receiving, low-stock visibility, reports and locations. Electrical supplies can use different sale units, so confirm unit handling, cable-length requirements and hardware before selecting a setup.",
  },
];

export default function ElectricPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(electricFaqs)} />
      <PageHero
        label="Electric Store"
        title="Electrical Store POS Software for Billing & Inventory"
        description="Organise electrical product records, counter bills and stock activity in one workflow. Review purchasing, item units and reporting for your shop."
      />

      <SectionCopy label="Overview" title="What Is Electrical Store POS Software?">
        <p>
          Electrical store POS software connects counter billing with product records, inventory
          and purchasing. It helps electrical supply shops organise sales and stock by item or
          SKU. Specialist functions such as cable-length conversion, serial numbers and
          warranties need a separate capability check.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Inventory"
        title="SKU & Category-Based Inventory"
        reverse
        image="https://images.unsplash.com/photo-1625276254563-f0fbbf66a5e7?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Electric Store POS solution"
        imageBrief="Electrical store shelves with switches, bulbs, cables or small electronics plus DigiNizam product/SKU inventory screen; professional and realistic."
      >
        <p>
          Organize electrical products by SKU and category while keeping stock records connected
          with sales, purchases and returns.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Purchasing"
        title="Supplier Purchases & Stock Receiving"
        image="https://images.unsplash.com/photo-1777479051188-0daf7b2d8baa?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Electric Store inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam purchase/stock screen showing supplier receiving, low-stock status or multi-location stock where available."
      >
        <p>
          Connect supplier purchasing with stock receiving so teams can track ordered and
          received products in the same workflow.
        </p>
      </SectionCopy>

      <SectionCopy label="Low-stock" title="Low-Stock Monitoring for High-Variety Inventory" reverse>
        <p>
          Use low-stock alerts to identify products that may need replenishment before a
          shortage reaches the counter.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="15–20 sec real-product clip: search/scan SKU → create bill → stock changes → open low-stock or purchase/receiving view."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <SectionCopy label="Billing" title="Counter Billing for Electrical Supply Shops">
        <p>
          Use DigiNizam POS for electrical counter sales, invoices and daily transaction records
          while keeping billing connected with stock and reporting.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-location" title="Multi-Branch & Multi-Location Visibility" reverse>
        <p>
          Monitor connected branch-level inventory, sales and reports from a centralized view.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        steps={[
          "Add electrical products, categories and stock.",
          "Receive supplier purchases into inventory.",
          "Process customer sales and invoices at the POS.",
          "Monitor stock and low-stock items.",
          "Review sales and branch reports.",
        ]}
      />

      <SectionCopy label="Fit" title="Who Is DigiNizam Electric Store For?" reverse>
        <p>
          Electrical supply shops and retailers that need organised item records, counter
          billing, purchasing and stock reports. Confirm product units, hardware and any
          specialist tracking requirements during a{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            demo
          </Link>
          .
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Business Setup">
        <p>
          Electrical supply shops in Pakistan can review item categories, sale units and
          purchasing requirements during a DigiNizam demo. Confirm the supported configuration
          before rollout.
        </p>
        <IndustryContextLinks peer="retail" />
      </SectionCopy>

      <SeoFaq
        label="Electric Store POS"
        title="Electrical store software questions"
        description="Direct answers for common electrical store software questions."
        items={electricFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Electrical Store"
        description="Book a demo to review counter billing, product units, purchasing and stock records. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
