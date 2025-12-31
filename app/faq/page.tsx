"use client";

import Section from "@/components/Section";
import FAQSchema from "@/components/FAQSchema";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the scope of your project. A simple website redesign typically takes 4-6 weeks, while a complete rebuild with custom features can take 8-12 weeks. We'll provide a detailed timeline in your project proposal.",
    },
    {
      question: "Do you work with service-based businesses only?",
      answer:
        "While we specialize in service-based businesses (plumbers, HVAC, electricians, contractors, etc.), we work with all types of businesses that need high-converting websites. Our expertise in conversion optimization benefits any business that relies on leads and phone calls.",
    },
    {
      question: "What's included in a website redesign?",
      answer:
        "Our website redesign includes: mobile-responsive design, performance optimization, SEO setup, conversion-focused layouts, contact forms, clear CTAs, and basic training on how to update your site. Additional features can be added based on your needs.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "Website costs vary based on your specific needs. We offer custom quotes after understanding your goals. Factors that affect pricing include: number of pages, custom features, e-commerce functionality, and ongoing maintenance needs. Contact us for a free consultation and quote.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All websites we build are fully responsive and optimized for mobile devices. Mobile optimization is essential since over 60% of web traffic comes from mobile devices, and Google prioritizes mobile-friendly sites in search results.",
    },
    {
      question: "Do you provide website hosting?",
      answer:
        "We can recommend reliable hosting providers and help you set up hosting. We typically recommend hosting providers that offer fast performance, good uptime, and excellent support. We can also manage hosting for you as part of a maintenance package.",
    },
    {
      question: "What if I need changes after the website is launched?",
      answer:
        "We offer maintenance packages for ongoing updates and support. You can also request one-off changes, which we'll quote based on the work required. Many clients prefer a monthly maintenance package for regular updates and peace of mind.",
    },
    {
      question: "How do you ensure my website gets found on Google?",
      answer:
        "We implement local SEO best practices including: optimizing your site for local keywords, setting up Google Business Profile, creating location-specific content, building local citations, and ensuring fast page speeds. We also provide ongoing SEO recommendations.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes! We can redesign your existing website while preserving your content and improving the design, speed, and conversion rates. We'll analyze your current site and show you exactly what needs improvement before we start.",
    },
    {
      question: "What makes your websites different from others?",
      answer:
        "We focus on conversion optimization, not just aesthetics. Every element is designed to generate leads and phone calls. We also prioritize speed (Core Web Vitals), local SEO, and mobile experience—all critical factors for service businesses.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQSchema faqs={faqs} />
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to know about our services
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#001B3A]"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#001B3A] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center bg-[#001B3A]/10 p-8 rounded-xl border border-[#001B3A]/30">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 mb-6">
              We're here to help! Get in touch and we'll answer any questions
              you have.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#001B3A] px-8 py-3 text-base font-semibold text-white hover:bg-[#00152E] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

