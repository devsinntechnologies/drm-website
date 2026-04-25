"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutMission = () => {
  const points = [
    { t: "Cloud-Based POS System", d: "Experience the power of real-time management from anywhere." },
    { t: "Mobile Apps for Staff & Owners", d: "Stay connected with dedicated mobile ecosystems." },
    { t: "Offline Mode Support", d: "Business never stops, even when the internet does." },
    { t: "Kitchen & Recipe Management", d: "Optimize prep focus and reduce food waste." }
  ];

  return (
    <section className="py-32 bg-surface/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      
      {/* Glows */}
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
              Empowering <span className="text-primary text-glow">Growth</span>
            </h2>
            <p className="text-lg text-muted font-medium leading-relaxed mb-12">
              DRM delivers a complete restaurant and retail management system designed to simplify operations, 
              enhance customer service, and grow your business with actionable insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-5 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-12 h-12 shrink-0 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="font-extrabold text-foreground mb-2 group-hover:text-secondary transition-colors">{point.t}</h4>
                    <p className="text-sm text-muted font-medium leading-relaxed">{point.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-2xl group"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-1000" />
            
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card rounded-[40px] p-4 relative overflow-hidden shadow-[0_30px_60px_rgba(var(--secondary-rgb),0.2)] border-2 border-surface-border/60 bg-surface/30 backdrop-blur-2xl"
            >
              {/* Shimmer effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shimmer" />

              <img 
                src="/home/hero-mockup.png" 
                alt="DRM Platform" 
                className="w-full aspect-[4/3] object-cover rounded-[32px] transform transition-transform duration-1000 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 rounded-[32px]" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;
