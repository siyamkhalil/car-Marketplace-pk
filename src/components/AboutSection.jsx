import React from 'react';
import { User, Code2, GraduationCap, MapPin, Mail, MessageSquare, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'React.js',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'UI/UX Architecture',
    'Responsive Design',
    'Frontend Optimization',
    'Vite & Webpack',
    'REST APIs'
  ];

  return (
    <section id="about-developer" className="py-20 relative overflow-hidden bg-slate-950/80">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Developer Bio (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Developer Profile</span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  About the Developer — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Siyam Khan</span>
                </h2>
                <p className="text-sm font-semibold text-blue-400 mt-1">
                  Frontend Developer & Computer Science Student
                </p>
              </div>

              {/* Exact Intro Text Required */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-200 text-base leading-relaxed font-medium shadow-inner">
                "Hi, I'm Siyam Khan, a passionate Frontend Developer and Computer Science Student focused on building modern, responsive, and user-friendly web experiences."
              </div>

              {/* Location Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Peshawar, Pakistan</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>

              {/* Skill Tags */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-800 hover:border-blue-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Quick Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923349122793?text=Hello%20Siyam,%20I%20visited%20your%20AutoHub%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Siyam</span>
                </a>

                <a
                  href="mailto:xiyamkhan285@gmail.com"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Developer</span>
                </a>
              </div>

            </div>

            {/* Developer Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm glass-card rounded-3xl p-6 border border-slate-700/60 shadow-xl text-center space-y-5 relative group">
                
                {/* Avatar Placeholder */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-1 mx-auto shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <User className="w-14 h-14 text-blue-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white">Siyam Khan</h3>
                  <p className="text-xs text-blue-400 font-semibold mt-1">Computer Science Student</p>
                  <p className="text-xs text-slate-400 mt-0.5">Frontend Developer</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-left space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Project:</span>
                    <span className="font-bold text-white">AutoHub Marketplace</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Architecture:</span>
                    <span className="font-bold text-blue-400">React.js + Tailwind CSS</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Status:</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      100% Portfolio Ready
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
