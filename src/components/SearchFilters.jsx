import React from 'react';
import { Search, RotateCcw, ArrowUpDown, Filter, X } from 'lucide-react';

export default function SearchFilters({
  filters,
  setFilters,
  sortBy,
  setSortBy,
  totalCars,
  filteredCount,
  onClearFilters,
  availableBrands,
  activeTab,
  setActiveTab
}) {

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const hasActiveFilters = 
    filters.searchQuery !== '' ||
    filters.brand !== 'All' ||
    filters.model !== '' ||
    filters.minPrice !== '' ||
    filters.maxPrice !== '' ||
    filters.year !== 'All' ||
    filters.fuelType !== 'All' ||
    filters.transmission !== 'All' ||
    filters.location !== 'All';

  return (
    <div className="glass-card rounded-2xl p-5 md:p-6 mb-8 border border-slate-800 shadow-xl">
      
      {/* Top Header & Tab Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-800">
        
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Filter className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Filter Vehicles
            </h2>
            <p className="text-xs text-slate-400">
              Showing <span className="font-bold text-blue-400">{filteredCount}</span> of {totalCars} available listings
            </p>
          </div>
        </div>

        {/* View Mode Tabs (All Cars vs Favorites) */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900/90 p-1 rounded-xl border border-slate-800 flex text-xs font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Listings ({totalCars})
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'favorites'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Favorite Cars Only
            </button>
          </div>
        </div>

      </div>

      {/* Primary Search Field */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by keyword, car name, brand, or model..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all"
          />
          {filters.searchQuery && (
            <button
              onClick={() => handleFilterChange('searchQuery', '')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Detailed Filters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
        
        {/* Brand */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Brand</label>
          <select
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Brands</option>
            {availableBrands.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">City/Location</label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Cities</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Peshawar">Peshawar</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Fuel Type</label>
          <select
            value={filters.fuelType}
            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Fuels</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Transmission</label>
          <select
            value={filters.transmission}
            onChange={(e) => handleFilterChange('transmission', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Types</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Min Price</label>
          <select
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="">No Min</option>
            <option value="3000000">PKR 30 Lacs</option>
            <option value="5000000">PKR 50 Lacs</option>
            <option value="7000000">PKR 70 Lacs</option>
            <option value="10000000">PKR 1.0 Crore</option>
            <option value="15000000">PKR 1.5 Crore</option>
          </select>
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1">Max Price</label>
          <select
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
          >
            <option value="">No Max</option>
            <option value="6000000">PKR 60 Lacs</option>
            <option value="8000000">PKR 80 Lacs</option>
            <option value="12000000">PKR 1.2 Crore</option>
            <option value="20000000">PKR 2.0 Crore</option>
            <option value="30000000">PKR 3.0 Crore</option>
          </select>
        </div>

      </div>

      {/* Sorting Bar & Clear Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        
        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <ArrowUpDown className="w-4 h-4 text-blue-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-400 shrink-0">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium focus:outline-none focus:border-blue-500"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest Year</option>
            <option value="oldest">Oldest Year</option>
            <option value="lowest-mileage">Lowest Mileage</option>
          </select>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}

      </div>

    </div>
  );
}
