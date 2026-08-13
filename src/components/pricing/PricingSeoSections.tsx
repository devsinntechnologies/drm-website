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
    body: "POS software price in Pakistan depends on outlets, billing counters, kitchen displays, inventory modules and whether you need on-site setup or hardware. A multi-branch restaurant costs more to configure than a single cafe.",
  },
  {
    title: "Restaurant Features",
    body: "Restaurant management software pricing should reflect POS, KOT, orders and FBR-ready billing—not only a terminal count. See the restaurant page for the live workflow.",
    href: "/products/restaurant",
    linkLabel: "Restaurant management software",
  },
  {
    title: "Inventory Features",
    body: "Restaurant inventory software is part of the same platform. Stock tracking and branch use are described on the inventory features page; pricing for those modules is confirmed with your plan.",
    href: "/features",
    linkLabel: "Restaurant inventory software",
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
