'use client';
import { useState } from 'react';
import { Bot, ChevronRight, TrendingUp, Shield, Award } from 'lucide-react';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties } from '@/data/properties';

const filters = ['All', 'Ready to Move', 'Under Construction', 'High Yield', 'Luxury'];
const sortOptions = ['AI Match Score (High-Low)', 'Price: Low to High', 'Price: High to Low', 'Newest First'];

export default function RecommendedProperties() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [showAll, setShowAll] = useState(false);

  const filtered = properties
    .filter((p) => {
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Ready to Move') return p.status === 'ready';
      if (activeFilter === 'Under Construction') return p.status === 'under-construction';
      if (activeFilter === 'High Yield') return p.yield !== undefined;
      if (activeFilter === 'Luxury') return p.priceValue >= 20000000;
      return true;
    })
    .sort((a, b) => {
      if (sortBy.includes('High-Low')) return b.aiScore - a.aiScore;
      if (sortBy.includes('Low to High')) return a.priceValue - b.priceValue;
      if (sortBy.includes('High to Low')) return b.priceValue - a.priceValue;
      return 0;
    });

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="py-20 bg-white" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Curated & Underwritten NCR Properties</p>
            <h2 className="font-serif text-4xl font-bold text-[#1a3c34] mb-3">
              Live Scored Matches
            </h2>
            <p className="text-[#4a4a4a] text-sm max-w-xl">
              Every listing is RERA-authenticated, algorithm-scored, and cross-indexed against 200+ parameters.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8a8a8a]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm text-[#1c1c1c] border border-[#e5e0d8] rounded-lg px-3 py-2 bg-white outline-none focus:border-[#1a3c34] cursor-pointer"
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeFilter === f
                  ? 'bg-[#1a3c34] text-white border-[#1a3c34]'
                  : 'border-[#e5e0d8] text-[#4a4a4a] hover:border-[#1a3c34] hover:text-[#1a3c34]'
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto text-xs text-[#8a8a8a] self-center">
            Showing {displayed.length} of {filtered.length} properties
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {!showAll && filtered.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border-2 border-[#1a3c34] text-[#1a3c34] font-medium px-8 py-3 rounded-lg hover:bg-[#1a3c34] hover:text-white transition-all"
            >
              View All {filtered.length} Properties
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#f5f0e8] rounded-2xl">
          {[
            { value: '4,120+', label: 'Projects Tracked', icon: Award },
            { value: '100%', label: 'RERA Authenticated', icon: Shield },
            { value: '2,400+', label: 'Families Served', icon: Bot },
            { value: '₹0', label: 'Buyer Commission', icon: TrendingUp },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="w-10 h-10 bg-[#1a3c34]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-[#1a3c34]" />
              </div>
              <div className="font-serif text-3xl font-bold text-[#1a3c34] mb-1">{value}</div>
              <div className="text-xs text-[#4a4a4a]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
