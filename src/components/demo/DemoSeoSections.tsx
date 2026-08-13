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
        description="Owners and managers who need to see restaurant POS, billing, inventory, orders and reporting on their own workflow—not a generic slideshow."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        <article className="rounded-2xl border border-surface-border bg-background p-5">
          <h2 className="type-card-title text-foreground mb-2">What Happens Next</h2>
          <p className="type-body text-muted leading-relaxed">
            Submit the form. We confirm by phone or email, then run a live walkthrough of POS, stock and reports. A successful booking is recorded only after the request is sent—not when the page loads.
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
      </div>
    </SectionShell>
  );
}
