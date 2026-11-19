'use client';
import Image from 'next/image';
import { TrendingUp, Shield, Award, Eye } from 'lucide-react';
import { type Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured' | 'compact';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const scoreColor = property.aiScore >= 90 ? '#2d7a4f' : property.aiScore >= 80 ? '#c8a96e' : '#4a4a4a';

  return (
    <div className="property-card bg-white rounded-xl overflow-hidden border border-[#e5e0d8] hover:border-[#1a3c34]/30 hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="property-image object-cover"
          unoptimized
        />
        {/* AI Score badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-sm"
          style={{ backgroundColor: `${scoreColor}cc` }}
        >
          {property.aiLabel}
        </div>
        {/* Status */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${
          property.status === 'ready'
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : property.status === 'under-construction'
            ? 'bg-amber-50 text-amber-700 border border-amber-200'
            : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          {property.status === 'ready' ? 'Ready' : property.status === 'under-construction' ? 'UC' : 'New Launch'}
        </div>
        {/* Tags */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex gap-1.5 flex-wrap">
            {property.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-white/90 text-[10px] font-medium bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Developer + RERA */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#8a8a8a] font-medium">{property.developer}</span>
          <div className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
            <Shield size={9} />
            RERA
          </div>
        </div>

        {/* Name + Location */}
        <h3 className="font-serif text-lg font-semibold text-[#1a3c34] leading-tight mb-1 group-hover:text-[#2d6b5e] transition-colors">
          {property.name}
        </h3>
        <p className="text-xs text-[#8a8a8a] mb-3 flex items-center gap-1">
          <span className="text-[#c8a96e]">📍</span>
          {property.location}
        </p>

        {/* Config data */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-[#f5f0e8] rounded-lg p-2 text-center">
            <div className="text-[10px] text-[#8a8a8a] mb-0.5">Config</div>
            <div className="text-xs font-semibold text-[#1c1c1c] leading-tight">{property.configuration}</div>
          </div>
          <div className="bg-[#f5f0e8] rounded-lg p-2 text-center">
            <div className="text-[10px] text-[#8a8a8a] mb-0.5">Area</div>
            <div className="text-xs font-semibold text-[#1c1c1c] leading-tight">{property.carpetArea}</div>
          </div>
          <div className="bg-[#f5f0e8] rounded-lg p-2 text-center">
            <div className="text-[10px] text-[#8a8a8a] mb-0.5">Possession</div>
            <div className="text-xs font-semibold text-[#1c1c1c] leading-tight">{property.possession.split(' ')[0]}</div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-2xl font-bold text-[#1a3c34]">{property.price}</div>
            <div className="text-xs text-[#8a8a8a]">{property.pricePerSqFt} / sq.ft</div>
          </div>
          {property.appreciation && (
            <div className="flex items-center gap-1 text-xs text-emerald-700 font-medium">
              <TrendingUp size={13} />
              {property.appreciation}
            </div>
          )}
          {property.yield && !property.appreciation && (
            <div className="flex items-center gap-1 text-xs text-[#c8a96e] font-medium">
              <Award size={13} />
              {property.yield}
            </div>
          )}
        </div>

        {/* Highlights */}
        {property.highlights.length > 0 && (
          <div className="text-xs text-[#4a4a4a] mb-4 leading-relaxed">
            {property.highlights[0]}
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <button className="flex-1 border border-[#1a3c34] text-[#1a3c34] text-xs font-medium py-2.5 rounded-lg hover:bg-[#1a3c34] hover:text-white transition-all">
            Compare
          </button>
          <button className="flex-1 bg-[#1a3c34] text-white text-xs font-medium py-2.5 rounded-lg hover:bg-[#2d6b5e] transition-colors flex items-center justify-center gap-1.5">
            <Eye size={12} />
            Schedule Visit
          </button>
        </div>
      </div>
    </div>
  );
}
