import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

/**
 * MobileNavToggle Component
 * High-visibility hamburger toggle button for mobile header.
 * Solid dark navy background with crisp white icon for maximum contrast.
 */
export default function MobileNavToggle({ isOpen, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`p-2.5 rounded-xl bg-[#0C2233] hover:bg-[#00828B] text-white transition-all duration-200 shadow-md focus:outline-none flex items-center justify-center active:scale-95 border border-[#0C2233] ${className}`}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      title={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <FiX className="w-6 h-6 stroke-[2.5]" />
      ) : (
        <FiMenu className="w-6 h-6 stroke-[2.5]" />
      )}
    </button>
  );
}
