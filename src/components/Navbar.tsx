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

const industries: { href: string; label: string }[] = [
  { href: "/products/retail", label: "Retail Store" },
  { href: "/products/pharmacy", label: "Pharmacy" },
  { href: "/products/restaurant", label: "Restaurant" },
  { href: "/products/apparel", label: "Boutique" },
  { href: "/products/salon", label: "Salon / SPA" },
  { href: "/products/bakery", label: "Bakery POS" },
  { href: "/products/electric", label: "Electric Store" },
  { href: "/products/jewellery", label: "Jewellery Shop" },
  { href: "/products/toys", label: "Toys Store" },
  { href: "/products/cafe", label: "Food / Cafe" },
  { href: "/products/furniture", label: "Furniture Store" },
  { href: "/products/supermarket", label: "Supermarkets" },
  { href: "/products/manufacturing", label: "Manufacturing" },
  { href: "/products/automobile", label: "Auto Parts" },
  { href: "/products/books", label: "Book Store" },
  { href: "/products/snooker", label: "Snooker POS" },
  { href: "/products/distribution", label: "Distribution" },
];

const moreSolutions: { href: string; label: string }[] = [
  { href: "/products/shoes", label: "Shoes & Bags" },
  { href: "/products/crockery", label: "Crockery & Cutlery" },
  { href: "/products/vape", label: "Vape Shops" },
  { href: "/products/beauty", label: "Beauty & Cosmetics" },
  { href: "/products/rice", label: "Rice ERP" },
  { href: "/products/flour", label: "Flour ERP" },
  { href: "/products/sugar", label: "Sugar ERP" },
  { href: "/products/textile", label: "Textile ERP" },
  { href: "/products/complaint", label: "Complaint Management" },
  { href: "/products/sales-mgmt", label: "Sales Management" },
  { href: "/products/tracking", label: "User Tracking" },
  { href: "/products/vps", label: "VPS & Dedicated Server" },
  { href: "/products/fbr", label: "FBR Digital Invoicing" },
  { href: "/products/genprice", label: "Gen Price & Financial" },
];

const mobileIndustries: [string, string][] = industries.map((i) => [i.href, i.label]);
const mobileMoreSolutions: [string, string][] = moreSolutions.map((i) => [i.href, i.label]);

function navLinkClass(active: boolean) {
  return active
    ? "nav-active font-semibold transition-colors"
    : "text-foreground hover:text-primary transition-colors";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<"products" | "contact" | null>(null);
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
              Industries{" "}
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] max-w-[min(900px,calc(100vw-2rem))] bg-surface border border-surface-border shadow-[var(--shadow-card)] rounded-2xl p-6 grid grid-cols-4 gap-6 mt-1 z-50 text-left animate-fade-up">
                <div>
                  <h4 className={menuHeading}>Industries</h4>
                  <ul className="space-y-2.5 text-xs font-semibold">
                    {industries.slice(0, 6).map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setIsProductsOpen(false)} className={menuLink}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`${menuHeading} opacity-0 select-none`} aria-hidden>
                    Industries
                  </h4>
                  <ul className="space-y-2.5 text-xs font-semibold">
                    {industries.slice(6, 12).map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setIsProductsOpen(false)} className={menuLink}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`${menuHeading} opacity-0 select-none`} aria-hidden>
                    Industries
                  </h4>
                  <ul className="space-y-2.5 text-xs font-semibold">
                    {industries.slice(12).map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setIsProductsOpen(false)} className={menuLink}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={menuHeading}>More Solutions</h4>
                  <ul className="space-y-2 text-xs font-semibold">
                    {moreSolutions.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setIsProductsOpen(false)} className={menuLink}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

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
              <span>Industries</span>
              <FiChevronDown
                size={14}
                className={`transition-transform duration-200 ${openMobileSection === "products" ? "rotate-180" : ""}`}
              />
            </button>
            {openMobileSection === "products" && (
              <div className="pl-3 pt-1 pb-2 space-y-1.5">
                {mobileIndustries.map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-sm py-0.5 ${pathname === href ? "text-primary font-semibold" : "text-muted hover:text-primary"}`}
                  >
                    {label}
                  </Link>
                ))}
                <p className="pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-muted">
                  More Solutions
                </p>
                {mobileMoreSolutions.map(([href, label]) => (
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
