"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiTruck, FiMap, FiMapPin, FiTrendingUp, 
  FiClock, FiCompass, FiCheckCircle 
} from "react-icons/fi";

const DeliverySection: React.FC = () => {
  const [activeRider, setActiveRider] = useState<number>(0);

  const features = [
    { title: "Rider Assignment", desc: "Manually drag-and-drop or use AI auto-assignment to allocate orders to nearby riders.", icon: <FiTruck /> },
    { title: "Real-Time GPS Tracking", desc: "Monitor rider paths, speeds, and ETA statuses directly from your POS and client apps.", icon: <FiMapPin /> },
    { title: "Route Optimization", desc: "Batch multiple orders going to the same neighborhood and map out the fastest road directions.", icon: <FiCompass /> },
    { title: "Delivery Performance Analytics", desc: "Measure rider turn times, average transit speeds, and delivery completion ratios.", icon: <FiTrendingUp /> },
    { title: "Custom Delivery Zones", desc: "Draw flexible geofenced delivery circles and hexagons on maps with custom rules.", icon: <FiMap /> },
    { title: "Flexible Charges Management", desc: "Settle delivery fee calculations by mileage, zones, flat rules, or cart thresholds.", icon: <FiClock /> },
  ];

  const riders = [
    { id: 1, name: "Rider Carlos", status: "In Transit", order: "#1023", est: "8 mins", location: "Oak Street" },
    { id: 2, name: "Rider Sarah", status: "At Store", order: "Waiting", est: "N/A", location: "Main Kitchen" },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-4 items-center">
          
          {/* Map & Rider Mockup - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative order-2 lg:order-1"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-2xl pointer-events-none" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/90 bg-surface p-6 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Delivery Logistics Command</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Live dispatch status</p>
                </div>
                <span className="bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  GPS Live
                </span>
              </div>

              {/* Simulated Map */}
              <div className="w-full h-[220px] bg-background border border-surface-border rounded-2xl relative overflow-hidden mb-4">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                {/* Simulated Path Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path 
                    d="M 50 160 Q 150 50, 280 80 T 400 180" 
                    fill="none" 
                    stroke="var(--primary)" 
                    strokeWidth="3" 
                    strokeDasharray="6,4"
                  />
                </svg>

                {/* Central Branch Pin */}
                <div className="absolute top-[80px] left-[280px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg border border-white">
                    🍔
                  </div>
                  <span className="text-[8px] font-black bg-surface/95 px-2 py-0.5 border border-surface-border rounded-md mt-1 shadow-xs">Devsinn HQ</span>
                </div>

                {/* Active Rider Pin */}
                <div className="absolute top-[160px] left-[50px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div 
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border border-white"
                  >
                    🛵
                  </motion.div>
                  <span className="text-[8px] font-black bg-primary text-white px-2 py-0.5 rounded-md mt-1 shadow-xs">Carlos (Transit)</span>
                </div>

                {/* Destination Pin */}
                <div className="absolute top-[180px] left-[400px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg border border-white">
                    📍
                  </div>
                  <span className="text-[8px] font-black bg-surface/95 px-2 py-0.5 border border-surface-border rounded-md mt-1 shadow-xs">Guest (Oak St)</span>
                </div>
              </div>

              {/* Riders List */}
              <div className="space-y-3">
                {riders.map((r, idx) => (
                  <div 
                    key={r.name}
                    onClick={() => setActiveRider(idx)}
                    className={`p-3 border rounded-xl flex justify-between items-center cursor-pointer transition-all ${
                      activeRider === idx 
                        ? "border-primary bg-primary/5" 
                        : "border-surface-border bg-surface hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base ${
                        r.status === "In Transit" ? "bg-primary/20 text-primary" : "bg-secondary/10 text-secondary"
                      }`}>
                        🛵
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">{r.name}</p>
                        <p className="text-[9px] text-muted font-semibold">Active Order: {r.order} • {r.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                        r.status === "In Transit" ? "bg-primary text-white" : "bg-surface-border text-muted"
                      }`}>{r.status}</span>
                      <p className="text-[9px] text-muted font-bold mt-1 uppercase tracking-wider">{r.status === "In Transit" ? `ETA: ${r.est}` : "Idle"}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* Right Details */}
          <div className="order-1 lg:order-2">
            <span className="section-label">Fleet Dispatch</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Efficient <span className="text-primary">Delivery Management</span> & Rider Tracking
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Eliminate third-party delivery commission margins. Manage your own internal rider fleet, auto-assign orders, map optimal routes, and update guests with live SMS tracking logs.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
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

export default DeliverySection;
