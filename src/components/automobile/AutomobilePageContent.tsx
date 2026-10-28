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
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const autoFaqs: FaqItem[] = [
  {
    q: "What is auto parts POS software?",
    a: "Auto parts POS software records spare parts sales and connects them with inventory, supplier purchasing, barcode billing and reporting so auto parts stores can manage daily operations from one system.",
  },
  {
    q: "What is the best POS software for an auto parts store?",
    a: "The right system depends on parts catalogue size, billing workflow, inventory accuracy, supplier management, barcode support, reporting and number of locations. Compare these requirements before choosing a POS.",
  },
  {
    q: "Can auto parts POS software manage inventory?",
    a: "Yes. DigiNizam tracks spare parts stock and connects inventory records with sales and purchases so teams can maintain clearer stock visibility.",
  },
  {
    q: "Does DigiNizam support barcode billing for auto parts?",
    a: "Yes. DigiNizam supports barcode billing for auto parts, including counter checkout scanning. Confirm part-label and shelf-tag printing with your printer during the demo.",
  },
  {
    q: "Can auto parts POS manage suppliers and purchases?",
    a: "Yes. DigiNizam includes purchase and supplier records that connect ordering and receiving with inventory.",
  },
  {
    q: "Can DigiNizam manage multiple auto parts branches?",
    a: "Yes. DigiNizam supports multi-branch control with connected branch-level stock, sales and reporting across outlets.",
  },
  {
    q: "Does auto parts POS include tax and financial reports?",
    a: "Review the sales, inventory and operating reports available in your selected DigiNizam configuration. Confirm local tax-reporting obligations separately.",
  },
  {
    q: "What features should auto parts POS software have?",
    a: "Compare part records, counter billing, inventory, purchasing, barcode requirements, reports and locations. Check whether your business also needs vehicle fitment, serial tracking or repair jobs. Those specialist requirements are separate from ordinary parts-store billing.",
  },
  {
    q: "Does DigiNizam include vehicle fitment, serial tracking or workshop tools?",
    a: "Vehicle-fitment databases, serial tracking, repair job cards, labour tracking and technician assignments are separate from the parts-store billing and inventory workflow described here. Confirm any specialist requirements separately during the demo.",
  },
];

const autoModules = [
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

export default function AutomobilePageContent() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <JsonLd data={faqJsonLd(autoFaqs)} />

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/automobile.mp4" type="video/mp4" />
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
              Auto Parts POS Software for Billing &amp; Inventory
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Bring spare parts billing, item records and stock activity together. Review purchasing, barcode requirements and reports for your parts store.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionCopy label="Overview" title="What Is Auto Parts POS Software?">
        <p>
          Auto parts POS software records spare parts sales and connects them with inventory,
          purchasing and business reports. A parts-store billing system is different from a
          workshop or dealership system. Vehicle fitment, repair jobs and labour tracking need
          separate confirmation.
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
              Parts Store Billing and <span className="text-primary">Stock Records</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              Keep spare parts sales, item records and stock activity connected. Review purchasing and the reports needed by your counter and inventory team.
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Use sample parts to review item lookup, billing and stock movements. Confirm the available item fields, scanner support and location setup during the demo.
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
              src="https://images.unsplash.com/photo-1777213003360-0419fd2fbfdf?q=80&w=840&h=560&auto=format&fit=crop"
              alt="Vehicle indicator and tail lights sorted into spare-parts stock bins"
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
                Review Your <span className="text-primary">Spare Parts Store Workflow</span>
              </h2>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Bring sample part codes, product categories and supplier documents. Review the billing and inventory steps that fit your store.
              </p>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Vehicle fitment databases, serial-number tracking, vehicle sales, technician assignments, repair job cards and labour tracking are separate specialist requirements. They are not included as capabilities in the scope described here.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Parts catalogue and stock requirements
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Counter billing and purchase workflow
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Location and report requirements
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
                src="/posautomobile.png"
                alt="Illustration of a POS terminal showing the DigiNizam start screen"
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
              Auto Parts Store <span className="text-primary">Workflows to Review</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {autoModules.map((mod, idx) => (
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
          Auto parts retailers in Pakistan can review spare parts records, counter billing and
          supplier purchases with DigiNizam. Confirm specialist fitment or workshop needs
          separately.
        </p>
        <IndustryContextLinks peer="retail" />
      </SectionCopy>

      <SeoFaq
        label="Auto Parts POS"
        title="Auto parts store software questions"
        description="Direct answers for common auto parts and spare parts store software questions."
        items={autoFaqs}
      />

      {/* 5. Our Clientele Section - Background: bg-surface */}
      <ProductCTA
        title="Review DigiNizam for Your Auto Parts Store"
        description="Book a demo to review parts billing, catalogue records, purchasing and reports. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />

      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section - Background: bg-surface */}
      <ProductCertificates bgLight={false} />

    </div>
  );
}
