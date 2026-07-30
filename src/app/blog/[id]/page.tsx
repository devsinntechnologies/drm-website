import React from 'react';
import Link from 'next/link';

// Detailed mock data for individual blog posts
const posts = [
  {
    id: 0,
    title: 'How to increase your enterprise sales by 20% in 30 days',
    category: 'Marketing',
    date: 'Oct 24, 2023',
    image: '/blog/blog1.jpg',
    author: 'Sarah Rahman',
    role: 'CEO, DigiNizam Partner',
    time: '5 min read',
    content: `
      <h2>The New Age of Enterprise Operations</h2>
      <p>In today's fast-paced world, running a successful enterprise requires more than just standard management. It demands a holistic approach to customer experience, efficient digital workflows, and smart marketing. Increasing your sales by 20% in just a month sounds ambitious, but with the right DigiNizam strategies, it is entirely possible.</p>
      
      <h3>1. Leverage Automated Workflows</h3>
      <p>One of the easiest ways to boost revenue is by decreasing response time and manual errors. When teams use integrated software suites, operations are streamlined directly. This cuts down delays, reduces errors, and allows personnel to focus on high-value client interactions instead of routine admin tasks.</p>
      
      <blockquote>"Technology doesn't replace human expertise in business; it empowers it."</blockquote>
      
      <h3>2. Implement a Smart Loyalty Program</h3>
      <p>Acquiring a new customer is five times more expensive than retaining an existing one. By implementing a digitized loyalty program integrated directly into your platform, you can offer personalized incentives and keep clients coming back.</p>
      
      <h3>3. Optimize Your Service Profitability</h3>
      <p>Analyze your sales reports. Identify your highest margin offerings and feature them prominently on your physical and digital touchpoints to drive immediate growth.</p>
    `
  },
];

const fallbackPost = {
  id: 99,
  title: 'The future of enterprise technology: What to expect in 2026',
  category: 'Technology',
  date: 'Oct 15, 2023',
  image: '/blog/blog2.jpg',
  author: 'Ahmed Malik',
  role: 'Product Head',
  time: '8 min read',
  content: `
    <h2>Embracing the Digital Shift</h2>
    <p>The business industry is undergoing a massive transformation. From automated workflows to AI-driven resource management, technology is reshaping the way we operate and scale enterprises.</p>
    <h3>Cloud-Native Platforms</h3>
    <p>The days of bulky, on-premise servers are over. Cloud-native systems built with DigiNizam guarantee that your data is accessible anywhere, anytime, ensuring critical decision-making on the go.</p>
    <h3>Data is the New Oil</h3>
    <p>Leaders now have access to unprecedented amounts of data. Understanding metrics, peak operational hours, and efficiency trends enables a proactive management style.</p>
  `,
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id, 10);
  const post = posts.find(p => p.id === postId) || fallbackPost;

  return (
    <main className="min-h-screen bg-white text-[#08162D] py-8 md:py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-6 md:mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#0055FF] font-bold text-xs uppercase tracking-wider hover:text-[#0044cc] transition-colors mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl border border-[#0055FF]/20 shadow-sm">
              {post.category}
            </span>
            <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              {post.time}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08162D] leading-tight mb-4 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-3 border-y border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs bg-[#0055FF] shadow-md">
                {post.author[0]}
              </div>
              <div>
                <div className="text-xs font-black text-[#08162D]">{post.author}</div>
                <div className="text-[9px] uppercase font-bold text-gray-500 tracking-wider">DigiNizam Platform</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-bold text-[#08162D]">Published</div>
              <div className="text-[10px] uppercase font-bold text-gray-500">{post.date}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-lg border border-gray-200 bg-white p-1">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content */}
        <div className="blog-content max-w-3xl mx-auto">
          <style dangerouslySetInnerHTML={{
            __html: `
            .blog-content h2 { font-size: 1.5rem; line-height: 1.8rem; font-weight: 800; color: #08162D; margin-top: 2rem; margin-bottom: 1rem; letter-spacing: -0.025em; }
            .blog-content h3 { font-size: 1.15rem; line-height: 1.5rem; font-weight: 800; color: #0055FF; margin-top: 1.5rem; margin-bottom: 0.75rem; }
            .blog-content p { font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin-bottom: 1rem; font-weight: normal; }
            .blog-content blockquote { border-left: 3px solid #0055FF; background: rgba(0, 85, 255, 0.05); padding: 1rem 1.25rem; border-top-right-radius: 0.75rem; border-bottom-right-radius: 0.75rem; color: #08162D; font-weight: 700; font-style: normal; margin: 1.5rem 0; font-size: 1rem; }
          `}} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <span className="text-gray-500 font-bold text-xs">Share this insight:</span>
            {['Twitter', 'LinkedIn', 'Facebook'].map(net => (
              <button key={net} className="px-3 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-[#08162D] hover:text-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
                {net}
              </button>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}