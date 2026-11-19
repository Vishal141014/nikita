import Link from 'next/link';
import { MapPin, Phone, Mail, Shield, CheckCircle } from 'lucide-react';

const footerLinks = {
  'Buy Property': ['Residential Properties', 'Commercial Spaces', 'Luxury Homes', 'Under Construction', 'Ready to Move'],
  'Sell Property': ['List Your Property', 'Get Valuation', 'Seller Dashboard', 'Resale Advisory'],
  'Tools & Insights': ['EMI Calculator', 'Yield Calculator', 'NCR Atlas', 'Market Trends', 'Developer Reports'],
  'Services': ['NRI Investments', 'IRA AI Matching', 'Legal Advisory', 'Loan Assistance', 'Site Visits'],
};

const trustBadges = [
  { label: 'Complete Title & Encumbrance Verification', icon: Shield },
  { label: 'Zero Unsolicited Broker Calls', icon: CheckCircle },
  { label: 'RERA Escrow & Banking Due Diligence', icon: Shield },
  { label: 'Direct, pre-negotiated Institutional Pricing', icon: CheckCircle },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f1a] text-white">
      {/* CTA Banner */}
      <div className="bg-[#1a3c34] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-[#c8a96e] uppercase tracking-widest mb-2">Need Bespoke Human Underwriting?</p>
            <h3 className="font-serif text-2xl text-white mb-1">Connect with a certified PropCapital advisor.</h3>
            <p className="text-white/60 text-sm">Zero phone spam guarantee. Fiduciary client representation. Pre-negotiated institutional pricing.</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-white/60">
              <span>Average Callback: <strong className="text-[#c8a96e]">1 min 42 secs</strong></span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+919899999999"
              className="flex items-center gap-2 bg-[#c8a96e] text-[#0d1f1a] text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#e8d5a3] transition-colors"
            >
              <Phone size={16} />
              Connect with Senior Advisor
            </a>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-xs text-white/60">
              <badge.icon size={14} className="text-[#c8a96e] shrink-0" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#c8a96e] rounded-sm flex items-center justify-center">
                <span className="text-[#0d1f1a] font-bold text-sm font-serif">P</span>
              </div>
              <span className="font-serif text-xl text-white">PropCapital<span className="text-[#c8a96e]">.ai</span></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              India's first institutional-grade real estate advisory platform for the NCR. Algorithm-first. Fiduciary-first. Always.
            </p>
            <div className="space-y-3 text-sm text-white/50">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c8a96e] mt-0.5 shrink-0" />
                <span>Udyog Vihar Phase 4, Gurugram, Haryana 122016</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#c8a96e] shrink-0" />
                <span>+91 98999 99999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#c8a96e] shrink-0" />
                <span>hello@propcapital.ai</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 text-sm hover:text-[#c8a96e] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2024 PropCapital.ai. All rights reserved. RERA-compliant platform.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">RERA Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
