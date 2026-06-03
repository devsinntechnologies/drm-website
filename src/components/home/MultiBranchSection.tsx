"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiLayers, FiFileText, FiTrendingUp, FiBox, 
  FiMenu, FiUsers, FiCheckCircle, FiGlobe 
} from "react-icons/fi";

const MultiBranchSection: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("All Branches");

  const features = [
    { title: "Branch Monitoring", desc: "View real-time sales volumes, KDS loads, and rider counts for all locations in one view.", icon: <FiGlobe /> },
    { title: "Consolidated Reports", desc: "Run aggregate P&L statements, tax summaries, and sales audits for individual or all outlets.", icon: <FiFileText /> },
    { title: "Branch Comparisons", desc: "Analyze performance KPIs (revenue, ticket size, labor ratios) across outlets.", icon: <FiTrendingUp /> },
    { title: "Centralized Inventory", desc: "Monitor warehouse stock levels and coordinate intra-branch stock transfers smoothly.", icon: <FiBox /> },
    { title: "Centralized Menu Control", desc: "Push menu adjustments, pricing updates, and promotions to all branches with one click.", icon: <FiMenu /> },
    { title: "Centralized User Control", desc: "Set centralized role permissions for cashiers, managers, and accountants across outlets.", icon: <FiUsers /> },
  ];

  const branchData = [
    { name: "Downtown Branch", sales: "12,450.00", orders: "312", stockLevel: "92%" },
    { name: "Westside Outlet", sales: "8,920.00", orders: "214", stockLevel: "88%" },
    { name: "Airport Foodcourt", sales: "14,100.00", orders: "420", stockLevel: "95%" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          {/* Dashboard Mockup - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative order-2 lg:order-1"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-2xl pointer-events-none" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/90 bg-white p-6 shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Centralized Operations Hub</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Multi-Branch Command Center</p>
                </div>
                {/* Selector */}
                <div className="flex gap-1 bg-background p-0.5 rounded-lg border border-surface-border">
                  {["All Branches", "Downtown", "Airport"].map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBranch(b)}
                      className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all ${
                        selectedBranch === b 
                          ? "bg-primary text-white shadow-xs" 
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Central Revenue Metric */}
              <div className="p-5 bg-background/50 border border-surface-border rounded-2xl mb-4 text-center">
                <span className="text-[10px] text-muted font-black uppercase tracking-wider block mb-1">
                  {selectedBranch === "All Branches" ? "Consolidated Daily Sales" : `${selectedBranch} Sales`}
                </span>
                <p className="text-3xl font-black text-foreground">
                  {selectedBranch === "All Branches" ? "35,470.00" : selectedBranch === "Downtown" ? "12,450.00" : "14,100.00"}
                </p>
                <span className="text-[10px] font-bold text-emerald-500 mt-1 inline-block">
                  ↑ +14.6% vs yesterday
                </span>
              </div>

              {/* Outlet List */}
              <div className="space-y-3">
                <p className="text-[10px] text-muted font-black uppercase tracking-wider">Active branch comparisons</p>
                {branchData.map((bd) => (
                  <div key={bd.name} className="p-3 bg-white border border-surface-border/60 rounded-xl flex justify-between items-center text-xs font-semibold">
                    <div>
                      <p className="text-foreground">{bd.name}</p>
                      <p className="text-[9px] text-muted font-semibold">Orders: {bd.orders} • Stock Health: {bd.stockLevel}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-foreground">{bd.sales}</span>
                      <p className="text-[8px] text-emerald-500 font-bold mt-0.5">Online</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Control Action Simulation */}
              <div className="mt-6 pt-4 border-t border-dashed border-surface-border flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-muted font-black tracking-wider uppercase">Menu Version: v4.2 (Synced)</span>
                </div>
                <button 
                  onClick={() => alert("Menu changes pushed to all 3 active terminals!")}
                  className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-primary-hover transition-colors"
                >
                  Push Menu Update 🚀
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Details */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Central Controls</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Centralized <span className="text-primary">Multi-Branch Command</span> & Sync
            </h2>
            <p className="text-muted text-lg mb-8 font-medium">
              Oversee your entire restaurant chain from a single consolidated screen. Update recipes, modify pricing strategies, run chain-wide inventory transfers, and view consolidated reports instantly.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheckCircle className="text-xs font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base mb-1">{feat.title}</h4>
                    <p className="text-muted text-xs leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MultiBranchSection;
