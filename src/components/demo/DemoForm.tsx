"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { Input, Select, Label, FieldError, FieldSuccess } from "@/components/ui/Field";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import { PHONE_DISPLAY } from "@/lib/contact";

const perks = [
  "Live POS & inventory walkthrough",
  "Hardware compatibility review",
  "Workflow fit for your industry",
  "Pricing & ROI discussion",
];

export default function DemoForm() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendDemoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    emailjs
      .sendForm("service_a9bjgoa", "template_2m58y9m", form.current!, "EEOfnkaZIXRveWeQP")
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        () => {
          setStatus("error");
          setErrorMsg("Could not schedule your demo. Please try again or contact us.");
          setLoading(false);
        }
      );
  };

  return (
    <SectionShell tone="background" glow>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <SectionHeader
            label="Free walkthrough"
            title="What you'll see in 30 minutes"
            description="A tailored session with our product team—no sales pressure, no credit card required."
            className="mb-0"
          />

          <ul className="space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-muted">
                <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
                {perk}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <p className="text-sm text-muted italic leading-relaxed">
              &ldquo;The demo showed us exactly how we could cut wastage using DigiNizam inventory.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">Operations lead, multi-outlet retail</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form ref={form} onSubmit={sendDemoRequest} className="surface-card p-6 sm:p-8" noValidate>
            <h3 className="type-card-title text-foreground mb-1">Schedule your demo</h3>
            <p className="type-body text-muted mb-6">We&apos;ll reach out at {PHONE_DISPLAY} or your email to confirm.</p>

            <div className="space-y-4">
              <input type="hidden" name="subject" value="Demo Request" />
              <input type="hidden" name="message" value="Requested a free DigiNizam demo walkthrough." />

              <div>
                <Label htmlFor="user_name">Business name</Label>
                <Input id="user_name" name="user_name" type="text" placeholder="Your business name" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" name="city" type="text" placeholder="Lahore" required />
                </div>
                <div>
                  <Label htmlFor="user_email">Email</Label>
                  <Input id="user_email" name="user_email" type="email" placeholder="you@business.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder={PHONE_DISPLAY} required />
                </div>
                <div>
                  <Label htmlFor="volume">Daily order volume</Label>
                  <Select id="volume" name="volume" defaultValue="0 - 50 orders">
                    <option>0 - 50 orders</option>
                    <option>50 - 200 orders</option>
                    <option>200+ orders</option>
                  </Select>
                </div>
              </div>

              {status === "success" && (
                <FieldSuccess>Demo request sent. Our team will contact you shortly.</FieldSuccess>
              )}
              {status === "error" && <FieldError>{errorMsg}</FieldError>}

              <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading}>
                {loading ? "Scheduling..." : "Book free demo"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}
