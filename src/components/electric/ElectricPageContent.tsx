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
    a: "Yes. DigiNizam includes low-stock monitoring to help teams identify products that may need replenishment.",
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
    a: "DigiNizam's broader POS workflow supports barcode and scale-integrated billing where configured. Confirm the exact hardware and checkout setup during a demo.",
  },
  {
    q: "Does DigiNizam track serial numbers or warranties?",
    a: "Serial-number and warranty tracking are not part of the current DigiNizam electrical-store workflow. Contact the team if your store requires these capabilities.",
  },
  {
    q: "What features should electrical store POS software have?",
    a: "Important features include fast billing, SKU and category inventory, supplier purchasing, stock receiving, low-stock monitoring, reporting and multi-location visibility.",
  },
];

export default function ElectricPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(electricFaqs)} />
      <PageHero
        label="Electric Store"
        title="Electrical Store POS Software in Pakistan for Billing & Inventory Management"
        description="Manage electrical-store billing, product stock, supplier purchases, low-stock visibility and branch reporting from one connected POS workflow."
      />

      <SectionCopy label="Overview" title="What Is Electrical Store POS Software?">
        <p>
          Electrical store POS software combines counter billing with inventory, supplier
          purchasing and reporting for stores that manage many product categories and SKUs.
          DigiNizam can help electrical retailers connect sales with stock and purchasing while
          keeping branch-level visibility in one system. Electrical store POS software connects
          counter billing with product inventory, supplier purchasing and reporting so teams can
          manage a large SKU catalogue from one system.
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
          Use low-stock monitoring to identify products that may need replenishment before a
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

      <SectionCopy label="Billing" title="Fast Billing for Electrical & Electronics Retail">
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
          Electrical supply shops, electronics stores and hardware-style retailers that need
          organized billing, large-SKU inventory, purchasing and reporting.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact workflow for your store.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "Book an electrical store POS demo" },
          { href: "/products/retail", label: "Retail POS software" },
        ]}
      />

      <SeoFaq
        label="Electric Store POS"
        title="Electrical store software questions"
        description="Direct answers for common electrical and electronics store software questions."
        items={electricFaqs}
      />

      <SiteCTA
        title="See DigiNizam for Your Electrical Store"
        description="Book a free demo to review billing, inventory, supplier purchasing, stock alerts and the exact workflow available for your electrical or electronics retail business."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
