"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  FiMonitor,
  FiBox,
  FiCreditCard,
  FiTruck,
  FiPlayCircle,
  FiUsers,
} from "react-icons/fi";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "Point of Sale (POS)",
    desc: "Billing, orders, and payments in one fast restaurant POS.",
    icon: <FiMonitor />,
  },
  {
    title: "Supply Chain",
    desc: "Live inventory, vendors, and kitchen stock updates.",
    icon: <FiBox />,
  },
  {
    title: "Accounts & Finance",
    desc: "Expenses, invoices, and clear financial reports.",
    icon: <FiCreditCard />,
  },
  {
    title: "Sales & Delivery",
    desc: "Takeaway, delivery, and online orders in one view.",
    icon: <FiTruck />,
  },
  {
    title: "Kitchen Display (KDS)",
    desc: "Live kitchen tickets—faster prep, less paper.",
    icon: <FiPlayCircle />,
  },
  {
    title: "Staff Management",
    desc: "Roles, shifts, and attendance in one place.",
    icon: <FiUsers />,
  },
];

const Industries = () => {
  return (
    <section className="min-h-screen bg-background text-foreground py-10 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="section-label">Tailored Solutions</span>
        <h1 className="hero-title text-3xl md:text-5xl text-primary mt-4">
          Smart Restaurant ERP
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-medium">
          Simplify orders, inventory, and service from one cloud platform.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-3xl border border-surface-border shadow-2xl relative group animate-scan"
        >
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <img
            src="/restaurantservice.jpg"
            alt="Restaurant ERP"
            className="w-full h-[260px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground">
          All-in-One <span className="text-primary">Restaurant ERP</span>
        </h2>
        <p className="mt-3 text-muted max-w-xl mx-auto font-medium">
          Core tools that streamline operations and improve the dining experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="relative group rounded-3xl p-5 bg-surface/70 border border-surface-border/80 shadow-lg backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-base mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted font-medium">
                {feature.desc}
              </p>
              <div className="mt-5 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-20 relative z-10">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6 md:p-10 text-center shadow-lg animate-pulse-glow">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Transform Your Restaurant
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto leading-relaxed font-medium">
            Digitize operations and deliver a smoother guest experience.
          </p>
          <Button href="/demo" variant="primary" size="lg" className="mt-6">
            Book Free Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
