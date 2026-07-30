"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function HRDigitalizationPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section with Video Background (No Bluish Shade, Video: hrhero.mp4) */}
      <section className="relative min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-gray-200 bg-[#08162D]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/hrhero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Warm Glow Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055FF]/15 blur-[180px] rounded-full pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#0055FF]/10 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full py-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-black/60 border border-white/20 px-3 py-1 rounded-xl mb-2.5 shadow-lg backdrop-blur-md">
              DigiNizam ENTERPRISE SERVICES • DEVSINN SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2.5 text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Intelligent <span className="text-[#3b82f6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">HR Solutions</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-100 font-medium leading-relaxed mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Automate payroll, attendance, leave management, and employee evaluations with our comprehensive Human Resource Digitalization suite.
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

      {/* 2. Content Section below Hero */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center max-w-4xl relative z-10">
           <h2 className="text-xl sm:text-2xl font-black text-[#08162D] mb-2 tracking-tight">Empower your HR department</h2>
           <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-3 font-normal">
             Reduce administrative overhead and foster a happier workplace. Our digital tools securely manage personnel records and ensure full regulatory compliance.
           </p>
           <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2 rounded-xl">
             <FiServer size={16} /> Centralized Employee Hub
           </div>
        </div>
      </section>

      {/* 3. Section: DigiNizam HRIS Service (genhrisservice.jpg) */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              HRIS PLATFORM
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#08162D] mb-2 tracking-tight">
              DigiNizam <span className="text-[#0055FF]">HRIS Service</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              DigiNizam has evolved an advanced HR software known as the Human Resource Information System (HRIS). This powerful device integrates important systems and methods to make sure green management of human assets, commercial enterprise workflows, and statistics.
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-3 font-normal">
              HR software in Pakistan like DigiNizam is broadly followed by way of several corporations to streamline essential HR functions, serving as the imperative hub for operations across numerous organizational contexts.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-3 py-1.5 rounded-xl">
              <FiShield size={14} /> Secure Database Management
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image 
              src="/genhrisservice.jpg" 
              alt="DigiNizam HRIS Service" 
              width={420} 
              height={280}
              className="w-auto max-h-[260px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Section: Payroll (payrollhr.jpg) */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <Image 
              src="/payrollhr.jpg" 
              alt="Payroll Software" 
              width={420} 
              height={280}
              className="w-auto max-h-[260px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              AUTOMATED PAYROLL
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#08162D] mb-2 tracking-tight">
              Streamlined <span className="text-[#0055FF]">Payroll Management</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              Experience the efficiency of streamlined payroll operations with our integrated payroll software in Pakistan. A single, secure platform that simplifies the payroll process for businesses operating across borders.
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-3 font-normal">
              Accurate and timely payroll management and compliance with labour regulations across different countries. Intuitive interface that simplifies payroll processing, from calculations to salary disbursements.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-3 py-1.5 rounded-xl">
              <FiAward size={14} /> One-Click Disbursal
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Section: Time & Attendance (timeattendencehr.png) */}
      <section className="py-5 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              TIME TRACKING
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#08162D] mb-2 tracking-tight">
              Time & <span className="text-[#0055FF]">Attendance</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              An HR store, processes and manages employee data, such as names, addresses, national IDs or Social Security numbers, visa or work permit information, and other dependent details.
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-3 font-normal">
              Storing employee data, managing payroll, recruitment, benefits administration, time and attendance, employee performance management, and tracking competency and training records, these are the essential HR functions that are the chain of the respective Human Information.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-3 py-1.5 rounded-xl">
              <FiClock size={14} /> Biometric & Shift Sync
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image 
              src="/timeattendencehr.png" 
              alt="Time and Attendance" 
              width={420} 
              height={280}
              className="w-auto max-h-[260px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Modernize your Workforce Section (Expanded to 6 Boxes) */}
      <section className="py-5 md:py-8 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
              KEY CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#08162D] mb-1.5 tracking-tight">
              Modernize your <span className="text-[#0055FF]">Workforce</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-[13px] font-normal">
              Everything you need to attract, retain, and manage top talent efficiently with DigiNizam.
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
                <FiClock size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Attendance & Roster</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Biometric integrations and shift scheduling with real-time tardiness and overtime tracking.
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
                <FiAward size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Automated Payroll</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                One-click payroll generation, factoring in leaves, tax brackets, and performance bonuses automatically.
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
                <FiShield size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Compliance & Privacy</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Securely store sensitive personnel documents while meeting local labor laws and tax reporting standards.
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
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Performance Management</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Set KPIs, conduct 360-degree employee appraisals, and track professional growth metrics seamlessly.
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
                <FiSmartphone size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Recruitment & Onboarding</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Streamline candidate pipelines, automated resume screening, and paperless digital onboarding.
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
                <FiCheckCircle size={18} />
              </div>
              <h3 className="text-sm font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">Employee Self-Service</h3>
              <p className="text-gray-600 text-[11px] leading-relaxed font-normal">
                Empower staff to apply for leaves, download payslips, and update personal information directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}