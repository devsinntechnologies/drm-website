"use client";

import React from "react";
import ComingSoon from "@/components/ComingSoon";

export default function ApparelComingSoon() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      <section className="relative py-28 md:py-40 overflow-hidden border-b border-gray-200 flex items-center bg-[#08162D]">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
            <source src="/restaurant-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#08162D]/70"></div>
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055FF]/20 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/20 border border-[#0055FF]/40 px-4 py-2 rounded-xl mb-6 shadow-md">
            N&S RETAIL SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
            Apparel &amp; Garments <span className="text-[#0055FF]">Solution</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Comprehensive POS system for apparel stores and garment shops. Manage inventory, track sales, and streamline operations effortlessly.
          </p>
        </div>
      </section>
      <ComingSoon pageName="Apparel &amp; Garments Solution" />
    </main>
  );
}