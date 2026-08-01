"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiPackage, FiAlertTriangle, FiFilePlus, FiUsers, 
  FiTrash, FiTrendingDown, FiPieChart, FiCheck, FiCpu 
} from "react-icons/fi";

const InventorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Stock" | "Alerts" | "Waste">("Stock");

  const features = [
    { title: "Ingredient Tracking", desc: "Track raw materials and recipe yields automatically as sales are made.", icon: <FiPackage /> },
    { title: "Smart Stock Alerts", desc: "Get real-time push and email alerts when ingredients fall below safety stock limits.", icon: <FiAlertTriangle /> },
    { title: "Purchase Orders", desc: "Auto-generate and email POs to vendors with one tap based on inventory deficits.", icon: <FiFilePlus /> },
    { title: "Vendor Management", desc: "Track lead times, catalog pricing, and receipt logs for all suppliers.", icon: <FiUsers /> },
    { title: "Waste Tracking", desc: "Log food spoilage, spillages, and expired items to perform recipe cost corrections.", icon: <FiTrash /> },
    { title: "Cost Analysis", desc: "Review real-time variance between ideal food cost and actual food cost.", icon: <FiPieChart /> },
  ];

  const stockLevels = [
    { item: "Boneless Chicken Breast", current: "12.5 kg", min: "25.0 kg", status: "Low Stock", percent: 35, color: "bg-red-500" },
    { item: "Cheddar Cheese Blocks", current: "4.2 kg", min: "10.0 kg", status: "Low Stock", percent: 42, color: "bg-red-500" },
    { item: "Brioche Burger Buns", current: "120 pcs", min: "100 pcs", status: "Optimal", percent: 80, color: "bg-emerald-500" },
    { item: "Truffle Oil Bottles", current: "6 pcs", min: "4 pcs", status: "Optimal", percent: 75, color: "bg-emerald-500" },
  ];

  const stockForecast = [
    { item: "Boneless Chicken Breast", demand: "Heavy (Weekend Peak)", reorderQty: "40.0 kg", vendor: "Metro Foods" },
    { item: "Cheddar Cheese Blocks", demand: "Moderate", reorderQty: "15.0 kg", vendor: "Dawn Dairies" },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 items-center">
          
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
                  <h4 className="font-black text-foreground text-sm">Inventory & Procurement Control</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Stock Levels & Warnings</p>
                </div>
                {/* Tabs */}
                <div className="flex gap-1.5 bg-background p-1 rounded-lg border border-surface-border">
                  {["Stock", "Alerts", "Waste"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-md transition-all ${
                        activeTab === tab 
                          ? "bg-white text-primary shadow-xs" 
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab: Stock */}
              {activeTab === "Stock" && (
                <div className="space-y-4">
                  {stockLevels.map((lvl) => (
                    <div key={lvl.item} className="p-3 bg-background/50 border border-surface-border/60 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-foreground truncate max-w-[200px]">{lvl.item}</span>
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                          lvl.status === "Low Stock" ? "bg-red-100 text-red-500" : "bg-emerald-100 text-emerald-500"
                        }`}>{lvl.status}</span>
                      </div>
                      
                      {/* Bar */}
                      <div className="w-full bg-surface-border h-2 rounded-full overflow-hidden mb-1.5">
                        <div className={`h-full ${lvl.color}`} style={{ width: `${lvl.percent}%` }} />
                      </div>

                      <div className="flex justify-between text-[10px] text-muted font-semibold">
                        <span>Current: {lvl.current}</span>
                        <span>Safety Min: {lvl.min}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Alerts (AI Procurement Forecast) */}
              {activeTab === "Alerts" && (
                <div className="space-y-4">
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-2xl flex gap-3">
                    <FiCpu className="text-primary text-xl shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-extrabold text-primary text-xs uppercase tracking-wider">AI Reorder Recommendations</h5>
                      <p className="text-[11px] text-primary/80 mt-1 leading-relaxed font-semibold">
                        Based on weekend weather forecasts and past historical sales, inventory levels for core proteins are predicted to hit zero.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {stockForecast.map((fc) => (
                      <div key={fc.item} className="p-3 border border-surface-border rounded-xl bg-background/30 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-foreground">{fc.item}</p>
                          <p className="text-[10px] text-muted font-semibold">Demand: {fc.demand}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2.5 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                            Order {fc.reorderQty}
                          </span>
                          <p className="text-[9px] text-muted font-bold mt-1 uppercase tracking-wider">{fc.vendor}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary-hover transition-colors shadow-lg glow-primary">
                    Auto-Generate & Send POs ✉️
                  </button>
                </div>
              )}

              {/* Tab: Waste */}
              {activeTab === "Waste" && (
                <div className="space-y-3">
                  <div className="p-3 border border-surface-border rounded-xl bg-background/30 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-foreground">Tomatoes Spoilage</p>
                      <p className="text-[10px] text-muted font-semibold">Reason: Expired shelf-life</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-red-500">-3.5 kg</span>
                      <p className="text-[9px] text-muted font-bold mt-1 uppercase tracking-wider">Cost: 12.00</p>
                    </div>
                  </div>

                  <div className="p-3 border border-surface-border rounded-xl bg-background/30 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-foreground">Cooking Oil Spill</p>
                      <p className="text-[10px] text-muted font-semibold">Reason: Preparation accident</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-red-500">-2.0 Liters</span>
                      <p className="text-[9px] text-muted font-bold mt-1 uppercase tracking-wider">Cost: 8.50</p>
                    </div>
                  </div>

                  <div className="p-4 bg-background/50 border border-surface-border rounded-2xl">
                    <p className="text-[10px] text-muted font-black uppercase tracking-wider mb-2">Total Monthly Spoilage</p>
                    <p className="text-base font-black text-foreground">142.50 <span className="text-xs font-bold text-red-500">(+12.4% vs last month)</span></p>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Stock & SCM</span>
            <h2 className="text-xl md:text-base font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Real-Time <span className="text-primary">Inventory Management</span> & Smart Alerts
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Eliminate variance and food waste. Track inventory down to the raw ingredient. Generate supplier purchase orders automatically and forecast future needs with machine learning.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck className="text-xs font-bold" />
                  </span>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base mb-1">{feat.title}</h4>
                    <p className="text-muted text-xs leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-8 border-t border-surface-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FiCpu className="text-lg" />
              </div>
              <div>
                <h5 className="font-extrabold text-foreground text-sm">AI Inventory Forecasting Included</h5>
                <p className="text-muted text-xs font-semibold">Predict raw material demands based on reservations and events.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
