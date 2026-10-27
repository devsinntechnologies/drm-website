import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import SeoFaq from "@/components/seo/SeoFaq";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const restaurantFaqs: FaqItem[] = [
  {
    q: "What is the best software for restaurant management?",
    a: "The right restaurant software depends on order taking, kitchen coordination, billing, stock, reports and staff workflow. Review the required devices, offline steps, support and total agreed cost. Compare DigiNizam against those requirements in a live demo rather than assuming every restaurant function is included.",
  },
  {
    q: "What is the best restaurant POS software in Pakistan?",
    a: "There is no single best restaurant POS for every business in Pakistan. Compare order and billing flow, kitchen setup, inventory needs, connectivity, reporting and support. Review the available DigiNizam configuration in a demo and agree on requirements before discussing pricing.",
  },
];

const linkClass = "text-primary font-semibold hover:underline";

function SectionCopy({
  label,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
}: {
  label: string;
  title: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
}) {
  return (
    <SectionShell tone={reverse ? "background" : "surface"}>
      <div
        className={`grid grid-cols-1 ${image ? "lg:grid-cols-12" : ""} gap-8 lg:gap-10 items-start`}
      >
        <div className={image ? "lg:col-span-6" : ""}>
          <SectionHeader label={label} title={title} className="mb-4 md:mb-5" />
          <div className="space-y-3 type-body text-muted leading-relaxed">{children}</div>
        </div>
        {image ? (
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-surface-border aspect-[4/3]">
            <Image src={image} alt={imageAlt ?? title} fill className="object-cover" />
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}

export default function RestaurantPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqJsonLd(restaurantFaqs)} />
      <PageHero
        label="Restaurant management"
        title="Restaurant POS Software for Orders, Billing & Daily Operations"
        description="Keep restaurant orders, kitchen information and billing connected. Review stock, reports and the devices and connectivity needed for your restaurant setup."
      />

      <section className="pb-12 md:pb-16 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden border border-surface-border">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/restaurant-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <SectionCopy label="Overview" title="What Is Restaurant POS Software?" reverse>
        <p>
          Restaurant POS software records customer orders, connects them with billing and shares
          preparation details with the kitchen where configured. DigiNizam brings order flow,
          kitchen tickets, stock and sales reports into the restaurant workflow available in the
          selected setup.
        </p>
      </SectionCopy>

      <SectionCopy
        label="POS"
        title="Restaurant POS & Billing"
        image="/restaurantstaff.jpg"
        imageAlt="Restaurant staff using DigiNizam POS billing"
      >
        <p>
          Use the restaurant POS to add items, keep the order connected with the bill and record
          the sale. Payment recording does not provide online payment integration.
        </p>
      </SectionCopy>

      <SectionCopy label="Kitchen" title="Kitchen Order Ticket (KOT)" reverse>
        <p>
          When an order is confirmed on the POS, DigiNizam sends the ticket from the counter to
          the kitchen, so kitchen staff prepare from the same order the cashier is billing.
          Review the kitchen screen setup for your restaurant during the demo.
        </p>
      </SectionCopy>

      <SectionCopy
        label="Orders"
        title="Order Management"
        image="/foodbusiness.jpg"
        imageAlt="Restaurant order and kitchen workflow"
      >
        <p>
          In a digital restaurant workflow, a waiter selects the table or customer order, adds the
          requested items in the POS or waiter device, confirms the order, and sends it into the
          restaurant’s order flow. The kitchen then receives the required order details, while the
          billing side keeps the order connected to the same transaction for later updates and
          payment.
        </p>
        <p>
          Select the table or order, add items and send the preparation details through the
          configured kitchen workflow. Review the enabled devices and ticket routing during a
          demo. QR ordering, delivery integrations and automatic kitchen printing are not included
          as capabilities on this page.
        </p>
      </SectionCopy>

      <SectionCopy label="Stock" title="Inventory & Stock" reverse>
        <p>
          Where billed items are linked with stock in the selected setup, recorded sales can
          update the connected inventory. Review the item-to-stock mapping and stock movements
          using your menu examples; do not assume recipe costing or automatic ingredient
          deduction without checking the live configuration.
        </p>
        <p>
          Review the{" "}
          <Link href="/features" className={linkClass}>
            order, billing and inventory features
          </Link>{" "}
          and confirm the functions available for your selected setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Connectivity" title="Offline-Ready Operations">
        <p>
          Some POS systems can continue selected operations without an active internet connection,
          while others require the cloud to stay connected. Offline capability depends on how the
          software is built and which actions are stored locally. Restaurants should confirm exactly
          what continues to work offline, what is queued for later synchronization, and which
          actions still require internet.
        </p>
        <p>
          DigiNizam POS can keep taking orders and billing when the internet drops. Records are
          stored locally and sync to the web as soon as the connection returns. Confirm with our
          team which actions still need a live connection in your setup.
        </p>
      </SectionCopy>

      <SectionCopy label="Reporting" title="Reports & Analytics" reverse>
        <p>
          Restaurant KPIs are measurable indicators used to understand operational performance.
          Common examples include sales, order volume, average order value, top-selling items,
          inventory usage, stock shortages, cancellations and service or order timing. The most
          useful KPIs depend on the restaurant’s goals, so owners should focus on measures that
          help them control revenue, stock, service quality and day-to-day operations.
        </p>
        <p>
          Review the sales, order and inventory reports available in your selected DigiNizam
          setup. Other metrics are only part of your workspace if they appear in your live
          reports.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who It Is For">
        <p>
          Restaurants and food-service outlets that need connected order, billing, stock and
          reporting records can review DigiNizam in a demo. Confirm the kitchen workflow, number
          of locations and connectivity needed for the selected configuration.{" "}
          <Link href="/demo" className={linkClass}>
            Book a demo
          </Link>{" "}
          to see the live workflow, or{" "}
          <Link href="/contact" className={linkClass}>
            contact the team
          </Link>{" "}
          if you already know your outlet count.
        </p>
      </SectionCopy>

      <SectionCopy label="Your setup" title="Discuss Your Restaurant Setup" reverse>
        <p>
          Restaurants in Pakistan can review order taking, kitchen coordination, billing and
          connectivity with DigiNizam. Compare the available workflow with your outlet
          requirements before agreeing on pricing.
        </p>
        <p>
          Read the{" "}
          <Link href="/blog/what-is-a-restaurant-pos-system" className={linkClass}>
            restaurant POS guide
          </Link>{" "}
          for an overview of orders, kitchen flow and billing. For local buying considerations,
          read the guide to{" "}
          <Link href="/blog/best-pos-software-for-restaurants-in-pakistan" className={linkClass}>
            restaurant POS selection in Pakistan
          </Link>
          .
        </p>
        <p>
          See{" "}
          <Link href="/pricing" className={linkClass}>
            how DigiNizam pricing is agreed
          </Link>{" "}
          after the demo and requirements discussion.
        </p>
      </SectionCopy>

      <SeoFaq
        label="Restaurant POS"
        title="Restaurant software questions"
        description="Direct answers for common restaurant software questions. DigiNizam is not ranked as “best” here—compare it on workflow, support and cost."
        items={restaurantFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Restaurant"
        description="Book a demo to review orders, kitchen workflow, billing, stock and reports. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
