"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCalendar, FiPlay, FiMail, FiCloud, FiCpu, FiShield, FiLayers } from "react-icons/fi";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-background flex items-center py-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                Next-Gen Restaurant Operating System
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-foreground">
              AI-Powered <span className="text-primary">Restaurant Management</span> System for Modern Restaurants
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl font-medium">
              Manage Orders, POS, Inventory, Kitchen Operations, Staff, Deliveries, Customer Relationships, Analytics, and AI Automation from one unified platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/demo"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg glow-primary hover:-translate-y-1 flex items-center gap-2 shimmer-btn"
              >
                <FiCalendar className="text-lg" />
                Book a Demo
              </Link>

              <Link
                href="/signup"
                className="bg-[#35A000]/10 hover:bg-[#35A000]/20 text-[#35A000] border border-[#35A000]/30 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <FiPlay className="text-lg" />
                Start Free Trial
              </Link>

              <Link
                href="/contact"
                className="border border-gray-300 hover:border-primary/50 hover:text-primary bg-white text-foreground px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <FiMail className="text-lg" />
                Contact Sales
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-surface-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted/80 mb-4">
                TRUSTED & ENTERPRISE APPROVED
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "Multi Branch Support", icon: <FiLayers className="text-primary" /> },
                  { name: "Cloud Based", icon: <FiCloud className="text-primary" /> },
                  { name: "AI Powered", icon: <FiCpu className="text-primary" /> },
                  { name: "Enterprise Ready", icon: <FiShield className="text-primary" /> },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 rounded-xl bg-white/50 border border-surface-border p-3 shadow-xs hover:border-primary/30 transition-all duration-300 hover:bg-white"
                  >
                    {badge.icon}
                    <span className="text-xs font-bold text-foreground/90">{badge.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Dashboard Display */}
            <div className="relative w-full max-w-[650px] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card p-2 rounded-[32px] overflow-hidden border border-surface-border/80 shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
                <Image
                  src="/bhojon-all-in-one-restaurant-management-software.png"
                  alt="AI Restaurant Operating System Dashboard"
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain rounded-[24px]"
                  priority
                />
              </div>

              {/* Floating micro-insights tag */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md px-5 py-3 border border-surface-border rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <div className="text-left">
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Live System Status</p>
                  <p className="text-xs font-extrabold text-foreground">AI Automation Active</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
