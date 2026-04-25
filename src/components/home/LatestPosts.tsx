"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "The Future of Restaurant Ordering with QR Codes",
    date: "Oct 24, 2025",
    category: "Technology",
    image: "/home/our_blog/qr_ordering.png",
    readTime: "5 min read",
    accent: 'primary',
  },
  {
    title: "DRM Integration with PRA: A Complete Guide",
    date: "Sep 15, 2025",
    category: "Compliance",
    image: "/home/our_blog/pos_integration.png",
    readTime: "8 min read",
    accent: 'secondary',
  },
  {
    title: "Features to Look For Restaurant DRM E-Commerce System",
    date: "Aug 02, 2025",
    category: "E-Commerce",
    image: "/home/our_blog/ecommerce.png",
    readTime: "6 min read",
    accent: 'primary',
  }
];

function PostCard({ post, idx }: { post: typeof posts[0]; idx: number }) {
  const isPrimary = post.accent === 'primary';
  const accentVar = isPrimary ? 'var(--primary)' : 'var(--secondary)';
  const accentRgb = isPrimary ? 'var(--primary-rgb)' : 'var(--secondary-rgb)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card rounded-[40px] border-gradient relative overflow-hidden group cursor-pointer flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 bg-surface/40 backdrop-blur-2xl"
      style={{ perspective: '800px' }}
    >
      {/* Glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accentVar} 5%, transparent), transparent)` }}
      />

      {/* Corner accent bracket top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.15 + 0.3 }}
        className="absolute top-5 right-5 w-5 h-5 border-t-2 border-r-2 rounded-sm pointer-events-none z-20"
        style={{ borderColor: `color-mix(in srgb, ${accentVar} 60%, transparent)` }}
      />

      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] m-2 rounded-[32px] border border-surface-border/20 z-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Category + read time */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="tag-pill backdrop-blur-md" style={{ background: `color-mix(in srgb, ${accentVar} 20%, transparent)`, color: accentVar, borderColor: `color-mix(in srgb, ${accentVar} 30%, transparent)` }}>
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-[10px] font-bold glass-card px-3 py-1 rounded-full text-muted uppercase tracking-widest">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col relative z-10">
        <span className="text-xs mb-3 font-black tracking-widest uppercase" style={{ color: accentVar }}>{post.date}</span>
        <h4 className="text-xl font-extrabold text-foreground mb-6 group-hover:text-primary transition-colors leading-tight flex-1">
          {post.title}
        </h4>
        <div className="mt-auto pt-5 border-t border-surface-border/40">
          <motion.span
            className="text-sm font-black flex items-center gap-2 uppercase tracking-wider"
            style={{ color: accentVar }}
            whileHover={{ x: 4 }}
          >
            Read Article
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

const LatestPosts = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Noise */}
      <div className="noise-overlay opacity-5" />

      {/* Aurora top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] aurora-bg opacity-15 pointer-events-none" />

      {/* Glow line top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Our Blog</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Latest <span className="text-primary">Insights</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden sm:block"
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 glass-card rounded-xl text-foreground text-sm font-semibold hover:border-primary/50 transition-all hover:text-primary"
              >
                View All Posts →
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <PostCard key={idx} post={post} idx={idx} />
          ))}
        </div>

        <Link href="/blog" className="block sm:hidden">
          <button className="w-full mt-8 px-6 py-4 glass-card rounded-xl text-foreground font-semibold hover:border-primary/50 transition-all">
            View All Posts →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
