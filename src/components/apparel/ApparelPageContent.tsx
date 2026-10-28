"use client";

import React from "react";
import Image from "next/image";
import { FiCheckCircle, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";
import ProductCTA from "@/components/common/ProductCTA";
import SectionCopy from "@/components/common/SectionCopy";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import type { FaqItem } from "@/lib/seo";

const apparelFaqs: FaqItem[] = [
  {
    q: "How should a clothing store organise size and colour inventory?",
    a: "A clothing catalogue needs to distinguish the items that staff sell and count. Size, colour, style and edition of a product may require separate item records or supported variant fields. Review your actual catalogue in DigiNizam to confirm how stock, labels, sales and returns are recorded.",
  },
  {
    q: "Which apparel variants, returns and barcode workflows does DigiNizam support?",
    a: "The selected configuration determines the available item fields, barcode formats and return actions. Review a clothing sale, return and stock update using sample sizes and colours in the demo. A matrix, store-credit system or automated reorder module is not implied by this page.",
  },
];

const apparelModules = [
  {
    title: "Inventory records",
    desc: "Review item fields, stock movements and the locations available in the selected configuration.",
    icon: <FiBox size={20} />
  },
  {
    title: "Billing workflow",
    desc: "Review item lookup, sales, invoices and any supported discount or return actions.",
    icon: <FiLayers size={20} />
  },
  {
    title: "Barcode and labels",
    desc: "Confirm barcode formats, scanner compatibility and label fields using your product examples.",
    icon: <FiPrinter size={20} />
  },
  {
    title: "Purchasing records",
    desc: "Review supplier records, purchasing and receiving steps available in your setup.",
    icon: <FiTruck size={20} />
  },
  {
    title: "Business reports",
    desc: "Review the sales, stock and purchasing reports available in your selected configuration. Confirm local tax obligations separately.",
    icon: <FiBarChart2 size={20} />
  },
  {
    title: "Locations and connectivity",
    desc: "Confirm the locations, user access and connectivity needed for your selected setup.",
    icon: <FiGlobe size={20} />
  }
];

export default function ApparelPageContent() {
  return (
    <div className="min-h-screen bg-surface text-foreground">

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/herogarments.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center px-6 text-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-4xl mx-auto">
              Apparel POS Software for Clothing Stores &amp; Boutiques
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Bring clothing store billing, item records and stock activity together. Review the size, colour, barcode and purchasing requirements for your apparel setup.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionCopy label="Overview" title="What Is Apparel POS Software?">
        <p>
          Apparel POS software records clothing sales and connects them with item inventory,
          purchasing and reports. Size, colour and style can affect how a clothing retailer
          organises its catalogue. Confirm the fields, item structure and checkout actions
          available in the selected DigiNizam setup.
        </p>
      </SectionCopy>

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
              Clothing Store Billing and <span className="text-primary">Stock Records</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              Keep clothing sales and item inventory organised in one retail workflow. Review the product fields, checkout actions and reports your store needs.
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Review item entry, sales, returns and purchasing using sample clothing products. Confirm size and colour handling, bill holding and payment recording in the selected configuration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/apprelgarmentsstaff.jpg"
              alt="Store staff wearing shirts printed with the word Staff"
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
                Review Your <span className="text-primary">Apparel Store Workflow</span>
              </h2>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Bring clothing, footwear or accessory examples to the demo. Check how item records, stock, sales and purchases fit your catalogue and store operations.
              </p>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Confirm whether sizes and colours use separate item records or supported variant fields. Review barcode labels, exchanges and stock updates without assuming a matrix, store-credit or automated reorder module.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Item, size and colour requirements
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Sales and return workflow review
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Purchasing and report requirements
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
                src="/posgarments.png"
                alt="Illustration of a cashier using a DigiNizam clothing product screen on a POS terminal"
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
              Apparel Store <span className="text-primary">Workflows to Review</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apparelModules.map((mod, idx) => (
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

      <SectionCopy label="Your setup" title="Discuss Your Business Setup" reverse>
        <p>
          Clothing stores and boutiques in Pakistan can review item records, size and colour
          requirements, purchases and billing in a DigiNizam demo before agreeing on the
          configuration.
        </p>
        <IndustryContextLinks peer="retail" />
      </SectionCopy>

      <SeoFaq
        label="Apparel POS"
        title="Clothing store software questions"
        description="Direct answers for common apparel and clothing store questions."
        items={apparelFaqs}
      />

      {/* 5. Our Clientele Section - Background: bg-surface */}
      <ProductCTA
        title="Review DigiNizam for Your Clothing Store"
        description="Book a demo to review clothing store billing, catalogue requirements, purchases and stock. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />

      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section - Background: bg-surface */}
      <ProductCertificates bgLight={false} />

    </div>
  );
}
