import React, { useState } from 'react';
import { FiChevronDown, FiMonitor, FiAward, FiMapPin, FiBriefcase, FiLayers } from 'react-icons/fi';

/**
 * AiVisibilityMenu Component
 * Matches Image 1: Uppercase "AI VISIBILITY ˅" with Townsquare drop-down.
 */
export default function AiVisibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 text-xs uppercase tracking-wider font-bold text-[#242424] hover:text-[#00828B] transition-colors duration-150 flex items-center gap-1 focus:outline-none"
      >
        <span>AI VISIBILITY</span>
        <FiChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00828B]' : 'text-[#666666]'
          }`}
        />
      </button>

      {/* Floating Mega Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[640px] animate-fade-in">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 grid grid-cols-2 gap-6">
            {/* Column 1: Get Recommended */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-[#00828B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C2233] font-mono">
                  Get Recommended
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B]">
                    <FiMonitor className="w-4 h-4 text-[#00828B]" />
                    <span>Website</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Get a new smart website that keeps growing every month you're with us.
                  </p>
                </a>

                <a
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B]">
                    <FiAward className="w-4 h-4 text-[#00828B]" />
                    <span>Independent Endorsement</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Listings, customer reviews, and responses, all handled for you.
                  </p>
                </a>

                <a
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B]">
                    <FiMapPin className="w-4 h-4 text-[#00828B]" />
                    <span>Google Business Profile</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Full upfront optimization and continuous monthly sync for local 3-pack rank.
                  </p>
                </a>
              </div>
            </div>

            {/* Column 2: Stay Recommended */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-[#FF9718]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0C2233] font-mono">
                  Stay Recommended
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href="#platform"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B]">
                    <FiBriefcase className="w-4 h-4 text-[#00828B]" />
                    <span>A Well Run Business</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    The right tools to respond, close jobs, get paid, and collect 5-star reviews.
                  </p>
                </a>

                <a
                  href="#platform"
                  onClick={() => setIsOpen(false)}
                  className="group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B]">
                    <FiLayers className="w-4 h-4 text-[#00828B]" />
                    <span>How It Works</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    The connected pieces of marketing: website, local SEO, CRM, and directory sync.
                  </p>
                </a>

                <div className="p-3 rounded-xl bg-[#EFF5F6] border border-[#00828B]/20 mt-2">
                  <div className="text-[11px] font-mono text-[#00828B] font-bold">
                    Townsquare Standard
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Continuous AI search and directory adaptation included with every plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
