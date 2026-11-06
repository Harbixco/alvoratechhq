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
  FiArrowUpRight 
} from 'react-icons/fi';

/**
 * SolutionsGrid Component
 * Matches Image 4: 6 Integrated Solution Cards in a balanced 3x2 grid.
 */
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
        {/* Section Header matching Image 4 with crisp white contrast */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
            INTEGRATED SOLUTIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2233] tracking-tight leading-tight">
            Everything your small business needs to grow.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A cohesive digital ecosystem combining website engineering, local search visibility, customer operations, and reputation management.
          </p>
        </div>

        {/* 6 Core Solutions in a 3x2 Grid matching Image 4 on White Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SOLUTIONS.map((solution) => {
            const Icon = iconMap[solution.icon] || FiLayout;
            return (
              <div
                key={solution.id}
                className="group p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-[#00828B] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Badge matching Image 4 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#00828B] group-hover:scale-105 group-hover:bg-[#EFF5F6] transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#EFF5F6] border border-[#39AFB9]/30 text-[#00828B] font-bold">
                      {solution.badge}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-xl font-bold text-[#0C2233] tracking-tight">
                    {solution.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#00828B] mt-1 mb-3">
                    {solution.headline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {solution.summary}
                  </p>

                  {/* Key Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {solution.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <FiCheck className="w-4 h-4 text-[#00828B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Metric & CTA matching Image 4 */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00828B]" />
                    <span>Benchmark:</span>
                    <strong className="text-[#0C2233] font-bold">{solution.metric}</strong>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs text-[#FF9718] hover:text-[#E8860F] inline-flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Learn More</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
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
