"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import ProductCTA from "@/components/common/ProductCTA";

const autoModules = [
  {
    title: "Inventory Control",
    desc: "Real-time stock tracking for thousands of spare parts, bin location mapping, and low-stock alerts.",
    icon: <FiBox size={20} />
  },
  {
    title: "Point of Sale (POS)",
    desc: "Lightning-fast counter checkouts, part code scanning, holding bills, and flexible discounts.",
    icon: <FiLayers size={20} />
  },
  {
    title: "Barcode & Label Printing",
    desc: "Generate and print custom part labels, shelf tags, and storage bin barcodes instantly.",
    icon: <FiPrinter size={20} />
  },
  {
    title: "Purchase & Supplier Management",
    desc: "Manage vendor ledgers, purchase orders, auto-part shipments, and automated reorder schedules.",
    icon: <FiTruck size={20} />
  },
  {
    title: "Financial & Tax Reports",
    desc: "Comprehensive profit/loss, daily cash registers, expense registers, and automated FBR tax reports.",
    icon: <FiBarChart2 size={20} />
  },
  {
    title: "Multi-Store & Cloud Sync",
    desc: "Control multiple showroom branches or spare parts outlets from a single centralized real-time cloud dashboard.",
    icon: <FiGlobe size={20} />
  }
];

export default function AutomobilePageContent() {
  return (
    <main className="min-h-screen bg-surface text-foreground">

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/automobile.mp4" type="video/mp4" />
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
              AUTOMOBILE
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
              Empower your <span className="text-primary">dealership &amp; workshop staff</span> with SRB
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              High-speed counter billing, service technician assignment tracking, and real-time inventory reports all in one platform to eliminate parts misplacement and billing bottlenecks.
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower counter clerks, mechanics, and floor managers with intuitive touchscreen workflows, holding customer estimates, split payment processing, and offline backup redundancy.
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
            className="flex justify-center"
          >
            <Image
              src="/automobilestaff.jpg"
              alt="Empower Dealership and Workshop Staff"
              width={420}
              height={280}
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
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
                Designed for Modern <span className="text-primary">Automobile &amp; Spare Parts Stores</span>
              </h2>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Everything you need to manage auto parts inventory, vehicle sales, service counters, and customer accounts seamlessly under high-volume pressures.
              </p>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Our comprehensive automobile suite provides precise serial number tracking, part compatibility matrices, barcode scanning for quick part lookup, and instantaneous stock visibility across multiple storage bays.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Part Number &amp; Vehicle Compatibility Matrix
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Workshop Repair Job Cards &amp; Labor Tracking
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> FBR Fiscal Integration &amp; Multi-Branch Sync
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/posautomobile.png"
                alt="Designed for Modern Automobile and Dealership POS System"
                width={420}
                height={280}
                className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
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
              Explore Our Powerful <span className="text-primary">Automobile Modules</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm font-normal mt-1">
              Designed to handle every operational department of your automobile showroom and auto parts store under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {autoModules.map((mod, idx) => (
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
