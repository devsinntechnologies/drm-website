"use client";

import React from "react";
import { FiCloud, FiGrid, FiBox, FiFileText, FiZap, FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SmartFeaturesGridSection() {
  const features = [
    {
      icon: <FiCloud className="w-5 h-5 text-[#0055FF]" />,
      title: "Online / Offline",
      desc: "We offer one-time or cloud-based Point of Sale (POS) software tailored to your business needs, with full training and support included."
    },
    {
      icon: <FiGrid className="w-5 h-5 text-[#0055FF]" />,
      title: "Multi-Store Control",
      desc: "DigiNizam POS software gives you the ultimate flexibility to manage multiple stores seamlessly from a single dashboard."
    },
    {
      icon: <FiBox className="w-5 h-5 text-[#0055FF]" />,
      title: "Inventory Management",
      desc: "Advanced inventory tracking to effortlessly manage stock from suppliers to your warehouse and retail floors."
    },
    {
      icon: <FiFileText className="w-5 h-5 text-[#0055FF]" />,
      title: "Unlimited Invoicing",
      desc: "Quickly generate and send professional, branded invoices featuring your company logo to suppliers and customers."
    },
    {
      icon: <FiZap className="w-5 h-5 text-[#0055FF]" />,
      title: "Fast Sales Processing",
      desc: "Enjoy speedy check-out processing for maximum customer satisfaction, making DigiNizam a top-tier POS choice."
    },
    {
      icon: <FiAlertTriangle className="w-5 h-5 text-[#0055FF]" />,
      title: "Stock-out Alerts",
      desc: "Get intelligent low-stock alerts before items vanish, ensuring you never run out of inventory and lose customer trust."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            Smart Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08162D] mt-3 tracking-tight">
            SMART SUITE OF FEATURES
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-3 font-normal leading-relaxed">
            Everything your enterprise needs to automate transactions, manage stock, and optimize growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 bg-[#0055FF]/10 rounded-lg w-fit mb-4 group-hover:bg-[#0055FF] transition-all">
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5 text-[#0055FF] group-hover:text-white transition-all"
                  })}
                </div>
                <h3 className="text-base md:text-lg font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm font-normal text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}