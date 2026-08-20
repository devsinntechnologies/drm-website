import type { BlogCategory, BlogPost, ContentBlock } from "./types";
import { blog1 } from "./posts/what-is-a-restaurant-pos-system";
import { blog2 } from "./posts/restaurant-inventory-management-reduce-food-waste";

/** Published posts only. Add new approved posts here. */
export const blogPosts: BlogPost[] = [blog1, blog2];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/** Categories that have at least one published post, plus All. */
export function getActiveCategories(): Array<"All" | BlogCategory> {
  const present = new Set(blogPosts.map((post) => post.category));
  const ordered: BlogCategory[] = ["Restaurant POS", "Inventory"];
  return ["All", ...ordered.filter((category) => present.has(category))];
}

export function formatBlogDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Karachi",
  }).format(new Date(iso));
}

function blockPlainText(block: ContentBlock): string {
  switch (block.type) {
    case "paragraphs":
      return block.paragraphs.join(" ");
    case "heading":
      return block.text;
    case "callout":
      return `${block.title} ${block.text}`;
    case "ordered-list":
      return [block.intro, ...block.items, block.outro].filter(Boolean).join(" ");
    case "faq-section":
      return [
        block.heading,
        ...block.items.flatMap((item) => [item.question, item.answer]),
      ].join(" ");
    case "cta":
      return `${block.title} ${block.body}`;
    default:
      return "";
  }
}

export function estimateReadTime(content: ContentBlock[]): string {
  const words = content
    .map(blockPlainText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function blogPostingJsonLd(post: BlogPost, siteUrl: string) {
  const url = `${siteUrl}${post.canonicalPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [`${siteUrl}${post.featuredImage}`],
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DigiNizam",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/diginizam-logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function blogBreadcrumbJsonLd(post: BlogPost, siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}${post.canonicalPath}`,
      },
    ],
  };
}

export type { BlogPost, BlogCategory, ContentBlock };
