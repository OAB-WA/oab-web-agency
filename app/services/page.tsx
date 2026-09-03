"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { PaintBrushIcon, BoltIcon, MapPinIcon, ChartBarIcon } from "@/components/Icons";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";
import FinalCTASection from "@/components/FinalCTASection";

export default function Services() {
  const services = [
    {
      title: "Conversion-First Website Design & Redesign",
      description:
        "We build brand new websites from scratch or rebuild your existing site. Every layout is engineered to get you inbound phone calls, scheduled bays, and quote requests. Your new site will be blazing fast, 100% mobile-friendly, and designed to turn local search intent into paying customers.",
      features: [
        "Mobile-first responsive architecture",
        "Fast loading times (< 2.5 seconds)",
        "Conversion-optimized CTA & phone placement",
        "Dedicated service-page silos",
        "Trust proof stack (licenses, reviews, warranties)",
        "Frictionless appointment & estimate forms",
      ],
      icon: "paintbrush",
    },
    {
      title: "Instant Speed & Core Web Vitals Optimization",
      description:
        "If your website is slow on mobile data, you're actively handing customers to competitors. We optimize your website for sub-2.5s speed and stellar Core Web Vitals (LCP, CLS, INP) so searchers stay on your page and convert.",
      features: [
        "Core Web Vitals optimization",
        "Image optimization (WebP/AVIF)",
        "Code minification & bundle reduction",
        "Zero template bloat",
        "CDN & caching architecture",
        "Real-device performance testing",
      ],
      icon: "bolt",
    },
    {
      title: "Local Search & Map Pack Dominance",
      description:
        "Get found by customers in your immediate service territory. Whether it's 'auto repair near me', 'brake repair [city]', 'emergency plumber near me', or 'AC repair [city]', we optimize your website structure, metadata, and Google Business Profile to capture top local rankings.",
      features: [
        "High-intent local keyword targeting",
        "Google Business Profile optimization",
        "Local schema markup (JSON-LD)",
        "Service-area radius architecture",
        "Review & rating integration",
        "City-specific landing pages",
      ],
      icon: "mappin",
    },
    {
      title: "Call & Quote Conversion Optimization",
      description:
        "Turn more website visitors into phone calls and scheduled jobs. We audit your user journey, eliminate lead leaks, and optimize your forms, click-to-call buttons, and trust badges to maximize conversion rates.",
      features: [
        "Website lead leak audit",
        "Click-to-call & form tracking",
        "Friction-free quote workflows",
        "CTA placement & copy testing",
        "Trust badge & guarantee placement",
        "Analytics & conversion tracking",
      ],
      icon: "chartbar",
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
              Services Built to Turn Local Searches <span className="text-emerald-400">Into Customers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Everything your local service business needs to capture high-intent search traffic, eliminate lead leaks, and drive more calls and booked jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-950 text-white mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {(() => {
                    const IconComponent = {
                      paintbrush: PaintBrushIcon,
                      bolt: BoltIcon,
                      mappin: MapPinIcon,
                      chartbar: ChartBarIcon,
                    }[service.icon] || PaintBrushIcon;
                    
                    return <IconComponent className="w-8 h-8" />;
                  })()}
                </div>
                <SectionHeader
                  align="left"
                  className="mb-8"
                  title={service.title}
                  subtitle={service.description}
                />
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary-950"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</CTAButton>
                </div>
              </div>
              <div
                className={`relative bg-neutral-50/50 rounded-[3rem] border border-neutral-100 p-8 sm:p-10 md:p-12 flex items-center justify-center overflow-hidden group min-h-[320px] sm:min-h-[360px] md:min-h-0 md:aspect-square ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                   <div className="w-24 h-24 bg-white rounded-3xl shadow-premium flex items-center justify-center mx-auto mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                      {(() => {
                        const IconComponent = {
                          paintbrush: PaintBrushIcon,
                          bolt: BoltIcon,
                          mappin: MapPinIcon,
                          chartbar: ChartBarIcon,
                        }[service.icon] || PaintBrushIcon;
                        
                        return <IconComponent className="w-10 h-10 text-primary-950" />;
                      })()}
                   </div>
                   <p className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Ready to see results?</p>
                   <p className="text-neutral-500 font-light mb-8 max-w-xs mx-auto">Get a custom strategy for your {service.title.split(' ')[0].toLowerCase()} needs.</p>
                   <CTAButton href="/contact" variant="secondary">Send a Message</CTAButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <FinalCTASection
        variant="dark"
        title="Not Sure Which Service You Need?"
        subtitle="Request a quote or book a free 15-minute strategy call (no sales pitch). We'll review your situation (whether you have a website or not) and show you exactly what's costing you calls and jobs, then recommend the best path forward."
      />
    </div>
  );
}

