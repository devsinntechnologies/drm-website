"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductClienteleProps {
  bgLight?: boolean;
}

const clienteleLogos = [
  { name: "Retail Mart", logo: "/retailstore.png" },
  { name: "Supermart Express", logo: "/supermarket.png" },
  { name: "Fast Food Chain", logo: "/fastfood.png" },
  { name: "Coffee House", logo: "/coffeeshop.png" },
  { name: "Pharmacy Plus", logo: "/pharmacy.png" },
  { name: "Book Hub", logo: "/bookstore.png" },
  { name: "Boutique & Co", logo: "/boutique.png" },
  { name: "Auto Spare World", logo: "/AutoParts.png" },
];

export default function ProductClientele({ bgLight = true }: ProductClienteleProps) {
  return (
    <section className={`py-4 md:py-6 ${bgLight ? "bg-surface" : "bg-surface"} border-b border-surface-border relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-xl mb-2 border border-primary/20">
            OUR CLIENTELE
          </span>
          <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
            Trusted by Industry <span className="text-primary">Leaders &amp; Brands</span>
          </h2>
          <p className="text-muted text-xs sm:text-sm font-normal mt-1">
            Empowering hundreds of retail outlets, enterprise chains, and businesses across the country.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center justify-center">
          {clienteleLogos.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-surface border border-surface-border rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm hover:border-primary hover:shadow-md transition-all group h-20"
            >
              <div className="relative w-8 h-8 mb-1.5 grayscale group-hover:grayscale-0 transition-all">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] font-bold text-muted group-hover:text-primary transition-colors truncate w-full">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
