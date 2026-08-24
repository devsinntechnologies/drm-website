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
    a: "Jewellery POS software is a store-management system used to record sales, maintain item inventory and organize payments and reports for jewellery retail operations.",
  },
  {
    q: "Can DigiNizam manage jewellery inventory?",
    a: "DigiNizam can manage retail inventory and stock visibility for jewellery items. Exact jewellery-specific item fields should be confirmed in the live template.",
  },
  {
    q: "Does DigiNizam support barcode labels for jewellery?",
    a: "Barcode and label workflows can be used where they are configured in the jewellery setup. The final page should only show the exact label functionality available in the product.",
  },
  {
    q: "Does DigiNizam calculate gold rates, karat and making charges?",
    a: "Live gold-rate, karat and making-charge calculations are not part of the current DigiNizam jewellery workflow shown here. Ask our team about your pricing calculations during a demo.",
  },
  {
    q: "Can DigiNizam manage multiple jewellery outlets?",
    a: "Yes. DigiNizam supports multi-store setups with connected branch stock, sales and reporting.",
  },
];

export default function JewelleryPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(jewelleryFaqs)} />
      <PageHero
        label="Jewellery Shop"
        title="Jewellery POS Software in Pakistan for Store Operations"
        description="Connect jewellery-store billing, product inventory, labels, payments and branch reporting in one DigiNizam retail workflow."
      />

      <SectionCopy label="Overview" title="What Is Jewellery POS Software?">
        <p>
          Jewellery POS software helps jewellery retailers record sales, manage item inventory
          and maintain clear billing and reporting records for high-value stock. DigiNizam
          supports core retail operations such as invoicing, inventory visibility, payments and
          multi-store reporting for jewellery businesses.
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
          Maintain product records and stock visibility so teams can see what is available
          across the store or multiple locations. Accurate inventory is especially important
          when individual products carry high value.
        </p>
      </SectionCopy>

      <SectionCopy label="Billing" title="Organized Billing for Jewellery Sales">
        <p>
          Use DigiNizam POS and invoicing to record jewellery-store sales in a consistent
          digital workflow instead of relying on handwritten bills and separate daily registers.
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
          Use barcode and label functionality where the jewellery template supports it to
          simplify item lookup, tagging and billing. The exact fields printed on labels should
          match the live product configuration.
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
          For jewellery businesses with more than one outlet, DigiNizam supports connected
          branch-level stock, sales and reports.
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
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "jewellery inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
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
