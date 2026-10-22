"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSalient = () => {
  const points = [
  {
    "t": "English Interface",
    "d": "DigiNizam serves customers globally through its English-language offering.",
    "i": "🌍"
  },
  {
    "t": "POS & Billing",
    "d": "Keep product records, billing and sales information connected. Review the available checkout and invoice workflows for your business.",
    "i": "🧾"
  },
  {
    "t": "Role-Based Access",
    "d": "Use supported staff roles and permissions to control access to relevant workflows. Confirm the permissions available for each role before rollout.",
    "i": "🔒"
  },
  {
    "t": "Offline-Ready Operations",
    "d": "DigiNizam supports offline-ready workflows in supported setups. Confirm which tasks work without internet, what is stored locally and how synchronization works when connectivity returns.",
    "i": "📴"
  },
  {
    "t": "24/7 Support",
    "d": "DigiNizam provides 24/7 support.",
    "i": "💬"
  },
  {
    "t": "Reports & Analytics",
    "d": "Use available reports to review sales, stock movement, product activity and outlet performance. Ask to see the specific reports you need in the live demo.",
    "i": "📊"
  }
];

  return (
    <section className="py-8 md:py-10 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[32px] md:rounded-[48px] p-6 md:p-6 relative overflow-hidden border border-surface-border/50"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-4 md:mb-5"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-4">Salient <span className="text-primary">Advantages</span></h2>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto font-medium">
                The small details that make a huge difference in your daily operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-5 md:gap-y-6">
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
                  <span className="text-lg group-hover:scale-125 transition-transform">{p.i}</span>
                  <div>
                    <h3 className="font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">{p.t}</h3>
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
