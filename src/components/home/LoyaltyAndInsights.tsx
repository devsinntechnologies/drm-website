"use client";
import React from "react";
import { FiTrendingUp, FiAward, FiZap } from "react-icons/fi";

const LoyaltyAndInsights = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-navy/5">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-royal/10 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-royal/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-navy/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full bg-royal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-royal border border-royal/20">
              Loyalty & Insights
            </span>

            <h1 className="max-w-3xl text-4xl md:text-5xl font-black tracking-tight text-navy leading-tight">
              Make loyalty irresistible and analytics instantly clear.
            </h1>

            <p className="max-w-2xl text-sm md:text-base leading-7 text-navy/70 font-medium">
              Deliver a standout loyalty experience with smart insights that
              help managers act faster, reward customers better, and grow
              revenue effortlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "+85%", label: "Repeat Visits" },
                { number: "+31%", label: "Revenue Growth" },
                { number: "2x", label: "Faster Decisions" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-sm hover:border-royal transition-all"
                >
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-navy">
                      {stat.number}
                    </div>
                    <p className="mt-2 text-sm text-navy/60 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm hover:border-royal transition-all p-6">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-xl mb-4">
                  <FiTrendingUp size={14} /> Loyalty Tracking
                </span>
                <h3 className="text-xl font-black text-navy mb-2">
                  Real-time loyalty tracking
                </h3>
                <p className="text-sm text-navy/60 font-medium">
                  Monitor customer loyalty metrics and reward program performance across all locations in real time.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-white shadow-sm hover:border-royal transition-all p-6">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-xl mb-4">
                  <FiAward size={14} /> Insights Dashboard
                </span>
                <h3 className="text-xl font-black text-navy mb-2">
                  Fast decisions, clear results
                </h3>
                <p className="text-sm text-navy/60 font-medium">
                  Designed for managers who need smart visuals, outlet comparisons, and quick signals without the clutter.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { metric: "+850", label: "FBR authorizations" },
            { metric: "3x", label: "Faster setup" },
            { metric: "+120", label: "Franchise partners" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-8 text-center shadow-sm hover:border-royal transition-all"
            >
              <div className="relative z-10">
                <div className="text-4xl font-black text-navy">
                  {stat.metric}
                </div>
                <p className="mt-3 text-sm text-navy/60 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoyaltyAndInsights;