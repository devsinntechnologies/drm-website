import { FiCheckCircle, FiMail, FiPhone, FiClock } from "react-icons/fi";
import Button from "@/components/ui/Button";
import SectionShell from "@/components/common/SectionShell";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const nextSteps = [
  {
    icon: FiMail,
    title: "We received your request",
    desc: "Your demo booking was sent to our team. You’ll get a confirmation on the email you provided.",
  },
  {
    icon: FiPhone,
    title: "We’ll call or WhatsApp you",
    desc: `Expect a message at ${PHONE_DISPLAY} or your number within two business hours on working days.`,
  },
  {
    icon: FiClock,
    title: "30-minute walkthrough",
    desc: "We’ll schedule a live POS, inventory, and reporting session tailored to your business.",
  },
];

export default function ThankYouContent() {
  return (
    <SectionShell tone="background" glow divider={false} className="min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          <FiCheckCircle className="w-8 h-8" />
        </div>
        <span className="section-label">Demo booked</span>
        <h1 className="type-page-heading text-foreground tracking-tight mt-3">
          Thank you — we&apos;ll be in touch
        </h1>
        <p className="type-body text-muted mt-4 leading-relaxed max-w-lg mx-auto">
          Your free DigiNizam demo request was sent successfully. Our product team will
          reach out to confirm a time that works for you.
        </p>

        <ul className="mt-10 space-y-3 text-left">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-surface-border bg-surface p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <p className="text-sm text-muted mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href={`tel:${PHONE_TEL}`} variant="secondary" size="lg">
            Call {PHONE_DISPLAY}
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
