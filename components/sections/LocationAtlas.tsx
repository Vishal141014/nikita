'use client';
import { MapPin, TrendingUp, Building, Home } from 'lucide-react';

const locations = [
  {
    name: 'Golf Course Road',
    city: 'Gurugram',
    priceRange: '₹10,000–₹18,000/sq.ft',
    appreciation: '+14% YoY',
    projects: 48,
    type: 'Luxury Residential',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    color: '#1a3c34',
    description: 'Premier golf-facing addresses with Aravalli backdrop',
  },
  {
    name: 'Dwarka Expressway',
    city: 'Gurugram',
    priceRange: '₹7,500–₹12,000/sq.ft',
    appreciation: '+18% YoY',
    projects: 124,
    type: 'Upcoming Corridor',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    color: '#c8a96e',
    description: 'Fastest-appreciating corridor post elevated highway opening',
  },
  {
    name: 'Noida Expressway',
    city: 'Noida',
    priceRange: '₹6,000–₹10,500/sq.ft',
    appreciation: '+11% YoY',
    projects: 89,
    type: 'IT Hub Residential',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
    color: '#2d6b5e',
    description: 'Adjacent to Sector 128–168 IT parks, premium supply belt',
  },
  {
    name: 'Faridabad Bypass',
    city: 'Faridabad',
    priceRange: '₹5,500–₹8,500/sq.ft',
    appreciation: '+10% YoY',
    projects: 67,
    type: 'Yield Play',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    color: '#8a4a2a',
    description: 'High gross yield of 7–9% p.a., emerging healthcare hub',
  },
  {
    name: 'Sohna Road',
    city: 'Gurugram',
    priceRange: '₹5,000–₹9,000/sq.ft',
    appreciation: '+9% YoY',
    projects: 55,
    type: 'Mid-Segment',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    color: '#1a3c34',
    description: 'Green belt development with Aravalli view projects',
  },
  {
    name: 'Greater Noida West',
    city: 'Noida',
    priceRange: '₹3,500–₹5,500/sq.ft',
    appreciation: '+8% YoY',
    projects: 42,
    type: 'Value Segment',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    color: '#2d6b5e',
    description: 'Metro connectivity to Noida, fastest-growing township belt',
  },
];

const atlasData = [
  { label: 'Avg. Gurugram Resale Rate', value: '₹10,450/sq.ft', change: '+14%' },
  { label: 'Avg. Noida Expressway Rate', value: '₹7,800/sq.ft', change: '+11%' },
  { label: 'Avg. Faridabad Rate', value: '₹5,900/sq.ft', change: '+10%' },
  { label: 'NCR Avg. Rental Yield', value: '3.8%–8.4%', change: '+0.6%' },
];

export default function LocationAtlas() {
  return (
    <section className="py-20 bg-[#f5f0e8]" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">NCR Neighbourhood Atlas, Rates & Infrastructure</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl font-bold text-[#1a3c34]">
              Local data drives smarter,<br />
              <span className="text-[#c8a96e]">data-driven decisions</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {atlasData.map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-[#e5e0d8]">
                  <div className="text-[10px] text-[#8a8a8a] mb-1">{item.label}</div>
                  <div className="font-bold text-[#1a3c34] text-lg">{item.value}</div>
                  <div className="text-xs text-emerald-600 font-medium">{item.change} YoY</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group relative bg-white rounded-xl overflow-hidden border border-[#e5e0d8] hover:shadow-xl hover:border-[#1a3c34]/30 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-semibold"
                  style={{ backgroundColor: `${loc.color}cc` }}
                >
                  {loc.type}
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-white/80 text-xs">
                    <MapPin size={11} />
                    {loc.city}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{loc.name}</h3>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs text-[#4a4a4a] mb-4">{loc.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div>
                    <div className="text-[10px] text-[#8a8a8a]">Rate</div>
                    <div className="text-xs font-semibold text-[#1c1c1c]">{loc.priceRange.split('–')[0]}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8a8a8a]">Appreciation</div>
                    <div className="text-xs font-semibold text-emerald-600 flex items-center gap-0.5">
                      <TrendingUp size={10} />
                      {loc.appreciation}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8a8a8a]">Projects</div>
                    <div className="text-xs font-semibold text-[#1c1c1c] flex items-center gap-0.5">
                      <Building size={10} />
                      {loc.projects}+
                    </div>
                  </div>
                </div>
                <button className="w-full text-center text-xs text-[#1a3c34] font-medium hover:text-[#c8a96e] transition-colors py-1">
                  Explore Properties →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
