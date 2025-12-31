"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/free-audit";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/case-studies", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo_light.webp"
              alt="OAB Web Agency"
              width={120}
              height={40}
              className="h-20 sm:h-32 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {!isLandingPage ? (
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative ${
                      active
                        ? "text-[#001B3A] font-semibold"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#001B3A] rounded-full" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="rounded-lg bg-[#001B3A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#00152E] transition-colors"
              >
                Book a Call
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center">
              <a
                href="#audit-form"
                className="rounded-lg bg-[#001B3A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#00152E] transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your Free Audit
              </a>
            </div>
          )}

          {/* Mobile menu button - only show if not on landing page */}
          {!isLandingPage && (
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}

          {/* Mobile CTA for landing page */}
          {isLandingPage && (
            <div className="md:hidden">
              <a
                href="#audit-form"
                className="rounded-lg bg-[#001B3A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#00152E] transition-colors"
              >
                Get Free Audit
              </a>
            </div>
          )}
        </div>

        {/* Mobile Navigation - only show if not on landing page */}
        {!isLandingPage && (
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200"
              >
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                          active
                            ? "bg-[#001B3A]/10 text-[#001B3A] font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/contact"
                    className="block rounded-md bg-[#001B3A] px-3 py-2 text-base font-semibold text-white hover:bg-[#00152E] text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>
    </header>
  );
}

