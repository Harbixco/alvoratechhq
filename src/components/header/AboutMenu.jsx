import React, { useState } from 'react';
import { FiChevronDown, FiUsers, FiHelpCircle, FiHeadphones, FiAward } from 'react-icons/fi';

/**
 * AboutMenu Component
 * Matches Image 1: Uppercase "ABOUT ˅" with Townsquare drop-down.
 */
export default function AboutMenu({ onOpenFaq }) {
  const [isOpen, setIsOpen] = useState(false);

  const aboutLinks = [
    {
      title: 'About Us',
      desc: 'Our mission and team powering small businesses across the nation.',
      icon: FiUsers,
      href: '#portfolio',
    },
    {
      title: 'Common Questions',
      desc: 'Clear answers on timelines, pricing, domain ownership, and guarantees.',
      icon: FiHelpCircle,
      action: onOpenFaq,
    },
    {
      title: 'Personal Support',
      desc: 'Dedicated marketing specialist assigned to your account with same-day edits.',
      icon: FiHeadphones,
      href: '#solutions',
    },
    {
      title: 'Careers & Team',
      desc: 'Join our world-class engineering, design, and digital marketing team.',
      icon: FiAward,
      href: '#pricing',
    },
  ];

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
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 space-y-2">
            {aboutLinks.map((item, idx) => {
              const Icon = item.icon;
              return item.action ? (
                <button
                  key={idx}
                  onClick={() => {
                    setIsOpen(false);
                    item.action();
                  }}
                  className="w-full text-left group p-3 rounded-xl hover:bg-[#EFF5F6] transition-colors flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00828B]/10 text-[#00828B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0C2233] group-hover:text-[#00828B] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                </button>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group p-3 rounded-xl hover:bg-[#EFF5F6] transition-colors flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00828B]/10 text-[#00828B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0C2233] group-hover:text-[#00828B] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      {item.desc}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
