"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "How long does the installation take?",
    a: "Standard installation for a single outlet usually takes 2-4 hours. For multi-unit franchises, we plan a phased rollout over 2-3 days."
  },
  {
    q: "Is training provided for my staff?",
    a: "Yes, we providing unlimited free training for your team members. We also have a comprehensive library of video guides."
  },
  {
    q: "Can I use DRM on my existing hardware?",
    a: "Our software is built to be hardware-agnostic. However, for the best performance and stability, we recommend our enterprise-grade terminals."
  },
  {
    q: "What happens if my internet goes down?",
    a: "DRM features a robust offline mode. You can keep selling and managing your kitchen; all data will sync automatically once internet is restored."
  }
];

const SupportFAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Common Questions</span>
          <h2 className="text-4xl font-extrabold text-foreground mt-4">Frequently Asked <span className="text-primary">Questions</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIdx === i ? 'bg-surface border-primary/30 shadow-xl' : 'bg-surface/30 border-surface-border/50'}`}
            >
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full py-6 px-8 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${activeIdx === i ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {faq.q}
                </span>
                <motion.div 
                  animate={{ rotate: activeIdx === i ? 180 : 0 }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${activeIdx === i ? 'bg-primary text-white' : 'bg-surface-border/30 text-muted'}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-muted font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportFAQ;
