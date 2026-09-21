import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Trendwave Technologies covering how we collect, use and protect information submitted through trendwavetech.com.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white pt-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Please read this Privacy Policy carefully to understand how we collect, use, and protect your information.
          </p>
        </div>

        <main className="space-y-12 text-gray-900">
          <section id="introduction" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trendwave Technologies is committed to protecting the privacy and confidentiality of users and clients.
                This Privacy Policy explains how we collect, use, store, and protect personal information shared
                through our website and during service engagements.
              </p>
            </div>
          </section>

          <section id="information-we-collect" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>We may collect and process the following types of information:</p>

              <div className="space-y-2">
                <p className="font-semibold">a. Personal Information</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold">b. Business Information</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Company name</li>
                  <li>Project requirements and related details</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-semibold">c. Technical Information</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>IP address</li>
                  <li>Browser type and device information</li>
                  <li>Website usage data (through cookies or analytics tools)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="purpose-of-data-collection" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              3. Purpose of Data Collection
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>The information collected is used for the following purposes:</p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>To respond to inquiries and provide requested services</li>
                <li>To understand user requirements and propose suitable solutions</li>
                <li>To improve our services, website functionality, and communication</li>
                <li>To maintain internal records and project documentation</li>
                <li>To comply with applicable legal and regulatory requirements</li>
              </ul>
            </div>
          </section>

          <section id="data-sharing" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trendwave Technologies does not sell, rent, or trade personal information. Information may be shared only
                under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>With internal teams involved in project execution</li>
                <li>With trusted third-party vendors or partners strictly for service delivery</li>
                <li>When required by law, regulation, or legal process</li>
              </ul>
              <p>
                All such sharing is done with appropriate confidentiality and security measures.
              </p>
            </div>
          </section>

          <section id="data-security" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              5. Data Security
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We implement reasonable technical and organizational safeguards to protect personal data from
                unauthorized access, misuse, alteration, or disclosure.
              </p>
              <p>
                However, while we strive to protect your information, no system can guarantee absolute security.
              </p>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>Enhance user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance</li>
              </ul>
              <p>Users may control or disable cookies through browser settings.</p>
            </div>
          </section>

          <section id="third-party-links" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              7. Third-Party Links
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The website may contain links to third-party websites. Trendwave Technologies is not responsible for the
                privacy practices, policies, or content of such external websites.
              </p>
              <p>
                Users are advised to review the privacy policies of those websites separately.
              </p>
            </div>
          </section>

          <section id="data-retention" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              8. Data Retention
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes outlined in
                this Policy or as required by applicable laws and regulations.
              </p>
            </div>
          </section>

          <section id="user-rights" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              9. User Rights
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Subject to applicable laws, users may request:</p>
              <ul className="list-disc list-inside space-y-3 ml-2">
                <li>Access to their personal information</li>
                <li>Correction or update of inaccurate data</li>
                <li>Deletion of personal data (where applicable)</li>
              </ul>
              <p>Requests may be made via email.</p>
            </div>
          </section>

          <section id="policy-updates" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              10. Updates to Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trendwave Technologies reserves the right to update this Privacy Policy at any time. Changes will be
                reflected on this page, and continued use of the website constitutes acceptance of the updated
                Policy.
              </p>
            </div>
          </section>

          <section id="contact-information" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              11. Contact Information
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="font-semibold">
                For any questions, concerns, or requests related to this Privacy Policy, you may contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:office@trendwavetech.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  office@trendwavetech.com
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
