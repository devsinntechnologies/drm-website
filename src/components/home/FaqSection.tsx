"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the typical setup process for RMS?",
      a: "Our experts handle everything. We assist with hardware setup, configure your local and cloud servers, import your menus, sync your initial inventory database, and run onsite/online training sessions. Most cafes go live within 2 hours, and multi-branch restaurants within 24-48 hours.",
      category: "Setup",
    },
    {
      q: "How do your subscription plans work?",
      a: "Our plans are SaaS-based and modular. You pay a base fee according to your scale (Starter, Growth, Pro, Enterprise) and can toggle specific modules (like KDS, Rider Dispatch, or the AI Forecasting Suite) on or off for individual branches via the Super Admin Console.",
      category: "Subscription",
    },
    {
      q: "Does RMS support real-time multi-branch synchronization?",
      a: "Yes. All outlets, terminals, KDS screens, and inventory transactions synchronize instantly to our cloud database. If a branch loses internet connection, the system automatically shifts to offline mode, queuing local records and syncing back to the cloud the moment connectivity returns.",
      category: "Multi Branch",
    },
    {
      q: "How secure is my restaurant data?",
      a: "Security is our highest priority. All transaction records, customer data, and financial logs are encrypted in transit and at rest. We utilize enterprise AWS servers with automated daily backups, audit trails, and strict role-based access logs.",
      category: "Security",
    },
    {
      q: "What AI features are included in RMS?",
      a: "RMS features built-in machine learning models that run in the background. They forecast weekend sales peaks, predict raw ingredient demands to suggest automated vendor orders, build staff shifts schedules to minimize overtime, detect potential profit leaks (inventory shrinkage or void errors), and recommend dynamic pricing updates.",
      category: "AI Features",
    },
    {
      q: "What third-party platforms does RMS integrate with?",
      a: "We support native API integrations out-of-the-box. These include delivery portals (UberEats, Foodpanda), SMS providers, online review platforms (Google Reviews), payment channels (Stripe, JazzCash, EasyPaisa, credit cards), WhatsApp Business APIs, and accounting software (QuickBooks, Xero).",
      category: "Integrations",
    },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6">
          <span className="section-label">Common Queries</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            Everything you need to know about setting up and running RMS for your restaurant brand.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx} 
                className="border border-surface-border bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                style={{
                  borderColor: isOpen ? "var(--primary)" : "var(--surface-border)"
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-background/20 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md w-fit">
                      {faq.category}
                    </span>
                    <span className="font-extrabold text-foreground text-sm sm:text-base leading-snug">{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center shrink-0 text-muted transition-colors ${
                    isOpen ? "bg-primary/10 text-primary" : ""
                  }`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-muted text-sm leading-relaxed font-semibold border-t border-dashed border-surface-border">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
