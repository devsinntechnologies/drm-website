import React from 'react';
import Link from 'next/link';

// Detailed mock data for individual blog posts
const posts = [
  {
    id: 0,
    title: 'How to increase your restaurant sales by 20% in 30 days',
    category: 'Marketing',
    date: 'Oct 24, 2023',
    image: '/blog/blog1.jpg',
    author: 'Sarah Rahman',
    role: 'CEO, Cafe owner',
    time: '5 min read',
    content: `
      <h2>The New Age of Dining</h2>
      <p>In today's fast-paced world, running a successful restaurant requires more than just great food. It demands a holistic approach to customer experience, efficient operations, and smart marketing. Increasing your sales by 20% in just a month sounds ambitious, but with the right strategies, it is entirely possible.</p>
      
      <h3>1. Leverage Table-Side Ordering</h3>
      <p>One of the easiest ways to boost revenue is by decreasing table turnover time. When waitstaff use handheld devices, orders are sent directly to the kitchen display system (KDS). This cuts down wait times, reduces errors, and allows servers to focus on upselling instead of running back and forth to a terminal.</p>
      
      <blockquote>"Technology doesn't replace the human touch in hospitality; it empowers it."</blockquote>
      
      <h3>2. Implement a Smart Loyalty Program</h3>
      <p>Acquiring a new customer is five times more expensive than retaining an existing one. By implementing a digitized loyalty program integrated directly into your POS, you can offer personalized discounts and keep diners coming back. A simple 'Buy 9 get 1 Free' digital punch card can increase visit frequency by up to 35%.</p>
      
      <h3>3. Optimize Your Menu Profitability</h3>
      <p>Analyze your sales reports. Identify your highest margin items and feature them prominently on your physical and digital menus. Consider bundle deals or limited-time offers to drive urgency.</p>
    `
  },
  // Add fallback for others
];

const fallbackPost = {
  id: 99,
  title: 'The future of restaurant technology: What to expect in 2024',
  category: 'Technology',
  date: 'Oct 15, 2023',
  image: '/blog/blog2.jpg',
  author: 'Ahmed Malik',
  role: 'Product Head',
  time: '8 min read',
  content: `
    <h2>Embracing the Digital Shift</h2>
    <p>The restaurant industry is undergoing a massive transformation. From automated kitchens to AI-driven inventory management, technology is reshaping the way we cook, serve, and manage food businesses.</p>
    <h3>Cloud-Native POS Systems</h3>
    <p>The days of bulky, on-premise servers are over. Cloud-native Point of Sale systems guarantee that your data is accessible anywhere, anytime, ensuring that you can make critical business decisions on the go.</p>
    <h3>Data is the New Oil</h3>
    <p>Restaurant owners now have access to unprecedented amounts of data. Understanding customer preferences, peak hours, and stock depletion rates enables a proactive rather than reactive management style.</p>
  `,
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = posts.find(p => p.id === postId) || fallbackPost;

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      {/* Article Header */}
      <article className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="tag-pill bg-primary/20 text-primary border-primary/30">
              {post.category}
            </span>
            <span className="text-sm font-bold text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-border" />
              {post.time}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.15] mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-surface-border/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-lg bg-gradient-to-br from-primary to-secondary shadow-lg">
                {post.author[0]}
              </div>
              <div>
                <div className="text-base font-black text-foreground">{post.author}</div>
                <div className="text-xs uppercase font-bold text-muted tracking-widest">{post.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-foreground">Published</div>
              <div className="text-xs uppercase font-bold text-muted">{post.date}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl glass-card p-2 group">
           <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
           <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
           </div>
        </div>

        {/* Content */}
        <div className="blog-content mt-16 max-w-3xl mx-auto">
          <style dangerouslySetInnerHTML={{__html: `
            .blog-content h2 { font-size: 2.25rem; line-height: 2.5rem; font-weight: 800; color: var(--foreground); margin-top: 3rem; margin-bottom: 1.5rem; letter-spacing: -0.025em; }
            .blog-content h3 { font-size: 1.5rem; line-height: 2rem; font-weight: 800; color: color-mix(in srgb, var(--primary) 90%, white); margin-top: 2.5rem; margin-bottom: 1rem; }
            .blog-content p { font-size: 1.125rem; line-height: 1.75rem; color: var(--muted); margin-bottom: 1.5rem; font-weight: 500; }
            .blog-content blockquote { border-left: 4px solid var(--primary); background: color-mix(in srgb, var(--primary) 10%, transparent); padding: 1.5rem 2rem; border-top-right-radius: 1rem; border-bottom-right-radius: 1rem; color: white; font-weight: 700; font-style: normal; margin: 2.5rem 0; font-size: 1.25rem; }
          `}} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer actions */}
        <div className="mt-20 pt-10 border-t border-surface-border/50 flex items-center justify-between">
          <div className="flex gap-4">
            <span className="text-muted font-bold self-center">Share:</span>
            {['Twitter', 'LinkedIn', 'Facebook'].map(net => (
               <button key={net} className="px-4 py-2 rounded-xl glass-card text-sm font-bold hover:text-primary hover:border-primary/50 transition-all">
                 {net}
               </button>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
