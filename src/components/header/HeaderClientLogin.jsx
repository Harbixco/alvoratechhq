import React from 'react';
import { FiUser } from 'react-icons/fi';

/**
 * HeaderClientLogin Component
 * Dedicated Client Portal access link matching Townsquare Interactive's client sign-in.
 */
export default function HeaderClientLogin({ onOpenLoginModal, className = "" }) {
  return (
    <button
      onClick={onOpenLoginModal}
      className={`text-xs font-semibold text-[#0C2233] dark:text-slate-300 hover:text-[#39AFB9] dark:hover:text-[#39AFB9] px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] transition-colors flex items-center gap-1.5 ${className}`}
    >
      <FiUser className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#39AFB9]" />
      <span>Client Login</span>
    </button>
  );
}

