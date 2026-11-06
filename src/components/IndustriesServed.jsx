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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
              Industries Served
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2233] tracking-tight">
              Tailored solutions for your specific trade.
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Every industry has distinct customer expectations, booking cycles, and search keywords. We build custom platforms engineered for your exact business model.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#00828B] text-xs font-bold text-[#0C2233] shadow-xs transition-colors"
          >
            <span>See Industry Examples</span>
            <FiArrowRight className="w-3.5 h-3.5 text-[#00828B]" />
          </button>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || FiTool;
            return (
              <div
                key={ind.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-slate-300 overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <Icon className="w-4 h-4 text-[#00828B]" />
                      <h3 className="text-base font-bold text-[#0C2233] tracking-tight">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {ind.id === 'home-services' ? (
                      <a
                        href="/plumbing-services"
                        className="text-xs text-[#00828B] hover:text-[#0C2233] font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Live Demo</span>
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs text-[#00828B] hover:text-[#0C2233] font-bold inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Learn more</span>
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
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

