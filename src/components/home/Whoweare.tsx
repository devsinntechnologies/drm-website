"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhoWeAreSection: React.FC = () => {
  const cards = [
    {
      title: "Why Choose Us",
      desc: "Focused on cost-efficiency, quick execution, and innovative methods to build robust enterprise management systems. We pride ourselves on being agile and responding dynamically to the rapidly changing demands of all major industries."
    },
    {
      title: "Our Mission",
      desc: "We value our customers as true partners, helping them overcome operational challenges by providing reliable software solutions. Our goal is to empower businesses with cutting-edge tools that streamline processes and fuel growth."
    },
    {
      title: "Our Vision",
      desc: "Delivering high value through unique, scalable, and wholesome management tools designed for seamless everyday operations. We aim to become the leading standard for integrated software systems across domestic and international markets."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            We Care For Your Business
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mt-4 tracking-tight">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm font-normal text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;