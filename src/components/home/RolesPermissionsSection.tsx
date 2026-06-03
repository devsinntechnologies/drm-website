"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiShield, FiUser, FiSliders, FiMonitor, 
  FiUsers, FiPlayCircle, FiTruck, FiBookOpen, FiDollarSign 
} from "react-icons/fi";

const RolesPermissionsSection: React.FC = () => {
  const [modules, setModules] = useState([
    { name: "AI Sales Forecasting", enabled: true, category: "AI features" },
    { name: "WhatsApp Chatbot Ordering", enabled: true, category: "Ordering channels" },
    { name: "Kitchen Display (KDS)", enabled: true, category: "Kitchen operations" },
    { name: "Ingredient Variance Tracking", enabled: false, category: "Inventory" },
    { name: "SMS Customer Alerts", enabled: true, category: "Marketing" },
  ]);

  const roles = [
    { title: "Super Admin", desc: "Enable/disable modules, oversee billing, and manage multi-restaurant catalogs.", icon: <FiShield /> },
    { title: "Restaurant Owner", desc: "Review consolidated P&L summaries, audit logs, and manage executive settings.", icon: <FiUser /> },
    { title: "Branch Manager", desc: "Organize shifts roster, review daily sales, and oversee localized cashiers.", icon: <FiSliders /> },
    { title: "Cashier", desc: "Lightning-fast checkout, split bills, and print customer tax receipts.", icon: <FiMonitor /> },
    { title: "Waiter", desc: "Handheld table-side ordering, table status updates, and digital tips log.", icon: <FiUsers /> },
    { title: "Chef", desc: "Manage recipes yields, menu item availability states, and print kitchen tags.", icon: <FiBookOpen /> },
    { title: "Kitchen Staff", desc: "Track active order tickets, timers, and bump cooked items on screens.", icon: <FiPlayCircle /> },
    { title: "Delivery Rider", desc: "Update GPS location paths, accept dispatch calls, and register payments.", icon: <FiTruck /> },
    { title: "Accountant", desc: "Audit tax outputs, vendor invoices, utility ledger cost records, and payroll.", icon: <FiDollarSign /> },
  ];

  const toggleModule = (index: number) => {
    setModules(prev => prev.map((m, idx) => {
      if (idx === index) {
        return { ...m, enabled: !m.enabled };
      }
      return m;
    }));
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* Left Side: Roles Grid */}
          <div>
            <span className="section-label">Access Control</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Granular Role & <span className="text-primary">Permission Control</span>
            </h2>
            <p className="text-muted text-lg mb-8 font-medium">
              Protect your operations. Define exactly what cashiers, waiters, chefs, and managers can see and modify. Enable feature access on a per-restaurant basis.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {roles.map((r) => (
                <div key={r.title} className="p-5 bg-surface/30 border border-surface-border rounded-2xl flex flex-col justify-between hover:bg-white hover:border-primary/25 transition-all duration-300">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg mb-3 shrink-0">
                      {r.icon}
                    </div>
                    <h4 className="font-extrabold text-foreground text-sm mb-1">{r.title}</h4>
                    <p className="text-muted text-[11px] leading-relaxed font-semibold">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Super Admin Toggles Mockup */}
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
                  <h4 className="font-black text-foreground text-sm">Super Admin Dashboard</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Module Activation Console</p>
                </div>
                <span className="bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Branch: Downtown
                </span>
              </div>

              <p className="text-muted text-xs leading-relaxed font-semibold mb-6">
                Super Admins can activate or deactivate specific features for any branch instantly, enabling customized billing options.
              </p>

              {/* Module Toggles List */}
              <div className="space-y-3">
                {modules.map((mod, idx) => (
                  <div key={mod.name} className="flex justify-between items-center p-3.5 border border-surface-border/60 bg-background/30 rounded-xl">
                    <div>
                      <p className="text-xs font-bold text-foreground">{mod.name}</p>
                      <p className="text-[9px] text-muted font-bold uppercase tracking-wider mt-0.5">{mod.category}</p>
                    </div>
                    
                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggleModule(idx)}
                      className={`w-11 h-6 rounded-full p-1 transition-all duration-300 relative flex items-center ${
                        mod.enabled ? "bg-primary" : "bg-surface-border"
                      }`}
                    >
                      <motion.div 
                        layout 
                        className="w-4 h-4 rounded-full bg-white shadow-xs" 
                        animate={{ x: mod.enabled ? 20 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => alert("Subscription options synced successfully across network!")}
                className="w-full mt-6 py-3.5 rounded-xl bg-primary text-white font-black text-xs hover:bg-primary-hover transition-colors tracking-widest uppercase shadow-lg glow-primary"
              >
                Save Activation Settings 💾
              </button>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default RolesPermissionsSection;
