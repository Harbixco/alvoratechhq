import React from 'react';

/**
 * HomeLink Component
 * Matches Image 1: Uppercase bold text with Townsquare Teal hover state.
 */
export default function HomeLink({ href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`py-2 text-xs uppercase tracking-wider font-bold text-[#242424] hover:text-[#00828B] transition-colors duration-150 flex items-center ${className}`}
    >
      <span>HOME</span>
    </a>
  );
}
