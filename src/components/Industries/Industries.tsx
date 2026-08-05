"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import {
  FiMonitor,
  FiBox,
  FiCreditCard,
  FiTruck,
  FiPlayCircle,
  FiUsers,
} from "react-icons/fi";

const features = [
  { title: "Point of Sale", desc: "Billing, orders, and payments in one fast restaurant POS.", icon: <FiMonitor /> },
  { title: "Supply chain", desc: "Live inventory, vendors, and kitchen stock updates.", icon: <FiBox /> },
  { title: "Accounts & finance", desc: "Expenses, invoices, and clear financial reports.", icon: <FiCreditCard /> },
  { title: "Sales & delivery", desc: "Takeaway, delivery, and online orders in one view.", icon: <FiTruck /> },
  { title: "Kitchen display (KDS)", desc: "Live kitchen tickets—faster prep, less paper.", icon: <FiPlayCircle /> },
  { title: "Staff management", desc: "Roles, shifts, and attendance in one place.", icon: <FiUsers /> },
];

const Industries = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        label="Tailored solutions"
        title={
          <>
            Smart restaurant <span className="text-primary">ERP & POS</span>
          </>
        }
        description="Simplify orders, inventory, and service from one cloud platform built for Pakistan's food businesses."
      />

      <section className="pb-12 md:pb-16 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[260px] md:h-[460px] rounded-2xl overflow-hidden border border-surface-border"
          >
            <img src="/restaurantservice.jpg" alt="Restaurant ERP" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <SectionShell glow>
        <SectionHeader
          align="center"
          label="Platform capabilities"
          title="All-in-one restaurant operations"
          description="Core tools that streamline service, kitchen flow, and back-office reporting."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl p-5 bg-surface border border-surface-border hover:border-primary transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="type-card-title text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="type-body text-muted mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SiteCTA
        title="Transform your restaurant"
        description="Digitize operations and deliver a smoother guest experience with DigiNizam."
      />
    </main>
  );
};

export default Industries;
