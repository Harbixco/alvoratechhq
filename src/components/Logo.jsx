import React from 'react';

export default function Logo({ size = 'default', showDomain = true, className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const iconDimensions = isLarge ? 36 : isSmall ? 24 : 28;

  return (
    <div className={`inline-flex items-center gap-2.5 font-sans select-none tracking-tight ${className}`}>
      {/* Geometric Apex Prism Vector Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={iconDimensions}
          height={iconDimensions}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Base outer boundary */}
          <rect width="32" height="32" rx="8" fill="#0C0E17" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          
          {/* Left apex wing */}
          <path
            d="M16 6L7 24H12L16 16L20 24H25L16 6Z"
            fill="url(#alvora-primary-grad)"
          />
          
          {/* Prismatic core cut */}
          <path
            d="M16 13L13 19.5H19L16 13Z"
            fill="#0C0E17"
          />

          {/* Precision light reflection dot */}
          <circle cx="16" cy="9" r="1.5" fill="#38BDF8" />

          {/* Gradients */}
          <defs>
            <linearGradient id="alvora-primary-grad" x1="7" y1="6" x2="25" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9718" />
              <stop offset="0.5" stopColor="#39AFB9" />
              <stop offset="1" stopColor="#00828B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient subtle backlight */}
        <div className="absolute inset-0 bg-[#39AFB9]/20 blur-md rounded-full pointer-events-none -z-10" />
      </div>

      {/* Brand Wordmark */}
      <div className="flex items-baseline gap-1">
        <span className={`font-bold tracking-tight text-white ${isLarge ? 'text-xl' : isSmall ? 'text-base' : 'text-lg'}`}>
          alvora<span className="text-[#39AFB9]">tech</span>
        </span>
        {showDomain && (
          <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#39AFB9] px-1.5 py-0.5 rounded bg-[#39AFB9]/15 border border-[#39AFB9]/30">
            interactive
          </span>
        )}
      </div>
    </div>
  );
}

