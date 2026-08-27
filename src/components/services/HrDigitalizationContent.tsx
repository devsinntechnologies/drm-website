"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight, FiUsers, FiFileText } from "react-icons/fi";
import { motion } from "framer-motion";
import UnifiedValueMissionVision from "@/components/common/UnifiedValueMissionVision";
import Button from "@/components/ui/Button";

export default function HrDigitalizationContent() {
  return (
    <main className="min-h-screen bg-surface text-foreground">

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/hrhero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center px-6 text-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-primary tracking-wide drop-shadow-2xl">
              HR DIGITALIZATION
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. GEN HRIS Services Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              HRIS PLATFORM
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              GEN <span className="text-primary">HRIS Services</span>
            </h2>
            <p className="text-muted text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              DigiNizam has evolved an advanced HR software known as the Human Resource Information System (HRIS). This powerful platform integrates important systems and methods to make sure efficient management of human assets, enterprise workflows, and personnel statistics.
            </p>
            <p className="text-muted text-[11px] sm:text-xs leading-relaxed mb-4 font-normal">
              HR software in Pakistan like DigiNizam is broadly adopted by several corporations to streamline essential HR functions, serving as the central hub for operations across numerous organizational contexts.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-xl">
              <FiShield size={14} /> Centralized Database &amp; Employee Directory
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
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Payroll Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center relative z-10">
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
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              AUTOMATED PAYROLL
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              Streamlined <span className="text-primary">Payroll</span> Management
            </h2>
            <p className="text-muted text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              Experience the efficiency of streamlined payroll operations with our integrated payroll software in Pakistan. A single, secure platform that simplifies the payroll process for businesses operating across borders.
            </p>
            <p className="text-muted text-[11px] sm:text-xs leading-relaxed mb-4 font-normal">
              Accurate and timely payroll management and compliance with labour regulations across different regions. Intuitive interface that simplifies payroll calculations, tax deductions, and automated salary disbursements.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-xl">
              <FiAward size={14} /> One-Click Salary Disbursal &amp; Tax Compliance
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Time & Attendance Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              TIME TRACKING
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              Time &amp; <span className="text-primary">Attendance</span>
            </h2>
            <p className="text-muted text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              Store, process, and manage employee attendance data seamlessly. Integrated with biometric machines, facial recognition, and mobile check-in to track shifts, tardiness, overtime, and leave requests.
            </p>
            <p className="text-muted text-[11px] sm:text-xs leading-relaxed mb-4 font-normal">
              Managing payroll, recruitment, benefits administration, time and attendance, employee performance evaluations, and competency training logs under one synchronized system.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-xl">
              <FiClock size={14} /> Biometric &amp; Shift Synchronization
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
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Project Description & Scope of Work Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              SCOPE OF WORK
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              Project Description &amp; <span className="text-primary">Scope of Work</span>
            </h2>
            <p className="text-muted text-xs sm:text-[13px] font-normal">
              A complete digital transformation roadmap for human capital management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5 group-hover:bg-primary group-hover:text-white transition-all">
                <FiUsers size={18} />
              </div>
              <h3 className="text-sm font-black text-foreground mb-1 group-hover:text-primary transition-colors">Employee Self-Service Portal</h3>
              <p className="text-muted text-[11px] leading-relaxed font-normal">
                Digital portal for leave applications, payslip downloads, tax certificates, and personal profile updates.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5 group-hover:bg-primary group-hover:text-white transition-all">
                <FiTrendingUp size={18} />
              </div>
              <h3 className="text-sm font-black text-foreground mb-1 group-hover:text-primary transition-colors">Performance & Appraisal System</h3>
              <p className="text-muted text-[11px] leading-relaxed font-normal">
                KPI tracking, 360-degree performance evaluations, and automated increment calculation tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2.5 group-hover:bg-primary group-hover:text-white transition-all">
                <FiFileText size={18} />
              </div>
              <h3 className="text-sm font-black text-foreground mb-1 group-hover:text-primary transition-colors">Recruitment & Onboarding</h3>
              <p className="text-muted text-[11px] leading-relaxed font-normal">
                Job posting automation, applicant tracking, interview scheduling, and digital onboarding documentation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. We Convert Your Idea Into a Reality Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-2 border border-primary/20">
            DIGITAL TRANSFORMATION
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight mb-2">
            We Convert Your <span className="text-primary">Idea Into a Reality</span>
          </h2>
          <p className="text-muted text-xs sm:text-[13px] leading-relaxed mb-4 font-normal">
            Reduce administrative overhead and foster a happier workplace. Our intelligent digital HR tools securely manage personnel records, streamline payroll processing, and guarantee complete labor regulatory compliance.
          </p>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl mb-5">
            <FiServer size={16} /> Centralized Enterprise Employee Hub
          </div>
          <div>
            <Button href="/contact" variant="primary" size="md">
              Digitize your HR <FiArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Our Value, Our Mission, Our Vision (Unified Section) - Background: bg-surface */}
      <UnifiedValueMissionVision
        bgLight={true}
        value="Accuracy, compliance, and a genuine focus on making HR simpler for every employee and manager."
        mission="Digitize payroll, attendance, and HR workflows so teams spend less time on paperwork and more time on people."
        vision="Become the leading HRIS platform for businesses across Pakistan modernizing their human capital management."
      />

    </main>
  );
}
