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

const cafeFaqs: FaqItem[] = [
  {
    q: "What is cafe POS software?",
    a: "Cafe POS software is a system for recording quick-service food and beverage orders, billing, kitchen/bar preparation flow, stock and reporting in one connected workflow.",
  },
  {
    q: "Does DigiNizam support KOT or KDS for cafes?",
    a: "Yes. DigiNizam's restaurant workflow includes KOT/KDS functionality that can be used for cafe preparation flow where enabled.",
  },
  {
    q: "Can cafe inventory update from sales?",
    a: "Yes. Where recipes or linked stock are configured, billed items can deduct ingredients or inventory from the connected stock records.",
  },
  {
    q: "Can DigiNizam cafe POS work offline?",
    a: "Selected ordering and billing operations can continue offline and synchronize later. Confirm the exact offline steps for your cafe configuration.",
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
        title="Cafe POS Software in Pakistan for Fast Counter Operations"
        description="Connect cafe billing, orders, kitchen or bar tickets, inventory and reports in one workflow built for fast-moving food and beverage counters."
      />

      <SectionCopy
        label="Overview"
        title="What Is Cafe POS Software?"
        image="https://images.unsplash.com/photo-1774296896193-48ac7d267c5e?q=80&w=1600&auto=format&fit=crop"
        imageAlt="DigiNizam Food / Cafe POS solution"
        imageBrief="Modern cafe counter with DigiNizam order-entry screen and visible order ticket context; coffee/food environment, professional not stock-photo generic."
      >
        <p>
          Cafe POS software connects quick counter billing with order flow, kitchen or bar
          tickets, inventory and reporting. DigiNizam&rsquo;s restaurant workflow can be adapted
          for cafes that need fast service, clear order routing and stock visibility without
          using separate systems for the counter and back of house.
        </p>
      </SectionCopy>

      <WorkflowSteps
        title="A Practical Workflow With DigiNizam"
        reverse
        steps={[
          "Create the cafe menu and link inventory where required.",
          "Take dine-in, takeaway or counter orders.",
          "Send confirmed items to KOT/KDS where enabled.",
          "Complete billing and payment on the same order.",
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
          Use DigiNizam&rsquo;s KOT/KDS workflow to send confirmed food or beverage orders into
          the preparation flow so the counter and kitchen/bar team work from the same order
          information.
        </p>
      </SectionCopy>

      <SectionCopy label="Inventory" title="Ingredient & Stock Visibility">
        <p>
          Where recipes and linked inventory are configured, billed items can deduct ingredients
          or stock so cafe inventory stays connected with daily sales instead of being updated
          only after service.
        </p>
      </SectionCopy>

      <SectionCopy label="Connectivity" title="Offline-Ready Cafe Operations" reverse>
        <p>
          Selected ordering and billing work can continue when internet connectivity drops, with
          locally stored records synchronized when the connection returns. Confirm exactly which
          steps are available offline for the cafe setup.
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

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "cafe inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Cafe POS"
        title="Cafe software questions"
        description="Direct answers for common cafe and coffee-shop software questions."
        items={cafeFaqs}
      />

      <SiteCTA
        title="See DigiNizam Cafe POS in Action"
        description="Book a free demo to walk through counter billing, KOT/KDS, inventory, offline-ready operations and reporting for your cafe or coffee-shop workflow."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
