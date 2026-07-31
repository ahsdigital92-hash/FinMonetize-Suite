import Link from "next/link";

export const metadata = {
  title: "About Us - FinMonetize Suite",
  description: "Learn about FinMonetize Suite, our mission to provide accurate financial calculators and monetization tools for publishers worldwide.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About FinMonetize Suite</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            FinMonetize Suite was founded with a simple mission: to provide accurate, accessible, and professional-grade financial calculation tools to everyone. Whether you&apos;re a digital publisher looking to maximize your AdSense revenue, a homeowner planning your mortgage payments, or someone seeking to understand legal fee structures, we&apos;re here to help.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that complex financial calculations should be straightforward and transparent. Our tools are designed to demystify financial concepts and empower users to make informed decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-4">
            Our suite of tools includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>AdSense RPM Calculator:</strong> Calculate your Revenue Per Mille (RPM) and optimize your ad monetization strategy with precise analytics.</li>
            <li><strong>Mortgage Amortization Calculator:</strong> Plan your home loan payments with detailed amortization schedules and interest breakdowns.</li>
            <li><strong>Legal Fee Estimator:</strong> Understand potential legal costs and fee structures before engaging legal services.</li>
            <li><strong>Additional Financial Tools:</strong> We continuously expand our toolkit to meet the evolving needs of our users.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Accuracy</h2>
          <p className="text-gray-700 mb-4">
            We understand that financial decisions require reliable information. That&apos;s why we:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Use industry-standard formulas and calculation methods</li>
            <li>Regularly audit and update our calculators</li>
            <li>Stay current with financial regulations and best practices</li>
            <li>Provide clear documentation about how each calculation works</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Transparency</h2>
          <p className="text-gray-700 mb-4">
            Your privacy matters to us. We are committed to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Complying with GDPR, CCPA, and other privacy regulations</li>
            <li>Implementing Google Consent Mode v2 for transparent cookie management</li>
            <li>Being clear about our use of advertising and affiliate links</li>
            <li>Never selling your personal information to third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-4">
            FinMonetize Suite is built and maintained by a team of financial professionals, software engineers, and digital publishing experts. We combine deep domain knowledge with technical excellence to deliver tools that are both powerful and easy to use.
          </p>
          <p className="text-gray-700 mb-4">
            Our team has extensive experience in:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Digital advertising and AdSense optimization</li>
            <li>Financial planning and analysis</li>
            <li>Software development and user experience design</li>
            <li>SEO and content monetization strategies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We&apos;d love to hear from you! Whether you have questions about our tools, suggestions for improvements, or just want to say hello, please don&apos;t hesitate to reach out.
          </p>
          <p className="text-gray-700 mb-4">
            You can contact us through our <Link href="/contact" className="text-blue-600 hover:underline">Contact page</Link> or via email at info@finmonetizesuite.com.
          </p>
        </section>
      </div>
    </div>
  );
}
