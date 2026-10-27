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

const retailFaqs: FaqItem[] = [
  {
    q: "Which software is best for a retail shop?",
    a: "The best software for a retail shop depends on billing speed, inventory accuracy, clear reporting, multi-store support and how well it fits your day-to-day workflow. DigiNizam retail POS connects checkout, stock, purchases and reports so shops can evaluate those requirements in one system instead of juggling separate tools.",
  },
  {
    q: "What is the best POS software for retail stores?",
    a: "Compare checkout, inventory, purchasing, reports, support and the fit with your store workflow. DigiNizam brings core retail records together. Review the required devices, locations and available functions during a demo before choosing a configuration.",
  },
  {
    q: "What is the best inventory management software for retail stores?",
    a: "The best retail inventory software links stock with sales, purchases and reporting so available quantities stay closer to real store activity. DigiNizam updates inventory as transactions are recorded, provides low-stock alerts and helps teams review stock, purchases and performance from the same system.",
  },
  {
    q: "Can DigiNizam retail POS work without internet?",
    a: "Yes. DigiNizam retail POS can keep billing when the internet connection drops. Records are stored locally and synchronize to the web as soon as the connection returns.",
  },
  {
    q: "Can DigiNizam manage more than one retail branch?",
    a: "Yes. DigiNizam supports multi-branch setups with connected stock, sales and reporting across outlets. The outlets, terminals and access for your business are agreed during the demo, and pricing is discussed after the requirements review.",
  },
  {
    q: "What is retail shop management software?",
    a: "Retail shop management software helps stores manage billing, sales, inventory, and reporting in one system. DigiNizam combines these retail operations in a POS platform designed for day-to-day store management.",
  },
];

const linkClass = "text-primary font-semibold hover:underline";

export default function RetailPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(retailFaqs)} />
      <PageHero
        label="Retail Store"
        title="Retail POS Software for Billing, Inventory & Store Operations"
        description="Bring counter billing, stock records and daily sales reports together. Review purchasing, low-stock visibility and branch requirements for your retail setup."
      />

      <SectionCopy
        label="Overview"
        title="What Is Retail POS Software?"
        image="https://images.unsplash.com/photo-1594518746417-4b9aad17489c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Staff member using a computer at a shop counter"
        imageBrief="Professional retail counter scene with DigiNizam POS checkout UI visible on screen; cashier scanning an item, clean modern store, no fake sales numbers."
      >
        <p>
          Retail POS software connects checkout sales with product inventory and business
          reports. DigiNizam brings billing, stock visibility and reporting into one retail
          workflow, with purchasing and branch functions based on the selected configuration.
        </p>
        <p>
          Keep billing, stock and report records connected so the team can review sales and
          available inventory from the same retail workflow.
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
          organized from one POS workflow. Each transaction stays connected to the
          store&rsquo;s operational records.
        </p>
      </SectionCopy>

      <SectionCopy label="Inventory" title="Retail Inventory Software That Moves With Store Activity" reverse>
        <p>
          A connected retail POS records stock movements alongside sales, purchases and returns
          where those actions are configured. DigiNizam keeps the relevant transaction and stock
          records in the selected workflow. Review a sale, return and received purchase in the
          demo to confirm how quantities change.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Low-stock"
        title="Low-Stock Visibility Before You Miss a Sale"
        image="https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Bottled drinks on refrigerated store shelves"
        imageBrief="Real DigiNizam inventory or stock dashboard showing product list, stock status / low-stock visibility and branch context where available."
      >
        <p>
          DigiNizam low-stock alerts help the team identify products that may need attention
          before shelves run empty. Clearer stock information supports reorder decisions and
          reduces the risk of discovering shortages only when a customer asks for an item.
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
          Retailers in Pakistan can review their counter, stock and reporting requirements with
          DigiNizam. Discuss the required setup during a demo before agreeing on pricing.
        </p>
        <p>
          Read the{" "}
          <Link href="/blog/what-is-retail-pos-software" className={linkClass}>
            retail POS guide
          </Link>{" "}
          for an explanation of the store workflow. The{" "}
          <Link href="/blog/retail-inventory-management-software" className={linkClass}>
            guide to retail stock problems
          </Link>{" "}
          explains why sales, purchases and stock records need to stay connected. For local
          buying considerations, read about{" "}
          <Link href="/blog/how-to-choose-best-retail-pos-software-pakistan" className={linkClass}>
            choosing retail POS software in Pakistan
          </Link>
          .
        </p>
        <IndustryContextLinks />
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
          "Use branch-level visibility if you operate more than one store.",
        ]}
      />

      <SectionCopy label="Fit" title="Who Is DigiNizam Retail Store For?" reverse>
        <p>
          Independent retail stores, growing outlets and multi-branch retailers that need
          billing, inventory visibility, low-stock monitoring and reporting in one connected
          system.{" "}
          <Link href="/demo" className={linkClass}>
            Book a demo
          </Link>{" "}
          to see the live workflow.
        </p>
      </SectionCopy>

      <SeoFaq
        label="Retail POS"
        title="Retail store software questions"
        description="Direct answers for common retail POS questions."
        items={retailFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Retail Store"
        description="Book a demo to review billing, inventory, purchasing and reports for your store. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
