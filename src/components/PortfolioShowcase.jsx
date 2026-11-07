import React from 'react';
import { PORTFOLIO_WORKS } from '../data/content';
import { FiArrowRight } from 'react-icons/fi';

export default function PortfolioShowcase({ onOpenDemoModal }) {
  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-white border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2233] tracking-tight">
              Real businesses. Real revenue growth.
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Browse examples of custom websites, local SEO frameworks, and business management tools deployed for clients across North America and globally.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9718] hover:bg-[#E8860F] text-xs font-bold text-white transition-colors shadow-md active:scale-95"
          >
            <span>Request A Free Site Review</span>
            <FiArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_WORKS.map((work) => (
            <div
              key={work.id}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-xs"
            >
              {/* Image Preview with direct Link to demo */}
              <a
                href={work.demoUrl}
                className="relative aspect-[16/10] overflow-hidden bg-slate-100 block group"
                title={`Open ${work.client} Demo`}
              >
                <img
                  src={work.image}
                  alt={work.client}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Result Pill */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono font-bold text-[#0C2233] bg-white/95 backdrop-blur-md border border-slate-200 shadow-xs px-3 py-1 rounded-full">
                    {work.result}
                  </span>
                </div>
              </a>

              {/* Card Meta */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00828B] font-bold">
                      {work.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0C2233] tracking-tight">
                    <a href={work.demoUrl} className="hover:text-[#00828B] transition-colors">
                      {work.client}
                    </a>
                  </h3>
                </div>

                {/* Bottom Action: View (Project Name) Demo */}
                <div className="pt-4 mt-5 border-t border-slate-200 flex items-center justify-end">
                  <a
                    href={work.demoUrl}
                    className="text-xs font-bold text-[#00828B] hover:text-[#0C2233] inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <span>View {work.projectName} Demo</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
