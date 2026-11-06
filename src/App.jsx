import React, { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero';
import SolutionsGrid from './components/SolutionsGrid';
import IndustriesServed from './components/IndustriesServed';
import DigitalAuditTool from './components/DigitalAuditTool';
import PortfolioShowcase from './components/PortfolioShowcase';
import RoiCalculator from './components/RoiCalculator';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import LoginModal from './components/LoginModal';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1E242B] flex flex-col font-sans selection:bg-[#FF9718]/20 selection:text-[#0C2233]">
      {/* 1. Header with modular link components */}
      <Header
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 3. Core Solutions */}
        <SolutionsGrid onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 4. Industries Served */}
        <IndustriesServed onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 5. Free Digital Audit */}
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
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
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

      {/* Client Portal Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      {/* Sticky Mobile Call & Demo Bar */}
      <StickyMobileBar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
    </div>
  );
}
