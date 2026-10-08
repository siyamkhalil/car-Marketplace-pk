import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number must be at least 8 digits';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    return errs;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleSendViaMailto = () => {
    const mailtoSubject = encodeURIComponent(`[AutoHub Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:xiyamkhan285@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-2xl">
      
      {submitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Message Prepared Successfully!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              We'll get back to you soon. Thank you for reaching out to Siyam Khan.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleSendViaMailto}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Open Email App Now</span>
            </button>
            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Siyam Khan"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? 'border-rose-500 focus:ring-rose-500/20'
                    : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.fullName && (
                <span className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="xiyamkhan285@gmail.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-rose-500 focus:ring-rose-500/20'
                    : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.email && (
                <span className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+92 334 9122793"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-rose-500 focus:ring-rose-500/20'
                    : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.phone && (
                <span className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">
                Subject *
              </label>
              <input
                type="text"
                placeholder="Inquiry about car / Selling my car"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.subject
                    ? 'border-rose-500 focus:ring-rose-500/20'
                    : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.subject && (
                <span className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.subject}
                </span>
              )}
            </div>

          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              Your Message *
            </label>
            <textarea
              rows="4"
              placeholder="Hi Siyam, I am interested in buying/selling a car on AutoHub..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.message
                  ? 'border-rose-500 focus:ring-rose-500/20'
                  : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500/20'
              }`}
            ></textarea>
            {errors.message && (
              <span className="flex items-center gap-1 text-xs text-rose-400 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Validating & Preparing Message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
}
