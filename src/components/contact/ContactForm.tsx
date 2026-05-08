"use client";
import React from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a9bjgoa",
        "template_2m58y9m",
        form.current!,
        "EEOfnkaZIXRveWeQP"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
          setLoading(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-tr from-red-300 via-orange-200 to-orange-200 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 md:mb-6">
                Connect with <span className="text-primary">Experts</span>
              </h3>

              <p className="text-base sm:text-lg text-muted font-bold leading-relaxed max-w-lg">
                Whether you're starting a new cafe or managing a global franchise, 
                our specialists are here to guide you.
              </p>
            </div>

            <div className="space-y-6">
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
                  className="flex gap-4 items-start"
                >
                  <div className="w-14 h-14 flex items-center justify-center text-2xl">
                    {item.i}
                  </div>
                  <div>
                    <h4 className="font-black">{item.t}</h4>
                    <p className="text-muted">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div className="flex-1">

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-[48px] border border-black/50 shadow-2xl relative overflow-hidden"
              ref={form}
              onSubmit={sendEmail}
            >

              <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="space-y-5 md:space-y-6 relative z-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      className="w-full bg-surface/50 border border-black/40 rounded-2xl px-6 py-4 font-bold"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      className="w-full bg-surface/50 border border-black/40 rounded-2xl px-6 py-4 font-bold"
                    />
                  </motion.div>

                </div>

                <motion.div variants={itemVariants}>
                  <select
                    name="subject"   
                    className="w-full bg-surface/50 border border-black/40 rounded-2xl px-6 py-4 font-bold"
                  >
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your restaurant..."
                    className="w-full bg-surface/50 border border-black/40 rounded-2xl px-6 py-4 font-bold"
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-primary text-white font-black text-lg rounded-2xl shadow-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
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