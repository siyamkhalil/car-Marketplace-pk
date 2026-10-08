import React, { useState } from 'react';
import { Car, Heart, Menu, X, PlusCircle, PhoneCall, Mail } from 'lucide-react';

export default function Navbar({ favoriteCount, onOpenSellModal, onShowFavorites, activeTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Browse Cars', href: '#browse-cars' },
    { name: 'Brands', href: '#popular-brands' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about-developer' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Auto<span className="text-blue-500">Hub</span>
              </span>
              <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-widest -mt-1">
                Pak Automotive
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Favorites Button */}
            <button
              onClick={onShowFavorites}
              className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 shadow-md shadow-rose-900/20'
                  : 'bg-slate-900/80 border-slate-700/60 text-slate-200 hover:border-slate-500 hover:text-white'
              }`}
              title="View Favorite Cars"
            >
              <Heart className={`w-4 h-4 ${favoriteCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
              <span>Favorites</span>
              {favoriteCount > 0 && (
                <span className="ml-1 px-2 py-0.5 text-xs font-bold bg-rose-500 text-white rounded-full animate-pulse">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Sell Your Car CTA */}
            <button
              onClick={onOpenSellModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Sell Your Car</span>
            </button>
          </div>

          {/* Mobile Menu & Favorites Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onShowFavorites}
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200"
              aria-label="Favorites"
            >
              <Heart className={`w-5 h-5 ${favoriteCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-300'}`} />
              {favoriteCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center text-[10px] font-bold bg-rose-500 text-white rounded-full">
                  {favoriteCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSellModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-600/30"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Sell Your Car</span>
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400 px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Peshawar & Islamabad
              </span>
              <a href="tel:+923349122793" className="text-blue-400 font-medium hover:underline flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" />
                +92 334 9122793
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
