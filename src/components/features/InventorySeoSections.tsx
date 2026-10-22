import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const sections = [
  {
    "title": "POS & Billing",
    "body": "Keep product records, billing and sales information connected. Review the available checkout and invoice workflows for your business."
  },
  {
    "title": "Reports & Analytics",
    "body": "Use available reports to review sales, stock movement, product activity and outlet performance. Ask to see the specific reports you need in the live demo."
  },
  {
    "title": "Multi-Store Control",
    "body": "Review branch-level stock, sales and reporting across the locations included in your setup. Confirm access rules and synchronization needs during configuration."
  },
  {
    "title": "Industry Workflows",
    "body": "Explore retail billing and inventory, restaurant order and kitchen workflows, and other supported industry configurations.",
    "href": "/products/retail",
    "linkLabel": "Retail POS software"
  }
];

export default function InventorySeoSections() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="POS and inventory"
        title="Connected Business Workflows"
        description="Explore the tools DigiNizam provides for billing, inventory, reporting and day-to-day business operations, with workflows configured to your business."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-surface-border bg-background p-5">
            <h2 className="type-card-title text-foreground mb-2">{section.title}</h2>
            <p className="type-body text-muted leading-relaxed">{section.body}</p>
            {"href" in section && section.href ? (
              <p className="mt-3 text-sm">
                <Link href={section.href} className="text-primary font-semibold hover:underline">
                  {section.linkLabel}
                </Link>
              </p>
            ) : null}
          </article>
        ))}
      </div>
      <p className="text-sm text-muted text-center mt-8">
        See{" "}
        <Link href="/products/toys" className="text-primary font-semibold hover:underline">
          toy store POS software
        </Link>
        ,{" "}
        <Link href="/products/furniture" className="text-primary font-semibold hover:underline">
          furniture store POS software
        </Link>
        ,{" "}
        <Link href="/pricing" className="text-primary font-semibold hover:underline">
          POS software pricing
        </Link>{" "}
        or{" "}
        <Link href="/demo" className="text-primary font-semibold hover:underline">
          book a demo
        </Link>{" "}
        for the setup that matches your outlets.
      </p>
    </SectionShell>
  );
}
