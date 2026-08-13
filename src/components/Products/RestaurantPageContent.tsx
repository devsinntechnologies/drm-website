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
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const restaurantFaqs: FaqItem[] = [
  {
    q: "What is the best software for restaurant management?",
    a: "The best restaurant management software depends on the restaurant’s workflow. A strong system should make daily POS and billing work easier, connect order and kitchen operations, support inventory control, provide useful reports, and remain simple for staff to use. Compare solutions based on the features your restaurant actually needs, ease of use, support, reliability and total cost. Evaluate DigiNizam against those same points using its live POS billing, kitchen tickets, order flow, inventory control from sales, and operational reports.",
  },
  {
    q: "What is the best restaurant POS software in Pakistan?",
    a: "There is no single restaurant POS that is best for every business in Pakistan. Restaurant owners should compare systems by billing and order workflow, kitchen coordination, inventory needs, reporting, ease of staff training, support, pricing and the ability to keep operations reliable when connectivity is weak. The right choice is the system that matches the restaurant’s size, workflow and operational priorities. DigiNizam restaurant POS supports counter billing, kitchen tickets, inventory deduction from sales, sales reports, and continued billing when the internet drops—confirm the fit against your workflow in a demo.",
  },
];

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
        title="Restaurant Management Software in Pakistan"
        description="Manage restaurant POS, billing, orders, kitchen workflow, inventory and reporting with DigiNizam restaurant management software built for daily operations."
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

      <SectionCopy
        label="POS"
        title="Restaurant POS & Billing"
        image="/restaurantstaff.jpg"
        imageAlt="Restaurant staff using DigiNizam POS billing"
      >
        <p>
          DigiNizam restaurant POS software handles counter billing, receipts and daily sales from
          one screen. Staff add items, apply the order to the bill, and take payment as part of the
          same ticket.
        </p>
        <p>
          See{" "}
          <Link href="/" className="text-primary font-semibold hover:underline">
            POS software Pakistan
          </Link>{" "}
          for the broader platform, or{" "}
          <Link href="/pricing" className="text-primary font-semibold hover:underline">
            POS software pricing in Pakistan
          </Link>{" "}
          for how plans are quoted.
        </p>
      </SectionCopy>

      <SectionCopy label="Kitchen" title="Kitchen Order Ticket (KOT)" reverse>
        <p>
          After an order is confirmed on the POS, DigiNizam sends the ticket into the kitchen
          order flow. Kitchen staff see the items on a kitchen display (KDS) so they can prepare
          from the same order the cashier is billing—without a separate paper process.
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
          In DigiNizam, that flow is: select the table or order on the POS, add items, send the
          ticket to the kitchen display, and keep the same order on the bill for updates and
          payment. Other steps (such as QR ordering or automatic kitchen printing) are only part
          of a deployment if they are enabled for that restaurant.
        </p>
      </SectionCopy>

      <SectionCopy label="Stock" title="Inventory & Stock" reverse>
        <p>
          When items are billed, DigiNizam can deduct linked ingredients or stock so inventory
          stays tied to restaurant operations instead of a separate spreadsheet.{" "}
          <Link href="/features" className="text-primary font-semibold hover:underline">
            Restaurant inventory software
          </Link>{" "}
          covers stock tracking, branch use and inventory reports in more detail.
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
          DigiNizam POS can continue taking orders and billing when the internet drops. Those
          records are stored locally and sync when the connection returns. Not every POS action is
          offline—confirm with our team which steps still need internet in your setup.
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
          DigiNizam currently reports on sales, order activity, top-selling items and inventory
          movement by outlet. Other metrics are only part of your workspace if they appear in your
          live reports.
        </p>
      </SectionCopy>

      <SectionCopy label="Fit" title="Who It Is For">
        <p>
          DigiNizam restaurant management software is for cafes, quick service, dining rooms and
          multi-outlet restaurants in Pakistan that need POS, kitchen tickets, stock and reporting
          in one system.{" "}
          <Link href="/demo" className="text-primary font-semibold hover:underline">
            Book a demo
          </Link>{" "}
          to see the live workflow, or{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            contact the team
          </Link>{" "}
          if you already know your outlet count.
        </p>
      </SectionCopy>

      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/features", label: "restaurant inventory software" },
          { href: "/pricing", label: "POS software price in Pakistan" },
          { href: "/demo", label: "book a DigiNizam demo" },
        ]}
      />

      <SeoFaq
        label="Restaurant POS"
        title="Restaurant software questions"
        description="Direct answers for common restaurant software questions. DigiNizam is not ranked as “best” here—compare it on workflow, support and cost."
        items={restaurantFaqs}
      />

      <SiteCTA
        title="Book a Demo"
        description="Walk through restaurant POS, billing, KOT, inventory and reporting with our team."
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </div>
  );
}
