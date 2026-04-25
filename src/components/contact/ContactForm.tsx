"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-12"
          >
            <div>
              <h3 className="text-3xl font-black text-foreground mb-6">Connect with <span className="text-primary">Experts</span></h3>
              <p className="text-lg text-muted font-bold leading-relaxed max-w-lg">
                Whether you're starting a new cafe or managing a global franchise, 
                our specialists are here to guide you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { t: "Headquarters", d: "123 Business Avenue, Tech City, Pakistan", i: "📍" },
                { t: "Phone Support", d: "+92 (300) 123-4567", i: "📞" },
                { t: "Mail Us", d: "hello@devsinn.com", i: "✉️" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 items-start group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-surface border border-surface-border flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-inner group-hover:scale-110">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="font-black text-foreground text-lg mb-1 group-hover:text-primary transition-colors">{item.t}</h4>
                    <p className="text-muted font-bold leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <motion.form 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-10 md:p-14 rounded-[48px] border border-surface-border/50 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <motion.div variants={itemVariants} className="space-y-3">
                    <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Your Name</label>
                    <input type="text" className="w-full bg-surface/50 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-muted/40 font-bold" placeholder="John Doe" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-3">
                    <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-surface/50 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-muted/40 font-bold" placeholder="john@example.com" />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full bg-surface/50 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all font-bold appearance-none cursor-pointer">
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-3">
                  <label className="text-sm font-black text-foreground/70 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={5} className="w-full bg-surface/50 border border-surface-border rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all placeholder:text-muted/40 font-bold" placeholder="Tell us about your restaurant..." />
                </motion.div>
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl glow-primary transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
