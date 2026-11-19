'use client';
import { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', intent: 'homebuyer', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) errs.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#f5f0e8]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-[#c8a96e] uppercase tracking-widest mb-3">Use your privilege with a certified Advisor</p>
            <h2 className="font-serif text-4xl font-bold text-[#1a3c34] mb-6">
              Connect with a<br />Senior Advisory Expert.
            </h2>
            <p className="text-[#4a4a4a] mb-8 leading-relaxed">
              Our senior advisors work exclusively for you — not the developer. Zero phone spam. Fiduciary client representation with pre-negotiated institutional pricing.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Phone, label: 'Call us directly', value: '+91 98999 99999', sub: 'Avg. callback: 1 min 42 secs' },
                { icon: Mail, label: 'Email us', value: 'advisory@propcapital.ai', sub: 'Response within 2 hours' },
                { icon: MessageSquare, label: 'WhatsApp', value: '+91 98999 99999', sub: 'Available Mon–Sat, 9am–7pm' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a3c34]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#1a3c34]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8a8a8a]">{label}</div>
                    <div className="font-semibold text-[#1c1c1c]">{value}</div>
                    <div className="text-xs text-[#8a8a8a]">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1a3c34] rounded-xl p-6 text-white">
              <div className="font-serif text-lg font-bold mb-2">Our Promise to You</div>
              <ul className="space-y-2">
                {[
                  'Zero unsolicited broker calls or messages',
                  'Fiduciary representation — we work for you',
                  'Direct institutional pricing, no markup',
                  'Complete RERA & legal due diligence',
                ].map((promise) => (
                  <li key={promise} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-[#c8a96e] shrink-0" />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-8 border border-[#e5e0d8] shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1a3c34] mb-2">We'll be in touch!</h3>
                <p className="text-[#4a4a4a] text-sm mb-6">
                  Thank you, {form.name}. A certified PropCapital advisor will contact you within 1 min 42 secs during business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[#1a3c34] font-medium hover:text-[#c8a96e] transition-colors"
                >
                  Submit another enquiry →
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-[#1a3c34] mb-6">Book a Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[#4a4a4a] block mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-[#e5e0d8] focus:border-[#1a3c34]'}`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[#4a4a4a] block mb-1.5">Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="10-digit mobile"
                        className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-[#e5e0d8] focus:border-[#1a3c34]'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#4a4a4a] block mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`w-full border rounded-lg px-4 py-3 text-sm outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-[#e5e0d8] focus:border-[#1a3c34]'}`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#4a4a4a] block mb-1.5">I am a</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { value: 'homebuyer', label: 'Homebuyer' },
                        { value: 'investor', label: 'Investor' },
                        { value: 'nri', label: 'NRI' },
                        { value: 'seller', label: 'Seller' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm({ ...form, intent: opt.value })}
                          className={`py-2 text-sm rounded-lg border transition-all ${
                            form.intent === opt.value
                              ? 'bg-[#1a3c34] text-white border-[#1a3c34]'
                              : 'border-[#e5e0d8] text-[#4a4a4a] hover:border-[#1a3c34]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-[#4a4a4a] block mb-1.5">Your requirement (optional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="e.g. 3 BHK in Gurugram under ₹2 Cr, ready to move..."
                      className="w-full border border-[#e5e0d8] rounded-lg px-4 py-3 text-sm outline-none focus:border-[#1a3c34] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a3c34] text-white font-semibold py-4 rounded-xl hover:bg-[#2d6b5e] transition-colors"
                  >
                    Request Free Consultation →
                  </button>
                  <p className="text-[10px] text-[#8a8a8a] text-center">
                    By submitting, you agree to our Privacy Policy. Zero spam guarantee.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
