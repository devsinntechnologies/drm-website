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

const manufacturingFaqs: FaqItem[] = [
  {
    q: "What is manufacturing inventory software?",
    a: "Manufacturing inventory software tracks materials, finished goods, purchases, stock locations and related sales records so teams have clearer operational visibility.",
  },
  {
    q: "Can DigiNizam track raw materials and finished goods?",
    a: "DigiNizam inventory tools can be configured to track products, batches/variations where applicable and stock across locations. Exact manufacturing item structure should match the live setup.",
  },
  {
    q: "Can DigiNizam manage multiple warehouses?",
    a: "DigiNizam supports multi-location and multi-store inventory visibility for businesses that operate more than one stock location.",
  },
  {
    q: "Does DigiNizam include BOMs, work orders and production planning?",
    a: "Do not advertise these functions unless the live Manufacturing template confirms them. They are expected features in manufacturing ERP searches but are not yet verified DigiNizam capabilities for this page.",
  },
  {
    q: "Can manufacturers use DigiNizam for purchasing and invoicing?",
    a: "Yes. DigiNizam supports purchasing-related inventory workflows and invoicing for business transactions that fit the configured setup.",
  },
];

export default function ManufacturingPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(manufacturingFaqs)} />
      <PageHero
        label="Manufacturing"
        title="Manufacturing Inventory & Operations Software in Pakistan"
        description="Bring raw-material and finished-goods inventory, purchasing, sales, invoices and multi-location reporting into one connected DigiNizam workflow."
      />

      <SectionCopy
        label="Overview"
        title="What Is Manufacturing Inventory Software?"
        image="/industries/manufacturing/image-1.webp"
        imageAlt="DigiNizam Manufacturing POS solution"
        imageBrief="Warehouse/manufacturing storage area with raw materials and finished goods plus DigiNizam inventory dashboard; no production-line claims not supported."
      >
        <p>
          Manufacturing inventory software helps businesses track materials, finished goods,
          purchasing, sales and warehouse stock in one system. DigiNizam can support inventory,
          purchasing, invoicing and multi-location visibility for manufacturers, but a full
          manufacturing ERP claim should only be used if production modules such as BOMs and
          work orders are confirmed in the live product.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Add raw materials, finished goods and stock locations.",
          "Record purchases and receive materials into inventory.",
          "Track stock movements across locations.",
          "Record applicable sales or invoices.",
          "Review inventory, low-stock and branch/warehouse reports.",
        ]}
      />

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="15–25 sec real-product clip: receive material/purchase → stock updates → move/view location stock → create invoice for finished goods / open report."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <SectionCopy label="Inventory" title="Raw-Material & Finished-Goods Stock Visibility">
        <p>
          Use DigiNizam inventory tools to organize materials and finished products so teams
          can review available stock and movements without maintaining separate disconnected
          spreadsheets.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Purchasing"
        title="Purchasing & Supplier Records"
        reverse
        image="/industries/manufacturing/image-2.webp"
        imageAlt="Manufacturing inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam purchase/receiving, multi-location inventory or low-stock screen relevant to warehouse operations."
      >
        <p>
          Connect purchase activity with inventory so received materials can move into stock
          records and supplier-related transactions stay easier to review.
        </p>
      </SectionCopy>

      <SectionCopy label="Warehouse" title="Warehouse & Multi-Location Inventory">
        <p>
          For manufacturers with more than one warehouse, store or branch, DigiNizam supports
          multi-location inventory visibility and connected reporting.
        </p>
      </SectionCopy>

      <SectionCopy label="Reorder" title="Low-Stock & Reorder Visibility" reverse>
        <p>
          Use low-stock monitoring to flag materials or finished goods that may need purchasing
          attention before they become an operational shortage.
        </p>
      </SectionCopy>

      <SectionCopy label="Billing" title="Sales, Billing & Invoicing">
        <p>
          Use DigiNizam billing and invoicing for finished-goods sales or counter/dispatch
          transactions that fit the business workflow.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Manufacturing For?" reverse>
        <p>
          Small and growing manufacturers that primarily need connected inventory, purchasing,
          invoicing and multi-location visibility, rather than an unverified full
          production-planning ERP.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to confirm the exact modules for your operation.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "manufacturing inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Manufacturing"
        title="Manufacturing inventory software questions"
        description="Direct answers for common manufacturing inventory and operations software questions."
        items={manufacturingFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Manufacturing Operation"
        description="Book a free demo to review inventory, purchasing, warehouses, invoicing and the exact modules currently available for your manufacturing workflow."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
