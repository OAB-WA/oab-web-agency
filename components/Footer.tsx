"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackCTAClick } from "@/lib/gtag";
import { AUDIT_FORM_ANCHOR, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isLandingPage =
    pathname === "/plumber-leads" || pathname.startsWith("/free-audit");
  const isPrintOnly = pathname === "/free-audit/example-audit-output";

  // Determine the correct CTA link based on current page
  const getCTALink = () => {
    if (pathname === "/plumber-leads" || pathname.startsWith("/free-audit")) {
      return AUDIT_FORM_ANCHOR;
    }
    return PRIMARY_CTA_HREF;
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

  // Print-only route should not include any footer.
  if (isPrintOnly) return null;

  // Landing pages: minimal footer only (avoid navigation exits).
  if (isLandingPage) {
    return (
      <footer className="bg-white/60 backdrop-blur-sm border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-500 font-light">
              © {currentYear} OAB Web Agency
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#000B16] text-neutral-300 pt-20 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-16">
          {/* Brand & CTA */}
          <div className="col-span-1 md:col-span-5 space-y-8">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/logo_dark.webp"
                alt="OAB Web Agency"
                width={320}
                height={104}
                className="h-32 w-auto brightness-110"
              />
            </div>
            <p className="text-lg text-neutral-400 max-w-md leading-relaxed font-light">
              Lead-generating websites built for service-based businesses. We turn visitors into phone calls and booked jobs through speed and performance.
            </p>
            
            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={getCTALink()}
                onClick={() => trackCTAClick(PRIMARY_CTA_LABEL, "Footer - CTA")}
                className="btn-primary-dark rounded-2xl px-8 py-4 font-bold shadow-xl hover:shadow-white/10 active:scale-95"
              >
                {PRIMARY_CTA_LABEL}
              </Link>
            </div>
            
            {/* Contact & Social Links */}
            <div className="flex space-x-5 pt-4">
              {[
                { 
                  name: 'Email', 
                  href: `mailto:${contactInfo.email}`, 
                  icon: (
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  )
                },
                { 
                  name: 'WhatsApp', 
                  href: `https://wa.me/${contactInfo.whatsapp}`, 
                  icon: (
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  )
                },
                { 
                  name: 'Twitter', 
                  href: socialLinks.twitter, 
                  icon: (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  )
                },
                { 
                  name: 'Instagram', 
                  href: socialLinks.instagram, 
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  )
                }
              ].map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target={contact.name === 'Email' ? undefined : '_blank'}
                  rel={contact.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-all duration-300 border border-white/5"
                  aria-label={contact.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {contact.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-white font-bold mb-6 tracking-tight">Services</h3>
            <ul className="space-y-4">
              {[
                { label: 'Website Design', href: '/services' },
                { label: 'Performance Optimization', href: '/services' },
                { label: 'Local SEO', href: '/services' },
                { label: 'Conversion Strategy', href: '/services' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-tight">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Results', href: '/case-studies' },
                { label: 'Pricing Plans', href: '/pricing' },
                { label: 'Free Website Audit', href: '/free-audit' },
                { label: 'Common Questions', href: '/faq' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-tight">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium block">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-neutral-600 font-medium">
            © {currentYear} OAB Web Agency. Built for results.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            Currently accepting 2 new projects this month
          </div>
        </div>
      </div>
    </footer>
  );
}

