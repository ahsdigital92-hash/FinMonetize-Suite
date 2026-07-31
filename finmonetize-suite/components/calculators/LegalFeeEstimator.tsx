'use client';

import React, { useState, useMemo } from 'react';

interface LegalFeeState {
  caseType: string;
  complexity: string;
  hourlyRate: number;
  estimatedHours: number;
  flatFeeOption: boolean;
  flatFeeAmount: number;
}

const caseTypes = [
  { value: 'consultation', label: 'Legal Consultation' },
  { value: 'contract', label: 'Contract Review/Drafting' },
  { value: 'family', label: 'Family Law' },
  { value: 'criminal', label: 'Criminal Defense' },
  { value: 'personal-injury', label: 'Personal Injury' },
  { value: 'business', label: 'Business/Corporate Law' },
  { value: 'real-estate', label: 'Real Estate Law' },
  { value: 'immigration', label: 'Immigration Law' },
  { value: 'bankruptcy', label: 'Bankruptcy' },
  { value: 'employment', label: 'Employment Law' },
];

const complexityLevels = [
  { value: 'simple', label: 'Simple', multiplier: 1 },
  { value: 'moderate', label: 'Moderate', multiplier: 1.5 },
  { value: 'complex', label: 'Complex', multiplier: 2.5 },
  { value: 'highly-complex', label: 'Highly Complex', multiplier: 4 },
];

const LegalFeeEstimator: React.FC = () => {
  const [state, setState] = useState<LegalFeeState>({
    caseType: 'consultation',
    complexity: 'moderate',
    hourlyRate: 250,
    estimatedHours: 5,
    flatFeeOption: false,
    flatFeeAmount: 0,
  });

  const estimate = useMemo(() => {
    const complexityMultiplier = complexityLevels.find(c => c.value === state.complexity)?.multiplier || 1;
    
    let baseEstimate = state.hourlyRate * state.estimatedHours * complexityMultiplier;
    
    // Case type adjustments
    const caseTypeAdjustments: Record<string, number> = {
      'consultation': 0.8,
      'contract': 1,
      'family': 1.3,
      'criminal': 1.5,
      'personal-injury': 1.4,
      'business': 1.6,
      'real-estate': 1.2,
      'immigration': 1.3,
      'bankruptcy': 1.4,
      'employment': 1.3,
    };
    
    baseEstimate *= caseTypeAdjustments[state.caseType] || 1;
    
    // Additional costs (filing fees, research, etc.) - typically 10-20%
    const additionalCosts = baseEstimate * 0.15;
    
    const totalEstimate = baseEstimate + additionalCosts;
    
    return {
      baseFee: baseEstimate,
      additionalCosts,
      total: totalEstimate,
      flatFeeTotal: state.flatFeeAmount > 0 ? state.flatFeeAmount : null,
    };
  }, [state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setState((prev) => ({ ...prev, [name]: checked }));
    } else {
      setState((prev) => ({
        ...prev,
        [name]: name === 'hourlyRate' || name === 'estimatedHours' || name === 'flatFeeAmount' 
          ? parseFloat(value) || 0 
          : value,
      }));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Fee Estimator</h2>
      <p className="text-gray-600 mb-6">
        Estimate potential legal fees based on case type, complexity, and attorney rates. 
        <span className="block mt-2 text-xs text-gray-500">
          * This is an estimate only. Actual fees may vary significantly.
        </span>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-1">
              Case Type
            </label>
            <select
              id="caseType"
              name="caseType"
              value={state.caseType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {caseTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="complexity" className="block text-sm font-medium text-gray-700 mb-1">
              Case Complexity
            </label>
            <select
              id="complexity"
              name="complexity"
              value={state.complexity}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              {complexityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">
              Higher complexity increases estimated hours and costs
            </p>
          </div>

          <div>
            <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
              Attorney Hourly Rate ($)
            </label>
            <input
              type="number"
              id="hourlyRate"
              name="hourlyRate"
              value={state.hourlyRate || ''}
              onChange={handleInputChange}
              placeholder="Enter hourly rate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="50"
              max="1000"
              step="25"
            />
            <p className="mt-1 text-xs text-gray-500">
              Typical range: $150 - $500/hour depending on experience and location
            </p>
          </div>

          <div>
            <label htmlFor="estimatedHours" className="block text-sm font-medium text-gray-700 mb-1">
              Estimated Hours
            </label>
            <input
              type="number"
              id="estimatedHours"
              name="estimatedHours"
              value={state.estimatedHours || ''}
              onChange={handleInputChange}
              placeholder="Enter estimated hours"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="1000"
              step="1"
            />
          </div>

          <div className="pt-2 border-t border-gray-200">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="flatFeeOption"
                checked={state.flatFeeOption}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Use Flat Fee Instead</span>
            </label>
            
            {state.flatFeeOption && (
              <div className="mt-3">
                <label htmlFor="flatFeeAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Flat Fee Amount ($)
                </label>
                <input
                  type="number"
                  id="flatFeeAmount"
                  name="flatFeeAmount"
                  value={state.flatFeeAmount || ''}
                  onChange={handleInputChange}
                  placeholder="Enter flat fee amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="100"
                />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-1">Estimated Total Cost</p>
              <p className="text-4xl font-bold text-blue-600">
                {state.flatFeeOption && state.flatFeeAmount > 0
                  ? formatCurrency(estimate.flatFeeTotal!)
                  : formatCurrency(estimate.total)}
              </p>
            </div>

            {!state.flatFeeOption && (
              <div className="border-t border-blue-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Base Legal Fees:</span>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(estimate.baseFee)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Additional Costs*:</span>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(estimate.additionalCosts)}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-blue-200">
                  <span className="text-gray-700 font-medium">Total Estimate:</span>
                  <span className="font-bold text-blue-600">
                    {formatCurrency(estimate.total)}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-md">
            <p className="text-sm text-amber-800">
              <strong>Disclaimer:</strong> This estimator provides rough estimates only. 
              Actual legal fees vary based on jurisdiction, attorney experience, case specifics, 
              and unforeseen complications. Always consult with an attorney for accurate pricing.
            </p>
          </div>

          <div className="p-3 bg-gray-50 rounded-md">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Fee Structure Types:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• <strong>Hourly:</strong> Pay for actual time spent on your case</li>
              <li>• <strong>Flat Fee:</strong> Fixed price for specific services</li>
              <li>• <strong>Contingency:</strong> Percentage of settlement (common in personal injury)</li>
              <li>• <strong>Retainer:</strong> Upfront payment against which hours are billed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalFeeEstimator;
