import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Refund and Cancellation Policy",
  description:
    "Refund and cancellation terms for services provided by Trendwave Technologies / TrendWave Technologies Pvt Ltd.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-white pt-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600">
            Please read this policy carefully to understand how cancellations and refunds are handled for our services.
          </p>
        </div>

        <main className="space-y-12 text-gray-900">
          <section id="introduction" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              1. Introduction
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This Refund and Cancellation Policy outlines the terms under which payments made to Trendwave
                Tech for services and solutions are handled. By engaging with our services, clients agree to the
                terms stated in this Policy.
              </p>
            </div>
          </section>

          <section id="nature-of-services" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              2. Nature of Services
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trendwave Technologies provides customized technology services including software development, IT
                infrastructure deployment, networking, and surveillance or security system implementation.
              </p>
              <p>
                Due to the customized and project-based nature of our services, refund eligibility is limited and
                subject to the conditions outlined below.
              </p>
            </div>
          </section>

          <section id="cancellation-policy" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              3. Cancellation Policy
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  a. Cancellation Before Project Initiation
                </h3>
                <p>
                  Clients may request cancellation of services before the commencement of work. In such cases:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>
                    Any advance payment may be refunded after deducting applicable administrative or consultation
                    charges.
                  </li>
                  <li>
                    Any third-party costs already incurred (licenses, hardware procurement, and related expenses)
                    shall be non-refundable.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  b. Cancellation After Project Initiation
                </h3>
                <p>
                  Once the project has commenced, cancellation requests will be considered under the following
                  conditions:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>Charges will apply for work completed up to the date of cancellation.</li>
                  <li>Payments made for completed milestones shall be non-refundable.</li>
                  <li>
                    Any resources allocated, procurement completed, or third-party costs incurred will be billed
                    accordingly.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  c. Cancellation of Ongoing Services (AMC / Support)
                </h3>
                <p>
                  For Annual Maintenance Contracts (AMC) or ongoing support services:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>Cancellation may be allowed with prior written notice.</li>
                  <li>
                    Charges will be applicable for services already delivered up to the cancellation date.
                  </li>
                  <li>
                    Remaining unused service period may be reviewed on a case-by-case basis.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="refund-policy" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              4. Refund Policy
            </h2>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">a. General Refund Terms</h3>
                <p>
                  Refunds, if applicable, shall be processed only under valid circumstances such as:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>Duplicate payment.</li>
                  <li>Excess payment.</li>
                  <li>Cancellation approved as per policy terms.</li>
                </ul>
                <p>All refunds are subject to internal verification and approval.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">b. Non-Refundable Components</h3>
                <p>The following are strictly non-refundable:</p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>Payments for completed project milestones.</li>
                  <li>Custom development work already delivered or in progress.</li>
                  <li>Third-party products, licenses, or hardware.</li>
                  <li>Any services already rendered.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">c. Partial Refunds</h3>
                <p>In cases where partial work has been completed:</p>
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li>Refunds may be considered only for the unexecuted portion of the project.</li>
                  <li>
                    The amount will be calculated after deducting work completed and applicable costs.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="refund-processing" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              5. Refund Processing
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Approved refunds shall be processed within a reasonable time frame through the original mode of
                payment or any other mutually agreed method.
              </p>
              <p>
                Processing timelines may vary depending on banking or payment gateway procedures.
              </p>
            </div>
          </section>

          <section id="third-party-costs" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              6. Third-Party Costs and Dependencies
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Any third-party expenses incurred during project execution, including but not limited to hardware
                procurement, licensing fees, or external services, are non-refundable and will be billed as
                applicable.
              </p>
            </div>
          </section>

          <section id="dispute-resolution" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              7. Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In case of any disputes related to refunds or cancellations, both parties agree to resolve the
                matter through mutual discussion and in accordance with the terms defined in the service
                agreement.
              </p>
            </div>
          </section>

          <section id="policy-updates" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              8. Policy Updates
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Trendwave Technologies reserves the right to modify or update this Refund &amp; Cancellation Policy at any
                time. Updates will be effective upon publication on the website.
              </p>
            </div>
          </section>

          <section id="contact-information" className="scroll-mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
              9. Contact Information
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="font-semibold">
                For any queries or requests related to cancellations or refunds, please contact:
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
