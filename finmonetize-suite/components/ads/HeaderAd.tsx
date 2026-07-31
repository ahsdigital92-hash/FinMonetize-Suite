'use client';

import React from 'react';
import { AdContainer } from './AdContainer';

interface HeaderAdProps {
  className?: string;
}

/**
 * HeaderAd Component
 * 
 * Responsive leaderboard ad unit for the header section.
 * Optimized for desktop and tablet viewports.
 */
export const HeaderAd: React.FC<HeaderAdProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <AdContainer 
        slot="ad-slot-header" 
        format="leaderboard"
        className="border-b border-gray-200"
      >
        {/* 
          Google AdSense Header Leaderboard Code Placeholder
          Replace with your actual AdSense credentials
          
          Example implementation:
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-ad-layout-key="-fb+5w+4e-db+86"
            data-full-width-responsive="true"
          />
          <script>
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500 text-center text-sm">
            Header Leaderboard Advertisement<br/>
            <span className="text-xs">(Responsive)</span>
          </p>
        </div>
      </AdContainer>
    </div>
  );
};

export default HeaderAd;
