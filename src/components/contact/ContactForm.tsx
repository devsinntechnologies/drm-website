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
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="w-full bg-white text-[#08162D] relative overflow-hidden border-t border-gray-200 flex items-center justify-center py-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 relative z-10 my-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-4"
          >
            <div>
              <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded-lg mb-2 border border-[#0055FF]/20">
                GET IN TOUCH
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#08162D] mb-2 tracking-tight">
                Connect with <span className="text-[#0055FF]">Experts</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-lg mb-4">
                Whether you're starting a new venture or scaling your enterprise operations,
                our specialists at DEVSINN and <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span> are here to guide you with tailored software solutions.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { t: "Headquarters", d: "Lahore, Pakistan", icon: <FiMapPin size={16} /> },
                { t: "Phone Support", d: <>021-111 <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span></>, icon: <FiPhone size={16} /> },
                { t: "Mail Us", d: "hello@diginizam.com", icon: <FiMail size={16} /> }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  className="flex gap-3 items-center group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center shrink-0 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-[#08162D] text-xs sm:text-sm">{item.t}</h4>
                    <p className="text-xs text-gray-600 font-medium">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div className="flex-1 w-full max-w-lg">

            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-lg relative overflow-hidden"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="space-y-3.5 relative z-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-lg px-3 py-2 text-xs font-semibold text-[#08162D] transition-all"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-lg px-3 py-2 text-xs font-semibold text-[#08162D] transition-all"
                    />
                  </motion.div>

                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">Subject</label>
                  <select
                    name="subject"
                    className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-lg px-3 py-2 text-xs font-semibold text-[#08162D] transition-all"
                  >
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    required
                    className="w-full bg-white border border-gray-200 focus:border-[#0055FF] focus:ring-1 focus:ring-[#0055FF] outline-none rounded-lg px-3 py-2 text-xs font-semibold text-[#08162D] transition-all resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FiSend size={14} />
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
