"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { Input, Select, Label, FieldError } from "@/components/ui/Field";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import { PHONE_DISPLAY } from "@/lib/contact";
import { sendEmailForm } from "@/lib/emailjs";
import {
  DEMO_SUCCESS_PATH,
  DEMO_SUCCESS_TOKEN_KEY,
  markFormSuccess,
} from "@/lib/form-success";

const perks = [
  "Live POS & inventory walkthrough",
  "Hardware compatibility review",
  "Workflow fit for your industry",
  "Pricing & ROI discussion",
];

export default function DemoForm() {
  const router = useRouter();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    router.prefetch(DEMO_SUCCESS_PATH);
  }, [router]);

  const sendDemoRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentForm = form.current;
    if (!currentForm || loading) return;

    const data = new FormData(currentForm);
    const business = String(data.get("user_name") || "").trim();
    const city = String(data.get("city") || "").trim();
    const email = String(data.get("user_email") || "").trim();
    const phone = String(data.get("user_phone") || "").trim();
    const volume = String(data.get("volume") || "").trim();

    if (!business || !city || !email || !phone) {
      setErrorMsg("Please fill in business name, city, email, and phone.");
      return;
    }

    const messageField = currentForm.elements.namedItem("message") as HTMLInputElement | null;
    if (messageField) {
      messageField.value = [
        "Requested a free DigiNizam demo walkthrough.",
        `Business: ${business}`,
        `City: ${city}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Daily order volume: ${volume || "not specified"}`,
      ].join("\n");
    }

    setLoading(true);
    setErrorMsg("");

    sendEmailForm(currentForm)
      .then(() => {
        markFormSuccess(DEMO_SUCCESS_TOKEN_KEY);
        window.location.replace(DEMO_SUCCESS_PATH);
      })
      .catch(() => {
        setErrorMsg("Could not schedule your demo. Please try again or contact us.");
        setLoading(false);
      });
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
            title="What You Will See"
            description="A 30-minute session on POS, billing, kitchen tickets, inventory and reporting—no sales pressure, no credit card required."
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
          <form ref={form} onSubmit={sendDemoRequest} className="surface-card p-6 sm:p-8">
            <h3 className="type-card-title text-foreground mb-1">Demo / Contact Form</h3>
            <p className="type-body text-muted mb-6">We&apos;ll reach out at {PHONE_DISPLAY} or your email to confirm.</p>

            <div className="space-y-4">
              <input type="hidden" name="subject" value="Demo Request" />
              <input type="hidden" name="message" defaultValue="Requested a free DigiNizam demo walkthrough." />

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
                  <Label htmlFor="user_phone">Phone</Label>
                  <Input id="user_phone" name="user_phone" type="tel" placeholder={PHONE_DISPLAY} required />
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

              {errorMsg ? <FieldError>{errorMsg}</FieldError> : null}

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
