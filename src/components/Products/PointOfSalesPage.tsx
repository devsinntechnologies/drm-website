"use client";

import React from "react";
import { motion } from "framer-motion";

const PointOfSalesPage = () => {
  const features = [
    "Smart Billing",
    "Barcode Scanning",
    "Multi Branch Support",
    "Kitchen Order Display",
    "Offline Mode",
    "Sales Analytics",
    "Customer Loyalty",
    "Discount Management",
    "Inventory Sync",
    "Tax Management",
    "Employee Tracking",
    "Receipt Printing",
    "Cloud Backup",
    "Mobile POS"
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-6"
        >
          Point of Sales System
        </motion.h1>

        <p className="text-white/70 max-w-3xl text-lg leading-relaxed mb-14">
          Powerful POS system designed for restaurants, retail stores, cafes, and enterprise businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{feature}</h3>
              <p className="text-white/70">
                Advanced {feature.toLowerCase()} functionality for modern businesses.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointOfSalesPage;