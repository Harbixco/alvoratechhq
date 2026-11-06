import React, { useState } from 'react';
import { FiChevronDown, FiMonitor, FiAward, FiMapPin, FiBriefcase, FiLayers } from 'react-icons/fi';
import HeaderSubLink from './HeaderSubLink';

/**
 * AiVisibilityLink Component
 * Modular Header Link component for "AI VISIBILITY" matching Image 1.
 */
export default function AiVisibilityLink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Link Button */}
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

              <div className="space-y-2">
                <HeaderSubLink
                  icon={FiMonitor}
                  title="Website Design & Hosting"
                  description="Get a smart website that keeps growing every month you're with us."
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  accentColor="#00828B"
                />
                <HeaderSubLink
                  icon={FiAward}
                  title="Independent Endorsement"
                  description="Tier-1 citations, customer reviews, and automated responses."
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  accentColor="#00828B"
                />
                <HeaderSubLink
                  icon={FiMapPin}
                  title="Google Business Profile"
                  description="Upfront optimization and continuous sync for local 3-pack rank."
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  accentColor="#00828B"
                />
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

              <div className="space-y-2">
                <HeaderSubLink
                  icon={FiBriefcase}
                  title="A Well Run Business (CRM)"
                  description="Integrated inbox, scheduling, digital invoicing & fast payouts."
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  accentColor="#FF9718"
                />
                <HeaderSubLink
                  icon={FiLayers}
                  title="Search Everywhere Engine"
                  description="Stay synced across Apple Maps, Siri, Yelp, Bing & AI assistants."
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  accentColor="#FF9718"
                />
              </div>

              {/* Callout Card */}
              <div className="p-3.5 rounded-xl bg-[#EFF5F6] border border-[#39AFB9]/30 text-xs text-[#0C2233]">
                <div className="font-bold text-[#00828B]">Why AI Search Matters</div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Voice assistants and AI models recommend businesses with consistent local directory data and active review velocities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
