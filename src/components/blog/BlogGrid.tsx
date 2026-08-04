"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  {
    title: 'How to increase your enterprise sales by 20% in 30 days',
    category: 'Marketing',
    date: 'Jul 24, 2026',
    image: '/blog/blog1.jpg',
    author: 'Sarah Rahman',
    role: 'CEO, DigiNizam Partner',
    time: '5 min read'
  },
  {
    title: 'The future of enterprise technology: What to expect in 2026',
    category: 'Technology',
    date: 'Jul 15, 2026',
    image: '/blog/blog2.jpg',
    author: 'Ahmed Malik',
    role: 'Product Head',
    time: '8 min read'
  },
  {
    title: '10 best practices for digital inventory and asset management',
    category: 'Inventory',
    date: 'Jun 08, 2026',
    image: '/blog/blog3.jpg',
    author: 'Zeba Khan',
    role: 'Operations Expert',
    time: '4 min read'
  },
  {
    title: 'The impact of cloud platforms on modern business scale',
    category: 'Technology',
    date: 'May 28, 2026',
    image: '/blog/blog4.jpg',
    author: 'John Doe',
    role: 'Solution Architect',
    time: '7 min read'
  },
  {
    title: 'Why automated workflow solutions are a game changer',
    category: 'User Experience',
    date: 'May 15, 2026',
    image: '/blog/blog5.jpg',
    author: 'Ayesha Sid',
    role: 'Service Manager',
    time: '6 min read'
  },
  {
    title: 'Digital loyalty programs: Building repeat corporate customers',
    category: 'Marketing',
    date: 'May 05, 2026',
    image: '/blog/blog6.jpg',
    author: 'Omar Farooq',
    role: 'Growth Hacker',
    time: '10 min read'
  }
];

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className="py-3 md:py-4 bg-surface text-foreground relative overflow-hidden border-b border-surface-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((post, idx) => (
              <motion.div
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link href={`/blog/${idx}`} className="bg-surface rounded-2xl overflow-hidden group h-full flex flex-col border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all">
                  {/* Image Section */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-surface/90 border border-primary/20 px-2.5 py-1 rounded-xl backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="text-[10px] font-black text-muted uppercase tracking-wider flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {post.date}
                      </div>
                      <div className="text-[10px] font-black text-muted uppercase tracking-wider flex items-center gap-1.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.time}
                      </div>
                    </div>

                    <h3 className="text-sm md:text-base font-black text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Meta Section */}
                    <div className="mt-auto pt-3 border-t border-surface-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-xs border border-primary/20">
                          {post.author[0]}
                        </div>
                        <div>
                          <div className="text-xs font-black text-foreground">{post.author}</div>
                          <div className="text-[9px] uppercase font-bold text-muted tracking-tighter"><span className="text-black font-black">Digi</span><span className="text-primary font-black">Nizam</span> Platform</div>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-surface group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;