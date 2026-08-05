"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiShield, FiTrendingUp, FiLifeBuoy } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const reasons = [
  {
    icon: FiZap,
    title: "Fast onboarding",
    desc: "Guided setup so your team goes live quickly—with training included.",
  },
  {
    icon: FiShield,
    title: "FBR-ready & secure",
    desc: "Compliant invoicing and enterprise-grade data protection built in.",
  },
  {
    icon: FiTrendingUp,
    title: "Built to scale",
    desc: "From single outlet to multi-branch chains on one connected platform.",
  },
  {
    icon: FiLifeBuoy,
    title: "Real human support",
    desc: "Dedicated specialists—not bots—when operations cannot wait.",
  },
];

export default function ContactWhyUs() {
  return (
    <SectionShell tone="surface">
      <SectionHeader
        align="center"
        label="Why DigiNizam"
        title="A partner, not just a vendor"
        description="We help you choose, deploy, and grow with software that fits how you actually operate."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-surface-border bg-background p-5 hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="type-card-title text-foreground mb-2">{item.title}</h3>
              <p className="type-body text-muted">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
