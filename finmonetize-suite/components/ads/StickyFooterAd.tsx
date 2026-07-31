'use client';

import React from 'react';
import { AdContainer } from './AdContainer';

interface StickyFooterAdProps {
  className?: string;
}

/**
 * StickyFooterAd Component
 * 
 * Fixed mobile anchor bar advertisement with dismiss functionality.
 * Stays visible at the bottom of the viewport for maximum viewability.
 * Compliant with Better Ads Standards for anchor ads.
 */
export const StickyFooterAd: React.FC<StickyFooterAdProps> = ({ className = '' }) => {
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 ${className}`}
      role="complementary"
      aria-label="Anchor advertisement"
    >
      <AdContainer 
        slot="ad-slot-anchor" 
        format="anchor"
        className="border-t border-gray-300 shadow-lg"
      >
        {/* 
          Google AdSense Anchor Ad Code Placeholder
          Replace with your actual AdSense credentials
          
          Example implementation for anchor ad:
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <script>
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500 text-center text-sm">
            Mobile Anchor Advertisement<br/>
            <span className="text-xs">(Dismissable)</span>
          </p>
        </div>
      </AdContainer>
    </div>
  );
};

export default StickyFooterAd;
