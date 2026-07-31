'use client';

import React, { useState, useMemo } from 'react';

interface MortgageState {
  principal: number;
  annualInterestRate: number;
  loanTermYears: number;
  extraPayment: number;
}

interface AmortizationRow {
  month: number;
  payment: number;
  principalPayment: number;
  interestPayment: number;
  remainingBalance: number;
  totalInterestPaid: number;
}

const MortgageAmortization: React.FC = () => {
  const [state, setState] = useState<MortgageState>({
    principal: 300000,
    annualInterestRate: 6.5,
    loanTermYears: 30,
    extraPayment: 0,
  });

  const [showSchedule, setShowSchedule] = useState(false);

  const calculateAmortization = useMemo(() => {
    const { principal, annualInterestRate, loanTermYears, extraPayment } = state;
    
    if (principal <= 0 || annualInterestRate <= 0 || loanTermYears <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        payoffTime: 0,
        schedule: [] as AmortizationRow[],
      };
    }

    const monthlyRate = annualInterestRate / 100 / 12;
    const totalMonths = loanTermYears * 12;

    // Calculate monthly payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                           (Math.pow(1 + monthlyRate, totalMonths) - 1);

    let balance = principal;
    let totalInterest = 0;
    let totalPayment = 0;
    const schedule: AmortizationRow[] = [];
    let month = 0;

    while (balance > 0 && month < totalMonths * 2) { // Cap at double the term
      month++;
      const interestPayment = balance * monthlyRate;
      let principalPayment = monthlyPayment - interestPayment + extraPayment;
      
      // Handle last payment
      if (principalPayment > balance) {
        principalPayment = balance;
      }

      const payment = principalPayment + interestPayment;
      balance -= principalPayment;
      totalInterest += interestPayment;
      totalPayment += payment;

      schedule.push({
        month,
        payment,
        principalPayment,
        interestPayment,
        remainingBalance: Math.max(0, balance),
        totalInterestPaid: totalInterest,
      });

      if (balance <= 0) break;
    }

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      payoffTime: month,
      schedule,
    };
  }, [state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const yearsToPayoff = Math.floor(calculateAmortization.payoffTime / 12);
  const monthsToPayoff = calculateAmortization.payoffTime % 12;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Amortization Calculator</h2>
      <p className="text-gray-600 mb-6">
        Calculate your monthly mortgage payments and see how extra payments can reduce your loan term.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="principal" className="block text-sm font-medium text-gray-700 mb-1">
              Loan Amount ($)
            </label>
            <input
              type="number"
              id="principal"
              name="principal"
              value={state.principal || ''}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="1000"
            />
          </div>

          <div>
            <label htmlFor="annualInterestRate" className="block text-sm font-medium text-gray-700 mb-1">
              Annual Interest Rate (%)
            </label>
            <input
              type="number"
              id="annualInterestRate"
              name="annualInterestRate"
              value={state.annualInterestRate || ''}
              onChange={handleInputChange}
              placeholder="Enter interest rate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              max="30"
              step="0.125"
            />
          </div>

          <div>
            <label htmlFor="loanTermYears" className="block text-sm font-medium text-gray-700 mb-1">
              Loan Term (Years)
            </label>
            <input
              type="number"
              id="loanTermYears"
              name="loanTermYears"
              value={state.loanTermYears || ''}
              onChange={handleInputChange}
              placeholder="Enter loan term"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="1"
              max="50"
              step="1"
            />
          </div>

          <div>
            <label htmlFor="extraPayment" className="block text-sm font-medium text-gray-700 mb-1">
              Extra Monthly Payment ($)
            </label>
            <input
              type="number"
              id="extraPayment"
              name="extraPayment"
              value={state.extraPayment || ''}
              onChange={handleInputChange}
              placeholder="Optional extra payment"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              step="50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600 mb-1">Monthly Payment</p>
              <p className="text-3xl font-bold text-blue-600">
                {formatCurrency(calculateAmortization.monthlyPayment + state.extraPayment)}
              </p>
            </div>

            <div className="border-t border-blue-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payoff Time:</span>
                <span className="font-semibold text-gray-900">
                  {yearsToPayoff} years, {monthsToPayoff} months
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Interest:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(calculateAmortization.totalInterest)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Payment:</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(calculateAmortization.totalPayment)}
                </span>
              </div>
            </div>
          </div>

          {state.extraPayment > 0 && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-sm text-green-800">
                <strong>Savings:</strong> With an extra ${state.extraPayment}/month, you'll pay off your loan faster and save on interest!
              </p>
            </div>
          )}

          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            {showSchedule ? 'Hide' : 'Show'} Amortization Schedule
          </button>
        </div>
      </div>

      {showSchedule && calculateAmortization.schedule.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Amortization Schedule</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Payment</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Principal</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Interest</th>
                <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Balance</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {calculateAmortization.schedule.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-900">{row.month}</td>
                  <td className="px-4 py-2 text-sm text-right text-gray-900">{formatCurrency(row.payment)}</td>
                  <td className="px-4 py-2 text-sm text-right text-green-600">{formatCurrency(row.principalPayment)}</td>
                  <td className="px-4 py-2 text-sm text-right text-red-600">{formatCurrency(row.interestPayment)}</td>
                  <td className="px-4 py-2 text-sm text-right text-gray-900">{formatCurrency(row.remainingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MortgageAmortization;
