import React from 'react';

const LatestPosts = () => {
  const posts = [
    {
      title: "The Future of Restaurant Ordering with QR Codes",
      date: "Oct 24, 2025"
    },
    {
      title: "DRM Integration with PRA: A Complete Guide",
      date: "Sep 15, 2025"
    },
    {
      title: "Features to Look For Restaurant DRM E-Commerce System",
      date: "Aug 02, 2025"
    }
  ];

  return (
    <section className="py-24 bg-surface/10">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Our Blog</h2>
            <h3 className="text-3xl font-bold text-foreground">Our Latest Post</h3>
          </div>
          <button className="hidden sm:block px-6 py-3 border border-surface-border rounded-lg text-foreground hover:bg-surface-border transition-colors">
            View All Posts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer flex flex-col">
              <div className="h-48 bg-surface-border/50 relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs text-primary mb-2 font-mono">{post.date}</span>
                <h4 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{post.title}</h4>
                <div className="mt-auto">
                  <span className="text-secondary text-sm font-semibold flex items-center">
                    Read more 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full sm:hidden mt-8 px-6 py-4 border border-surface-border rounded-lg text-foreground hover:bg-surface-border transition-colors">
            View All Posts
        </button>

      </div>
    </section>
  );
};

export default LatestPosts;
