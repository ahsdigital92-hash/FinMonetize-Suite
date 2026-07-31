'use client';

import React from 'react';
import { AdContainer } from './AdContainer';

interface SidebarAdProps {
  className?: string;
  sticky?: boolean;
}

/**
 * SidebarAd Component
 * 
 * Sticky half-page ad unit for sidebar placement.
 * Maintains visibility during scroll for enhanced viewability.
 */
export const SidebarAd: React.FC<SidebarAdProps> = ({ 
  className = '',
  sticky = true 
}) => {
  return (
    <div 
      className={`w-full ${sticky ? 'sticky top-4' : ''} ${className}`}
      role="complementary"
      aria-label="Sidebar advertisement"
    >
      <AdContainer 
        slot="ad-slot-sidebar" 
        format="halfpage"
        className="rounded-lg shadow-sm border border-gray-200"
      >
        {/* 
          Google AdSense Sidebar Half-Page Code Placeholder
          Replace with your actual AdSense credentials
          
          Example implementation:
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="fluid"
            data-ad-layout-key="-fb+5w+4e-db+86"
          />
          <script>
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500 text-center text-sm">
            Sidebar Advertisement<br/>
            <span className="text-xs">(Sticky Half-Page)</span>
          </p>
        </div>
      </AdContainer>
    </div>
  );
};

export default SidebarAd;
