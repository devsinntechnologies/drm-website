"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select, Label, FieldError, FieldSuccess } from "@/components/ui/Field";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    emailjs
      .sendForm("service_a9bjgoa", "template_2m58y9m", form.current!, "EEOfnkaZIXRveWeQP")
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setErrorMsg("Failed to send message. Please try again or email hello@diginizam.com.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full bg-background text-foreground relative overflow-hidden border-t border-surface-border flex items-center justify-center py-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex-1 space-y-5"
          >
            <div>
              <span className="section-label">Get in touch</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Connect with <span className="text-primary">experts</span>
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg">
                Starting fresh or scaling operations? DigiNizam specialists will help you find the right software fit.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { t: "Headquarters", d: "Lahore, Pakistan", icon: <FiMapPin size={16} /> },
                { t: "Phone", d: "021-111 DigiNizam", icon: <FiPhone size={16} /> },
                { t: "Email", d: "hello@diginizam.com", icon: <FiMail size={16} /> },
              ].map((item) => (
                <div key={item.t} className="flex gap-3 items-center group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.t}</h3>
                    <p className="text-sm text-muted">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-lg"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="surface-card p-5 sm:p-6 relative overflow-hidden"
              noValidate
            >
              <div className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="user_name">Name</Label>
                    <Input id="user_name" type="text" name="user_name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="user_email">Email</Label>
                    <Input
                      id="user_email"
                      type="email"
                      name="user_email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select id="subject" name="subject" defaultValue="Product Inquiry">
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>

                {status === "success" && (
                  <FieldSuccess>Message sent successfully. We will get back to you shortly.</FieldSuccess>
                )}
                {status === "error" && <FieldError>{errorMsg}</FieldError>}

                <Button type="submit" variant="primary" fullWidth disabled={loading}>
                  <FiSend size={14} />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
