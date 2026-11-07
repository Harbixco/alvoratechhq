import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo';
import HomeLink from './HomeLink';
import AiVisibilityLink from './AiVisibilityLink';
import SolutionsLink from './SolutionsLink';
import AboutLink from './AboutLink';
import ResultsLink from './ResultsLink';
import PhoneLink from './PhoneLink';
import MobileCallLink from './MobileCallLink';
import MobileNavToggle from './MobileNavToggle';
import MobileNavDrawer from './MobileNavDrawer';

/**
 * Header Component
 * Exactly replicates Townsquare Interactive template (Image 1):
 * - Pure white background (#ffffff) with subtle bottom border (#e2e8f0)
 * - Wordmark logo with teal "interactive" below
 * - Every link is a separate modular component:
 *   1. HomeLink
 *   2. AiVisibilityLink (with HeaderSubLink components)
 *   3. SolutionsLink (with HeaderSubLink components)
 *   4. AboutLink (with HeaderSubLink components & FAQ action)
 *   5. ResultsLink (with HeaderIndustryLink components)
 *   6. PhoneLink (pill outlined button: (855) 463-5490)
 *   7. MobileCallLink (mobile call button)
 * - Mobile navigation toggle & drawer
 */
export default function Header({ onOpenDemoModal, onOpenLoginModal, onOpenFaq }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/90 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* 1. Brand Logo Component */}
        <div className="shrink-0">
          <HeaderLogo />
        </div>

        {/* 2. Desktop Navigation Links (Each link is an independent modular component) */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          <HomeLink />
          <AiVisibilityLink />
          <SolutionsLink />
          <AboutLink onOpenFaq={onOpenFaq} />
          <ResultsLink />
        </nav>

        {/* 3. Right Action - Outlined Pill Call Link Component matching Image 1 */}
        <div className="hidden sm:flex items-center gap-3">
          <PhoneLink phoneNumber="+1 (412) 769-3968" />
        </div>

        {/* 4. Mobile Call Link & Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <MobileCallLink phoneNumber="+1 (412) 769-3968" />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* 5. Dedicated Mobile Drawer */}
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
