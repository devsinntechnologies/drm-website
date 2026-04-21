"use client";
import React from 'react';
import { motion } from 'framer-motion';

const options = [
  {
    title: 'Knowledge Base',
    desc: 'Self-service portal with detailed guides, how-to articles, and technical documentation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    link: '#',
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
  },
  {
    title: '24/7 Live Chat',
    desc: 'Connect with our technical support team instantly for real-time troubleshooting.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    link: '#',
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
  },
  {
    title: 'Video Tutorials',
    desc: 'Watch step-by-step video guides to master the DRM platform in minutes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    link: '#',
    color: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
  }
];

const SupportOptions = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[40px] border border-surface-border/50 group flex flex-col h-full bg-surface/30 backdrop-blur-xl shadow-xl hover:border-primary/30 transition-all"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-3xl ${option.color} border flex items-center justify-center mb-8 shadow-inner`}
              >
                {option.icon}
              </motion.div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">{option.title}</h3>
              <p className="text-muted leading-relaxed font-bold mb-10 flex-1">{option.desc}</p>
              <motion.a 
                href={option.link} 
                whileHover={{ x: 5 }}
                className="text-primary font-bold flex items-center gap-2 group/btn"
              >
                Explore More
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
