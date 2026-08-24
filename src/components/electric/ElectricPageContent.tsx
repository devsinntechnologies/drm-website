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
    a: "Electrical store POS software is a retail billing and inventory system designed to help shops manage product sales, stock, suppliers and reports from one platform.",
  },
  {
    q: "Can DigiNizam track many electrical products and SKUs?",
    a: "Yes. DigiNizam inventory tools support large product catalogues, categories and stock tracking across sales, purchases and returns.",
  },
  {
    q: "Does DigiNizam support low-stock alerts?",
    a: "Yes. DigiNizam includes low-stock monitoring to help teams identify items that may need replenishment.",
  },
  {
    q: "Does DigiNizam track serial numbers or warranties?",
    a: "Serial-number and warranty tracking are not part of the current DigiNizam electrical store workflow. Speak with our team if this is something your store needs.",
  },
  {
    q: "Can DigiNizam manage more than one electrical store branch?",
    a: "Yes. DigiNizam supports multi-store visibility for connected branch stock, sales and reporting.",
  },
];

export default function ElectricPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(electricFaqs)} />
      <PageHero
        label="Electric Store"
        title="Electrical Store POS Software in Pakistan"
        description="Keep electrical-store billing, product stock, purchases, low-stock visibility and branch reporting connected in one DigiNizam retail workflow."
      />

      <SectionCopy label="Overview" title="What Is Electrical Store POS Software?">
        <p>
          Electrical store POS software combines counter billing with inventory, supplier
          purchasing and reporting for stores that manage many product categories and SKUs.
          DigiNizam can help electrical retailers connect sales with stock and purchasing while
          keeping branch-level visibility in one system.
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
          Organize electrical products by SKU and category and track stock as sales, purchases
          and returns are recorded. This helps stores keep a clearer view of fast-moving and
          low-stock items.
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
          Connect purchasing with stock records so teams can track what has been ordered and
          what has been received from suppliers instead of relying on separate purchase notes.
        </p>
      </SectionCopy>

      <SectionCopy label="Low-stock" title="Low-Stock Monitoring for High-Variety Inventory" reverse>
        <p>
          Use low-stock monitoring to identify items that may need replenishment. Electrical
          stores often carry many product lines, so early visibility is more useful than
          discovering a shortage at the counter.
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
          Use DigiNizam POS for counter sales, invoices and daily transaction records so
          product billing stays connected with the same system used for stock and reporting.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-location" title="Multi-Branch & Multi-Location Visibility" reverse>
        <p>
          For retailers with more than one outlet or stock location, DigiNizam supports
          connected branch-level inventory, sales and reports.
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
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "electronics inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
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
