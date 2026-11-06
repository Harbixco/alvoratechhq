import React from 'react';
import { INDUSTRIES } from '../data/content';
import { 
  FiTool, 
  FiHeart, 
  FiBriefcase, 
  FiShoppingBag, 
  FiCoffee, 
  FiSmile,
  FiArrowRight
} from 'react-icons/fi';

export default function IndustriesServed({ onOpenDemoModal }) {
  const iconMap = {
    FiTool: FiTool,
    FiHeart: FiHeart,
    FiBriefcase: FiBriefcase,
    FiShoppingBag: FiShoppingBag,
    FiCoffee: FiCoffee,
    FiSmile: FiSmile,
  };

  return (
    <section id="industries" className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
              Industries We Serve
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2233] tracking-tight">
              Tailored solutions for your specific trade.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Every industry has distinct customer expectations, booking cycles, and search keywords. We build custom platforms engineered for your exact business model.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#00828B] text-xs font-bold text-[#0C2233] shadow-sm transition-colors"
          >
            <span>See Examples in Your Industry</span>
            <FiArrowRight className="w-3.5 h-3.5 text-[#FF9718]" />
          </button>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || FiTool;
            return (
              <div
                key={ind.id}
                className="group rounded-3xl bg-white border border-slate-200 hover:border-[#00828B] overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                  
                  {/* Badge & Stat */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0C2233]/80 backdrop-blur-md border border-white/20 text-white font-semibold">
                      {ind.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 px-2.5 py-1 rounded-full bg-emerald-100/90 backdrop-blur-md border border-emerald-300">
                      {ind.stat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-4 h-4 text-[#00828B]" />
                      <h3 className="text-lg font-bold text-[#0C2233] tracking-tight">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">Custom Architecture</span>
                    <button
                      onClick={onOpenDemoModal}
                      className="text-xs text-[#00828B] hover:text-[#FF9718] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

