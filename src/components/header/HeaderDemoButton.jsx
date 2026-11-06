import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

/**
 * HeaderDemoButton Component
 * Primary high-conversion action button mirroring Townsquare Interactive's "Start Free Demo".
 * Styled with Townsquare's exact Teal (#39afb9) and hover dark-teal (#00828b) / orange (#ff9718).
 */
export default function HeaderDemoButton({ onOpenDemoModal, className = "" }) {
  return (
    <button
      onClick={onOpenDemoModal}
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-xl bg-[#39AFB9] hover:bg-[#00828B] text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <span>Start Free Demo</span>
      <FiArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

