"use client";

import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const storedConsent = localStorage.getItem("gdpr_consent");
    if (storedConsent) {
      setConsentGiven(storedConsent === "true");
      if (storedConsent === "true") {
        updateGtagConsent(true);
      }
    } else {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const updateGtagConsent = (granted: boolean) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
        ad_user_data: granted ? "granted" : "denied",
        ad_personalization: granted ? "granted" : "denied",
      });
    }
  };

  const handleAccept = () => {
    setConsentGiven(true);
    localStorage.setItem("gdpr_consent", "true");
    updateGtagConsent(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setConsentGiven(false);
    localStorage.setItem("gdpr_consent", "false");
    updateGtagConsent(false);
    setIsVisible(false);
  };

  if (!isVisible || consentGiven !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-1">We value your privacy</p>
            <p>
              We use cookies and other tracking technologies to enhance your browsing experience, 
              analyze site traffic, and serve personalized advertisements. By clicking &quot;Accept All&quot;, 
              you consent to our use of cookies in accordance with our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
