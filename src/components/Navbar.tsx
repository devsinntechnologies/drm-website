"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavLink =
  | {
      name: string;
      href: string;
    }
  | {
      name: string;
      dropdown: {
        name: string;
        href: string;
      }[];
    };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const closeMenu = () => {
    setIsOpen(false);
    setIndustriesOpen(false);
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Industries",
      dropdown: [{ name: "Restaurant", href: "/industries" }],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-transparent backdrop-blur-xl border-b border-white/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* BRAND */}
        <Link href="/" onClick={closeMenu} className="flex items-center z-50">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="DRM Logo" className="h-10 md:h-12" />
            <span className="text-2xl md:text-3xl font-black text-primary">
              DRM
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if ("dropdown" in link) {
              return (
                <div key={link.name} className="relative">

                  <button
                    onClick={() => setIndustriesOpen((p) => !p)}
                    className="relative px-4 py-2 text-sm font-bold text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 bg-primary/10" />
                    
                    {link.name}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-3/4 transition-all duration-300" />

                  </button>

                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-56 rounded-2xl bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIndustriesOpen(false)}
                            className="block px-5 py-4 text-sm font-semibold hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 group ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {/* hover glow */}
                <span className="absolute inset-0 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 bg-primary/10" />

                {/* text */}
                <span className="relative z-10">
                  {link.name}
                </span>

                {/* underline */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-3/4 transition-all duration-300" />
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 relative z-[1000]"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="h-0.5 bg-primary rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 bg-primary rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="h-0.5 bg-primary rounded-full"
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-[999]"
          >
            <div className="flex flex-col p-6 space-y-6">

              {navLinks.map((link) => {
                if ("dropdown" in link) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setIndustriesOpen((p) => !p)}
                        className="text-2xl font-bold flex justify-between w-full hover:text-primary transition-all duration-300"
                      >
                        {link.name}
                      </button>

                      {industriesOpen && (
                        <div className="pl-4 mt-2 border-l border-primary/20">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className="relative block py-2 text-lg font-semibold text-foreground/80 hover:text-primary group"
                            >
                              <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="relative text-3xl font-bold py-2 text-foreground hover:text-primary group transition-all duration-300"
                  >
                    <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}