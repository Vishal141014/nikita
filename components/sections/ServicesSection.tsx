'use client';
import { Home, TrendingUp, Globe, Users, ChevronRight, Shield } from 'lucide-react';

const services = [
  {
    id: 'homebuyer',
    icon: Home,
    label: 'For Homebuyers',
    color: '#1a3c34',
    tagline: 'Your perfect home, found with data.',
    description: 'From discovery to registration, we walk with you at every step. Zero broker commission. Fiduciary representation.',
    features: [
      'AI-scored property shortlisting',
      'Site visit coordination',
      'Home loan assistance at best rates',
      'Legal & documentation support',
      'Registration & stamp duty guidance',
      'Post-purchase support',
    ],
    cta: 'Start Home Search',
  },
  {
    id: 'investor',
    icon: TrendingUp,
    label: 'For Investors',
    color: '#c8a96e',
    tagline: 'Returns, not just properties.',
    description: 'Yield-first analysis. Capital appreciation projections. Developer escrow audits. Data you can trust.',
    features: [
      'Yield & appreciation forecasting',
      'Commercial real estate advisory',
      'Pre-launch access at institutional pricing',
      'Rental management services',
      'Portfolio rebalancing advice',
      'Tax optimization guidance',
    ],
    cta: 'Explore Investment Picks',
  },
  {
    id: 'nri',
    icon: Globe,
    label: 'For NRIs',
    color: '#2d6b5e',
    tagline: 'Invest from anywhere.',
    description: 'Full-service NRI investment platform. FEMA-compliant. Remote purchase enabled. We manage everything.',
    features: [
      'Remote property purchase support',
      'FEMA & RBI compliance advisory',
      'NRE / NRO account guidance',
      'Power of Attorney execution',
      'Rental management & income repatriation',
      'Capital gains tax advisory',
    ],
    cta: 'Book NRI Consultation',
  },
  {
    id: 'seller',
    icon: Users,
    label: 'For Sellers',
    color: '#8a4a2a',
    tagline: 'The best price, guaranteed.',
    description: 'Data-driven valuation. Qualified buyer matching. Fast closure. We sell your property at the right price.',
    features: [
      'Algorithmic market valuation',
      'Professional photography & listing',
      'Pre-qualified buyer matching',
      'Negotiation support',
      'Legal & documentation handling',
      'Average 23-day closure',
    ],
    cta: 'List My Property',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Specialized Desks for Sellers, NRIs & Partners</p>
          <h2 className="font-serif text-4xl font-bold text-[#1a3c34] mb-4">
            Your PropCapital.ai partner<br />for every real estate need.
          </h2>
          <p className="text-[#4a4a4a] max-w-xl mx-auto">
            Whether you're buying your first home, building a portfolio, investing from abroad, or selling a property — we have a dedicated desk for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#f5f0e8] rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-transparent hover:border-[#1a3c34]/20 flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: service.color }}>
                  {service.label}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a3c34] mb-2">{service.tagline}</h3>
                <p className="text-xs text-[#4a4a4a] mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#4a4a4a]">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-auto flex items-center gap-2 text-sm font-medium transition-colors group/btn"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* PropCapital Protocol */}
        <div className="bg-[#1a3c34] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">The PropCapital 4-Step Safe Transaction Protocol</p>
            <h3 className="font-serif text-3xl font-bold text-white">
              How we keep your transaction safe.
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Verify', desc: 'Complete Title & Encumbrance Verification by certified lawyers' },
              { step: '02', title: 'Audit', desc: 'RERA Escrow & Banking Due Diligence — builder escrow confirmed' },
              { step: '03', title: 'Price', desc: 'Direct pre-negotiated institutional pricing — no broker markup' },
              { step: '04', title: 'Close', desc: 'Independent legal representation for Agreement to Sale' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#c8a96e] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#c8a96e] font-bold text-sm">{item.step}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Haryana & UP RERA Registered',
              'Agency Registered & Compliant',
              '2,400+ Transactions Completed',
              'Zero Unsolicited Calls Policy',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-xs text-white/60">
                <Shield size={12} className="text-[#c8a96e] shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
