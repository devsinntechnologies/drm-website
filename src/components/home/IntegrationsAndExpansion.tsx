"use client";
import React from "react";
import { FiShield, FiBarChart2, FiGrid } from "react-icons/fi";

const IntegrationsAndExpansion = () => {
  const auths = ["FBR", "SRB", "PRA", "KPRA"];
  const rules = ["Franchise Order Management", "Set credit or other rules", "Monitor ROI securely"];

  return (
    <section className="relative overflow-hidden py-10 bg-white">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-royal/10 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-bright/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-royal/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-navy/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full bg-royal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-royal border border-royal/20">
              Compliance & Expansion
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-navy leading-tight">
                Powerful POS for franchise growth,
                <span className="block text-royal">built to scale without compromise.</span>
              </h2>
              <p className="max-w-2xl text-sm md:text-base leading-7 text-navy/70 font-medium">
                Transform compliance into a competitive advantage with a POS platform that connects revenue authorities, franchise operations, and real-time insights in one seamless experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "4+", label: "Authority connectors" },
                { value: "100%", label: "Audit-ready flows" },
                { value: "24/7", label: "Realtime compliance" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-sm hover:border-royal transition-all"
                >
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-navy">{item.value}</div>
                    <p className="mt-2 text-sm text-navy/60 font-medium">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-sm hover:border-royal transition-all">
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-xl mb-3">Authority sync</p>
                  <h3 className="text-xl font-black text-navy">FBR, SRB, PRA &amp; KPRA</h3>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal shadow-sm">✓</span>
              </div>
              <div className="mt-6 grid gap-3">
                {auths.map((auth, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-xl bg-navy/5 p-4 shadow-sm border border-navy/5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal/10 text-royal font-bold text-xs">{auth}</div>
                    <span className="text-sm font-medium text-navy/70">Instantly connected and monitored</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-sm hover:border-royal transition-all">
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-xl mb-3">Franchise rules</p>
                  <h3 className="text-xl font-black text-navy">Safe ROI controls</h3>
                </div>
                <div className="inline-flex rounded-xl bg-royal/10 px-3 py-2 text-xs font-bold text-royal">Smart</div>
              </div>
              <div className="mt-6 space-y-3">
                {rules.map((rule, idx) => (
                  <div key={idx} className="rounded-xl bg-navy/5 p-4 text-sm text-navy/70 border border-navy/5">
                    {rule}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Connected everywhere", desc: "One platform that ties regulatory integrations with franchise operations in a seamless workflow.", icon: <FiShield size={20} /> },
            { title: "Beautiful dashboards", desc: "Crystal clear insights and compliance status across every outlet, updated in real time.", icon: <FiBarChart2 size={20} /> },
            { title: "Scalable by design", desc: "Designed to support 10, 100, or 1,000 locations without slowing down.", icon: <FiGrid size={20} /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-navy/10 bg-white p-8 text-center shadow-sm hover:border-royal transition-all"
            >
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-xl bg-royal/10 px-3 py-2 text-xs font-bold text-royal border border-royal/20">
                  {item.icon}
                  {item.title}
                </span>
                <p className="mt-5 text-sm text-navy/60 leading-7 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsAndExpansion;