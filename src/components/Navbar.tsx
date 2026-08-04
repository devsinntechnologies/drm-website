"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiPhoneCall, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Button from "@/components/ui/Button";

const menuHeading = "text-primary text-xs font-bold uppercase tracking-wider mb-3 border-b border-surface-border pb-2";
const menuLink = "hover:text-primary transition-colors block text-muted";
const serviceCard =
  "p-3 rounded-xl border border-surface-border hover:border-primary hover:bg-primary/10 transition-all group";

function navLinkClass(active: boolean) {
  return active
    ? "nav-active font-semibold transition-colors"
    : "text-foreground hover:text-primary transition-colors";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<"products" | "services" | "contact" | null>(null);

  const isHome = pathname === "/";
  const isAbout = pathname.startsWith("/about");
  const isProducts = pathname.startsWith("/products");
  const isServices = pathname.startsWith("/services");
  const isClientele = pathname.startsWith("/clientele");
  const isContact =
    pathname.startsWith("/contact") ||
    pathname.startsWith("/demo") ||
    pathname.startsWith("/partner") ||
    pathname.startsWith("/hiring") ||
    pathname.startsWith("/privacy") ||
    pathname.startsWith("/blog");

  return (
    <header className="w-full bg-surface/95 backdrop-blur-md border-b border-surface-border sticky top-0 z-[100] shadow-sm relative isolate">
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11">
            <Image
              src="/logo.png"
              alt="DigiNizam Logo"
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight flex items-center">
            <span className="text-foreground">Digi</span>
            <span className="text-primary">Nizam</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-5 font-semibold text-sm text-foreground">
          <Link href="/" className={navLinkClass(isHome)}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass(isAbout)}>
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 py-2 font-semibold cursor-pointer ${navLinkClass(isProducts)}`}
              aria-expanded={isProductsOpen}
            >
              Products{" "}
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] max-w-[min(900px,calc(100vw-2rem))] bg-surface border border-surface-border shadow-[var(--shadow-card)] rounded-2xl p-6 grid grid-cols-3 gap-6 mt-1 z-50 text-left animate-fade-up">
                <div>
                  <h4 className={menuHeading}>Digi Soft (Retail)</h4>
                  <ul className="space-y-2.5 text-xs font-semibold">
                    <li>
                      <Link href="/products/restaurant" onClick={() => setIsProductsOpen(false)} className={menuLink}>
                        Restaurant Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/supermarket" className={menuLink}>
                        Supermarket Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/pharmacy" className={menuLink}>
                        Medical & Pharmacy Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/books" className={menuLink}>
                        Books & Publishers Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/bakery" className={menuLink}>
                        Sweets & Bakery Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/distribution" className={menuLink}>
                        Distribution Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/automobile" className={menuLink}>
                        Automobile Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/apparel" className={menuLink}>
                        Apparel & Garments Solution
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className={menuHeading}>More Solutions</h4>
                  <ul className="space-y-2.5 text-xs font-semibold mb-5">
                    <li>
                      <Link href="/products/shoes" className={menuLink}>
                        Shoes & Bags Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/crockery" className={menuLink}>
                        Crockery & Cutlery Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/furniture" className={menuLink}>
                        Furniture Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/vape" className={menuLink}>
                        Vape Shops
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/beauty" className={menuLink}>
                        Beauty & Cosmetics
                      </Link>
                    </li>
                  </ul>

                  <h4 className={menuHeading}>Digi Soft (Industries)</h4>
                  <ul className="space-y-2 text-xs font-semibold">
                    <li>
                      <Link href="/products/rice" className={menuLink}>
                        Rice ERP
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/flour" className={menuLink}>
                        Flour ERP
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/sugar" className={menuLink}>
                        Sugar ERP
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/textile" className={menuLink}>
                        Textile ERP
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className={menuHeading}>CRM (Field Force)</h4>
                  <ul className="space-y-2 text-xs font-semibold mb-4">
                    <li>
                      <Link href="/products/complaint" className={menuLink}>
                        Complaint Management System
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/sales-mgmt" className={menuLink}>
                        Sales Management System
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/tracking" className={menuLink}>
                        User Tracking Management
                      </Link>
                    </li>
                  </ul>

                  <h4 className={menuHeading}>Digi Cloud & Trac</h4>
                  <ul className="space-y-2 text-xs font-semibold">
                    <li>
                      <Link href="/products/vps" className={menuLink}>
                        VPS & Dedicated Server
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/fbr" className={menuLink}>
                        FBR Digital Invoicing
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/genprice" className={menuLink}>
                        Gen Price & Gen Financial
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 py-2 font-semibold cursor-pointer ${navLinkClass(isServices)}`}
              aria-expanded={isServicesOpen}
            >
              Services{" "}
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] max-w-[min(650px,calc(100vw-2rem))] bg-surface border border-surface-border shadow-[var(--shadow-card)] rounded-2xl p-5 grid grid-cols-2 gap-3 mt-1 z-50 text-left animate-fade-up">
                {[
                  { href: "/services/software-solution", title: "Software Solution", desc: "Custom software for your business" },
                  { href: "/services/hardware-support", title: "Hardware Support", desc: "Data recovery & diagnostics" },
                  { href: "/services/mis-audit", title: "MIS Audit", desc: "Business activity analysis" },
                  { href: "/services/training", title: "Training", desc: "Technical & helpdesk support" },
                  { href: "/services/web-development", title: "Web Development", desc: "Ecommerce & web apps" },
                  { href: "/services/digital-marketing", title: "Digital Marketing", desc: "SEO, SEM & social" },
                  { href: "/services/system-support", title: "System Support", desc: "Support & maintenance" },
                  { href: "/services/hr-digitalization", title: "HR Digitalization", desc: "Modern HR workflows" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className={serviceCard}>
                    <h5 className="text-xs font-bold text-foreground group-hover:text-primary mb-1">{item.title}</h5>
                    <p className="text-[10px] text-muted font-medium">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/clientele" className={navLinkClass(isClientele)}>
            Clientele
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsContactOpen(true)}
            onMouseLeave={() => setIsContactOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 py-2 font-semibold cursor-pointer ${navLinkClass(isContact)}`}
              aria-expanded={isContactOpen}
            >
              Contact{" "}
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${isContactOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isContactOpen && (
              <div className="absolute top-full left-0 w-56 bg-surface border border-surface-border shadow-[var(--shadow-card)] rounded-2xl py-2 mt-1 z-50 text-left animate-fade-up">
                <ul className="space-y-0.5 text-xs font-semibold text-muted">
                  {[
                    { href: "/contact", label: "Contact Us" },
                    { href: "/demo", label: "Get a Free Demo" },
                    { href: "/partner", label: "Become a Partner" },
                    { href: "/hiring", label: "We are hiring" },
                    { href: "/privacy", label: "Privacy Policy" },
                    { href: "/blog", label: "Blog" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:021111436832"
            className="border border-primary/20 hover:border-primary px-3 py-1.5 rounded-xl flex items-center gap-2.5 transition-all bg-surface shadow-sm hover:shadow-md"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <FiPhoneCall size={16} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] uppercase font-bold text-muted tracking-wider">Call Anytime</span>
              <span className="block text-xs font-bold text-foreground">03-000000000</span>
            </div>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-surface-border px-4 py-3 space-y-1 shadow-[var(--shadow-card)] max-h-[70vh] overflow-y-auto relative z-20 animate-fade-up">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-semibold text-sm py-2 ${isHome ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-semibold text-sm py-2 ${isAbout ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            About
          </Link>

          <div className="border-t border-surface-border pt-1">
            <button
              type="button"
              onClick={() => setOpenMobileSection(openMobileSection === "products" ? null : "products")}
              className={`flex items-center justify-between w-full font-semibold text-sm py-2 ${isProducts ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              <span>Products & Solutions</span>
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMobileSection === "products" ? "rotate-180" : ""}`}
              />
            </button>
            {openMobileSection === "products" && (
              <div className="pl-3 pt-1 pb-2 space-y-1.5">
                {[
                  ["/products/restaurant", "Restaurant"],
                  ["/products/supermarket", "Supermarket"],
                  ["/products/pharmacy", "Pharmacy"],
                  ["/products/books", "Books"],
                  ["/products/bakery", "Bakery"],
                  ["/products/distribution", "Distribution"],
                  ["/products/automobile", "Automobile"],
                  ["/products/apparel", "Apparel"],
                  ["/products/shoes", "Shoes & Bags"],
                  ["/products/crockery", "Crockery"],
                  ["/products/furniture", "Furniture"],
                  ["/products/vape", "Vape Shops"],
                  ["/products/beauty", "Beauty & Cosmetics"],
                  ["/products/rice", "Rice ERP"],
                  ["/products/flour", "Flour ERP"],
                  ["/products/sugar", "Sugar ERP"],
                  ["/products/textile", "Textile ERP"],
                  ["/products/complaint", "Complaint Management"],
                  ["/products/sales-mgmt", "Sales Management"],
                  ["/products/tracking", "User Tracking"],
                  ["/products/vps", "VPS & Dedicated"],
                  ["/products/fbr", "FBR Digital"],
                  ["/products/genprice", "Gen Price & Financial"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm py-0.5 ${pathname === href ? "text-primary font-semibold" : "text-muted hover:text-primary"}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-surface-border pt-1">
            <button
              type="button"
              onClick={() => setOpenMobileSection(openMobileSection === "services" ? null : "services")}
              className={`flex items-center justify-between w-full font-semibold text-sm py-2 ${isServices ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              <span>Services</span>
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMobileSection === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {openMobileSection === "services" && (
              <div className="pl-3 pt-1 pb-2 space-y-1.5">
                {[
                  ["/services/software-solution", "Software Solution"],
                  ["/services/hardware-support", "Hardware Support"],
                  ["/services/mis-audit", "MIS Audit"],
                  ["/services/training", "Training"],
                  ["/services/web-development", "Web Development"],
                  ["/services/digital-marketing", "Digital Marketing"],
                  ["/services/system-support", "System Support"],
                  ["/services/hr-digitalization", "HR Digitalization"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm py-0.5 ${pathname === href ? "text-primary font-semibold" : "text-muted hover:text-primary"}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/clientele"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block font-semibold text-sm py-2 ${isClientele ? "text-primary" : "text-foreground hover:text-primary"}`}
          >
            Clientele
          </Link>

          <div className="border-t border-surface-border pt-1">
            <button
              type="button"
              onClick={() => setOpenMobileSection(openMobileSection === "contact" ? null : "contact")}
              className={`flex items-center justify-between w-full font-semibold text-sm py-2 ${isContact ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              <span>Contact</span>
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMobileSection === "contact" ? "rotate-180" : ""}`}
              />
            </button>
            {openMobileSection === "contact" && (
              <div className="pl-3 pt-1 pb-2 space-y-1.5">
                {[
                  ["/contact", "Contact Us"],
                  ["/demo", "Get a Free Demo"],
                  ["/partner", "Become a Partner"],
                  ["/hiring", "We are hiring"],
                  ["/privacy", "Privacy Policy"],
                  ["/blog", "Blog"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm py-0.5 ${pathname === href ? "text-primary font-semibold" : "text-muted hover:text-primary"}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-surface-border">
            <Button href="tel:021111436832" variant="primary" fullWidth size="md">
              Call 03-000000000
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
