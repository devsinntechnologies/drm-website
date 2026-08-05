"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiSend, FiClock, FiMessageCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { Input, Textarea, Select, Label, FieldError, FieldSuccess } from "@/components/ui/Field";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import { PHONE_DISPLAY, PHONE_TEL, PHONE_WHATSAPP } from "@/lib/contact";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
  { day: "Saturday", time: "10:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const contactChannels = [
  {
    icon: FiMapPin,
    title: "Office",
    value: "Lahore, Pakistan",
    href: undefined,
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
  },
  {
    icon: FiMail,
    title: "Email",
    value: "hello@diginizam.com",
    href: "mailto:hello@diginizam.com",
  },
  {
    icon: FiMessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${PHONE_WHATSAPP}?text=Hi%20DigiNizam%2C%20I%20have%20a%20question`,
  },
];

export default function ContactForm() {
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
    <SectionShell tone="background" glow>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <SectionHeader
            label="Get in touch"
            title="Speak with our team"
            description="Tell us about your business—we'll recommend the right POS or ERP setup and answer implementation questions."
            className="mb-0"
          />

          <div className="space-y-3">
            {contactChannels.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex gap-3 items-center p-3 rounded-xl border border-surface-border bg-surface hover:border-primary/30 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.title}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {inner}
                </a>
              ) : (
                <div key={item.title}>{inner}</div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-surface-border bg-surface p-5">
            <div className="flex items-center gap-2 mb-4">
              <FiClock className="w-4 h-4 text-primary" />
              <h3 className="type-card-title text-foreground">Business hours</h3>
            </div>
            <ul className="space-y-2">
              {hours.map((row) => (
                <li key={row.day} className="flex items-center justify-between text-sm">
                  <span className="text-muted">{row.day}</span>
                  <span className={`font-medium ${row.time === "Closed" ? "text-muted" : "text-foreground"}`}>
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted">
            Prefer a walkthrough?{" "}
            <Link href="/demo" className="text-primary font-semibold hover:underline">
              Book a free demo
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form ref={form} onSubmit={sendEmail} className="surface-card p-6 sm:p-8" noValidate>
            <h3 className="type-card-title text-foreground mb-1">Send a message</h3>
            <p className="type-body text-muted mb-6">Fill in the form and we&apos;ll get back to you shortly.</p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="user_name">Full name</Label>
                  <Input id="user_name" type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="user_email">Work email</Label>
                  <Input id="user_email" type="email" name="user_email" placeholder="you@company.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="user_phone">Phone</Label>
                  <Input id="user_phone" type="tel" name="user_phone" placeholder={PHONE_DISPLAY} />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Select id="subject" name="subject" defaultValue="Product inquiry">
                    <option>Product inquiry</option>
                    <option>Free demo request</option>
                    <option>Technical support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business, outlets, and what you need from DigiNizam..."
                  required
                />
              </div>

              {status === "success" && (
                <FieldSuccess>Thank you — your message was sent. We&apos;ll reply within two business hours.</FieldSuccess>
              )}
              {status === "error" && <FieldError>{errorMsg}</FieldError>}

              <Button type="submit" variant="primary" fullWidth disabled={loading} size="lg">
                <FiSend size={16} />
                {loading ? "Sending..." : "Send message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionShell>
  );
}
