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

const bookFaqs: FaqItem[] = [
  {
    q: "What is book store POS software?",
    a: "Book store POS software records sales and connects them with catalogue inventory, publisher purchasing, barcode billing and reporting so bookshops can manage daily operations from one system.",
  },
  {
    q: "What is the best POS software for a bookshop?",
    a: "The right system depends on catalogue size, billing workflow, inventory accuracy, publisher purchasing, ISBN or barcode support, reporting and number of locations. Compare these requirements before choosing a POS.",
  },
  {
    q: "Can book store POS software manage inventory?",
    a: "Yes. DigiNizam connects book inventory with sales, purchases and returns so teams can maintain clearer stock visibility across titles and categories.",
  },
  {
    q: "Does DigiNizam support ISBN barcode billing?",
    a: "Yes. Scanning a book's barcode or ISBN finds the matching book in your DigiNizam catalogue for billing. Confirm your scanner and label requirements during the demo. Scanning an ISBN does not itself import book information from an external catalogue.",
  },
  {
    q: "Can book store POS manage publishers and purchases?",
    a: "Yes. DigiNizam includes supplier and purchase records, so publisher orders and goods receipt connect with inventory records.",
  },
  {
    q: "Does DigiNizam support low-stock monitoring for bookstores?",
    a: "Yes. DigiNizam includes low-stock alerts to help teams identify titles that may need replenishment.",
  },
  {
    q: "Can DigiNizam manage multiple bookshop branches?",
    a: "Yes. DigiNizam supports connected branch-level stock, sales and reporting across multiple outlets.",
  },
  {
    q: "What features should book store POS software have?",
    a: "Compare book item records, catalogue search, sales, inventory, purchasing, barcodes and reports. Check the fields needed for titles and editions, and confirm any ISBN lookup or external database integration separately. Bookstore sales software does not imply library lending or publishing production.",
  },
  {
    q: "Does DigiNizam automatically import book details from an ISBN?",
    a: "Automatic book-data import is not included in the scope described here. A barcode or ISBN can identify a configured item, but retrieving author, publisher, cover or price information from an external database is a separate integration to confirm.",
  },
];

const bookModules = [
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

export default function BooksPageContent() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <JsonLd data={faqJsonLd(bookFaqs)} />

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/BookShopPeople.mp4" type="video/mp4" />
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
              Bookstore POS Software for Billing &amp; Catalogue Inventory
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Keep bookshop sales, catalogue items and stock records connected. Review supplier purchases, barcode requirements and daily reports for your store.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionCopy label="Overview" title="What Is Bookstore POS Software?">
        <p>
          Bookstore POS software records book sales and connects them with catalogue inventory,
          purchasing and reports. An ISBN can identify a book edition, while a barcode can
          retrieve a matching configured item. Automatic import from an external book database
          is a separate integration.
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
              Bookshop Billing and <span className="text-primary">Catalogue Records</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              Keep book sales, catalogue items and stock records connected. Review purchasing and reports using the books and stationery your shop sells.
            </p>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Bring sample ISBN and barcode labels to review item lookup and billing. Confirm the supported scanners and item fields in the selected setup.
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
              src="/POSbook2.jpg"
              alt="Customer browsing shelves in a bookshop"
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
                Review Your <span className="text-primary">Bookshop Workflow</span>
              </h2>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Review book titles, editions and other shop items alongside purchases, sales and stock records. Keep bookselling requirements distinct from library lending or publishing production.
              </p>
              <p className="text-muted text-xs sm:text-sm font-normal leading-relaxed mb-4">
                A stored ISBN or scanned barcode identifies a configured catalogue item. It does not automatically import author, publisher, cover or price information from an external database. Confirm any required catalogue fields or integrations separately.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Book catalogue and item records
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} /> Barcode and ISBN requirements
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
                src="/POSBOOK.png"
                alt="Illustration of a bookshop counter with a POS screen, receipt printer and barcode scanner"
                width={280}
                height={420}
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
              Bookshop <span className="text-primary">Workflows to Review</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookModules.map((mod, idx) => (
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
          Bookshops in Pakistan can review catalogue items, supplier purchases and billing with
          DigiNizam. Confirm ISBN handling and hardware using sample books during the demo.
        </p>
        <IndustryContextLinks peer="retail" />
      </SectionCopy>

      <SeoFaq
        label="Book Store POS"
        title="Bookshop software questions"
        description="Direct answers for common book store software questions."
        items={bookFaqs}
      />

      {/* 5. Our Clientele Section - Background: bg-surface */}
      <ProductCTA
        title="Review DigiNizam for Your Bookshop"
        description="Book a demo to review bookshop billing, catalogue records, purchasing and reports. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />

      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section - Background: bg-surface */}
      <ProductCertificates bgLight={false} />

    </div>
  );
}
