'use client';
import { useState } from 'react';
import { Search, MapPin, ChevronDown, Sliders, ArrowRight } from 'lucide-react';

const locations = ['Gurugram', 'Noida', 'Faridabad', 'Greater Noida', 'Delhi NCR'];
const propertyTypes = ['Apartment', 'Villa', 'Independent Floor', 'Plot', 'Commercial'];
const budgets = ['Under ₹50L', '₹50L–1Cr', '₹1–2Cr', '₹2–5Cr', '5Cr+'];
const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '4+ BHK'];

type UserIntent = 'homebuyer' | 'investor' | 'nri' | 'seller';

const intentConfig: Record<UserIntent, { label: string; color: string }> = {
  homebuyer: { label: 'Homebuyer', color: '#1a3c34' },
  investor: { label: 'Investor', color: '#c8a96e' },
  nri: { label: 'NRI', color: '#2d6b5e' },
  seller: { label: 'Seller', color: '#8a6a2a' },
};

const heroImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
];

export default function Hero() {
  const [intent, setIntent] = useState<UserIntent>('homebuyer');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [bhk, setBhk] = useState('');
  const [mode, setMode] = useState<'buy' | 'rent'>('buy');

  const taglines: Record<UserIntent, string> = {
    homebuyer: 'Your next home. A little closer to finding you.',
    investor: 'Data-driven properties. Maximum returns, minimum guesswork.',
    nri: 'Invest from anywhere. We handle everything.',
    seller: 'Get the best price. Backed by institutional-grade data.',
  };

  const handleSearch = () => {
    document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f1a]/90 via-[#0d1f1a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f1a]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Intent switcher */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1 mb-8">
            {(Object.keys(intentConfig) as UserIntent[]).map((key) => (
              <button
                key={key}
                onClick={() => setIntent(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  intent === key
                    ? 'bg-white text-[#1a3c34] shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {intentConfig[key].label}
              </button>
            ))}
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-300">
            {taglines[intent].split('. ').map((part, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="text-white">{part}.</span>
                ) : (
                  <span className="block text-[#c8a96e] mt-1">{part}</span>
                )}
              </span>
            ))}
          </h1>

          <p className="text-white/70 text-lg mb-10 max-w-xl">
            Smarter property discovery across Gurugram, Noida & Faridabad. Powered by IRA Neural Engine — 4,120+ RERA-authenticated projects, algorithm-first.
          </p>

          {/* Buy / Rent toggle */}
          <div className="flex gap-1 mb-5">
            {(['buy', 'rent'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all capitalize ${
                  mode === m
                    ? 'bg-[#c8a96e] text-[#0d1f1a]'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e0d8]">
              {/* Location */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8a8a]">
                  <MapPin size={16} />
                </div>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-14 pl-10 pr-4 text-sm text-[#1c1c1c] bg-transparent outline-none appearance-none cursor-pointer hover:bg-[#faf8f4] transition-colors"
                >
                  <option value="">All Locations</option>
                  {locations.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" />
              </div>

              {/* Property type */}
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full h-14 px-4 text-sm text-[#1c1c1c] bg-transparent outline-none appearance-none cursor-pointer hover:bg-[#faf8f4] transition-colors"
                >
                  <option value="">Property Type</option>
                  {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" />
              </div>

              {/* Budget */}
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full h-14 px-4 text-sm text-[#1c1c1c] bg-transparent outline-none appearance-none cursor-pointer hover:bg-[#faf8f4] transition-colors"
                >
                  <option value="">Budget</option>
                  {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" />
              </div>

              {/* BHK + Search button */}
              <div className="flex">
                <div className="relative flex-1">
                  <select
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value)}
                    className="w-full h-14 px-4 text-sm text-[#1c1c1c] bg-transparent outline-none appearance-none cursor-pointer hover:bg-[#faf8f4] transition-colors"
                  >
                    <option value="">BHK</option>
                    {bhkOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8a8a8a] pointer-events-none" />
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-[#1a3c34] text-white px-6 flex items-center justify-center hover:bg-[#2d6b5e] transition-colors"
                  aria-label="Search properties"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Advanced filters row */}
            <div className="border-t border-[#e5e0d8] px-4 py-2.5 flex items-center justify-between bg-[#faf8f4]">
              <button className="flex items-center gap-2 text-xs text-[#4a4a4a] hover:text-[#1a3c34] transition-colors">
                <Sliders size={13} />
                <span>Advanced Filters</span>
              </button>
              <div className="flex gap-3 text-xs text-[#8a8a8a]">
                <span>RERA Verified</span>
                <span>•</span>
                <span>OC Issued</span>
                <span>•</span>
                <span>Ready to Move</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {['3 BHK Gurugram under ₹2 Cr', 'Golf Course Road luxury (₹4 Cr+)', 'Noida Sec 150 investment flat'].map((tag) => (
              <button
                key={tag}
                onClick={handleSearch}
                className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 text-xs px-3.5 py-2 rounded-full border border-white/20 hover:bg-white/25 transition-all group"
              >
                {tag}
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-8 right-4 sm:right-6 hidden lg:flex flex-col gap-3">
          {[
            { value: '4,120+', label: 'RERA Projects' },
            { value: '100%', label: 'OC/RERA Auth.' },
            { value: '14m', label: 'Latest' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2.5 text-right">
              <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
              <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
