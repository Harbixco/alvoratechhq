import React, { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import HomeLink from './HomeLink';
import AiVisibilityMenu from './AiVisibilityMenu';
import SolutionsMenu from './SolutionsMenu';
import ResultsMenu from './ResultsMenu';
import AboutMenu from './AboutMenu';
import HeaderPhoneButton from './HeaderPhoneButton';
import HeaderClientLogin from './HeaderClientLogin';
import HeaderDemoButton from './HeaderDemoButton';
import MobileNavToggle from './MobileNavToggle';
import MobileNavDrawer from './MobileNavDrawer';

/**
 * Header Component
 * Exactly replicates Image 1 template:
 * - Pure white background (#ffffff) with subtle border-b (#e2e8f0)
 * - Wordmark logo with teal "interactive" below
 * - Uppercase bold nav links: HOME, AI VISIBILITY, SOLUTIONS, ABOUT, RESULTS
 * - Right-aligned teal outlined pill button: (855) 463-5490
 */
export default function Header({ onOpenDemoModal, onOpenLoginModal, onOpenFaq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/90 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* 1. Brand Logo matching Image 1 */}
        <div className="shrink-0">
          <HeaderLogo />
        </div>

        {/* 2. Desktop Navigation Links (Each link is an independent modular component) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <HomeLink />
          <AiVisibilityMenu />
          <SolutionsMenu />
          <AboutMenu onOpenFaq={onOpenFaq} />
          <ResultsMenu />
        </nav>

        {/* 3. Right Action - Outlined Pill Call Button matching Image 1 */}
        <div className="hidden sm:flex items-center gap-3">
          <HeaderPhoneButton phoneNumber="(855) 463-5490" />
        </div>

        {/* Mobile View Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+18554635490"
            className="px-3 py-1.5 rounded-full border border-[#00828B] text-[#00828B] text-xs font-bold sm:hidden"
          >
            Call
          </a>
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* 4. Dedicated Mobile Drawer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <MobileNavDrawer
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenDemoModal={onOpenDemoModal}
          onOpenLoginModal={onOpenLoginModal}
          onOpenFaq={onOpenFaq}
        />
      </div>
    </header>
  );
}
