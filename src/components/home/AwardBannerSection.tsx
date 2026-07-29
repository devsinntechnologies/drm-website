"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AwardBannerSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-200 text-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-3 border border-[#0055FF]/20">
          INDUSTRY RECOGNITION
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08162D] mb-4 leading-tight tracking-tight">
          Awarded as the Best Multi-Outlet ERP & POS System Solution Provider in Pakistan
        </h2>

        <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed mb-6 max-w-3xl mx-auto">
          No more handling with papers manually when you can get everything done by the <strong className="text-[#08162D] font-bold">DigiNizam</strong> Smart Retail and Inventory Management System in Karachi, Lahore, Islamabad and all over Pakistan that handles all the basic necessary work for your company. From inventory, sales, purchase, expenses, customer ledger, supplier ledger, daily profit, our POS is there to help. When Business Management Suite is running at the background of your business, you are freer to attend to the business at hand.
        </p>

        <div>
          <Link 
            href="/demo" 
            className="inline-block bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-md shadow-[#0055FF]/20"
          >
            GET FREE DEMO
          </Link>
        </div>
      </motion.div>
    </section>
  );
}