"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function GoesEverywhereSection() {
  return (
    <section className="py-20 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl">
            Mobile & Cloud Freedom
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#08162D] mt-4 mb-6">
            Devsinn Goes Where You Go
          </h2>
<p className="text-sm md:text-base text-navy/70 font-medium mb-6 leading-relaxed">
             With Centec POS & ERP, your business is just a click away. Monitor sales, inventory, staff attendance, and financial analytics from anywhere.
           </p>
           <div className="p-6 rounded-xl bg-navy/5 border border-navy/10">
             <p className="text-sm font-bold text-navy italic">
              &ldquo;Centec — because your business never stops, and neither should you.&rdquo;
            </p>
          </div>
        </div>

<div className="bg-navy p-8 rounded-xl text-white shadow-xl border border-navy/20">
           <div className="flex justify-between items-center mb-6 border-b border-navy/10 pb-4">
             <span className="text-xs font-bold uppercase tracking-wider text-bright">Remote Dashboard Sync</span>
             <span className="text-xs bg-royal px-3 py-1 rounded-xl font-bold">Online</span>
           </div>
           <div className="space-y-4">
             <div className="p-4 rounded-xl bg-navy/80 border border-navy/20 flex justify-between items-center">
               <div>
                 <p className="text-xs font-black text-white">Branch #01 - Gulberg</p>
                 <p className="text-[10px] text-white/40 mt-1">Today&apos;s Revenue: PKR 348,000</p>
               </div>
               <span className="text-xs font-bold text-bright bg-bright/10 px-3 py-1 rounded-xl">Synced</span>
             </div>
             <div className="p-4 rounded-xl bg-navy/80 border border-navy/20 flex justify-between items-center">
               <div>
                 <p className="text-xs font-black text-white">Branch #02 - DHA Phase 5</p>
                 <p className="text-[10px] text-white/40 mt-1">Today&apos;s Revenue: PKR 291,500</p>
               </div>
               <span className="text-xs font-bold text-bright bg-bright/10 px-3 py-1 rounded-xl">Synced</span>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
}