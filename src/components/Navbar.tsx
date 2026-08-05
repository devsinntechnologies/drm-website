"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiPhoneCall,
  FiChevronDown,
  FiMenu,
  FiX,
  FiMail,
  FiPlayCircle,
  FiUsers,
  FiBriefcase,
  FiShield,
  FiBookOpen,
} from "react-icons/fi";
import Button from "@/components/ui/Button";
import Logo from "@/components/common/Logo";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-300 ease-out ${
          scrolled ? "pt-3 px-3 sm:px-5 lg:px-8" : "pt-0 px-0"
        }`}
      >
        <div
          className={`relative isolate transition-all duration-300 ease-out ${
            scrolled
              ? "mx-auto max-w-6xl rounded-2xl border border-surface-border bg-surface shadow-[0_12px_40px_-16px_rgba(8,22,45,0.25)] px-4 sm:px-5 lg:px-6 py-2.5 overflow-visible backdrop-blur-xl"
              : "w-full bg-surface/98 backdrop-blur-md section-soft-edge shadow-sm px-0 py-0 border-b border-surface-border/50"
          }`}
        >
        {!scrolled && (
          <>
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none z-0" />
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none z-0" />
          </>
        )}

        <div
          className={`flex items-center justify-between relative z-10 ${
            scrolled ? "" : "max-w-7xl mx-auto px-4 lg:px-8 py-2"
          }`}
        >
        <Link href="/" className="flex items-center group shrink-0">
          <Logo
            priority
            className={`w-auto group-hover:opacity-90 transition-all duration-300 ${
              scrolled ? "h-7 sm:h-8" : "h-8 sm:h-9"
            }`}
          />
        </Link>

        <nav
          className={`hidden lg:flex items-center font-semibold text-sm text-foreground transition-all duration-300 ${
            scrolled ? "space-x-4 xl:space-x-5" : "space-x-5"
          }`}
        >
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-surface border border-surface-border shadow-[var(--shadow-card)] rounded-2xl p-2 mt-1 z-50 text-left animate-fade-up">
                <ul className="space-y-0.5">
                  {[
                    { href: "/contact", label: "Contact Us", desc: "Talk to our team", icon: FiMail },
                    { href: "/demo", label: "Get a Free Demo", desc: "Live product walkthrough", icon: FiPlayCircle },
                    { href: "/partner", label: "Become a Partner", desc: "Join our channel network", icon: FiUsers },
                    { href: "/hiring", label: "We are hiring", desc: "Open roles at DigiNizam", icon: FiBriefcase },
                    { href: "/privacy", label: "Privacy Policy", desc: "How we protect your data", icon: FiShield },
                    { href: "/blog", label: "Blog", desc: "Insights & product updates", icon: FiBookOpen },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors group"
                        >
                          <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={15} />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-[11px] text-muted mt-0.5">{item.desc}</span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {scrolled ? (
            <Button
              href="/demo"
              variant="primary"
              size="sm"
              className="!rounded-2xl !h-10 !px-5 !text-sm !font-semibold"
            >
              Get demo
            </Button>
          ) : (
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-xl flex items-center gap-2.5 px-3 py-2 transition-all bg-primary/5 hover:bg-primary/10 text-foreground"
            >
              <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <FiPhoneCall size={15} />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] uppercase font-semibold text-muted tracking-wide">Call anytime</span>
                <span className="block text-sm font-semibold text-foreground">{PHONE_DISPLAY}</span>
              </div>
            </a>
          )}
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
        <div
          className={`lg:hidden bg-surface border border-surface-border px-4 py-3 space-y-1 shadow-[var(--shadow-card)] max-h-[70vh] overflow-y-auto relative z-20 animate-fade-up ${
            scrolled ? "mx-auto max-w-6xl mt-2 rounded-2xl" : "border-b border-surface-border"
          }`}
        >
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
            <Button href={`tel:${PHONE_TEL}`} variant="primary" fullWidth size="md">
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      )}
        </div>
      </header>

      {/* Reserve space so content is not hidden under fixed header */}
      <div aria-hidden className="h-14 sm:h-[60px] shrink-0" />
    </>
  );
}
