"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DemoForm = () => {
  const perks = [
    "Full system walkthrough",
    "Hardware compatibility check",
    "Custom menu strategy",
    "ROI & Pricing analysis"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Perks side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-3xl font-black text-foreground mb-8">What to expect in your <span className="text-primary">Free Walkthrough</span></h3>
            <div className="space-y-6">
              {perks.map((perk, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-center gap-4 text-lg font-bold text-muted group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {perk}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="mt-12 p-8 glass-card border border-primary/20 bg-primary/5 rounded-[40px]"
            >
               <p className="text-muted leading-relaxed font-bold">
                 "Scheduling a demo was the best decision for our cafe. The expert showed us exactly 
                 how we could cut wastage by 15% using their inventory system."
               </p>
               <div className="mt-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20" />
                 <div className="text-sm font-black text-foreground">Aiden Pearce, CEO @ CafeX</div>
               </div>
            </motion.div>
          </motion.div>

          {/* Form side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl"
          >
            <form className="glass-card p-10 md:p-14 rounded-[48px] border border-surface-border/50 shadow-2xl relative overflow-hidden bg-surface/30 backdrop-blur-2xl">
               <div className="space-y-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Restaurant Name</label>
                    <input type="text" className="w-full bg-white/5 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-bold" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Outlet City</label>
                      <input type="text" className="w-full bg-white/5 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-bold" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-bold" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Daily Order Volume</label>
                    <select className="w-full bg-white/5 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-bold appearance-none cursor-pointer">
                      <option>0 - 50 Orders</option>
                      <option>50 - 200 Orders</option>
                      <option>200+ Orders</option>
                    </select>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl glow-primary"
                  >
                    Schedule Walkthrough
                  </motion.button>
                  <p className="text-center text-[11px] text-muted font-bold uppercase tracking-widest">No credit card required. No commitment.</p>
               </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
