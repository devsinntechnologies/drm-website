"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const offices = [
  {
    icon: <FiMapPin size={16} />,
    label: "Headquarters",
    value: "Lahore, Pakistan",
  },
  {
    icon: <FiPhone size={16} />,
    label: "Phone",
    value: "021-111 DigiNizam",
  },
  {
    icon: <FiMail size={16} />,
    label: "Email",
    value: "hello@diginizam.com",
  },
];

const ContactOfficeInfo = () => {
  return (
    <div className="py-4 md:py-5 bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20 shadow-sm">
            OFFICE INFO
          </span>
          <h2 className="font-black text-[#08162D] tracking-tight">
            Business <span className="text-[#0055FF]">Hours & Location</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl mx-auto">
            Visit us, call us, or drop an email — we're always ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">

          {/* Business Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-[#0055FF]/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center">
                <FiClock size={17} />
              </div>
              <span className="text-xs font-black text-[#08162D] uppercase tracking-wider">Working Hours</span>
            </div>

            <div className="space-y-2">
              {hours.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs font-medium ${
                    row.time === "Closed"
                      ? "bg-gray-50 text-gray-400"
                      : "bg-[#0055FF]/5 text-[#08162D]"
                  }`}
                >
                  <span>{row.day}</span>
                  <span
                    className={`font-black text-[11px] px-2 py-0.5 rounded-lg ${
                      row.time === "Closed"
                        ? "bg-gray-100 text-gray-400"
                        : "bg-[#0055FF]/15 text-[#0055FF]"
                    }`}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-[#0055FF]/30 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center">
                <FiMapPin size={17} />
              </div>
              <span className="text-xs font-black text-[#08162D] uppercase tracking-wider">Contact Details</span>
            </div>

            <div className="space-y-2">
              {offices.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center shrink-0 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{item.label}</div>
                    <div className="text-xs font-semibold text-[#08162D]">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <a
                href="mailto:hello@diginizam.com"
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#0055FF] hover:bg-[#0044cc] text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-md shadow-[#0055FF]/20"
              >
                <FiMail size={13} />
                Email Us Directly
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactOfficeInfo;
