import React, { useEffect } from 'react';
import { X, Heart, MessageSquare, PhoneCall, MapPin, Gauge, Fuel, Zap, ShieldCheck, Check, Share2, Calendar, FileText } from 'lucide-react';
import { formatPKR } from '../data/cars';

export default function CarDetailsModal({ car, onClose, isFavorite, onToggleFavorite }) {
  
  // Body scroll lock effect
  useEffect(() => {
    if (!car) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [car]);

  if (!car) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Siyam, I'm interested in the ${car.brand} ${car.model} (${car.year}) listed on AutoHub for ${formatPKR(car.price)}.`
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${car.brand} ${car.model}`,
        text: `Check out this ${car.brand} ${car.model} on AutoHub!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-blue-950/80 my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Image & Quick Highlight Side (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 relative flex flex-col justify-between">
            
            <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:h-full overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20 pointer-events-none"></div>

              {/* Verified Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-lg">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Inspection
                </span>
              </div>
            </div>

            {/* Quick Specs Strip */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800/80 grid grid-cols-4 gap-2 text-center">
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Year</span>
                <span className="text-sm font-bold text-white">{car.year}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Mileage</span>
                <span className="text-sm font-bold text-white">{car.mileage}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Fuel</span>
                <span className="text-sm font-bold text-white">{car.fuel}</span>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-semibold uppercase">Transmission</span>
                <span className="text-sm font-bold text-white">{car.transmission}</span>
              </div>
            </div>

          </div>

          {/* Details & Actions Side (5 cols) */}
          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 max-h-[80vh] overflow-y-auto">
            
            <div>
              {/* Brand & Share */}
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-black uppercase tracking-widest text-blue-400">
                  {car.brand}
                </span>
                <button 
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Share vehicle link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold text-white mb-2 leading-snug">
                {car.model}
              </h2>

              {/* Price Banner */}
              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 mb-6 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Asking Price</span>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {formatPKR(car.price)}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {car.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  Vehicle Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                  {car.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Full Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Engine Capacity</span>
                    <span className="font-bold text-white">{car.engine}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Exterior Color</span>
                    <span className="font-bold text-white">{car.color}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Assembly</span>
                    <span className="font-bold text-white">{car.assembly}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Registration City</span>
                    <span className="font-bold text-white">{car.registration}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Seller Contact & Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              
              <div className="text-xs text-slate-400 flex items-center justify-between mb-1">
                <span>Verified Seller: <strong className="text-white font-semibold">Siyam Khan</strong></span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Active Now
                </span>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/923349122793?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Seller (+92 334 9122793)</span>
              </a>

              {/* Call & Favorite Row */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+923349122793"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Seller</span>
                </a>

                <button
                  onClick={() => onToggleFavorite(car.id)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-xs border transition-all ${
                    isFavorite
                      ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isFavorite ? 'Favorited' : 'Add Favorite'}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
