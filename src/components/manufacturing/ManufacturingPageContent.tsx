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

const manufacturingFaqs: FaqItem[] = [
  {
    q: "What is manufacturing inventory software?",
    a: "Manufacturing inventory software tracks materials, finished goods, purchases, stock locations and related sales records so teams have clearer operational visibility.",
  },
  {
    q: "Can DigiNizam track raw materials and finished goods?",
    a: "DigiNizam inventory records can be configured for materials and finished products across the agreed locations. Confirm item fields and stock movements in the selected setup. This does not imply automatic material consumption, work-in-progress tracking or production planning.",
  },
  {
    q: "Can DigiNizam manage multiple warehouses?",
    a: "Yes. DigiNizam supports multi-location inventory visibility for businesses that operate more than one warehouse or stock location.",
  },
  {
    q: "Does DigiNizam include BOMs, work orders and production planning?",
    a: "BOMs, work orders and production planning are not part of the current DigiNizam manufacturing workflow. DigiNizam focuses on inventory, purchasing and invoicing—talk to our team if you need broader production-planning tools.",
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
        title="Manufacturing Inventory Software for Materials & Finished Goods"
        description="Keep material and finished-goods stock records connected with purchases and invoices. Review locations and reports for the inventory workflow your business needs."
      />

      <SectionCopy
        label="Overview"
        title="What Is Manufacturing Inventory Software?"
        image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Manufacturing POS solution"
        imageBrief="Warehouse/manufacturing storage area with raw materials and finished goods plus DigiNizam inventory dashboard; no production-line claims not supported."
      >
        <p>
          Inventory software for manufacturers records materials, finished goods, purchasing and
          stock movements. DigiNizam focuses on inventory, purchasing and invoicing in the setup
          described here. Bills of materials, work orders, MRP and production scheduling are
          outside this scope.
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
        image="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Manufacturing inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam purchase/receiving, multi-location inventory or low-stock screen relevant to warehouse operations."
      >
        <p>
          Connect purchase activity with inventory so received materials move into stock
          records and supplier transactions stay easier to review.
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
          Use low-stock alerts to flag materials or finished goods that may need purchasing
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
          Manufacturers that need connected inventory, purchasing and invoicing records can
          review the available configuration in a{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            demo
          </Link>
          . Assess production-planning needs separately from this inventory workflow.
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Inventory Setup">
        <p>
          Manufacturers in Pakistan can review material records, warehouse stock, purchases and
          invoices with DigiNizam. Production-planning requirements need a separate solution
          assessment.
        </p>
        <IndustryContextLinks featuresLabel="inventory and purchasing features" />
      </SectionCopy>

      <SeoFaq
        label="Manufacturing"
        title="Manufacturing inventory software questions"
        description="Direct answers for common manufacturing inventory questions."
        items={manufacturingFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Inventory Workflow"
        description="Book a demo to review material records, stock locations, purchasing and invoicing. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
