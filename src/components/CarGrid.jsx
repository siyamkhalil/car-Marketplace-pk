import React from 'react';
import CarCard from './CarCard';
import { Car, Frown, RotateCcw } from 'lucide-react';

export default function CarGrid({ cars, favorites, onToggleFavorite, onViewDetails, onClearFilters, activeTab }) {

  if (cars.length === 0) {
    return (
      <div id="browse-cars" className="glass-card rounded-3xl p-12 text-center max-w-2xl mx-auto border border-slate-800 my-12">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <Frown className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">No Vehicles Found</h3>
        <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
          {activeTab === 'favorites'
            ? "You haven't added any vehicles to your favorites list yet. Click the heart icon on any car card to save it here!"
            : "No cars matched your exact search or filter criteria. Try resetting filters or choosing broader search terms."
          }
        </p>
        {activeTab !== 'favorites' && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <section id="browse-cars" className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favorites.includes(car.id)}
            onToggleFavorite={onToggleFavorite}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
}
