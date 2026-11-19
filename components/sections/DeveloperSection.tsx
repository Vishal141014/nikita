'use client';
import { Award, Shield, TrendingUp, ExternalLink } from 'lucide-react';

const developers = [
  {
    name: 'DLF Limited',
    tier: 1,
    projects: 12,
    deliveredOnTime: '94%',
    escrowVerified: true,
    ocRate: '100%',
    priceRange: '₹1.2 Cr – ₹25 Cr',
    specialty: 'Golf Course, Luxury Residential',
    appreciation: '+16% avg',
    logo: 'DLF',
    color: '#1a3c34',
  },
  {
    name: 'M3M India',
    tier: 1,
    projects: 18,
    deliveredOnTime: '88%',
    escrowVerified: true,
    ocRate: '96%',
    priceRange: '₹85L – ₹8 Cr',
    specialty: 'Dwarka Expressway, Commercial',
    appreciation: '+14% avg',
    logo: 'M3M',
    color: '#c8a96e',
  },
  {
    name: 'Godrej Properties',
    tier: 1,
    projects: 9,
    deliveredOnTime: '92%',
    escrowVerified: true,
    ocRate: '98%',
    priceRange: '₹70L – ₹5 Cr',
    specialty: 'Dwarka Expressway, Noida',
    appreciation: '+12% avg',
    logo: 'GOP',
    color: '#2d6b5e',
  },
  {
    name: 'Sobha Limited',
    tier: 1,
    projects: 7,
    deliveredOnTime: '96%',
    escrowVerified: true,
    ocRate: '100%',
    priceRange: '₹1 Cr – ₹6 Cr',
    specialty: 'Premium Quality, Sector 108',
    appreciation: '+13% avg',
    logo: 'SBH',
    color: '#1a3c34',
  },
  {
    name: 'Signature Global',
    tier: 2,
    projects: 22,
    deliveredOnTime: '82%',
    escrowVerified: true,
    ocRate: '89%',
    priceRange: '₹40L – ₹3 Cr',
    specialty: 'Affordable, South Gurugram',
    appreciation: '+10% avg',
    logo: 'SGH',
    color: '#8a4a2a',
  },
  {
    name: 'BPTP',
    tier: 2,
    projects: 15,
    deliveredOnTime: '79%',
    escrowVerified: true,
    ocRate: '85%',
    priceRange: '₹45L – ₹2 Cr',
    specialty: 'Faridabad, Investment Play',
    appreciation: '+9% avg',
    logo: 'BPT',
    color: '#2d6b5e',
  },
];

export default function DeveloperSection() {
  return (
    <section className="py-20 bg-white" id="developers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Tier-1 Developers with Audited Escrow Records</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl font-bold text-[#1a3c34]">
              Real estate projects, a proven record<br />
              <span className="text-[#c8a96e]">of transactions.</span>
            </h2>
            <p className="text-[#4a4a4a] text-sm max-w-sm">
              We only list projects from developers who pass our 6-point escrow verification and OC track record audit.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="bg-white rounded-xl border border-[#e5e0d8] hover:shadow-lg hover:border-[#1a3c34]/30 transition-all p-5 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: dev.color }}
                  >
                    {dev.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1c1c1c] text-sm">{dev.name}</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className={`text-[9px] font-semibold uppercase px-2 py-0.5 rounded-full ${
                        dev.tier === 1 ? 'bg-[#1a3c34]/10 text-[#1a3c34]' : 'bg-[#c8a96e]/10 text-[#8a6a2a]'
                      }`}>
                        Tier {dev.tier}
                      </span>
                      {dev.escrowVerified && (
                        <span className="text-[9px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          Escrow ✓
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <TrendingUp size={16} className="text-emerald-500" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#f5f0e8] rounded-lg p-3">
                  <div className="text-[10px] text-[#8a8a8a] mb-1">Projects</div>
                  <div className="font-bold text-[#1a3c34] text-lg">{dev.projects}+</div>
                </div>
                <div className="bg-[#f5f0e8] rounded-lg p-3">
                  <div className="text-[10px] text-[#8a8a8a] mb-1">OC Rate</div>
                  <div className="font-bold text-emerald-600 text-lg">{dev.ocRate}</div>
                </div>
                <div className="bg-[#f5f0e8] rounded-lg p-3">
                  <div className="text-[10px] text-[#8a8a8a] mb-1">On-time Delivery</div>
                  <div className="font-bold text-[#1a3c34] text-lg">{dev.deliveredOnTime}</div>
                </div>
                <div className="bg-[#f5f0e8] rounded-lg p-3">
                  <div className="text-[10px] text-[#8a8a8a] mb-1">Appreciation</div>
                  <div className="font-bold text-emerald-600 text-lg">{dev.appreciation}</div>
                </div>
              </div>

              <div className="text-xs text-[#8a8a8a] mb-1">{dev.specialty}</div>
              <div className="text-xs font-medium text-[#1c1c1c]">{dev.priceRange}</div>

              <div className="mt-4 pt-4 border-t border-[#e5e0d8] flex items-center justify-between">
                <span className="text-xs text-[#1a3c34] font-medium group-hover:text-[#c8a96e] transition-colors">
                  View Projects
                </span>
                <ExternalLink size={12} className="text-[#8a8a8a] group-hover:text-[#c8a96e] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Haryana & UP RERA note */}
        <div className="bg-[#f5f0e8] rounded-xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-[#1a3c34] rounded-xl flex items-center justify-center shrink-0">
            <Shield size={18} className="text-[#c8a96e]" />
          </div>
          <div>
            <div className="font-semibold text-[#1a3c34] text-sm mb-1">Haryana & UP RERA Live Synchronization</div>
            <p className="text-xs text-[#4a4a4a]">
              Properties without Occupancy Certificates (OC) or valid builder escrow bank accounts are filtered out automatically. Our database syncs with RERA portals every 14 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
