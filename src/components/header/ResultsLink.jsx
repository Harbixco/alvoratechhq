import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiHome, 
  FiBriefcase, 
  FiCoffee, 
  FiTruck, 
  FiScissors, 
  FiTool, 
  FiHeart, 
  FiArrowRight 
} from 'react-icons/fi';
import HeaderIndustryLink from './HeaderIndustryLink';

/**
 * ResultsLink Component
 * Modular Header Link component for "RESULTS" matching Image 1.
 */
export default function ResultsLink() {
  const [isOpen, setIsOpen] = useState(false);

  const industries = [
    { name: 'HVAC & Heating', href: '#industries', icon: FiTool },
    { name: 'Roofing & Exteriors', href: '#industries', icon: FiHome },
    { name: 'Plumbing & Mechanical', href: '/plumbing-services', icon: FiTool },
    { name: 'Home Remodeling', href: '#industries', icon: FiHome },
    { name: 'General Contracting', href: '#industries', icon: FiBriefcase },
    { name: 'Landscaping & Tree Care', href: '#industries', icon: FiHome },
    { name: 'Towing & Auto Services', href: '#industries', icon: FiTruck },
    { name: 'Legal & Accounting', href: '#industries', icon: FiBriefcase },
    { name: 'Food & Beverage', href: '#industries', icon: FiCoffee },
    { name: 'Medical & Dental Clinic', href: '#industries', icon: FiHeart },
    { name: 'Salons & Personal Care', href: '#industries', icon: FiScissors },
    { name: 'Specialty Retail', href: '#industries', icon: FiBriefcase },
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
        <span>RESULTS</span>
        <FiChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00828B]' : 'text-[#666666]'
          }`}
        />
      </button>

      {/* Floating Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[540px] animate-fade-in">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0C2233]">
                Industries We Serve
              </span>
              <a
                href="#industries"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-[#00828B] hover:text-[#FF9718] flex items-center gap-1"
              >
                <span>View All Industries</span>
                <FiArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {industries.map((ind, idx) => (
                <HeaderIndustryLink
                  key={idx}
                  name={ind.name}
                  icon={ind.icon}
                  href={ind.href}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

