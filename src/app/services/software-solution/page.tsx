"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, 
  FiTrendingUp, FiServer, FiArrowRight, FiCode, FiCpu, 
  FiLayers, FiGlobe, FiDatabase, FiCloud, FiActivity 
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function SoftwareSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section (Video Background) - Reduced Padding */}
      <section className="relative min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-gray-200 bg-[#08162D]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/softwaresolution.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full py-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-black/60 border border-white/20 px-3 py-1 rounded-xl mb-2.5 shadow-lg backdrop-blur-md">
              ENTERPRISE SERVICES • DEVSINN SOLUTIONS
            </span>
            <h1 className="text-base sm:text-lg font-black leading-tight text-white tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0px 4px rgba(0,0,0,0.8)' }}>
              Bespoke <span className="text-[#00B4FF]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Software Solutions</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-100 font-medium leading-relaxed mt-3 mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              We design, develop, and deploy scalable enterprise software tailored specifically for your operational workflows by Devsinn with absolute reliability.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl group"
              >
                Start Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do Section - Enhanced with 6 Comprehensive Expertise Cards */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              OUR EXPERTISE
            </span>
            <h2 className="text-xl sm:text-base font-black text-[#08162D] tracking-tight">
              What <span className="text-[#0055FF]">We Do</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] font-normal">
              Devsinn delivers end-to-end digital engineering services designed to accelerate growth, automate complex processes, and future-proof your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiCode size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Custom App Development</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Scalable web and mobile applications engineered with clean code architecture and optimal performance.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiCpu size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Digital Transformation</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Modernizing legacy systems into agile, automated cloud-native environments for maximum efficiency.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiLayers size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Enterprise Integration</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Connecting third-party APIs, CRMs, ERPs, and databases into a unified corporate ecosystem.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiCloud size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Cloud & DevOps Engineering</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Automated CI/CD pipelines, multi-cloud deployments, and serverless infrastructure management.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiGlobe size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">UI/UX Product Design</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                User-centric wireframing, interactive prototyping, and design systems built for high conversion.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiDatabase size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Big Data & Analytics</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Advanced data warehousing, business intelligence dashboards, and predictive reporting pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Empower Your Entire Workforce Section - Layout Alternated & Spacing Reduced */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              WORKFORCE EFFICIENCY
            </span>
            <h2 className="text-xl sm:text-base font-black text-[#08162D] tracking-tight">
              Empower your <span className="text-[#0055FF]">entire workforce</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              Transform legacy processes into agile, digitized workflows. Built on a complete cloud infrastructure that scales securely alongside your organization under Devsinn expert guidance.
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-3 font-normal">
              Provide your team with intuitive dashboards, real-time collaboration tools, and role-based access permissions that boost daily productivity and minimize administrative friction.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-3 py-1.5 rounded-xl">
              <FiServer size={14} /> Enterprise Cloud Enabled
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <Image 
              src="/softwareworkflow.png" 
              alt="Empower Your Entire Workforce Workflow" 
              width={420} 
              height={280}
              className="w-auto max-h-[260px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Engineered for Modern Businesses Section - Enhanced with 6 Full Capability Cards */}
      <section className="py-5 md:py-8 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              KEY CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-base font-black text-[#08162D] tracking-tight">
              Engineered for <span className="text-[#0055FF]">Modern Businesses</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] font-normal">
              Everything you need to automate your unique business processes efficiently with Devsinn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiSmartphone size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Custom Architecture</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Systems built exactly to match your needs, ensuring a perfect fit rather than relying on generic workarounds.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiShield size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Bank-Grade Security</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Data encryption, robust user permissions, and compliance with industry standards to protect your assets.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiAward size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Seamless Integrations</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Connect seamlessly with third-party tools, ERPs, APIs, and legacy databases via robust data pipelines.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiTrendingUp size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">High Scalability & Performance</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Infrastructure designed to scale seamlessly under high traffic volume and massive transaction loads.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiClock size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Dedicated Engineering Support</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Round-the-clock maintenance, proactive monitoring, and continuous code optimization by Devsinn specialists.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-2.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiActivity size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Real-Time Monitoring & Logs</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Instant alerts, diagnostic telemetry, and performance tracking dashboards for complete system visibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}