"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiShield, FiServer, FiLock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const termsSections = [
  {
    title: "1. Agreement to Terms",
    content: <>By accessing or using the <span className="text-black font-black">Digi</span><span className="text-primary font-black">Nizam</span> platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</>,
    icon: <FiFileText size={18} />
  },
  {
    title: "2. Use License",
    content: "Permission is granted to use our software for your enterprise business operations. This is the grant of a license, not a transfer of title, and you may not reverse engineer or attempt to extract the source code.",
    icon: <FiShield size={18} />
  },
  {
    title: "3. Service Availability",
    content: "While we strive for high uptime, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify or discontinue service for maintenance or updates.",
    icon: <FiServer size={18} />
  },
  {
    title: "4. User Responsibilities",
    content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Ensure accurate information is provided at all times.",
    icon: <FiLock size={18} />
  },
  {
    title: "5. Intellectual Property",
    content: <>All content, features, and functionality of the <span className="text-black font-black">Digi</span><span className="text-primary font-black">Nizam</span> platform are owned by us and protected by international copyright and trademark laws.</>,
    icon: <FiCheckCircle size={18} />
  },
  {
    title: "6. Limitation of Liability",
    content: <><span className="text-black font-black">Digi</span><span className="text-primary font-black">Nizam</span> and its partners shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use our platform services.</>,
    icon: <FiAlertCircle size={18} />
  },
];

const TermsContent = () => {
  return (
    <section className="py-4 md:py-6 bg-surface text-foreground relative overflow-hidden border-b border-surface-border">
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
          <span className="section-label">Last updated: Oct 2026</span>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
            Terms &amp; <span className="text-primary">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the DigiNizam platform.
          </p>
        </motion.div>

        {/* Terms Cards (6 Boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {termsSections.map((section, index) => (
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

export default TermsContent;