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

const toysFaqs: FaqItem[] = [
  {
    q: "What is toy store POS software?",
    a: "Toy store POS software records sales and connects them with inventory, purchasing, discounts and reporting so toy retailers can manage daily store operations more efficiently.",
  },
  {
    q: "Can DigiNizam handle a large toy catalogue?",
    a: "Yes. DigiNizam inventory tools can organize many products and categories while keeping stock connected with sales and purchases.",
  },
  {
    q: "Does DigiNizam support low-stock alerts for toy stores?",
    a: "Yes. DigiNizam includes low-stock monitoring to help teams identify products that may need restocking.",
  },
  {
    q: "Can a toy store run discounts through DigiNizam?",
    a: "DigiNizam supports offers and discounts in the retail workflow. The exact promotion rules available should match the live store configuration.",
  },
  {
    q: "Can DigiNizam manage multiple toy-store branches?",
    a: "Yes. Multi-store control can connect stock, sales and reporting across multiple outlets.",
  },
];

export default function ToysPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(toysFaqs)} />
      <PageHero
        label="Toys Store"
        title="Toy Store POS Software in Pakistan"
        description="Keep toy-store billing, inventory, seasonal offers, stock alerts and branch reporting connected in one DigiNizam retail system."
      />

      <SectionCopy label="Overview" title="What Is Toy Store POS Software?">
        <p>
          Toy store POS software combines fast retail billing with inventory, discounts,
          purchasing and reports for shops that often manage many categories and seasonal stock
          peaks. DigiNizam helps toy retailers connect checkout with stock and branch-level
          reporting instead of maintaining separate manual records.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Checkout"
        title="Fast Checkout for Busy Toy & Gift Stores"
        reverse
        imageAlt="DigiNizam Toys Store POS solution"
        imageBrief="Bright but professional toy-store checkout with DigiNizam POS categories/product grid; avoid childish design, keep business-focused."
      >
        <p>
          Use the POS to record counter sales quickly and keep each transaction connected to
          inventory and reporting—especially useful during weekends, holidays and seasonal rush
          periods.
        </p>
      </SectionCopy>

      <SectionCopy label="Catalogue" title="Inventory Across Many Toy Categories">
        <p>
          Organize toys and gift items by product and category, then track stock as sales,
          purchases and returns are recorded. This makes it easier to see what is available and
          what is moving.
        </p>
      </SectionCopy>

      <SectionCopy label="Promotions" title="Discounts & Promotions for Seasonal Sales" reverse>
        <p>
          Use supported offers and discounts to run seasonal or promotional pricing without
          maintaining separate manual discount lists at the counter.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Low-stock"
        title="Low-Stock Monitoring for Popular Items"
        imageAlt="Toys Store inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam stock or low-stock view showing multiple toy categories and, where available, branch stock or promotions."
      >
        <p>
          Use low-stock monitoring to identify popular products that may need replenishment
          before they run out during high-demand periods.
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
          For toy retailers with more than one branch, DigiNizam supports connected stock, sales
          and reporting across locations.
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

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "toy store inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Toy Store POS"
        title="Toy store software questions"
        description="Direct answers for common toy and gift store software questions."
        items={toysFaqs}
      />

      <SiteCTA
        title="See DigiNizam for Your Toy Store"
        description="Book a free demo to review billing, product inventory, seasonal discounts, low-stock monitoring and multi-store reporting for your toy or gift business."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
