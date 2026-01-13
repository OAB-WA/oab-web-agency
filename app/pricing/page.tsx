"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
// Check icon component
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Speed Up Your Existing Site",
      price: "Starting at $1,000",
      description: "Fix your slow website and stop losing customers to competitors",
      features: [
        "Website loads instantly",
        "Works perfectly on phones",
        "Stop losing customers to slow loading",
        "Before/after speed report",
        "30 days of support",
      ],
      popular: false,
    },
    {
      name: "Website Design & Redesign",
      price: "Starting at $1,800",
      description: "Build a new website from scratch or redesign your existing site. Gets you more phone calls and jobs",
      features: [
        "Brand new website (5 pages)",
        "Mobile-friendly design",
        "Fast loading (< 2.5 seconds)",
        "Contact forms that work",
        "Set up for Google search",
        "Delivered in 1-2 weeks",
        "30 days of support",
      ],
      popular: true,
    },
    {
      name: "Complete Package",
      price: "Starting at $3,500",
      description: "Everything you need to dominate local search and get more jobs",
      features: [
        "Complete website design or redesign (10 pages)",
        "Lightning fast performance",
        "Show up first in local Google searches",
        "Google Business Profile optimization",
        "Get more phone calls",
        "3 months SEO support",
        "Monthly performance reports",
        "Delivered in 2-3 weeks",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative text-white pt-32 pb-24 md:py-40 overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/abstract_bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#000B16]/60"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Transparent Pricing for <span className="text-primary-400">Service Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              No hidden fees. No surprises. Just clear pricing that pays for itself with more calls and booked jobs. Websites delivered in 1-2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <Section className="py-24 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-[2.5rem] p-10 shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-premium group ${
                tier.popular ? "lg:scale-105 border-primary-950 ring-4 ring-primary-50 z-10" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-primary-950 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-primary-950 tracking-tighter">
                    {tier.price.split(' ')[tier.price.split(' ').length - 1]}
                  </span>
                  <span className="text-neutral-400 font-light">
                    {tier.price.split(' ').slice(0, -1).join(' ')}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mt-2">One-time investment</p>
              </div>

              <ul className="space-y-4 mb-10 pb-10 border-b border-neutral-100">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-600 font-light text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                href="/contact"
                className="w-full py-5 text-lg"
                variant={tier.popular ? "primary" : "secondary"}
              >
                Get Started →
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Guarantee Section */}
      <Section className="bg-emerald-50/20 backdrop-blur-sm py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white text-emerald-600 mb-8 shadow-sm border border-emerald-100">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Triple Guarantee
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
              We remove all the risk. You get a fast, high-performing website that gets you more calls and jobs.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Fast Delivery</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Delivered in <span className="font-bold text-emerald-600">1-2 weeks</span> or it's <span className="font-bold text-emerald-600">free</span>.
              <span className="text-xs text-neutral-400 block mt-4 italic">Assumes prompt feedback.</span>
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Lightning Fast</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Loads in under <span className="font-bold text-emerald-600">2.5 seconds</span> or we <span className="font-bold text-emerald-600">fix it free</span>.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">100% Refund</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Not happy? <span className="font-bold text-emerald-600">100% refund</span> in first <span className="font-bold text-emerald-600">30 days</span>.
            </p>
          </div>
        </div>
        </div>
      </Section>

      {/* Custom Quote Section */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-neutral-600 mb-8 font-light leading-relaxed">
                Every service business has different needs. If you need a custom package or have specific requirements, we'll create a tailored solution that fits your business and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/contact">Get a Custom Quote</CTAButton>
              </div>
            </div>
            <div className="bg-neutral-50/50 rounded-[2.5rem] p-10 border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
                What's Included:
              </h3>
              <div className="space-y-4">
                {[
                  "Detailed project scope",
                  "Timeline & milestones",
                  "Transparent pricing",
                  "Support & maintenance options"
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary-950 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-neutral-50/50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 text-center tracking-tight">
            Pricing FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Do you offer payment plans?",
                a: "Yes! For larger projects, we offer flexible payment plans. We typically require 50% upfront and 50% upon completion, but we can work with you to create a schedule that fits your budget."
              },
              {
                q: "What about updates later?",
                a: "All packages include a support period. After that, we offer maintenance packages starting at $150/month for updates, backups, and ongoing support."
              },
              {
                q: "Can I add services later?",
                a: "Absolutely! Many clients start with one service and add more as they see results. We'll prorate any additional services based on your existing package."
              },
              {
                q: "Do you offer refunds?",
                a: "We're confident in our work and offer a 100% money-back guarantee. If you're not happy with your website, we offer a full refund within 30 days. No questions asked."
              }
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-primary-950 text-white py-24 md:py-40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Ready to Get More Calls & <span className="text-primary-400">Booked Jobs?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
            Book a free 15-minute call to discuss your needs and get a custom quote. ROI often starts in the first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={CALENDLY_URL} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              Book Your Free Call →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              Get Your Free Audit
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

