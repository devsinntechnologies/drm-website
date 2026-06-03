"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiPlay, FiMail } from "react-icons/fi";

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#090b12] z-0" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center text-[#f5f7fb]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Section label */}
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Get Started Today</span>
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight max-w-3xl">
            Ready to Transform Your <span className="text-primary text-glow">Restaurant Operations</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-[#95a1b6] text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of restaurants running on the RMS AI-Powered Operating System. Automate inventory, speed up checkouts, and boost your margins.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <Link
              href="/demo"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg glow-primary hover:-translate-y-1 flex items-center gap-2 shimmer-btn"
            >
              <FiCalendar className="text-lg" />
              Schedule Demo
            </Link>

            <Link
              href="/signup"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <FiPlay className="text-lg text-primary" />
              Start Free Trial
            </Link>

            <Link
              href="/contact"
              className="border border-white/10 hover:border-white/30 bg-white/5 text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <FiMail className="text-lg" />
              Contact Sales
            </Link>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-xs font-bold text-[#95a1b6] uppercase tracking-wider">
            <span>✓ No credit card required to start</span>
            <span>✓ Set up in under 2 hours</span>
            <span>✓ Cancel or upgrade at any time</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
