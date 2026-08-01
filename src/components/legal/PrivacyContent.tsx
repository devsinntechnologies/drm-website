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
    <section className="py-6 md:py-8 bg-white text-[#08162D] relative overflow-hidden border-b border-gray-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-4"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20 shadow-sm">
            Security & Transparency
          </span>

          <h1 className="text-base sm:text-lg md:text-xl font-black text-[#08162D] mb-2 md:mb-3 tracking-tight">
            Privacy <span className="text-[#0055FF]">Policy</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Your trust matters to us. This Privacy Policy explains how <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span> collects, uses, protects, and manages your information while delivering a secure and reliable experience.
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
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                {section.icon}
              </div>

              <h3 className="text-sm font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                {section.title}
              </h3>

              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
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