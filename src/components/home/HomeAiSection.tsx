"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBox, FiBarChart2, FiZap } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const aiFeatures = [
  {
    icon: FiTrendingUp,
    title: "Sales forecasting",
    desc: "Predict demand from history and seasonality so you stock and staff smarter.",
  },
  {
    icon: FiBox,
    title: "Smart reorder alerts",
    desc: "Get low-stock warnings before shelves go empty—across one store or many.",
  },
  {
    icon: FiBarChart2,
    title: "Profit insights",
    desc: "See margins, bestsellers, and leaks in dashboards built for decision-makers.",
  },
  {
    icon: FiZap,
    title: "Faster checkout",
    desc: "Speed through billing with offline-ready POS that keeps queues moving.",
  },
];

export default function HomeAiSection() {
  return (
    <SectionShell tone="navy" glow className="!border-white/10">
      <SectionHeader
        label="Intelligent operations"
        title={
          <>
            AI built into every <span className="text-secondary">workflow</span>
          </>
        }
        description="From forecasting to checkout—DigiNizam helps teams act on data, not guesswork."
        className="[&_h2]:text-white [&_p]:text-white/65"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiFeatures.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-primary/40 hover:bg-primary/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="type-card-title text-white mb-2">{feature.title}</h3>
              <p className="type-body text-white/60">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
