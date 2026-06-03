"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FiMonitor, FiShoppingBag, FiBookOpen, FiBox, FiPlayCircle, 
  FiUsers, FiGift, FiCalendar, FiTruck, FiUserCheck, FiDollarSign, 
  FiCreditCard, FiBarChart2, FiFileText, FiLayers, FiTrendingUp, FiCpu 
} from "react-icons/fi";

interface ModuleItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
  status: "Active" | "Beta" | "AI Powered";
}

const EcosystemSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const modules: ModuleItem[] = [
    { title: "POS Management", icon: <FiMonitor />, desc: "High-speed cloud billing & terminal ordering with split bills.", status: "Active" },
    { title: "Order Management", icon: <FiShoppingBag />, desc: "Dine-in, takeaway, delivery, QR, WhatsApp, and mobile source routing.", status: "Active" },
    { title: "Menu Management", icon: <FiBookOpen />, desc: "Centralized controls for recipe yields, pricing, and dynamic items.", status: "Active" },
    { title: "Inventory Management", icon: <FiBox />, desc: "Real-time ingredient tracking, alerts, and automated procurement POs.", status: "Active" },
    { title: "Kitchen Display System", icon: <FiPlayCircle />, desc: "Real-time kitchen order tickets, timers, and priority queue routing.", status: "Active" },
    { title: "CRM", icon: <FiUsers />, desc: "Detailed guest profiles, dining history, and behavior segmentation insights.", status: "Active" },
    { title: "Loyalty Programs", icon: <FiGift />, desc: "Points, rewards, and custom coupon promotions to increase repeat visits.", status: "Active" },
    { title: "Reservations", icon: <FiCalendar />, desc: "Table bookings, digital floor plans, and queue flow optimization.", status: "Active" },
    { title: "Delivery Management", icon: <FiTruck />, desc: "Rider assignment, delivery zones, map routing, and tracking.", status: "Active" },
    { title: "Staff Management", icon: <FiUserCheck />, desc: "Attendance logs, role permissions, and shifts scheduling calendar.", status: "Active" },
    { title: "Payroll", icon: <FiDollarSign />, desc: "Salary computations, attendance integration, and direct payouts.", status: "Active" },
    { title: "Expense Tracking", icon: <FiCreditCard />, desc: "Vendor invoices, utility payments, and dynamic cost monitoring.", status: "Active" },
    { title: "Analytics", icon: <FiBarChart2 />, desc: "Consolidated branch summaries, sales trends, and profit margins.", status: "Active" },
    { title: "Reporting", icon: <FiFileText />, desc: "Audit-ready tax, FBR sync, shift summaries, and accounting exports.", status: "Active" },
    { title: "Multi Branch Management", icon: <FiLayers />, desc: "Central control for multi-outlet synchronization, users, and stock.", status: "Active" },
    { title: "Franchise Management", icon: <FiTrendingUp />, desc: "Franchise compliance tracking, performance, and revenue sharing.", status: "Active" },
    { title: "AI Automation", icon: <FiCpu />, desc: "Predictive demand, staff shifts, profit leak detection, and health score.", status: "AI Powered" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="section-label">Complete Restaurant Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            One Unified Operating System for <span className="text-primary">All Modules</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            Everything runs on a single, synchronized database. supercharge your operations with modules designed to work seamlessly together.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card bg-surface/50 border-surface-border p-6 rounded-2xl flex flex-col justify-between h-full hover:bg-white hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
              style={{
                boxShadow: hoveredIndex === index ? "0 20px 40px rgba(62, 163, 72, 0.05)" : "none",
              }}
            >
              {/* Shine effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ top: "-100%" }}
                  animate={{ top: "120%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 right-0 h-1/4 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
                />
              )}

              <div>
                {/* Icon and status badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {mod.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    mod.status === "AI Powered" 
                      ? "bg-primary/20 text-primary animate-pulse-slow" 
                      : "bg-surface-border text-muted"
                  }`}>
                    {mod.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-6 font-medium">
                  {mod.desc}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={`/products#${mod.title.toLowerCase().replace(/ /g, "-")}`}
                  className="inline-flex items-center text-xs font-black text-primary hover:text-primary-hover tracking-wider uppercase gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center flex-wrap justify-center gap-4 bg-white/70 backdrop-blur-md px-8 py-4 rounded-full border border-surface-border shadow-md">
            <span className="flex h-3.5 w-3.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary"></span>
            </span>
            <span className="text-sm font-extrabold text-foreground tracking-wide">
              17 Core Modules • Central Super Admin Control • Instantly Expandable
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;