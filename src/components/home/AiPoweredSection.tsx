"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiCpu, FiTrendingUp, FiBox, FiUsers, 
  FiMenu, FiMessageSquare, FiActivity, FiSmile, 
  FiAlertOctagon, FiTrendingDown, FiShield, FiTrendingDown as FiLoss 
} from "react-icons/fi";

const AiPoweredSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const aiFeatures = [
    { title: "AI Sales Forecasting", desc: "Predict future daily revenue patterns by analyzing historical, weather, and calendar trends.", icon: <FiTrendingUp /> },
    { title: "AI Inventory Forecasting", desc: "Forecast ingredient deficits to prevent food stockouts and automate procurement orders.", icon: <FiBox /> },
    { title: "AI Staff Forecasting", desc: "Predict staff shift needs to avoid labor shortages and minimize payroll overheads.", icon: <FiUsers /> },
    { title: "AI Menu Optimization", desc: "Identify popular high-margin recipes and low-performing menu items to maximize profitability.", icon: <FiMenu /> },
    { title: "AI Review Sentiment Analysis", desc: "Parse guest reviews automatically to identify service issues and cook mistakes.", icon: <FiMessageSquare /> },
    { title: "AI Customer Churn Prediction", desc: "Flag customers showing signs of dropoff and trigger automated incentive offers.", icon: <FiSmile /> },
    { title: "AI Smart Upselling", desc: "Recommend complementary sides, drinks, or modifiers to increase average guest spend.", icon: <FiCpu /> },
    { title: "AI Profit Leak Detection", desc: "Highlight inventory shrinkage, cashier voids, and invoice price variance flags.", icon: <FiAlertOctagon /> },
    { title: "AI Business Health Score", desc: "Consolidate brand performance metrics into a single real-time operational efficiency score.", icon: <FiActivity /> },
    { title: "AI Dynamic Pricing Recommendation", desc: "Suggest pricing updates based on ingredient costs, peak hours, and demand spikes.", icon: <FiTrendingDown /> },
  ];

  return (
    <section className="py-10 bg-navy text-white relative overflow-hidden">
      {/* Background futuristic overlays */}
      <div className="absolute inset-0 " />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Autonomous Operations</span>
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-4 leading-tight tracking-tight">
            Artificial Intelligence Built Into <span className="text-primary ">Every Operation</span>
          </h2>
          <p className="text-white/60 text-lg font-medium">
            Step into the future of restaurant management. Our built-in machine learning models act as your virtual COO, optimizing pricing, inventory, shifts, and revenue leaks.
          </p>
        </div>

        {/* AI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {aiFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative p-4 rounded-3xl border border-white/10 bg-surface/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-surface/[0.05]"
            >
              {/* Border glow wrapper */}
              {hoveredIdx === idx && (
                <div className="absolute inset-0 rounded-3xl border border-primary/50 shadow-[0_0_24px_rgba(62,163,72,0.2)] pointer-events-none" />
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-base mb-4 border border-primary/20 shadow-[0_0_15px_rgba(62,163,72,0.1)]">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-white mb-3 group-hover:text-primary transition-colors">
                {feat.title}
              </h3>

              {/* Desc */}
              <p className="text-white/60 text-sm leading-relaxed font-semibold">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Simulated Intelligence Output */}
        <div className="mt-4 max-w-4xl mx-auto p-6 rounded-3xl border border-white/10 bg-surface/[0.02] backdrop-blur-md">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-primary font-black uppercase tracking-wider">AI Copilot Recommendation Engine</span>
            </div>
            <span className="text-[9px] text-white/60 font-bold">Updated: Just Now</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <p className="text-[10px] text-white font-black uppercase tracking-wider mb-1.5">Pricing Insight</p>
              <p className="text-white font-bold leading-normal">Suggest <span className="text-primary">+$1.50 dynamic markup</span> on Truffle Burger during Airport food court peak hours (6 PM - 8 PM).</p>
            </div>
            <div className="border-t md:border-t-0 md:border-x border-white/5 pt-4 md:pt-0 md:px-6">
              <p className="text-[10px] text-white font-black uppercase tracking-wider mb-1.5">Shift Insight</p>
              <p className="text-white font-bold leading-normal">Forecast heavy Dine-In volume for Downtown. Suggest adding <span className="text-primary">1 extra waiter shift</span> this Friday.</p>
            </div>
            <div className="border-t md:border-t-0 pt-4 md:pt-0">
              <p className="text-[10px] text-white font-black uppercase tracking-wider mb-1.5">Health Score</p>
              <p className="text-white font-bold leading-normal">System operational efficiency health score is at <span className="text-primary font-black">94.2/100</span> (Optimal brand status).</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiPoweredSection;
