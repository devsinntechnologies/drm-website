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

const jewelleryFaqs: FaqItem[] = [
  {
    q: "What is jewellery POS software?",
    a: "Jewellery POS software is a retail management system used to record jewellery sales, maintain item inventory and organize payments and reporting.",
  },
  {
    q: "What is the best POS software for a jewellery shop?",
    a: "The right system depends on inventory requirements, billing workflow, payment handling, reporting, branch needs and any jewellery-specific calculations or tracking your store requires. Compare those requirements before choosing a POS.",
  },
  {
    q: "Can DigiNizam manage jewellery inventory?",
    a: "DigiNizam can manage retail inventory and stock visibility for jewellery items. Exact jewellery-specific item fields should be confirmed in the live template.",
  },
  {
    q: "Does DigiNizam support barcode labels for jewellery?",
    a: "Barcode and label workflows can be used where they are configured in the jewellery setup. The final label fields should match the live product configuration.",
  },
  {
    q: "Can DigiNizam manage multiple jewellery outlets?",
    a: "Yes. DigiNizam supports connected branch-level stock, sales and reporting for jewellery businesses with multiple outlets.",
  },
  {
    q: "Can jewellery POS software manage payments and discounts?",
    a: "DigiNizam supports payment methods and discounts within its sales workflow, while keeping daily transactions available for review and reporting.",
  },
  {
    q: "Does DigiNizam calculate gold rates, karat and making charges?",
    a: "Live gold-rate, karat and making-charge calculations are not part of the current DigiNizam jewellery workflow shown on this page. Discuss your required pricing calculations during a demo.",
  },
  {
    q: "What features should jewellery POS software have?",
    a: "Important requirements can include billing, item inventory, payments, labels, reporting and multi-branch visibility. Gold-rate, purity, weight and making-charge workflows should be checked separately if your store requires them.",
  },
];

export default function JewelleryPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(jewelleryFaqs)} />
      <PageHero
        label="Jewellery Shop"
        title="Jewellery POS Software in Pakistan for Billing & Inventory Management"
        description="Connect jewellery-store billing, product inventory, labels, payments and branch reporting in one retail POS workflow."
      />

      <SectionCopy label="Overview" title="What Is Jewellery POS Software?">
        <p>
          Jewellery POS software helps jewellery retailers record sales, manage item inventory
          and maintain clear billing and reporting records for high-value stock. DigiNizam
          supports core retail operations such as invoicing, inventory visibility, payments and
          multi-store reporting for jewellery businesses. Jewellery POS software helps retailers
          organize sales, inventory, payments and reporting for high-value stock. DigiNizam
          connects these core retail workflows in one system.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Inventory"
        title="Item-Level Inventory Visibility"
        reverse
        image="https://images.unsplash.com/photo-1689560025810-4599bc195814?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Jewellery Shop POS solution"
        imageBrief="Premium jewellery counter/showcase with DigiNizam item inventory or invoice UI; elegant lighting, professional retail environment, no fake gold-rate figures."
      >
        <p>
          Maintain item records and stock visibility so teams can see what is available across
          the store or multiple locations.
        </p>
      </SectionCopy>

      <SectionCopy label="Billing" title="Organized Billing for Jewellery Sales">
        <p>
          Use DigiNizam POS and invoicing to record jewellery sales consistently while keeping
          transactions connected with inventory and payment records.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Labels"
        title="Barcode & Label Workflows Where Configured"
        reverse
        image="https://images.unsplash.com/photo-1777286492764-456e3530e34c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Jewellery Shop inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam barcode/label, payment or sales-report screen relevant to jewellery retail; avoid unconfirmed karat/gold-rate UI."
      >
        <p>
          Use barcode and label functionality where configured in the jewellery setup to support
          item lookup, tagging and billing.
        </p>
      </SectionCopy>

      <SectionCopy label="Payments" title="Payments, Discounts & Sales Records">
        <p>
          Keep supported payment methods, discounts and daily transactions in the same system so
          store activity is easier to review and reconcile.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-branch" title="Multi-Branch Jewellery Visibility" reverse>
        <p>
          Monitor connected branch-level inventory, sales and reports from a centralized view.
        </p>
      </SectionCopy>

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="12–18 sec real-product clip: item lookup / barcode → create invoice → payment → item stock or sales record updates."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        steps={[
          "Create jewellery product/item records.",
          "Add stock and labels where supported.",
          "Record customer sales and payments through the POS.",
          "Keep inventory connected with sales and purchases.",
          "Review store and branch reports.",
        ]}
      />

      <SectionCopy label="Fit" title="Who Is DigiNizam Jewellery Shop For?" reverse>
        <p>
          Jewellery stores and multi-branch jewellery retailers that need organized billing,
          inventory visibility and reporting for high-value retail stock.{" "}
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
          { href: "/demo", label: "Book a jewellery POS demo" },
          { href: "/products/retail", label: "Retail POS software" },
        ]}
      />

      <SeoFaq
        label="Jewellery POS"
        title="Jewellery shop software questions"
        description="Direct answers for common jewellery store software questions."
        items={jewelleryFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Jewellery Store"
        description="Book a free demo to confirm the billing, inventory, labels, payments and branch-management workflow available for your jewellery business."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
