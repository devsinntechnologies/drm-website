"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WhoWeAreSection: React.FC = () => {
  const cards = [
    {
      title: "Why Choose Us",
      desc: "Focused on cost-efficiency, quick execution, and innovative methods to build robust enterprise management systems. We pride ourselves on being agile and responding dynamically to industry demands."
    },
    {
      title: "Our Mission",
      desc: "We value our customers as true partners, helping them overcome operational challenges by providing reliable software solutions designed to streamline processes and fuel growth."
    },
    {
      title: "Our Vision",
      desc: "Delivering high value through unique, scalable, and wholesome management tools designed for seamless everyday operations across domestic and international markets."
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            We Care For Your Business
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08162D] mt-3 tracking-tight">
            WHO WE ARE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Attractive Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[350px] sm:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-md group"
          >
            <Image 
              src="/whoweare.jpg" 
              alt="Who We Are - DEVSINN" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162D]/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#0055FF] px-3 py-1.5 rounded-lg shadow-sm">
                Excellence in Execution
              </span>
            </div>
          </motion.div>

          {/* Right Side: Cards Stack */}
          <div className="lg:col-span-7 space-y-4">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all group"
              >
                <h3 className="text-base md:text-lg font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-normal text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;