"use client";

import React from "react";
import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Rahman",
    role: "Cafe Owner",
    text: "N&S Software Solutions transformed our kitchen operations. The speed of order processing and inventory accuracy is now on another level.",
    initials: "SR",
  },
  {
    name: "Ahmed Malik",
    role: "Restaurant Manager",
    text: "The best investment we made this year. I can monitor all branches directly from my phone.",
    initials: "AM",
  },
  {
    name: "Zeba Khan",
    role: "Founder, Foodie Hub",
    text: "Scaling our franchise became super easy. Their support team is always there.",
    initials: "ZK",
  },
  {
    name: "Omar Siddiqui",
    role: "Chain Restaurant Owner",
    text: "The system reduced kitchen errors and improved our speed significantly.",
    initials: "OS",
  },
  {
    name: "Fatima Noor",
    role: "F&B Director",
    text: "FBR integration is now effortless. Everything is automated and stress-free.",
    initials: "FN",
  },
  {
    name: "Bilal Chaudhry",
    role: "Franchise Manager",
    text: "Managing multiple outlets is now simple and fully controlled from one dashboard.",
    initials: "BC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow with 20% Opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] tracking-tight">
            Trusted by <span className="text-[#0055FF]">Businesses</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed">
            Join thousands of businesses running smarter with N&S Software Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <FiStar key={j} size={16} className="text-[#0055FF] fill-[#0055FF]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-normal leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center text-sm font-black group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#08162D]">{review.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;