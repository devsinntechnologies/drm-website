"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiUser, FiList, FiTrendingUp, FiLayers, 
  FiMessageSquare, FiGift, FiTag, FiCheckCircle 
} from "react-icons/fi";

const CrmSection: React.FC = () => {
  const features = [
    { title: "Customer Profiles", desc: "Build rich profiles linking phone numbers, dietary preferences, and allergies.", icon: <FiUser /> },
    { title: "Order History", desc: "Access full historical transaction records across all branches instantly.", icon: <FiList /> },
    { title: "Spending Insights", desc: "Track average order value (AOV), visit frequency, and favorite menu categories.", icon: <FiTrendingUp /> },
    { title: "Customer Segmentation", desc: "Group customers automatically (e.g. VIPs, regulars, churning) to target ads.", icon: <FiLayers /> },
    { title: "Feedback Collection", desc: "Gather ratings via SMS or email receipts and view sentiment analysis reports.", icon: <FiMessageSquare /> },
    { title: "Loyalty Management", desc: "Award points, manage reward tiers, and send customized birthday offerings.", icon: <FiGift /> },
    { title: "Coupon Management", desc: "Create, distribute, and track single-use codes and promotional campaigns.", icon: <FiTag /> },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-center">
          
          {/* Details - Left Side */}
          <div>
            <span className="section-label">Guest Retention</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Customer Relationship Management <span className="text-primary">& Loyalty</span>
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Turn first-time diners into loyal regulars. Build detailed profiles, award customizable loyalty points, segment customers by habits, and send direct promotions that hit home.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base mb-1">{feat.title}</h4>
                    <p className="text-muted text-xs leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Profile Card Mockup - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-xl" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/95 bg-surface p-6 shadow-2xl">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 border-b border-surface-border pb-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-base font-black">
                  JS
                </div>
                <div>
                  <h4 className="font-black text-foreground text-base">John Smith</h4>
                  <p className="text-xs text-muted font-semibold">+1 (555) 234-5678 • Customer since 2024</p>
                </div>
              </div>

              {/* Segment Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  VIP Guest
                </span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Weekend regular
                </span>
                <span className="bg-background text-muted border border-surface-border text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Loves Burgers
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4 bg-background/50 p-4 border border-surface-border rounded-2xl">
                <div className="text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-wider mb-1">Total Visits</p>
                  <p className="text-lg font-black text-foreground">42</p>
                </div>
                <div className="text-center border-x border-surface-border">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-wider mb-1">Avg. spend</p>
                  <p className="text-lg font-black text-foreground">38.50</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-wider mb-1">Loyalty Points</p>
                  <p className="text-lg font-black text-primary">1,280 pts</p>
                </div>
              </div>

              {/* Recent Orders List */}
              <div className="space-y-3 mb-4">
                <p className="text-[10px] text-muted font-black uppercase tracking-wider">Recent dining history</p>
                
                <div className="flex justify-between items-center p-3 border border-surface-border bg-surface rounded-xl text-xs font-semibold">
                  <div>
                    <p className="text-foreground">1x Truffle Beef Burger, 1x Mojito</p>
                    <p className="text-[10px] text-muted font-medium mt-0.5">May 28 • Dine-in (Branch A)</p>
                  </div>
                  <span className="font-extrabold text-foreground">24.00</span>
                </div>

                <div className="flex justify-between items-center p-3 border border-surface-border bg-surface rounded-xl text-xs font-semibold">
                  <div>
                    <p className="text-foreground">2x Gourmet Pizza, 1x Lava Cake</p>
                    <p className="text-[10px] text-muted font-medium mt-0.5">May 15 • Takeaway (Branch B)</p>
                  </div>
                  <span className="font-extrabold text-foreground">45.50</span>
                </div>
              </div>

              {/* Coupon offering simulation */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-black text-primary uppercase tracking-widest block mb-1">Reward Ready</span>
                  <span className="text-xs font-bold text-foreground">10% OFF Steak Coupon</span>
                </div>
                <button className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-lg hover:bg-primary-hover transition-colors">
                  Claim Reward
                </button>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CrmSection;
