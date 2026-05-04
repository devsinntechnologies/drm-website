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
      megaMenu: {
        modules: {
          name: string;
          href: string;
        }[];

        products: {
          name: string;
          href: string;
        }[];
      };
    };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMegaMenuOpen(null);
    setMobileDropdown(null);
  };

  const navLinks: NavLink[] = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "About",
      href: "/about",
    },

    {
      name: "Products",

      megaMenu: {
        modules: [
          {
            name: "Point of Sales",
            href: "/products#pos",
          },

          {
            name: "Supply Chain Management",
            href: "/products#scm",
          },

          {
            name: "Production",
            href: "/products#production",
          },

          {
            name: "Accounts and Finance",
            href: "/products#finance",
          },

          {
            name: "HRIS",
            href: "/products#hris",
          },

          {
            name: "CRM",
            href: "/products#crm",
          },

          {
            name: "Sales Order & Delivery",
            href: "/products#sales-order",
          },

          {
            name: "Recipe Management",
            href: "/products#recipe",
          },

          {
            name: "SMS",
            href: "/products#sms",
          },

          {
            name: "Guest Reservation",
            href: "/products#reservation",
          },

          {
            name: "Digital Queue Management",
            href: "/products#queue",
          },
        ],

        products: [
          {
            name: "Business Expert ERP",
            href: "/products#erp",
          },

          {
            name: "Feedo",
            href: "/products#feedo",
          },

          {
            name: "Task Management (CANDO)",
            href: "/products#cando",
          },

          {
            name: "Cloud Based Dashboard",
            href: "/products#cloud-dashboard",
          },

          {
            name: "Restaurant Order App",
            href: "/products#order-app",
          },

          {
            name: "Price Checker",
            href: "/products#price-checker",
          },
        ],
      },
    },

    {
      name: "Industries",

      megaMenu: {
        modules: [
          {
            name: "Restaurant",
            href: "/industries",
          },
        ],

        products: [],
      },
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 relative z-[1001]"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="h-9 sm:h-10 md:h-12 object-contain"
            />

            <span className="text-2xl sm:text-3xl font-black text-primary">
              DRM
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if ("megaMenu" in link) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(link.name)}
                    onMouseLeave={() => setMegaMenuOpen(null)}
                  >
                    <button className="relative px-4 xl:px-5 py-2 text-sm font-bold text-black/80 hover:text-primary transition-all duration-300 group">
                      <span className="absolute inset-0 rounded-xl bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />

                      <span className="relative z-10 flex items-center gap-2">
                        {link.name}

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* DESKTOP DROPDOWN */}
                    <AnimatePresence>
                      {megaMenuOpen === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 rounded-3xl border border-white/10 bg-[#1b1b1b]/95 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] overflow-hidden ${
                            link.name === "Industries"
                              ? "w-[300px]"
                              : "w-[90vw] max-w-[760px]"
                          }`}
                        >
                          {link.name === "Industries" ? (
                            <div className="p-8">
                              <h3 className="text-2xl font-black text-white mb-6">
                                Industries
                              </h3>

                              <div className="space-y-4">
                                {link.megaMenu.modules.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-white/80 hover:text-primary font-semibold transition-all duration-300"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-12 p-8 xl:p-10">
                              {/* LEFT */}
                              <div>
                                <h3 className="text-2xl font-black text-white mb-6">
                                  Modules
                                </h3>

                                <div className="space-y-3">
                                  {link.megaMenu.modules.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block text-white/80 hover:text-primary font-semibold transition-all duration-300"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* RIGHT */}
                              <div>
                                <h3 className="text-2xl font-black text-white mb-6">
                                  Products
                                </h3>

                                <div className="space-y-3">
                                  {link.megaMenu.products.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="block text-white/80 hover:text-primary font-semibold transition-all duration-300"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
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
                  className={`relative px-4 xl:px-5 py-2 text-sm font-bold rounded-xl transition-all duration-300 group ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-black/80 hover:text-primary"
                  }`}
                >
                  <span className="absolute inset-0 rounded-xl bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300" />

                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden relative z-[1001] p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="h-0.5 rounded-full bg-white"
              />

              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 rounded-full bg-white"
              />

              <motion.span
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="h-0.5 rounded-full bg-white"
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-[#111]/95 backdrop-blur-2xl z-[999] overflow-y-auto"
          >
            <div className="pt-28 px-6 pb-10 space-y-5">
              {navLinks.map((link) => {
                if ("megaMenu" in link) {
                  return (
                    <div
                      key={link.name}
                      className="border-b border-white/10 pb-5"
                    >
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.name ? null : link.name
                          )
                        }
                        className="w-full flex items-center justify-between text-left"
                      >
                        <span className="text-2xl font-black text-white">
                          {link.name}
                        </span>

                        <motion.svg
                          animate={{
                            rotate:
                              mobileDropdown === link.name ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-5 space-y-6">
                              {/* MODULES */}
                              <div>
                                <h4 className="text-primary font-black uppercase tracking-wider mb-4 text-sm">
                                  Modules
                                </h4>

                                <div className="space-y-3">
                                  {link.megaMenu.modules.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={closeMenu}
                                      className="block text-white/80 hover:text-primary text-lg font-semibold transition-all duration-300"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* PRODUCTS */}
                              {link.megaMenu.products.length > 0 && (
                                <div>
                                  <h4 className="text-primary font-black uppercase tracking-wider mb-4 text-sm">
                                    Products
                                  </h4>

                                  <div className="space-y-3">
                                    {link.megaMenu.products.map((item) => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block text-white/80 hover:text-primary text-lg font-semibold transition-all duration-300"
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
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
                    onClick={closeMenu}
                    className={`block text-3xl font-black transition-all duration-300 ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
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