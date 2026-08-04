"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiClock, FiTrendingUp, FiCheck, FiTv, 
  FiCompass, FiActivity, FiUser, FiZap 
} from "react-icons/fi";

const KdsSection: React.FC = () => {
  const [activeStations, setActiveStations] = useState<string>("All Stations");

  const features = [
    { title: "Real-Time Kitchen Orders", desc: "Instant sync from POS, web, QR, or delivery apps directly to prep screens.", icon: <FiTv /> },
    { title: "Order Status Tracking", desc: "Keep front-of-house staff updated. Automatically changes status on the POS.", icon: <FiActivity /> },
    { title: "Smart Kitchen Routing", desc: "Send drinks to the bar, appetizers to the cold prep station, and steaks to the grill.", icon: <FiCompass /> },
    { title: "Preparation Timers", desc: "Color-coded tickets alert chefs as prep times approach target thresholds.", icon: <FiClock /> },
    { title: "Priority Orders", desc: "Highlight VIP guest orders, delivery rider arrivals, or delayed tickets instantly.", icon: <FiZap /> },
    { title: "Kitchen Performance Metrics", desc: "Log actual cooking times per item to optimize menu offerings and staffing.", icon: <FiTrendingUp /> },
  ];

  const tickets = [
    {
      id: "#102",
      type: "Dine-In • Table 4",
      time: "04:12",
      timeColor: "text-emerald-500 bg-emerald-100",
      status: "Preparing",
      statusColor: "bg-amber-100 text-amber-700",
      station: "Grill Station",
      items: [
        { name: "2x Beef Burger (Medium Well)", done: false },
        { name: "1x Truffle Parmesan Fries", done: true },
      ],
    },
    {
      id: "#103",
      type: "Delivery • UberEats",
      time: "09:45",
      timeColor: "text-red-500 bg-red-100 animate-pulse-slow",
      status: "Priority • Delayed",
      statusColor: "bg-red-500 text-white",
      station: "Salad Station",
      items: [
        { name: "1x Chicken Caesar Salad", done: false },
        { name: "1x Margherita Pizza (Extra Basil)", done: false },
      ],
    },
    {
      id: "#104",
      type: "Takeaway",
      time: "01:30",
      timeColor: "text-emerald-500 bg-emerald-100",
      status: "New",
      statusColor: "bg-blue-100 text-blue-700",
      station: "Beverage Bar",
      items: [
        { name: "2x Fresh Mint Mojito", done: false },
        { name: "1x Molten Chocolate Lava Cake", done: false },
      ],
    },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 items-center">
          
          {/* Active Queue Mockup - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-2xl" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/90 bg-surface p-6 shadow-2xl">
              
              {/* KDS Header Controls */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Kitchen Display Screen (KDS) Queue</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Live orders board</p>
                </div>
                {/* Station Filter */}
                <div className="flex gap-1 bg-background p-1 rounded-lg border border-surface-border">
                  {["All Stations", "Grill", "Beverages"].map((station) => (
                    <button
                      key={station}
                      onClick={() => setActiveStations(station)}
                      className={`px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all ${
                        activeStations === station 
                          ? "bg-primary text-white shadow-xs" 
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {station}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tickets Horizontal Queue */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tickets.map((t) => (
                  <div key={t.id} className="border border-surface-border rounded-2xl bg-background/50 flex flex-col justify-between overflow-hidden shadow-xs">
                    {/* Ticket Header */}
                    <div className="p-3 bg-surface border-b border-surface-border flex justify-between items-start">
                      <div>
                        <span className="text-xs font-black text-foreground">{t.id}</span>
                        <p className="text-[9px] text-muted font-semibold mt-0.5 truncate">{t.type}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${t.timeColor}`}>
                        {t.time}
                      </span>
                    </div>

                    {/* Ticket Items */}
                    <div className="p-3 space-y-2 flex-1">
                      {t.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className={`w-3.5 h-3.5 rounded-md border flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5 ${
                            item.done 
                              ? "bg-primary/20 border-primary text-primary" 
                              : "bg-surface border-surface-border text-transparent"
                          }`}>
                            ✓
                          </span>
                          <span className={`text-xs font-semibold ${item.done ? "line-through text-muted/80" : "text-foreground"}`}>
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Ticket Footer */}
                    <div className="p-3 bg-surface border-t border-surface-border flex justify-between items-center text-[9px] font-black uppercase tracking-wider">
                      <span className="text-muted">{t.station}</span>
                      <span className={`px-2 py-0.5 rounded-md ${t.statusColor}`}>{t.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions simulation */}
              <div className="mt-6 pt-4 border-t border-dashed border-surface-border flex justify-between items-center">
                <span className="text-[10px] text-muted font-bold">Average Order Prep Time: <span className="text-primary font-black">7.2 mins</span></span>
                <span className="text-[10px] text-muted font-bold">Active Station Load: <span className="text-amber-500 font-black">Medium</span></span>
              </div>

            </div>
          </motion.div>

          {/* Right Details */}
          <div>
            <span className="section-label">Back-Of-House Sync</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Streamline Operations with <span className="text-primary">Kitchen Display Terminals</span>
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Say goodbye to messy paper tickets. Route orders automatically to specific prep stations, monitor cooking timers, and log cook performance metrics to increase output and food quality.
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

            <div className="mt-4 pt-8 border-t border-surface-border flex gap-4">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                ✓ Multi-screen Routing
              </span>
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                ✓ Prep Diagnostics
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default KdsSection;
