import React from 'react';

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-surface/30 text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Let's <span className="text-primary">Connect</span></h1>
      <p className="text-xl text-muted max-w-2xl mx-auto">
        We would love to hear from you. Reach out to discuss how DRM can transform your business.
      </p>
    </section>
  );
};

export default ContactHero;
