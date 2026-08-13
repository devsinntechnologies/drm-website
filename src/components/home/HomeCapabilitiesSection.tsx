import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const blocks = [
  {
    title: "POS & Billing",
    body: "DigiNizam POS software in Pakistan handles counter billing, invoices and daily sales from one screen—online or offline.",
  },
  {
    title: "Inventory Management",
    body: "Track stock with sales and purchases so restaurant and retail teams see what is on hand without extra spreadsheets.",
    href: "/features",
    linkLabel: "Restaurant inventory software",
  },
  {
    title: "Order Management",
    body: "Take dine-in, takeaway and counter orders in one flow and send them through to kitchen and billing.",
  },
  {
    title: "Reports & Analytics",
    body: "See sales, stock and outlet performance in reports built for day-to-day decisions—not just month-end files.",
  },
];

export default function HomeCapabilitiesSection() {
  return (
    <SectionShell tone="background" glow>
      <SectionHeader
        align="center"
        label="Platform"
        title="POS software that runs the day-to-day"
        description="Billing, stock, orders and reporting stay on one platform so growing businesses in Pakistan can operate from a single system."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {blocks.map((block) => (
          <article
            key={block.title}
            className="rounded-2xl border border-surface-border bg-surface p-5"
          >
            <h2 className="type-card-title text-foreground mb-2">{block.title}</h2>
            <p className="type-body text-muted leading-relaxed">{block.body}</p>
            {block.href ? (
              <p className="mt-3 text-sm">
                <Link href={block.href} className="text-primary font-semibold hover:underline">
                  {block.linkLabel}
                </Link>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
