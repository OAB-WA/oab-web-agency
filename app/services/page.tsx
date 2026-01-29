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
      title: "Website Design & Redesign for Service Businesses",
      description:
        "We build brand new websites from scratch or redesign your existing site. Either way, we focus on getting you phone calls and booked jobs, not just making it look pretty. Your new site will be fast, mobile-friendly, and designed to turn visitors into leads and calls. Perfect whether you're starting fresh or need to improve your current website.",
      features: [
        "Mobile-responsive design",
        "Fast loading times (< 2.5 seconds)",
        "Conversion-optimized layouts",
        "Clear call-to-action buttons",
        "Trust-building elements",
        "Easy-to-use contact forms",
      ],
      icon: "paintbrush",
    },
    {
      title: "Speed Up Your Slow Website",
      description:
        "If your website is slow, it's costing you customers to competitors. We optimize your site (new or existing) for speed and Core Web Vitals. Faster sites rank higher, generate more leads, and keep visitors from leaving before they even see your services.",
      features: [
        "Core Web Vitals optimization",
        "Image optimization",
        "Code minification",
        "Caching strategies",
        "CDN setup",
        "Performance monitoring",
      ],
      icon: "bolt",
    },
    {
      title: "Get Found When Customers Search Locally",
      description:
        "Get found by customers in your area when they search for your services locally. Whether it's 'plumber near me', 'HVAC repair [your city]', or any other local service search, we optimize your website for local search, improve your Google Business Profile, and help you rank higher than your competitors.",
      features: [
        "Local keyword optimization",
        "Google Business Profile optimization",
        "Local schema markup",
        "Citation building",
        "Review management",
        "Local content strategy",
      ],
      icon: "mappin",
    },
    {
      title: "Turn More Visitors Into Phone Calls",
      description:
        "Turn more website visitors into phone calls and booked jobs. Whether you have a new site or an existing one, we analyze performance, identify what's stopping people from calling, and optimize forms, CTAs, and user experience to maximize conversions.",
      features: [
        "Conversion rate analysis",
        "A/B testing",
        "Form optimization",
        "CTA placement & design",
        "User experience improvements",
        "Heatmap & analytics review",
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
              Services That Get Service Businesses <span className="text-primary-400">More Jobs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Everything you need to turn your website into a lead-generating machine that actually pays for itself
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

