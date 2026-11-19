'use client';
import { useState } from 'react';
import { Bot, Send, ChevronRight, Shield, Zap } from 'lucide-react';

const iraMatches = [
  {
    score: 94,
    label: '94% AI Synthesis',
    name: 'DLF The Crest',
    location: 'Sector 54, Golf Course Road',
    price: '₹3.85 Cr',
    config: '3 BHK + Staff',
    area: '2,393 sq.ft',
    status: 'Ready (OC Issued)',
    matched: '9 / 9 Target Requirements',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    badges: ['Location 98%', 'Quality 95%', 'Legal 97%'],
    highlight: 'Direct Aravalli ridge views, 12 min to DLF Cyber City via 16-lane expressway, 100% OC power backup',
  },
  {
    score: 92,
    label: '92% High Yield',
    name: 'BPTP Discovery Park',
    location: 'Sector 80, Greater Faridabad',
    price: '₹1.15 Cr',
    config: '3 BHK Grand',
    area: '1,872 sq.ft',
    status: 'Ready to Move',
    matched: '8.4% Projected Gross Yield',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    badges: ['Price Score 88%', 'Legal 90%'],
    highlight: 'Optimal entry capital outlay with 70% open green acreage, 5 mins from Delhi-Agra Expressway Bypass',
  },
];

const scenarios = [
  '3 BHK Gurugram under ₹2 Cr, ready',
  'Golf Course Road luxury sanctuary (₹4+ Cr)',
  'Noida Sec 150 investment flat near metro',
];

export default function IRASection() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: 'Namaste! I am IRA, your private real estate intelligence engine for the National Capital Region. Tell me your purchase goals, target radius (e.g. Golf Course Rd, Sector 150 Noida, Faridabad Niharpur), investment yield metrics, or daily work corridors. I cross-index 4,000+ pre-checked inventory units.',
    },
  ]);

  const handleSend = (text?: string) => {
    const msg = text || inputValue.trim();
    if (!msg) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user' as const, text: msg },
      {
        role: 'bot' as const,
        text: `Analysing your requirement: "${msg}"\n\nI've matched this against 4,120 RERA-registered projects. Showing top 2 AI-scored results based on your criteria. Scroll right to view all matches or connect with a Senior Advisor for a detailed analysis.`,
      },
    ]);
    setInputValue('');
  };

  return (
    <section className="py-20 bg-[#f5f0e8]" id="ira">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1a3c34]/10 text-[#1a3c34] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Zap size={12} />
            Algorithmic Property Due Diligence & Cosine-Weighted Matching
          </div>
          <h2 className="font-serif text-4xl font-bold text-[#1a3c34] mb-4">
            IRA — Your AI Property Intelligence Engine
          </h2>
          <p className="text-[#4a4a4a] max-w-2xl mx-auto">
            Describe your ideal home in natural language. IRA cross-indexes 4,120+ RERA-authenticated projects against 200+ parameters to find your perfect match.
          </p>
        </div>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* IRA Chat panel */}
          <div className="lg:col-span-2 bg-[#1a3c34] rounded-2xl overflow-hidden flex flex-col">
            {/* Chat header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c8a96e] rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-[#0d1f1a]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-sm">IRA</span>
                    <span className="text-[10px] bg-[#c8a96e] text-[#0d1f1a] px-2 py-0.5 rounded-full font-medium">AI Partner</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/60">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    Status: Online
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-white/40 mt-2">NCR Institutional Property Underwriter</div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-72 lg:max-h-none">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'bot'
                        ? 'bg-white/10 text-white/90'
                        : 'bg-[#c8a96e] text-[#0d1f1a] font-medium'
                    }`}
                  >
                    {msg.text.split('\n').map((line, j) => (
                      <span key={j}>{line}{j < msg.text.split('\n').length - 1 && <br />}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Scenario chips */}
            <div className="px-4 pb-2 flex flex-col gap-1.5">
              <span className="text-[10px] text-white/40 uppercase tracking-widest">Common scenarios:</span>
              {scenarios.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="text-left text-xs text-white/70 bg-white/10 hover:bg-white/20 transition-colors px-3 py-2 rounded-lg"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4">
              <div className="flex gap-2 items-center bg-white/10 rounded-xl px-3 py-2 border border-white/20 focus-within:border-[#c8a96e] transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Describe your ideal home, priorities, yield targets..."
                  className="flex-1 bg-transparent text-white text-xs placeholder-white/40 outline-none"
                />
                <button
                  onClick={() => handleSend()}
                  className="w-7 h-7 bg-[#c8a96e] rounded-lg flex items-center justify-center hover:bg-[#e8d5a3] transition-colors shrink-0"
                >
                  <Send size={12} className="text-[#0d1f1a]" />
                </button>
              </div>
              <div className="text-[9px] text-white/30 mt-2 text-center">🔒 Encrypted Private Consultation</div>
            </div>
          </div>

          {/* Results panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#c8a96e] font-semibold uppercase tracking-widest">Prime Properties</span>
                <h3 className="font-serif text-2xl font-bold text-[#1a3c34]">Live Scored Matches</h3>
              </div>
              <span className="text-xs text-[#8a8a8a]">Sort: AI Match Score (High-Low)</span>
            </div>

            {iraMatches.map((match) => (
              <div key={match.name} className="bg-white rounded-xl border border-[#e5e0d8] overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative sm:w-44 h-40 sm:h-auto shrink-0 overflow-hidden">
                  <img src={match.image} alt={match.name} className="w-full h-full object-cover" />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-semibold text-center"
                    style={{ backgroundColor: match.score >= 93 ? '#2d7a4fcc' : '#c8a96ecc' }}
                  >
                    {match.label}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#1a3c34]">{match.name}</h4>
                      <p className="text-xs text-[#8a8a8a]">{match.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#1a3c34]">{match.price}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[match.config, match.area, match.status].map((item) => (
                      <span key={item} className="text-[10px] bg-[#f5f0e8] text-[#4a4a4a] px-2.5 py-1 rounded-full font-medium">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium mb-3">
                    <Shield size={12} />
                    Matches {match.matched}
                  </div>

                  <p className="text-xs text-[#4a4a4a] mb-4 leading-relaxed">{match.highlight}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {match.badges.map((b) => (
                      <span key={b} className="text-[10px] text-[#1a3c34] bg-[#1a3c34]/10 px-2 py-0.5 rounded-full font-medium">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="border border-[#1a3c34] text-[#1a3c34] text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#1a3c34] hover:text-white transition-all">
                      Compare
                    </button>
                    <button className="bg-[#c8a96e] text-[#0d1f1a] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#e8d5a3] transition-colors flex items-center gap-1.5">
                      Schedule Private Visit
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Need bespoke */}
            <div className="bg-[#1a3c34] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-sm">Need Bespoke Human Underwriting?</span>
                  <span className="text-[10px] bg-[#c8a96e] text-[#0d1f1a] px-2 py-0.5 rounded-full">Senior NRI Advisory</span>
                </div>
                <p className="text-white/60 text-xs">Connect directly with a certified PropCapital advisory partner. Zero phone spam. Fiduciary client representation.</p>
                <div className="text-[10px] text-white/40 mt-1">Average Callback: <strong className="text-[#c8a96e]">1 min 42 secs</strong></div>
              </div>
              <button className="bg-[#c8a96e] text-[#0d1f1a] text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#e8d5a3] transition-colors whitespace-nowrap flex items-center gap-2 shrink-0">
                Connect with Senior Advisor
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* RERA compliance bar */}
        <div className="mt-8 border-t border-[#e5e0d8] pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#4a4a4a]">
            {[
              { icon: Shield, text: 'Complete Title & Encumbrance Verification' },
              { icon: Shield, text: 'Zero Unsolicited Broker Calls' },
              { icon: Shield, text: 'RERA Escrow & Banking Due Diligence' },
              { icon: Shield, text: 'Direct, pre-negotiated Institutional Pricing' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={12} className="text-[#c8a96e] shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
