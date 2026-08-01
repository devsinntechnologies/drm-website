"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiPieChart, FiDollarSign, FiBox, FiUsers, 
  FiTruck, FiUserCheck, FiCpu, FiCheckCircle 
} from "react-icons/fi";

const AnalyticsSection: React.FC = () => {
  const [activeReport, setActiveReport] = useState<string>("Revenue");

  const features = [
    { name: "Revenue Reports", icon: <FiDollarSign />, desc: "Track gross margins, net payouts, tax returns, and FBR sync receipts." },
    { name: "Sales Reports", icon: <FiPieChart />, desc: "Isolate hourly peaks, menu item velocity, and branch-by-branch sales logs." },
    { name: "Inventory Reports", icon: <FiBox />, desc: "Monitor raw food variances, waste logs, and supplier pricing histories." },
    { name: "Staff Reports", icon: <FiUserCheck />, desc: "Audit shifts labor costs, waiter sales metrics, and tips logs." },
    { name: "Delivery Reports", icon: <FiTruck />, desc: "Compare average trip times, delivery margins, and rider allocations." },
    { name: "Customer Reports", icon: <FiUsers />, desc: "Track dining patterns, client segment distributions, and loyalty usages." },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-center">
          
          {/* Details - Left Side */}
          <div>
            <span className="section-label">Data Intelligence</span>
            <h2 className="text-xl md:text-base font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Enterprise-Grade <span className="text-primary">Analytics & Reporting</span>
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Know your numbers. RMS synthesizes all transactional data from POS terminals, kitchen stations, and delivery riders to generate real-time visual insights.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feat) => (
                <div 
                  key={feat.name} 
                  onClick={() => setActiveReport(feat.name)}
                  className={`p-4 border rounded-2xl flex gap-4 cursor-pointer transition-all ${
                    activeReport === feat.name 
                      ? "border-primary bg-primary/5" 
                      : "border-surface-border bg-surface/30 hover:border-primary/20"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                    activeReport === feat.name ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}>
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-sm mb-1">{feat.name}</h4>
                    <p className="text-muted text-[11px] leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Chart Mockup - Right Side */}
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
                  <h4 className="font-black text-foreground text-sm">{activeReport} Reporting Insights</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Live data feed</p>
                </div>
                <span className="bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Real-Time
                </span>
              </div>

              {/* Chart Mockup (SVG Sales Curve) */}
              <div className="w-full h-[180px] bg-background/50 border border-surface-border rounded-2xl p-4 relative overflow-hidden mb-4 flex flex-col justify-between">
                
                {/* Y Axis Guides */}
                <div className="absolute inset-x-0 top-1/4 border-t border-surface-border/40" />
                <div className="absolute inset-x-0 top-2/4 border-t border-surface-border/40" />
                <div className="absolute inset-x-0 top-3/4 border-t border-surface-border/40" />

                {/* SVG Curve */}
                <svg className="absolute inset-x-0 bottom-4 w-full h-[100px] overflow-visible" preserveAspectRatio="none">
                  {/* Fill Area */}
                  <path 
                    d="M 0 100 Q 50 80, 100 40 T 200 70 T 300 20 T 400 30 L 400 100 Z" 
                    fill="url(#chartGlow)"
                    className="opacity-20"
                  />
                  {/* Curve Line */}
                  <path 
                    d="M 0 100 Q 50 80, 100 40 T 200 70 T 300 20 T 400 30" 
                    fill="none" 
                    stroke="var(--primary)" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Dynamic Dot */}
                  <circle cx="300" cy="20" r="5" fill="var(--primary)" />
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Label values inside chart */}
                <div className="flex justify-between items-start relative z-10 text-[9px] text-muted font-bold">
                  <span>25k</span>
                  <span>50k</span>
                  <span>75k</span>
                  <span className="text-primary font-black">100k Peak</span>
                </div>

                <div className="flex justify-between items-end relative z-10 text-[9px] text-muted font-bold pt-12">
                  <span>08:00 AM</span>
                  <span>12:00 PM</span>
                  <span>04:00 PM</span>
                  <span>08:00 PM</span>
                </div>
              </div>

              {/* AI Insights block */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex gap-3">
                <FiCpu className="text-primary text-xl shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-extrabold text-primary text-xs uppercase tracking-wider flex items-center gap-1.5">
                    AI Reporting Insights
                  </h5>
                  <p className="text-[11px] text-primary/80 mt-1 leading-relaxed font-semibold">
                    Menu items under category "Gourmet Burgers" show a 24% revenue margin surge, matching dinner hour peaks. Recommend adjusting ingredient order quantities to match.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
