import React, { useState } from 'react';
import { FiChevronDown, FiUsers, FiHelpCircle, FiHeadphones, FiAward } from 'react-icons/fi';
import HeaderSubLink from './HeaderSubLink';

/**
 * AboutLink Component
 * Modular Header Link component for "ABOUT" matching Image 1.
 */
export default function AboutLink({ onOpenFaq }) {
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
        <span>ABOUT</span>
        <FiChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00828B]' : 'text-[#666666]'
          }`}
        />
      </button>

      {/* Floating Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[420px] animate-fade-in">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 space-y-1">
            <HeaderSubLink
              icon={FiUsers}
              title="About Us & Mission"
              description="Our mission and team powering small businesses across the nation."
              href="#portfolio"
              onClick={() => setIsOpen(false)}
              accentColor="#00828B"
            />

            {/* Common Questions triggers FAQ Modal */}
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenFaq) onOpenFaq();
              }}
              className="w-full text-left group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#00828B]/10 text-[#00828B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <FiHelpCircle className="w-4 h-4" />
                </div>
                <span>Common Questions (FAQ)</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-9 leading-relaxed">
                Clear answers on timelines, pricing, domain ownership, and guarantees.
              </p>
            </button>

            <HeaderSubLink
              icon={FiHeadphones}
              title="Personal Support"
              description="Dedicated marketing specialist assigned with same-day edits."
              href="#solutions"
              onClick={() => setIsOpen(false)}
              accentColor="#00828B"
            />

            <HeaderSubLink
              icon={FiAward}
              title="Careers & Team"
              description="Join our world-class engineering, design, and digital marketing team."
              href="#pricing"
              onClick={() => setIsOpen(false)}
              accentColor="#FF9718"
            />
          </div>
        </div>
      )}
    </div>
  );
}

