"use client";

import React from 'react';

const DemoForm = () => {
  return (
    <section className="py-20 bg-background relative" id="demo-form">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to take it to the <span className="text-primary italic">next level?</span>
          </h2>
          <p className="text-muted text-lg tracking-wide uppercase font-semibold">Signup for a Demo</p>
        </div>

        <div className="glass-card p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden bg-surface/50 border border-surface-border">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[60px] rounded-full" />

          <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all placeholder:opacity-30"
                />
              </div>

              {/* E-mail */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">E-mail</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all placeholder:opacity-30"
                />
              </div>

              {/* Business Name */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">Business Name</label>
                <input 
                  type="text" 
                  placeholder="My Restaurant"
                  className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all placeholder:opacity-30"
                />
              </div>

              {/* Contact */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">Contact</label>
                <input 
                  type="tel" 
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all placeholder:opacity-30"
                />
              </div>

              {/* Business Type */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">Business Type</label>
                <select className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-surface">Select Type</option>
                  <option className="bg-surface">Restaurant</option>
                  <option className="bg-surface">Cafe / Coffee Shop</option>
                  <option className="bg-surface">Retail Store</option>
                  <option className="bg-surface">Grocery Shop</option>
                  <option className="bg-surface">Fast Food</option>
                </select>
              </div>

              {/* City */}
              <div className="group">
                <label className="block text-sm font-bold text-muted mb-2 group-focus-within:text-primary transition-colors">City</label>
                <input 
                  type="text" 
                  placeholder="Lahore, Pakistan"
                  className="w-full bg-transparent border-b-2 border-surface-border focus:border-primary py-3 outline-none transition-all placeholder:opacity-30"
                />
              </div>
            </div>

            <div className="pt-8 flex justify-center">
              <button className="px-16 py-4 bg-primary text-primary-foreground font-extrabold rounded-xl shadow-[0_8px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all duration-300">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted mb-4">Call <span className="text-foreground font-bold">042-35972044</span> now to discuss your unique business needs.</p>
          <p className="text-sm text-muted/60 max-w-xl mx-auto italic">
            You'll get to speak to an experienced ERP consultant, with actual experience of tailoring restaurant & retail solutions to real-world businesses. They may even be able to offer you advice over the phone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
