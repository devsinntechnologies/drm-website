"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Feature item type definition
interface EcosystemItem {
  title: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
  icon: string;
  desc: string;
}

const EcosystemSection: React.FC = () => {
  const items: EcosystemItem[] = [
    { title: "Point of Sale", status: "Active", icon: "💻", desc: "Lightning-fast order entry" },
    { title: "Inventory Management", status: "Active", icon: "📦", desc: "Real-time stock tracking" },
    { title: "Kitchen Display (KDS)", status: "Active", icon: "🍳", desc: "Instant kitchen comms" },
    { title: "Online Ordering", status: "Active", icon: "🌐", desc: "Multi-channel orders" },
    { title: "Insights Dashboard", status: "Active", icon: "📊", desc: "Live business analytics" },
    { title: "Rider Management", status: "Beta", icon: "🛵", desc: "Delivery tracking" },
    { title: "Loyalty App", status: "Active", icon: "🎁", desc: "Customer engagement" },
    { title: "Table-Side Ordering", status: "Active", icon: "📱", desc: "Tableside experience" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const centralY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/10 rounded-full blur-3xl animate-pulse" />
      </div> */}

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-orange-200/50">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-orange-700">Full Stack Ecosystem</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            One{' '}
            <span className="text-primary">
              Complete System
            </span>
            <br />
            For All Your Units
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Everything works together — seamlessly, reliably, and beautifully.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
                duration: 0.5,
                type: "spring",
                stiffness: 250,
                damping: 20
              }}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 cursor-default overflow-hidden"
              style={{
                borderColor: hovered === index ? 'rgba(249, 115, 22, 0.4)' : 'rgba(0, 0, 0, 0.08)',
                boxShadow: hovered === index
                  ? '0 25px 40px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.1) inset'
                  : '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Animated gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Shine scan effect on hover */}
              {hovered === index && (
                <motion.div
                  initial={{ top: '-100%' }}
                  animate={{ top: '120%' }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none"
                />
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${item.status === 'Active'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                    }`} />
                  {item.status}
                </div>
              </div>

              {/* Icon */}
              <motion.div
                animate={hovered === index ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 12 }}
                className="text-5xl mb-4 relative z-10"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className={`font-extrabold text-gray-900 text-base mb-1.5 transition-colors duration-200 relative z-10 ${hovered === index ? 'text-orange-600' : ''
                }`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-xs font-medium leading-relaxed relative z-10">
                {item.desc}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/0 to-transparent group-hover:via-orange-400/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-orange-200/50 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-gray-900">8 modules.</span>
            </div>
            <span className="text-orange-400 font-black">✦</span>
            <span className="text-sm font-bold text-gray-900">1 platform.</span>
            <span className="text-orange-400 font-black">✦</span>
            <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Zero complications.
            </span>
          </div>
        </motion.div>

        {/* Feature highlight row (from image: Restaurant POS, Inventory, Food, Table, Website, HRM) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-orange-200/40"
        >
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center">
            {[
              "Restaurant POS & Billing",
              "Inventory Management",
              "Food Management",
              "Table Reservation",
              "Website & Online Ordering",
              "Restaurant HRM System"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;