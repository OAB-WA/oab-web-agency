import type { Metadata } from "next";
import Section from "@/components/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for OAB Web Agency. Please read these terms carefully before using our services.",
};

export default function TermsOfService() {
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
              Terms of <span className="text-primary-400">Service</span>
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
        <div className="max-w-4xl mx-auto px-4">
          {/* Key Points Summary */}
          <div className="bg-neutral-50 p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Key Points</h2>
            <ul className="space-y-4 text-neutral-600 font-light">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-900 font-bold">Delivery Guarantee:</strong> 1-2 weeks for new websites and redesigns, 2-3 weeks for complete packages, or it's free (assumes prompt client feedback)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-900 font-bold">100% Money-Back:</strong> Full refund within 30 days if not satisfied</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-900 font-bold">Payment:</strong> 50% upfront, 50% upon completion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-900 font-bold">Revisions:</strong> 2 rounds of revisions included in all projects</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-neutral prose-lg max-w-none space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                2. Services
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                OAB Web Agency provides website design, development, SEO, and
                related digital marketing services. All services are provided
                subject to:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Written agreements or contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Payment terms as specified in project proposals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Project timelines and deliverables</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                3. Payment Terms
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                Payment terms will be specified in individual project agreements.
                Generally, we require a 50% deposit before beginning work, with
                the remaining 50% balance due upon project completion or according to
                agreed milestones. Payment plans are available for larger projects.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light">
                All prices are in USD unless otherwise specified. Late payments may
                result in project delays or suspension of services. We accept payment
                via bank transfer, credit card, or other methods as agreed upon.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                4. Guarantees and Warranties
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We offer the following guarantees:
              </p>
              <ul className="space-y-6 text-neutral-600 font-light mb-8">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <strong className="text-gray-900 font-bold block mb-1">Delivery Guarantee:</strong>
                    Websites are delivered within 1-2 weeks for new websites and redesigns, or 2-3 weeks for complete packages. If we fail to meet this timeline, the project is free. <em className="text-neutral-400 text-sm italic">(Timeline assumes prompt client feedback and content delivery)</em>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <strong className="text-gray-900 font-bold block mb-1">Performance Guarantee:</strong>
                    Your website will load in under 2.5 seconds, or we'll fix it free of charge.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">✓</div>
                  <div>
                    <strong className="text-gray-900 font-bold block mb-1">Money-Back Guarantee:</strong>
                    If you're not satisfied within 30 days of launch, we offer a 100% refund. No questions asked.
                  </div>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light pt-4 border-t border-neutral-100">
                These guarantees apply only to the initial project delivery and do not
                cover ongoing maintenance, hosting, or third-party services. The
                performance guarantee applies to standard hosting conditions and may
                vary based on hosting provider performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                5. Refund Policy
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We offer a 100% money-back guarantee if you're not satisfied with your
                website within 30 days of launch. To request a refund:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Contact us within 30 days of project launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Provide specific reasons for dissatisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Allow us 5 business days to process the refund</span>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light">
                Refunds will be issued to the original payment method. Once a refund
                is processed, all rights to the website and content transfer back to
                OAB Web Agency. Refunds are not available for completed projects
                beyond 30 days or for maintenance/hosting services. Partial refunds
                may be available for projects cancelled mid-development, calculated
                based on work completed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                6. Revisions and Changes
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We include 2 rounds of revisions for design and content changes during
                the project. Additional revisions beyond this scope will be quoted
                separately. Changes requested after project completion are subject to
                our maintenance rates or will be quoted as separate projects.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light mb-6">
                Client delays in providing feedback, content, or approvals may extend
                project timelines. We are not responsible for delays caused by client
                inaction. If client delays exceed 30 days without communication, we
                reserve the right to pause the project and may require reactivation fees.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light">
                Scope changes that significantly alter the project requirements may
                require additional fees and timeline adjustments, which will be
                communicated and agreed upon before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                7. Cancellation Policy
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 font-light">
                Either party may cancel a project with written notice. Cancellation
                terms are as follows:
              </p>
              <ul className="space-y-6 text-neutral-600 font-light mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-bold block mb-1">Client Cancellation:</strong>
                    If you cancel before work begins, you'll receive a full refund. If work has begun, you'll be charged for completed work at our standard hourly rate, and the remainder will be refunded.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 font-bold block mb-1">Our Cancellation:</strong>
                    We reserve the right to cancel projects for non-payment, abusive behavior, or if the project scope changes significantly. In such cases, you'll receive a prorated refund for uncompleted work.
                  </div>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light">
                Cancellation requests must be submitted in writing via email or through
                our contact form. Refunds for cancellations will be processed within
                10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                8. Intellectual Property
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8 font-light">
                Upon full payment, you will own the custom website and content created
                specifically for your project. However:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>We retain the right to use your project as a portfolio example unless otherwise agreed in writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Third-party assets (stock images, fonts, plugins) may be subject to their own licensing terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Custom code and frameworks we've developed remain our intellectual property, but you have full usage rights for your website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>You own all content you provide (text, images, logos, brand assets)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Open-source libraries and frameworks used in development remain under their respective licenses</span>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light">
                If you wish to exclude your project from our portfolio, this must be
                agreed upon in writing before project completion. Portfolio usage
                rights do not include sharing proprietary business information or
                confidential content.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                9. Third-Party Services
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                We may recommend or set up third-party services including hosting,
                domain registration, email services, analytics tools, and other
                digital services. These services are subject to their own terms and
                conditions.
              </p>
              <p className="text-neutral-600 leading-relaxed font-light">
                We are not responsible for issues with third-party services, though
                we'll assist in resolving them when possible. Clients are responsible
                for maintaining their own accounts with third-party service providers
                and for any fees associated with those services. We may receive
                referral commissions from some service providers, which does not affect
                the pricing or recommendations we provide.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                10. Client Responsibilities
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                Clients are responsible for:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Providing accurate information and content in a timely manner</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Timely feedback and approvals (typically within 3-5 business days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Payment according to agreed terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Maintaining backups of their website and content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Ensuring all content provided does not infringe on third-party rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Providing necessary access credentials for hosting, domains, and other services</span>
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed font-light">
                Failure to provide timely feedback or content may result in project
                delays. We are not responsible for delays caused by client inaction
                or failure to provide necessary materials.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                11. Limitation of Liability
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                OAB Web Agency shall not be liable for any indirect, incidental,
                special, or consequential damages resulting from the use or
                inability to use our services. Our total liability for any claim
                shall not exceed the total amount paid by the client for the
                specific project in question.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4 font-light">
                We are not responsible for:
              </p>
              <ul className="space-y-3 text-neutral-600 font-light mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Loss of data, revenue, or business opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Issues arising from third-party services or hosting providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Changes in search engine algorithms affecting SEO performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Client-provided content that infringes on third-party rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0"></div>
                  <span>Delays caused by client inaction or failure to provide materials</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                12. Dispute Resolution
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                In the event of any dispute arising from these terms or our services,
                both parties agree to first attempt to resolve the matter through
                good faith negotiation. If a resolution cannot be reached within
                30 days, disputes may be resolved through mediation or arbitration
                as agreed upon by both parties. These terms are governed by the laws
                of the jurisdiction in which OAB Web Agency operates.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                13. Changes to Terms
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page. Continued
                use of our services after changes are posted constitutes acceptance
                of the modified terms. For existing projects, the terms in effect
                at the time of project agreement will apply unless both parties
                agree to updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                14. Contact
              </h2>
              <p className="text-neutral-600 leading-relaxed font-light">
                For questions about these Terms of Service, please contact us
                at{" "}
                <a
                  href="/contact"
                  className="text-primary-600 hover:text-primary-800 font-bold underline decoration-primary-200 underline-offset-4"
                >
                  our contact page
                </a>
                . We aim to respond to all inquiries within 24-48 hours during
                business days.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}

