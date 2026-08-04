"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const techPartners = ["ChatSupplies", "Zeefood Gallery", "Devsinn Technologies"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface text-foreground pt-10 pb-6 border-t border-surface-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 relative z-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-1 mb-4">
            <div className="relative w-11 h-11">
              <Image src="/logo.png" alt="DigiNizam Logo" fill className="object-contain" priority />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">Digi</span>
              <span className="text-primary">Nizam</span>
            </span>
          </div>
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
                Restaurant Solution
              </Link>
            </li>
            <li>
              <Link href="/products/complaint" className={linkClass}>
                CRM Field Force
              </Link>
            </li>
            <li>
              <Link href="/services/hr-digitalization" className={linkClass}>
                HR Digitalization
              </Link>
            </li>
            <li>
              <Link href="/demo" className={linkClass}>
                Get a Free Demo
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={linkClass}>
                Pricing
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

        <div>
          <h3 className="text-foreground text-sm font-semibold uppercase tracking-wider mb-4">Technology Partners</h3>
          <div className="space-y-2">
            {techPartners.map((name) => (
              <div
                key={name}
                className="bg-primary/10 hover:bg-primary/15 border border-primary/20 transition-all p-2.5 rounded-xl text-center text-xs font-semibold text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-surface-border pt-6 text-sm text-muted font-medium relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {currentYear} DigiNizam. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground">Powered by Devsinn</span>
          <Image src="/devsinnlogo0.svg" alt="Devsinn Logo" width={90} height={30} className="object-contain" priority />
        </div>
      </div>
    </footer>
  );
}
