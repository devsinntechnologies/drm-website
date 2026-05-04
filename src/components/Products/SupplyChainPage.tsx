"use client";

import React from "react";

const SupplyChainPage = () => {
  const features = [
    "Vendor Management",
    "Warehouse Tracking",
    "Real Time Inventory",
    "Purchase Orders",
    "Demand Forecasting",
    "Delivery Monitoring",
    "Procurement Automation",
    "Supplier Analytics",
    "Shipment Tracking",
    "Stock Alerts",
    "Inventory Transfers",
    "Order Automation",
    "Supply Planning",
    "Cloud Reporting"
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-8">Supply Chain Management</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >
              <h3 className="text-primary text-2xl font-bold mb-4">{item}</h3>
              <p className="text-white/70 leading-relaxed">
                Streamline operations using intelligent {item.toLowerCase()} tools.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainPage;