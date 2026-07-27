"use client";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Setup & Installation",
    desc: "Our experts handle everything, from setting up the hardware to cloud configuration.",
    detail: "Avg. 2 hours",
  },
  {
    number: "02",
    title: "Menu & Inventory Sync",
    desc: "Easily import your data. Sync menus and inventory across all your outlets instantly.",
    detail: "Auto-import",
  },
  {
    number: "03",
    title: "Start Selling",
    desc: "Go live and start managing your restaurant with speed, accuracy, and detailed insights.",
    detail: "Instant go-live",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-4 py-2 rounded-xl mb-4 border border-royal/20">
            Quick Start
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-navy">
            How It <span className="text-royal">Works</span>
          </h2>
          <p className="text-navy/70 font-medium text-sm md:text-base mt-4 max-w-lg mx-auto">
            From zero to fully operational in hours — not weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-2xl border border-navy/10 hover:bg-royal hover:text-white transition-all duration-300">
                <span className="font-black text-xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-black text-navy mb-3">{step.title}</h3>
              <p className="text-sm text-navy/70 font-medium leading-relaxed mb-4 max-w-[260px] mx-auto">
                {step.desc}
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-royal/10 text-royal border border-royal/20">
                {step.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;