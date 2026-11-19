'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  {
    label: 'Buy',
    href: '#properties',
    children: ['Residential', 'Commercial', 'Plots', 'Luxury'],
  },
  {
    label: 'Sell',
    href: '#services',
    children: ['List Property', 'Valuation', 'Seller Tools'],
  },
  {
    label: 'Invest',
    href: '#insights',
    children: ['Yield Opportunities', 'Market Insights', 'NRI Investments'],
  },
  {
    label: 'IRA AI',
    href: '#ira',
  },
  {
    label: 'Tools',
    href: '#calculator',
    children: ['EMI Calculator', 'Yield Calculator', 'Neighbourhood Atlas'],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e0d8]'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      {/* Top ticker bar */}
      <div className="bg-[#1a3c34] text-white text-xs py-1.5 overflow-hidden">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8 whitespace-nowrap">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full animate-pulse"></span>
                <span className="text-[#c8a96e] font-medium">LIVE</span>
                Synthesizing 4,120 RERA-registered developments across Gurugram, Faridabad &amp; Noida Expressway
              </span>
              <span className="text-[#e8d5a3]">•</span>
              <span>100% OC / RERA Authenticated</span>
              <span className="text-[#e8d5a3]">•</span>
              <span>Latest: DLF Sector 54 — ₹14,300/sq.ft ↑14% YoY</span>
              <span className="text-[#e8d5a3]">•</span>
              <span>Zero unsolicited broker calls guaranteed</span>
              <span className="text-[#e8d5a3]">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#1a3c34] rounded-sm flex items-center justify-center">
            <span className="text-[#c8a96e] font-bold text-sm font-serif">P</span>
          </div>
          <div className="leading-none">
            <span className="font-serif text-lg font-semibold text-[#1a3c34]">PropCapital</span>
            <span className="text-[#c8a96e] text-xs font-medium">.ai</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1c1c1c] hover:text-[#1a3c34] transition-colors rounded-md hover:bg-[#f5f0e8]"
              >
                {link.label}
                {link.children && <ChevronDown size={14} className="text-[#8a8a8a]" />}
              </button>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-[#e5e0d8] py-1 z-50">
                  {link.children.map((child) => (
                    <button
                      key={child}
                      className="w-full text-left px-4 py-2 text-sm text-[#4a4a4a] hover:text-[#1a3c34] hover:bg-[#f5f0e8] transition-colors"
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919899999999"
            className="flex items-center gap-2 text-sm text-[#4a4a4a] hover:text-[#1a3c34] transition-colors"
          >
            <Phone size={15} />
            <span>+91 98999 99999</span>
          </a>
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-[#1a3c34] text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-[#2d6b5e] transition-colors"
          >
            Connect with Advisor
          </button>
        </div>

        {/* Mobile menu btn */}
        <button
          className="lg:hidden p-2 rounded-md text-[#1a3c34]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e0d8] py-4 px-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left px-3 py-3 text-sm font-medium text-[#1c1c1c] hover:text-[#1a3c34] hover:bg-[#f5f0e8] rounded-md transition-colors"
              >
                {link.label}
              </button>
              {link.children && (
                <div className="ml-4 border-l-2 border-[#e5e0d8] pl-3 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <button
                      key={child}
                      className="w-full text-left py-2 text-sm text-[#4a4a4a] hover:text-[#1a3c34] transition-colors"
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-[#e5e0d8] mt-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-[#1a3c34] text-white text-sm font-medium px-5 py-3 rounded-md"
            >
              Connect with Advisor
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
