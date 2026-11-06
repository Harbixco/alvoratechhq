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
import LiveSocialProofToast from './components/LiveSocialProofToast';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1E242B] flex flex-col font-sans selection:bg-[#FF9718]/20 selection:text-[#0C2233]">
      {/* 1. Header matching Image 1 with exact colors & modular link components */}
      <Header
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Carousel matching Image 3 template with exact colors & contact hub */}
        <Hero onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 3. Integrated Solutions matching Image 4 (Expanded to 6 Cards on Clean White Background) */}
        <SolutionsGrid onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 4. Industries We Serve (Multi-Vertical Coverage on Off-White Background) */}
        <IndustriesServed onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 5. Instant Digital Health Check & Audit Scanner (Deep Royal Navy High-Impact Anchor) */}
        <DigitalAuditTool onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 6. Our Work & Client Results Showcase (Pure White Background) */}
        <PortfolioShowcase onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 7. Local Market ROI & Inbound Growth Simulator (Clean Off-White Background) */}
        <RoiCalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 8. Transparent Investment Plans (Pure White Background) */}
        <Pricing onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 9. Verified Client Success Stories (Soft Off-White Background) */}
        <Testimonials />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
      />

      {/* Dedicated FAQ Component (Moved from index page into self-contained FAQ component) */}
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

      {/* Live Social Proof Milestones */}
      <LiveSocialProofToast />

      {/* Sticky Mobile Conversion Bar */}
      <StickyMobileBar onOpenDemoModal={() => setIsDemoModalOpen(true)} />
    </div>
  );
}
