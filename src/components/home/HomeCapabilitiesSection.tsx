import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const blocks = [
  {
    "title": "POS & Billing",
    "body": "Manage counter billing, invoices and sales records in a connected workflow. Review the checkout process and supported devices during your demo."
  },
  {
    "title": "Inventory Management",
    "body": "Keep stock records connected with supported sales and purchasing activity so teams can review available stock and movements.",
    "href": "/features",
    "linkLabel": "POS and inventory management features"
  },
  {
    "title": "Orders & Operations",
    "body": "Use the workflows relevant to your business. For restaurants, review how orders, kitchen tickets and billing fit together in the selected setup."
  },
  {
    "title": "Reports & Analytics",
    "body": "Review sales, stock and outlet information to support daily operational decisions. Available reports depend on the modules included in your setup."
  }
];

export default function HomeCapabilitiesSection() {
  return (
    <SectionShell tone="background" glow>
      <SectionHeader
        align="center"
        label="Platform"
        title="Platform Overview"
        description="DigiNizam connects billing, inventory, sales and operational records in one POS platform. Choose the setup and modules that match your business."
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
