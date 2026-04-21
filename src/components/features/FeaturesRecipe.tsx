"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesRecipe = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="section-label mb-6">Kitchen Control</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
              Precise <span className="gradient-text">Recipe</span> <br />
              Management
            </h2>
            <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl font-medium">
              Maintain consistent taste and margins. Our system tracks raw ingredients 
              and calculates food cost for every dish you serve.
            </p>

            <div className="space-y-6">
              {[
                { t: "Ingredient Deduction", d: "Raw materials are automatically deducted from stock upon order fulfillment." },
                { t: "Menu Costing", d: "Real-time calculation of food costs based on ingredient price fluctuations." },
                { t: "Consistency Control", d: "Digital recipe cards ensure your chefs cook the perfect dish every single time." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-5 p-6 rounded-3xl bg-surface/30 border border-surface-border/50 group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 text-secondary group-hover:bg-secondary group-hover:text-background transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{item.t}</h4>
                    <p className="text-sm text-muted leading-relaxed font-medium">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-[40px] blur-2xl opacity-50 transition-opacity group-hover:opacity-100" />
            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative glass-card rounded-[40px] p-2 overflow-hidden shadow-2xl"
            >
              <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden relative bg-surface/50">
                <Image 
                  src="/features/feature-recipe-v2.png" 
                  alt="Recipe Management" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/10 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesRecipe;
