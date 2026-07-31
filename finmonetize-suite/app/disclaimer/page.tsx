export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
      <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. No Professional Advice</h2>
          <p className="text-gray-700 mb-4">
            The information provided by FinMonetize Suite (&quot;the Website&quot;) is for general informational and educational purposes only. All information on the Website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Financial Advice Disclaimer:</strong> The content available on this Website, including financial calculators, analytics tools, and related documentation, does not constitute professional financial advice. You should always consult with a qualified financial advisor before making any investment decisions or financial commitments.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Legal Advice Disclaimer:</strong> The legal fee estimator and related content do not constitute legal advice. For legal matters, you should consult with a qualified attorney licensed in your jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Warranties</h2>
          <p className="text-gray-700 mb-4">
            The Website is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="text-gray-700 mb-4">
            We do not warrant that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The Website will be uninterrupted, secure, or error-free</li>
            <li>Defects will be corrected</li>
            <li>The Website or its servers are free of viruses or other harmful components</li>
            <li>The results obtained from using the Website will be accurate or reliable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Calculation Accuracy</h2>
          <p className="text-gray-700 mb-4">
            While we strive to ensure that our calculators provide accurate results based on the information you provide:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Calculations are estimates and should not be relied upon as exact figures</li>
            <li>Actual financial outcomes may vary significantly from calculated estimates</li>
            <li>We do not guarantee the accuracy of calculations for any specific purpose</li>
            <li>You should verify all calculations with appropriate professionals before making decisions</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Specifically regarding our AdSense RPM Calculator: Actual AdSense earnings depend on numerous factors including traffic quality, ad placement, seasonality, advertiser demand, and Google&apos;s algorithms. Our calculator provides estimates only and should not be used to predict actual earnings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Information</h2>
          <p className="text-gray-700 mb-4">
            The Website may contain information about third-party products, services, rates, or offerings. Such information is provided for convenience only and does not constitute an endorsement or recommendation. We are not responsible for the accuracy of third-party information or any actions you take based on such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Advertising Disclosure</h2>
          <p className="text-gray-700 mb-4">
            This Website displays advertisements through Google AdSense and other advertising networks. We may receive compensation when you click on advertisements or links to certain products or services. This compensation may influence the placement or prominence of certain content but does not affect our editorial independence.
          </p>
          <p className="text-gray-700 mb-4">
            In accordance with FTC guidelines, we disclose that we have financial relationships with companies whose products or services we mention on this Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Affiliate Disclosure</h2>
          <p className="text-gray-700 mb-4">
            Some links on this Website may be affiliate links, meaning we may earn a commission if you click through and make a purchase. This comes at no additional cost to you and helps support the maintenance of this Website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            Under no circumstances shall FinMonetize Suite, its owners, employees, agents, or affiliates be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>Loss of profits, revenue, or data</li>
            <li>Business interruption or procurement of substitute services</li>
            <li>Personal injury or property damage</li>
            <li>Any errors or omissions in content</li>
            <li>Any conduct or content of third parties</li>
          </ul>
          <p className="text-gray-700 mb-4">
            This limitation applies even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. External Links</h2>
          <p className="text-gray-700 mb-4">
            The Website may contain links to external websites that are not provided or maintained by us. We are not responsible for the content, accuracy, or opinions expressed on such websites. Your use of external websites is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Disclaimer</h2>
          <p className="text-gray-700 mb-4">
            We may update this Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page and updating the &quot;Last updated&quot; date. You are advised to review this Disclaimer periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Disclaimer, please contact us:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>By email: disclaimer@finmonetizesuite.com</li>
            <li>Through our contact page: /contact</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
