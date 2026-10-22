"use client";

import React from "react";
import { FiCheckCircle, FiShield, FiCreditCard, FiGlobe } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const items = [
  { icon: FiCheckCircle, title: "24/7 Support", desc: "DigiNizam provides 24/7 support." },
  { icon: FiShield, title: "Tailored Setup", desc: "Discuss onboarding, support channels and the requirements of your chosen setup with the team." },
  { icon: FiCreditCard, title: "Month-End Invoices", desc: "DigiNizam uses month-end invoices; confirm the exact terms in your quote." },
  { icon: FiGlobe, title: "English-Language Offering", desc: "DigiNizam serves customers globally through its English-language offering." },
];

export default function ComplianceStripSection() {
  return (
    <SectionShell tone="surface" glow>
      <SectionHeader
        align="center"
        label="Support"
        title="Support & Reliability"
        description="DigiNizam provides 24/7 support. Discuss onboarding, support channels and the requirements of your chosen setup with the team."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-border bg-background p-5 hover:border-primary/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="type-card-title text-foreground mb-1">{item.title}</h3>
              <p className="type-body text-muted">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
