"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionShell from "@/components/common/SectionShell";
import SiteCTA from "@/components/common/SiteCTA";
import {
  formatBlogDate,
  getActiveCategories,
  getAllPosts,
} from "@/lib/blog";

const posts = getAllPosts();
const categories = getActiveCategories();

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | string>("All");

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? posts
        : posts.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <>
      <SectionShell tone="surface">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-surface-border hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-surface-border bg-background overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-surface/95 text-primary px-2.5 py-1 rounded-lg border border-primary/20">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <time dateTime={post.publishedAt}>
                      {formatBlogDate(post.publishedAt)}
                    </time>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="type-card-title text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-surface-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                        {post.author[0]}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SiteCTA
        title="Want POS tips tailored to your business?"
        description="Book a free demo and see how DigiNizam fits your workflow."
      />
    </>
  );
}
