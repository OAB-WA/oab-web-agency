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
        "We guarantee delivery within 1-2 weeks for new websites and redesigns, or it's free. This timeline assumes prompt client feedback and content delivery. This is part of our triple guarantee that also includes a 2.5-second load time guarantee and our 'Calls or It's Free' performance guarantee. We're that confident in our work.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a performance-based 'Calls or It's Free' guarantee. If we don't increase your inbound phone call volume (or generate your first leads if you're starting from scratch) within 30 days of launch, we'll provide a 100% refund. No questions asked. This removes all the risk—you get results or you don't pay.",
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
        "We offer transparent pricing starting at $950 for lead-gen landing pages, $1,000 for speed optimization, $2,400 for new websites and redesigns, and $3,500 for complete packages. See our pricing page for full details. Website costs vary based on your specific needs, and we offer custom quotes after understanding your goals. Factors that affect pricing include: number of pages, custom features, e-commerce functionality, and ongoing maintenance needs. Contact us for a free consultation and quote.",
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
        "Absolutely! We build brand new websites from scratch for businesses that don't have a website yet. Whether you're starting fresh or need a complete redesign, we'll create a high-converting website that gets you more calls and booked jobs. The process is the same. We'll work with you to understand your business, target customers, and goals, then build a fast, mobile-friendly website optimized for local search.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes! We can redesign your existing website while preserving your content and improving the design, speed, and conversion rates. We'll analyze your current site and show you exactly what needs improvement before we start. Many clients see 2-3x more leads after a redesign.",
    },
    {
      question: "What makes your websites different from others?",
      answer:
        "We focus on conversion optimization, not just aesthetics. Every element is designed to generate leads and phone calls. We also prioritize speed (Core Web Vitals), local SEO, and mobile experience. These are all critical factors for service businesses. Our websites are built to pay for themselves with more calls and booked jobs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent">
      <FAQSchema faqs={faqs} />
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
              Frequently Asked <span className="text-primary-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about our high-performance websites and lead-generation strategy.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-neutral-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-xl font-bold text-gray-900 pr-8 tracking-tight group-hover:text-primary-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "bg-primary-950 text-white rotate-180" : "bg-neutral-50 text-primary-950"
                  }`}>
                    <svg
                      className="w-5 h-5"
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
                  </div>
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
                      <div className="px-8 pb-8 pt-0 border-t border-neutral-50 mt-2">
                        <p className="text-neutral-600 leading-relaxed font-light text-lg pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center bg-neutral-50/50 p-12 rounded-[3rem] border border-neutral-100 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Still have questions?
            </h3>
            <p className="text-xl text-neutral-600 font-light mb-10 leading-relaxed max-w-xl mx-auto">
              We're here to help! Get in touch and we'll answer any questions
              you have within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary px-10 py-4 text-lg font-bold"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

