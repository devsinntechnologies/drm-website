"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiMonitor, FiBox, FiSettings, FiCreditCard, FiStar, 
  FiTruck, FiPlayCircle, FiLayers, FiTrendingUp, FiPrinter, 
  FiUsers, FiBriefcase 
} from "react-icons/fi";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Industries = () => {
  const features: FeatureItem[] = [
    {
      title: "Point of Sale (POS)",
      desc: "Manage billing, orders, payments, and customer experience from one smart restaurant POS system.",
      icon: <FiMonitor />,
    },
    {
      title: "Supply Chain",
      desc: "Track inventory, vendors, stock levels, and kitchen supplies with real-time updates.",
      icon: <FiBox />,
    },
    {
      title: "Production Management",
      desc: "Monitor kitchen workflows and improve restaurant operations with better efficiency.",
      icon: <FiSettings />,
    },
    {
      title: "Accounts & Finance",
      desc: "Handle restaurant expenses, reports, invoices, and financial management easily.",
      icon: <FiCreditCard />,
    },
    {
      title: "Customer Loyalty",
      desc: "Build customer relationships using rewards, loyalty programs, and CRM tools.",
      icon: <FiStar />,
    },
    {
      title: "Sales & Delivery",
      desc: "Manage online orders, takeaway, and delivery operations from a single dashboard.",
      icon: <FiTruck />,
    },
    {
      title: "Kitchen Display System (KDS)",
      desc: "Send live orders directly to kitchen screens to reduce paper tickets and speed up preparation.",
      icon: <FiPlayCircle />,
    },
    {
      title: "Table & Reservation Management",
      desc: "Manage table bookings, seating plans, and customer reservations in real-time.",
      icon: <FiLayers />,
    },
    {
      title: "Barcode & Billing Scanner",
      desc: "Scan product/barcode items for faster billing and accurate order processing.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Printer Integration",
      desc: "Automatically print receipts, kitchen orders, and invoices directly from POS system.",
      icon: <FiPrinter />,
    },
    {
      title: "Staff Management System",
      desc: "Assign roles, track shifts, attendance, and performance of restaurant staff.",
      icon: <FiUsers />,
    },
    {
      title: "Vendor & Supplier Management",
      desc: "Manage physical suppliers, purchase orders, and raw material deliveries efficiently.",
      icon: <FiBriefcase />,
    },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <span className="section-label">Tailored Solutions</span>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-primary mt-4">
          Smart Restaurant ERP
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted max-w-3xl mx-auto leading-relaxed font-semibold">
          Our smart restaurant ERP solution helps restaurants simplify orders,
          manage inventory, improve customer experience, and grow business with
          one powerful cloud platform.
        </p>

        <div className="mt-14 overflow-hidden rounded-3xl border border-surface-border shadow-2xl relative group">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <img
            src="/restaurantservice.jpg"
            alt="Restaurant ERP"
            className="w-full h-[260px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mt-28 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground">
          Our All-in-One
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
          Restaurant ERP Solution
        </h2>
        <p className="mt-5 text-muted max-w-2xl mx-auto font-semibold">
          Powerful tools designed to streamline restaurant operations,
          improve productivity, and deliver a better dining experience.
        </p>
      </div>

      {/* 🚀 PREMIUM FEATURE CARDS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="relative group rounded-3xl p-8 bg-white/70 border border-surface-border/80 shadow-lg transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            {/* Glow background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-all duration-300">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-relaxed text-muted font-medium">
                  {feature.desc}
                </p>
              </div>

              {/* underline bar */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-32 relative z-10">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 md:p-16 text-center shadow-lg">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Transform Your Restaurant Business
          </h2>

          <p className="mt-6 text-muted max-w-2xl mx-auto leading-relaxed font-semibold">
            Digitize your restaurant operations with our modern ERP platform
            and provide a seamless experience to your customers.
          </p>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg glow-primary shimmer-btn">
            Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;