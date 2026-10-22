"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiBox, FiBarChart2, FiZap } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

const operationFeatures = [
  { icon: FiTrendingUp, title: "Sales Records", desc: "Review sales, stock and outlet information to support daily operational decisions." },
  { icon: FiBox, title: "Inventory Management", desc: "Keep stock records connected with supported sales and purchasing activity so teams can review available stock and movements." },
  { icon: FiBarChart2, title: "Reports & Analytics", desc: "Available reports depend on the modules included in your setup." },
  { icon: FiZap, title: "24/7 Support", desc: "Bring daily work into connected processes, with tailored setup and 24/7 support." },
];

export default function HomeAiSection() {
  return (
    <SectionShell tone="navy" glow className="!border-white/10">
      <SectionHeader
        label="Connected operations"
        title="Multi-Store Control"
        description="Discuss your branches, stock locations and reporting needs so DigiNizam can be configured around the way your business operates."
        className="[&_h2]:text-white [&_p]:text-white/65"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {operationFeatures.map((feature, idx) => {
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
