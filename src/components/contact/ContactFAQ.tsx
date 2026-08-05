"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import { PHONE_DISPLAY } from "@/lib/contact";

const faqs = [
  {
    q: "How quickly will I receive a response?",
    a: `We typically reply within two business hours on working days. For urgent issues, call ${PHONE_DISPLAY} or message us on WhatsApp.`,
  },
  {
    q: "Do you offer free demos?",
    a: "Yes. Book a free demo to see POS, inventory, and reporting tailored to your industry—restaurant, pharmacy, mart, and more.",
  },
  {
    q: "Which industries do you support?",
    a: "Restaurants, supermarkets, pharmacies, bakeries, distribution, apparel, and other retail verticals across Pakistan.",
  },
  {
    q: "Can you build a custom solution?",
    a: "Yes. Describe your workflow in the form and our consultants will propose a tailored implementation plan.",
  },
  {
    q: "Is my information secure?",
    a: "Form submissions are sent securely. We do not share your details with third parties. See our Privacy Policy for more.",
  },
];

export default function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionShell tone="background">
      <SectionHeader
        align="center"
        label="FAQ"
        title="Common questions"
        description="Quick answers before you reach out."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-2xl border bg-surface overflow-hidden transition-all ${
                isOpen ? "border-primary/35 shadow-sm" : "border-surface-border hover:border-primary/25"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground">{faq.q}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
                  }`}
                >
                  {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-muted leading-relaxed border-t border-surface-border pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
