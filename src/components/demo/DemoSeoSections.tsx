import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_WHATSAPP } from "@/lib/contact";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

export default function DemoSeoSections() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="Before you book"
        title="Who the Demo Is For"
        description="Business owners and managers evaluating POS, inventory or business-management software for their daily operations."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <article className="rounded-2xl border border-surface-border bg-background p-5">
          <h2 className="type-card-title text-foreground mb-2">What Happens Next</h2>
          <p className="type-body text-muted leading-relaxed">
            Submit your details so the team can contact you to arrange a walkthrough and discuss your requirements.
          </p>
        </article>
        <article className="rounded-2xl border border-surface-border bg-background p-5">
          <h2 className="type-card-title text-foreground mb-2">Contact Options</h2>
          <p className="type-body text-muted leading-relaxed">
            Prefer to talk first? Call{" "}
            <a href={`tel:${PHONE_TEL}`} className="text-primary font-semibold hover:underline">
              {PHONE_DISPLAY}
            </a>
            , message{" "}
            <a
              href={`https://wa.me/${PHONE_WHATSAPP}?text=Hi%20DigiNizam%2C%20I%20want%20a%20free%20demo`}
              className="text-primary font-semibold hover:underline"
            >
              WhatsApp
            </a>
            , or use the{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              contact form
            </Link>
            .
          </p>
        </article>
        <article className="rounded-2xl border border-surface-border bg-background p-5 md:col-span-2">
          <h2 className="type-card-title text-foreground mb-2">What happens in a POS software demo?</h2>
          <p className="type-body text-muted leading-relaxed">
            A DigiNizam demo reviews relevant billing, inventory, reporting and operational workflows. You can discuss your business process, required modules and hardware considerations. If you want to proceed after the demo, discuss your requirements and agree on pricing with the team.
          </p>
        </article>
        <article className="rounded-2xl border border-surface-border bg-background p-5 md:col-span-2">
          <h2 className="type-card-title text-foreground mb-2">What should I prepare for a POS demo?</h2>
          <p className="type-body text-muted leading-relaxed">
            Prepare your business type, number of outlets and counters, current billing and stock process, and the questions you want answered. Mention existing hardware, required reports and any offline needs so the walkthrough can focus on your operation.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
