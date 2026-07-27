"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type NavLink = 
  | { name: string; href: string } 
  | { 
      name: string; 
      megaMenu: { 
        modules: { name: string; href: string }[]; 
        products: { name: string; href: string }[]; 
      }; 
    };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Industries", href: "/industries" },
  { 
    name: "Products", 
    megaMenu: {
      modules: [
        { name: "Module One", href: "/products/module-one" },
        { name: "Module Two", href: "/products/module-two" },
      ],
      products: [
        { name: "Product Alpha", href: "/products/alpha" },
        { name: "Product Beta", href: "/products/beta" },
      ]
    }
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for navbar background transition & glow effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#08162D]/90 backdrop-blur-md border-b border-[#0055FF]/20 shadow-lg shadow-[#0055FF]/5" 
        : "bg-[#08162D] border-b border-[#0055FF]/10"
    }`}>
      {/* Subtle top light-blue / green glow bar matching footer aesthetic */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-36 h-10 flex items-center">
              <Image 
                src="/Group 11.png" 
                alt="Brand Logo" 
                fill 
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => "megaMenu" in link && setMegaMenuOpen(link.name)}
                  onMouseLeave={() => "megaMenu" in link && setMegaMenuOpen(null)}
                >
                  {"megaMenu" in link ? (
                    <button 
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-[8px] flex items-center gap-1.5 ${
                        megaMenuOpen === link.name 
                          ? "text-[#00B4FF] bg-[#0055FF]/10" 
                          : "text-white/90 hover:text-[#00B4FF] hover:bg-[#0055FF]/5"
                      }`}
                    >
                      {link.name}
                      <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-[8px] relative ${
                        isActive 
                          ? "text-[#00B4FF] bg-[#0055FF]/15" 
                          : "text-white/90 hover:text-[#00B4FF] hover:bg-[#0055FF]/5"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00B4FF] rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {"megaMenu" in link && (
                    <AnimatePresence>
                      {megaMenuOpen === link.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-[#08162D] border border-[#0055FF]/30 rounded-[12px] shadow-2xl p-6 grid grid-cols-2 gap-6 mt-2 overflow-hidden"
                        >
                          {/* Absolute glowing accent background element */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/10 via-transparent to-[#00B4FF]/5 pointer-events-none" />
                          
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00B4FF] mb-3">Modules</h4>
                            <div className="flex flex-col space-y-2">
                              {link.megaMenu.modules.map((mod) => (
                                <Link 
                                  key={mod.name} 
                                  href={mod.href}
                                  className="text-sm text-white/80 hover:text-[#00B4FF] hover:translate-x-1 transition-all duration-150 py-1"
                                >
                                  {mod.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00B4FF] mb-3">Products</h4>
                            <div className="flex flex-col space-y-2">
                              {link.megaMenu.products.map((prod) => (
                                <Link 
                                  key={prod.name} 
                                  href={prod.href}
                                  className="text-sm text-white/80 hover:text-[#00B4FF] hover:translate-x-1 transition-all duration-150 py-1"
                                >
                                  {prod.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action / Contact Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0055FF] to-[#00B4FF] hover:opacity-95 shadow-md shadow-[#0055FF]/20 transition-all duration-200 rounded-[8px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-[#00B4FF] focus:outline-none rounded-[8px] bg-[#0055FF]/10"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#08162D] border-t border-[#0055FF]/20 px-4 pt-4 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {"megaMenu" in link ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-white/90 hover:text-[#00B4FF] hover:bg-[#0055FF]/5 rounded-[8px]"
                    >
                      <span>{link.name}</span>
                      <svg className={`w-4 h-4 transition-transform ${mobileDropdown === link.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdown === link.name && (
                      <div className="pl-6 py-2 space-y-2 border-l border-[#0055FF]/20 ml-4 my-1">
                        <p className="text-xs font-semibold text-[#00B4FF] uppercase tracking-wider">Modules</p>
                        {link.megaMenu.modules.map((m) => (
                          <Link key={m.name} href={m.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-white/70 hover:text-[#00B4FF]">
                            {m.name}
                          </Link>
                        ))}
                        <p className="text-xs font-semibold text-[#00B4FF] uppercase tracking-wider pt-2">Products</p>
                        {link.megaMenu.products.map((p) => (
                          <Link key={p.name} href={p.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-white/70 hover:text-[#00B4FF]">
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-white/90 hover:text-[#00B4FF] hover:bg-[#0055FF]/5 rounded-[8px]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#0055FF] to-[#00B4FF] rounded-[8px] shadow-md shadow-[#0055FF]/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}