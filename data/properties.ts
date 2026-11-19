// Property data for PropCapital.ai
export interface Property {
  id: string;
  name: string;
  location: string;
  area: string;
  price: string;
  priceValue: number;
  pricePerSqFt: string;
  configuration: string;
  carpetArea: string;
  possession: string;
  status: 'ready' | 'under-construction' | 'new-launch';
  aiScore: number;
  aiLabel: string;
  highlights: string[];
  image: string;
  developer: string;
  reraId: string;
  tags: string[];
  type: 'residential' | 'commercial' | 'plot';
  yield?: string;
  appreciation?: string;
}

export const properties: Property[] = [
  {
    id: 'dlf-crest',
    name: 'DLF The Crest',
    location: 'Sector 54, Golf Course Road',
    area: 'Golf Course Corridor',
    price: '₹3.85 Cr',
    priceValue: 38500000,
    pricePerSqFt: '₹14,300',
    configuration: '3 BHK + Staff',
    carpetArea: '2,393 sq.ft',
    possession: 'Ready (OC Issued)',
    status: 'ready',
    aiScore: 94,
    aiLabel: '94% AI Synthesis',
    highlights: ['Aravalli ridge views', '12 min to DLF Cyber City', '100% OC', '4-tier security'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    developer: 'DLF Limited',
    reraId: 'RERA-PRJ-GGN-14-2617',
    tags: ['Premium', 'Golf Course', 'Ready'],
    type: 'residential',
    appreciation: '14% YoY',
  },
  {
    id: 'bptp-discovery',
    name: 'BPTP Discovery Park',
    location: 'Sector 80, Greater Faridabad Hub',
    area: 'Faridabad',
    price: '₹1.15 Cr',
    priceValue: 11500000,
    pricePerSqFt: '₹6,800',
    configuration: '3 BHK Grand',
    carpetArea: '1,872 sq.ft',
    possession: 'Ready to Move',
    status: 'ready',
    aiScore: 92,
    aiLabel: '92% High Yield',
    highlights: ['70% open green acreage', '5 mins from Delhi-Agra Expressway', 'Adjacent healthcare clusters'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    developer: 'BPTP',
    reraId: 'RERA-FBD-80-2024',
    tags: ['High Yield', 'Ready', 'Investment'],
    type: 'residential',
    yield: '8.4% p.a.',
    appreciation: '12% YoY',
  },
  {
    id: 'signature-global-63a',
    name: 'Signature Global City 63A',
    location: 'Golf Course Extension Road, Aravalli',
    area: 'Golf Course Ext.',
    price: '₹1.95 Cr',
    priceValue: 19500000,
    pricePerSqFt: '₹12,170',
    configuration: '3 BHK Premium Floor',
    carpetArea: '1,604 sq.ft',
    possession: 'Q4 2024 / Ready',
    status: 'ready',
    aiScore: 89,
    aiLabel: '89% Low Density Living',
    highlights: ['Independent floor autonomy', 'Dedicated home office', 'Exclusive terrace rights', '200m from Sector 56 Metro'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    developer: 'Signature Global',
    reraId: 'RERA-GGN-63A-2023',
    tags: ['Low Density', 'Golf Course Ext.', 'Sector 63A'],
    type: 'residential',
    appreciation: '9% YoY',
  },
  {
    id: 'm3m-crown',
    name: 'M3M Crown',
    location: 'Sector 111, Dwarka Expressway',
    area: 'Dwarka Expressway',
    price: '₹2.45 Cr',
    priceValue: 24500000,
    pricePerSqFt: '₹10,800',
    configuration: '3.5 BHK',
    carpetArea: '2,268 sq.ft',
    possession: 'Dec 2025',
    status: 'under-construction',
    aiScore: 87,
    aiLabel: '87% AI Match',
    highlights: ['Dwarka Expressway connectivity', 'Clubhouse 50,000 sq.ft', 'IGBC certified', 'IGI Airport 15 mins'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    developer: 'M3M India',
    reraId: 'RERA-GGN-111-2022',
    tags: ['Upcoming', 'Expressway', 'Premium'],
    type: 'residential',
  },
  {
    id: 'godrej-meridien',
    name: 'Godrej Meridien',
    location: 'Sector 106, Dwarka Expressway',
    area: 'Dwarka Expressway',
    price: '₹1.78 Cr',
    priceValue: 17800000,
    pricePerSqFt: '₹9,500',
    configuration: '2 BHK',
    carpetArea: '1,874 sq.ft',
    possession: 'Ready',
    status: 'ready',
    aiScore: 85,
    aiLabel: '85% AI Match',
    highlights: ['French architecture', 'Olympic-size swimming pool', 'Near Sector 101 Metro'],
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    developer: 'Godrej Properties',
    reraId: 'RERA-GGN-106-2021',
    tags: ['Ready', 'French Design', 'Metro Nearby'],
    type: 'residential',
  },
  {
    id: 'sobha-city',
    name: 'Sobha City',
    location: 'Sector 108, Dwarka Expressway',
    area: 'Dwarka Expressway',
    price: '₹1.42 Cr',
    priceValue: 14200000,
    pricePerSqFt: '₹8,200',
    configuration: '2 BHK',
    carpetArea: '1,730 sq.ft',
    possession: 'Ready',
    status: 'ready',
    aiScore: 83,
    aiLabel: '83% AI Match',
    highlights: ['Zero snagging philosophy', 'Backward integrated quality', 'Tennis courts & spa'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    developer: 'Sobha Limited',
    reraId: 'RERA-GGN-108-2020',
    tags: ['Quality Build', 'Ready', 'Sobha'],
    type: 'residential',
  },
  {
    id: 'aipl-business-club',
    name: 'AIPL Business Club',
    location: 'Sector 62, Golf Course Extension',
    area: 'Golf Course Ext.',
    price: '₹85 L',
    priceValue: 8500000,
    pricePerSqFt: '₹8,500',
    configuration: 'Office Space',
    carpetArea: '1,000 sq.ft',
    possession: 'Ready',
    status: 'ready',
    aiScore: 90,
    aiLabel: '90% Commercial Match',
    highlights: ['Grade A commercial', '100% power backup', 'Atrium design', 'Near Hero Honda Chowk metro'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    developer: 'AIPL',
    reraId: 'RERA-GGN-COM-62-2022',
    tags: ['Commercial', 'Grade A', 'Metro Nearby'],
    type: 'commercial',
    yield: '7.2% p.a.',
  },
  {
    id: 'tulip-monsella',
    name: 'Tulip Monsella',
    location: 'Sector 53, Golf Course Road',
    area: 'Golf Course Road',
    price: '₹5.20 Cr',
    priceValue: 52000000,
    pricePerSqFt: '₹16,500',
    configuration: '4 BHK + SQ',
    carpetArea: '3,152 sq.ft',
    possession: 'Ready',
    status: 'ready',
    aiScore: 96,
    aiLabel: '96% Ultra-Luxury Match',
    highlights: ['Ultra-luxury', 'Only 24 units/tower', 'Golf & Aravalli views', 'Private terrace gardens'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    developer: 'Tulip Infrastructure',
    reraId: 'RERA-GGN-53-2019',
    tags: ['Ultra-Luxury', 'Golf Course', '4 BHK'],
    type: 'residential',
    appreciation: '18% YoY',
  },
];

export const featuredProperties = properties.slice(0, 6);

export type UserIntent = 'homebuyer' | 'investor' | 'nri' | 'seller';

export const intentConfig: Record<UserIntent, { label: string; tagline: string; focus: string[] }> = {
  homebuyer: {
    label: 'Homebuyer',
    tagline: 'Find your dream home',
    focus: ['ready', 'location', 'amenities'],
  },
  investor: {
    label: 'Investor',
    tagline: 'Maximize returns with data-driven picks',
    focus: ['yield', 'appreciation', 'commercial'],
  },
  nri: {
    label: 'NRI',
    tagline: 'Invest from anywhere, we handle everything',
    focus: ['managed', 'rental', 'fiduciary'],
  },
  seller: {
    label: 'Seller',
    tagline: 'Get the best price for your property',
    focus: ['valuation', 'listing', 'buyers'],
  },
};
