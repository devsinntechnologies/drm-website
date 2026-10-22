import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const sections = [
  {
    "title": "What Is Included",
    "body": "Confirm the software modules, terminals, support and setup services included in your agreement before proceeding.",
    "href": "/features",
    "linkLabel": "POS and inventory features"
  },
  {
    "title": "What Affects POS Software Cost",
    "body": "The required modules, locations, terminals, inventory workflows and setup needs affect the configuration and quote."
  },
  {
    "title": "Software vs Hardware",
    "body": "Confirm hardware separately from software. Ask whether terminals, receipt printers, scanners or other devices are included in your specific quote."
  },
  {
    "title": "Multi-Location Considerations",
    "body": "For more than one outlet, review branch access, stock locations, reporting and synchronization requirements with the team."
  },
  {
    "title": "How Pricing Is Confirmed",
    "body": "Book a demo first. If you want to proceed, discuss your requirements and agree on pricing. DigiNizam uses month-end invoices; confirm the exact terms in your agreement.",
    "href": "/demo",
    "linkLabel": "Book a Demo to Discuss Pricing"
  }
];

export default function PricingSeoSections() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="How pricing works"
        title="Discuss Pricing After Your Demo"
        description="DigiNizam does not currently have fixed published pricing. Start with a demo, then discuss your requirements and agree on pricing if you want to proceed."
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
