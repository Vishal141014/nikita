'use client';
import { useState } from 'react';
import { Home, TrendingUp } from 'lucide-react';

const configurations = [
  { label: '1 BHK', range: '₹35–60L', projects: 42, area: '400–650 sq.ft', locations: 'Faridabad, Noida' },
  { label: '2 BHK', range: '₹60L–1.5Cr', projects: 186, area: '800–1,200 sq.ft', locations: 'Gurugram, Noida' },
  { label: '3 BHK', range: '₹1.2–4Cr', projects: 234, area: '1,500–2,800 sq.ft', locations: 'All Corridors' },
  { label: '4 BHK', range: '₹3–12Cr', projects: 67, area: '2,800–5,000 sq.ft', locations: 'Golf Course Rd' },
  { label: 'Villa', range: '₹5–25Cr', projects: 28, area: '4,000–10,000 sq.ft', locations: 'South Gurugram' },
  { label: 'Commercial', range: '₹50L–10Cr', projects: 95, area: '500–10,000 sq.ft', locations: 'Sector 62, Cyber City' },
  { label: 'Plot / SCO', range: '₹30L–5Cr', projects: 55, area: 'Varies', locations: 'Gurugram, Noida' },
  { label: 'Luxury (5 Cr+)', range: '₹5Cr+', projects: 32, area: '3,000 sq.ft+', locations: 'Golf Course, DLF' },
];

export default function BudgetBrowser() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white" id="browse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Browse by Configuration & Budget Tiers</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl font-bold text-[#1a3c34]">
              Find properties that fit<br /><span className="text-[#c8a96e]">your exact parameters.</span>
            </h2>
            <p className="text-[#4a4a4a] text-sm max-w-sm">
              Browse our curated inventory by configuration and budget. Every listing RERA-verified and AI-scored.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {configurations.map((config) => (
            <button
              key={config.label}
              onClick={() => setSelected(selected === config.label ? null : config.label)}
              className={`group text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                selected === config.label
                  ? 'border-[#1a3c34] bg-[#1a3c34] text-white shadow-lg -translate-y-0.5'
                  : 'border-[#e5e0d8] bg-white hover:border-[#1a3c34]/40 hover:shadow-md'
              }`}
            >
              <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                selected === config.label ? 'text-[#c8a96e]' : 'text-[#8a8a8a]'
              }`}>
                {config.label}
              </div>
              <div className={`font-serif text-2xl font-bold mb-1 ${
                selected === config.label ? 'text-white' : 'text-[#1a3c34]'
              }`}>
                {config.range}
              </div>
              <div className={`text-xs mb-3 ${selected === config.label ? 'text-white/60' : 'text-[#8a8a8a]'}`}>
                {config.area}
              </div>
              <div className={`flex items-center justify-between text-xs font-medium ${
                selected === config.label ? 'text-white/80' : 'text-[#4a4a4a]'
              }`}>
                <span className="flex items-center gap-1">
                  <Home size={11} />
                  {config.projects}+ projects
                </span>
                <TrendingUp size={11} className={selected === config.label ? 'text-[#c8a96e]' : 'text-emerald-500'} />
              </div>
              <div className={`text-[10px] mt-2 ${selected === config.label ? 'text-white/50' : 'text-[#8a8a8a]'}`}>
                {config.locations}
              </div>
            </button>
          ))}
        </div>

        {/* Selected detail */}
        {selected && (
          <div className="bg-[#f5f0e8] rounded-xl p-6 border border-[#e5e0d8] animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1a3c34] mb-1">
                  {selected} Properties
                </h3>
                <p className="text-sm text-[#4a4a4a]">
                  Showing {configurations.find((c) => c.label === selected)?.projects}+ verified listings.
                  {' '}Click below to view all properties in this category.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#1a3c34] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#2d6b5e] transition-colors"
                >
                  View All {selected} Properties
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="border border-[#e5e0d8] text-[#4a4a4a] text-sm px-4 py-3 rounded-lg hover:border-[#1a3c34] transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
