import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiSearch, 
  FiTrendingUp, 
  FiShoppingBag, 
  FiCreditCard, 
  FiGlobe, 
  FiMail 
} from 'react-icons/fi';

/**
 * SolutionsMenu Component
 * Matches Image 1: Uppercase "SOLUTIONS ˅" with Townsquare drop-down.
 */
export default function SolutionsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    {
      title: 'Search Everywhere Optimization',
      desc: 'Be found across Google, Maps, Siri, and AI discovery engines.',
      icon: FiSearch,
      href: '#solutions',
    },
    {
      title: 'Advertising & Social',
      desc: 'Targeted Google Ads and Meta social campaigns to drive immediate local leads.',
      icon: FiTrendingUp,
      href: '#solutions',
    },
    {
      title: 'Ecommerce',
      desc: 'Sell products and accept service orders online with streamlined checkout.',
      icon: FiShoppingBag,
      href: '#solutions',
    },
    {
      title: 'Merchant Services',
      desc: 'Frictionless credit card processing and mobile point-of-sale invoicing.',
      icon: FiCreditCard,
      href: '#solutions',
    },
    {
      title: 'Business Domains',
      desc: 'Domain registration, DNS record management, and SSL certificate security.',
      icon: FiGlobe,
      href: '#solutions',
    },
    {
      title: 'Business Email',
      desc: 'Professional branded email addresses with spam protection and calendar sync.',
      icon: FiMail,
      href: '#solutions',
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
        <span>SOLUTIONS</span>
        <FiChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00828B]' : 'text-[#666666]'
          }`}
        />
      </button>

      {/* Floating Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[580px] animate-fade-in">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 grid grid-cols-2 gap-3">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
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
