import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './cleaning.css';

export default function Cleaning() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (['services', 'about', 'why-choose', 'gallery', 'testimonials', 'faq', 'contact'].includes(hash)) {
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
      if (['services', 'about', 'why-choose', 'gallery', 'testimonials', 'faq', 'contact'].includes(hash)) {
        setCurrentView(hash);
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
 * ALVORATECH – PREMIUM CLEANING SERVICES WEBSITE
 * Interactive JavaScript (Vanilla ES6+)
 * File: js/script.js
 */

const runInit = () => {
  'use strict';

  // Constants & WhatsApp Configuration
  const WHATSAPP_BASE_URL = 'https://wa.me/message/RVTZQMFL7I6OH1';

  /* ==========================================================================
     1. TOP DEMO BANNER DISMISS
     ========================================================================== */
  const topBanner = document.getElementById('topDemoBanner');
  const topBannerClose = document.getElementById('topBannerClose');

  if (topBanner && topBannerClose) {
    topBannerClose.addEventListener('click', () => {
      topBanner.style.transition = 'all 0.3s ease';
      topBanner.style.opacity = '0';
      topBanner.style.maxHeight = '0';
      topBanner.style.paddingTop = '0';
      topBanner.style.paddingBottom = '0';
      topBanner.style.overflow = 'hidden';
      setTimeout(() => {
        topBanner.style.display = 'none';
      }, 300);
    });
  }

  /* ==========================================================================
     2. STICKY HEADER & SCROLL SHADOW
     ========================================================================== */
  const header = document.querySelector('.site-header');

  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer .nav-link, .mobile-drawer .btn');

  const openMobileMenu = () => {
    if (mobileToggle) mobileToggle.classList.add('active');
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (mobileToggle) mobileToggle.classList.remove('active');
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     4. SMOOTH ANCHOR SCROLLING WITH OFFSET
     ========================================================================== */
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        const headerOffset = (header ? header.offsetHeight : 80) + 16;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active nav class
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }
      }
    });
  });

  /* ==========================================================================
     5. INTERSECTION OBSERVER FOR SCROLL REVEALS
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
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     6. GALLERY FILTERING & LIGHTBOX
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Lightbox Modal
  let currentGalleryIndex = 0;
  const visibleGalleryItems = () => Array.from(galleryCards).filter(c => c.style.display !== 'none');

  const openLightbox = (index) => {
    const items = visibleGalleryItems();
    if (!items[index]) return;

    currentGalleryIndex = index;
    const card = items[index];
    const img = card.querySelector('.gallery-image');
    const title = card.querySelector('.gallery-title')?.innerText || 'Gallery Preview';
    const tag = card.querySelector('.gallery-tag')?.innerText || 'Alvoratech';

    if (lightboxImg) lightboxImg.src = img.src;
    if (lightboxImg) lightboxImg.alt = title;
    if (lightboxCaption) lightboxCaption.innerHTML = `<strong>${title}</strong> – ${tag}`;
    if (lightbox) lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const items = visibleGalleryItems();
      const idx = items.indexOf(card);
      if (idx !== -1) {
        openLightbox(idx);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      const items = visibleGalleryItems();
      currentGalleryIndex = (currentGalleryIndex + 1) % items.length;
      openLightbox(currentGalleryIndex);
    } else if (e.key === 'ArrowLeft') {
      const items = visibleGalleryItems();
      currentGalleryIndex = (currentGalleryIndex - 1 + items.length) % items.length;
      openLightbox(currentGalleryIndex);
    }
  });

  /* ==========================================================================
     7. TESTIMONIALS SLIDER
     ========================================================================== */
  const track = document.getElementById('testimonialsTrack');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsContainer = document.getElementById('sliderDots');

  let currentSlide = 0;
  let autoplayTimer = null;

  if (track && slides.length > 0) {
    // Generate pagination dots dynamically
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to testimonial ${idx + 1}`);
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
      });
    }

    const updateSlider = () => {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    };

    const goToSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;
      updateSlider();
      resetAutoplay();
    };

    const nextSlide = () => {
      goToSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      goToSlide(currentSlide - 1);
    };

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Autoplay functionality
    const startAutoplay = () => {
      autoplayTimer = setInterval(nextSlide, 5500);
    };

    const stopAutoplay = () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };

    const resetAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    startAutoplay();

    // Pause on hover
    const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', stopAutoplay);
      carouselWrapper.addEventListener('mouseleave', startAutoplay);
    }

    // Touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        nextSlide();
      }
      if (touchEndX > touchStartX + 50) {
        prevSlide();
      }
    };
  }

  /* ==========================================================================
     8. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (button && content) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 32 + 'px';
        }
      });
    }
  });

  /* ==========================================================================
     9. CONTACT FORM VALIDATION & WHATSAPP REDIRECTION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const serviceSelect = document.getElementById('serviceRequired');
    const messageInput = document.getElementById('message');

    // Email regex validation
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Helper to display/clear errors
    const showError = (input, message) => {
      input.classList.add('is-invalid');
      const errorEl = document.getElementById(`${input.id}Error`);
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
      }
    };

    const clearError = (input) => {
      input.classList.remove('is-invalid');
      const errorEl = document.getElementById(`${input.id}Error`);
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('visible');
      }
    };

    // Clear error on input typing
    [fullNameInput, emailInput, phoneInput, serviceSelect, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => clearError(field));
        field.addEventListener('change', () => clearError(field));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 2) {
        showError(fullNameInput, 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(fullNameInput);
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Phone
      if (!phoneInput.value.trim() || phoneInput.value.trim().replace(/\D/g, '').length < 7) {
        showError(phoneInput, 'Please enter a valid phone number with area code.');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      // Validate Service
      if (!serviceSelect.value) {
        showError(serviceSelect, 'Please select a cleaning service.');
        isValid = false;
      } else {
        clearError(serviceSelect);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        showError(messageInput, 'Please include a brief message or request details.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        // Construct prefilled WhatsApp Message
        const customerName = fullNameInput.value.trim();
        const customerEmail = emailInput.value.trim();
        const customerPhone = phoneInput.value.trim();
        const customerService = serviceSelect.options[serviceSelect.selectedIndex].text;
        const customerMessage = messageInput.value.trim();

        const prefilledText = 
          `Hi Alvoratech, I would like to request a cleaning quote:\n\n` +
          `• Full Name: ${customerName}\n` +
          `• Email: ${customerEmail}\n` +
          `• Phone: ${customerPhone}\n` +
          `• Service: ${customerService}\n` +
          `• Message: ${customerMessage}`;

        const encodedMessage = encodeURIComponent(prefilledText);
        const redirectUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

        // Show status feedback
        if (formStatus) {
          formStatus.textContent = 'Validation successful! Opening WhatsApp to send your request details directly to Alvoratech...';
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';
        }

        // Open WhatsApp in a new tab
        setTimeout(() => {
          window.open(redirectUrl, '_blank', 'noopener,noreferrer');
          contactForm.reset();
        }, 600);
      }
    });
  }
}; runInit();

    } catch (err) {
      console.warn('Interactive script error in Cleaning:', err);
    }
  }, []);

  return (
    <div className="cleaning-demo" id="top">
      <DemoTopBar demoName="Alvoratech Cleaning Services" />
      

  {/* ========================================================================
       TOP DEMO BANNER (A)
       ======================================================================== */}
  

  {/* ========================================================================
       HEADER & NAVIGATION
       ======================================================================== */}
      {/* Sticky Header */}
      <header className="site-header" role="banner">
        <div className="container-wide">
          <div className="nav-container">
            <a href="#home" onClick={(e) => navigateTo('home', e)} className="site-logo" aria-label="Alvoratech Cleaning">
              <div className="logo-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
              </div>
              <div>
                <span className="logo-text">ALVORATECH</span>
                <span className="logo-tagline">Cleaning Services</span>
              </div>
            </a>

            <nav className="nav-links" role="navigation" aria-label="Primary navigation">
              <a href="#home" onClick={(e) => navigateTo('home', e)} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#about" onClick={(e) => navigateTo('about', e)} className={`nav-link ${currentView === 'about' ? 'active' : ''}`}>About Us</a>
              <a href="#services" onClick={(e) => navigateTo('services', e)} className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Services</a>
              <a href="#why-choose" onClick={(e) => navigateTo('why-choose', e)} className={`nav-link ${currentView === 'why-choose' ? 'active' : ''}`}>Why Choose Us</a>
              <a href="#gallery" onClick={(e) => navigateTo('gallery', e)} className={`nav-link ${currentView === 'gallery' ? 'active' : ''}`}>Gallery</a>
              <a href="#faq" onClick={(e) => navigateTo('faq', e)} className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
              <a href="#contact" onClick={(e) => navigateTo('contact', e)} className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>

            <div className="nav-actions">
              <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">Get Free Quote</a>
              <button className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Cleaning Menu</span>
          <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
            &times;
          </button>
        </div>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} href="#home" className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('about', e); }} href="#about" className={`nav-link ${currentView === 'about' ? 'active' : ''}`}>About Us</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} href="#services" className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Cleaning Services</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-choose', e); }} href="#why-choose" className={`nav-link ${currentView === 'why-choose' ? 'active' : ''}`}>Why Choose Us</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('gallery', e); }} href="#gallery" className={`nav-link ${currentView === 'gallery' ? 'active' : ''}`}>Gallery</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} href="#faq" className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Get Free Quote</a>
        <a onClick={() => setMobileMenuOpen(false)} href="tel:+14127963968" className="btn btn-secondary" style={{ marginTop: '0.5rem' }}>Call: +1 (412) 796-3968</a>
        <a onClick={() => setMobileMenuOpen(false)} href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ marginTop: '0.5rem' }}>Chat on WhatsApp</a>
      </aside>
      <main id="main-content">
      {/* Section Breadcrumb & Banner */}
      {currentView !== 'home' && (
        <section className="view-page-banner" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '3.5rem 1.5rem',
          color: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <nav style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#94a3b8' }} aria-label="Breadcrumb">
              <a href="#home" onClick={(e) => navigateTo('home', e)} style={{ color: '#e2e8f0', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 0.5rem', opacity: 0.6 }}>/</span>
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>
                {currentView === 'about' && 'About Us'}
                {currentView === 'services' && 'Services'}
                {currentView === 'why-choose' && 'Why Choose Us'}
                {currentView === 'gallery' && 'Gallery'}
                {currentView === 'faq' && 'FAQ'}
                {currentView === 'contact' && 'Contact'}
              </span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 0.75rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
              {currentView === 'about' && 'About Alvoratech Cleaning Services'}
              {currentView === 'services' && 'Professional Cleaning Services'}
              {currentView === 'why-choose' && 'Why Homeowners Choose Alvoratech'}
              {currentView === 'gallery' && 'Recent Work & Transformation Gallery'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {currentView === 'contact' && 'Request Your Free Cleaning Quote'}
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#cbd5e1', margin: 0, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              {currentView === 'about' && 'Vetted, bonded, and insured cleaning professionals delivering immaculate standards.'}
              {currentView === 'services' && 'Deep cleaning, recurring housekeeping, move-in/out sanitization, and commercial facility care.'}
              {currentView === 'why-choose' && 'Hospital-grade HEPA filtration, eco-friendly detergents, and a 100% satisfaction guarantee.'}
              {currentView === 'gallery' && 'Real photographs from residential homes, apartment complexes, and commercial properties.'}
              {currentView === 'faq' && 'Clear answers regarding supplies, background checks, recurring plans, and cancelation policies.'}
              {currentView === 'contact' && 'Upfront pricing with zero hidden fees. Book online or speak with our friendly coordinator today.'}
            </p>
          </div>
        </section>
      )}

        {/* HOMEPAGE VIEW: Clean essentials */}
        {currentView === 'home' && (
          <>
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Fresh Spaces, Happy Places</span>
          </div>

          <h1 className="hero-title reveal stagger-1">
            A Cleaner Space.<br />
            <span className="text-gradient">A Better Way to Live.</span>
          </h1>

          <p className="hero-description reveal stagger-2">
            Experience professional cleaning services designed to bring freshness, comfort, and peace of mind to your home and workplace.
          </p>

          <div className="hero-actions reveal stagger-3">
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>Get a Free Quote</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline btn-lg">Explore Our Services</a>
          </div>

          <div className="hero-trust-indicator reveal stagger-4">
            <svg className="hero-trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Professional Cleaning | Residential & Commercial</span>
          </div>
        </div>

        {/* Right Media with Floating Cards */}
        <div className="hero-media-wrapper reveal">
          <div className="hero-image-container">
            <img src="/cleaning/assets/images/hero-cleaner.jpg" alt="Professional cleaner working in a bright modern home kitchen" className="hero-image" width="600" height="480" />
            
            {/* Sparkle Accent */}
            <div className="sparkle-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>

          {/* Floating Badge 1: Checklist */}
          <div className="floating-card-1">
            <div className="floating-icon-box icon-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="floating-card-text">
              <strong>Spotless Standards</strong>
              <span>100% Detailed Inspection</span>
            </div>
          </div>

          {/* Floating Badge 2: Quality Focus */}
          <div className="floating-card-2">
            <div className="floating-icon-box icon-blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="floating-card-text">
              <strong>Quality Focused</strong>
              <span>Residential & Commercial</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         TRUST INDICATORS SECTION
         ======================================================================== */}
    <section className="trust-section" aria-label="Core Values">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item reveal">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span className="trust-item-title">Professional Cleaning</span>
          </div>

          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span className="trust-item-title">Attention to Detail</span>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="trust-item-title">Flexible Scheduling</span>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="trust-item-title">Customer-Focused Service</span>
          </div>

        </div>
      </div>
    </section>

    {/* ========================================================================
         ABOUT SECTION
         ======================================================================== */}
    <section className="section-padding bg-light" id="about">
      <div className="container about-grid">
        
        {/* Left Media */}
        <div className="about-media reveal">
          <div className="about-image-wrapper">
            <img src="/cleaning/assets/images/about-cleaner.jpg" alt="Alvoratech professional cleaning technician at work" className="about-image" width="540" height="490" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="section-eyebrow reveal">About Alvoratech</span>
          
          <h2 className="reveal stagger-1">More Than Cleaning.<br />A Better Experience.</h2>
          
          <p className="reveal stagger-2">
            At Alvoratech, we believe that a clean environment creates a better experience for everyone. Our goal is to help homes and businesses enjoy fresh, comfortable, and welcoming spaces through professional cleaning solutions.
          </p>

          {/* 3 Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Quality-Focused Cleaning</h4>
                <p>We apply high standards and thorough methodologies to ensure every room is impeccably refreshed.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Reliable Service Approach</h4>
                <p>Consistent, courteous, and dependable service that respects your property, privacy, and schedule.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Attention to Every Detail</h4>
                <p>From baseboards and counter corners to high-touch fixtures, nothing is overlooked.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Talk to Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         CLEANING SERVICES SECTION
         ======================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Client Feedback</span>
          <h2 className="reveal stagger-1">What Our Customers Say</h2>
          <div className="testimonials-disclaimer-pill reveal stagger-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Demonstration Content — Sample customer feedback showcasing service standards.</span>
          </div>
        </div>

        <div className="testimonials-carousel-wrapper reveal">
          <div className="testimonials-slider">
            <div className="testimonials-track" id="testimonialsTrack">
              
              {/* SLIDE 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Alvoratech transformed our home into a pristine oasis. Their attention to detail in the kitchen and living areas was extraordinary. The space felt brand new and so refreshing!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Emily R.</span>
                    <span className="author-role">Homeowner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Our corporate office looks spotless every single week. Reliable scheduling, courteous staff, and dependable cleaning make Alvoratech our premier choice for facility maintenance."</p>
                  <div className="testimonial-author">
                    <span className="author-name">David M.</span>
                    <span className="author-role">Facility Manager (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"The move-out cleaning service exceeded expectations. Every appliance, bathroom corner, and floor was thoroughly scrubbed and inspected. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah T.</span>
                    <span className="author-role">Apartment Resident (Sample Review)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button type="button" className="slider-btn" id="testimonialPrev" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slider-dots" id="sliderDots"></div>
            <button type="button" className="slider-btn" id="testimonialNext" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         SPECIAL CALL-TO-ACTION SECTION
         ======================================================================== */}
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Get in Touch</span>
          <h2 className="reveal stagger-1">Let's Make Your Space Shine</h2>
          <p className="reveal stagger-2">Reach out to request a personalized cleaning quote or inquire about our specialized services.</p>
        </div>

        <div className="contact-grid">
          
          {/* Contact Info Card */}
          <div className="contact-info-card reveal">
            <h3>Contact Information</h3>
            <div className="contact-channels">
              
              {/* WhatsApp / Phone */}
              <div className="contact-channel-item">
                <div className="channel-icon-box whatsapp-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>WhatsApp / Phone</h4>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="channel-link">+1 (412) 796-3968</a>
                  <div style={{"marginTop":"4px"}}>
                    <a href="tel:+14127963968" style={{"fontSize":"0.85rem","color":"var(--color-blue)","fontWeight":"600"}}>(Call directly)</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Email</h4>
                  <a href="mailto:info@Alvoratechhq.com" className="channel-link">info@Alvoratechhq.com</a>
                </div>
              </div>

            </div>

            {/* Location */}
            <div className="contact-location-box">
              <div className="contact-location-label">Location</div>
              <div className="contact-location-value">*</div>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request a Cleaning Quote</h3>
            <p>Fill out the details below and we will prepare your prefilled request directly in WhatsApp.</p>

            <div className="form-status" id="formStatus" role="status"></div>

            <form id="contactForm" novalidate>
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name *</label>
                <input type="text" id="fullName" className="form-input" placeholder="e.g. Sarah Jenkins" required />
                <div className="form-error" id="fullNameError"></div>
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input type="email" id="email" className="form-input" placeholder="e.g. sarah@example.com" required />
                <div className="form-error" id="emailError"></div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input type="tel" id="phone" className="form-input" placeholder="e.g. +1 (412) 555-0199" required />
                <div className="form-error" id="phoneError"></div>
              </div>

              {/* Service Required */}
              <div className="form-group">
                <label htmlFor="serviceRequired" className="form-label">Service Required *</label>
                <select id="serviceRequired" className="form-select" required>
                  <option value="">Select a Cleaning Service...</option>
                  <option value="Residential Cleaning">Residential Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                  <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                  <option value="Kitchen & Bathroom Cleaning">Kitchen & Bathroom Cleaning</option>
                  <option value="General Maintenance Cleaning">General Maintenance Cleaning</option>
                </select>
                <div className="form-error" id="serviceRequiredError"></div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message / Space Details *</label>
                <textarea id="message" className="form-textarea" placeholder="Tell us about the size of your property, number of rooms, and preferred scheduling..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Send My Request</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, your request details will open directly in WhatsApp for instant conversation with our team.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
          </>
        )}

        {/* ABOUT VIEW */}
        {currentView === 'about' && (
          <>
    <section className="section-padding bg-light" id="about">
      <div className="container about-grid">
        
        {/* Left Media */}
        <div className="about-media reveal">
          <div className="about-image-wrapper">
            <img src="/cleaning/assets/images/about-cleaner.jpg" alt="Alvoratech professional cleaning technician at work" className="about-image" width="540" height="490" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="section-eyebrow reveal">About Alvoratech</span>
          
          <h2 className="reveal stagger-1">More Than Cleaning.<br />A Better Experience.</h2>
          
          <p className="reveal stagger-2">
            At Alvoratech, we believe that a clean environment creates a better experience for everyone. Our goal is to help homes and businesses enjoy fresh, comfortable, and welcoming spaces through professional cleaning solutions.
          </p>

          {/* 3 Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Quality-Focused Cleaning</h4>
                <p>We apply high standards and thorough methodologies to ensure every room is impeccably refreshed.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Reliable Service Approach</h4>
                <p>Consistent, courteous, and dependable service that respects your property, privacy, and schedule.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Attention to Every Detail</h4>
                <p>From baseboards and counter corners to high-touch fixtures, nothing is overlooked.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Talk to Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         CLEANING SERVICES SECTION
         ======================================================================== */}
    <section className="section-padding bg-white" id="why-choose">
      <div className="container why-grid">
        
        {/* Left Image */}
        <div className="why-image-wrapper reveal">
          <img src="/cleaning/assets/images/why-choose.jpg" alt="Cleaner using modern cleaning equipment" className="why-image" width="540" height="520" loading="lazy" />
        </div>

        {/* Right Content */}
        <div className="why-content">
          <span className="section-eyebrow reveal">The Alvoratech Advantage</span>
          <h2 className="reveal stagger-1">Why Choose Alvoratech?</h2>
          <p className="reveal stagger-2">We blend modern cleaning methods with a customer-first mindset, giving you reliable solutions designed around your lifestyle.</p>

          <div className="why-benefits-grid">
            
            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Professional Approach</h4>
              <p>Trained professionals dedicated to consistent, high-standard cleaning results.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4>Attention to Detail</h4>
              <p>Meticulous care applied to every corner, surface, and high-frequency touchpoint.</p>
            </div>

            <div className="why-benefit-card reveal stagger-3">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4>Flexible Cleaning Solutions</h4>
              <p>Customizable options suited for one-time deep cleaning or regular maintenance.</p>
            </div>

            <div className="why-benefit-card reveal stagger-4">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h4>Customer Satisfaction Focus</h4>
              <p>Every service is carried out with genuine care for your comfort and satisfaction.</p>
            </div>

            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4>Residential & Commercial</h4>
              <p>Specialized capabilities for both private residences and business workspaces.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4>Convenient Communication</h4>
              <p>Fast, direct communication via WhatsApp and direct contact options.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         HOW IT WORKS SECTION
         ======================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Client Feedback</span>
          <h2 className="reveal stagger-1">What Our Customers Say</h2>
          <div className="testimonials-disclaimer-pill reveal stagger-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Demonstration Content — Sample customer feedback showcasing service standards.</span>
          </div>
        </div>

        <div className="testimonials-carousel-wrapper reveal">
          <div className="testimonials-slider">
            <div className="testimonials-track" id="testimonialsTrack">
              
              {/* SLIDE 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Alvoratech transformed our home into a pristine oasis. Their attention to detail in the kitchen and living areas was extraordinary. The space felt brand new and so refreshing!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Emily R.</span>
                    <span className="author-role">Homeowner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Our corporate office looks spotless every single week. Reliable scheduling, courteous staff, and dependable cleaning make Alvoratech our premier choice for facility maintenance."</p>
                  <div className="testimonial-author">
                    <span className="author-name">David M.</span>
                    <span className="author-role">Facility Manager (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"The move-out cleaning service exceeded expectations. Every appliance, bathroom corner, and floor was thoroughly scrubbed and inspected. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah T.</span>
                    <span className="author-role">Apartment Resident (Sample Review)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button type="button" className="slider-btn" id="testimonialPrev" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slider-dots" id="sliderDots"></div>
            <button type="button" className="slider-btn" id="testimonialNext" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         SPECIAL CALL-TO-ACTION SECTION
         ======================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                Schedule Your Cleaning &rarr;
              </button>
            </div>
          </>
        )}

        {/* SERVICES VIEW */}
        {currentView === 'services' && (
          <>
    <section className="section-padding bg-white" id="services">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Our Solutions</span>
          <h2 className="reveal stagger-1">Cleaning Solutions for Every Space</h2>
          <p className="reveal stagger-2">From everyday home cleaning to detailed commercial cleaning, discover services designed around your space and needs.</p>
        </div>

        <div className="services-grid">
          
          {/* SERVICE 1 */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-residential.jpg" alt="Residential living room and home cleaning" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Residential</span>
            </div>
            <div className="service-content">
              <h3>Residential Cleaning</h3>
              <p>Professional cleaning solutions for houses, apartments, and everyday living spaces.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Residential%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 2 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-deep.jpg" alt="Intensive deep cleaning services" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Deep Clean</span>
            </div>
            <div className="service-content">
              <h3>Deep Cleaning</h3>
              <p>Detailed cleaning designed to address hard-to-reach areas and accumulated dirt.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Deep%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 3 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-commercial.jpg" alt="Commercial office and workspace cleaning" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Commercial</span>
            </div>
            <div className="service-content">
              <h3>Commercial Cleaning</h3>
              <p>Cleaning solutions for offices, business premises, and professional environments.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Commercial%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 4 */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-move.jpg" alt="Move-in and move-out property cleaning" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Transitions</span>
            </div>
            <div className="service-content">
              <h3>Move-In / Move-Out Cleaning</h3>
              <p>Detailed cleaning to prepare properties for new occupants or after moving out.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Move-In%20Move-Out%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 5 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-kitchen.jpg" alt="Kitchen and bathroom sanitization and deep cleaning" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Targeted</span>
            </div>
            <div className="service-content">
              <h3>Kitchen & Bathroom Cleaning</h3>
              <p>Focused cleaning for essential spaces that require extra attention.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Kitchen%20Bathroom%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 6 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/cleaning/assets/images/service-maintenance.jpg" alt="General routine maintenance cleaning" className="service-image" width="400" height="220" loading="lazy" />
              <span className="service-badge">Maintenance</span>
            </div>
            <div className="service-content">
              <h3>General Maintenance Cleaning</h3>
              <p>Regular cleaning support to help maintain a fresh and organized environment.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20General%20Maintenance%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

        </div>

      </div>
    </section>

    {/* ========================================================================
         MIDDLE DEMO BANNER (B)
         ======================================================================== */}
    <aside className="middle-demo-banner" aria-label="Demo interactive banner">
      <div className="middle-demo-card reveal">
        <div className="middle-demo-text">
          <span className="middle-demo-badge">THIS IS A WEBSITE DEMO</span>
          <h3>Experience how Alvoratech showcases professional cleaning services online.</h3>
          <p>This demonstration demonstrates custom-designed layouts, real-time WhatsApp inquiry integration, and optimized user workflows.</p>
        </div>
        <div>
          <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
            </svg>
            <span>Chat With Us</span>
          </a>
        </div>
      </div>
    </aside>

    {/* ========================================================================
         WHY CHOOSE ALVORATECH SECTION
         ======================================================================== */}
    <section className="section-padding bg-light" id="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Seamless Process</span>
          <h2 className="reveal stagger-1">How It Works</h2>
          <p className="reveal stagger-2">Enjoying a pristine, refreshed environment is straightforward and hassle-free.</p>
        </div>

        <div className="steps-timeline">
          
          <div className="step-item reveal">
            <div className="step-number-box">01</div>
            <h3>Contact Us</h3>
            <p>Tell us about your cleaning needs and space preferences.</p>
          </div>

          <div className="step-item reveal stagger-1">
            <div className="step-number-box">02</div>
            <h3>Discuss Requirements</h3>
            <p>We understand your property and preferred cleaning service.</p>
          </div>

          <div className="step-item reveal stagger-2">
            <div className="step-number-box">03</div>
            <h3>Get Your Quote</h3>
            <p>Receive information about your requested cleaning service.</p>
          </div>

          <div className="step-item reveal stagger-3">
            <div className="step-number-box">04</div>
            <h3>Enjoy a Cleaner Space</h3>
            <p>Get ready to experience a fresher, more comfortable environment.</p>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         GALLERY SECTION
         ======================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                Get Custom Quote &rarr;
              </button>
            </div>
          </>
        )}

        {/* WHY CHOOSE US VIEW */}
        {currentView === 'why-choose' && (
          <>
    <section className="section-padding bg-white" id="why-choose">
      <div className="container why-grid">
        
        {/* Left Image */}
        <div className="why-image-wrapper reveal">
          <img src="/cleaning/assets/images/why-choose.jpg" alt="Cleaner using modern cleaning equipment" className="why-image" width="540" height="520" loading="lazy" />
        </div>

        {/* Right Content */}
        <div className="why-content">
          <span className="section-eyebrow reveal">The Alvoratech Advantage</span>
          <h2 className="reveal stagger-1">Why Choose Alvoratech?</h2>
          <p className="reveal stagger-2">We blend modern cleaning methods with a customer-first mindset, giving you reliable solutions designed around your lifestyle.</p>

          <div className="why-benefits-grid">
            
            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Professional Approach</h4>
              <p>Trained professionals dedicated to consistent, high-standard cleaning results.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4>Attention to Detail</h4>
              <p>Meticulous care applied to every corner, surface, and high-frequency touchpoint.</p>
            </div>

            <div className="why-benefit-card reveal stagger-3">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4>Flexible Cleaning Solutions</h4>
              <p>Customizable options suited for one-time deep cleaning or regular maintenance.</p>
            </div>

            <div className="why-benefit-card reveal stagger-4">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h4>Customer Satisfaction Focus</h4>
              <p>Every service is carried out with genuine care for your comfort and satisfaction.</p>
            </div>

            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4>Residential & Commercial</h4>
              <p>Specialized capabilities for both private residences and business workspaces.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4>Convenient Communication</h4>
              <p>Fast, direct communication via WhatsApp and direct contact options.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         HOW IT WORKS SECTION
         ======================================================================== */}
    <section className="trust-section" aria-label="Core Values">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item reveal">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span className="trust-item-title">Professional Cleaning</span>
          </div>

          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span className="trust-item-title">Attention to Detail</span>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="trust-item-title">Flexible Scheduling</span>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="trust-item-title">Customer-Focused Service</span>
          </div>

        </div>
      </div>
    </section>

    {/* ========================================================================
         ABOUT SECTION
         ======================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Client Feedback</span>
          <h2 className="reveal stagger-1">What Our Customers Say</h2>
          <div className="testimonials-disclaimer-pill reveal stagger-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Demonstration Content — Sample customer feedback showcasing service standards.</span>
          </div>
        </div>

        <div className="testimonials-carousel-wrapper reveal">
          <div className="testimonials-slider">
            <div className="testimonials-track" id="testimonialsTrack">
              
              {/* SLIDE 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Alvoratech transformed our home into a pristine oasis. Their attention to detail in the kitchen and living areas was extraordinary. The space felt brand new and so refreshing!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Emily R.</span>
                    <span className="author-role">Homeowner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Our corporate office looks spotless every single week. Reliable scheduling, courteous staff, and dependable cleaning make Alvoratech our premier choice for facility maintenance."</p>
                  <div className="testimonial-author">
                    <span className="author-name">David M.</span>
                    <span className="author-role">Facility Manager (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* SLIDE 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <svg className="testimonial-quote-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"The move-out cleaning service exceeded expectations. Every appliance, bathroom corner, and floor was thoroughly scrubbed and inspected. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah T.</span>
                    <span className="author-role">Apartment Resident (Sample Review)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Controls */}
          <div className="slider-controls">
            <button type="button" className="slider-btn" id="testimonialPrev" aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="slider-dots" id="sliderDots"></div>
            <button type="button" className="slider-btn" id="testimonialNext" aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         SPECIAL CALL-TO-ACTION SECTION
         ======================================================================== */}
          </>
        )}

        {/* GALLERY VIEW */}
        {currentView === 'gallery' && (
          <>
    <section className="section-padding bg-white" id="gallery">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Visual Showcase</span>
          <h2 className="reveal stagger-1">See the Difference a Clean Space Makes</h2>
          <p className="reveal stagger-2">Explore photos of pristine transformations across residential, commercial, and detailed spaces.</p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters reveal">
          <button type="button" className="filter-btn active" data-filter="all">All Spaces</button>
          <button type="button" className="filter-btn" data-filter="residential">Residential</button>
          <button type="button" className="filter-btn" data-filter="kitchen-bath">Kitchen & Bath</button>
          <button type="button" className="filter-btn" data-filter="commercial">Commercial</button>
        </div>

        {/* Image Grid */}
        <div className="gallery-grid" id="galleryGrid">
          
          {/* Image 1 */}
          <div className="gallery-card reveal" data-category="kitchen-bath">
            <img src="/cleaning/assets/images/gallery-kitchen.jpg" alt="Modern kitchen with gleaming countertops" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Kitchen & Bath</span>
              <h3 className="gallery-title">Modern Kitchen Cleaning</h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="gallery-card reveal stagger-1" data-category="residential">
            <img src="/cleaning/assets/images/gallery-living.jpg" alt="Spotless modern living room interior" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Living Room Cleaning</h3>
            </div>
          </div>

          {/* Image 3 */}
          <div className="gallery-card reveal stagger-2" data-category="kitchen-bath">
            <img src="/cleaning/assets/images/gallery-bathroom.jpg" alt="Sanitized luxury bathroom interior" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Kitchen & Bath</span>
              <h3 className="gallery-title">Bathroom Cleaning</h3>
            </div>
          </div>

          {/* Image 4 */}
          <div className="gallery-card reveal" data-category="commercial">
            <img src="/cleaning/assets/images/gallery-office.jpg" alt="Clean and organized office workspace" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h3 className="gallery-title">Office Cleaning</h3>
            </div>
          </div>

          {/* Image 5 */}
          <div className="gallery-card reveal stagger-1" data-category="residential">
            <img src="/cleaning/assets/images/gallery-cleaner.jpg" alt="Professional cleaner wiping surfaces diligently" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Professional Cleaner at Work</h3>
            </div>
          </div>

          {/* Image 6 */}
          <div className="gallery-card reveal stagger-2" data-category="residential">
            <img src="/cleaning/assets/images/gallery-interior.jpg" alt="Immaculate modern architectural living space" className="gallery-image" width="400" height="290" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Beautiful Spotless Interior</h3>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* Lightbox Modal */}
    <div className="lightbox-modal" id="galleryLightbox" role="dialog" aria-modal="true" aria-label="Image Preview">
      <div className="lightbox-container">
        <button type="button" className="lightbox-close" id="lightboxClose" aria-label="Close image preview">×</button>
        <img src="" alt="" className="lightbox-img" id="lightboxImg" />
        <div className="lightbox-caption" id="lightboxCaption"></div>
      </div>
    </div>

    {/* ========================================================================
         CUSTOMER TESTIMONIALS SECTION
         ======================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                Book Your Transformation &rarr;
              </button>
            </div>
          </>
        )}

        {/* FAQ VIEW */}
        {currentView === 'faq' && (
          <>
    <section className="section-padding bg-white" id="faq">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Got Questions?</span>
          <h2 className="reveal stagger-1">Frequently Asked Questions</h2>
          <p className="reveal stagger-2">Find clear, helpful answers regarding our professional cleaning services.</p>
        </div>

        <div className="faq-container">
          
          {/* FAQ 1 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What cleaning services does Alvoratech offer?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Alvoratech provides a comprehensive range of professional cleaning solutions, including residential cleaning, deep cleaning, commercial office cleaning, move-in/move-out services, kitchen and bathroom sanitization, and ongoing maintenance cleaning.</p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Do you provide residential and commercial cleaning?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes, we provide specialized cleaning solutions tailored for both residential homes (houses, condominiums, apartments) and commercial properties (offices, retail spaces, professional workspaces).</p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How can I request a cleaning quote?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>You can quickly request a quote by sending us a message directly via WhatsApp at +1 (412) 796-3968, submitting the contact form on this website, or emailing us at info@Alvoratechhq.com.</p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Can I request a specific cleaning service?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Absolutely. We offer fully customizable cleaning plans. Whether you need a one-time intensive deep clean, focused kitchen and bathroom care, or regular maintenance, we tailor our service to your exact needs.</p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How can I contact Alvoratech?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>You can reach out directly via WhatsApp or phone at +1 (412) 796-3968, email us at info@Alvoratechhq.com, or fill out the contact form below.</p>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How do I schedule a cleaning service?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Scheduling is simple: contact us with your property details and preferred schedule. We will coordinate a convenient date and time that fits seamlessly into your routine.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         CONTACT SECTION
         ======================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <a href="tel:+14127963968" className="btn btn-primary">Call +1 (412) 796-3968</a>
            </div>
          </>
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && (
          <>
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-eyebrow reveal">Get in Touch</span>
          <h2 className="reveal stagger-1">Let's Make Your Space Shine</h2>
          <p className="reveal stagger-2">Reach out to request a personalized cleaning quote or inquire about our specialized services.</p>
        </div>

        <div className="contact-grid">
          
          {/* Contact Info Card */}
          <div className="contact-info-card reveal">
            <h3>Contact Information</h3>
            <div className="contact-channels">
              
              {/* WhatsApp / Phone */}
              <div className="contact-channel-item">
                <div className="channel-icon-box whatsapp-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>WhatsApp / Phone</h4>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="channel-link">+1 (412) 796-3968</a>
                  <div style={{"marginTop":"4px"}}>
                    <a href="tel:+14127963968" style={{"fontSize":"0.85rem","color":"var(--color-blue)","fontWeight":"600"}}>(Call directly)</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Email</h4>
                  <a href="mailto:info@Alvoratechhq.com" className="channel-link">info@Alvoratechhq.com</a>
                </div>
              </div>

            </div>

            {/* Location */}
            <div className="contact-location-box">
              <div className="contact-location-label">Location</div>
              <div className="contact-location-value">*</div>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request a Cleaning Quote</h3>
            <p>Fill out the details below and we will prepare your prefilled request directly in WhatsApp.</p>

            <div className="form-status" id="formStatus" role="status"></div>

            <form id="contactForm" novalidate>
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name *</label>
                <input type="text" id="fullName" className="form-input" placeholder="e.g. Sarah Jenkins" required />
                <div className="form-error" id="fullNameError"></div>
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input type="email" id="email" className="form-input" placeholder="e.g. sarah@example.com" required />
                <div className="form-error" id="emailError"></div>
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input type="tel" id="phone" className="form-input" placeholder="e.g. +1 (412) 555-0199" required />
                <div className="form-error" id="phoneError"></div>
              </div>

              {/* Service Required */}
              <div className="form-group">
                <label htmlFor="serviceRequired" className="form-label">Service Required *</label>
                <select id="serviceRequired" className="form-select" required>
                  <option value="">Select a Cleaning Service...</option>
                  <option value="Residential Cleaning">Residential Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                  <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                  <option value="Kitchen & Bathroom Cleaning">Kitchen & Bathroom Cleaning</option>
                  <option value="General Maintenance Cleaning">General Maintenance Cleaning</option>
                </select>
                <div className="form-error" id="serviceRequiredError"></div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message / Space Details *</label>
                <textarea id="message" className="form-textarea" placeholder="Tell us about the size of your property, number of rooms, and preferred scheduling..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Send My Request</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, your request details will open directly in WhatsApp for instant conversation with our team.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
          </>
        )}
      </main>
  {/* ========================================================================
       FOOTER
       ======================================================================== */}
  <footer className="site-footer" role="contentinfo">
    <div className="container footer-grid">
      
      {/* Col 1: Brand */}
      <div className="footer-col-brand">
        <a href="#home" className="site-logo">
          <div className="logo-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>
        <p>Professional cleaning solutions for fresher, cleaner, and more welcoming spaces.</p>
      </div>

      {/* Col 2: Quick Links */}
      <div className="footer-col">
        <h4 className="footer-heading">Quick Links</h4>
        <div className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" onClick={(e) => navigateTo('about', e)} className="footer-link">About Us</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Services</a>
          <a href="#gallery" onClick={(e) => navigateTo('gallery', e)} className="footer-link">Gallery</a>
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="footer-link">Contact</a>
        </div>
      </div>

      {/* Col 3: Services */}
      <div className="footer-col">
        <h4 className="footer-heading">Our Services</h4>
        <div className="footer-links">
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Residential Cleaning</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Deep Cleaning</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Cleaning</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Move-In / Move-Out Cleaning</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">General Cleaning</a>
        </div>
      </div>

      {/* Col 4: Contact */}
      <div className="footer-col">
        <h4 className="footer-heading">Contact</h4>
        <div className="footer-links">
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{"color":"var(--color-whatsapp)"}}>
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
            </svg>
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="footer-link">+1 (412) 796-3968</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@Alvoratechhq.com" className="footer-link">info@Alvoratechhq.com</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>*</span>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="container footer-bottom">
      <div>
        © 2026 ALVORATECH. All rights reserved.
      </div>
      <div>
        Demo Website: This site is for demonstration purposes.
      </div>
    </div>
  </footer>

  {/* ========================================================================
       FIXED WHATSAPP FLOATING BOTTOM BANNER
       ======================================================================== */}
  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="fixed-whatsapp-banner" id="fixedWhatsappBanner" aria-label="Contact Alvoratech on WhatsApp">
    <svg className="fixed-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
    </svg>
    <span className="fixed-whatsapp-text">+1 (412) 796-3968</span>
  </a>

  {/* Main JavaScript File */}
  

    </div>
  );
}
