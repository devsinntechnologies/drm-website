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

const cafeFaqs: FaqItem[] = [
  {
    q: "What is cafe POS software?",
    a: "Cafe POS software is a system for recording quick-service food and beverage orders, billing, kitchen/bar preparation flow, stock and reporting in one connected workflow.",
  },
  {
    q: "Does DigiNizam support KOT or KDS for cafes?",
    a: "Yes. DigiNizam's restaurant workflow sends cafe orders from the counter to the kitchen or bar as preparation tickets. Review the devices and order routing for your cafe during the demo.",
  },
  {
    q: "Can cafe inventory update from sales?",
    a: "Where the selected setup links billed items with stock, recorded sales can update the connected inventory. Review the mapping and stock movements using your menu examples. Do not assume recipe costing or automatic ingredient deduction without checking the live configuration.",
  },
  {
    q: "Can DigiNizam cafe POS work offline?",
    a: "Yes. Ordering and billing can continue without internet, and records synchronize to the web as soon as the connection returns. Confirm which actions need a live connection for your cafe setup.",
  },
  {
    q: "Can DigiNizam manage multiple cafe outlets?",
    a: "Yes. DigiNizam supports multi-outlet setups with branch-level sales, stock and reporting.",
  },
];

export default function CafePageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(cafeFaqs)} />
      <PageHero
        label="Food / Cafe"
        title="Cafe POS Software for Orders, Billing & Stock"
        description="Connect cafe counter orders with preparation information and billing. Review stock, reports and connectivity for your coffee shop configuration."
      />

      <SectionCopy
        label="Overview"
        title="What Is Cafe POS Software?"
        image="https://images.unsplash.com/photo-1774296896193-48ac7d267c5e?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Food / Cafe POS solution"
        imageBrief="Modern cafe counter with DigiNizam order-entry screen and visible order ticket context; coffee/food environment, professional not stock-photo generic."
      >
        <p>
          Cafe POS software records food and drink orders, connects them with billing and shares
          preparation information where configured. DigiNizam can use its restaurant workflow for
          cafe counter operations. Confirm ticket routing, linked stock and connectivity for the
          selected setup.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Create the cafe menu and link inventory where required.",
          "Take dine-in, takeaway or counter orders.",
          "Send confirmed items to KOT/KDS where enabled.",
          "Complete billing and record payment on the same order.",
          "Review sales and stock movement by outlet.",
        ]}
      />

      <MediaSlot
        kind="video"
        alt="Short DigiNizam product workflow clip"
        brief="15–25 sec real workflow clip: enter cafe order → send to KOT/KDS → open bill/payment → show inventory or outlet report."
        aspect="aspect-video"
        className="max-w-5xl mx-auto"
      />

      <SectionCopy label="Billing" title="Fast Cafe Counter Billing">
        <p>
          Process dine-in, takeaway or counter orders through a quick POS flow designed to keep
          the line moving while each sale remains connected with reporting and inventory.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Kitchen"
        title="Kitchen / Bar Ticket Workflow"
        reverse
        image="https://images.unsplash.com/photo-1564686366307-70634d4efd8c?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Food / Cafe inventory / workflow in DigiNizam"
        imageBrief="Real DigiNizam KOT/KDS or inventory/report screen showing cafe preparation or ingredient stock where available."
      >
        <p>
          Confirmed food or beverage orders go from the counter to the kitchen or bar as
          preparation tickets, so the counter and kitchen/bar team work from the same order
          information. Confirm ticket routing and devices for your cafe during the demo.
        </p>
      </SectionCopy>

      <SectionCopy label="Inventory" title="Ingredient & Stock Visibility">
        <p>
          Where the selected setup links billed items with stock, recorded sales can update the
          connected inventory. Review the mapping and stock movements using your menu examples
          rather than assuming recipe costing or automatic ingredient deduction.
        </p>
      </SectionCopy>

      <SectionCopy label="Connectivity" title="Offline-Ready Cafe Operations" reverse>
        <p>
          Ordering and billing can continue when internet connectivity drops, and records
          synchronize to the web as soon as the connection returns. Confirm which actions still
          need a live connection for your cafe setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Multi-outlet" title="Multi-Outlet Cafe Reporting">
        <p>
          For growing cafe brands, DigiNizam supports branch-level stock, sales and reporting so
          owners can review more than one outlet from a connected system.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who Is DigiNizam Food / Cafe For?" reverse>
        <p>
          Coffee shops, cafes, dessert bars, juice bars and quick-service food outlets that need
          fast billing, preparation flow, stock visibility and reporting.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to see the live workflow.
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Business Setup">
        <p>
          Cafes and coffee shops in Pakistan can review counter orders, preparation tickets and
          stock with DigiNizam. Confirm the available devices and offline steps before rollout.
        </p>
        <IndustryContextLinks featuresLabel="order and stock features" peer="restaurant" />
      </SectionCopy>

      <SeoFaq
        label="Cafe POS"
        title="Cafe software questions"
        description="Direct answers for common cafe and coffee-shop software questions."
        items={cafeFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Cafe"
        description="Book a demo to review counter orders, preparation flow, billing and stock. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
