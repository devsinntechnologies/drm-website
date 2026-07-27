"use client";
import React from "react";
import { motion } from "framer-motion";

const DemoForm = () => {
  const perks = [
    "Full system walkthrough",
    "Hardware compatibility check",
    "Custom menu strategy",
    "ROI & Pricing analysis",
  ];

  return (
    <section className="py-24 bg-white text-[#08162D] relative overflow-hidden border-t border-gray-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0055FF]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* PERKS SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2 rounded-xl mb-4">
              FREE WALKTHROUGH
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#08162D] mb-8 tracking-tight">
              What to expect in your{" "}
              <span className="text-[#0055FF]">Free Walkthrough</span>
            </h3>

            <div className="space-y-6">
              {perks.map((perk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 text-base font-bold text-gray-700 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0055FF]/10 flex items-center justify-center text-[#0055FF] group-hover:bg-[#0055FF] group-hover:text-white transition-all shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {perk}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-8 bg-white border border-gray-200 shadow-sm rounded-2xl relative overflow-hidden group hover:border-[#0055FF] transition-all"
            >
              <p className="text-gray-600 leading-relaxed font-normal italic">
                "Scheduling a demo was the best decision for our cafe. The expert showed us exactly
                how we could cut wastage by 15% using their inventory system."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center font-black text-xs">
                  AP
                </div>
                <div className="text-sm font-black text-[#08162D]">
                  Aiden Pearce, CEO @ CafeX
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl"
          >
            <form className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">

              <div className="space-y-6 relative z-10">

                {/* Restaurant Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CafeX"
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-semibold text-[#08162D]"
                  />
                </div>

                {/* City + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                      Outlet City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-semibold text-[#08162D]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="0300-1234567"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-semibold text-[#08162D]"
                    />
                  </div>

                </div>

                {/* Order Volume */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                    Daily Order Volume
                  </label>
                  <select
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3.5 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none transition-all font-semibold text-[#08162D] appearance-none cursor-pointer"
                  >
                    <option>0 - 50 Orders</option>
                    <option>50 - 200 Orders</option>
                    <option>200+ Orders</option>
                  </select>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Schedule Walkthrough
                </motion.button>

                <p className="text-center text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                  No credit card required. No commitment.
                </p>

              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DemoForm;