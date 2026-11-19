// Chatbot FAQ data for PropCapital.ai
export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface FAQEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  followups?: string[];
}

export const faqData: FAQEntry[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening', 'start'],
    question: 'Hello',
    answer: `Namaste! 🏡 I'm **PropCapital Assistant** — your AI-powered real estate guide for the NCR region.\n\nI can help you with:\n• Finding the right property\n• Understanding pricing & market trends\n• Calculating your home loan EMI\n• NRI investment guidance\n• Connecting you with our advisors\n\nWhat would you like to explore today?`,
    followups: ['How can I find a property?', 'Tell me about IRA AI matching', 'Calculate my EMI', 'NRI services'],
  },
  {
    id: 'about',
    keywords: ['what is propcapital', 'about', 'who are you', 'tell me about', 'propcapital.ai', 'platform', 'company'],
    question: 'What is PropCapital.ai?',
    answer: `**PropCapital.ai** is a premier real estate technology and advisory platform for the National Capital Region (NCR).\n\nWe serve Gurugram, Noida, Faridabad & Noida Expressway with:\n\n🤖 **IRA Neural Engine** — AI-powered property matching\n📊 **Algorithm-first due diligence** — Data over broker opinion\n🔍 **4,120+ RERA-authenticated** developments tracked live\n🏦 **Fiduciary advisory** — We work for you, not the developer\n📋 **Zero unsolicited broker calls** guaranteed\n\nWe are India's first institutional-grade retail property platform.`,
    followups: ['How does IRA work?', 'Which locations do you cover?', 'What services do you offer?'],
  },
  {
    id: 'find-property',
    keywords: ['find', 'search', 'buy', 'flat', 'apartment', 'property', 'home', 'house', 'looking for', 'purchase', 'bhk', '2bhk', '3bhk', '4bhk'],
    question: 'How can I find a property?',
    answer: `Finding your perfect property on PropCapital.ai is simple:\n\n**1. Set your intent** — Homebuyer, Investor, NRI, or Seller\n**2. Use our smart search** — Filter by location, budget, BHK, and type\n**3. IRA AI matching** — Our algorithm scores properties against your requirements (1–100)\n**4. Review curated listings** — Each property comes with due diligence data\n**5. Schedule viewings** — Connect with our senior advisors\n\nWe cover properties from ₹40 Lakhs to ₹20+ Crores across NCR.\n\nTip: Use the search bar on the homepage to start your property discovery journey!`,
    followups: ['Which locations do you cover?', 'What is IRA AI matching?', 'Connect with an advisor'],
  },
  {
    id: 'locations',
    keywords: ['location', 'area', 'city', 'where', 'sector', 'gurugram', 'gurgaon', 'noida', 'faridabad', 'cover', 'available', 'ncr', 'delhi'],
    question: 'Which locations do you cover?',
    answer: `We cover the entire **NCR (National Capital Region)**:\n\n📍 **Gurugram**\n• Golf Course Road\n• Golf Course Extension Road (Sectors 55–75)\n• Dwarka Expressway (Sectors 99–115)\n• Sohna Road\n• MG Road corridor\n\n📍 **Noida**\n• Noida Expressway (Sectors 128–168)\n• Sector 44, 50, 76, 100, 150\n• Greater Noida West\n\n📍 **Faridabad**\n• Sector 80 & Bypass Corridor\n• NH-19 Expressway belt\n\nWe actively track **4,120+ RERA-registered projects** across these corridors.`,
    followups: ['Properties in Gurugram', 'Properties in Noida', 'Find property under 1 Crore'],
  },
  {
    id: 'residential',
    keywords: ['residential', '2 bhk', '3 bhk', '4 bhk', 'flat', 'apartment', 'villa', 'independent floor', 'independent house'],
    question: 'How can I explore residential properties?',
    answer: `PropCapital.ai lists **residential properties** across all configurations:\n\n🏢 **2 BHK** — ₹40L–₹1.8 Cr (Faridabad, Dwarka Expressway)\n🏠 **3 BHK** — ₹85L–₹3.5 Cr (Gurugram, Noida Expressway)\n🏡 **4 BHK & Villas** — ₹2.5 Cr–₹10+ Cr (Golf Course Road, DLF)\n🌳 **Independent Floors** — ₹1.2 Cr–₹2.5 Cr (South Gurugram)\n\n**How to filter:**\nUse the "Browse by Configuration" section on our homepage to filter by bedrooms and budget range.\n\nAll listings are **RERA-verified** with OC/CC status displayed upfront.`,
    followups: ['Top developers in NCR', 'Calculate EMI for 3 BHK', 'View recommended properties'],
  },
  {
    id: 'commercial',
    keywords: ['commercial', 'office', 'shop', 'retail', 'coworking', 'sco', 'business center', 'investment commercial'],
    question: 'How can I explore commercial properties?',
    answer: `PropCapital.ai lists premium **commercial real estate** in NCR:\n\n🏢 **Grade A Office Spaces** — Sector 62, Cyber City, Noida Sector 16\n🏪 **Retail / SCO Plots** — Gurugram sectors 48, 65, 71\n📦 **Coworking Studios** — Cyber Hub, Udyog Vihar\n🏭 **Warehousing** — NH-19 Faridabad, Kundli\n\n**Investment yields** in commercial range from **6.5%–9.5% p.a.**\n\nCommercial investments are especially recommended for NRI investors seeking stable rental income.\n\nShall I connect you with our commercial investment specialist?`,
    followups: ['NRI investment options', 'What yields can I expect?', 'Connect with advisor'],
  },
  {
    id: 'emi-calculator',
    keywords: ['emi', 'loan', 'monthly payment', 'home loan', 'calculate', 'interest', 'mortgage', 'finance', 'bank'],
    question: 'How can I calculate my home loan EMI?',
    answer: `Use our **built-in EMI Calculator** on the PropCapital.ai homepage!\n\n**Formula:**\nEMI = P × r × (1+r)^n / ((1+r)^n - 1)\n\nWhere:\n• P = Principal loan amount\n• r = Monthly interest rate (annual rate ÷ 12 ÷ 100)\n• n = Loan tenure in months\n\n**Example:**\nFor a ₹1 Crore property with 20% down payment:\n• Loan: ₹80 Lakhs\n• Rate: 8.5% p.a.\n• Tenure: 20 years (240 months)\n• **Monthly EMI: ≈ ₹69,435**\n\nScroll to the Financial Tools section on our homepage to use the interactive calculator.`,
    followups: ['Current home loan rates', 'What is PMAY subsidy?', 'Connect with loan advisor'],
  },
  {
    id: 'advisor',
    keywords: ['advisor', 'connect', 'contact', 'speak', 'talk', 'call', 'support', 'help', 'human', 'agent', 'consult'],
    question: 'How can I connect with a property advisor?',
    answer: `Connect with our **Senior Advisory Team** — zero spam guaranteed:\n\n📞 **Instant Callback** — Average response time: 1 min 42 secs\n💬 **WhatsApp** — Message us anytime\n📧 **Email** — advisory@propcapital.ai\n🗓️ **Schedule a call** — Pick a convenient slot\n\n**What our advisors offer:**\n✅ Fiduciary representation (we work for you)\n✅ Direct, pre-negotiated institutional pricing\n✅ Zero unsolicited broker calls\n✅ RERA Escrow & Banking Due Diligence\n✅ Complete Title & Encumbrance Verification\n\nClick "Connect with Senior Advisor" button at the top of the page to get started!`,
    followups: ['What is PropCapital Protocol?', 'NRI services', 'Book site visit'],
  },
  {
    id: 'seller',
    keywords: ['sell', 'list', 'seller', 'resale', 'my property', 'selling', 'valuation', 'price my'],
    question: 'How can I sell or list my property?',
    answer: `**Selling your property with PropCapital.ai:**\n\n📋 **Step 1: Get a Free Valuation**\nOur algorithm analyzes recent transactions, circle rates, and demand indicators to give you an accurate market price.\n\n📸 **Step 2: Professional Listing**\nWe create premium listings with professional photography and detailed descriptions.\n\n🎯 **Step 3: Targeted Buyer Matching**\nIRA matches your property with pre-qualified buyers from our investor and homebuyer database.\n\n📝 **Step 4: Transaction Support**\nEnd-to-end legal, documentation, and registration support.\n\n**Seller Promise:**\n• Zero hidden charges\n• Best price guarantee\n• Average 23 days to close\n\nFill our "List Your Property" form on the website to get started!`,
    followups: ['How is property valued?', 'What documents do I need?', 'Connect with advisor'],
  },
  {
    id: 'nri',
    keywords: ['nri', 'outside india', 'abroad', 'overseas', 'foreign', 'nre', 'nro', 'fema', 'repatriation', 'nri services', 'indian abroad'],
    question: 'What services are available for NRIs?',
    answer: `PropCapital.ai offers **specialized NRI Investment Services:**\n\n🌏 **End-to-End Remote Purchase**\nBuy property from anywhere in the world — we handle everything.\n\n📜 **FEMA & RBI Compliance**\nFull compliance with Foreign Exchange Management Act rules.\n\n🏦 **NRE/NRO Account Guidance**\nOptimal banking structures for property investment.\n\n📊 **Rental Management**\nWe manage your property and repatriate rental income.\n\n🔒 **Power of Attorney**\nSecure, legally-vetted POA execution for remote transactions.\n\n💰 **Recommended by NRIs:**\n• Assured rental yield: 5%–9%\n• Capital appreciation: 10%–18% p.a.\n• Zero management headache\n\nBook a **free NRI consultation** today!`,
    followups: ['Commercial property for NRI', 'Tax implications for NRI', 'Connect with NRI advisor'],
  },
  {
    id: 'ira',
    keywords: ['ira', 'ai matching', 'algorithm', 'neural engine', 'ai score', 'intelligent', 'machine learning', 'how does ai work', 'match score'],
    question: 'How does IRA property matching work?',
    answer: `**IRA (Intelligent Real-estate Advisor)** is PropCapital.ai's proprietary AI engine:\n\n🧠 **Neural Engine v4.5** — Processes 200+ property parameters\n\n**How IRA works:**\n1. **Understands your goals** — Budget, lifestyle, investment targets, timelines\n2. **Cross-indexes 4,120+ projects** — RERA data, Circle rates, Developer track records\n3. **Scores each match** — On a 0–100 AI Match Scale\n4. **Filters legal risks** — Removes properties without OC/CC, builder escrow issues\n5. **Ranks by your priorities** — Location weight, yield target, density preference\n\n**IRA Score breakdown:**\n• Location Score (0–100)\n• Builder Score (0–100)\n• Price Score (0–100)\n• Legal Score (0–100)\n• AI Synthesis Score = Weighted composite\n\nThe higher the score, the better the match for your specific profile!`,
    followups: ['Try IRA matching', 'What is AI Synthesis Score?', 'View top matches'],
  },
  {
    id: 'investment',
    keywords: ['invest', 'investment', 'returns', 'yield', 'roi', 'capital appreciation', 'rental income', 'portfolio', 'real estate investment'],
    question: 'How can I explore real estate investment opportunities?',
    answer: `PropCapital.ai is built for **data-driven real estate investment:**\n\n📈 **NCR Investment Hotspots (2024–25):**\n• Golf Course Ext. — 12%–18% appreciation\n• Dwarka Expressway — 15%–20% (post-elevated highway)\n• Noida Sector 150 — 10%–14% (IT hub proximity)\n• Faridabad Bypass — 8%–12% (yield play)\n\n💼 **Investment Products:**\n• Ready-to-move residential (immediate rental)\n• Pre-launch projects (highest appreciation potential)\n• Commercial Grade A (6.5%–9.5% rental yield)\n• SCO plots (Gurugram: fastest rising asset class)\n\n📊 **Our Tools:**\n• Yield Calculator\n• Appreciation Tracker\n• NCR Neighbourhood Atlas\n• Developer Escrow Audit Reports\n\nShall I show you curated high-yield opportunities?`,
    followups: ['High yield properties', 'Compare Gurugram vs Noida', 'NRI investment options'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'email', 'phone', 'number', 'address', 'office', 'headquarters'],
    question: 'How can I contact PropCapital.ai?',
    answer: `**Get in touch with PropCapital.ai:**\n\n📞 **Senior Advisory Line:** +91-98XXX-XXXXX\n📧 **Email:** hello@propcapital.ai\n💬 **WhatsApp:** +91-98XXX-XXXXX\n🌐 **Website:** propcapital.ai\n\n📍 **Office:**\nPropCapital Advisory Hub\nUdyog Vihar, Phase 4\nGurugram, Haryana 122016\n\n⏰ **Working Hours:**\nMon–Sat: 9 AM – 7 PM\nSun: 10 AM – 5 PM\n\n🕐 **Average response time:** 1 min 42 secs\n\nYou can also use the **chat form** in the footer or **Connect with Senior Advisor** button above!`,
    followups: ['Book a site visit', 'Schedule a call', 'What is PropCapital Protocol?'],
  },
  {
    id: 'protocol',
    keywords: ['protocol', 'process', 'safe', 'trust', 'rera', 'escrow', 'legal', 'title', 'encumbrance', 'due diligence'],
    question: 'What is PropCapital Protocol?',
    answer: `The **PropCapital Safe Transaction Protocol™** is our 6-step buyer protection framework:\n\n✅ **Step 1:** Complete Title & Encumbrance Verification\n✅ **Step 2:** RERA Registration & OC/CC Status Check\n✅ **Step 3:** Builder Escrow Account Verification\n✅ **Step 4:** Financial & Legal Document Review\n✅ **Step 5:** Direct Manufacturer Price Discovery (no middlemen)\n✅ **Step 6:** Independent Legal Representation for Agreement\n\n**Our Guarantees:**\n🛡️ Zero Unsolicited Broker Calls\n🛡️ Direct Institutional Pricing (not inflated)\n🛡️ Fiduciary Representation (we represent YOU)\n🛡️ Zero hidden charges or commissions from buyer\n\nThis protocol has helped 2,400+ families transact safely.`,
    followups: ['Connect with advisor', 'View verified properties', 'NRI services'],
  },
  {
    id: 'developers',
    keywords: ['developer', 'builder', 'dlf', 'm3m', 'sobha', 'godrej', 'brigade', 'signature global', 'bptp', 'tulip', 'best developer'],
    question: 'Which developers are listed on PropCapital.ai?',
    answer: `PropCapital.ai lists projects from **NCR's most audited developers:**\n\n🥇 **Tier 1 (Escrow Verified)**\n• DLF Limited — Golf Course, Sector 54\n• Godrej Properties — Dwarka Expressway\n• M3M India — Sectors 65, 111\n• Sobha Limited — Sector 108\n\n🥈 **Tier 2 (RERA Compliant)**\n• Signature Global — South Gurugram\n• BPTP — Faridabad, Sector 80\n• Tulip Infrastructure — Golf Course Road\n• ATS Greens — Noida Expressway\n\n**How we audit developers:**\n• Builder Escrow account verification\n• OC/CC completion track record\n• RERA compliance score\n• Price appreciation history\n\nAll listed projects have passed our due diligence checklist!`,
    followups: ['View DLF properties', 'Developer comparison', 'What is Escrow verification?'],
  },
  {
    id: 'default',
    keywords: [],
    question: 'Default response',
    answer: `I didn't quite catch that. Let me help you explore what PropCapital.ai offers:\n\n🏡 **Finding Properties** — Search by location, budget, BHK\n🤖 **IRA AI Matching** — Get AI-scored property recommendations\n📊 **Investment Analysis** — Yields, appreciation, market data\n💰 **EMI Calculator** — Calculate your home loan instantly\n🌏 **NRI Services** — Invest from anywhere in the world\n📞 **Connect Advisor** — Speak with our senior team\n\nOr try asking:\n• "Show properties in Gurugram under 2 Cr"\n• "How does IRA work?"\n• "Calculate EMI for 80 lakhs"\n• "NRI investment options"`,
    followups: ['How can I find a property?', 'Tell me about IRA', 'Calculate my EMI', 'NRI services'],
  },
];

export function findResponse(input: string): FAQEntry {
  const lowerInput = input.toLowerCase().trim();
  
  // Score each FAQ entry
  let bestMatch = faqData.find(f => f.id === 'default')!;
  let bestScore = 0;

  for (const faq of faqData) {
    if (faq.id === 'default') continue;
    let score = 0;
    for (const keyword of faq.keywords) {
      if (lowerInput.includes(keyword)) {
        score += keyword.split(' ').length; // multi-word phrases score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestMatch;
}

export const suggestedQuestions = [
  'What is PropCapital.ai?',
  'How can I find a property?',
  'How does IRA AI matching work?',
  'Calculate my home loan EMI',
  'NRI investment services',
  'Which locations do you cover?',
  'Connect with an advisor',
  'How can I sell my property?',
];
