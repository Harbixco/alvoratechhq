import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function StickyMobileBar({ onOpenDemoModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-2.5 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg flex items-center gap-2">
      <a
        href="https://wa.me/14127693968"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50 border border-[#25D366] text-[#0C2233] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onOpenDemoModal}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95"
      >
        <span>Start Demo</span>
        <FiArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
