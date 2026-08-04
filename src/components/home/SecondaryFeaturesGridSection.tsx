"use client";

import React from "react";
import { FiCreditCard, FiBarChart2, FiPercent } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SecondaryFeaturesGridSection() {
  const secondaryFeatures = [
    {
      icon: <FiCreditCard className="w-6 h-6 text-primary" />,
      title: "Multi-Payment Options",
      desc: <><span className="text-black font-black">Digi</span><span className="text-primary font-black">Nizam</span> POS system supports different payment options like credit or debit cards to give your customers utmost freedom of choice.</>
    },
    {
      icon: <FiBarChart2 className="w-6 h-6 text-primary" />,
      title: "Detailed Reports",
      desc: "Access detailed data insights and income statements to track financial performance and support business growth."
    },
    {
      icon: <FiPercent className="w-6 h-6 text-primary" />,
      title: "Offers and Discounts",
      desc: "Advanced POS software that makes it easy to manage loyalty programs and sales across single or multiple store locations."
    }
  ];

  return (
    <section className="py-8 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
      
      {/* Background Glow with 20% Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryFeatures.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-4 rounded-2xl bg-surface border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-4 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary transition-all">
                  {React.cloneElement(item.icon, {
                    className: "w-6 h-6 text-primary group-hover:text-white transition-all"
                  })}
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs font-normal text-muted leading-relaxed">
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