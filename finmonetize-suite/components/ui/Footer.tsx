import Link from "next/link";
import { StickyFooterAd } from "@/components/ads";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="border-t border-gray-200 bg-white pb-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-blue-600">FinMonetize</span>
              <span className="text-xl font-semibold text-gray-800">Suite</span>
            </Link>
            <p className="text-sm text-gray-600">
              Enterprise-grade financial calculators and analytics tools for publishers.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/tools/monetization/adsense-rpm-calculator" className="hover:text-blue-600 transition-colors">
                  AdSense RPM Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/finance/mortgage-amortization" className="hover:text-blue-600 transition-colors">
                  Mortgage Amortization
                </Link>
              </li>
              <li>
                <Link href="/tools/legal/legal-fee-estimator" className="hover:text-blue-600 transition-colors">
                  Legal Fee Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-blue-600 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            &copy; {currentYear} FinMonetize Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
    {/* Mobile Anchor Ad - Sticky Footer */}
    <StickyFooterAd />
  </>
  );
}
