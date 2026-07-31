import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            FinMonetize Suite
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Enterprise-grade financial calculators and analytics tools for publishers. 
            Maximize your AdSense RPM and optimize your monetization strategy.
          </p>
          <Link
            href="/tools"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Explore Tools
          </Link>
        </div>
      </section>

      {/* Tools Directory Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Financial & Monetization Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monetization Tools */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Monetization Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate your AdSense RPM, estimate earnings, and optimize your ad revenue strategy.
              </p>
              <Link href="/tools/monetization/adsense-rpm-calculator" className="text-blue-600 hover:text-blue-700 font-medium">
                AdSense RPM Calculator →
              </Link>
            </div>

            {/* Finance Tools */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Finance Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Plan your finances with mortgage amortization schedules and loan calculators.
              </p>
              <Link href="/tools/finance/mortgage-amortization" className="text-blue-600 hover:text-blue-700 font-medium">
                Mortgage Amortization →
              </Link>
            </div>

            {/* Legal Tools */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Legal Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Estimate legal fees and understand cost structures for legal services.
              </p>
              <Link href="/tools/legal/legal-fee-estimator" className="text-blue-600 hover:text-blue-700 font-medium">
                Legal Fee Estimator →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose FinMonetize Suite?
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                FinMonetize Suite is your comprehensive resource for financial calculations and digital monetization analytics. 
                Whether you&apos;re a publisher looking to maximize AdSense revenue, a homeowner planning mortgage payments, 
                or someone seeking to understand legal fee structures, our suite of professional-grade calculators provides 
                accurate, real-time results.
              </p>
              <p className="mt-4">
                Our tools are built with precision and accuracy in mind, using industry-standard formulas and up-to-date 
                financial data. Each calculator is designed with a user-friendly interface that makes complex calculations 
                simple and accessible to everyone.
              </p>
              <p className="mt-4">
                We&apos;re committed to transparency and privacy. Our platform complies with GDPR and CCPA regulations, 
                ensuring your data is handled responsibly. We use cookies only with your consent and provide clear 
                information about how we use tracking technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using our professional tools today and take control of your financial future.
          </p>
          <Link
            href="/tools"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse All Tools
          </Link>
        </div>
      </section>
    </div>
  );
}
