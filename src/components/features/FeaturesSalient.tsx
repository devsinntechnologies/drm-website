"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSalient = () => {
  const points = [
    { t: "Multi-Language Support", d: "Interface available in 5+ global languages for diverse staff.", i: "🌍" },
    { t: "Table Layout", d: "Visual table management with split-billing and floor plans.", i: "🪑" },
    { t: "Role-Based Access", d: "Secure permissions for waiters, cashiers, and managers.", i: "🔒" },
    { t: "Offline Sync", d: "Keep selling even when your internet connection goes down.", i: "📴" },
    { t: "Kitchen Routing", d: "Sort items automatically by kitchen category and station.", i: "🚚" },
    { t: "Tax Integration", d: "Automated FBR/tax calculation as per local regulations.", i: "⚖️" },
  ];

  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[48px] p-12 md:p-20 relative overflow-hidden border border-surface-border/50"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Salient <span className="text-primary">Advantages</span></h2>
              <p className="text-lg text-muted max-w-2xl mx-auto font-medium">
                The small details that make a huge difference in your daily operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {points.map((p, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 group"
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform">{p.i}</span>
                  <div>
                    <h4 className="font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">{p.t}</h4>
                    <p className="text-sm text-muted leading-relaxed font-bold">{p.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSalient;
