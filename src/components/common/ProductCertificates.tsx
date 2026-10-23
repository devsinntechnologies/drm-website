"use client";

import React from "react";
import { FiGlobe, FiMessageCircle, FiFileText, FiHeadphones } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

// Owner-confirmed service facts; certification and integration evidence is pending.
const serviceFacts = [
  {
    title: "Global customers",
    subtitle: "Business scope",
    icon: FiGlobe,
    desc: "DigiNizam serves businesses globally. Discuss your industry and requirements with our team.",
  },
  {
    title: "English-language offering",
    subtitle: "Language",
    icon: FiMessageCircle,
    desc: "The current DigiNizam offering is available in English.",
  },
  {
    title: "Month-end invoicing",
    subtitle: "Billing",
    icon: FiFileText,
    desc: "Invoices are issued at month-end under the terms agreed with each customer.",
  },
  {
    title: "24/7 technical support",
    subtitle: "Support availability",
    icon: FiHeadphones,
    desc: "DigiNizam provides 24/7 support. Contact our team for help with your setup.",
  },
];

export default function ProductCertificates({ bgLight = false }: { bgLight?: boolean }) {
  return (
    <SectionShell tone={bgLight ? "surface" : "background"}>
      <SectionHeader
        align="center"
        label="Working with DigiNizam"
        title={
          <>
            Service & <span className="text-primary">support</span>
          </>
        }
        description="Our offering, billing and support at a glance."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceFacts.map((badge, idx) => {
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
