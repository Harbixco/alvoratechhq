import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

/**
 * MobileNavToggle Component
 * Dedicated mobile navigation hamburger and close toggle button.
 */
export default function MobileNavToggle({ isOpen, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-xl text-[#0C2233] dark:text-slate-200 bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.1] hover:text-[#39AFB9] dark:hover:text-[#39AFB9] transition-colors focus:outline-none ${className}`}
      aria-label="Toggle navigation menu"
    >
      {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
    </button>
  );
}

