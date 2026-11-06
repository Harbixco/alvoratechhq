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
import HeaderSubLink from './HeaderSubLink';

/**
 * SolutionsLink Component
 * Modular Header Link component for "SOLUTIONS" matching Image 1.
 */
export default function SolutionsLink() {
  const [isOpen, setIsOpen] = useState(false);

  const solutions = [
    {
      title: 'Search Everywhere (SEO)',
      desc: 'Be found across Google, Maps, Siri, and AI discovery engines.',
      icon: FiSearch,
      href: '#solutions',
    },
    {
      title: 'Advertising & Social',
      desc: 'Targeted Google Ads and Meta social campaigns to drive leads.',
      icon: FiTrendingUp,
      href: '#solutions',
    },
    {
      title: 'Ecommerce & Checkout',
      desc: 'Sell products and accept service deposits online with ease.',
      icon: FiShoppingBag,
      href: '#solutions',
    },
    {
      title: 'Merchant Services',
      desc: 'Credit card processing and mobile point-of-sale invoicing.',
      icon: FiCreditCard,
      href: '#solutions',
    },
    {
      title: 'Business Domains',
      desc: 'Domain registration, DNS record management, and SSL security.',
      icon: FiGlobe,
      href: '#solutions',
    },
    {
      title: 'Business Email',
      desc: 'Branded email addresses with spam protection and calendar sync.',
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
      {/* Trigger Link Button */}
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
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 grid grid-cols-2 gap-2">
            {solutions.map((item, idx) => (
              <HeaderSubLink
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                href={item.href}
                onClick={() => setIsOpen(false)}
                accentColor="#00828B"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

