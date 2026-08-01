"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-white text-[#08162D] min-h-[calc(100dvh-60px)] flex items-center justify-center relative overflow-hidden border-b border-gray-200 py-2 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10 w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
            ABOUT DEVSINN
          </span>
          <h1 className="text-base sm:text-lg lg:text-xl font-medium leading-tight text-[#08162D] mb-3 tracking-tight">
            Our success and <br />
            <span className="text-[#0055FF]">company history.</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed mb-4 max-w-xl">
            Come let&apos;s join hands with <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span> Software Solutions and unlock the ultimate potential of your business through cutting-edge ERP, POS, and digital web applications.
            We deliver expert guidance, tailored strategies, and reliable support to help your enterprise grow stronger and operate smarter.
          </p>
          
          <div className="space-y-1.5">
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
          <div className="relative w-full max-w-[400px] h-[260px] sm:h-[300px] lg:h-[340px] rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
            <Image 
              src="/wecare.jpg" 
              alt="DigiNizam & History" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162D]/60 via-transparent to-transparent flex items-end p-4">
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