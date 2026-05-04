"use client";

import React from "react";

const ProductionPage = () => {
  const features = [
    "Production Planning",
    "Work Orders",
    "Batch Processing",
    "Material Tracking",
    "Machine Monitoring",
    "Quality Control",
    "Manufacturing Analytics",
    "Production Scheduling",
    "Cost Tracking",
    "Factory Reports",
    "Labor Tracking",
    "Real Time Updates",
    "Inventory Integration",
    "Automated Workflow"
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-8">Production Management</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-primary text-2xl font-bold mb-4">{feature}</h3>
              <p className="text-white/70">Modern production optimization tools.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionPage;