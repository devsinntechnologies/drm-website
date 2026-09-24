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

const retailFaqs: FaqItem[] = [
  {
    q: "Which software is best for a retail shop?",
    a: "The best software for a retail shop depends on billing speed, inventory accuracy, clear reporting, multi-store support and how well it fits your day-to-day workflow. DigiNizam retail POS connects checkout, stock, purchases and reports so shops can evaluate those requirements in one system instead of juggling separate tools.",
  },
  {
    q: "What is the best POS software for retail stores?",
    a: "Strong retail POS software connects the checkout counter with inventory, sales reports and branch visibility so every sale updates stock and performance data. DigiNizam is built for that connected workflow—billing, inventory, stock alerts and multi-store reporting in one platform for retail stores in Pakistan.",
  },
  {
    q: "What is the best inventory management software for retail stores?",
    a: "The best retail inventory software links stock with sales, purchases and reporting so available quantities stay closer to real store activity. DigiNizam updates inventory as transactions are recorded, supports low-stock visibility and helps teams review stock, purchases and performance from the same system.",
  },
  {
    q: "Can DigiNizam retail POS work without internet?",
    a: "DigiNizam supports offline-ready POS operations where configured, with records synchronizing when connectivity returns. The exact offline workflow should be confirmed for the selected setup.",
  },
  {
    q: "Can DigiNizam manage more than one retail branch?",
    a: "Yes, DigiNizam supports multi-store setups with connected stock, sales and reporting across locations. Exact terminals, outlets and modules depend on the selected plan.",
  },
  {
    q: "What is retail shop management software?",
    a: "Retail shop management software helps stores manage billing, sales, inventory, and reporting in one system. DigiNizam combines these retail operations in a POS platform designed for day-to-day store management.",
  },
];

export default function RetailPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(retailFaqs)} />
      <PageHero
        label="Retail Store"
        title="Retail POS Software in Pakistan for Smarter Store Management"
        description="Manage billing, inventory, sales, stock alerts and multi-store activity from one connected retail platform built for day-to-day store operations in Pakistan."
      />

      <SectionCopy
        label="Overview"
        title="What Is Retail POS Software?"
        image="https://images.unsplash.com/photo-1594518746417-4b9aad17489c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Retail Store POS solution"
        imageBrief="Professional retail counter scene with DigiNizam POS checkout UI visible on screen; cashier scanning an item, clean modern store, no fake sales numbers."
      >
        <p>
          Retail POS software connects store billing with inventory and sales records so
          retailers can process transactions, track stock, review performance and manage daily
          operations from one system. DigiNizam brings billing, inventory visibility, reporting
          and multi-store control together for growing retail businesses in Pakistan.
        </p>
        <p>
          As retail software, DigiNizam brings billing, sales, inventory, and reporting together
          for everyday shop operations. Its retail POS workflow helps businesses keep sales and
          stock information organized in one system.
        </p>
      </SectionCopy>

      <SectionCopy label="Operations" title="Retail Store Management Without Separate Spreadsheets" reverse>
        <p>
          Sales, stock and purchasing activity affect each other throughout the day. DigiNizam
          keeps these operational records connected so owners and teams can work from clearer
          information instead of maintaining separate manual sheets for billing, inventory and
          reports.
        </p>
      </SectionCopy>

      <SectionCopy label="POS" title="POS & Billing for Daily Retail Sales">
        <p>
          Create counter bills and invoices, record sales and keep daily retail transactions
          organized from one POS workflow. Fast sales processing helps staff move through
          checkout while each transaction stays connected to the store&rsquo;s operational
          records.
        </p>
      </SectionCopy>

      <SectionCopy label="Inventory" title="Retail Inventory Software That Moves With Store Activity" reverse>
        <p>
          Track stock with sales, purchases and returns so inventory visibility stays closer to
          what is actually happening in the store. Teams can review available stock without
          relying only on separate spreadsheets or end-of-day manual updates.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Low-stock"
        title="Low-Stock Visibility Before You Miss a Sale"
        image="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Retail Store inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam inventory or stock dashboard showing product list, stock status / low-stock visibility and branch context where available."
      >
        <p>
          Use low-stock monitoring to identify products that may need attention before shelves
          run empty. Clearer stock visibility supports better reorder decisions and helps reduce
          the risk of discovering shortages only when a customer asks for an item.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-store" title="Multi-Store Control for Growing Retailers" reverse>
        <p>
          For businesses operating more than one outlet, DigiNizam supports connected
          branch-level stock, sales and reporting so owners can review multiple locations from a
          more centralized view.
        </p>
      </SectionCopy>

      <SectionCopy label="Reporting" title="Reports for Sales, Stock and Store Performance">
        <p>
          Review sales, stock movement and outlet performance in reports designed for
          day-to-day decisions. Owners can use these reports to understand what is selling,
          where stock is moving and which areas need attention.
        </p>
      </SectionCopy>

      <SectionCopy label="Shop management" title="Retail Shop Management Software in Pakistan" reverse>
        <p>
          DigiNizam helps retail shops manage everyday billing, sales, inventory, and business
          operations from one POS system. Retail shop owners can use DigiNizam to keep sales
          records organized, monitor stock, review reports, and manage day-to-day store activity
          from a centralized system.
        </p>
        <p>
          See{" "}
          <Link href="/pricing" className="text-primary font-semibold hover:underline">
            POS software pricing
          </Link>{" "}
          for plan options or{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a POS demo
          </Link>{" "}
          to review the live retail workflow.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="15–20 sec real-product clip: scan/search item → add to bill → complete sale → show stock updated / low-stock or report view."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        steps={[
          "Add products, categories and opening stock.",
          "Process customer sales through the POS.",
          "Keep sales connected with inventory records.",
          "Review low-stock items, purchases and reports.",
          "Use branch-level visibility where multiple stores are enabled.",
        ]}
      />

      <SectionCopy label="Fit" title="Who Is DigiNizam Retail Store For?" reverse>
        <p>
          Independent retail stores, growing outlets and multi-branch retailers that need
          billing, inventory visibility, low-stock monitoring and reporting in one connected
          system.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to see the live workflow.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "retail inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Retail POS"
        title="Retail store software questions"
        description="Direct answers for common retail POS questions."
        items={retailFaqs}
      />

      <SiteCTA
        title="See DigiNizam Retail POS in Action"
        description="Walk through billing, inventory, stock visibility, reports and your store workflow with the DigiNizam team. Book a free demo to confirm the setup that fits your outlets, counters and inventory needs."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
