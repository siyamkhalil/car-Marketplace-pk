import React from 'react';
import { ShieldCheck, Tag, Search, ThumbsUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Cars",
      description: "Browse carefully inspected and verified vehicle listings across Islamabad and Peshawar with authentic documentation.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "hover:border-blue-500/50"
    },
    {
      icon: Tag,
      title: "Best Prices",
      description: "Find competitive prices directly from trusted private owners and certified dealerships without hidden commission.",
      color: "from-emerald-500 to-teal-500",
      borderColor: "hover:border-emerald-500/50"
    },
    {
      icon: Search,
      title: "Easy Search",
      description: "Find your perfect car quickly using powerful instant filters for brand, model, price range, city, and fuel type.",
      color: "from-indigo-500 to-purple-500",
      borderColor: "hover:border-indigo-500/50"
    },
    {
      icon: ThumbsUp,
      title: "Trusted Marketplace",
      description: "Enjoy a clean, transparent, and reliable automotive shopping experience engineered by Siyam Khan.",
      color: "from-amber-500 to-orange-500",
      borderColor: "hover:border-amber-500/50"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black tracking-widest text-blue-400 uppercase">
            Superior Quality Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">AutoHub</span>?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We provide a modern automotive marketplace experience built on trust, transparency, and cutting-edge web performance.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-6 border border-slate-800 ${feature.borderColor} transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
