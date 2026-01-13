"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTAClick } from "@/lib/gtag";
import { CALENDLY_URL } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/free-audit" || pathname === "/dallas-plumbers";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Results" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isSolid = isScrolled || mobileMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[100px] ${
      isSolid 
        ? "bg-white border-b border-neutral-100 shadow-sm" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isSolid ? "/logo_light.webp" : "/logo_dark.webp"}
              alt="OAB Web Agency"
              width={200}
              height={65}
              className="h-[60px] sm:h-20 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isLandingPage ? (
            <div className="hidden md:flex md:items-center md:space-x-10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] uppercase tracking-[0.1em] font-semibold transition-all relative py-1 ${
                      active
                        ? (isSolid ? "text-primary-950" : "text-white")
                        : (isSolid ? "text-neutral-400 hover:text-primary-950" : "text-white/60 hover:text-white")
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span 
                        layoutId="nav-underline"
                        className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full ${
                          isSolid ? "bg-primary-950" : "bg-white"
                        }`} 
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("Book a Call", "Header - Desktop")}
                className="btn-primary text-[13px] uppercase tracking-wider px-7 py-2.5 shadow-sm active:scale-95 transition-all"
              >
                Book a Call
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center">
              <a
                href="#audit-form"
                onClick={() => trackCTAClick("Get Your Free Audit or Consultation", "Header - Landing Page")}
                className={`btn-primary text-[13px] uppercase tracking-wider px-7 py-2.5 ${!isSolid ? "bg-white !text-primary-950 hover:bg-neutral-50" : ""}`}
              >
                Get Your Free Audit or Consultation
              </a>
            </div>
          )}

          {/* Mobile menu button */}
          {!isLandingPage && (
            <button
              type="button"
              className={`md:hidden p-2 transition-colors ${isSolid ? "text-neutral-900" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          )}

          {/* Mobile CTA for landing page */}
          {isLandingPage && (
            <div className="md:hidden">
              <a
                href="#audit-form"
                onClick={() => trackCTAClick("Get Free Audit or Consultation", "Header - Mobile - Landing Page")}
                className={`btn-primary text-xs uppercase tracking-wider px-5 py-2.5 text-center block ${!isSolid ? "bg-white !text-primary-950" : ""}`}
              >
                Get Free Audit
              </a>
            </div>
          )}
        </div>

        {/* Mobile Navigation Panel */}
        {!isLandingPage && (
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="md:hidden fixed inset-x-0 top-[100px] bottom-0 bg-white border-t border-neutral-100 z-40 overflow-y-auto"
              >
                <div className="flex flex-col h-full px-6 py-10">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6 px-4">Navigation</p>
                    {navLinks.map((link, idx) => {
                      const active = isActive(link.href);
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className={`block rounded-2xl px-6 py-5 text-xl font-semibold transition-all ${
                              active
                                ? "bg-primary-50 text-primary-950"
                                : "text-neutral-600 active:bg-neutral-50"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-auto pt-10 border-t border-neutral-100">
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full py-5 rounded-2xl text-lg uppercase tracking-widest font-bold"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        trackCTAClick("Book a Call", "Header - Mobile Menu");
                      }}
                    >
                      Book a Strategy Call
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>
    </header>
  );
}

