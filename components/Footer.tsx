"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackCTAClick } from "@/lib/gtag";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  
  // Determine the correct CTA link based on current page
  const getCTALink = () => {
    if (pathname === "/free-audit-plumbers" || pathname === "/free-audit") {
      return "#audit-form";
    }
    return "/free-audit";
  };

  // TODO: Replace with your actual social media links
  const socialLinks = {
    twitter: "https://twitter.com/oab_web_agency",
    instagram: "https://instagram.com/oabwebagency",
  };

  const contactInfo = {
    email: "hello@oabwebagency.com",
    phone: "0915 072 5803",
    whatsapp: "2349150725803", // WhatsApp number without + or spaces
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand & CTA */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo_dark.webp"
                alt="OAB Web Agency"
                width={120}
                height={40}
                className="h-20 sm:h-32 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-400 max-w-md mb-6">
              High-converting websites built for service-based businesses. We build new websites from scratch or redesign existing ones—turning visitors into calls and booked jobs.
            </p>
            
            {/* CTA Button */}
            <Link
              href={getCTALink()}
              onClick={() => trackCTAClick("Get Your Free Audit or Consultation", "Footer - CTA")}
              className="btn-primary-dark text-sm px-6 py-3 mb-6"
            >
              Get Your Free Audit or Consultation →
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-150"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors duration-150"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="link-primary-dark"
                >
                  Website Design & Redesign
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="link-primary-dark"
                >
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="link-primary-dark"
                >
                  Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="link-primary-dark"
                >
                  Conversion Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="link-primary-dark"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="link-primary-dark"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="link-primary-dark"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="link-primary-dark"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/free-audit"
                  className="link-primary-dark"
                >
                  Free Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="link-primary-dark"
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="link-primary-dark"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary-dark"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/privacy"
                  className="link-primary-dark"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="link-primary-dark"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-neutral-400">
              © {currentYear} OAB Web Agency. All rights reserved.
            </p>
            <p className="text-xs text-neutral-400">
              Built for service businesses that want more leads.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

