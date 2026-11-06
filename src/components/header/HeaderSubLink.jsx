import React from 'react';

/**
 * HeaderSubLink Component
 * Modular component for individual sub-links inside header mega menus.
 */
export default function HeaderSubLink({ 
  icon: Icon, 
  title, 
  description, 
  href = "#", 
  onClick, 
  badge, 
  accentColor = "#00828B", 
  className = "" 
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group block p-2.5 rounded-xl hover:bg-[#EFF5F6] transition-colors ${className}`}
    >
      <div className="flex items-center gap-2 text-sm font-bold text-[#0C2233] group-hover:text-[#00828B] transition-colors">
        {Icon && (
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
            style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
          >
            <Icon className="w-4 h-4" />
          </div>
        )}
        <span>{title}</span>
        {badge && (
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 ml-auto">
            {badge}
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-slate-500 mt-1 pl-9 leading-relaxed">
          {description}
        </p>
      )}
    </a>
  );
}
