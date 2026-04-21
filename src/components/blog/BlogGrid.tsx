"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  {
    title: 'How to increase your restaurant sales by 20% in 30 days',
    category: 'Marketing',
    date: 'Oct 24, 2023',
    image: '/blog/blog1.jpg',
    author: 'Sarah Rahman',
    role: 'CEO, Cafe owner',
    time: '5 min read'
  },
  {
    title: 'The future of restaurant technology: What to expect in 2024',
    category: 'Technology',
    date: 'Oct 15, 2023',
    image: '/blog/blog2.jpg',
    author: 'Ahmed Malik',
    role: 'Product Head',
    time: '8 min read'
  },
  {
    title: '10 best practices for food inventory management',
    category: 'Inventory',
    date: 'Oct 08, 2023',
    image: '/blog/blog3.jpg',
    author: 'Zeba Khan',
    role: 'Operations Expert',
    time: '4 min read'
  },
  {
    title: 'The impact of cloud POS on fast food business scale',
    category: 'Technology',
    date: 'Sep 28, 2023',
    image: '/blog/blog4.jpg',
    author: 'John Doe',
    role: 'Solution Architect',
    time: '7 min read'
  },
  {
    title: 'Why table-side ordering is a game changer for diners',
    category: 'User Experience',
    date: 'Sep 15, 2023',
    image: '/blog/blog5.jpg',
    author: 'Ayesha Sid',
    role: 'Service Manager',
    time: '6 min read'
  },
  {
    title: 'Digital loyalty programs: Building repeat customers',
    category: 'Marketing',
    date: 'Sep 05, 2023',
    image: '/blog/blog6.jpg',
    author: 'Omar Farooq',
    role: 'Growth Hacker',
    time: '10 min read'
  }
];

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((post, idx) => (
              <motion.div 
                key={post.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link href={`/blog/${idx}`} className="glass-card card-hover rounded-[40px] overflow-hidden group h-full flex flex-col border border-surface-border/50">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-6 left-6">
                      <span className="tag-pill bg-primary/20 text-primary border-primary/30 backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-xs font-black text-muted uppercase tracking-widest flex items-center gap-2">
                         <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                         </svg>
                         {post.date}
                      </div>
                      <div className="text-xs font-black text-muted uppercase tracking-widest flex items-center gap-2">
                         <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         {post.time}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-foreground mb-10 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>

                    {/* Meta Section */}
                    <div className="mt-auto pt-6 border-t border-surface-border/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-sm border border-primary/20">
                          {post.author[0]}
                        </div>
                        <div>
                          <div className="text-sm font-black text-foreground">{post.author}</div>
                          <div className="text-[10px] uppercase font-bold text-muted tracking-tighter">{post.role}</div>
                        </div>
                      </div>
                      <div className="p-2 rounded-full bg-surface group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
