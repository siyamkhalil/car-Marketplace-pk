import React from 'react';
import { popularBrands } from '../data/cars';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandSection({ selectedBrand, onSelectBrand }) {
  
  const handleBrandClick = (brandName) => {
    onSelectBrand(brandName);
    const element = document.querySelector('#browse-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="popular-brands" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leading Manufacturers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Explore Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Brands</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Click on any brand logo below to immediately filter our active marketplace listings for that specific manufacturer.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularBrands.map((brand) => {
            const isSelected = selectedBrand === brand.name;
            return (
              <button
                key={brand.name}
                onClick={() => handleBrandClick(brand.name)}
                className={`group text-left glass-card rounded-2xl p-4 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-950/40 shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/50'
                    : 'border-slate-800 hover:border-slate-600 hover:bg-slate-900/80'
                }`}
              >
                {/* Brand Preview Background */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center font-black text-sm text-blue-400 group-hover:text-white transition-colors">
                    {brand.name.substring(0, 2).toUpperCase()}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-medium text-slate-400">
                    {brand.count}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Reset Filter Card if filtered */}
          {selectedBrand !== 'All' && (
            <button
              onClick={() => handleBrandClick('All')}
              className="text-left glass-card rounded-2xl p-4 border border-rose-500/40 bg-rose-950/20 hover:bg-rose-900/30 transition-all flex flex-col justify-between h-36"
            >
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center font-bold text-xs">
                ALL
              </div>
              <div>
                <h3 className="text-base font-bold text-rose-300">Show All Brands</h3>
                <span className="text-xs text-slate-400">Clear brand filter</span>
              </div>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
