"use client";

import React from "react";
import { FiCheckCircle, FiShield, FiAward, FiServer, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProductCertificatesProps {
  bgLight?: boolean;
}

const certificateBadges = [
  {
    title: "FBR Digital Integration",
    subtitle: "Fully Tax Compliant",
    icon: <FiCheckCircle className="w-6 h-6 text-primary" />,
    desc: "Real-time automated fiscal invoice reporting compliant with FBR standards."
  },
  {
    title: "ISO 9001 Certified",
    subtitle: "Quality Standards",
    icon: <FiAward className="w-6 h-6 text-primary" />,
    desc: "Adheres to international quality management and software standards."
  },
  {
    title: "Enterprise Cloud Security",
    subtitle: "Bank-Grade Encryption",
    icon: <FiShield className="w-6 h-6 text-primary" />,
    desc: "End-to-end data encryption with secure role-based access permission controls."
  },
  {
    title: "24/7 Technical Support",
    subtitle: "Dedicated Engineering",
    icon: <FiServer className="w-6 h-6 text-primary" />,
    desc: "Round-the-clock helpdesk, data backup redundancy, and continuous maintenance."
  }
];

export default function ProductCertificates({ bgLight = false }: ProductCertificatesProps) {
  return (
    <section className={`py-4 md:py-6 ${bgLight ? "bg-surface" : "bg-surface"} border-b border-surface-border relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-xl mb-2 border border-primary/20">
            CERTIFICATES &amp; ACHIEVEMENTS
          </span>
          <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
            Accredited Quality &amp; <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-muted text-xs sm:text-sm font-normal mt-1">
            Certified software engineered to satisfy strict regulatory and security frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificateBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-surface border border-surface-border rounded-2xl p-4 shadow-sm hover:border-primary hover:shadow-lg transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                {badge.icon}
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-wider mb-1">
                {badge.subtitle}
              </span>
              <h3 className="text-sm font-black text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {badge.title}
              </h3>
              <p className="text-muted text-xs font-normal leading-relaxed">
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
