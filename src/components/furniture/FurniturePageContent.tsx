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

const furnitureFaqs: FaqItem[] = [
  {
    q: "What is furniture store POS software?",
    a: "Furniture store POS software records showroom sales and connects them with stock, purchasing, invoices and reports so furniture retailers can manage daily operations from one system.",
  },
  {
    q: "Can DigiNizam track showroom and warehouse stock?",
    a: "DigiNizam supports multi-location inventory and branch visibility. The final stock-location structure should match the live furniture setup.",
  },
  {
    q: "Can DigiNizam manage furniture suppliers and purchases?",
    a: "Yes. DigiNizam inventory tools include purchase-management and supplier-related workflows that can connect receiving with stock.",
  },
  {
    q: "Does DigiNizam include delivery scheduling and quotations?",
    a: "Do not promise those modules until they are confirmed in the live Furniture Store template. They are common market requirements but not yet verified for this page.",
  },
  {
    q: "Can DigiNizam manage multiple furniture showrooms?",
    a: "Yes. DigiNizam supports connected branch-level inventory, sales and reporting for businesses operating multiple showrooms or stock locations.",
  },
  {
    q: "Can furniture POS software monitor low-stock items?",
    a: "Yes. DigiNizam provides inventory and low-stock visibility to help teams identify products or categories that may need replenishment.",
  },
  {
    q: "What features should furniture POS software have?",
    a: "Important features include showroom billing, inventory visibility, supplier purchasing, warehouse stock, low-stock monitoring, reporting and multi-branch control.",
  },
  {
    q: "What should furniture store POS software manage?",
    a: "Furniture store POS software should help manage billing, sales, product and inventory records, and reporting. DigiNizam brings these core retail operations together in one POS system.",
  },
];

export default function FurniturePageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(furnitureFaqs)} />
      <PageHero
        label="Furniture Store"
        title="Furniture Store POS Software in Pakistan for Billing & Inventory Management"
        description="Connect furniture-store billing, stock, supplier purchasing, warehouse visibility and branch reporting in one DigiNizam retail workflow."
      />

      <SectionCopy
        label="Overview"
        title="What Is Furniture Store POS Software?"
        image="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Furniture Store POS solution"
        imageBrief="Professional furniture showroom with DigiNizam product availability / inventory UI; show sofa/table/chair context and a clean POS tablet/desktop screen."
      >
        <p>
          Furniture store POS software combines sales and invoicing with inventory, purchasing
          and reporting for showrooms that may hold stock across display areas, warehouses or
          multiple branches. DigiNizam can help furniture retailers keep billing and stock
          records connected instead of maintaining separate spreadsheets.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Store software"
        title="Furniture Store POS Software for Billing & Inventory Management"
        reverse
      >
        <p>
          DigiNizam helps furniture stores manage billing, sales, inventory, and day-to-day store
          operations through a POS system. Furniture businesses can keep product records organized,
          monitor stock, review sales activity, and manage multiple store operations from a
          centralized system.
        </p>
        <p>
          Review{" "}
          <Link href="/pricing" className="text-primary font-semibold hover:underline">
            POS software pricing
          </Link>{" "}
          or{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            book a POS demo
          </Link>{" "}
          for your showroom workflow.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Add furniture products and stock locations.",
          "Receive supplier purchases into inventory.",
          "Record showroom sales and invoices.",
          "Review product availability and low-stock items.",
          "Monitor sales and stock across branches or warehouses where enabled.",
        ]}
      />

      <SectionCopy
        label="Stock"
        title="Showroom & Warehouse Stock Visibility"
        image="https://images.unsplash.com/photo-1635468609223-4e59675ac96d?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Furniture Store inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam warehouse/location stock or supplier purchase/receiving screen; emphasize availability across showroom/warehouse if supported."
      >
        <p>
          Track furniture products across available locations so teams can see what is on hand
          without relying on separate showroom and warehouse spreadsheets.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="15–20 sec real-product clip: search furniture item → check stock/location → create invoice → open purchase/stock view."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <SectionCopy label="Sales" title="Sales & Invoicing for Furniture Showrooms" reverse>
        <p>
          Record showroom sales and invoices through DigiNizam POS so each transaction stays
          connected with the store&rsquo;s stock and reporting records.
        </p>
      </SectionCopy>

      <SectionCopy label="Purchasing" title="Supplier Purchases & Receiving">
        <p>
          Connect supplier purchasing with stock receiving so teams can record what was ordered
          and what entered inventory from each supplier.
        </p>
      </SectionCopy>

      <SectionCopy label="Availability" title="Low-Stock & Product Availability Monitoring" reverse>
        <p>
          Use inventory and low-stock visibility to identify items or categories that may need
          replenishment before a salesperson promises stock that is no longer available.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-branch" title="Multi-Branch Furniture Retail">
        <p>
          For furniture businesses operating more than one showroom or stock location,
          DigiNizam supports connected branch-level inventory, sales and reports.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Furniture Store For?" reverse>
        <p>
          Furniture showrooms, home-furnishing retailers and multi-location stores that need
          connected billing, inventory, purchasing and reporting.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact workflow for your showroom.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "Book a furniture store POS demo" },
          { href: "/products/retail", label: "Retail POS software" },
        ]}
      />

      <SeoFaq
        label="Furniture Store POS"
        title="Furniture store software questions"
        description="Direct answers for common furniture showroom software questions."
        items={furnitureFaqs}
      />

      <SiteCTA
        title="See DigiNizam for Your Furniture Store"
        description="Book a free demo to review showroom billing, inventory, supplier purchasing, warehouse or branch visibility and the exact modules available for your furniture workflow."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
