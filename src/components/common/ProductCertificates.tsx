"use client";

import React from "react";
import { FiCheckCircle, FiShield, FiAward, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const certificateBadges = [
  {
    title: "FBR digital integration",
    subtitle: "Fully tax compliant",
    icon: FiCheckCircle,
    desc: "Real-time automated fiscal invoice reporting compliant with FBR standards.",
  },
  {
    title: "ISO 9001 certified",
    subtitle: "Quality standards",
    icon: FiAward,
    desc: "Adheres to international quality management and software standards.",
  },
  {
    title: "Enterprise cloud security",
    subtitle: "Bank-grade encryption",
    icon: FiShield,
    desc: "End-to-end encryption with secure role-based access controls.",
  },
  {
    title: "24/7 technical support",
    subtitle: "Dedicated engineering",
    icon: FiServer,
    desc: "Round-the-clock helpdesk, backups, and continuous maintenance.",
  },
];

export default function ProductCertificates({ bgLight = false }: { bgLight?: boolean }) {
  return (
    <SectionShell tone={bgLight ? "surface" : "background"}>
      <SectionHeader
        align="center"
        label="Compliance & quality"
        title={
          <>
            Accredited for <span className="text-primary">trust & security</span>
          </>
        }
        description="Certified software engineered to satisfy strict regulatory and security frameworks."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certificateBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-surface-border bg-surface p-5 hover:border-primary transition-all group text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
                {badge.subtitle}
              </span>
              <h3 className="type-card-title text-foreground mb-1.5">{badge.title}</h3>
              <p className="type-body text-muted">{badge.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
