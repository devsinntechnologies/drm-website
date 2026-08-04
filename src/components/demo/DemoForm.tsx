"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";
import { Input, Select, Label, FieldError, FieldSuccess } from "@/components/ui/Field";

const DemoForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const perks = [
    "Full system walkthrough",
    "Hardware compatibility check",
    "Custom menu strategy",
    "ROI & pricing analysis",
  ];

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
        (error) => {
          console.error(error);
          setStatus("error");
          setErrorMsg("Could not schedule your walkthrough. Please try again or contact us.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-10 bg-background text-foreground relative overflow-hidden border-t border-surface-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="section-label">Free walkthrough</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 tracking-tight">
              What to expect in your <span className="text-primary">free demo</span>
            </h2>

            <div className="space-y-4">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-3 text-sm sm:text-base font-medium text-muted group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {perk}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 surface-card">
              <p className="text-muted leading-relaxed text-sm italic">
                &ldquo;The demo showed us exactly how we could cut wastage using DigiNizam inventory.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  AP
                </div>
                <div className="text-sm font-semibold text-foreground">Aiden Pearce, CafeX</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-xl"
          >
            <form
              ref={form}
              onSubmit={sendDemoRequest}
              className="surface-card p-5 md:p-6 relative overflow-hidden"
              noValidate
            >
              <div className="space-y-4 relative z-10">
                <input type="hidden" name="subject" value="Demo Request" />
                <input type="hidden" name="message" value="Requested a free DigiNizam walkthrough." />

                <div>
                  <Label htmlFor="user_name">Business name</Label>
                  <Input id="user_name" name="user_name" type="text" placeholder="e.g. CafeX" required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Outlet city</Label>
                    <Input id="city" name="city" type="text" placeholder="e.g. Lahore" required />
                  </div>
                  <div>
                    <Label htmlFor="user_email">Email</Label>
                    <Input id="user_email" name="user_email" type="email" placeholder="you@business.com" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="0300-1234567" required />
                </div>

                <div>
                  <Label htmlFor="volume">Daily order volume</Label>
                  <Select id="volume" name="volume" defaultValue="0 - 50 Orders">
                    <option>0 - 50 Orders</option>
                    <option>50 - 200 Orders</option>
                    <option>200+ Orders</option>
                  </Select>
                </div>

                {status === "success" && (
                  <FieldSuccess>Walkthrough request sent. Our team will contact you soon.</FieldSuccess>
                )}
                {status === "error" && <FieldError>{errorMsg}</FieldError>}

                <Button type="submit" variant="primary" fullWidth disabled={loading}>
                  {loading ? "Scheduling..." : "Schedule Walkthrough"}
                </Button>

                <p className="text-center text-xs text-muted font-medium">
                  No credit card required. No commitment.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
