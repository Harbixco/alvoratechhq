import React from 'react';

/**
 * HeaderLogo Component
 * Matches Image 1: Bold dark brand wordmark with teal "interactive" positioned directly beneath.
 */
export default function HeaderLogo({ className = '' }) {
  return (
    <a href="#" className={`inline-flex flex-col group select-none leading-none ${className}`}>
      {/* Primary Brand Name */}
      <div className="flex items-baseline">
        <span className="text-2xl font-black tracking-tight text-[#1E242B] font-sans">
          alvoratech
        </span>
      </div>

      {/* Sub-label "interactive" in teal matching Image 1 */}
      <div className="flex justify-end -mt-1 pr-0.5">
        <span className="text-[11px] font-bold tracking-tight text-[#00828B] lowercase">
          interactive
        </span>
      </div>
    </a>
  );
}
