"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BoostSalesSection() {
  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-3 border border-[#0055FF]/20">
            SALES OPTIMIZATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08162D] leading-tight mb-4 tracking-tight">
            Boost Your Sales with <br />
            <span className="text-[#0055FF]">DigiNizam POS Solution</span>
          </h2>

          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed mb-4">
            Increase your sales by up to 200% with DigiNizam's powerful and easy-to-use sales features. Make shopping effortless for your customers with a seamless one-click checkout that speeds up transactions. Offer flexible payment options, including split payments, to enhance convenience.
          </p>

          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed">
            Attract more buyers with custom discounts and promotions while building customer loyalty through an integrated reward system. Additionally, manage your sales team efficiently with a robust commission agent tracking system, ensuring smooth business operations and increased profitability.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4 items-center"
        >
          <div className="space-y-4">
            <div className="relative h-56 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Image src="/salesolution'.jpg" alt="DEVSINN POS Solution" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <Image src="/receipt.jpg" alt="Receipt Printing" fill className="object-cover" />
            </div>
          </div>

          <div className="relative h-[380px] rounded-xl overflow-hidden shadow-md border border-gray-100 mt-6">
            <Image src="/cashier.jpg" alt="Cashier Management" fill className="object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}