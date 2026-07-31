"use client";

import React from "react";
import Link from "next/link";
import { FiCalendar, FiPlay, FiMail } from "react-icons/fi";

const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-10 bg-navy relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-royal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center text-white">
        <span className="inline-flex items-center gap-2 bg-royal/20 border border-royal/30 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-royal" />
          <span className="text-xs font-bold uppercase tracking-widest text-royal">Get Started Today</span>
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight max-w-3xl">
          Ready to Transform Your <span className="text-bright">Restaurant Operations</span>?
        </h2>

        <p className="text-sm md:text-base text-white/70 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of restaurants running on DigiNizam POS. Automate inventory, speed up checkouts, and boost your margins.
        </p>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          <Link
            href="/demo"
            className="bg-royal hover:bg-royal/90 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-royal/30 flex items-center gap-2"
          >
            <FiCalendar size={18} />
            Schedule Demo
          </Link>

          <Link
            href="/signup"
            className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <FiPlay size={18} className="text-bright" />
            Start Free Trial
          </Link>

          <Link
            href="/contact"
            className="border border-white/10 hover:border-white/30 bg-white/5 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <FiMail size={18} />
            Contact Sales
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-xs font-bold text-white/50 uppercase tracking-wider">
          <span>✓ No credit card required to start</span>
          <span>✓ Set up in under 2 hours</span>
          <span>✓ Cancel or upgrade at any time</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;