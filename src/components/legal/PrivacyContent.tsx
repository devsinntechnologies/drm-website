"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiEye, FiServer, FiFileText, FiCheckCircle } from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SiteCTA from "@/components/common/SiteCTA";

const sections = [
  {
    title: "Information we collect",
    content:
      "We collect only the information necessary to operate and improve our platform. This may include business details, employee accounts, order records, payment activity, and operational data generated through your use of DigiNizam.",
    icon: FiFileText,
  },
  {
    title: "How we use your information",
    content:
      "Your information is used to deliver core platform functionality, improve performance, provide analytics, process transactions, maintain security, and offer dedicated customer support.",
    icon: FiEye,
  },
  {
    title: "Data protection & security",
    content:
      "We implement industry-standard security practices to protect your data from unauthorized access. Sensitive information is encrypted in transit and stored securely.",
    icon: FiLock,
  },
  {
    title: "Third-party services",
    content:
      "Certain features may integrate with trusted third parties such as payment gateways, cloud hosting, or analytics tools—all bound by strict security and confidentiality standards.",
    icon: FiServer,
  },
  {
    title: "Data retention",
    content:
      "We retain information only as long as necessary for operational, legal, and business requirements. When no longer needed, data is securely deleted or anonymized.",
    icon: FiShield,
  },
  {
    title: "Your privacy rights",
    content:
      "You maintain control over your business data. You may request access, correction, export, or deletion of your information—we handle requests transparently.",
    icon: FiCheckCircle,
  },
];

export default function PrivacyContent() {
  return (
    <>
      <PageHero
        label="Security & transparency"
        title={
          <>
            Privacy <span className="text-primary">policy</span>
          </>
        }
        description="How DigiNizam collects, uses, and protects your information while delivering a secure platform experience."
      />

      <SectionShell tone="surface">
        <p className="text-sm text-muted mb-8 max-w-3xl">
          Last updated: August 2026. This policy applies to DigiNizam products and services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-surface-border bg-background p-6 hover:border-primary/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="type-card-title text-foreground mb-2">{section.title}</h2>
                <p className="type-body text-muted leading-relaxed">{section.content}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-surface-border bg-background p-6 max-w-3xl">
          <h2 className="type-card-title text-foreground mb-2">Contact us</h2>
          <p className="type-body text-muted">
            Questions about this policy? Email{" "}
            <a href="mailto:privacy@diginizam.com" className="text-primary font-semibold hover:underline">
              privacy@diginizam.com
            </a>{" "}
            or reach out through our contact page.
          </p>
        </div>
      </SectionShell>

      <SiteCTA title="Need help with your account?" description="Our support team is available for security and data questions." />
    </>
  );
}
