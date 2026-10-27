"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import { FiArrowUpRight, FiMonitor, FiBox, FiBarChart2 } from "react-icons/fi";

const industries = [
  { name: "Retail stores", path: "retail", desc: "POS and business management for retail shops." },
  { name: "Restaurants", path: "restaurant", desc: "Explore restaurant orders, billing and inventory workflows." },
  { name: "Pharmacies", path: "pharmacy", desc: "Discuss billing and stock requirements for your pharmacy or medical store." },
  { name: "Apparel & boutiques", path: "apparel", desc: "Explore the setup for clothing and garment stores." },
  { name: "Salons & spas", path: "salon", desc: "Review the workflows relevant to salon and spa businesses." },
  { name: "Bakeries", path: "bakery", desc: "Discuss POS and inventory needs for bakeries and sweet shops." },
  { name: "Electrical stores", path: "electric", desc: "Explore billing and stock workflows for electrical retail." },
  { name: "Jewellery shops", path: "jewellery", desc: "Review your jewellery store's billing and item-record requirements." },
  { name: "Toy stores", path: "toys", desc: "Explore POS and inventory for toy retail businesses." },
  { name: "Cafés", path: "cafe", desc: "Discuss café orders, billing and day-to-day operations." },
  { name: "Furniture stores", path: "furniture", desc: "Review the setup for furniture sales and inventory." },
  { name: "Supermarkets", path: "supermarket", desc: "Explore supermarket checkout and stock workflows." },
  { name: "Manufacturing", path: "manufacturing", desc: "Discuss materials, finished-goods stock, purchasing and invoicing requirements." },
  { name: "Auto parts stores", path: "automobile", desc: "Explore billing and inventory for automotive parts retail." },
  { name: "Book stores", path: "books", desc: "Review your bookshop's sales and stock requirements." },
  { name: "Snooker clubs", path: "snooker", desc: "Explore the setup for snooker club operations." },
  { name: "Distribution & wholesale", path: "distribution", desc: "Discuss wholesale, warehouse and distribution workflows." },
];

const features = [
  { title: "POS & billing", desc: "Manage sales and billing in the configuration selected for your business.", icon: <FiMonitor /> },
  { title: "Inventory", desc: "Review item and stock workflows relevant to your industry and locations.", icon: <FiBox /> },
  { title: "Business reports", desc: "Discuss the sales, inventory and operating reports your team needs.", icon: <FiBarChart2 /> },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Industry solutions"
        title={
          <>
            POS & business management for <span className="text-primary">your industry</span>
          </>
        }
        description="DigiNizam serves businesses globally, from retail and restaurants to other supported industries. Find your industry below and review the relevant setup in a demo."
      />

      <SectionShell glow>
        <SectionHeader
          align="center"
          label="Industries we serve"
          title="Find your business"
          description="Explore our industry pages. Available modules and workflows depend on your selected configuration; confirm your requirements with our team."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.path}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.06 }}
            >
              <Link
                href={`/products/${industry.path}`}
                className="block h-full rounded-2xl p-5 bg-surface border border-surface-border hover:border-primary transition-colors group focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
              >
                <h3 className="type-card-title text-foreground group-hover:text-primary flex items-center justify-between gap-3">
                  {industry.name}<FiArrowUpRight aria-hidden="true" className="shrink-0 text-primary" />
                </h3>
                <p className="type-body text-muted mt-2">{industry.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell glow>
        <SectionHeader
          align="center"
          label="Core workflows"
          title="Discuss the tools your team needs"
          description="Start with your daily operations and confirm the configuration during your demo."
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
        title="See DigiNizam for your business"
        description="Book a demo first. If you choose to proceed, discuss your requirements with our team and agree on pricing."
      />
    </div>
  );
};

export default Industries;
