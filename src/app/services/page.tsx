"use client";

import React from "react";
import { FiCpu, FiMonitor, FiUsers } from "react-icons/fi";

const services = [
  {
    title: "Software Solutions",
    desc: "Bespoke enterprise software tailored to your operational workflows — fromERP modules to custom applications.",
    href: "/services/software-solution",
    icon: <FiCpu size={28} />,
  },
  {
    title: "Web Development",
    desc: "Lightning-fast, fully responsive web applications that captivate users and drive conversions across all devices.",
    href: "/services/web-development",
    icon: <FiMonitor size={28} />,
  },
  {
    title: "HR Solutions",
    desc: "Automate payroll, attendance, leave management, and employee evaluations with our comprehensive HR digitalization suite.",
    href: "/services/hr-digitalization",
    icon: <FiUsers size={28} />,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <section className="relative py-28 md:py-40 overflow-hidden border-b border-navy/10 flex items-center bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-royal/20 via-navy to-navy opacity-80"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-royal px-4 py-2 rounded-xl mb-6 shadow-md">
            N&S ENTERPRISE SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
            Our <span className="text-bright">Services</span>
          </h1>
          <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
            Comprehensive software, web, and HR solutions designed to empower your business operations.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-4 py-2 rounded-xl mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              Explore Our <span className="text-royal">Services</span>
            </h2>
            <p className="text-navy/60 text-sm sm:text-base font-medium">
              Tailored solutions to meet the unique needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <a key={idx} href={s.href} className="group bg-white p-8 rounded-xl border border-navy/10 shadow-sm hover:border-royal transition-all text-center">
                <div className="w-16 h-16 rounded-xl bg-royal/10 text-royal flex items-center justify-center mx-auto mb-6 group-hover:bg-royal group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="text-xl font-black text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 text-sm font-medium leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-block text-sm font-bold text-royal group-hover:underline">View Details →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}