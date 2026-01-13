import type { Metadata } from "next";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for OAB Web Agency. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-transparent">
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
              Privacy <span className="text-primary-400">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 prose prose-neutral prose-lg">
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                1. Information We Collect
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Fill out a contact form on our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Request a website audit or consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Subscribe to our newsletter</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Communicate with us via email or phone</span>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light">
                This information may include your name, email address, phone
                number, business name, and any other information you choose to
                provide.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Respond to your inquiries and provide customer service</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Send you information about our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Improve our website and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                3. Information Sharing
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light mb-6">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>With your consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>To comply with legal obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>To protect our rights and safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>With service providers who assist us in operating our website</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                4. Data Security
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                5. Cookies and Tracking
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                We may use cookies and similar tracking technologies to collect
                information about your browsing behavior. You can control cookie
                preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                6. Your Rights
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                You have the right to:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Access your personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Request deletion of your information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                7. Contact Us
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                If you have questions about this Privacy Policy, please contact
                us at{" "}
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-800 font-bold underline decoration-primary-200 underline-offset-4"
                >
                  our contact page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}

