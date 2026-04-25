"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Hardware Installation",
    desc: "Professional setup of terminals, printers, and networking by our expert field engineers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    points: ["On-site cabling", "Terminal calibration", "KDS mounting"]
  },
  {
    title: "Software Configuration",
    desc: "Customizing DRM to fit your specific workflow, menu structure, and visual identity.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    points: ["Menu data import", "Role permissions", "Tax & FBR settings"]
  },
  {
    title: "Staff Training",
    desc: "Comprehensive training sessions for your waiters, cashiers, and kitchen managers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    points: ["Operational flows", "EndOfDay reports", "Inventory basics"]
  },
  {
    title: "Technical Audits",
    desc: "Regular health checks of your POS system to ensure peak performance and stability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    points: ["Database integrity", "Sync performance", "Cache optimization"]
  }
];

const SupportService = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="section-label">Professional Services</span>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8">
            Tailored <span className="text-primary">Assistance</span> <br />
            For Every Outlet
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-bold">
            We provide comprehensive services to ensure your restaurant 
            DRM is always running at its absolute best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-[40px] p-10 border border-surface-border/50 group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-all opacity-0 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl bg-surface border border-surface-border flex items-center justify-center text-primary mb-8 shadow-inner"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-3xl font-extrabold text-foreground mb-6 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-lg text-muted leading-relaxed font-bold mb-8">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.points.map((p, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (j * 0.1) }}
                      className="flex items-center gap-3 text-sm font-bold text-foreground/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportService;
