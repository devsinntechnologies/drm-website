"use client";

import React from "react";
import { FiCloud, FiGrid, FiBox, FiFileText, FiZap, FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SmartFeaturesGridSection() {
  const features = [
    {
      icon: <FiCloud className="w-6 h-6 text-[#0055FF]" />,
      title: "Online / Offline",
      desc: "We offer one-time or cloud-based Point of Sale (POS) software based on your business needs, with full training and support included."
    },
    {
      icon: <FiGrid className="w-6 h-6 text-[#0055FF]" />,
      title: "Multi-Store Control",
      desc: "With N&S Software Solutions POS software for small businesses in Pakistan gives flexibility to manage multiple stores in one place with ease."
    },
    {
      icon: <FiBox className="w-6 h-6 text-[#0055FF]" />,
      title: "Inventory Management",
      desc: "Advanced inventory tracking to manage stock from suppliers to your warehouse and then to sales."
    },
    {
      icon: <FiFileText className="w-6 h-6 text-[#0055FF]" />,
      title: "Unlimited Invoicing",
      desc: "Quickly send professional invoices with your logo to suppliers and customers."
    },
    {
      icon: <FiZap className="w-6 h-6 text-[#0055FF]" />,
      title: "Fast Sales Processing",
      desc: "Because of speedy check-out processing and customer satisfaction, N&S is considered best POS software in Pakistan."
    },
    {
      icon: <FiAlertTriangle className="w-6 h-6 text-[#0055FF]" />,
      title: "Stock-out Alerts",
      desc: "N&S POS gives low-stock alerts before products vanish, and never let you run out of stock and lose trust of your customers."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow with 20% Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            Smart Suite
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mt-4 tracking-tight">
            Smart Suite of Features
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 font-normal leading-relaxed">
            Everything your enterprise needs to automate transactions, manage stock, and optimize growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-4 bg-[#0055FF]/10 rounded-xl w-fit mb-6 group-hover:bg-[#0055FF] transition-all">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-[#0055FF] group-hover:text-white transition-all"
                  })}
                </div>
                <h3 className="text-xl font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">{item.title}</h3>
                <p className="text-xs font-normal text-gray-600 leading-relaxed">
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