import { FiCheckCircle, FiMail, FiPhone, FiClock } from "react-icons/fi";
import Button from "@/components/ui/Button";
import SectionShell from "@/components/common/SectionShell";
import { PHONE_DISPLAY } from "@/lib/contact";

const nextSteps = [
  {
    icon: FiMail,
    title: "Message received",
    desc: "Your note was sent to our team. We’ll reply to the email you provided.",
  },
  {
    icon: FiPhone,
    title: "We’ll follow up",
    desc: `Expect a call, WhatsApp, or email at ${PHONE_DISPLAY} within two business hours on working days.`,
  },
  {
    icon: FiClock,
    title: "What happens next",
    desc: "We’ll answer your question or recommend the right DigiNizam setup for your business.",
  },
];

export default function ContactThankYouContent() {
  return (
    <SectionShell tone="background" glow divider={false} className="min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          <FiCheckCircle className="w-8 h-8" />
        </div>
        <span className="section-label">Message sent</span>
        <h1 className="type-page-heading text-foreground tracking-tight mt-3">
          Thank you — we&apos;ll be in touch
        </h1>
        <p className="type-body text-muted mt-4 leading-relaxed max-w-lg mx-auto">
          Your message was sent successfully. Our team will get back to you shortly.
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
          <Button href="/demo" variant="secondary" size="lg">
            Book a free demo
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
