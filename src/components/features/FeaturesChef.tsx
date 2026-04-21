"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesChef = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="section-label mb-6">Staff Management</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
              Chef <span className="gradient-text">Performance</span> <br />
              Monitoring
            </h2>
            <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl font-medium">
              Track cook times and efficiency per station. Keep your kitchen running 
              at peak performance with data-driven insights on staff productivity.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-[40px] glass-card border border-primary/20 bg-primary/5"
            >
              <h4 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                 Real-time Efficiency
              </h4>
              <p className="text-muted leading-relaxed font-bold">
                Monitor how long each kitchen station takes to prepare orders. Identify 
                bottlenecks and reward high-performing staff instantly.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 relative group"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full opacity-50 transition-opacity group-hover:opacity-100" />
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl border border-surface-border/50"
              style={{ perspective: "1000px" }}
            >
              <div className="aspect-square relative rounded-[32px] overflow-hidden bg-surface/50">
                <Image 
                  src="/features/feature-chef-v2.png" 
                  alt="Chef Performance" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesChef;
