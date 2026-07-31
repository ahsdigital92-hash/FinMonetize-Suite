'use client';

import React, { useEffect, useState } from 'react';

interface AdContainerProps {
  slot: 'ad-slot-header' | 'ad-slot-incontent' | 'ad-slot-sidebar' | 'ad-slot-anchor';
  format?: 'fluid' | 'rectangle' | 'leaderboard' | 'halfpage' | 'anchor';
  className?: string;
  children?: React.ReactNode;
}

/**
 * AdContainer Component - Zero-CLS Ad Wrapper
 * 
 * Implements strict min-height reservations to prevent Cumulative Layout Shift.
 * Includes visible "Advertisement" label as per AdSense policies.
 */
export const AdContainer: React.FC<AdContainerProps> = ({ 
  slot, 
  format = 'fluid', 
  className = '',
  children 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Define explicit min-heights for each ad slot to prevent CLS
  const getHeightStyles = () => {
    switch (slot) {
      case 'ad-slot-header':
        return { minHeight: '90px', maxHeight: '120px' };
      case 'ad-slot-incontent':
        return { minHeight: '250px', maxHeight: '300px' };
      case 'ad-slot-sidebar':
        return { minHeight: '600px', maxHeight: '650px' };
      case 'ad-slot-anchor':
        return { minHeight: '80px', maxHeight: '100px' };
      default:
        return { minHeight: '250px' };
    }
  };

  const heightStyles = getHeightStyles();

  // Handle dismissal for anchor ads
  const handleDismiss = () => {
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`ad-dismissed-${slot}`, 'true');
    }
  };

  // Check if anchor ad was previously dismissed
  useEffect(() => {
    if (slot === 'ad-slot-anchor') {
      const dismissed = localStorage.getItem(`ad-dismissed-${slot}`);
      if (dismissed) {
        setIsDismissed(true);
      }
    }
    
    // Simulate ad load for demonstration (replace with actual ad script callback)
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [slot]);

  if (isDismissed && slot === 'ad-slot-anchor') {
    return null;
  }

  return (
    <div
      className={`relative w-full bg-gray-50 border border-gray-200 ${className}`}
      style={heightStyles}
      role="complementary"
      aria-label="Advertisement"
    >
      {/* Advertisement Label */}
      <div className="absolute top-0 left-0 bg-gray-100 text-[10px] uppercase text-gray-500 px-2 py-1 z-10">
        Advertisement
      </div>

      {/* Dismiss Button for Anchor Ads */}
      {slot === 'ad-slot-anchor' && (
        <button
          onClick={handleDismiss}
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 p-1 z-20"
          aria-label="Close advertisement"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Ad Content Area */}
      <div className="w-full h-full flex items-center justify-center pt-6">
        {children ? (
          children
        ) : (
          <div className="text-gray-400 text-sm">
            {!isLoaded ? (
              <span className="animate-pulse">Loading ad...</span>
            ) : (
              <span>Ad space reserved ({format})</span>
            )}
          </div>
        )}
      </div>

      {/* Placeholder background to maintain layout stability */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-100 opacity-50 pointer-events-none"
          style={{ top: '20px' }}
        />
      )}
    </div>
  );
};

export default AdContainer;
