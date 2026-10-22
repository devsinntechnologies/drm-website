"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTag, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

interface PricingBenefitsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
}

const benefits = [
  {
    icon: FiTag,
    title: "Software & Setup",
    desc: "Confirm the software modules, terminals, support and setup services included before proceeding.",
  },
  {
    icon: FiRefreshCw,
    title: "Month-End Invoices",
    desc: "DigiNizam uses month-end invoices; confirm the exact terms when agreeing on pricing.",
  },
  {
    icon: FiShield,
    title: "Hardware Requirements",
    desc: "Confirm hardware separately from software. Ask whether terminals, receipt printers, scanners or other devices are included.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    desc: "DigiNizam provides 24/7 support. Discuss onboarding, support channels and the requirements of your chosen setup with the team.",
  },
];

export default function PricingBenefits({ title, highlight, subtitle }: PricingBenefitsProps) {
  const showHeader = Boolean(title || highlight || subtitle);

  return (
    <SectionShell tone="background">
      {showHeader ? (
        <SectionHeader
          align="center"
          label="Why DigiNizam"
          title={
            <>
              {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
            </>
          }
          description={subtitle}
        />
      ) : (
        <div className="text-center mb-10 md:mb-12">
          <span className="section-label">Discuss your setup</span>
          <h2 className="type-section-heading text-foreground tracking-tight mt-0">
            What to Confirm Before Proceeding
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-surface-border bg-surface p-5 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="type-card-title text-foreground mb-2">{item.title}</h3>
              <p className="type-body text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
