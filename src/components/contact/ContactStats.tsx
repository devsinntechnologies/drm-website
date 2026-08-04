"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUsers, FiHeadphones, FiAward } from "react-icons/fi";

const stats = [
  {
    icon: <FiHeadphones size={20} />,
    value: "24/7",
    label: "Expert Support",
  },
  {
    icon: <FiClock size={20} />,
    value: "< 2hrs",
    label: "Avg. Response Time",
  },
  {
    icon: <FiUsers size={20} />,
    value: "500+",
    label: "Businesses Served",
  },
  {
    icon: <FiAward size={20} />,
    value: "10+ Yrs",
    label: "Industry Experience",
  },
];

const ContactStats = () => {
  return (
    <div className="py-3 md:py-4 bg-surface border-b border-surface-border relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-primary/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-1.5 p-3 rounded-2xl border border-surface-border hover:border-primary/30 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg font-black text-foreground leading-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-semibold text-muted uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactStats;
