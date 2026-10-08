import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilters from './components/SearchFilters';
import CarGrid from './components/CarGrid';
import CarDetailsModal from './components/CarDetailsModal';
import SellCarModal from './components/SellCarModal';
import BrandSection from './components/BrandSection';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { carsData } from './data/cars';

export default function App() {
  // Cars list state (initialized with fake Pakistani cars data)
  const [cars, setCars] = useState(carsData);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('autohub_favorites');
      return saved ? JSON.parse(saved) : [1, 4, 6]; // default pre-favorited items for demo
    } catch {
      return [1, 4, 6];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('autohub_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  // Tab State: 'all' or 'favorites'
  const [activeTab, setActiveTab] = useState('all');

  // Filter State
  const initialFilters = {
    searchQuery: '',
    brand: 'All',
    model: '',
    minPrice: '',
    maxPrice: '',
    year: 'All',
    fuelType: 'All',
    transmission: 'All',
    location: 'All',
  };

  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState('recommended');

  // Modals state
  const [selectedCarModal, setSelectedCarModal] = useState(null);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);

  // Available brands list
  const availableBrands = useMemo(() => {
    const brandsSet = new Set(cars.map(c => c.brand));
    return Array.from(brandsSet).sort();
  }, [cars]);

  // Toggle favorite car ID
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Add new car listing from SellCarModal
  const handleAddCar = (newCar) => {
    setCars(prev => [newCar, ...prev]);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters(initialFilters);
    setSortBy('recommended');
  };

  // Scroll to results when searching from Hero
  const handleSearchSubmit = () => {
    const element = document.querySelector('#browse-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select brand filter directly from popular brand cards
  const handleSelectBrand = (brandName) => {
    setFilters(prev => ({ ...prev, brand: brandName }));
    setActiveTab('all');
  };

  // Show favorites tab
  const handleShowFavorites = () => {
    setActiveTab('favorites');
    const element = document.querySelector('#browse-cars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter & Sort cars logic using useMemo
  const filteredAndSortedCars = useMemo(() => {
    return cars.filter(car => {
      // Favorites tab check
      if (activeTab === 'favorites' && !favorites.includes(car.id)) {
        return false;
      }

      // Search Query check
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchBrand = car.brand.toLowerCase().includes(query);
        const matchModel = car.model.toLowerCase().includes(query);
        const matchLocation = car.location.toLowerCase().includes(query);
        const matchFuel = car.fuel.toLowerCase().includes(query);
        const matchDesc = car.description.toLowerCase().includes(query);
        if (!matchBrand && !matchModel && !matchLocation && !matchFuel && !matchDesc) {
          return false;
        }
      }

      // Brand filter
      if (filters.brand !== 'All' && car.brand !== filters.brand) {
        return false;
      }

      // Location filter
      if (filters.location !== 'All' && car.location !== filters.location) {
        return false;
      }

      // Fuel filter
      if (filters.fuelType !== 'All' && car.fuel !== filters.fuelType) {
        return false;
      }

      // Transmission filter
      if (filters.transmission !== 'All' && car.transmission !== filters.transmission) {
        return false;
      }

      // Min Price filter
      if (filters.minPrice !== '' && car.price < Number(filters.minPrice)) {
        return false;
      }

      // Max Price filter
      if (filters.maxPrice !== '' && car.price > Number(filters.maxPrice)) {
        return false;
      }

      // Year filter
      if (filters.year !== 'All' && car.year !== Number(filters.year)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.price - b.price;
      }
      if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      if (sortBy === 'newest') {
        return b.year - a.year;
      }
      if (sortBy === 'oldest') {
        return a.year - b.year;
      }
      if (sortBy === 'lowest-mileage') {
        const parseKm = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
        return parseKm(a.mileage) - parseKm(b.mileage);
      }
      // default: 'recommended' -> featured first, then id
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.id - b.id;
    });
  }, [cars, favorites, activeTab, filters, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        favoriteCount={favorites.length}
        onOpenSellModal={() => setIsSellModalOpen(true)}
        onShowFavorites={handleShowFavorites}
        activeTab={activeTab}
      />

      {/* Hero Section */}
      <Hero
        filters={filters}
        setFilters={setFilters}
        onSearchSubmit={handleSearchSubmit}
        availableBrands={availableBrands}
      />

      {/* Main Browse Cars Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Search & Filter Controls */}
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalCars={cars.length}
          filteredCount={filteredAndSortedCars.length}
          onClearFilters={handleClearFilters}
          availableBrands={availableBrands}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Car Cards Grid */}
        <CarGrid
          cars={filteredAndSortedCars}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onViewDetails={(car) => setSelectedCarModal(car)}
          onClearFilters={handleClearFilters}
          activeTab={activeTab}
        />

      </main>

      {/* Popular Brands Section */}
      <BrandSection
        selectedBrand={filters.brand}
        onSelectBrand={handleSelectBrand}
      />

      {/* Why Choose AutoHub Features Section */}
      <Features />

      {/* Developer Profile Section (Siyam Khan) */}
      <AboutSection />

      {/* Fully Functional Contact Section & Form */}
      <Contact />

      {/* Multi-Column Footer */}
      <Footer onSelectBrand={handleSelectBrand} />

      {/* Car Details Modal */}
      <CarDetailsModal
        car={selectedCarModal}
        onClose={() => setSelectedCarModal(null)}
        isFavorite={selectedCarModal ? favorites.includes(selectedCarModal.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Sell Your Car Modal */}
      <SellCarModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
        onAddCar={handleAddCar}
      />

    </div>
  );
}
