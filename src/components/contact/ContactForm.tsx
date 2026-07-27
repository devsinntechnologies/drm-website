"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";

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
    <section className="py-12 md:py-16 lg:py-20 bg-white text-[#08162D] relative overflow-hidden border-t border-gray-200">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0055FF]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 md:space-y-8"
          >
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
                GET IN TOUCH
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mb-4 md:mb-6 tracking-tight">
                Connect with <span className="text-[#0055FF]">Experts</span>
              </h3>

              <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed max-w-lg">
                Whether you're starting a new venture or scaling your enterprise operations,
                our specialists are here to guide you with tailored software solutions.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { t: "Headquarters", d: "Lahore, Pakistan", icon: <FiMapPin size={22} /> },
                { t: "Phone Support", d: "021-111 N&S", icon: <FiPhone size={22} /> },
                { t: "Mail Us", d: "hello@nandstech.com", icon: <FiMail size={22} /> }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="flex gap-4 items-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center shrink-0 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[#08162D] text-sm sm:text-base">{item.t}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div className="flex-1 w-full">

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="space-y-5 md:space-y-6 relative z-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-xl px-5 py-3.5 text-sm font-semibold text-[#08162D] transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-xl px-5 py-3.5 text-sm font-semibold text-[#08162D] transition-all"
                    />
                  </motion.div>

                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-xl px-5 py-3.5 text-sm font-semibold text-[#08162D] transition-all"
                  >
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-xl px-5 py-3.5 text-sm font-semibold text-[#08162D] transition-all resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FiSend size={16} />
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