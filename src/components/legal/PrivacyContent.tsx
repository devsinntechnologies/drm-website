"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiEye, FiServer, FiFileText, FiCheckCircle } from "react-icons/fi";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect only the information necessary to operate and improve our enterprise platform. This may include business details, employee accounts, order records, payment activity, and operational data generated through your use of the platform.",
    icon: <FiFileText size={18} />
  },
  {
    title: "How We Use Your Information",
    content: "Your information is used to deliver core platform functionality, improve operational performance, provide analytics, process transactions, maintain security, and offer dedicated customer support.",
    icon: <FiEye size={18} />
  },
  {
    title: "Data Protection & Security",
    content: "We implement industry-standard security practices to protect your data from unauthorized access or misuse. All sensitive information is encrypted during transmission and securely stored.",
    icon: <FiLock size={18} />
  },
  {
    title: "Third-Party Services",
    content: "Certain features may integrate with trusted third-party services such as payment gateways, cloud hosting providers, or analytics tools, requiring strict security and confidentiality standards.",
    icon: <FiServer size={18} />
  },
  {
    title: "Data Retention",
    content: "We retain information only for as long as necessary to fulfill operational, legal, and business requirements. When data is no longer required, it is securely deleted or anonymized.",
    icon: <FiShield size={18} />
  },
  {
    title: "Your Privacy Rights",
    content: "You maintain control over your business data. Depending on your region, you may request access, correction, export, or deletion of your information handled transparently.",
    icon: <FiCheckCircle size={18} />
  },
];

const PrivacyContent = () => {
  return (
    <section className="py-6 md:py-8 bg-surface text-foreground relative overflow-hidden border-b border-surface-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-4"
        >
          <span className="section-label">Security & transparency</span>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
            Privacy <span className="text-primary">Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            This policy explains how DigiNizam collects, uses, and protects your information while delivering a secure platform experience.
          </p>
        </motion.div>

        {/* Policy Cards (6 Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                {section.icon}
              </div>

              <h3 className="text-sm font-black text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {section.title}
              </h3>

              <p className="text-muted text-[11px] leading-relaxed font-normal">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrivacyContent;