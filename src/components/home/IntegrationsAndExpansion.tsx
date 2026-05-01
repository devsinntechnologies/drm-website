"use client";
import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsAndExpansion = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8 }
    })
  };

  const auths = ['FBR', 'SRB', 'PRA', 'KPRA'];
  const rules = ["Franchise Order Management", "Set credit or other rules", "Monitor ROI securely"];
  const glowAccents = [
    'from-yellow-200/50 via-transparent to-transparent',
    'from-orange-200/50 via-transparent to-transparent',
    'from-red-200/50 via-transparent to-transparent'
  ];

  return (
    <section 
      className="relative overflow-hidden py-24 bg-gradient-to-tr from-red-200 via-orange-100 to-orange-100"
      style={{
        background: '',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-primary/15 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary ring-1 ring-primary/20">
              Compliance & Expansion
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                Powerful DRM for franchise growth,
                <span className="block text-primary">built to scale without compromise.</span>
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Transform compliance into a competitive advantage with a DRM platform that connects revenue authorities, franchise operations, and real-time insights in one beautiful, responsive experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '4+', label: 'Authority connectors' },
                { value: '100% ', label: 'Audit-ready flows' },
                { value: '24/7', label: 'Realtime compliance' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6, type: 'spring', stiffness: 220 }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(249,115,22,0.18)]"
                >
                  <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-linear-to-br ${glowAccents[idx]} opacity-0 transition duration-500 group-hover:opacity-80`} />
                  <div className="relative z-10">
                    <div className="text-3xl font-black text-slate-900">{item.value}</div>
                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 220 }}
            className="group relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-6 shadow-[0_35px_90px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_45px_130px_rgba(249,115,22,0.16)] sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-linear-to-br from-orange-200/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-80 blur-3xl" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-10 bottom-10 h-44 w-44 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative z-10 grid gap-6">
              <motion.div className="group rounded-4xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(249,115,22,0.14)]">
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-red-200/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-90 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Authority sync</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">FBR, SRB, PRA & KPRA</h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-sm">✓</span>
                </div>
                <div className="mt-6 grid gap-3">
                  {auths.map((auth, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 220 }} className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-sm hover:shadow-md">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">{auth}</div>
                      <span className="text-sm font-medium text-slate-700">Instantly connected and monitored</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="group rounded-4xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(249,115,22,0.14)]">
                <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-orange-200/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-80 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Franchise rules</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">Safe ROI controls</h3>
                  </div>
                  <div className="inline-flex rounded-3xl bg-secondary/10 px-3 py-2 text-sm font-semibold text-secondary">Smart</div>
                </div>
                <div className="mt-6 space-y-3">
                  {rules.map((rule, idx) => (
                    <motion.div key={idx} whileHover={{ x: 4 }} transition={{ duration: 0.3 }} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
                      {rule}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 grid gap-6 xl:grid-cols-3"
        >
          {[
            {
              title: 'Connected everywhere',
              desc: 'One platform that ties regulatory integrations with franchise operations in a seamless workflow.',
              accent: 'bg-primary/10 text-primary'
            },
            {
              title: 'Beautiful dashboards',
              desc: 'Crystal clear insights and compliance status across every outlet, updated in real time.',
              accent: 'bg-secondary/10 text-secondary'
            },
            {
              title: 'Scalable by design',
              desc: 'Designed to support 10, 100, or 1,000 locations without slowing down.',
              accent: 'bg-emerald-100 text-emerald-600'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7, type: 'spring', stiffness: 220 }}
              className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-500 hover:shadow-[0_35px_110px_rgba(249,115,22,0.16)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-yellow-200/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-90 blur-3xl" />
              <div className="relative z-10">
                <span className={`inline-flex rounded-3xl px-3 py-2 text-sm font-semibold ${item.accent}`}>{item.title}</span>
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { metric: '+850', label: 'FBR authorizations' },
            { metric: '3x', label: 'Faster setup' },
            { metric: '+120', label: 'Franchise partners' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-[0_35px_90px_rgba(249,115,22,0.16)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-4xl bg-linear-to-br from-red-200/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-90 blur-3xl" />
              <div className="relative z-10">
                <div className="text-4xl font-black text-slate-900">{stat.metric}</div>
                <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsAndExpansion;
