"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMessageSquare, FiCreditCard, FiSmartphone, 
  FiShoppingBag, FiBookOpen, FiStar, FiLayers, FiCheck 
} from "react-icons/fi";

const IntegrationsSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const integrations = [
    { name: "WhatsApp Business", desc: "Automate customer ordering channels via our AI conversational chatbot.", category: "Communication", icon: <FiMessageSquare /> },
    { name: "Stripe Payments", desc: "Accept global credit/debit card transactions with instant payout settlements.", category: "Payments", icon: <FiCreditCard /> },
    { name: "JazzCash Gateway", desc: "Integrated payment processing for localized mobile wallet accounts.", category: "Payments", icon: <FiSmartphone /> },
    { name: "EasyPaisa Gateway", desc: "Process order payments smoothly via popular digital wallets.", category: "Payments", icon: <FiLayers /> },
    { name: "SMS Gateways", desc: "Trigger automated order status alerts and marketing coupons to guest phones.", category: "Communication", icon: <FiMessageSquare /> },
    { name: "Food Delivery Platforms", desc: "Consolidate orders from UberEats, Foodpanda, and Deliveroo straight into the POS.", category: "Delivery", icon: <FiShoppingBag /> },
    { name: "Accounting Software", desc: "Sync revenue accounts ledger inputs to QuickBooks and Xero automatically.", category: "Finance", icon: <FiBookOpen /> },
    { name: "Google Reviews Sync", desc: "Collect, track, and analyze guest reviews sentiment scores inside the CRM.", category: "Marketing", icon: <FiStar /> },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <span className="section-label">Connected Ecosystem</span>
          <h2 className="text-xl md:text-base font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            Integrated with Your <span className="text-primary">Favorite Tools</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            RMS connects smoothly with payment channels, delivery platforms, marketing APIs, and accounting ledgers to keep your operations synchronized.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card bg-surface/40 border-surface-border p-6 rounded-2xl flex flex-col justify-between h-full hover:bg-white hover:border-primary/25 transition-all duration-300 group"
              style={{
                boxShadow: hoveredIdx === idx ? "0 20px 40px rgba(62, 163, 72, 0.04)" : "none"
              }}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="bg-background text-muted border border-surface-border/50 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted text-xs leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-surface-border/50 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-primary">
                <FiCheck className="text-xs shrink-0" /> Native API
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IntegrationsSection;
