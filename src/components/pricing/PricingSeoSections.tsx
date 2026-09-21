import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const sections = [
  {
    title: "What Is Included",
    body: "Plans cover POS billing, inventory tools, terminals as listed, and reporting. Exact inclusions for your outlets are confirmed on a demo—we do not publish unverified or competitor prices.",
  },
  {
    title: "What Affects Cost",
    body: "POS software pricing depends on the number of outlets, billing counters, inventory requirements, business modules, terminals and whether you need on-site setup or hardware. Multi-location businesses may require additional configuration based on their workflow.",
  },
  {
    title: "Business Features",
    body: "DigiNizam supports different business workflows across retail, restaurants, pharmacies and other supported industries. Your plan can be configured around the modules and operations your business actually needs.",
    href: "/products/retail",
    linkLabel: "Retail POS software",
  },
  {
    title: "Inventory & Operations",
    body: "Inventory tools help businesses track stock, purchases and sales while keeping operational records connected across supported outlets and locations.",
    href: "/features",
    linkLabel: "Inventory software features",
  },
];

export default function PricingSeoSections() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="How pricing works"
        title="Clear software pricing, quoted for your setup"
        description="Use the plans as a starting point. Confirmed DigiNizam POS software pricing is shared when we see your outlets, terminals and modules."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-surface-border bg-background p-5">
            <h2 className="type-card-title text-foreground mb-2">{section.title}</h2>
            <p className="type-body text-muted leading-relaxed">{section.body}</p>
            {section.href ? (
              <p className="mt-3 text-sm">
                <Link href={section.href} className="text-primary font-semibold hover:underline">
                  {section.linkLabel}
                </Link>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
