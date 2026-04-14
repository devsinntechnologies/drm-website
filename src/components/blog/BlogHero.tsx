import React from 'react';

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 bg-surface/30 text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Latest <span className="text-accent">Insights</span> & News</h1>
      <p className="text-xl text-muted max-w-2xl mx-auto">
        Stay updated with the latest trends in the DRM industry, restaurant management tips, and retail strategies.
      </p>
    </section>
  );
};

export default BlogHero;
