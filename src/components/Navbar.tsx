"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'About', href: '/about' },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2 bg-background/84 backdrop-blur-xl border-b border-surface-border/60'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" onClick={closeMenu} className="flex items-center cursor-pointer z-50">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-3">
            <div className="relative h-10 w-auto md:h-12">
              <img
                src={`/logo.png?v=${Date.now()}`}
                alt="DRM Logo"
                className="h-full w-auto object-contain object-left"
              />
            </div>
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-primary">
              DRM
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-bold tracking-wide rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'text-primary outline-none'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.span 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {isActive && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action area */}
        <div className="flex items-center gap-3 z-50">
          <Link href="/demo" onClick={closeMenu} className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="shimmer-btn px-6 py-2.5 bg-primary text-primary-foreground text-sm font-black tracking-wide rounded-xl transition-shadow duration-300 relative overflow-hidden group glow-primary"
            >
              <span className="relative z-10">Get Started</span>
            </motion.button>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-primary rounded-full" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-primary rounded-full" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-primary rounded-full" 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-16.25 bg-background/96 backdrop-blur-xl z-40"
          >
            <div className="flex flex-col h-full p-6 space-y-8 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Navigation</p>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.href}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`text-3xl font-bold transition-colors py-2 flex items-center justify-between ${isActive ? 'text-primary' : 'text-foreground'}`}
                      >
                        {link.name}
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: isActive ? 1 : 0 }}
                          className="w-2 h-2 rounded-full bg-primary"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link href="/demo" onClick={closeMenu} className="sm:hidden mt-6 block">
                    <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-2xl text-lg glow-primary">
                      Get Started
                    </button>
                  </Link>
                </motion.div>
              </div>

              <div className="h-px bg-surface-border w-full opacity-50" />

              <div className="flex flex-col space-y-4 pb-12">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Legal</p>
                {legalLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    key={link.href}
                  >
                    <Link href={link.href} onClick={closeMenu} className="text-lg font-semibold text-muted hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
