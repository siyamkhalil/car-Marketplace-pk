import React from 'react';
import { MessageSquare, Mail, MapPin, PhoneCall, Sparkles, ExternalLink } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  const whatsappUrl = "https://wa.me/923349122793?text=Hello%20Siyam,%20I'm%20interested%20in%20a%20car%20listed%20on%20AutoHub.";
  const emailUrl = "mailto:xiyamkhan285@gmail.com";
  const phoneUrl = "tel:+923349122793";

  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Developer Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a question about a car or want to sell your vehicle? Get in touch with Siyam Khan.
          </p>
        </div>

        {/* 3 Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* WhatsApp Card */}
          <div className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 fill-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-sm font-semibold text-emerald-400 mb-4">+92 334 9122793</p>
              <p className="text-xs text-slate-400 mb-6">
                Fastest response time for instant vehicle inquiries and negotiations.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email</h3>
              <p className="text-sm font-semibold text-blue-400 mb-4 truncate">xiyamkhan285@gmail.com</p>
              <p className="text-xs text-slate-400 mb-6">
                Send official inquiries, detailed proposals, or portfolio feedback.
              </p>
            </div>

            <a
              href={emailUrl}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Send Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Locations Card */}
          <div className="glass-card rounded-3xl p-6 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Locations</h3>
              <div className="space-y-1.5 mb-4">
                <p className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Peshawar, Pakistan
                </p>
                <p className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Islamabad, Pakistan
                </p>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Serving buyers & sellers across both Khyber Pakhtunkhwa and Federal Capital.
              </p>
            </div>

            <a
              href={phoneUrl}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
              <span>Call +92 334 9122793</span>
            </a>
          </div>

        </div>

        {/* Contact Quick Actions Section */}
        <div className="glass-card rounded-3xl p-6 md:p-8 mb-16 border border-slate-800 text-center space-y-4 glow-blue">
          <h3 className="text-xl font-extrabold text-white">Contact Quick Actions</h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Choose your preferred method to contact Siyam Khan directly with one click:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
            
            {/* WhatsApp Me */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Me</span>
            </a>

            {/* Email Me */}
            <a
              href={emailUrl}
              className="py-3.5 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>

            {/* Call Me */}
            <a
              href={phoneUrl}
              className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Me</span>
            </a>

          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-400 mt-1">Fill out the validated form below and we will get back to you promptly.</p>
          </div>
          <ContactForm />
        </div>

      </div>
    </section>
  );
}
