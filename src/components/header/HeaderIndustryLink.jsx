import React from 'react';

/**
 * HeaderIndustryLink Component
 * Modular component for individual industry links inside Results link dropdown.
 */
export default function HeaderIndustryLink({ icon: Icon, name, href = "#industries", onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="p-2.5 rounded-xl hover:bg-[#EFF5F6] text-xs font-semibold text-[#0C2233] hover:text-[#00828B] flex items-center gap-2.5 transition-colors group"
    >
      {Icon && (
        <div className="w-6 h-6 rounded-md bg-slate-100 group-hover:bg-[#00828B]/15 text-slate-600 group-hover:text-[#00828B] flex items-center justify-center transition-colors">
          <Icon className="w-3.5 h-3.5" />
        </div>
      )}
      <span>{name}</span>
    </a>
  );
}

