"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How quickly will I receive a response after submitting the form?",
    a: "Our team typically responds within 2 business hours during working days. For urgent matters, you can also reach us directly via phone at 021-111 DigiNizam.",
  },
  {
    q: "Do you offer free demos or consultations?",
    a: "Yes! We offer free demo sessions and consultations for all our products including ECommerce Solutions, CRM (Field Force), HR Digitalization, and more. Simply select 'Product Inquiry' in the subject field and mention the product you're interested in.",
  },
  {
    q: "Which industries do you serve?",
    a: "DigiNizam serves a wide range of industries including retail, distribution, manufacturing, healthcare, and services. Our software solutions are designed to scale with your business needs.",
  },
  {
    q: "Can I request a custom software solution?",
    a: "Absolutely. We specialize in tailored software development. Describe your requirements in the message field and our consultants will get back to you with a customized proposal.",
  },
  {
    q: "Is my data secure when I submit the contact form?",
    a: "Yes. All form submissions are encrypted and transmitted securely via EmailJS. We do not share your personal information with third parties. Please review our Privacy Policy for full details.",
  },
];

const ContactFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="py-4 md:py-5 bg-surface border-t border-surface-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-2 border border-primary/20 shadow-sm">
            FAQ
          </span>
          <h2 className="font-black text-foreground tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl mx-auto">
            Quick answers to common questions about reaching our team.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`rounded-2xl border transition-all overflow-hidden ${
                openIdx === idx
                  ? "border-primary/40 shadow-sm shadow-primary/10"
                  : "border-surface-border hover:border-primary/25"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left group"
              >
                <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                    openIdx === idx
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {openIdx === idx ? <FiMinus size={13} /> : <FiPlus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 text-xs sm:text-sm text-muted leading-relaxed border-t border-surface-border pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;
