import React from 'react';
import { FiArrowLeft, FiExternalLink, FiLayers } from 'react-icons/fi';

/**
 * DemoTopBar
 * Pinned at the very top of each live demo template.
 * Provides a prominent button returning to the Alvora Tech index page.
 */
export default function DemoTopBar({ demoName = 'Client Template Demo' }) {
  const handleBackToIndex = (e) => {
    // Smoothly route back to the index page
    window.location.href = '/';
  };

  return (
    <aside 
      className="sticky top-0 left-0 right-0 z-[999999] bg-[#0C2233] text-white border-b border-slate-700/80 px-3 sm:px-6 py-2.5 shadow-lg backdrop-blur-md bg-opacity-95"
      role="banner"
      aria-label="Demo template banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Prominent Back to Index Button */}
        <a
          href="/"
          onClick={handleBackToIndex}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9718] hover:bg-[#ff8900] text-[#0C2233] font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
          aria-label="Back to Alvora Tech index page"
        >
          <FiArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back to Index Page</span>
        </a>

        {/* Center/Right: Demo Context Badge */}
        <div className="flex items-center gap-2 sm:gap-3 text-right">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Demonstration:</span>
            <strong className="text-white font-semibold">{demoName}</strong>
          </div>
          <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/15 uppercase tracking-wider">
            Alvora Tech Template
          </span>
        </div>
      </div>
    </aside>
  );
}

