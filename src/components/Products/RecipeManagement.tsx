"use client";

import React from "react";

const RecipeManagementPage = () => {
  const features = [
    "Recipe Costing",
    "Ingredient Tracking",
    "Food Cost Reports",
    "Kitchen Analytics",
    "Recipe Standardization",
    "Inventory Integration",
    "Menu Planning",
    "Waste Tracking",
    "Supplier Integration",
    "Nutritional Reports",
    "Batch Recipes",
    "Kitchen Workflow",
    "Portion Control",
    "Cloud Access"
  ];

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-8">Recipe Management</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-primary text-2xl font-bold mb-4">{feature}</h3>
              <p className="text-white/70">Smart kitchen and recipe control system.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeManagementPage;