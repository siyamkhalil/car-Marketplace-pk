import React, { useState, useEffect } from 'react';
import { X, PlusCircle, CheckCircle2, Car, MapPin, DollarSign, Phone } from 'lucide-react';

export default function SellCarModal({ isOpen, onClose, onAddCar }) {
  const [formData, setFormData] = useState({
    brand: 'Toyota',
    model: '',
    year: '2023',
    price: '',
    mileage: '',
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: 'Islamabad',
    phone: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSubmittedSuccess(false);
      setErrors({});
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.model.trim()) errs.model = 'Model name is required';
    if (!formData.price || isNaN(formData.price) || Number(formData.price) <= 0) errs.price = 'Valid price in PKR is required';
    if (!formData.mileage.trim()) errs.mileage = 'Mileage is required (e.g. 25,000 km)';
    if (!formData.phone.trim()) errs.phone = 'Phone / WhatsApp number is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const newCar = {
      id: Date.now(),
      brand: formData.brand,
      model: formData.model,
      year: parseInt(formData.year, 10),
      price: parseInt(formData.price, 10),
      mileage: formData.mileage.includes('km') ? formData.mileage : `${formData.mileage} km`,
      fuel: formData.fuel,
      transmission: formData.transmission,
      location: formData.location,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
      description: formData.description || `Beautiful ${formData.brand} ${formData.model} listed directly by owner in ${formData.location}. Contact: ${formData.phone}`,
      featured: true,
      engine: "1800 cc",
      color: "White",
      assembly: "Local",
      registration: formData.location,
      bodyType: "Sedan"
    };

    onAddCar(newCar);
    setSubmittedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedSuccess ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-black text-white">Car Listed Successfully!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Your vehicle listing has been published live on AutoHub marketplace. Siyam Khan will review your submission shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <PlusCircle className="w-6 h-6 text-blue-500" />
                Sell Your Car on AutoHub
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Reach thousands of verified buyers across Peshawar, Islamabad, and all of Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Brand *</label>
                <select
                  value={formData.brand}
                  onChange={(e) => handleChange('brand', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                >
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="KIA">KIA</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes-Benz</option>
                  <option value="Audi">Audi</option>
                  <option value="Tesla">Tesla</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Car Model & Variant *</label>
                <input
                  type="text"
                  placeholder="e.g. Civic RS Turbo / Corolla Grande"
                  value={formData.model}
                  onChange={(e) => handleChange('model', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl bg-slate-900 border text-white text-sm ${
                    errors.model ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.model && <span className="text-[11px] text-rose-400 mt-1 block">{errors.model}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Model Year</label>
                <select
                  value={formData.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                >
                  {Array.from({ length: 15 }, (_, i) => 2026 - i).map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Expected Price (PKR) *</label>
                <input
                  type="number"
                  placeholder="e.g. 7500000"
                  value={formData.price}
                  onChange={(e) => handleChange('price', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl bg-slate-900 border text-white text-sm ${
                    errors.price ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.price && <span className="text-[11px] text-rose-400 mt-1 block">{errors.price}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Mileage *</label>
                <input
                  type="text"
                  placeholder="e.g. 28,000 km"
                  value={formData.mileage}
                  onChange={(e) => handleChange('mileage', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl bg-slate-900 border text-white text-sm ${
                    errors.mileage ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.mileage && <span className="text-[11px] text-rose-400 mt-1 block">{errors.mileage}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                >
                  <option value="Islamabad">Islamabad</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Fuel Type</label>
                <select
                  value={formData.fuel}
                  onChange={(e) => handleChange('fuel', e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Phone / WhatsApp *</label>
                <input
                  type="text"
                  placeholder="e.g. +92 334 9122793"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full px-3 py-2.5 rounded-xl bg-slate-900 border text-white text-sm ${
                    errors.phone ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.phone && <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>}
              </div>

            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Description & Specs</label>
              <textarea
                rows="3"
                placeholder="Mention condition, original paint, features..."
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all"
            >
              Publish Listing Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
