import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const sections = [
  {
    title: "Inventory Overview",
    body: "DigiNizam restaurant inventory software in Pakistan connects stock to POS sales so kitchens and stores see what is on hand without a separate spreadsheet.",
  },
  {
    title: "Stock Tracking & Control",
    body: "Track items, batches and locations. Stock updates with sales, purchases and returns so inventory visibility stays current during service.",
  },
  {
    title: "Inventory with Restaurant Operations",
    body: "Recipes and kitchen tickets deduct ingredients when an order is billed. Inventory work sits inside restaurant operations—not as an after-the-fact count.",
  },
  {
    title: "Inventory Reports",
    body: "Use stock and movement reports to see usage, low stock and variance. Only live product reports are shown here—no placeholder metrics.",
  },
  {
    title: "Multi-Location / Branch Use",
    body: "Where you run more than one outlet, DigiNizam supports per-store stock with sync across branches so transfers and counts stay in one system.",
  },
];

export default function InventorySeoSections() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="Restaurant inventory"
        title="Stock that follows the ticket"
        description="Improve inventory visibility, connect stock with restaurant operations, and reduce manual inventory work."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-surface-border bg-background p-5">
            <h2 className="type-card-title text-foreground mb-2">{section.title}</h2>
            <p className="type-body text-muted leading-relaxed">{section.body}</p>
          </article>
        ))}
      </div>
      <p className="text-sm text-muted text-center mt-8">
        See{" "}
        <Link href="/pricing" className="text-primary font-semibold hover:underline">
          POS software price in Pakistan
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
