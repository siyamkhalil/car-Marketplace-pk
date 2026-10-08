import React from 'react';
import { Heart, MapPin, Gauge, Fuel, Zap, Eye, CheckCircle2 } from 'lucide-react';
import { formatPKR } from '../data/cars';

export default function CarCard({ car, isFavorite, onToggleFavorite, onViewDetails }) {
  return (
    <div className="group glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
      
      {/* Image Header with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"></div>

        {/* Featured Tag */}
        {car.featured && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600/90 text-white text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-md flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-cyan-300" />
            Verified Listing
          </span>
        )}

        {/* Location Tag */}
        <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-200 text-xs font-semibold backdrop-blur-md flex items-center gap-1 border border-slate-700/50">
          <MapPin className="w-3 h-3 text-blue-400" />
          {car.location}
        </span>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md border transition-all duration-200 ${
            isFavorite
              ? 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/30 scale-110'
              : 'bg-slate-950/70 border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-900'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Brand & Year Row */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {car.brand}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">
              {car.year}
            </span>
          </div>

          {/* Model Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
            {car.model}
          </h3>

          {/* Specs Grid Pill */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-slate-300 text-xs font-medium">
            
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{car.mileage}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{car.fuel}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{car.transmission}</span>
            </div>

          </div>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] text-slate-400 uppercase font-semibold">Total Price</span>
            <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              {formatPKR(car.price)}
            </span>
          </div>

          <button
            onClick={() => onViewDetails(car)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 hover:border-blue-500 transition-all duration-200 shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>
        </div>

      </div>

    </div>
  );
}
