import React from 'react';
import { FiArrowRight, FiPhoneCall } from 'react-icons/fi';

export default function StickyMobileBar({ onOpenDemoModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-2.5 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg flex items-center gap-2">
      <a
        href="tel:+18554635490"
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#EFF5F6] border border-[#00828B] text-[#00828B] font-bold text-xs flex items-center justify-center gap-1.5"
      >
        <FiPhoneCall className="w-3.5 h-3.5 text-[#00828B]" />
        <span>(855) 463-5490</span>
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

