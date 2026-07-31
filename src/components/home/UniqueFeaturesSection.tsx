"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiHeart, FiCpu, FiAlertTriangle, FiShoppingBag, 
  FiMic, FiMessageSquare, FiTrendingUp, FiLayers, 
  FiRotateCcw, FiGitMerge, FiCheck 
} from "react-icons/fi";

const UniqueFeaturesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const usps = [
    { title: "Business Health Score", desc: "A consolidated 1-100 score scoring your cash flow, customer reviews, table times, and food margins.", icon: <FiHeart /> },
    { title: "Restaurant Digital Twin", desc: "View a real-time virtual layout of dining tables, active kitchen lines, and delivery dispatch routes.", icon: <FiLayers /> },
    { title: "Profit Leak Detection", desc: "AI audit systems flag anomalies such as inventory shrink, excessive voids, or price increases by suppliers.", icon: <FiAlertTriangle /> },
    { title: "Smart Procurement", desc: "AI estimates safety stock requirements and auto-orders raw materials via digital vendor links.", icon: <FiShoppingBag /> },
    { title: "Voice-to-Order AI", desc: "Take orders directly from speaker systems or phone lines via voice speech-to-text models.", icon: <FiMic /> },
    { title: "WhatsApp Ordering Bot", desc: "Complete automated food orders via chat including cart choice and payments integration.", icon: <FiMessageSquare /> },
    { title: "Guest Lifetime Value (CLV)", desc: "Predict future dining expenditures per diner and isolate VIP loyalty members automatically.", icon: <FiTrendingUp /> },
    { title: "AI Queue Optimization", desc: "Minimize table wait times by optimizing reservations dynamically using guest dining patterns.", icon: <FiCpu /> },
    { title: "Delayed Order Recovery", desc: "Automatically send coupons or discount SMS vouchers to customers whose orders exceed target timers.", icon: <FiRotateCcw /> },
    { title: "Franchise Command Center", desc: "Monitor P&L, audits, operational standards, and royalty fee settle states across partners.", icon: <FiGitMerge /> },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <span className="section-label">Competitive Differentiators</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            Advanced Features <span className="text-primary">Not Found Elsewhere</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            Discover the proprietary AI and operational technology that sets RMS by Devsinn far apart from legacy Point of Sale applications.
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {usps.map((usp, idx) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card bg-surface/40 border-surface-border p-6 rounded-2xl flex flex-col justify-between h-full hover:bg-white hover:border-primary/30 transition-all duration-300 relative group"
              style={{
                boxShadow: hoveredIdx === idx ? "0 20px 40px rgba(62, 163, 72, 0.04)" : "none"
              }}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {usp.icon}
                </div>
                <h3 className="text-base font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {usp.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed font-semibold">
                  {usp.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-surface-border/50 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-primary">
                <FiCheck className="text-xs shrink-0" /> Proprietary Tech
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UniqueFeaturesSection;
