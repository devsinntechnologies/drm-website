"use client";
import React from 'react';
import { motion } from 'framer-motion';

const LoyaltyAndInsights = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const glowStyles = [
    'from-yellow-300/40 via-transparent to-transparent',
    'from-orange-300/40 via-transparent to-transparent',
    'from-red-300/40 via-transparent to-transparent',
  ];

  const borderColors = [
    'border-yellow-400',
    'border-orange-400',
    'border-red-400',
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-linear-to-br from-red-50 via-orange-50 to-amber-100">
      <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-primary/15 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-[42%] h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary ring-1 ring-primary/20">
              Loyalty & Insights
            </span>

            <h1 className="max-w-3xl text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Make loyalty irresistible and analytics instantly clear.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Deliver a standout loyalty experience with smart insights that help managers act faster, reward customers better, and grow revenue effortlessly.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { number: '+85%', label: 'Repeat Visits' },
                { number: '+31%', label: 'Revenue Growth' },
                { number: '2x', label: 'Faster Decisions' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 220 }}
                    className={`group relative overflow-hidden rounded-[28px] border ${borderColors[idx % borderColors.length]} bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(249,115,22,0.18)]`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${glowStyles[idx % glowStyles.length]} opacity-0 transition duration-500 group-hover:opacity-80 blur-3xl`} />
                  <div className="relative z-10">
                    <div className="text-3xl font-extrabold text-slate-900">{stat.number}</div>
                    <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 220 }}
              className="group relative overflow-hidden rounded-[36px] border border-yellow-400 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_40px_120px_rgba(249,115,22,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-yellow-300/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-80 blur-3xl" />
              <img
                src="/home/loyalty-mockup.png"
                alt="Loyalty App"
                className="w-full h-full object-cover aspect-4/3 transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white/70 via-transparent to-transparent" />
              <div className="absolute left-5 bottom-5 rounded-3xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200/70 backdrop-blur-xl">
                Real-time loyalty tracking
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 220 }}
              className="group relative overflow-hidden rounded-[36px] border border-red-400 bg-linear-to-br from-primary/20 via-white to-secondary/10 p-6 shadow-[0_35px_80px_rgba(148,163,184,0.15)] transition-shadow duration-300 hover:shadow-[0_40px_120px_rgba(249,115,22,0.16)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-300/0 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-80 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-24 bg-white/80 blur-3xl" />
              <div className="relative space-y-4">
                <span className="text-sm uppercase tracking-[0.3em] text-primary">Insights Dashboard</span>
                <h2 className="text-3xl font-bold text-slate-900">Fast decisions, clear results</h2>
                <p className="text-slate-600 leading-7">
                  Designed for managers who need smart visuals, outlet comparisons, and quick signals without the clutter.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Live sales', 'Outlet comparisons', 'Menu performance', 'Shift summary'].map((item, i) => (
                    <div key={i} className="rounded-3xl bg-white/90 px-4 py-3 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            { title: 'Compliance first', desc: 'Stay aligned with revenue authorities.' },
            { title: 'Scale faster', desc: 'Prepare your business for franchise growth.' },
            { title: 'Clear rules', desc: 'Apply credit, payout, and ROI controls easily.' },
            { title: 'Secure by design', desc: 'Built with audit-ready workflows.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 220 }}
              className={`group relative overflow-hidden rounded-4xl border ${borderColors[idx % borderColors.length]} bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_35px_110px_rgba(249,115,22,0.16)]`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${glowStyles[idx % glowStyles.length]} opacity-0 transition duration-500 group-hover:opacity-90 blur-3xl`} />
              <div className="relative z-10">
                <div className="text-sm uppercase tracking-[0.3em] text-primary">{item.title}</div>
                <p className="mt-4 text-sm text-slate-600 leading-6">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { metric: '+850', label: 'FBR authorizations' },
            { metric: '3x', label: 'Faster setup' },
            { metric: '+120', label: 'Franchise partners' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 220 }}
              className={`group relative overflow-hidden rounded-4xl border ${borderColors[idx % borderColors.length]} bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_35px_90px_rgba(249,115,22,0.16)]`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${glowStyles[idx % glowStyles.length]} opacity-0 transition duration-500 group-hover:opacity-90 blur-3xl`} />
              <div className="relative z-10">
                <div className="text-4xl font-black text-slate-900">{stat.metric}</div>
                <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoyaltyAndInsights;
