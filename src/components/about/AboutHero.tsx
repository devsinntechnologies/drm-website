"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-white text-[#08162D] py-10 md:py-14 relative overflow-hidden border-b border-gray-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
            ABOUT DEVSINN
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#08162D] mb-3 tracking-tight">
            Our success and <br />
            <span className="text-[#0055FF]">company history.</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed mb-5 max-w-xl">
            Come let&apos;s join hands with N&S Software Solutions and unlock the ultimate potential of your business through cutting-edge ERP, POS, and digital web applications.
          </p>
          
          <div className="space-y-2">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">Ready to transform?</span>
            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-md shadow-[#0055FF]/20 group"
              >
                START A PROJECT <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[420px] h-[320px] sm:h-[370px] rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
            <Image 
              src="/wecare.jpg" 
              alt="DigiNizam & History" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162D]/60 via-transparent to-transparent flex items-end p-5">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest bg-[#0055FF] px-2.5 py-1 rounded-lg shadow-sm">
                Our Legacy
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}