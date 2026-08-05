"use client";

import React from "react";
import { FiCheckCircle, FiShield, FiCreditCard, FiGlobe } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const items = [
  { icon: FiCheckCircle, title: "FBR fiscal integration", desc: "Digital invoicing and tax reporting built in." },
  { icon: FiShield, title: "SRB · PRA · KPRA", desc: "Regional tax authority sync for compliant retail." },
  { icon: FiCreditCard, title: "JazzCash & EasyPaisa", desc: "Accept wallet and card payments at checkout." },
  { icon: FiGlobe, title: "Multi-branch cloud", desc: "One dashboard for every outlet and warehouse." },
];

export default function ComplianceStripSection() {
  return (
    <SectionShell tone="surface" glow>
      <SectionHeader
        align="center"
        label="Compliance & integrations"
        title="Built for Pakistan's retail ecosystem"
        description="Tax-ready POS, local payments, and cloud sync—without duct-taping tools together."
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
