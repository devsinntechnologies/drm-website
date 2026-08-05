"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

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

export default function ProductClientele({ bgLight = true }: { bgLight?: boolean }) {
  return (
    <SectionShell tone={bgLight ? "surface" : "background"}>
      <SectionHeader
        align="center"
        label="Our clientele"
        title={
          <>
            Trusted by businesses across <span className="text-primary">Pakistan</span>
          </>
        }
        description="Retail outlets, chains, and growing brands rely on DigiNizam every day."
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center justify-center">
        {clienteleLogos.map((client, idx) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-surface border border-surface-border rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-sm hover:border-primary hover:shadow-md transition-all group h-20"
          >
            <div className="relative w-8 h-8 mb-1.5 grayscale group-hover:grayscale-0 transition-all">
              <Image src={client.logo} alt={client.name} fill className="object-contain" />
            </div>
            <span className="text-[10px] font-semibold text-muted group-hover:text-primary transition-colors truncate w-full">
              {client.name}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
