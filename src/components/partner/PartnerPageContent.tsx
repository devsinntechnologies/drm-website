"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sendEmailForm } from "@/lib/emailjs";
import { FiGlobe, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import Button from "@/components/ui/Button";
import { Input, Textarea, Label, FieldError, FieldSuccess } from "@/components/ui/Field";

const benefits = [
  { icon: FiGlobe, title: "Territory support", desc: "Co-branded materials and local market guidance for your region." },
  { icon: FiTrendingUp, title: "Recurring revenue", desc: "Earn on implementations, subscriptions, and add-on services." },
  { icon: FiUsers, title: "Dedicated channel team", desc: "Pre-sales help, demo support, and partner onboarding." },
  { icon: FiAward, title: "Certified partner program", desc: "Training and certification so you sell with confidence." },
];

export default function PartnerPageContent() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    sendEmailForm(form.current!)
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current?.reset();
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <main className="bg-background">
      <PageHero
        label="Partner program"
        title={
          <>
            Grow with <span className="text-primary">DigiNizam</span>
          </>
        }
        description="Resellers, integrators, and consultants—join our partner network and deliver ERP & POS across Pakistan."
      />

      <SectionShell tone="surface">
        <SectionHeader
          align="center"
          label="Partner benefits"
          title="Built for teams who sell software"
          description="We invest in partners who help businesses go digital with reliable retail systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl border border-surface-border bg-background p-5 hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="type-card-title text-foreground mb-2">{b.title}</h3>
                <p className="type-body text-muted">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell tone="background" glow>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Apply now"
              title="Become a partner"
              description="Tell us about your company and the markets you serve. Our channel team will respond within two business days."
              className="mb-0"
            />
          </div>
          <motion.form
            ref={form}
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 surface-card p-6 sm:p-8 space-y-4"
          >
            <input type="hidden" name="subject" value="Partner Program Application" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company name</Label>
                <Input id="company" name="user_name" required placeholder="Your company" />
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input id="email" name="user_email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">About your business</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Regions you cover, current clients, and why you want to partner with DigiNizam..."
              />
            </div>
            {status === "success" && (
              <FieldSuccess>Application received. We&apos;ll be in touch soon.</FieldSuccess>
            )}
            {status === "error" && (
              <FieldError>Could not submit. Email diginizam0@gmail.com directly.</FieldError>
            )}
            <Button type="submit" variant="primary" size="lg" fullWidth disabled={loading}>
              {loading ? "Submitting..." : "Submit application"}
            </Button>
          </motion.form>
        </div>
      </SectionShell>

      <SiteCTA title="Want to see the product first?" description="Book a demo before joining the partner program." />
    </main>
  );
}
