"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import ProductCTA from "@/components/common/ProductCTA";

const pharmacyModules = [
  {
    title: "Batch & Expiry Control",
    desc: "Track medicine batches, manufacturing dates, and strict expiry alerts to prevent expired stock sales.",
    icon: <FiBox size={20} />
  },
  {
    title: "Alternative Salt Finder",
    desc: "Instantly suggest alternative medicine brands based on active chemical salt formulas during billing.",
    icon: <FiLayers size={20} />
  },
  {
    title: "Barcode & Strip Scanning",
    desc: "Scan medicine boxes, strips, or individual units quickly with high-speed barcode readers.",
    icon: <FiPrinter size={20} />
  },
  {
    title: "Distributor & Supplier Ledger",
    desc: "Track pharmaceutical distributor orders, returns, claims, and running credit ledger accounts.",
    icon: <FiTruck size={20} />
  },
  {
    title: "Financial & Tax Reports",
    desc: "Accurate profit & loss calculations, daily closing cash registers, and automated tax compliance logs.",
    icon: <FiBarChart2 size={20} />
  },
  {
    title: "Multi-Branch Cloud Sync",
    desc: "Manage multiple pharmacy branches and central warehouse stock transfers from a single unified dashboard.",
    icon: <FiGlobe size={20} />
  }
];

export default function PharmacySolutionPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground">
      
      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/heropharmacy.mp4" type="video/mp4" />
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
              MEDICAL &amp; PHARMACY
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Solution Overview Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-xl mb-2.5 border border-primary/20">
              SOLUTION OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Empower your <span className="text-primary">pharmacy staff</span> with SRB
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower pharmacists and counter staff with instant medicine lookup, salt name mapping, multi-terminal connectivity, and fast prescription dispensing during rush hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-4 py-2.5 rounded-xl">
              <FiServer size={16} /> Cloud &amp; Local Sync Enabled
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border bg-surface group"
          >
            <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <Image 
              src="/Pospharmacy.png" 
              alt="Empower Pharmacy Staff and POS System" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Solution Key Features Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-xl mb-2.5 border border-primary/20">
                SOLUTION KEY FEATURES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Designed for Modern <span className="text-primary">Medical Stores &amp; ERP</span>
              </h2>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Everything you need to run pharmacies, medical stores, and healthcare inventory efficiently.
              </p>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Our comprehensive medical ERP solution connects front-end counter billing with back-end supplier purchases, warehouse distribution, and financial accounting seamlessly.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Prescription &amp; Chemical Salt Search
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Near-Expiry Stock Alerts &amp; Batch Locks
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Automatic Tax Calculation &amp; FBR Compliant Invoicing
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border bg-surface group"
            >
              <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
              <Image 
                src="/medicalerp.jpg" 
                alt="Medical ERP and Pharmacy Management Software" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Modules Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-xl mb-2.5 border border-primary/20">
              OUR MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Explore Our Powerful <span className="text-primary">Pharmacy Modules</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm font-normal mt-1">
              Designed to handle medicine inventory, salt matching, and clinical billing under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pharmacyModules.map((mod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  {mod.icon}
                </div>
                <h3 className="text-base font-black text-foreground mb-1.5 group-hover:text-primary transition-colors">
                  {mod.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Clientele Section - Background: bg-surface */}
      <ProductCTA />

      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section - Background: bg-surface */}
      <ProductCertificates bgLight={false} />

    </main>
  );
}