"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiHeadphones, FiUsers, FiAward } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";

const stats = [
  { icon: FiHeadphones, value: "24/7", label: "Support available" },
  { icon: FiClock, value: "< 2 hrs", label: "Avg. response time" },
  { icon: FiUsers, value: "500+", label: "Active outlets" },
  { icon: FiAward, value: "10+ yrs", label: "Industry experience" },
];

export default function ContactStats() {
  return (
    <SectionShell tone="surface" className="!py-8 md:!py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-surface-border bg-background p-4 text-center hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
