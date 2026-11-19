'use client';
import { useState } from 'react';
import { Home, TrendingUp, Globe, Users, ChevronRight } from 'lucide-react';

type Intent = 'homebuyer' | 'investor' | 'nri' | 'seller';

const intents: { key: Intent; label: string; icon: typeof Home; tagline: string; stats: { label: string; value: string }[]; tips: string[] }[] = [
  {
    key: 'homebuyer',
    label: 'Homebuyer',
    icon: Home,
    tagline: 'Your perfect home, found with data.',
    stats: [
      { label: 'Ready homes in NCR', value: '1,240+' },
      { label: 'Avg. 2 BHK price (Gurugram)', value: '₹1.2 Cr' },
      { label: 'OC-issued projects', value: '94%' },
    ],
    tips: ['100% OC/CC verified listings', 'Site visit coordination included', 'Zero buyer commission'],
  },
  {
    key: 'investor',
    label: 'Investor',
    icon: TrendingUp,
    tagline: 'Returns, not just properties.',
    stats: [
      { label: 'Avg. rental yield (NCR)', value: '5.8%' },
      { label: 'DXP appreciation (3yr)', value: '+42%' },
      { label: 'High-yield opportunities', value: '186+' },
    ],
    tips: ['Yield-first property scoring', 'Pre-launch institutional access', 'Developer escrow audits'],
  },
  {
    key: 'nri',
    label: 'NRI',
    icon: Globe,
    tagline: 'Invest from anywhere in the world.',
    stats: [
      { label: 'NRI-managed properties', value: '480+' },
      { label: 'FEMA-compliant transactions', value: '100%' },
      { label: 'Avg. rental repatriation yield', value: '6.2%' },
    ],
    tips: ['Remote purchase enabled', 'FEMA & RBI compliance handled', 'Full property management'],
  },
  {
    key: 'seller',
    label: 'Seller',
    icon: Users,
    tagline: 'The best price, with data on your side.',
    stats: [
      { label: 'Avg. closure time', value: '23 days' },
      { label: 'Pre-qualified buyers', value: '4,200+' },
      { label: 'Avg. price premium over market', value: '+6%' },
    ],
    tips: ['Algorithmic valuation report', 'Targeted buyer matching', 'Zero hidden charges'],
  },
];

export default function PersonalizedDiscovery() {
  const [active, setActive] = useState<Intent>('homebuyer');
  const current = intents.find((i) => i.key === active)!;
  const Icon = current.icon;

  return (
    <section className="py-16 bg-[#f5f0e8] border-t border-[#e5e0d8]" id="discovery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Personalized Property Discovery</p>
          <h2 className="font-serif text-3xl font-bold text-[#1a3c34]">
            It knows what home is,<br className="hidden sm:block" />
            <span className="text-[#c8a96e]"> a little closer to finding you.</span>
          </h2>
        </div>

        {/* Intent switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {intents.map((intent) => {
            const IntentIcon = intent.icon;
            return (
              <button
                key={intent.key}
                onClick={() => setActive(intent.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border-2 transition-all ${
                  active === intent.key
                    ? 'bg-[#1a3c34] text-white border-[#1a3c34] shadow-md'
                    : 'bg-white text-[#4a4a4a] border-[#e5e0d8] hover:border-[#1a3c34] hover:text-[#1a3c34]'
                }`}
              >
                <IntentIcon size={15} />
                {intent.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl border border-[#e5e0d8] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e0d8]">
            {/* Left — tagline + tips */}
            <div className="p-8 md:col-span-1 bg-[#1a3c34]">
              <div className="w-12 h-12 bg-[#c8a96e] rounded-xl flex items-center justify-center mb-5">
                <Icon size={22} className="text-[#0d1f1a]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">{current.tagline}</h3>
              <ul className="space-y-3 mt-6">
                {current.tips.map((tip) => (
                  <li key={tip} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 flex items-center gap-2 text-[#c8a96e] text-sm font-medium hover:text-white transition-colors"
              >
                Explore {current.label} Properties
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Right — stats */}
            <div className="p-8 md:col-span-2">
              <p className="text-xs text-[#8a8a8a] uppercase tracking-widest font-semibold mb-6">
                Key metrics for {current.label}s
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {current.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#f5f0e8] rounded-xl p-5">
                    <div className="text-xs text-[#8a8a8a] mb-2">{stat.label}</div>
                    <div className="font-serif text-3xl font-bold text-[#1a3c34]">{stat.value}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#e5e0d8] pt-6">
                <p className="text-sm text-[#4a4a4a] mb-4">
                  PropCapital.ai tailors your entire property discovery journey — from search to close — based on your profile as a <strong className="text-[#1a3c34]">{current.label}</strong>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.querySelector('#ira')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#1a3c34] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#2d6b5e] transition-colors"
                  >
                    Try IRA AI Matching
                  </button>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border border-[#1a3c34] text-[#1a3c34] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1a3c34] hover:text-white transition-all"
                  >
                    Talk to an Advisor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
