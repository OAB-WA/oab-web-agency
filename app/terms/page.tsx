import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for OAB Web Agency. Please read these terms carefully before using our services.",
};

export default function TermsOfService() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#001B3A] to-[#001022] text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90">
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Key Points Summary */}
          <div className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 p-6 rounded-xl border-2 border-[#001B3A]/20 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Points</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#001B3A] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Delivery Guarantee:</strong> 1-2 weeks for new websites and redesigns, 2-3 weeks for complete packages, or it's free (assumes prompt client feedback)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#001B3A] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>100% Money-Back:</strong> Full refund within 30 days if not satisfied</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#001B3A] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Payment:</strong> 50% upfront, 50% upon completion</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#001B3A] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Revisions:</strong> 2 rounds of revisions included in all projects</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OAB Web Agency provides website design, development, SEO, and
                related digital marketing services. All services are provided
                subject to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Written agreements or contracts</li>
                <li>Payment terms as specified in project proposals</li>
                <li>Project timelines and deliverables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms will be specified in individual project agreements.
                Generally, we require a 50% deposit before beginning work, with
                the remaining 50% balance due upon project completion or according to
                agreed milestones. Payment plans are available for larger projects.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All prices are in USD unless otherwise specified. Late payments may
                result in project delays or suspension of services. We accept payment
                via bank transfer, credit card, or other methods as agreed upon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Guarantees and Warranties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer the following guarantees:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Delivery Guarantee:</strong> Websites are delivered within 1-2 weeks for new websites and redesigns, or 2-3 weeks for complete packages. If we fail to meet this timeline, the project is free. <em>(Timeline assumes prompt client feedback and content delivery)</em></li>
                <li><strong>Performance Guarantee:</strong> Your website will load in under 2.5 seconds, or we'll fix it free of charge.</li>
                <li><strong>Money-Back Guarantee:</strong> If you're not satisfied within 30 days of launch, we offer a 100% refund. No questions asked.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These guarantees apply only to the initial project delivery and do not
                cover ongoing maintenance, hosting, or third-party services. The
                performance guarantee applies to standard hosting conditions and may
                vary based on hosting provider performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 100% money-back guarantee if you're not satisfied with your
                website within 30 days of launch. To request a refund:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Contact us within 30 days of project launch</li>
                <li>Provide specific reasons for dissatisfaction</li>
                <li>Allow us 5 business days to process the refund</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Refunds will be issued to the original payment method. Once a refund
                is processed, all rights to the website and content transfer back to
                OAB Web Agency. Refunds are not available for completed projects
                beyond 30 days or for maintenance/hosting services. Partial refunds
                may be available for projects cancelled mid-development, calculated
                based on work completed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Revisions and Changes
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We include 2 rounds of revisions for design and content changes during
                the project. Additional revisions beyond this scope will be quoted
                separately. Changes requested after project completion are subject to
                our maintenance rates or will be quoted as separate projects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Client delays in providing feedback, content, or approvals may extend
                project timelines. We are not responsible for delays caused by client
                inaction. If client delays exceed 30 days without communication, we
                reserve the right to pause the project and may require reactivation fees.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Scope changes that significantly alter the project requirements may
                require additional fees and timeline adjustments, which will be
                communicated and agreed upon before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cancellation Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may cancel a project with written notice. Cancellation
                terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Client Cancellation:</strong> If you cancel before work begins, you'll receive a full refund. If work has begun, you'll be charged for completed work at our standard hourly rate, and the remainder will be refunded.</li>
                <li><strong>Our Cancellation:</strong> We reserve the right to cancel projects for non-payment, abusive behavior, or if the project scope changes significantly. In such cases, you'll receive a prorated refund for uncompleted work.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Cancellation requests must be submitted in writing via email or through
                our contact form. Refunds for cancellations will be processed within
                10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon full payment, you will own the custom website and content created
                specifically for your project. However:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>We retain the right to use your project as a portfolio example unless otherwise agreed in writing</li>
                <li>Third-party assets (stock images, fonts, plugins) may be subject to their own licensing terms</li>
                <li>Custom code and frameworks we've developed remain our intellectual property, but you have full usage rights for your website</li>
                <li>You own all content you provide (text, images, logos, brand assets)</li>
                <li>Open-source libraries and frameworks used in development remain under their respective licenses</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                If you wish to exclude your project from our portfolio, this must be
                agreed upon in writing before project completion. Portfolio usage
                rights do not include sharing proprietary business information or
                confidential content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may recommend or set up third-party services including hosting,
                domain registration, email services, analytics tools, and other
                digital services. These services are subject to their own terms and
                conditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for issues with third-party services, though
                we'll assist in resolving them when possible. Clients are responsible
                for maintaining their own accounts with third-party service providers
                and for any fees associated with those services. We may receive
                referral commissions from some service providers, which does not affect
                the pricing or recommendations we provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Client Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing accurate information and content in a timely manner</li>
                <li>Timely feedback and approvals (typically within 3-5 business days)</li>
                <li>Payment according to agreed terms</li>
                <li>Maintaining backups of their website and content</li>
                <li>Ensuring all content provided does not infringe on third-party rights</li>
                <li>Providing necessary access credentials for hosting, domains, and other services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Failure to provide timely feedback or content may result in project
                delays. We are not responsible for delays caused by client inaction
                or failure to provide necessary materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OAB Web Agency shall not be liable for any indirect, incidental,
                special, or consequential damages resulting from the use or
                inability to use our services. Our total liability for any claim
                shall not exceed the total amount paid by the client for the
                specific project in question.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                <li>Loss of data, revenue, or business opportunities</li>
                <li>Issues arising from third-party services or hosting providers</li>
                <li>Changes in search engine algorithms affecting SEO performance</li>
                <li>Client-provided content that infringes on third-party rights</li>
                <li>Delays caused by client inaction or failure to provide materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In the event of any dispute arising from these terms or our services,
                both parties agree to first attempt to resolve the matter through
                good faith negotiation. If a resolution cannot be reached within
                30 days, disputes may be resolved through mediation or arbitration
                as agreed upon by both parties. These terms are governed by the laws
                of the jurisdiction in which OAB Web Agency operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page. Continued
                use of our services after changes are posted constitutes acceptance
                of the modified terms. For existing projects, the terms in effect
                at the time of project agreement will apply unless both parties
                agree to updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions about these Terms of Service, please contact us
                at{" "}
                <a
                  href="/contact"
                  className="text-[#001B3A] hover:text-[#00152E] font-semibold"
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
    </>
  );
}

