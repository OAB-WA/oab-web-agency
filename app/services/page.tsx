"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { PaintBrushIcon, BoltIcon, MapPinIcon, ChartBarIcon } from "@/components/Icons";
import { CALENDLY_URL } from "@/lib/constants";

export default function Services() {
  const services = [
    {
      title: "Website Design & Redesign for Service Businesses",
      description:
        "We build brand new websites from scratch or redesign your existing site—either way, we focus on getting you phone calls and booked jobs, not just making it look pretty. Your new site will be fast, mobile-friendly, and designed to convert visitors into customers. Perfect whether you're starting fresh or need to improve your current website.",
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
        "Your website is slow, and it's costing you customers to competitors. We optimize your existing site for speed and Core Web Vitals. Faster sites rank higher, convert better, and keep visitors from leaving before they even see your services.",
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
        "Turn more website visitors into phone calls and booked jobs. We analyze your site's performance, identify what's stopping people from calling, and optimize forms, CTAs, and user experience to maximize conversions.",
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
              Services That Get Service Businesses More Jobs
            </h1>
            <p className="text-xl text-white/90">
              Everything you need to turn your website into a lead-generating machine that actually pays for itself
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br bg-[#001B3A] text-white mb-6 shadow-lg">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#001B3A] mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Ready to get started?</p>
                  <CTAButton href="/contact">Get a Free Consultation</CTAButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free 15-minute strategy call (no sales pitch). We'll analyze your current website (if you have one) and show you exactly what's costing you calls and jobs, then recommend the best path forward. Don't have a website yet? We'll discuss building a new one from scratch.
          </p>
          <CTAButton href={CALENDLY_URL}>Book Your Free Strategy Call</CTAButton>
        </div>
      </Section>
    </>
  );
}

