import React from 'react';
import { Search, ShieldCheck, Car, Award, MapPin, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function Hero({ filters, setFilters, onSearchSubmit, availableBrands }) {
  
  const handleInputChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Developer Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs font-semibold text-blue-300 border border-blue-500/20 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Pakistan's Premium Car Marketplace • Designed by Siyam Khan</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Perfect Car</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Discover, compare, and buy your dream car from our curated collection in Peshawar, Islamabad, and across Pakistan.
          </p>
        </div>

        {/* Hero Search Box Card */}
        <div className="max-w-5xl mx-auto glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl shadow-blue-950/40 glow-blue">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Main Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by car name, brand or model (e.g. Civic, Fortuner, Grande)..."
                value={filters.searchQuery}
                onChange={(e) => handleInputChange('searchQuery', e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm sm:text-base transition-all"
              />
            </div>

            {/* Grid of Quick Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              
              {/* Brand Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="All">All Brands</option>
                  {availableBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="All">All Locations</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
              </div>

              {/* Min Price Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Min Price (PKR)</label>
                <select
                  value={filters.minPrice}
                  onChange={(e) => handleInputChange('minPrice', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="">No Min</option>
                  <option value="3000000">3.0 Lacs+</option>
                  <option value="5000000">5.0 Lacs+</option>
                  <option value="7000000">7.0 Lacs+</option>
                  <option value="10000000">1.0 Crore+</option>
                  <option value="15000000">1.5 Crore+</option>
                </select>
              </div>

              {/* Max Price Filter */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Max Price (PKR)</label>
                <select
                  value={filters.maxPrice}
                  onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="">No Max</option>
                  <option value="6000000">6.0 Lacs</option>
                  <option value="8000000">8.0 Lacs</option>
                  <option value="12000000">1.2 Crore</option>
                  <option value="20000000">2.0 Crore</option>
                  <option value="30000000">3.0 Crore</option>
                </select>
              </div>

            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800/80">
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                <span>Instant filter active • Updates in real-time</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Search className="w-5 h-5" />
                <span>Search Cars</span>
              </button>
            </div>

          </form>
        </div>

        {/* Hero Statistics */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          
          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3">
              <Car className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight">1,200+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Cars Available</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight">50+</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Top Brands</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white tracking-tight">100%</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">Verified Listings</div>
          </div>

        </div>

      </div>
    </section>
  );
}
