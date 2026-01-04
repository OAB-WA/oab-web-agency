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
      question: "What is your delivery guarantee?",
      answer:
        "We guarantee delivery within 1-2 weeks for new websites and redesigns, or it's free. Complete packages with SEO take 2-3 weeks. This timeline assumes prompt client feedback and content delivery. This is part of our triple guarantee that also includes a 2.5-second load time guarantee and a 30-day money-back guarantee. We're that confident in our work.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 100% money-back guarantee. If you're not satisfied with your website within 30 days of launch, we'll provide a full refund. No questions asked. This removes all risk for you. To request a refund, simply contact us within 30 days of project launch.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the scope of your project. A new website or simple redesign typically takes 1-2 weeks (assuming prompt client feedback and content delivery), while a complete package with SEO and additional features takes 2-3 weeks. We'll provide a detailed timeline in your project proposal. All projects are covered by our delivery guarantee.",
    },
    {
      question: "How does the free website audit work?",
      answer:
        "Simply fill out our free audit form with your website URL (if you have one). We'll analyze your site for speed issues, SEO problems, and conversion opportunities. Don't have a website? We'll provide a consultation on building a new one. You'll receive a detailed report within 24 hours showing exactly what's costing you leads or what you need to get started. No sales pitch, just actionable insights. The audit or consultation is completely free with no obligation.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "We include 2 rounds of revisions for design and content changes during the project. Additional revisions beyond this scope will be quoted separately. Our goal is to get your website right the first time, so we work closely with you during the design phase to ensure we understand your vision.",
    },
    {
      question: "Do you work with service-based businesses only?",
      answer:
        "While we specialize in service-based businesses (plumbers, HVAC, electricians, contractors, etc.), we work with all types of businesses that need high-converting websites. Our expertise in conversion optimization benefits any business that relies on leads and phone calls.",
    },
    {
      question: "What's included in a website design or redesign?",
      answer:
        "Whether we're building a new website or redesigning your existing one, we include: mobile-responsive design, performance optimization, SEO setup, conversion-focused layouts, contact forms, clear CTAs, and basic training on how to update your site. Additional features can be added based on your needs.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "We offer transparent pricing starting at $1,000 for speed optimization, $1,800 for new websites and redesigns, and $3,500 for complete packages. See our pricing page for full details. Website costs vary based on your specific needs, and we offer custom quotes after understanding your goals. Factors that affect pricing include: number of pages, custom features, e-commerce functionality, and ongoing maintenance needs. Contact us for a free consultation and quote.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes! For larger projects, we offer flexible payment plans. We typically require 50% upfront to begin work and 50% upon completion. We can work with you to create a payment schedule that fits your budget. Contact us to discuss payment options.",
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
      question: "What platform do you build websites on?",
      answer:
        "We build websites using modern, fast technologies including Next.js and React. This ensures your site loads quickly, ranks well in search engines, and provides an excellent user experience. We can also work with WordPress or other platforms if preferred. All websites are built with performance and SEO as top priorities.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes! We provide basic training on how to update your website content, including text, images, and basic page edits. For more complex changes, we offer maintenance packages starting at $150/month. Many clients prefer our maintenance packages for peace of mind and regular updates, while others enjoy the flexibility of making their own updates.",
    },
    {
      question: "What if I need changes after the website is launched?",
      answer:
        "We offer maintenance packages for ongoing updates and support. You can also request one-off changes, which we'll quote based on the work required. Many clients prefer a monthly maintenance package for regular updates and peace of mind. All packages include a support period (30 days to 3 months depending on the package).",
    },
    {
      question: "How quickly will I see SEO results?",
      answer:
        "SEO results typically begin appearing within 30-60 days, with more significant improvements in 3-6 months. However, every business is different. Local SEO for service businesses often shows faster results, especially for 'near me' searches. We'll provide monthly reports showing your progress, rankings, and traffic improvements.",
    },
    {
      question: "How do you ensure my website gets found on Google?",
      answer:
        "We implement local SEO best practices including: optimizing your site for local keywords, setting up Google Business Profile, creating location-specific content, building local citations, and ensuring fast page speeds. We also provide ongoing SEO recommendations and monthly performance reports with our complete packages.",
    },
    {
      question: "Do you build new websites for businesses without an existing site?",
      answer:
        "Absolutely! We build brand new websites from scratch for businesses that don't have a website yet. Whether you're starting fresh or need a complete redesign, we'll create a high-converting website that gets you more calls and booked jobs. The process is the same—we'll work with you to understand your business, target customers, and goals, then build a fast, mobile-friendly website optimized for local search.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes! We can redesign your existing website while preserving your content and improving the design, speed, and conversion rates. We'll analyze your current site and show you exactly what needs improvement before we start. Many clients see 2-3x more leads after a redesign.",
    },
    {
      question: "What makes your websites different from others?",
      answer:
        "We focus on conversion optimization, not just aesthetics. Every element is designed to generate leads and phone calls. We also prioritize speed (Core Web Vitals), local SEO, and mobile experience—all critical factors for service businesses. Our websites are built to pay for themselves with more calls and booked jobs.",
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
              className="btn-primary px-8 py-3"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

