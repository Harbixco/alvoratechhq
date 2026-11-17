import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import DigitalAuditTool from './components/DigitalAuditTool';
import PortfolioShowcase from './components/PortfolioShowcase';
import RoiCalculator from './components/RoiCalculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import StickyMobileBar from './components/StickyMobileBar';
import PlumbingServices from './demos/plumbing-services/PlumbingServices';
import AutoRepair from './demos/auto-repair/AutoRepair';
import Contractor from './demos/contractor/Contractor';
import DentalCare from './demos/dental-care/DentalCare';
import PersonalInjury from './demos/personal-injury/PersonalInjury';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  // Sync with browser navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route to live client demo templates (supports both /<template> and /demos/<template>)
  const normalizedPath = (currentPath || window.location.pathname || '').toLowerCase().replace(/\/$/, '');
  
  if (normalizedPath.includes('plumbing-services')) {
    return <PlumbingServices />;
  }

  if (normalizedPath.includes('auto-repair')) {
    return <AutoRepair />;
  }

  if (normalizedPath.includes('contractor')) {
    return <Contractor />;
  }

  if (normalizedPath.includes('dental-care')) {
    return <DentalCare />;
  }

  if (normalizedPath.includes('personal-injury')) {
    return <PersonalInjury />;
  }

  if (normalizedPath.includes('towing-company')) {
    window.location.replace('/towing-company/index.html');
    return null;
  }

  if (normalizedPath.includes('tree-removal')) {
    window.location.replace('/tree-removal/index.html');
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-[#1E242B] flex flex-col font-sans selection:bg-[#FF9718]/20 selection:text-[#0C2233]">
      {/* 1. Header with modular link components */}
      <Header
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 3. Core Solutions */}
        <SolutionsGrid onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 4. Free Digital Audit */}
        <DigitalAuditTool onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 6. Client Results Showcase */}
        <PortfolioShowcase onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 7. Market Potential Estimator */}
        <RoiCalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 8. Investment Plans */}
        <Pricing onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 9. Client Reviews */}
        <Testimonials />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Dedicated FAQ Component */}
      <FaqSection
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
      />

      {/* Interactive Free Demo & Digital Audit Modal */}
      <ProjectModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sticky Mobile Call & Demo Bar */}
      <StickyMobileBar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
    </div>
  );
}
