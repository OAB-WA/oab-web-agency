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
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
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
              <p className="text-gray-700 leading-relaxed">
                Payment terms will be specified in individual project agreements.
                Generally, we require a deposit before beginning work, with
                remaining balance due upon project completion or according to
                agreed milestones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, you will own the custom website and content
                created specifically for your project. We retain the right to
                use your project as a portfolio example unless otherwise agreed
                in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Client Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing accurate information and content</li>
                <li>Timely feedback and approvals</li>
                <li>Payment according to agreed terms</li>
                <li>Maintaining backups of their website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                OAB Web Agency shall not be liable for any indirect, incidental,
                special, or consequential damages resulting from the use or
                inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Contact
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
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}

