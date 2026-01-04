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
    <>
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing for Service Businesses
            </h1>
            <p className="text-xl text-white/90">
              No hidden fees. No surprises. Just clear pricing that pays for itself with more calls and booked jobs. Most clients see ROI in the first month. Websites delivered in 1-2 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular
                  ? "border-[#001B3A] scale-105 md:scale-105"
                  : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#001B3A] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-[#001B3A] mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-gray-500">One-time or custom quote</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                href="/contact"
                className="w-full justify-center"
                variant={tier.popular ? "primary" : "secondary"}
              >
                Get Started
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Guarantee Section */}
      <Section className="bg-gradient-to-br from-green-50 to-emerald-50 border-y border-green-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-600 text-white mb-6 shadow-lg">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Triple Guarantee
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're that confident. Most clients see results in the first month.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
              </div>
              <p className="text-gray-700">
                Delivered in <span className="font-bold text-green-700">1-2 weeks</span> guaranteed, or it's <span className="font-bold text-green-700">free</span>.
                <span className="text-sm text-gray-600 block mt-1">(Timeline assumes prompt client feedback and content delivery)</span>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
              </div>
              <p className="text-gray-700">
                Site loads in under <span className="font-bold text-green-700">2.5 seconds</span> or we <span className="font-bold text-green-700">fix it free</span>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">100% Money-Back</h3>
              </div>
              <p className="text-gray-700">
                Not happy? <span className="font-bold text-green-700">100% refund</span> in first <span className="font-bold text-green-700">30 days</span>. No questions asked.
              </p>
            </div>
          </div>

          <div className="text-center bg-white rounded-xl p-6 shadow-lg border-2 border-green-300">
            <p className="text-lg text-gray-800 font-semibold">
              We remove all the risk. You get a fast, high-performing website that gets you more calls and jobs.
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Quote Section */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every service business has different needs. If you need a custom package or have specific requirements, we'll create a tailored solution that fits your business and budget.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What's Included in Every Custom Quote:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-[#001B3A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Detailed project scope</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-[#001B3A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Timeline & milestones</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-[#001B3A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Transparent pricing</span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-[#001B3A] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Support & maintenance options</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <CTAButton href="/contact">Get a Custom Quote</CTAButton>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Pricing FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do you offer payment plans?
              </h3>
              <p className="text-gray-600">
                Yes! For larger projects, we offer flexible payment plans. We
                typically require 50% upfront and 50% upon completion, but we
                can work with you to create a payment schedule that fits your
                budget.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What if I need changes after the project is complete?
              </h3>
              <p className="text-gray-600">
                All packages include a support period (30 days to 3 months
                depending on the package). After that, we offer maintenance
                packages starting at $150/month for updates, backups, and
                ongoing support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Can I add services later?
              </h3>
              <p className="text-gray-600">
                Absolutely! Many clients start with one service and add more as
                they see results. We'll prorate any additional services based on
                your existing package.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We're confident in our work and offer a 100% money-back guarantee.
                If you're not happy with your website, we offer a full refund within 30 days. No questions asked. This is part of our triple guarantee that removes all risk for you.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#001B3A] text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Calls & Booked Jobs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free 15-minute call (no sales pitch) to discuss your needs and get a custom quote. See how we can help you get more phone calls and jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a Free Call
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get a Free Audit or Consultation
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

