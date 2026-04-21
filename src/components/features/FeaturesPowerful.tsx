"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Table Side Ordering",
    desc: "Empower your waitstaff with mobile terminals to take orders directly at the table.",
    icon: "📱",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Kitchen Display (KDS)",
    desc: "Paperless kitchen communication for peak efficiency and error-free cooking.",
    icon: "🍳",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Customer Loyalty",
    desc: "Build lasting relationships with integrated loyalty programs and rewards.",
    icon: "🎁",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Online Ordering",
    desc: "Direct website and mobile app ordering without high commission fees.",
    icon: "🌐",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Inventory Control",
    desc: "Real-time stock tracking with automated alerts and supplier management.",
    icon: "📦",
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    title: "Deep Analytics",
    desc: "Visual reports on sales, staff performance, and customer trends.",
    icon: "📊",
    color: "from-indigo-500/20 to-violet-500/20"
  }
];

const FeaturesPowerful = () => {
  return (
    <section className="py-32 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label">All-in-One POS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            <span className="gradient-text">Powerful Features</span> <br />
            For Modern Restaurants
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-10 rounded-[40px] border border-surface-border/50 group relative overflow-hidden"
            >
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}
              >
                {f.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="text-muted leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPowerful;
