"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card bg-surface/80 border-b border-surface-border py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 cursor-pointer z-50">
          <Image
            src="/logo.png"
            alt="DRM Logo"
            width={42}
            height={42}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground tracking-wide">DRM</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action area */}
        <div className="flex items-center gap-2 lg:gap-4 z-50">
          <ThemeToggle />
          
          <Link href="/demo" onClick={closeMenu} className="hidden sm:block">
            <button className="px-5 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary-hover shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] transition-transform transform hover:-translate-y-0.5">
              Get Started
            </button>
          </Link>

          {/* Hamburger Menu Button */}
          <button 
            className="lg:hidden p-2 text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full p-6 space-y-8 overflow-y-auto">
          {/* Main Links */}
          <div className="flex flex-col space-y-6">
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Navigation</p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="text-2xl font-bold text-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
            <Link href="/demo" onClick={closeMenu} className="sm:hidden">
              <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg">
                Get Started
              </button>
            </Link>
          </div>

          <div className="h-px bg-surface-border w-full" />

          {/* Legal Links */}
          <div className="flex flex-col space-y-4 pb-12">
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Legal</p>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="text-lg font-semibold text-muted hover:text-foreground transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
