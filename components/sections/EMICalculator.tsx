'use client';
import { useState } from 'react';
import { calculateEMI, formatEMI, formatCurrency, HOME_LOAN_RATES } from '@/lib/emi-calculator';
import { Calculator, TrendingDown, Info } from 'lucide-react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(8000000); // 80L
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [downPaymentPct, setDownPaymentPct] = useState(20);

  const loanAmount = principal * (1 - downPaymentPct / 100);
  const result = calculateEMI(loanAmount, rate, tenure);

  const formatSliderValue = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(0)} L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-20 bg-[#f5f0e8]" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Financial Modeling & Regional Unit Converters</p>
          <h2 className="font-serif text-4xl font-bold text-[#1a3c34] mb-4">Financial & Advisory Calculators</h2>
          <p className="text-[#4a4a4a] max-w-xl mx-auto">
            Calculate your home loan EMI, compare bank rates, and plan your investment with our financial tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Calculator inputs */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#e5e0d8]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#1a3c34] rounded-xl flex items-center justify-center">
                <Calculator size={18} className="text-[#c8a96e]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1a3c34]">EMI Calculator</h3>
            </div>

            {/* Property Value */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-[#1c1c1c]">Property Value</label>
                <span className="font-bold text-[#1a3c34] text-lg">{formatSliderValue(principal)}</span>
              </div>
              <input
                type="range"
                min={1000000}
                max={50000000}
                step={500000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1a3c34 ${((principal - 1000000) / 49000000) * 100}%, #e5e0d8 0%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#8a8a8a] mt-1.5">
                <span>₹10 L</span><span>₹5 Cr</span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-[#1c1c1c]">Down Payment</label>
                <span className="font-bold text-[#1a3c34] text-lg">{downPaymentPct}% ({formatSliderValue(principal * downPaymentPct / 100)})</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1a3c34 ${((downPaymentPct - 10) / 40) * 100}%, #e5e0d8 0%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#8a8a8a] mt-1.5">
                <span>10%</span><span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-[#1c1c1c]">Interest Rate (p.a.)</label>
                <span className="font-bold text-[#1a3c34] text-lg">{rate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={6}
                max={14}
                step={0.1}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1a3c34 ${((rate - 6) / 8) * 100}%, #e5e0d8 0%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#8a8a8a] mt-1.5">
                <span>6%</span><span>14%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-[#1c1c1c]">Loan Tenure</label>
                <span className="font-bold text-[#1a3c34] text-lg">{tenure} years</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1a3c34 ${((tenure - 5) / 25) * 100}%, #e5e0d8 0%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[#8a8a8a] mt-1.5">
                <span>5 yrs</span><span>30 yrs</span>
              </div>
            </div>

            {/* Bank rates */}
            <div>
              <div className="text-xs font-medium text-[#8a8a8a] mb-3 flex items-center gap-1">
                <Info size={12} />
                Current Home Loan Rates (Floating)
              </div>
              <div className="flex flex-wrap gap-2">
                {HOME_LOAN_RATES.map((bank) => (
                  <button
                    key={bank.bank}
                    onClick={() => setRate(bank.rate)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      Math.abs(rate - bank.rate) < 0.05
                        ? 'bg-[#1a3c34] text-white border-[#1a3c34]'
                        : 'border-[#e5e0d8] text-[#4a4a4a] hover:border-[#1a3c34]'
                    }`}
                  >
                    {bank.bank}: {bank.rate}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-4">
            {/* EMI Card */}
            <div className="bg-[#1a3c34] rounded-2xl p-7 text-white">
              <div className="text-white/60 text-sm mb-2">Monthly EMI</div>
              <div className="font-serif text-5xl font-bold text-white mb-1">
                {formatEMI(result.emi)}
              </div>
              <div className="text-white/50 text-xs">per month for {tenure} years</div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white/60 text-sm">Loan Amount</span>
                  <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white/60 text-sm">Total Payment</span>
                  <span className="font-semibold">{formatCurrency(result.totalPayment)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-white/60 text-sm">Total Interest</span>
                  <span className="font-semibold text-[#c8a96e]">{formatCurrency(result.totalInterest)}</span>
                </div>
              </div>

              {/* Visual breakdown */}
              <div className="mt-6">
                <div className="text-white/50 text-xs mb-2">Principal vs Interest split</div>
                <div className="h-2.5 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#c8a96e] rounded-l-full"
                    style={{ width: `${(loanAmount / result.totalPayment) * 100}%` }}
                  />
                  <div className="h-full bg-white/20 flex-1 rounded-r-full" />
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-[#c8a96e]">Principal {Math.round((loanAmount / result.totalPayment) * 100)}%</span>
                  <span className="text-white/40">Interest {Math.round((result.totalInterest / result.totalPayment) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Tip card */}
            <div className="bg-white rounded-xl p-5 border border-[#e5e0d8]">
              <div className="flex items-start gap-3">
                <TrendingDown size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-sm text-[#1c1c1c] mb-1">Save on interest</div>
                  <p className="text-xs text-[#4a4a4a]">
                    By increasing your down payment to 30%, your monthly EMI drops to <strong className="text-[#1a3c34]">{formatEMI(calculateEMI(principal * 0.70, rate, tenure).emi)}</strong> and you save {formatCurrency(result.totalInterest - calculateEMI(principal * 0.70, rate, tenure).totalInterest)} in interest.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-[#c8a96e] text-[#0d1f1a] font-semibold py-4 rounded-xl text-sm hover:bg-[#e8d5a3] transition-colors"
            >
              Connect with Loan Advisor →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
