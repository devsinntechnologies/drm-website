"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialClass =
  "w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-muted hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all shadow-sm";

const linkClass = "hover:text-primary transition-colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-foreground pt-10 pb-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(92%,72rem)] h-px bg-gradient-to-r from-transparent via-surface-border/70 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 relative z-10">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <Logo className="h-9 w-auto" />
          </Link>
          <p className="text-sm text-muted leading-relaxed mb-5 max-w-sm">
            DigiNizam helps businesses run retail, inventory, and operations with one connected platform—so you can focus on growth.
          </p>
          <div className="flex items-center space-x-2.5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Facebook">
              <FaFacebookF size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Instagram">
              <FaInstagram size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Twitter">
              <FaTwitter size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn">
              <FaLinkedinIn size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="YouTube">
              <FaYoutube size={15} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-muted font-medium">
            <li>
              <Link href="/products/restaurant" className={linkClass}>
                Restaurant management software
              </Link>
            </li>
            <li>
              <Link href="/features" className={linkClass}>
                Restaurant inventory software
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={linkClass}>
                POS software pricing
              </Link>
            </li>
            <li>
              <Link href="/demo" className={linkClass}>
                Book a demo
              </Link>
            </li>
            <li>
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
          <ul className="space-y-2.5 text-sm text-muted font-medium">
            <li>
              <Link href="/services/software-solution" className={linkClass}>
                Software Solution
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" className={linkClass}>
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing" className={linkClass}>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/services/system-support" className={linkClass}>
                System Support
              </Link>
            </li>
            <li>
              <Link href="/services/training" className={linkClass}>
                Training
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 mt-8 text-sm text-muted font-medium relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[72rem] h-px bg-gradient-to-r from-transparent via-surface-border/60 to-transparent" />
        <div>&copy; {currentYear} DigiNizam. All rights reserved.</div>
      </div>
    </footer>
  );
}
