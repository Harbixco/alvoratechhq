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
import TowingCompany from './demos/towing-company/TowingCompany';
import TreeRemoval from './demos/tree-removal/TreeRemoval';
import Cleaning from './demos/cleaning/Cleaning';
import Electrical from './demos/electrical/Electrical';
import Flooring from './demos/Flooring/Flooring';
import Landscaping from './demos/Landscaping/Landscaping';
import Locksmith from './demos/Locksmith/Locksmith';
import Painting from './demos/Painting/Painting';
import PestControl from './demos/pest-control/PestControl';
import PressureDemo from './demos/pressure-demo/PressureDemo';

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

  // Universal Scroll-Reveal Observer for Alvoratech Index Page & Global Routes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targetSelectors = '.reveal, .reveal-on-scroll, .animate-on-scroll, .service-card, .pf-service-card, .feature-card, .benefit-card';

    const activate = (el) => {
      el.classList.add('active');
      el.classList.add('is-visible');
      el.classList.add('visible');
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(targetSelectors).forEach(activate);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.04,
      rootMargin: '0px 0px 50px 0px'
    });

    const scanAndObserve = () => {
      document.querySelectorAll(targetSelectors).forEach(el => {
        if (!el.classList.contains('active') && !el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            activate(el);
          } else {
            observer.observe(el);
          }
        }
      });
    };

    scanAndObserve();
    const timeout = setTimeout(scanAndObserve, 300);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [currentPath]);

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
    return <TowingCompany />;
  }

  if (normalizedPath.includes('tree-removal')) {
    return <TreeRemoval />;
  }

  if (normalizedPath.includes('cleaning')) {
    return <Cleaning />;
  }

  if (normalizedPath.includes('electrical')) {
    return <Electrical />;
  }

  if (normalizedPath.includes('flooring')) {
    return <Flooring />;
  }

  if (normalizedPath.includes('landscaping')) {
    return <Landscaping />;
  }

  if (normalizedPath.includes('locksmith')) {
    return <Locksmith />;
  }

  if (normalizedPath.includes('painting')) {
    return <Painting />;
  }

  if (normalizedPath.includes('pest-control')) {
    return <PestControl />;
  }

  if (normalizedPath.includes('pressure-demo')) {
    return <PressureDemo />;
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
