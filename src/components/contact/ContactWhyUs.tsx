"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiShield, FiTrendingUp, FiLifeBuoy } from "react-icons/fi";

const reasons = [
  {
    icon: <FiZap size={20} />,
    title: "Fast Onboarding",
    desc: "Get up and running quickly with our streamlined setup process and dedicated onboarding team.",
  },
  {
    icon: <FiShield size={20} />,
    title: "Trusted & Secure",
    desc: "Enterprise-grade security and compliance built into every solution we deliver.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "Scalable Solutions",
    desc: "Our software grows with your business — from startup to enterprise, we have you covered.",
  },
  {
    icon: <FiLifeBuoy size={20} />,
    title: "Dedicated Support",
    desc: "A real human team, not just chatbots. We're always available to assist you when it matters.",
  },
];

const ContactWhyUs = () => {
  return (
    <div className="py-4 md:py-5 bg-[#0055FF]/[0.03] border-t border-gray-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[250px] bg-[#0055FF]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20 shadow-sm">
            WHY CHOOSE US
          </span>
          <h2 className="font-black text-[#08162D] tracking-tight">
            Reasons to <span className="text-[#0055FF]">Reach Out</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl mx-auto">
            We don't just answer queries — we become your long-term technology partner.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-[#0055FF]/40 hover:shadow-md transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1.5">{item.title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-normal">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactWhyUs;
