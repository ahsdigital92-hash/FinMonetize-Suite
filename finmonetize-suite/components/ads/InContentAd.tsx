'use client';

import React from 'react';
import { AdContainer } from './AdContainer';

interface InContentAdProps {
  className?: string;
}

/**
 * InContentAd Component
 * 
 * Fluid native ad unit designed for insertion within editorial content.
 * Optimized for high viewability and RPM yields.
 */
export const InContentAd: React.FC<InContentAdProps> = ({ className = '' }) => {
  return (
    <div className={`my-8 ${className}`}>
      <AdContainer 
        slot="ad-slot-incontent" 
        format="fluid"
        className="rounded-lg shadow-sm"
      >
        {/* 
          Google AdSense Code Placeholder
          Replace the data-ad-client and data-ad-slot with your actual AdSense credentials
          
          Example implementation:
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="fluid"
            data-full-width-responsive="true"
          />
          <script>
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500 text-center text-sm">
            In-Content Advertisement<br/>
            <span className="text-xs">(Native Fluid Unit)</span>
          </p>
        </div>
      </AdContainer>
    </div>
  );
};

export default InContentAd;
