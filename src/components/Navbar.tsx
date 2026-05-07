"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavLink =
  | { name: string; href: string }
  | {
      name: string;
      megaMenu: {
        modules: { name: string; href: string }[];
        products: { name: string; href: string }[];
      };
    };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMegaMenuOpen(null);
    setMobileDropdown(null);
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      megaMenu: {
        modules: [
          { name: "Point of Sales", href: "/products#pos" },
          { name: "Supply Chain Management", href: "/products#scm" },
          { name: "Production", href: "/products#production" },
          { name: "Accounts & Finance", href: "/products#finance" },
          { name: "HRIS", href: "/products#hris" },
          { name: "CRM", href: "/products#crm" },
          { name: "Sales Order & Delivery", href: "/products#sales-order" },
          { name: "Recipe Management", href: "/products#recipe" },
          { name: "SMS", href: "/products#sms" },
          { name: "Guest Reservation", href: "/products#reservation" },
          { name: "Digital Queue Management", href: "/products#queue" },
        ],
        products: [
          { name: "Business Expert ERP", href: "/products#erp" },
          { name: "Feedo", href: "/products#feedo" },
          { name: "Task Management (CANDO)", href: "/products#cando" },
          { name: "Cloud Dashboard", href: "/products#cloud-dashboard" },
          { name: "Restaurant Order App", href: "/products#order-app" },
          { name: "Price Checker", href: "/products#price-checker" },
        ],
      },
    },
    {
      name: "Industries",
      megaMenu: {
        modules: [{ name: "Restaurant", href: "/industries" }],
        products: [],
      },
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-2 text-white "
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 z-[1001]">
            <img src="/logo.png" alt="Logo" className="h-10 object-contain" />
            <span className={`text-2xl font-black  ${scrolled || isOpen ? "text-primary" : "text-primary/80"}`}>
              DRM
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              if ("megaMenu" in link) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(link.name)}
                    onMouseLeave={() => setMegaMenuOpen(null)}
                  >
                    <button className={`px-4 py-2 text-sm font-bold ${scrolled || isOpen ? "text-white hover:text-primary" : "text-black hover:text-primary"}`}>
                      {link.name}
                    </button>
                    <AnimatePresence>
                      {megaMenuOpen === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[600px] bg-neutral-900 border border-white/10 rounded-2xl p-6"
                        >
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <h3 className="text-primary font-bold mb-3">Modules</h3>
                              {link.megaMenu.modules.map((item) => (
                                <Link key={item.href} href={item.href} className="block text-white/70 hover:text-white text-sm mb-2">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                            <div>
                              <h3 className="text-primary font-bold mb-3">Products</h3>
                              {link.megaMenu.products.map((item) => (
                                <Link key={item.href} href={item.href} className="block text-white/70 hover:text-white text-sm mb-2">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
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
                  className={`px-4 py-2 text-sm  font-bold ${ 
                    pathname === link.href ? "text-primary" : "text-black hover:text-primary"
                  } ${scrolled || isOpen ? "text-white hover:text-primary" : "text-black hover:text-primary"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[1001] relative p-2 text-primary"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-current rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col p-8 pt-24 overflow-y-auto h-screen"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10 py-4">
                {"megaMenu" in link ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                      className="text-2xl font-bold text-white w-full text-left flex justify-between items-center"
                    >
                      {link.name}
                      <span className={`transition-transform ${mobileDropdown === link.name ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 gap-2 mt-4 pl-4 border-l border-primary/30">
                            {[...link.megaMenu.modules, ...link.megaMenu.products].map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className="text-white/60 py-2"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-2xl font-bold text-white block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}