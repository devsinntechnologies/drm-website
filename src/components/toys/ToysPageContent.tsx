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
    a: "Toy store POS software records sales and connects them with inventory, purchasing, discounts and reporting so toy retailers can manage daily store operations from one system.",
  },
  {
    q: "What is the best POS software for a toy shop?",
    a: "The right system depends on catalogue size, billing workflow, inventory accuracy, purchasing, seasonal promotions, low-stock visibility, reporting and number of locations. Compare these requirements before choosing a POS.",
  },
  {
    q: "Can DigiNizam handle a large toy catalogue?",
    a: "Yes. DigiNizam inventory tools can organize many products and categories while keeping stock connected with sales and purchases.",
  },
  {
    q: "Can toy store POS software manage inventory?",
    a: "Yes. DigiNizam connects toy-store sales, purchases and returns with inventory records so teams can see what is available and what may need replenishment.",
  },
  {
    q: "Does DigiNizam support low-stock monitoring for toy stores?",
    a: "Yes. DigiNizam includes low-stock monitoring to help teams identify popular products that may need restocking.",
  },
  {
    q: "Can a toy store run seasonal discounts through DigiNizam?",
    a: "DigiNizam supports offers and discounts in the retail workflow. The exact promotion rules available should match the live store configuration.",
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
        title="Toy Store POS Software in Pakistan for Billing & Inventory Management"
        description="Connect toy-store billing, product inventory, seasonal discounts, low-stock visibility and branch reporting in one retail POS workflow."
      />

      <SectionCopy label="Overview" title="What Is Toy Store POS Software?">
        <p>
          Toy store POS software combines fast retail billing with inventory, discounts,
          purchasing and reports for shops that often manage many categories and seasonal stock
          peaks. DigiNizam helps toy retailers connect checkout with stock and branch-level
          reporting instead of maintaining separate manual records. Toy store POS software
          connects billing with product inventory, purchasing, discounts and reporting so toy
          retailers can manage seasonal stock and daily sales from one system.
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
          Use supported offers and discounts for seasonal or promotional pricing without
          maintaining separate manual discount lists.
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
          Use low-stock monitoring to identify popular items that may need replenishment before
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

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "Book a toy store POS demo" },
          { href: "/products/retail", label: "Retail POS software" },
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
