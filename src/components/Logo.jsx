import React from 'react';

export default function Logo({ size = 'default', className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const titleSize = isLarge ? 'text-3xl' : isSmall ? 'text-xl' : 'text-2xl';
  const subSize = isLarge ? 'text-xs' : isSmall ? 'text-[10px]' : 'text-[11px]';

  return (
    <div className={`inline-flex flex-col group select-none leading-none ${className}`}>
      {/* Primary Brand Name in White for Dark Backgrounds */}
      <div className="flex items-baseline">
        <span className={`${titleSize} font-black tracking-tight text-white font-sans`}>
          alvoratech
        </span>
      </div>

      {/* Sub-label "interactive" in teal */}
      <div className="flex justify-end -mt-1 pr-0.5">
        <span className={`${subSize} font-bold tracking-tight text-[#39AFB9] lowercase`}>
          interactive
        </span>
      </div>
    </div>
  );
}

