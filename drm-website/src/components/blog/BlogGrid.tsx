import React from 'react';

const BlogGrid = () => {
  const posts = [
    {
      title: "The Future of Restaurant Ordering with QR Codes",
      date: "Oct 24, 2025",
      category: "Technology",
      desc: "Discover how QR code ordering is changing the dynamics of the restaurant industry."
    },
    {
      title: "DRM Integration with Revenue Authorities",
      date: "Sep 15, 2025",
      category: "Compliance",
      desc: "A complete guide to integrating your DRM with tax and revenue boards smoothly."
    },
    {
      title: "Top 10 Features to Look For in a Retail DRM",
      date: "Aug 02, 2025",
      category: "Retail",
      desc: "Not all DRM systems are created equal. Make sure yours has these 10 core features."
    },
    {
      title: "How to Boost Customer Loyalty",
      date: "Jul 18, 2025",
      category: "Marketing",
      desc: "Proven strategies and reward programs that keep your customers coming back."
    },
    {
      title: "Managing Multiple Franchises efficiently",
      date: "Jun 05, 2025",
      category: "Management",
      desc: "Scaling your business is hard. Here is how a cloud DRM makes franchise tracking easy."
    },
    {
      title: "The Ultimate Guide to Kitchen Display Systems",
      date: "May 22, 2025",
      category: "Efficiency",
      desc: "Eliminate paper trail and empower your chefs with an automated digital system."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer flex flex-col">
              <div className="h-48 bg-surface-border/50 relative overflow-hidden flex items-center justify-center">
                <svg className="w-16 h-16 text-muted opacity-30 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold px-2 py-1 bg-surface-border rounded-md text-foreground">{post.category}</span>
                  <span className="text-xs text-primary font-mono">{post.date}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-muted text-sm mb-6">{post.desc}</p>
                <div className="mt-auto">
                  <span className="text-secondary text-sm font-semibold flex items-center">
                    Read Article 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
