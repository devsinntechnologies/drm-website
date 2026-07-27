"use client";

import React from "react";
import Link from "next/link";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SoftwareSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* Hero Section */}
      <section className="relative py-28 md:py-40 overflow-hidden border-b border-gray-200 flex items-center bg-[#08162D]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0055FF]/20 via-[#08162D] to-[#08162D] opacity-80"></div>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055FF]/20 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 gap-12 items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/20 border border-[#0055FF]/40 px-4 py-2 rounded-xl mb-6 shadow-md">
              N&S ENTERPRISE SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
              Bespoke <span className="text-[#0055FF]">Software Solutions</span>
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed mb-8">
              We design, develop, and deploy scalable enterprise software tailored specifically for your operational workflows.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg group"
              >
                Start Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section below Hero */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-4xl relative z-10">
           <h2 className="text-2xl sm:text-4xl font-black text-[#08162D] mb-6 tracking-tight">Empower your entire workforce</h2>
           <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
             Transform legacy processes into agile, digitized workflows. Built on a complete cloud infrastructure that scales securely alongside your organization.
           </p>
           <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-6 py-3 rounded-xl">
             <FiServer size={18} /> Enterprise Cloud Enabled
           </div>
        </div>
      </section>

      {/* Section 1: Core Capabilities Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
              KEY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#08162D] mb-4 tracking-tight">
              Engineered for <span className="text-[#0055FF]">Modern Businesses</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-normal">
              Everything you need to automate your unique business processes efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiSmartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Custom Architecture</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Systems built exactly to match your needs, ensuring a perfect fit rather than relying on generic workarounds.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiShield size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Bank-Grade Security</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Data encryption, robust user permissions, and compliance with industry standards to protect your assets.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Seamless Integrations</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Connect seamlessly with third-party tools, ERPs, APIs, and legacy databases via robust data pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}