import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './electrical.css';

export default function Electrical() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (['services', 'portfolio', 'gallery', 'why-us', 'about', 'faq', 'contact', 'dispatch', 'estimate'].includes(hash)) {
        if (hash === 'gallery') return 'portfolio';
        if (hash === 'about') return 'why-us';
        if (hash === 'dispatch' || hash === 'estimate') return 'contact';
        return hash;
      }
    }
    return 'home';
  });

  const navigateTo = (view, e) => {
    if (e && e.preventDefault) e.preventDefault();
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      window.location.hash = view === 'home' ? '' : view;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (['services', 'portfolio', 'gallery', 'why-us', 'about', 'faq', 'contact', 'dispatch', 'estimate'].includes(hash)) {
        if (hash === 'gallery') setCurrentView('portfolio');
        else if (hash === 'about') setCurrentView('why-us');
        else if (hash === 'dispatch' || hash === 'estimate') setCurrentView('contact');
        else setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      runInit();
    }, 60);
    return () => clearTimeout(timer);
  }, [currentView]);
  useEffect(() => {
    try {
      /**
 * ALVORATECH – PREMIER ELECTRICAL CONTRACTORS
 * Licensed Residential & Commercial Electrical Engineering
 * Pure Vanilla JavaScript ES6+ Architecture
 */

const runInit = () => {
  'use strict';

  /* ==========================================================================
     1. STICKY HEADER & SCROLL STATE
     ========================================================================== */
  const header = document.querySelector('.site-header');

  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');

  const openDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeDrawer);
  }

  const mobileLinks = document.querySelectorAll('.mobile-drawer a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ==========================================================================
     3. SMOOTH SCROLL FOR IN-PAGE ANCHORS
     ========================================================================== */
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  /* ==========================================================================
     4. INTERSECTION OBSERVER SCROLL REVEALS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     5. INTERACTIVE ELECTRICAL LOAD CALCULATOR
     ========================================================================== */
  const baseLoadAmps = 60; // Baseline lighting, refrigeration, small appliances
  const loadToggleCards = document.querySelectorAll('.load-toggle-card');
  const totalAmpsDisplay = document.getElementById('calc-total-amps');
  const gaugeBarFill = document.getElementById('calc-gauge-fill');
  const recommendTitle = document.getElementById('calc-recommend-title');
  const recommendDesc = document.getElementById('calc-recommend-desc');
  const loadWhatsappBtn = document.getElementById('calc-load-whatsapp-btn');

  const updateLoadCalculation = () => {
    let addedAmps = 0;
    const activeApplianceNames = [];

    loadToggleCards.forEach(card => {
      if (card.classList.contains('active')) {
        const amps = parseInt(card.getAttribute('data-amps'), 10) || 0;
        addedAmps += amps;
        activeApplianceNames.push(card.getAttribute('data-name') || 'Appliance');
      }
    });

    const totalAmps = baseLoadAmps + addedAmps;

    // Update Number Display
    if (totalAmpsDisplay) {
      totalAmpsDisplay.textContent = `${totalAmps} Amps`;
    }

    // Update Gauge Bar (scale relative to 300A for visual clarity)
    if (gaugeBarFill) {
      const percentage = Math.min(100, Math.round((totalAmps / 260) * 100));
      gaugeBarFill.style.width = `${percentage}%`;
    }

    // Dynamic Engineering Recommendation
    let recommendation = "";
    let description = "";

    if (totalAmps <= 100) {
      recommendation = "Standard 100A or 125A Service Panel";
      description = "Your current electrical load is within legacy limits, but adding an EV charger or heat pump in the future will exceed safety margins.";
    } else if (totalAmps <= 180) {
      recommendation = "200-Amp Main Service Heavy-Up Recommended";
      description = "Your calculated load exceeds 100A safety thresholds. A modern 200-Amp Square D or Eaton panel upgrade is essential to prevent nuisance trips, meet NEC code, and protect your appliances.";
    } else {
      recommendation = "400-Amp Commercial / Dual 200A Service Required";
      description = "High electrical density detected. A dual-panel 400-Amp service heavy-up is engineered for modern all-electric residences with EV charging, heat pumps, and hot tubs.";
    }

    if (recommendTitle) recommendTitle.textContent = recommendation;
    if (recommendDesc) recommendDesc.textContent = description;

    // Update WhatsApp link
    if (loadWhatsappBtn) {
      const message = encodeURIComponent(
        `Hello Alvoratech! I used your Electrical Load Calculator. My calculated load is ${totalAmps} Amps with additions: [${activeApplianceNames.join(', ')}]. Recommendation: ${recommendation}. I would like to schedule a panel load assessment!`
      );
      loadWhatsappBtn.href = `https://wa.me/message/RVTZQMFL7I6OH1?text=${message}`;
    }
  };

  if (loadToggleCards.length > 0) {
    loadToggleCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('active');
        updateLoadCalculation();
      });
    });
    updateLoadCalculation();
  }

  /* ==========================================================================
     6. 5-SCENARIO INTERACTIVE BEFORE & AFTER SHOWCASE
     ========================================================================== */
  const baScenarios = {
    panel: {
      before: '/electrical/assets/images/ba-panel-before.jpg',
      after: '/electrical/assets/images/ba-panel-after.jpg',
      title: '200A Main Panel Heavy-Up & Whole-Home Surge Arrestor'
    },
    ev: {
      before: '/electrical/assets/images/ba-ev-before.jpg',
      after: '/electrical/assets/images/ba-ev-after.jpg',
      title: 'Tesla Wall Connector Level 2 Dedicated EV Circuit'
    },
    conduit: {
      before: '/electrical/assets/images/ba-conduit-before.jpg',
      after: '/electrical/assets/images/ba-conduit-after.jpg',
      title: 'Commercial EMT Metallic Conduit & Three-Phase Distribution'
    },
    gen: {
      before: '/electrical/assets/images/ba-gen-before.jpg',
      after: '/electrical/assets/images/ba-gen-after.jpg',
      title: 'Generac Automatic Standby Generator Installation'
    },
    light: {
      before: '/electrical/assets/images/ba-light-before.jpg',
      after: '/electrical/assets/images/ba-light-after.jpg',
      title: 'Architectural Recessed LED Downlighting & Lutron Dimming'
    }
  };

  const baTabButtons = document.querySelectorAll('.ba-tab-btn');
  const baImgBefore = document.getElementById('ba-image-before');
  const baImgAfter = document.getElementById('ba-image-after');
  const baAfterWrap = document.getElementById('ba-after-wrap');
  const baHandle = document.getElementById('ba-handle');
  const baRangeInput = document.getElementById('ba-range');
  const baSliderContainer = document.querySelector('.ba-slider-container');

  if (baTabButtons.length > 0) {
    baTabButtons.forEach(tab => {
      tab.addEventListener('click', () => {
        baTabButtons.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.getAttribute('data-scenario');
        const scenario = baScenarios[key];

        if (scenario && baImgBefore && baImgAfter) {
          baImgBefore.src = scenario.before;
          baImgAfter.src = scenario.after;
          if (baRangeInput) {
            baRangeInput.value = 50;
            updateSliderPosition(50);
          }
        }
      });
    });
  }

  const updateSliderPosition = (percent) => {
    if (!baAfterWrap || !baHandle) return;
    const clamped = Math.max(0, Math.min(100, percent));
    baAfterWrap.style.width = `${clamped}%`;
    baHandle.style.left = `${clamped}%`;
  };

  if (baRangeInput) {
    baRangeInput.addEventListener('input', (e) => {
      updateSliderPosition(e.target.value);
    });
  }

  const syncAfterImageWidth = () => {
    if (baSliderContainer && baImgAfter) {
      baImgAfter.style.width = `${baSliderContainer.offsetWidth}px`;
    }
  };

  window.addEventListener('resize', syncAfterImageWidth);
  syncAfterImageWidth();

  /* ==========================================================================
     7. FILTERABLE PROJECT GALLERY & LIGHTBOX
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  if (galleryItems.length > 0 && lightboxModal) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay h4');
        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          if (lightboxCaption && caption) {
            lightboxCaption.textContent = caption.textContent;
          }
          lightboxModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  /* ==========================================================================
     8. TESTIMONIALS SLIDER & AUTOPLAY
     ========================================================================== */
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialSlides = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.test-dot');
  let currentSlide = 0;
  let autoplayTimer = null;

  const goToSlide = (index) => {
    if (!testimonialTrack || testimonialSlides.length === 0) return;
    currentSlide = (index + testimonialSlides.length) % testimonialSlides.length;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  if (testimonialDots.length > 0) {
    testimonialDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
        goToSlide(slideIdx);
        startAutoplay();
      });
    });
  }

  if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', stopAutoplay);
    testimonialTrack.addEventListener('mouseleave', startAutoplay);
    startAutoplay();
  }

  /* ==========================================================================
     9. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const answer = item.querySelector('.faq-answer');

    if (button && answer) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
        }
      });
    }
  });

  /* ==========================================================================
     10. EMERGENCY & ESTIMATE DISPATCH FORM
     ========================================================================== */
  const dispatchForm = document.getElementById('electric-dispatch-form');

  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim() || '';
      const phone = document.getElementById('form-phone')?.value.trim() || '';
      const email = document.getElementById('form-email')?.value.trim() || '';
      const service = document.getElementById('form-service')?.value || 'General Electrical';
      const urgency = document.getElementById('form-urgency')?.value || 'Standard';
      const notes = document.getElementById('form-notes')?.value.trim() || 'No additional issue notes.';

      if (!name || !phone) {
        alert('Please provide your name and phone number so our licensed electricians can dispatch to your property.');
        return;
      }

      const message = `Hello Alvoratech Electrical! I need licensed electrical assistance:\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email || 'N/A'}\n` +
        `• Service: ${service}\n` +
        `• Urgency: ${urgency}\n` +
        `• Description: ${notes}\n\n` +
        `Please confirm electrician availability!`;

      const whatsappUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      dispatchForm.reset();
      alert('Thank you! Redirecting you to WhatsApp to connect directly with an Alvoratech licensed electrical dispatcher.');
    });
  }

}; runInit();

    } catch (err) {
      console.warn('Interactive script error in Electrical:', err);
    }
  }, []);

  return (
    <div className="electrical-demo" id="top">
      <DemoTopBar demoName="Alvoratech Electrical Contractors" />
      

      {/* ==========================================================================
       2. STICKY HEADER & NAVIGATION
       ========================================================================== */}
      <header className="site-header" role="banner">
        <div className="container-wide">
          <div className="nav-container">
            {/* Logo */}
            <a href="#hero" onClick={(e) => navigateTo('home', e)} className="site-logo" aria-label="Alvoratech Home">
              <div className="logo-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <span className="logo-text">ALVORATECH</span>
                <span className="logo-tagline">Electrical Contractors</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" role="navigation" aria-label="Main Navigation">
              <a href="#hero" onClick={(e) => navigateTo('home', e)} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#services" onClick={(e) => navigateTo('services', e)} className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Services</a>
              <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className={`nav-link ${currentView === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
              <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className={`nav-link ${currentView === 'why-us' ? 'active' : ''}`}>Why Us</a>
              <a href="#faq" onClick={(e) => navigateTo('faq', e)} className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
              <a href="#contact" onClick={(e) => navigateTo('contact', e)} className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>

            {/* Nav CTA Actions */}
            <div className="nav-actions">
              <a href="#dispatch" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm desktop-only-btn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Schedule Service
              </a>
              <button className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label="Open navigation menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay & Drawer */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} aria-hidden="true"></div>
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`} role="dialog" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Electrical Menu</span>
          <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
            &times;
          </button>
        </div>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} href="#hero" className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} href="#services" className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Electrical Services</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('portfolio', e); }} href="#portfolio" className={`nav-link ${currentView === 'portfolio' ? 'active' : ''}`}>Project Gallery</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} href="#why-us" className={`nav-link ${currentView === 'why-us' ? 'active' : ''}`}>Why Choose Us</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} href="#faq" className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact & Dispatch</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className="btn btn-primary nav-cta">
          Schedule Service
        </a>
      </aside>
      <main id="main-content">
      {/* Section Header Banner */}
      {currentView !== 'home' && (
        <section className="view-page-banner" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '2.25rem 1.5rem',
          color: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0', letterSpacing: '-0.02em', color: '#ffffff' }}>
              {currentView === 'services' && 'Our Electrical Services & Capabilities'}
              {currentView === 'portfolio' && 'Project Portfolio & Panel Transformations'}
              {currentView === 'why-us' && 'Why Property Owners Choose Us'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {currentView === 'contact' && 'Schedule Service & Emergency Dispatch'}
            </h1>
            </div>
        </section>
      )}

        {/* HOMEPAGE VIEW: Clean, customer-centric essentials */}
        {currentView === 'home' && (
          <>
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column Content */}
          <div className="hero-content reveal">
            <h1 className="hero-title">
              Master-Certified Electrical. Zero Shortcuts. <span className="highlight-amber">100% Code-Compliant.</span>
            </h1>

            <p className="hero-subtitle">
              Delivering rapid emergency repairs, 200A service panel heavy-ups, Tesla EV Level 2 charging, and automatic standby generators across residential homes and commercial facilities.
            </p>

            <div className="hero-ctas">
              <a href="#dispatch" className="btn btn-amber btn-lg">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Schedule Electrical Service
              </a>
              <a href="tel:+14127963968" className="btn btn-secondary btn-lg">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call: +1 (412) 796-3968
              </a>
            </div>

            {/* Trust Row */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Licensed Master Electricians</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>NEC & NFPA 70 Code Certified</span>
              </div>
              <div className="trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>100% Upfront Firm Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column Image Presentation */}
          <div className="hero-media reveal stagger-2">
            <div className="hero-image-wrapper">
              <img src="/electrical/assets/images/elec-hero.jpg" alt="Alvoratech master electrician working inside electrical service panel" className="hero-image" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         4. TRUST & SAFETY METRICS STRIP
         ========================================================================== */}
    <section className="metrics-strip">
      <div className="container">
        <div className="metrics-grid">
          {/* Metric 1 */}
          <div className="metric-card reveal stagger-1">
            <div className="metric-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="metric-info">
              <h3>&lt; 45 Min</h3>
              <p>Average 24/7 Mobile Emergency Outage & Hazard Arrival</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="metric-card reveal stagger-2">
            <div className="metric-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="metric-info">
              <h3>Upfront</h3>
              <p>Flat-Rate Pricing Approved in Writing Before Any Work Starts</p>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="metric-card reveal stagger-3">
            <div className="metric-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div className="metric-info">
              <h3>10,000+</h3>
              <p>Safely Installed Breakers, Circuits & Subpanels</p>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="metric-card reveal stagger-4">
            <div className="metric-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="metric-info">
              <h3>5-Year</h3>
              <p>Comprehensive Written Workmanship & Code Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         5. CORE ELECTRICAL SERVICES (8 COMPREHENSIVE CARDS)
         ========================================================================== */}
        {/* ==========================================================================
             HOME FEATURED SERVICES PREVIEW
             ========================================================================== */}
        <section className="section-padding services-section" id="services">
          <div className="container">
            <div className="section-header text-center reveal">
              <h2>Licensed Electrical Solutions</h2>
              <p className="section-subtitle">
                Master-certified electrical engineering, 200A panel upgrades, EV infrastructure, and 24/7 emergency response.
              </p>
            </div>
            
            <div className="services-grid-8">
              <article className="service-card reveal stagger-1">
                <div className="service-image-box">
                  <img src="/electrical/assets/images/service-panel.jpg" alt="200 Amp breaker panel replacement" className="service-image" loading="lazy" />
                  <span className="service-badge">Heavy Up</span>
                </div>
                <div className="service-content">
                  <h3>200A Main Service Panel Upgrades</h3>
                  <p>Upgrade outdated, hazardous fuse boxes and 100A panels to 200A square-D or Siemens QO systems with surge suppression.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              <article className="service-card reveal stagger-2">
                <div className="service-image-box">
                  <img src="/electrical/assets/images/service-ev.jpg" alt="EV level 2 home charging station" className="service-image" loading="lazy" />
                  <span className="service-badge">EV Certified</span>
                </div>
                <div className="service-content">
                  <h3>EV Level 2 Charger Installation</h3>
                  <p>Dedicated 240V circuits and NEMA 14-50 installations engineered for Tesla, Rivian, and all universal electric vehicles.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              <article className="service-card reveal stagger-3">
                <div className="service-image-box">
                  <img src="/electrical/assets/images/service-generator.jpg" alt="Whole-home standby generator system" className="service-image" loading="lazy" />
                  <span className="service-badge">Power Defense</span>
                </div>
                <div className="service-content">
                  <h3>Whole-Home Backup Generators</h3>
                  <p>Automatic transfer switches and whole-house standby power delivering instant, seamless electricity during grid failures.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              <article className="service-card reveal stagger-4">
                <div className="service-image-box">
                  <img src="/electrical/assets/images/service-rewire.jpg" alt="Knob and tube copper rewiring" className="service-image" loading="lazy" />
                  <span className="service-badge">Code Safety</span>
                </div>
                <div className="service-content">
                  <h3>Whole-House Copper Rewiring</h3>
                  <p>Eliminate hazardous knob-and-tube or ungrounded cloth wiring with modern Romex NM-B copper lines meeting NEC codes.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button onClick={(e) => navigateTo('services', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: 600 }}>
                View All 8 Electrical Services &rarr;
              </button>
            </div>
          </div>
        </section>
    <section className="section-padding" id="about" style={{"backgroundColor":"var(--color-bg-light)"}}>
      <div className="container">
        <div className="why-grid">
          <div className="why-image-card reveal">
            <img src="/electrical/assets/images/elec-about.jpg" alt="Alvoratech certified electrical technician checking voltage diagnostics" className="why-image" loading="lazy" />
          </div>
          <div className="reveal stagger-1">
            <h2>Setting the Standard in American Electrical Contracting</h2>
            <p style={{"fontSize":"1.0625rem","marginBottom":"1.25rem"}}>
              Electricity powers modern life, but unsafe installations threaten lives and property. At Alvoratech, our licensed master electricians operate on a foundational promise: strict National Electrical Code (NEC) compliance, zero shortcut wiring, and uncompromising craftsmanship.
            </p>
            <p style={{"marginBottom":"2rem"}}>
              Our technicians arrive in fully stocked mobile service vans prepared to handle 95% of service panel, EV charging, and emergency repairs on the spot. We respect your property, wear protective floor booties, and conduct a full thermal safety audit before leaving.
            </p>
            <div style={{"display":"flex","gap":"1rem","flexWrap":"wrap"}}>
              <a href="#dispatch" className="btn btn-amber">Request Electrical Dispatch</a>
              <a href="tel:+14127963968" className="btn btn-secondary">Emergency: +1 (412) 796-3968</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         12. FILTERABLE ELECTRICAL PORTFOLIO GALLERY (LIGHTBOX ENABLED)
         ========================================================================== */}
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Trusted by Homeowners, Builders & Facility Managers</h2>
          <div style={{"marginTop":"0.5rem","fontSize":"0.75rem","textTransform":"uppercase","letterSpacing":"0.08em","color":"var(--color-amber)","fontWeight":"700"}}>
            Demonstration Testimonials • Sample Verified Client Feedback
          </div>
        </div>

        <div className="testimonials-slider-box reveal stagger-1">
          <div className="testimonial-track-container">
            <div className="testimonial-track">
              {/* Slide 1 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "We bought a 1968 home that still had a dangerous Zinsco panel. Alvoratech upgraded our service to 200 Amps with a Square D panel and installed our Tesla Wall Connector in one afternoon. Clean, punctual, and pulled all permits!"
                </blockquote>
                <div className="test-author">
                  <h4>Michael & Rachel S.</h4>
                  <span>Residential Homeowners • 200A Panel & Tesla EV Install</span>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "At 10:30 PM our main breaker started buzzing and smoking. I called Alvoratech's emergency line, and a master technician arrived in 35 minutes. He diagnosed a loose utility lug, secured the connection, and prevented a house fire."
                </blockquote>
                <div className="test-author">
                  <h4>Gregory T.</h4>
                  <span>Emergency Night Dispatch • Hazardous Breaker Repair</span>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "We hired Alvoratech for our new 8,000 sq ft logistics facility. Their conduit bending is like artwork—laser-straight, properly supported, and fully compliant with all local commercial inspectors."
                </blockquote>
                <div className="test-author">
                  <h4>Brian K.</h4>
                  <span>Commercial Operations Director • Three-Phase 480V Buildout</span>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "Having our Generac whole-home generator installed by Alvoratech gave us total peace of mind. During the recent winter storm, our power kicked on automatically in 7 seconds while the rest of the neighborhood was dark."
                </blockquote>
                <div className="test-author">
                  <h4>Amanda L.</h4>
                  <span>Standby Power Client • Generac 24kW Generator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="testimonial-dots">
            <button className="test-dot active" data-slide="0" aria-label="Go to slide 1"></button>
            <button className="test-dot" data-slide="1" aria-label="Go to slide 2"></button>
            <button className="test-dot" data-slide="2" aria-label="Go to slide 3"></button>
            <button className="test-dot" data-slide="3" aria-label="Go to slide 4"></button>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         15. FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ========================================================================== */}
    <section className="section-padding estimate-form-section" id="dispatch">
      <div className="container">
        <div className="section-header reveal">
          <h2>Schedule Electrical Service or Emergency Dispatch</h2>
          <p>Fill out the service form below. Our licensed master dispatchers will immediately review your project details and follow up.</p>
        </div>

        <div className="estimate-form-wrapper reveal stagger-1">
          <form id="electric-dispatch-form" novalidate>
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Full Name *</label>
                <input type="text" id="form-name" className="form-input" placeholder="e.g. Robert Anderson" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-phone">Phone Number *</label>
                <input type="tel" id="form-phone" className="form-input" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Email Address</label>
                <input type="email" id="form-email" className="form-input" placeholder="robert@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-service">Required Service *</label>
                <select id="form-service" className="form-select" required>
                  <option value="" disabled selected>Select Electrical Specialty</option>
                  <option value="Main Panel Upgrade 200A">200A / 400A Main Panel Heavy-Up</option>
                  <option value="EV Charger Installation">Level 2 EV Charger (Tesla/Universal)</option>
                  <option value="Standby Generator">Generac Whole-Home Generator</option>
                  <option value="24/7 Emergency Outage">24/7 Emergency Outage / Hazard</option>
                  <option value="Commercial Electrical">Commercial Electrical Contracting</option>
                  <option value="Lighting & Smart Dimmers">Architectural Recessed Lighting</option>
                  <option value="Surge Protection">Whole-House Surge Protection</option>
                  <option value="Safety Inspection">Electrical Code Inspection</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-urgency">Urgency Level</label>
                <select id="form-urgency" className="form-select">
                  <option value="Immediate Emergency (< 1 hour)">Immediate Emergency (&lt; 1 Hour Dispatch)</option>
                  <option value="Same-Day Service">Same-Day Service Preferred</option>
                  <option value="Standard Scheduling" selected>Standard Scheduling / Free Quote</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-property">Property Type</label>
                <select id="form-property" className="form-select">
                  <option value="Residential Single Family">Residential Single Family Home</option>
                  <option value="Condo / Multi-Family">Condo / Multi-Family Unit</option>
                  <option value="Commercial / Industrial">Commercial / Industrial Facility</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="form-notes">Issue Description & Panel Details</label>
              <textarea id="form-notes" className="form-textarea" placeholder="Describe the electrical issue, current panel amperage, or planned additions (e.g. Tesla charger or frequent breaker tripping)..."></textarea>
            </div>

            <button type="submit" className="btn btn-amber btn-lg" style={{"width":"100%"}}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Submit & Connect with Dispatch on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         17. BOTTOM DEMO BANNER
         ========================================================================== */}
          </>
        )}

        {/* SERVICES VIEW: Complete Services, Load Calculator & Panel Matrix */}
        {currentView === 'services' && (
          <>
    <section className="section-padding services-section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <h2>Precision Electrical Engineering for Every Demand</h2>
          <p>From complex 200A service heavy-ups and Tesla EV chargers to critical industrial three-phase power, our certified crews deliver lasting safety.</p>
        </div>

        <div className="services-grid-8">
          {/* Service 1 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-panel.jpg" alt="Main electrical panel upgrade" className="service-image" loading="lazy" />
              <span className="service-badge">Service Panels</span>
            </div>
            <div className="service-content">
              <h3>Main Panel Upgrades (200A / 400A)</h3>
              <p>Eliminate breaker trips and prepare your home for modern electric heating, appliances, and EV charging with a clean 200A heavy-up.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Square D & Eaton commercial-grade copper bus</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Municipal permits & utility coordination included</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 2 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-ev.jpg" alt="Level 2 EV charger installation" className="service-image" loading="lazy" />
              <span className="service-badge">EV Charging</span>
            </div>
            <div className="service-content">
              <h3>EV Charger Installation (Level 2)</h3>
              <p>Charge up to 6x faster at home. Certified installations for Tesla Wall Connectors, ChargePoint, and NEMA 14-50 dedicated lines.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>40A / 50A / 60A dedicated breaker circuits</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Laser-straight metal EMT conduit runs</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 3 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-generator.jpg" alt="Whole-home standby generator" className="service-image" loading="lazy" />
              <span className="service-badge">Standby Power</span>
            </div>
            <div className="service-content">
              <h3>Whole-Home Standby Generators</h3>
              <p>Keep your refrigerator, HVAC, medical equipment, and security active during storm blackouts with automatic Generac transfer switches.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Automatic sub-second grid transfer</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Natural gas & liquid propane integration</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 4 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-emergency.jpg" alt="24/7 Emergency electrical repairs" className="service-image" loading="lazy" />
              <span className="service-badge">24/7 Emergency</span>
            </div>
            <div className="service-content">
              <h3>24/7 Emergency Electrical Repairs</h3>
              <p>Immediate rapid dispatch for buzzing panels, burning odors, hot outlets, sparked breakers, or sudden unexplained total power outages.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Sub-45 minute emergency arrival</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Thermal imaging diagnostic inspection</span>
                </div>
              </div>
              <div className="service-action">
                <a href="tel:+14127963968" className="btn btn-amber btn-sm" style={{"width":"100%"}}>
                  Emergency Call Now
                </a>
              </div>
            </div>
          </article>

          {/* Service 5 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-commercial.jpg" alt="Commercial electrical contracting" className="service-image" loading="lazy" />
              <span className="service-badge">Commercial</span>
            </div>
            <div className="service-content">
              <h3>Commercial Electrical Contracting</h3>
              <p>Heavy commercial three-phase 480V installations, distribution switchgear, retail buildouts, and industrial machinery power drops.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Heavy EMT & rigid conduit fabrication</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Minimal business downtime scheduling</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 6 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-lighting.jpg" alt="Architectural and recessed LED lighting" className="service-image" loading="lazy" />
              <span className="service-badge">Lighting</span>
            </div>
            <div className="service-content">
              <h3>Architectural & Recessed LED Lighting</h3>
              <p>Transform living spaces with ultra-thin wafer recessed LEDs, under-cabinet strips, high-ceiling chandeliers, and Lutron Caséta smart dimmers.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Flicker-free warm dimming (2700K - 3000K)</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Smart smartphone & voice automation</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 7 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-surge.jpg" alt="Whole-home surge protection" className="service-image" loading="lazy" />
              <span className="service-badge">Surge Protection</span>
            </div>
            <div className="service-content">
              <h3>Whole-House Surge Protection</h3>
              <p>Safeguard expensive HVAC compressors, smart appliances, home theaters, and computers from lightning and utility grid voltage spikes.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Type 1 & Type 2 SPD panel arrestors</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Up to $75,000 connected equipment coverage</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Service 8 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/electrical/assets/images/service-inspection.jpg" alt="Electrical safety inspection" className="service-image" loading="lazy" />
              <span className="service-badge">Inspections</span>
            </div>
            <div className="service-content">
              <h3>Electrical Safety Inspections & Code</h3>
              <p>Comprehensive 42-point safety audits for home purchases, insurance requirements, GFCI/AFCI upgrades, and ungrounded wiring remediation.</p>
              <div className="service-features">
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Infrared electrical hotspot diagnostics</span>
                </div>
                <div className="service-feature-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Certified itemized municipal reports</span>
                </div>
              </div>
              <div className="service-action">
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{"width":"100%"}}>
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         6. MIDDLE DEMO BANNER
         ========================================================================== */}
    <section className="section-padding calculator-section" id="load-calculator">
      <div className="container">
        <div className="section-header reveal">
          <h2>Can Your Service Panel Handle Modern Electric Demand?</h2>
          <p>Toggle your planned electrical additions below. Our engineering logic calculates your estimated continuous draw and safety headroom.</p>
        </div>

        <div className="calc-container reveal stagger-1">
          {/* Toggles Column */}
          <div>
            <h3 style={{"fontSize":"1.5rem","marginBottom":"0.5rem"}}>Select Planned Additions</h3>
            <p style={{"fontSize":"0.9375rem","marginBottom":"1.5rem"}}>Baseline household draw is calculated at 60 Amps (Lighting, Refrigerator, Small Electronics).</p>

            <div className="load-toggles-grid">
              {/* Item 1 */}
              <div className="load-toggle-card active" data-amps="40" data-name="Level 2 EV Charger">
                <div className="load-toggle-left">
                  <div className="load-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                  </div>
                  <div className="load-toggle-title">
                    <strong>Level 2 Electric Vehicle Charger</strong>
                    <span>240V Dedicated 40A / 50A Circuit</span>
                  </div>
                </div>
                <span className="load-amp-pill">+40 Amps</span>
              </div>

              {/* Item 2 */}
              <div className="load-toggle-card active" data-amps="30" data-name="Heat Pump HVAC">
                <div className="load-toggle-left">
                  <div className="load-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div className="load-toggle-title">
                    <strong>Heat Pump / Central AC Compressor</strong>
                    <span>High-Efficiency Inverter HVAC</span>
                  </div>
                </div>
                <span className="load-amp-pill">+30 Amps</span>
              </div>

              {/* Item 3 */}
              <div className="load-toggle-card" data-amps="40" data-name="Induction Range">
                <div className="load-toggle-left">
                  <div className="load-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <div className="load-toggle-title">
                    <strong>Induction Cooktop & Electric Oven</strong>
                    <span>High-Efficiency Cooking Conversion</span>
                  </div>
                </div>
                <span className="load-amp-pill">+40 Amps</span>
              </div>

              {/* Item 4 */}
              <div className="load-toggle-card" data-amps="50" data-name="Hot Tub / Pool">
                <div className="load-toggle-left">
                  <div className="load-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20"/><path d="M20 12v8H4v-8"/><path d="m4 8 16-4"/></svg>
                  </div>
                  <div className="load-toggle-title">
                    <strong>Hot Tub / Swimming Pool Pump</strong>
                    <span>50A GFCI Protected Subpanel</span>
                  </div>
                </div>
                <span className="load-amp-pill">+50 Amps</span>
              </div>

              {/* Item 5 */}
              <div className="load-toggle-card" data-amps="30" data-name="Electric Clothes Dryer">
                <div className="load-toggle-left">
                  <div className="load-toggle-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="5"/></svg>
                  </div>
                  <div className="load-toggle-title">
                    <strong>Electric Clothes Dryer</strong>
                    <span>240V Dedicated 30A Circuit</span>
                  </div>
                </div>
                <span className="load-amp-pill">+30 Amps</span>
              </div>
            </div>
          </div>

          {/* Output Column */}
          <div className="calc-output-card">
            <div className="gauge-header">
              <span>Estimated Continuous Peak Draw:</span>
              <div className="gauge-amps-display" id="calc-total-amps">130 Amps</div>
            </div>

            <div className="gauge-bar-track">
              <div className="gauge-bar-fill" id="calc-gauge-fill" style={{"width":"50%"}}></div>
            </div>

            <div className="gauge-recommendation-box">
              <h4 id="calc-recommend-title">200-Amp Main Service Heavy-Up Recommended</h4>
              <p id="calc-recommend-desc">
                Your calculated demand exceeds traditional 100A limits. Upgrading to a 200A Square D QO panel provides full NEC compliance, fire safety, and future headroom.
              </p>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg" id="calc-load-whatsapp-btn" style={{"width":"100%"}}>
              Book Panel Load Assessment
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         8. 5-SCENARIO BEFORE & AFTER COMPARISON SLIDER
         ========================================================================== */}
    <section className="section-padding panels-matrix-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Do You Have an Obsolete or Recalled Electrical Panel?</h2>
          <p>Millions of older American homes still operate on obsolete breaker panels that fail to trip during short circuits, leading directly to structure fires and insurance cancellations.</p>
        </div>

        <div className="panel-warning-grid">
          {/* Card 1 */}
          <div className="panel-warning-card reveal stagger-1">
            <span className="danger-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Extreme Fire Hazard
            </span>
            <h3>Federal Pacific Electric (FPE)</h3>
            <p>Known for 'Stab-Lok' breakers. Studies demonstrate that up to 60% of FPE breakers fail to trip during an overload, melting wires inside walls.</p>
            <ul className="warning-bullet-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Major cause of home electrical fires</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Frequently denied home insurance coverage</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Urgent replacement recommended</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="panel-warning-card reveal stagger-2">
            <span className="danger-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Melting Bus Bar Defect
            </span>
            <h3>Zinsco / Sylvania Panels</h3>
            <p>Popular from the 1970s. The aluminum interior bus bars corrode and expand, causing breakers to fuse directly to the bar and fail to shut off power.</p>
            <ul className="warning-bullet-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Breakers melt and cannot be switched off</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Ongoing arcing creates invisible fire hazard</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Non-compliant with modern NEC codes</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="panel-warning-card reveal stagger-3">
            <span className="danger-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Overheating Stabs Hazard
            </span>
            <h3>Challenger & Fuse Boxes</h3>
            <p>1980s Challenger panels feature high failure rates on 15A and 20A single-pole breakers, generating extreme heat and melting surrounding plastic.</p>
            <ul className="warning-bullet-list">
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Severe thermal scorching on bus connections</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> 30A-60A screw-in fuses cannot support appliances</li>
              <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Upgrade to Square D 200A recommended</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         10. CERTIFIED BRAND PARTNERSHIPS
         ========================================================================== */}
    <div className="brands-strip">
      <div className="container">
        <div className="brands-strip-title">TIER-1 EQUIPMENT & INDUSTRIAL HARDWARE PARTNERS</div>
        <div className="brands-grid">
          <div className="brand-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <strong>Square D® by Schneider</strong>
          </div>
          <div className="brand-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <strong>Generac® Premier Dealer</strong>
          </div>
          <div className="brand-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <strong>Tesla Energy Certified</strong>
          </div>
          <div className="brand-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <strong>Eaton® & Siemens®</strong>
          </div>
        </div>
      </div>
    </div>

    {/* ==========================================================================
         11. ABOUT US
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <h2>Get a Comprehensive On-Site Inspection</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Schedule a consultation with our master electricians for panel evaluations, load calculations, and code upgrades.</p>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                  Schedule Inspection &rarr;
                </button>
              </div>
            </section>
          </>
        )}

        {/* PORTFOLIO VIEW: Before/After Slider & Gallery */}
        {currentView === 'portfolio' && (
          <>
    <section className="section-padding ba-section" id="transformations">
      <div className="container">
        <div className="section-header reveal">
          <h2>Inspecting the Quality of Certified Electrical Work</h2>
          <p>Drag the interactive slider handle left and right to inspect real-world service panel upgrades, commercial EMT conduit, and Generac backup systems.</p>
        </div>

        {/* Scenario Tabs */}
        <div className="ba-tabs-nav reveal">
          <button className="ba-tab-btn active" data-scenario="panel">200A Panel Heavy-Up</button>
          <button className="ba-tab-btn" data-scenario="ev">Tesla EV Charger</button>
          <button className="ba-tab-btn" data-scenario="conduit">Commercial Conduit</button>
          <button className="ba-tab-btn" data-scenario="gen">Standby Generator</button>
          <button className="ba-tab-btn" data-scenario="light">Recessed LED Lighting</button>
        </div>

        {/* Slider Widget Container */}
        <div className="ba-slider-container reveal stagger-1">
          {/* Before Image */}
          <img src="/electrical/assets/images/ba-panel-before.jpg" alt="Before electrical upgrade" className="ba-image ba-image-before" id="ba-image-before" />
          <span className="ba-badge ba-badge-before">BEFORE (HAZARDOUS)</span>

          {/* After Image with dynamic clip wrap */}
          <div className="ba-image-after-wrap" id="ba-after-wrap">
            <img src="/electrical/assets/images/ba-panel-after.jpg" alt="After code-compliant electrical installation" className="ba-image ba-image-after" id="ba-image-after" />
          </div>
          <span className="ba-badge ba-badge-after">AFTER ALVORATECH</span>

          {/* Handle */}
          <div className="ba-handle" id="ba-handle">
            <div className="ba-handle-button" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{"marginLeft":"-6px"}}>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

          {/* Accessible Range Input */}
          <input type="range" min="0" max="100" value="50" className="ba-range-input" id="ba-range" aria-label="Percentage before after slider" />
        </div>
      </div>
    </section>

    {/* ==========================================================================
         9. OBSOLETE & HAZARDOUS ELECTRICAL PANELS WARNING MATRIX
         ========================================================================== */}
    <section className="section-padding gallery-section" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <h2>Real Installations. Real Electrical Precision.</h2>
          <p>Explore our recent fieldwork across residential panel upgrades, EV charging stations, and commercial three-phase installations. Click any project for high-resolution inspection.</p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filters reveal">
          <button className="filter-btn active" data-filter="all">All Projects</button>
          <button className="filter-btn" data-filter="panel">Panel Heavy-Ups</button>
          <button className="filter-btn" data-filter="ev">EV & Generators</button>
          <button className="filter-btn" data-filter="commercial">Commercial</button>
          <button className="filter-btn" data-filter="lighting">Architectural Lighting</button>
        </div>

        {/* Gallery Grid (8 Items) */}
        <div className="gallery-grid reveal stagger-1">
          {/* Item 1 */}
          <div className="gallery-item" data-category="commercial">
            <img src="/electrical/assets/images/gallery-commercialpanel.jpg" alt="Commercial three phase distribution switchgear" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Three-Phase 480V Switchgear</h4>
              <span>Commercial Distribution</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="gallery-item" data-category="ev">
            <img src="/electrical/assets/images/gallery-teslacharger.jpg" alt="Tesla Wall Connector Level 2 charging station" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Tesla Gen 3 Wall Connector</h4>
              <span>60A Dedicated Circuit</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="gallery-item" data-category="lighting">
            <img src="/electrical/assets/images/gallery-recessedkitchen.jpg" alt="Kitchen recessed architectural LED pot lights" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Recessed Kitchen Downlighting</h4>
              <span>Lutron Smart Dimmers</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="gallery-item" data-category="commercial">
            <img src="/electrical/assets/images/gallery-conduitbending.jpg" alt="Industrial EMT conduit runs and junction boxes" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Precision EMT Conduit Routing</h4>
              <span>Industrial Facility</span>
            </div>
          </div>

          {/* Item 5 */}
          <div className="gallery-item" data-category="ev">
            <img src="/electrical/assets/images/gallery-generacstandby.jpg" alt="Generac standby generator on concrete pad" loading="lazy" />
            <div className="gallery-overlay">
              <h4>24kW Whole-Home Standby Generator</h4>
              <span>Automatic Transfer Switch</span>
            </div>
          </div>

          {/* Item 6 */}
          <div className="gallery-item" data-category="panel">
            <img src="/electrical/assets/images/gallery-smarthomepanel.jpg" alt="Smart home circuit breaker panel with energy monitoring" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Smart Breaker Energy Monitoring</h4>
              <span>Leviton Smart Panel</span>
            </div>
          </div>

          {/* Item 7 */}
          <div className="gallery-item" data-category="lighting">
            <img src="/electrical/assets/images/gallery-outdoorlandscape.jpg" alt="Outdoor architectural facade and pathway lighting" loading="lazy" />
            <div className="gallery-overlay">
              <h4>Low-Voltage Architectural Landscape</h4>
              <span>Exterior Accent Lighting</span>
            </div>
          </div>

          {/* Item 8 */}
          <div className="gallery-item" data-category="commercial">
            <img src="/electrical/assets/images/gallery-warehousehighbay.jpg" alt="Commercial high-bay LED lighting retrofit" loading="lazy" />
            <div className="gallery-overlay">
              <h4>High-Bay Industrial LED Retrofit</h4>
              <span>70% Energy Reduction</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lightbox Modal Container */}
    <div className="lightbox-modal" id="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="lightbox-content-box">
        <button className="lightbox-close" id="lightbox-close" aria-label="Close image preview">×</button>
        <img src="" alt="Enlarged view" className="lightbox-img" id="lightbox-img" />
        <div className="lightbox-caption" id="lightbox-caption"></div>
      </div>
    </div>

    {/* ==========================================================================
         13. WHY CHOOSE ALVORATECH (4 PILLARS)
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <h2>Flawless Wiring, Clean Breaker Panels</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Every installation is executed to the highest architectural standards with lifetime workmanship warranties.</p>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                  Book Service &rarr;
                </button>
              </div>
            </section>
          </>
        )}

        {/* WHY US VIEW: Company Standards, 4 Pillars & Testimonials */}
        {currentView === 'why-us' && (
          <>
    <section className="section-padding" id="about" style={{"backgroundColor":"var(--color-bg-light)"}}>
      <div className="container">
        <div className="why-grid">
          <div className="why-image-card reveal">
            <img src="/electrical/assets/images/elec-about.jpg" alt="Alvoratech certified electrical technician checking voltage diagnostics" className="why-image" loading="lazy" />
          </div>
          <div className="reveal stagger-1">
            <h2>Setting the Standard in American Electrical Contracting</h2>
            <p style={{"fontSize":"1.0625rem","marginBottom":"1.25rem"}}>
              Electricity powers modern life, but unsafe installations threaten lives and property. At Alvoratech, our licensed master electricians operate on a foundational promise: strict National Electrical Code (NEC) compliance, zero shortcut wiring, and uncompromising craftsmanship.
            </p>
            <p style={{"marginBottom":"2rem"}}>
              Our technicians arrive in fully stocked mobile service vans prepared to handle 95% of service panel, EV charging, and emergency repairs on the spot. We respect your property, wear protective floor booties, and conduct a full thermal safety audit before leaving.
            </p>
            <div style={{"display":"flex","gap":"1rem","flexWrap":"wrap"}}>
              <a href="#dispatch" className="btn btn-amber">Request Electrical Dispatch</a>
              <a href="tel:+14127963968" className="btn btn-secondary">Emergency: +1 (412) 796-3968</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         12. FILTERABLE ELECTRICAL PORTFOLIO GALLERY (LIGHTBOX ENABLED)
         ========================================================================== */}
    <section className="section-padding why-section" id="why-us">
      <div className="container">
        <div className="why-grid">
          {/* Text Pillars */}
          <div className="reveal">
            <h2>Why Homeowners & General Contractors Rely on Alvoratech</h2>
            <p style={{"marginBottom":"2.5rem"}}>
              We eliminate the common risks of hiring electrical contractors. With Alvoratech, you receive master-level engineering, full code compliance, and clean workmanship.
            </p>

            <div className="why-pillars-list">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div>
                  <h3>Licensed, Bonded & $2M Insured</h3>
                  <p>Our technicians hold state electrical master & journeyman licenses. Every job is fully protected by comprehensive liability insurance.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h3>Guaranteed Upfront Flat-Rate Pricing</h3>
                  <p>No open-ended hourly billing or surprise charges. We present a clear, itemized proposal before starting any electrical repair or upgrade.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <div>
                  <h3>Stocked Mobile Service Vans</h3>
                  <p>Our mobile units carry hundreds of Square D breakers, copper conduit, surge arrestors, and wire gauges to resolve 95% of issues in one visit.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h3>Zero-Mess & Floor Protection Guarantee</h3>
                  <p>Our technicians wear shoe covers, lay protective floor coverings, and vacuum all drywall dust before closing up work areas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Image */}
          <div className="why-image-card reveal stagger-2">
            <img src="/electrical/assets/images/elec-why.jpg" alt="Master electrician tools and organized electrical testing equipment" className="why-image" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         14. VERIFIED CLIENT TESTIMONIALS
         ========================================================================== */}
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="section-header reveal">
          <h2>Trusted by Homeowners, Builders & Facility Managers</h2>
          <div style={{"marginTop":"0.5rem","fontSize":"0.75rem","textTransform":"uppercase","letterSpacing":"0.08em","color":"var(--color-amber)","fontWeight":"700"}}>
            Demonstration Testimonials • Sample Verified Client Feedback
          </div>
        </div>

        <div className="testimonials-slider-box reveal stagger-1">
          <div className="testimonial-track-container">
            <div className="testimonial-track">
              {/* Slide 1 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "We bought a 1968 home that still had a dangerous Zinsco panel. Alvoratech upgraded our service to 200 Amps with a Square D panel and installed our Tesla Wall Connector in one afternoon. Clean, punctual, and pulled all permits!"
                </blockquote>
                <div className="test-author">
                  <h4>Michael & Rachel S.</h4>
                  <span>Residential Homeowners • 200A Panel & Tesla EV Install</span>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "At 10:30 PM our main breaker started buzzing and smoking. I called Alvoratech's emergency line, and a master technician arrived in 35 minutes. He diagnosed a loose utility lug, secured the connection, and prevented a house fire."
                </blockquote>
                <div className="test-author">
                  <h4>Gregory T.</h4>
                  <span>Emergency Night Dispatch • Hazardous Breaker Repair</span>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "We hired Alvoratech for our new 8,000 sq ft logistics facility. Their conduit bending is like artwork—laser-straight, properly supported, and fully compliant with all local commercial inspectors."
                </blockquote>
                <div className="test-author">
                  <h4>Brian K.</h4>
                  <span>Commercial Operations Director • Three-Phase 480V Buildout</span>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="testimonial-card">
                <div className="test-stars">★★★★★</div>
                <blockquote className="test-quote">
                  "Having our Generac whole-home generator installed by Alvoratech gave us total peace of mind. During the recent winter storm, our power kicked on automatically in 7 seconds while the rest of the neighborhood was dark."
                </blockquote>
                <div className="test-author">
                  <h4>Amanda L.</h4>
                  <span>Standby Power Client • Generac 24kW Generator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="testimonial-dots">
            <button className="test-dot active" data-slide="0" aria-label="Go to slide 1"></button>
            <button className="test-dot" data-slide="1" aria-label="Go to slide 2"></button>
            <button className="test-dot" data-slide="2" aria-label="Go to slide 3"></button>
            <button className="test-dot" data-slide="3" aria-label="Go to slide 4"></button>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         15. FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ========================================================================== */}
          </>
        )}

        {/* FAQ VIEW: Comprehensive Accordions */}
        {currentView === 'faq' && (
          <>
    <section className="section-padding faq-section" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <h2>Clear Answers from Certified Electricians</h2>
          <p>Get clear, expert answers on 200-Amp panel heavy-ups, EV charging capacity, circuit breaker tripping, and electrical permitting.</p>
        </div>

        <div className="faq-container reveal stagger-1">
          {/* FAQ 1 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How do I know if my home needs a 200-Amp panel heavy-up?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>If your current panel is 100A or 125A and you are adding an EV Level 2 charger, heat pump HVAC, electric tankless water heater, or hot tub, you will exceed safe capacity. Signs of an overloaded panel include flickering lights when the AC kicks on, frequent breaker trips, or a lack of physical breaker slots.</p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can my electrical system support a Level 2 EV charging station?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>Level 2 EV chargers require a dedicated 240-volt circuit drawing 40 to 60 Amps. During our on-site load assessment, we inspect your service panel capacity, meter base, and existing continuous load. If your panel has adequate headroom, we run dedicated conduit directly to your garage.</p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What causes circuit breakers to repeatedly trip?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>Repeated breaker tripping indicates either circuit overload (too many high-draw appliances running simultaneously), a short circuit (hot wire touching neutral), or a ground fault. If a breaker trips immediately after resetting, do not force it—call an electrician immediately to prevent wire damage.</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What should I do during an urgent electrical emergency?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>If you see sparks, smoke, or smell burning plastic, safely shut off the main breaker at the top of your panel if it is safe to approach. If there is active fire, evacuate immediately and call 911. Then contact our 24/7 hotline at +1 (412) 796-3968 for emergency technician dispatch.</p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How does an automatic standby generator operate during an outage?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>A standby generator connects directly to your home’s electrical panel via an Automatic Transfer Switch (ATS) and connects to natural gas or liquid propane. When utility power cuts out, the ATS detects the loss and automatically starts the generator within 7 to 10 seconds without manual intervention.</p>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Do you pull municipal permits and schedule inspections?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-answer">
              <p>Yes. All panel replacements, generator installs, EV circuits, and commercial buildouts are legally permitted through local municipal building authorities. We handle all paperwork, coordinate power disconnects with the electric utility, and attend the final inspector sign-off.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         16. FAST EMERGENCY & ESTIMATE DISPATCH FORM
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <h2>24/7 On-Call Emergency Electricians</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Electrical emergencies cannot wait. Our licensed technicians are on-call 24 hours a day, 7 days a week.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+14127963968" className="btn btn-primary">Call +1 (412) 796-3968</a>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Chat On WhatsApp</a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* CONTACT VIEW: Full Dispatch Form & Details */}
        {currentView === 'contact' && (
          <>
    <section className="section-padding estimate-form-section" id="dispatch">
      <div className="container">
        <div className="section-header reveal">
          <h2>Schedule Electrical Service or Emergency Dispatch</h2>
          <p>Fill out the service form below. Our licensed master dispatchers will immediately review your project details and follow up.</p>
        </div>

        <div className="estimate-form-wrapper reveal stagger-1">
          <form id="electric-dispatch-form" novalidate>
            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Full Name *</label>
                <input type="text" id="form-name" className="form-input" placeholder="e.g. Robert Anderson" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-phone">Phone Number *</label>
                <input type="tel" id="form-phone" className="form-input" placeholder="+1 (555) 000-0000" required />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Email Address</label>
                <input type="email" id="form-email" className="form-input" placeholder="robert@example.com" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-service">Required Service *</label>
                <select id="form-service" className="form-select" required>
                  <option value="" disabled selected>Select Electrical Specialty</option>
                  <option value="Main Panel Upgrade 200A">200A / 400A Main Panel Heavy-Up</option>
                  <option value="EV Charger Installation">Level 2 EV Charger (Tesla/Universal)</option>
                  <option value="Standby Generator">Generac Whole-Home Generator</option>
                  <option value="24/7 Emergency Outage">24/7 Emergency Outage / Hazard</option>
                  <option value="Commercial Electrical">Commercial Electrical Contracting</option>
                  <option value="Lighting & Smart Dimmers">Architectural Recessed Lighting</option>
                  <option value="Surge Protection">Whole-House Surge Protection</option>
                  <option value="Safety Inspection">Electrical Code Inspection</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label className="form-label" htmlFor="form-urgency">Urgency Level</label>
                <select id="form-urgency" className="form-select">
                  <option value="Immediate Emergency (< 1 hour)">Immediate Emergency (&lt; 1 Hour Dispatch)</option>
                  <option value="Same-Day Service">Same-Day Service Preferred</option>
                  <option value="Standard Scheduling" selected>Standard Scheduling / Free Quote</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-property">Property Type</label>
                <select id="form-property" className="form-select">
                  <option value="Residential Single Family">Residential Single Family Home</option>
                  <option value="Condo / Multi-Family">Condo / Multi-Family Unit</option>
                  <option value="Commercial / Industrial">Commercial / Industrial Facility</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="form-notes">Issue Description & Panel Details</label>
              <textarea id="form-notes" className="form-textarea" placeholder="Describe the electrical issue, current panel amperage, or planned additions (e.g. Tesla charger or frequent breaker tripping)..."></textarea>
            </div>

            <button type="submit" className="btn btn-amber btn-lg" style={{"width":"100%"}}>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Submit & Connect with Dispatch on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         17. BOTTOM DEMO BANNER
         ========================================================================== */}
          </>
        )}
      </main>
  <footer className="site-footer" id="contact" role="contentinfo">
    <div className="container">
      <div className="footer-grid">
        {/* Col 1: Brand Info */}
        <div className="footer-col">
          <div className="site-logo" style={{"marginBottom":"1.25rem"}}>
            <div className="logo-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div>
              <span className="logo-text" style={{"color":"var(--color-white)"}}>ALVORATECH</span>
              <span className="logo-tagline" style={{"color":"var(--color-amber)"}}>Electrical Contractors</span>
            </div>
          </div>
          <p style={{"fontSize":"0.9375rem","marginBottom":"1.5rem","lineHeight":"1.6"}}>
            Premier licensed residential and commercial electrical contracting firm specializing in 200A panel heavy-ups, Tesla EV Level 2 chargers, standby power, and 24/7 emergency dispatch.
          </p>
          <div style={{"fontSize":"0.8125rem","color":"#64748B"}}>
            Master Electrician Licensed • $2M Insured • NEC & NFPA 70 Certified
          </div>
        </div>

        {/* Col 2: Services Directory */}
        <div className="footer-col">
          <h4>Electrical Services</h4>
          <div className="footer-links">
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">200A Main Panel Heavy-Up</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Level 2 EV Charger Stations</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Generac Standby Generators</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">24/7 Emergency Repairs</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Three-Phase Power</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Architectural Recessed Lighting</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Whole-Home Surge Protection</a>
          </div>
        </div>

        {/* Col 3: Clean Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#hero" onClick={(e) => navigateTo('home', e)} className="footer-link">Home</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Services</a>
                <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="footer-link">Portfolio</a>
                <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="footer-link">Why Us</a>
                <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="footer-link">Contact</a>
              </div>
            </div>

        {/* Col 4: Contact & Exact Constraints */}
        <div className="footer-col">
          <h4>Direct Contact</h4>
          <div className="footer-contact-info">
            <div className="footer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div>
                <span style={{"display":"block","fontSize":"0.75rem","textTransform":"uppercase","color":"#64748B"}}>24/7 Phone / WhatsApp</span>
                <a href="tel:+14127963968" style={{"color":"var(--color-white)","fontWeight":"600"}}>+1 (412) 796-3968</a>
              </div>
            </div>

            <div className="footer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <span style={{"display":"block","fontSize":"0.75rem","textTransform":"uppercase","color":"#64748B"}}>Email Inquiry</span>
                <a href="mailto:info@Alvoratechhq.com" style={{"color":"var(--color-white)","fontWeight":"600"}}>info@Alvoratechhq.com</a>
              </div>
            </div>

            <div className="footer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <span style={{"display":"block","fontSize":"0.75rem","textTransform":"uppercase","color":"#64748B"}}>Service Area / Location</span>
                <span style={{"color":"var(--color-white)","fontWeight":"700","fontSize":"1.1rem"}}>*</span>
              </div>
            </div>

            <div className="footer-contact-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div>
                <span style={{"display":"block","fontSize":"0.75rem","textTransform":"uppercase","color":"#64748B"}}>Dispatch Availability</span>
                <span style={{"color":"#CBD5E1","fontSize":"0.875rem"}}>24 Hours / 7 Days a Week</span>
              </div>
            </div>
          </div>
          <div className="footer-social-links" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1.25rem' }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="X (formerly Twitter)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Pinterest"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 Alvoratech Electrical Contractors. All rights reserved.
        </div>
        <div>
          Demonstration Website • Powered by Alvoratech
        </div>
      </div>
    </div>
  </footer>

  {/* ==========================================================================
       19. STATIC FLOATING WHATSAPP BOTTOM BANNER
       ========================================================================== */}
  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" id="fixed-whatsapp-banner" aria-label="Chat with Alvoratech on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span>+1 (412) 796-3968</span>
  </a>

  {/* Script */}
  

    </div>
  );
}
