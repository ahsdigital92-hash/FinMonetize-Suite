'use client';

import React, { useState, useMemo } from 'react';

interface RpmCalculatorState {
  revenue: number;
  pageViews: number;
}

const AdSenseRpmCalculator: React.FC = () => {
  const [state, setState] = useState<RpmCalculatorState>({
    revenue: 0,
    pageViews: 0,
  });

  const rpm = useMemo(() => {
    if (state.pageViews === 0) return 0;
    return (state.revenue / state.pageViews) * 1000;
  }, [state.revenue, state.pageViews]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">AdSense RPM Calculator</h2>
      <p className="text-gray-600 mb-6">
        Calculate your Revenue Per Mille (RPM) to understand how much you earn per 1,000 page views.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">
            Total Revenue ($)
          </label>
          <input
            type="number"
            id="revenue"
            name="revenue"
            value={state.revenue || ''}
            onChange={handleInputChange}
            placeholder="Enter total revenue"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label htmlFor="pageViews" className="block text-sm font-medium text-gray-700 mb-1">
            Total Page Views
          </label>
          <input
            type="number"
            id="pageViews"
            name="pageViews"
            value={state.pageViews || ''}
            onChange={handleInputChange}
            placeholder="Enter total page views"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            step="1"
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Your RPM</p>
            <p className="text-4xl font-bold text-blue-600">${rpm.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">
              Revenue per 1,000 page views
            </p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600">
            <strong>Formula:</strong> RPM = (Revenue / Page Views) × 1,000
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Example: $50 revenue / 10,000 page views × 1,000 = $5.00 RPM
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdSenseRpmCalculator;
