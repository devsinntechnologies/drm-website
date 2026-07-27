"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="bg-white text-[#08162D] py-20 md:py-28 relative overflow-hidden border-b border-gray-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-6 border border-[#0055FF]/20">
            ABOUT N&S SOFTWARE SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight text-[#08162D] mb-6">
            Our success and <br />
            <span className="text-[#0055FF]">company history.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed mb-8 max-w-xl">
            Come let's join hand with N&S Software Solutions and unlock the ultimate potential of your business through cutting-edge ERP, POS, and digital web applications.
          </p>
          
          <div className="space-y-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-gray-400">Ready to transform?</span>
            <div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg group"
              >
                START A PROJECT <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Showcase */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-[480px] aspect-square rounded-2xl border-8 border-gray-100 shadow-xl overflow-hidden flex items-center justify-center bg-gray-50">
            <Image 
              src="/logo2.png" 
              alt="N&S Software Solutions Team & History" 
              fill
              className="object-cover scale-105"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}