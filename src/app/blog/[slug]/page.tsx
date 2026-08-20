import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from "@/components/blog/BlogContent";
import JsonLd from "@/components/seo/JsonLd";
import {
  blogBreadcrumbJsonLd,
  blogPostingJsonLd,
  formatBlogDate,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Blog | DigiNizam", robots: { index: false, follow: false } };
  }

  const url = `${SITE_URL}${post.canonicalPath}`;
  const imageUrl = `${SITE_URL}${post.featuredImage}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: post.canonicalPath },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url,
      type: "article",
      siteName: "DigiNizam",
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      images: [{ url: imageUrl, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-surface text-foreground py-4 md:py-6 relative overflow-hidden">
      <JsonLd data={blogPostingJsonLd(post, SITE_URL)} />
      <JsonLd data={blogBreadcrumbJsonLd(post, SITE_URL)} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" />

      <article className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 text-xs font-semibold text-muted flex flex-wrap items-center gap-1.5"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span aria-hidden>/</span>
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <div className="mb-4 md:mb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider hover:text-[var(--primary-hover)] transition-colors mb-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all posts
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl border border-primary/20 shadow-sm">
              {post.category}
            </span>
            <span className="text-xs font-bold text-muted flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-base sm:text-lg md:text-xl font-black text-foreground leading-tight mb-4 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-3 border-y border-surface-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs bg-primary shadow-md">
                {post.author[0]}
              </div>
              <div>
                <div className="text-xs font-black text-foreground">
                  {post.author}
                </div>
                <div className="text-[9px] uppercase font-bold text-muted tracking-wider">
                  <span className="text-black font-black">Digi</span>
                  <span className="text-primary font-black">Nizam</span> Platform
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold text-foreground">
                Published
              </div>
              <time
                className="text-[10px] uppercase font-bold text-muted"
                dateTime={post.publishedAt}
              >
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-4 md:mb-4 shadow-lg border border-surface-border bg-surface p-1">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>

        <BlogContent blocks={post.content} />
      </article>
    </main>
  );
}
