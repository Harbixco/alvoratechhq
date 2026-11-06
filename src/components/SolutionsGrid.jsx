import React from 'react';
import { CORE_SOLUTIONS } from '../data/content';
import { 
  FiLayout, 
  FiSearch, 
  FiGrid, 
  FiStar, 
  FiTrendingUp, 
  FiCreditCard,
  FiCheck, 
  FiArrowRight 
} from 'react-icons/fi';

export default function SolutionsGrid({ onOpenDemoModal }) {
  const iconMap = {
    FiLayout: FiLayout,
    FiSearch: FiSearch,
    FiGrid: FiGrid,
    FiStar: FiStar,
    FiTrendingUp: FiTrendingUp,
    FiCreditCard: FiCreditCard,
  };

  return (
    <section id="solutions" className="py-12 sm:py-16 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
            Core Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2233] tracking-tight leading-tight">
            Integrated tools designed for local business growth.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A cohesive platform combining custom web development, local search placement, client communications, and reputation management.
          </p>
        </div>

        {/* 6 Core Solutions in a 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.icon] || FiLayout;
            return (
              <div
                key={solution.id}
                className="rounded-2xl p-6 sm:p-7 bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#00828B] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold text-[#0C2233] tracking-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {solution.summary}
                  </p>

                  {/* Clean Feature List */}
                  <ul className="space-y-2.5 mb-6">
                    {solution.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <FiCheck className="w-4 h-4 text-[#00828B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs text-[#00828B] hover:text-[#0C2233] inline-flex items-center gap-1.5 font-bold transition-colors"
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
