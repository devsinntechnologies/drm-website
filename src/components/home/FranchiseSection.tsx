"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiBriefcase, FiCheckSquare, FiPieChart, 
  FiFileText, FiShield, FiCheckCircle 
} from "react-icons/fi";

const FranchiseSection: React.FC = () => {
  const features = [
    { title: "Franchise Performance Tracking", desc: "Compare royalty fees, sales volumes, and audit scores across franchise owners.", icon: <FiBriefcase /> },
    { title: "Standardized Operations", desc: "Lock down workflows, inventory requirements, and checkout guidelines across all partners.", icon: <FiCheckSquare /> },
    { title: "Centralized Reporting", desc: "Access real-time aggregated reports for franchise network evaluation and royalties.", icon: <FiPieChart /> },
    { title: "Franchise Compliance Monitoring", desc: "Ensure outlets utilize correct recipes, approved vendors, and stick to tax guidelines.", icon: <FiShield /> },
    { title: "Central Menu Control", desc: "Enforce consistent menu listings, base pricing, and corporate brand promotions.", icon: <FiFileText /> },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* Details - Left Side */}
          <div>
            <span className="section-label">Enterprise Ready</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Enterprise-Grade <span className="text-primary">Franchise Management</span>
            </h2>
            <p className="text-muted text-lg mb-8 font-medium">
              Scale your restaurant brand with confidence. Maintain 100% brand consistency, track compliance, consolidate revenues, and coordinate operations across all franchise owners from a central command center.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base mb-1">{feat.title}</h4>
                    <p className="text-muted text-xs leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Franchise Scoreboard Mockup - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-xl" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/95 bg-white p-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Franchise Network Audit</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Compliance Scoreboard</p>
                </div>
                <span className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  All Compliant
                </span>
              </div>

              {/* Franchise Partners Grid */}
              <div className="space-y-4">
                {[
                  { name: "Franchise Partner A (NYC)", compliance: "98%", royalty: "6.0% Paid", sales: "182,500/mo" },
                  { name: "Franchise Partner B (LA)", compliance: "95%", royalty: "6.0% Paid", sales: "154,200/mo" },
                  { name: "Franchise Partner C (CHI)", compliance: "92%", royalty: "6.0% Paid", sales: "128,900/mo" },
                ].map((fran, idx) => (
                  <div key={fran.name} className="p-4 bg-background/50 border border-surface-border/60 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-foreground">{fran.name}</span>
                      <span className="text-[10px] font-bold text-emerald-500">Compliance: {fran.compliance}</span>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-muted font-bold mt-1">
                      <span>Monthly Sales: <span className="text-foreground">{fran.sales}</span></span>
                      <span>Royalty Fee: <span className="text-primary">{fran.royalty}</span></span>
                    </div>

                    {/* Progress Bar representing compliance */}
                    <div className="w-full bg-surface-border h-1.5 rounded-full overflow-hidden mt-3">
                      <div className="h-full bg-primary" style={{ width: fran.compliance }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Audit Summary */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl mt-6 flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-black text-primary uppercase tracking-widest block mb-1">Standardized Ops</span>
                  <span className="text-xs font-bold text-foreground">Base Menu & Pricing locked</span>
                </div>
                <span className="text-xs font-black text-primary uppercase tracking-widest bg-white border border-primary/20 px-3 py-1.5 rounded-lg">
                  Enforced
                </span>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
