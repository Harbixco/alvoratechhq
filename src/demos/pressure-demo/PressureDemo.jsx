import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './pressure-demo.css';

export default function PressureDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (["services","portfolio","gallery","why-us","faq","contact"].includes(hash)) {
        return hash;
      }
      if (hash === 'gallery') return 'portfolio';
      if (hash === 'our-work') return 'portfolio';
      if (hash === 'why-choose') return 'why-us';
      if (hash === 'about') return 'why-us';
      if (hash === 'estimate' || hash === 'quote' || hash === 'book') return 'contact';
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
      if (["services","portfolio","gallery","why-us","faq","contact"].includes(hash)) {
        setCurrentView(hash);
      } else if (hash === 'gallery' || hash === 'our-work') {
        setCurrentView('portfolio');
      } else if (hash === 'why-choose' || hash === 'about') {
        setCurrentView('why-us');
      } else if (hash === 'estimate' || hash === 'quote' || hash === 'book') {
        setCurrentView('contact');
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
 * ALVORATECH – PREMIUM PRESSURE WASHING WEBSITE
 * Interactive JavaScript (Vanilla ES6+)
 * File: js/script.js
 */

const runInit = () => {
  'use strict';

  // Constants & WhatsApp Configuration
  const WHATSAPP_BASE_URL = 'https://wa.me/message/RVTZQMFL7I6OH1';

  /* ==========================================================================
     1. STICKY HEADER & SCROLL SHADOW
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
     2. MOBILE NAVIGATION DRAWER
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
     3. SMOOTH ANCHOR SCROLLING WITH OFFSET
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
     4. INTERSECTION OBSERVER FOR SCROLL REVEALS
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.add('is-visible');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     5. INTERACTIVE BEFORE-AND-AFTER SLIDER (KEY FEATURE)
     ========================================================================== */
  const baContainer = document.getElementById('baSliderContainer');
  const baImageBefore = document.getElementById('baImageBefore');
  const baHandle = document.getElementById('baHandle');
  const baBeforeImg = document.getElementById('baBeforeImg');
  const baAfterImg = document.getElementById('baAfterImg');
  const baCaption = document.getElementById('baCaption');
  const baTabs = document.querySelectorAll('.ba-tab-btn');

  // Transformation Data Set
  const transformations = {
    driveway: {
      before: '/pressure-demo/assets/images/ba-driveway-before.jpg',
      after: '/pressure-demo/assets/images/ba-driveway-after.jpg',
      title: 'Driveway Pressure Washing Transformation',
      desc: 'Deep embedded grime, oil, and atmospheric staining washed away.'
    },
    concrete: {
      before: '/pressure-demo/assets/images/ba-concrete-before.jpg',
      after: '/pressure-demo/assets/images/ba-concrete-after.jpg',
      title: 'Concrete Sidewalk & Entryway Cleaning',
      desc: 'Restoring crisp, bright, clean walkways and curbs.'
    },
    patio: {
      before: '/pressure-demo/assets/images/ba-patio-before.jpg',
      after: '/pressure-demo/assets/images/ba-patio-after.jpg',
      title: 'Stone Patio & Walkway Wash',
      desc: 'Moss, algae, and outdoor buildup completely stripped.'
    },
    house: {
      before: '/pressure-demo/assets/images/ba-house-before.jpg',
      after: '/pressure-demo/assets/images/ba-house-after.jpg',
      title: 'Residential House Exterior Wash',
      desc: 'Revitalizing exterior siding, gutters, and trim with proper exterior care.'
    },
    deck: {
      before: '/pressure-demo/assets/images/ba-deck-before.jpg',
      after: '/pressure-demo/assets/images/ba-deck-after.jpg',
      title: 'Outdoor Wooden Deck Restoration',
      desc: 'Weathered outdoor wood cleaned to reveal natural grain and beauty.'
    }
  };

  // Slider Dragging Logic
  if (baContainer && baImageBefore && baHandle) {
    let isDragging = false;

    const setSliderPosition = (xPos) => {
      const rect = baContainer.getBoundingClientRect();
      let pos = ((xPos - rect.left) / rect.width) * 100;
      if (pos < 0) pos = 0;
      if (pos > 100) pos = 100;

      baImageBefore.style.width = `${pos}%`;
      baHandle.style.left = `${pos}%`;

      // Keep before image scale identical to container
      if (baBeforeImg) {
        baBeforeImg.style.width = `${rect.width}px`;
      }
    };

    // Update inner image width on window resize
    const handleResize = () => {
      const rect = baContainer.getBoundingClientRect();
      if (baBeforeImg) {
        baBeforeImg.style.width = `${rect.width}px`;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Mouse Events
    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Events for Mobile
    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Tab Switching Logic
    baTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        baTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.getAttribute('data-target');
        const item = transformations[key];

        if (item) {
          baContainer.style.opacity = '0.7';
          setTimeout(() => {
            if (baBeforeImg) baBeforeImg.src = item.before;
            if (baAfterImg) baAfterImg.src = item.after;
            if (baCaption) baCaption.innerHTML = `<strong>${item.title}</strong> — ${item.desc}`;
            
            // Reset to 50%
            baImageBefore.style.width = '50%';
            baHandle.style.left = '50%';
            baContainer.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  /* ==========================================================================
     6. OUR WORK GALLERY FILTERING & LIGHTBOX
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

    const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', stopAutoplay);
      carouselWrapper.addEventListener('mouseleave', startAutoplay);
    }

    // Touch Swipe
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    }, { passive: true });
  }

  /* ==========================================================================
     8. FAQ ACCORDION (7 ITEMS)
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
     9. CONTACT FORM VALIDATION & WHATSAPP GENERATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const serviceSelect = document.getElementById('serviceRequired');
    const propertyTypeSelect = document.getElementById('propertyType');
    const messageInput = document.getElementById('message');

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

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

    [fullNameInput, emailInput, phoneInput, serviceSelect, propertyTypeSelect, messageInput].forEach(field => {
      if (field) {
        field.addEventListener('input', () => clearError(field));
        field.addEventListener('change', () => clearError(field));
      }
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      if (!fullNameInput.value.trim() || fullNameInput.value.trim().length < 2) {
        showError(fullNameInput, 'Please enter your full name (at least 2 characters).');
        isValid = false;
      } else {
        clearError(fullNameInput);
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput);
      }

      if (!phoneInput.value.trim() || phoneInput.value.trim().replace(/\D/g, '').length < 7) {
        showError(phoneInput, 'Please enter a valid phone number with area code.');
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      if (!serviceSelect.value) {
        showError(serviceSelect, 'Please select an exterior cleaning service.');
        isValid = false;
      } else {
        clearError(serviceSelect);
      }

      if (!propertyTypeSelect.value) {
        showError(propertyTypeSelect, 'Please select your property type.');
        isValid = false;
      } else {
        clearError(propertyTypeSelect);
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        showError(messageInput, 'Please include details about your exterior surfaces.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const customerName = fullNameInput.value.trim();
        const customerEmail = emailInput.value.trim();
        const customerPhone = phoneInput.value.trim();
        const customerService = serviceSelect.options[serviceSelect.selectedIndex].text;
        const customerProperty = propertyTypeSelect.options[propertyTypeSelect.selectedIndex].text;
        const customerMessage = messageInput.value.trim();

        const prefilledText = 
          `Hi Alvoratech, I would like to request a pressure washing quote:\n\n` +
          `• Full Name: ${customerName}\n` +
          `• Email: ${customerEmail}\n` +
          `• Phone: ${customerPhone}\n` +
          `• Service: ${customerService}\n` +
          `• Property Type: ${customerProperty}\n` +
          `• Surface Details: ${customerMessage}`;

        const encodedMessage = encodeURIComponent(prefilledText);
        const redirectUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

        if (formStatus) {
          formStatus.textContent = 'Validation successful! Opening WhatsApp to send your request details directly to Alvoratech...';
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';
        }

        setTimeout(() => {
          window.open(redirectUrl, '_blank', 'noopener,noreferrer');
          contactForm.reset();
        }, 600);
      }
    });
  }
}; runInit();

    } catch (err) {
      console.warn('Interactive script error in PressureDemo:', err);
    }
  }, []);

  return (
    <div className="pressure-demo-demo" id="top">
      <DemoTopBar demoName="Alvoratech Pressure Washing & Exterior Cleaning" />
      

  {/* ========================================================================
       TOP DEMO BANNER
       ======================================================================== */}
  

  {/* ========================================================================
       HEADER & NAVIGATION
       ======================================================================== */}
  <header className="site-header" role="banner">
    <div className="container-wide nav-container">
      
      {/* Brand Logo */}
      <a href="#home" onClick={(e) => navigateTo('home', e)} className="site-logo" aria-label="Alvoratech Home">
        <div className="logo-icon-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
        </div>
        <span className="logo-text">ALVORATECH</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="nav-links" role="navigation" aria-label="Primary navigation">
        <a href="#home" onClick={(e) => navigateTo('home', e)} className="nav-link active">Home</a>
        <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">About</a>
        <a href="#services" onClick={(e) => navigateTo('services', e)} className="nav-link">Services</a>
        <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="nav-link">Our Work</a>
        <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">Why Choose Us</a>
        <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="nav-link">Contact</a>
      </nav>

      {/* Desktop Header CTA */}
      <div className="nav-actions">
        <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">
          <span>Get a Free Quote</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-expanded={mobileMenuOpen}
          id="mobileToggle"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </div>
  </header>

  {/* Mobile Navigation Overlay & Drawer */}
  <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} id="mobileNavOverlay"></div>
  <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`} id="mobileDrawer" aria-label="Mobile Navigation">
    <div className="mobile-drawer-header">
      <span className="mobile-drawer-title">Pressure Washing Menu</span>
      <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
        &times;
      </button>
    </div>
    <nav>
      <a href="#home" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="nav-link">Home</a>
      <a href="#why-us" onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} className="nav-link">About Us</a>
      <a href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} className="nav-link">Services</a>
      <a href="#portfolio" onClick={(e) => { setMobileMenuOpen(false); navigateTo('portfolio', e); }} className="nav-link">Our Work</a>
      <a href="#faq" onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} className="nav-link">FAQ</a>
      <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="nav-link">Contact</a>
    </nav>
    <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="btn btn-primary nav-cta">
      Get Free Quote
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
              {currentView === 'services' && 'Our Services & Capabilities'}
              {currentView === 'about' && 'About Us'}
              {(currentView === 'why-us' || currentView === 'why-choose') && 'Why Property Owners Choose Our Exterior Cleaning'}
              {(currentView === 'portfolio' || currentView === 'gallery') && 'Project Portfolio & Transformations'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {currentView === 'contact' && 'Contact & Request Free Quote'}
            </h1>
            </div>
        </section>
      )}

        {/* HOMEPAGE VIEW: Clean essentials */}
        {currentView === 'home' && (
          <>
    <section className="hero-section" id="home">
      {/* Decorative Floating Water Droplets */}
      <div className="droplet-particle droplet-1" aria-hidden="true"></div>
      <div className="droplet-particle droplet-2" aria-hidden="true"></div>
      <div className="droplet-particle droplet-3" aria-hidden="true"></div>
      <div className="droplet-particle droplet-4" aria-hidden="true"></div>

      <div className="container hero-grid">
        
        {/* Left Content */}
        <div className="hero-content">
          

          <h1 className="hero-title reveal stagger-1">
            Restore the Beauty of <span className="text-gradient">Your Property.</span>
          </h1>

          <p className="hero-description reveal stagger-2">
            Professional pressure washing solutions that remove built-up dirt, grime, stains, and exterior buildup to help your property look its best.
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

          {/* Hero Trust Indicators */}
          <div className="hero-trust-indicators reveal stagger-4">
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Residential Cleaning</span>
            </div>
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="9" y2="22.01"></line>
                <line x1="15" y1="22" x2="15" y2="22.01"></line>
                <line x1="12" y1="18" x2="12" y2="18.01"></line>
              </svg>
              <span>Commercial Cleaning</span>
            </div>
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Exterior Surface Cleaning</span>
            </div>
          </div>
        </div>

        {/* Right Media with Floating Cards */}
        <div className="hero-media-wrapper reveal">
          <div className="hero-image-container">
            <img src="/pressure-demo/assets/images/pw-hero.jpg" alt="Professional technician using a commercial pressure washer to wash a dirty concrete driveway" className="hero-image" width="600" height="490" />
          </div>

          {/* Floating Badge */}
          <div className="floating-pressure-card">
            <div className="floating-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div className="floating-text">
              <strong>Commercial Power Wash</strong>
              <span>Deep Surface Grime Removal</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         TRUST INDICATORS SECTION
         ======================================================================== */}
    <section className="trust-section" aria-label="Core Capabilities">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item reveal">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <span className="trust-item-title">Professional Equipment</span>
          </div>

          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span className="trust-item-title">Attention to Detail</span>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="trust-item-title">Flexible Service Options</span>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="trust-item-title">Customer-Focused Approach</span>
          </div>

        </div>
      </div>
    </section>

    {/* ========================================================================
         ABOUT US SECTION
         ======================================================================== */}
    <section className="section-padding bg-light" id="about">
      <div className="container about-grid">
        
        {/* Left Media */}
        <div className="about-media reveal">
          <div className="about-image-wrapper">
            <img src="/pressure-demo/assets/images/pw-about.jpg" alt="Alvoratech pressure washing technician working on a residential property" className="about-image" width="540" height="490" loading="lazy" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="reveal stagger-1">Bringing Back the Beauty of Every Surface.</h2>
          
          <p className="reveal stagger-2">
            Alvoratech provides pressure washing and exterior cleaning solutions designed to help homeowners and businesses maintain cleaner, more attractive properties. From driveways and sidewalks to building exteriors and outdoor spaces, our focus is on delivering a professional cleaning experience with attention to detail.
          </p>

          {/* 3 Supporting Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Detail-Oriented Service</h4>
                <p>We assess individual surface materials and conditions before applying the optimal cleaning technique.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Modern Cleaning Equipment</h4>
                <p>Equipped with commercial-grade rotary surface cleaners, pressure wands, and soft-wash pumps.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Solutions for Different Surfaces</h4>
                <p>Specialized treatments tailored for concrete, stone, wood, vinyl siding, stucco, and roofing tiles.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Contact Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         PRESSURE WASHING SERVICES (8 SERVICES)
         ======================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">What Customers Appreciate About Our Service</h2>
          
        </div>

        <div className="testimonials-carousel-wrapper reveal">
          <div className="testimonials-slider">
            <div className="testimonials-track" id="testimonialsTrack">
              
              {/* Review 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"Our driveway had years of accumulated moss, mildew, and engine oil stains. Alvoratech washed it completely clean. The concrete looks practically brand new!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">Mark S.</span>
                    <span className="author-role">Residential Homeowner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"The soft washing technique they used on our house siding made an unbelievable difference without risking any damage to our stucco. Punctual and professional from start to finish."</p>
                  <div className="testimonial-author">
                    <span className="author-name">Elena K.</span>
                    <span className="author-role">Property Owner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"We manage several commercial retail storefronts. Alvoratech handled our concrete parking areas and sidewalks outside of business hours with immaculate results."</p>
                  <div className="testimonial-author">
                    <span className="author-name">Robert D.</span>
                    <span className="author-role">Commercial Facility Manager (Sample Review)</span>
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
    <section className="special-cta-section" aria-label="Call to Action">
      <div className="special-cta-content reveal">
        <h2>Your Property Deserves a Fresh Start.</h2>
        <p>Let Alvoratech help restore the appearance of your outdoor spaces with professional pressure washing solutions.</p>
        <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
          </svg>
          <span>Get a Free Quote</span>
        </a>
      </div>
    </section>

    {/* ========================================================================
         FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION - 7 ITEMS)
         ======================================================================== */}
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Let's Give Your Property a Fresh Look.</h2>
          <p className="reveal stagger-2">Tell us what needs cleaning and our team will help you discuss the next steps.</p>
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
                    <a href="tel:+14127963968" style={{"fontSize":"0.875rem","color":"var(--color-blue-electric)","fontWeight":"600"}}>(Call directly)</a>
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
              <div className="contact-location-value">Pittsburgh, PA & Surrounding Areas</div>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request a Free Quote</h3>
            <p>Share your surface cleaning requirements and we will prepare your prefilled request directly in WhatsApp.</p>

            <div className="form-status" id="formStatus" role="status"></div>

            <form id="contactForm" novalidate>
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name *</label>
                <input type="text" id="fullName" className="form-input" placeholder="e.g. Jason Miller" required />
                <div className="form-error" id="fullNameError"></div>
              </div>

              {/* Email & Phone in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" className="form-input" placeholder="e.g. jason@example.com" required />
                  <div className="form-error" id="emailError"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input type="tel" id="phone" className="form-input" placeholder="e.g. +1 (412) 555-0199" required />
                  <div className="form-error" id="phoneError"></div>
                </div>
              </div>

              {/* Service & Property Type in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceRequired" className="form-label">Service Required *</label>
                  <select id="serviceRequired" className="form-select" required>
                    <option value="">Select a Service...</option>
                    <option value="Driveway Pressure Washing">Driveway Pressure Washing</option>
                    <option value="House Washing">House Washing</option>
                    <option value="Roof Soft Washing">Roof Soft Washing</option>
                    <option value="Deck and Fence Cleaning">Deck and Fence Cleaning</option>
                    <option value="Patio and Sidewalk Cleaning">Patio and Sidewalk Cleaning</option>
                    <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                    <option value="Gutter and Exterior Cleaning">Gutter and Exterior Cleaning</option>
                    <option value="Parking Lot and Concrete Cleaning">Parking Lot and Concrete Cleaning</option>
                  </select>
                  <div className="form-error" id="serviceRequiredError"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type *</label>
                  <select id="propertyType" className="form-select" required>
                    <option value="">Select Property Type...</option>
                    <option value="Residential Property">Residential Property</option>
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Multi-Family / HOA">Multi-Family / HOA</option>
                    <option value="Retail / Storefront">Retail / Storefront</option>
                  </select>
                  <div className="form-error" id="propertyTypeError"></div>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Surface Details & Cleaning Needs *</label>
                <textarea id="message" className="form-textarea" placeholder="Describe the size, surface material (concrete, brick, wood, siding), and condition of the area..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Request My Quote</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, WhatsApp will open with your prefilled quote request so you can chat directly with our team.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
          </>
        )}

        {/* SERVICES VIEW */}
        {currentView === 'services' && (
          <>
    <section className="section-padding bg-white" id="services">
      <div className="container-wide">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Professional Pressure Washing Services</h2>
          <p className="reveal stagger-2">Give your property's exterior a fresh appearance with cleaning solutions designed for different surfaces and environments.</p>
        </div>

        <div className="services-grid-8">
          
          {/* SERVICE 1: DRIVEWAY PRESSURE WASHING */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-driveway.jpg" alt="Driveway pressure washing with concrete surface cleaner" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Driveways</span>
            </div>
            <div className="service-content">
              <h3>Driveway Pressure Washing</h3>
              <p>Remove dirt, grime, and accumulated stains from concrete driveways and other suitable hard surfaces.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Driveway%20Pressure%20Washing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 2: HOUSE WASHING */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-house.jpg" alt="Professional cleaner washing a residential house exterior" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">House Siding</span>
            </div>
            <div className="service-content">
              <h3>House Washing</h3>
              <p>Help restore the appearance of exterior walls and siding using appropriate exterior cleaning techniques.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20House%20Washing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 3: ROOF SOFT WASHING */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-roof.jpg" alt="Specialized low-pressure roof soft washing" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Roof Care</span>
            </div>
            <div className="service-content">
              <h3>Roof Soft Washing</h3>
              <p>Specialized low-pressure roof cleaning designed for suitable roofing materials and surface conditions.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Roof%20Soft%20Washing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 4: DECK AND FENCE CLEANING */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-deck.jpg" alt="Outdoor wooden deck and fence restoration cleaning" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Decks & Fences</span>
            </div>
            <div className="service-content">
              <h3>Deck and Fence Cleaning</h3>
              <p>Clean suitable outdoor wooden and composite surfaces to improve their overall appearance.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Deck%20and%20Fence%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 5: PATIO AND SIDEWALK CLEANING */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-patio.jpg" alt="Patio and concrete sidewalk pressure washing" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Patios & Walks</span>
            </div>
            <div className="service-content">
              <h3>Patio and Sidewalk Cleaning</h3>
              <p>Remove outdoor dirt and buildup from patios, walkways, and other suitable hard surfaces.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Patio%20and%20Sidewalk%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 6: COMMERCIAL PRESSURE WASHING */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-commercial.jpg" alt="Commercial storefront and business building pressure washing" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Commercial</span>
            </div>
            <div className="service-content">
              <h3>Commercial Pressure Washing</h3>
              <p>Exterior cleaning solutions for commercial properties, storefronts, and business premises.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Commercial%20Pressure%20Washing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 7: GUTTER AND EXTERIOR CLEANING */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-gutter.jpg" alt="Exterior gutter brightening and cleaning" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Gutters</span>
            </div>
            <div className="service-content">
              <h3>Gutter and Exterior Cleaning</h3>
              <p>Help maintain cleaner exterior drainage areas and surrounding surfaces.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Gutter%20and%20Exterior%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 8: PARKING LOT AND CONCRETE CLEANING */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/pressure-demo/assets/images/service-parking.jpg" alt="Commercial parking lot and concrete power washing" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Parking Lots</span>
            </div>
            <div className="service-content">
              <h3>Parking Lot & Concrete</h3>
              <p>Clean suitable commercial concrete areas, parking spaces, and walkways.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Parking%20Lot%20and%20Concrete%20Cleaning" target="_blank" rel="noopener noreferrer" className="service-cta-link">
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
         MIDDLE DEMO BANNER
         ======================================================================== */}
    

    {/* ========================================================================
         BEFORE-AND-AFTER TRANSFORMATION GALLERY (ESSENTIAL SECTION)
         ======================================================================== */}
    <section className="section-padding bg-light" id="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">How It Works</h2>
          <p className="reveal stagger-2">Getting your property pressure-washed is clean, prompt, and hassle-free.</p>
        </div>

        <div className="steps-timeline">
          
          <div className="step-item reveal">
            <div className="step-number-box">01</div>
            <h3>Get In Touch</h3>
            <p>Contact Alvoratech and tell us about your exterior cleaning needs.</p>
          </div>

          <div className="step-item reveal stagger-1">
            <div className="step-number-box">02</div>
            <h3>Discuss Your Property</h3>
            <p>Share information about the surface and cleaning requirements.</p>
          </div>

          <div className="step-item reveal stagger-2">
            <div className="step-number-box">03</div>
            <h3>Request Your Quote</h3>
            <p>Receive information about the requested cleaning service.</p>
          </div>

          <div className="step-item reveal stagger-3">
            <div className="step-number-box">04</div>
            <h3>Enjoy a Fresher Property</h3>
            <p>Get ready for a cleaner-looking, refreshed exterior.</p>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         OUR WORK GALLERY SECTION
         ======================================================================== */}
        {/* Services Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-navy)' }}>Restore Your Property's Curb Appeal</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>From soft wash roof cleaning to commercial concrete scouring, get an exact quote in minutes.</p>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Request Free Pressure Washing Quote &rarr;
              </button>
            </div>
          </section>
          </>
        )}

        {/* WHY US / ABOUT VIEW */}
        {(currentView === 'why-us' || currentView === 'why-choose' || currentView === 'about') && (
          <>
    <section className="section-padding bg-light" id="about">
      <div className="container about-grid">
        
        {/* Left Media */}
        <div className="about-media reveal">
          <div className="about-image-wrapper">
            <img src="/pressure-demo/assets/images/pw-about.jpg" alt="Alvoratech pressure washing technician working on a residential property" className="about-image" width="540" height="490" loading="lazy" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="reveal stagger-1">Bringing Back the Beauty of Every Surface.</h2>
          
          <p className="reveal stagger-2">
            Alvoratech provides pressure washing and exterior cleaning solutions designed to help homeowners and businesses maintain cleaner, more attractive properties. From driveways and sidewalks to building exteriors and outdoor spaces, our focus is on delivering a professional cleaning experience with attention to detail.
          </p>

          {/* 3 Supporting Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Detail-Oriented Service</h4>
                <p>We assess individual surface materials and conditions before applying the optimal cleaning technique.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Modern Cleaning Equipment</h4>
                <p>Equipped with commercial-grade rotary surface cleaners, pressure wands, and soft-wash pumps.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Solutions for Different Surfaces</h4>
                <p>Specialized treatments tailored for concrete, stone, wood, vinyl siding, stucco, and roofing tiles.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Contact Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         PRESSURE WASHING SERVICES (8 SERVICES)
         ======================================================================== */}
    <section className="section-padding bg-white" id="why-choose">
      <div className="container why-grid">
        
        {/* Left Image */}
        <div className="why-image-wrapper reveal">
          <img src="/pressure-demo/assets/images/pw-why.jpg" alt="Commercial grade pressure washing machine and equipment in operation" className="why-image" width="540" height="520" loading="lazy" />
        </div>

        {/* Right Content */}
        <div className="why-content">
          <h2 className="reveal stagger-1">Why Choose Us?</h2>
          <p className="reveal stagger-2">We combine high-performance commercial equipment with surface-appropriate cleaning solutions to restore exterior beauty safely and effectively.</p>

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
              <h4>Professional Service Approach</h4>
              <p>Punctual technicians dedicated to delivering spotless surfaces with care.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4>Attention to Surface Conditions</h4>
              <p>Carefully evaluating concrete hardness, wood integrity, and siding durability.</p>
            </div>

            <div className="why-benefit-card reveal stagger-3">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h4>Suitable Cleaning Techniques</h4>
              <p>High-pressure rotary washing where tough, gentle soft washing where fragile.</p>
            </div>

            <div className="why-benefit-card reveal stagger-4">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4>Modern Equipment</h4>
              <p>Commercial-grade pressure units and surface cleaners for even, streak-free results.</p>
            </div>

            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                </svg>
              </div>
              <h4>Flexible Cleaning Solutions</h4>
              <p>Custom packages adapted for individual driveways or large commercial facilities.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4>Convenient Communication</h4>
              <p>Direct contact and prompt responsiveness via WhatsApp and phone.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         HOW IT WORKS SECTION
         ======================================================================== */}
        {/* Why Us Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-navy)' }}>Zero Surface Damage, Maximum Cleaning Power</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>Commercial-grade dual-temperature rigs with eco-safe surfactants that protect landscaping and siding.</p>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Schedule Your Wash &rarr;
              </button>
            </div>
          </section>
          </>
        )}

        {/* PORTFOLIO / GALLERY VIEW */}
        {(currentView === 'portfolio' || currentView === 'gallery') && (
          <>
    <section className="section-padding bg-light ba-section" id="transformations">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">See the Difference a Professional Clean Makes.</h2>
          
        </div>

        {/* Transformation Selector Tabs */}
        <div className="ba-tabs reveal">
          <button type="button" className="ba-tab-btn active" data-target="driveway">Driveway</button>
          <button type="button" className="ba-tab-btn" data-target="concrete">Concrete Walkway</button>
          <button type="button" className="ba-tab-btn" data-target="patio">Patio</button>
          <button type="button" className="ba-tab-btn" data-target="house">House Siding</button>
          <button type="button" className="ba-tab-btn" data-target="deck">Wooden Deck</button>
        </div>

        {/* Interactive Drag Slider */}
        <div className="ba-slider-container reveal" id="baSliderContainer">
          
          {/* Background: AFTER Image */}
          <div className="ba-image-wrapper">
            <img src="/pressure-demo/assets/images/ba-driveway-after.jpg" alt="Cleaned pressure washed driveway" className="ba-img" id="baAfterImg" />
            <span className="ba-label ba-label-after">AFTER</span>
          </div>

          {/* Foreground: BEFORE Image (clipped dynamically) */}
          <div className="ba-image-before" id="baImageBefore">
            <img src="/pressure-demo/assets/images/ba-driveway-before.jpg" alt="Dirty stained concrete driveway before pressure washing" className="ba-img" id="baBeforeImg" />
            <span className="ba-label ba-label-before">BEFORE</span>
          </div>

          {/* Draggable Center Handle */}
          <div className="ba-handle" id="baHandle" role="slider" aria-label="Before and after comparison slider" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div className="ba-handle-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>

        </div>

        <p className="ba-caption reveal" id="baCaption">
          <strong>Driveway Pressure Washing Transformation</strong> — Deep embedded grime, oil, and atmospheric staining washed away.
        </p>

      </div>
    </section>

    {/* ========================================================================
         WHY CHOOSE ALVORATECH SECTION
         ======================================================================== */}
    <section className="section-padding bg-white" id="our-work">
      <div className="container-wide">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Every Surface Has a Story. Let's Make It Shine.</h2>
          <p className="reveal stagger-2">Explore photographs showcasing professional exterior washing across varied architectural spaces.</p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters reveal">
          <button type="button" className="filter-btn active" data-filter="all">All Projects</button>
          <button type="button" className="filter-btn" data-filter="driveway">Driveways & Sidewalks</button>
          <button type="button" className="filter-btn" data-filter="house">House & Roof</button>
          <button type="button" className="filter-btn" data-filter="deck">Patios & Decks</button>
          <button type="button" className="filter-btn" data-filter="commercial">Commercial</button>
        </div>

        {/* 8 High-Quality Image Cards */}
        <div className="gallery-grid-8" id="galleryGrid">
          
          {/* Card 1 */}
          <div className="gallery-card reveal" data-category="driveway">
            <img src="/pressure-demo/assets/images/gallery-driveway.jpg" alt="Commercial driveway pressure wash with rotary cleaner" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Driveways</span>
              <h3 className="gallery-title">Concrete Driveway Restoration</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="gallery-card reveal stagger-1" data-category="house">
            <img src="/pressure-demo/assets/images/gallery-house.jpg" alt="Soft-washed residential siding on an American home" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">House Exterior</span>
              <h3 className="gallery-title">House Siding Soft Wash</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="gallery-card reveal stagger-2" data-category="house">
            <img src="/pressure-demo/assets/images/gallery-roof.jpg" alt="Low pressure roof soft washing" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Roofs</span>
              <h3 className="gallery-title">Roof Tile Soft Washing</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="gallery-card reveal stagger-3" data-category="deck">
            <img src="/pressure-demo/assets/images/gallery-patio.jpg" alt="Cleaned stone patio and outdoor dining area" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Patios</span>
              <h3 className="gallery-title">Outdoor Patio Cleaning</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="gallery-card reveal" data-category="deck">
            <img src="/pressure-demo/assets/images/gallery-deck.jpg" alt="Restored wooden deck outdoor space" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Decks</span>
              <h3 className="gallery-title">Wooden Deck Wash</h3>
            </div>
          </div>

          {/* Card 6 */}
          <div className="gallery-card reveal stagger-1" data-category="driveway">
            <img src="/pressure-demo/assets/images/gallery-sidewalk.jpg" alt="Concrete walkway and sidewalk cleaned" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Sidewalks</span>
              <h3 className="gallery-title">Sidewalk Edge Brightening</h3>
            </div>
          </div>

          {/* Card 7 */}
          <div className="gallery-card reveal stagger-2" data-category="commercial">
            <img src="/pressure-demo/assets/images/gallery-commercial.jpg" alt="Commercial high-rise exterior surface power washing" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h3 className="gallery-title">Commercial Facility Cleaning</h3>
            </div>
          </div>

          {/* Card 8 */}
          <div className="gallery-card reveal stagger-3" data-category="commercial">
            <img src="/pressure-demo/assets/images/gallery-equipment.jpg" alt="Professional commercial pressure washing equipment in action" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Equipment</span>
              <h3 className="gallery-title">Commercial Surface Cleaner</h3>
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
        {/* Portfolio Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-navy)' }}>See the Difference on Your Surfaces</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>Send us a quick photo or description of your driveway, patio, or roof for an instant WhatsApp estimate.</p>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Get an Estimate on WhatsApp &rarr;
              </button>
            </div>
          </section>
          </>
        )}

        {/* FAQ VIEW */}
        {currentView === 'faq' && (
          <>
    <section className="section-padding bg-white" id="faq">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Everything You Need to Know</h2>
          <p className="reveal stagger-2">Find direct, honest answers regarding our exterior surface pressure washing and soft washing solutions.</p>
        </div>

        <div className="faq-container">
          
          {/* Question 1 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What surfaces can pressure washing clean?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Pressure washing is highly effective for durable hard surfaces including concrete driveways, stone patios, pavers, brick walkways, curbs, parking lots, and exterior building hardscapes. For softer surfaces, we utilize low-pressure soft washing techniques.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What is the difference between pressure washing and soft washing?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Pressure washing uses high-velocity water streams to dislodge tough stains and grime from durable surfaces like concrete. Soft washing uses low pressure combined with specialized cleaning solutions to safely sanitize delicate surfaces like siding and roofs without causing mechanical damage.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Is pressure washing suitable for every house exterior?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Not every exterior material should receive high-pressure water. Vinyl siding, delicate wood, stucco, and shingles require gentle soft washing to prevent water intrusion or surface degradation. We always select the appropriate method for each material.</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Can you clean driveways and sidewalks?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. Driveways, sidewalks, and walkways are our specialty. We utilize industrial rotary surface cleaners that deliver consistent, uniform results without unsightly stripes or zebra marks.</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Do you offer commercial pressure washing?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We provide comprehensive exterior cleaning solutions for commercial facilities, office complexes, retail storefronts, parking lots, dumpster pads, and walkways, with flexible scheduling to minimize business interruption.</p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How can I request a pressure washing quote?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>You can request a quote by clicking any WhatsApp button on this site, messaging us directly at +1 (412) 796-3968, submitting the contact form below, or emailing info@Alvoratechhq.com.</p>
            </div>
          </div>

          {/* Question 7 */}
          <div className="faq-item reveal stagger-3">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How do I contact Alvoratech?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>You can contact Alvoratech via WhatsApp or direct phone call at +1 (412) 796-3968, by email at info@Alvoratechhq.com, or through our website contact form.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         CONTACT SECTION
         ======================================================================== */}
        {/* FAQ Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--color-navy)' }}>Have Questions About Water Pressure or Plant Safety?</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>Our wash technicians are happy to walk you through our pressure levels and protection methods.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+14127963968" className="btn btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                  Call +1 (412) 796-3968
                </a>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-secondary" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                  Send Online Request &rarr;
                </button>
              </div>
            </div>
          </section>
          </>
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && (
          <>
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Let's Give Your Property a Fresh Look.</h2>
          <p className="reveal stagger-2">Tell us what needs cleaning and our team will help you discuss the next steps.</p>
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
                    <a href="tel:+14127963968" style={{"fontSize":"0.875rem","color":"var(--color-blue-electric)","fontWeight":"600"}}>(Call directly)</a>
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
              <div className="contact-location-value">Pittsburgh, PA & Surrounding Areas</div>
            </div>

          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request a Free Quote</h3>
            <p>Share your surface cleaning requirements and we will prepare your prefilled request directly in WhatsApp.</p>

            <div className="form-status" id="formStatus" role="status"></div>

            <form id="contactForm" novalidate>
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">Full Name *</label>
                <input type="text" id="fullName" className="form-input" placeholder="e.g. Jason Miller" required />
                <div className="form-error" id="fullNameError"></div>
              </div>

              {/* Email & Phone in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" className="form-input" placeholder="e.g. jason@example.com" required />
                  <div className="form-error" id="emailError"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input type="tel" id="phone" className="form-input" placeholder="e.g. +1 (412) 555-0199" required />
                  <div className="form-error" id="phoneError"></div>
                </div>
              </div>

              {/* Service & Property Type in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="serviceRequired" className="form-label">Service Required *</label>
                  <select id="serviceRequired" className="form-select" required>
                    <option value="">Select a Service...</option>
                    <option value="Driveway Pressure Washing">Driveway Pressure Washing</option>
                    <option value="House Washing">House Washing</option>
                    <option value="Roof Soft Washing">Roof Soft Washing</option>
                    <option value="Deck and Fence Cleaning">Deck and Fence Cleaning</option>
                    <option value="Patio and Sidewalk Cleaning">Patio and Sidewalk Cleaning</option>
                    <option value="Commercial Pressure Washing">Commercial Pressure Washing</option>
                    <option value="Gutter and Exterior Cleaning">Gutter and Exterior Cleaning</option>
                    <option value="Parking Lot and Concrete Cleaning">Parking Lot and Concrete Cleaning</option>
                  </select>
                  <div className="form-error" id="serviceRequiredError"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type *</label>
                  <select id="propertyType" className="form-select" required>
                    <option value="">Select Property Type...</option>
                    <option value="Residential Property">Residential Property</option>
                    <option value="Commercial Building">Commercial Building</option>
                    <option value="Multi-Family / HOA">Multi-Family / HOA</option>
                    <option value="Retail / Storefront">Retail / Storefront</option>
                  </select>
                  <div className="form-error" id="propertyTypeError"></div>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Surface Details & Cleaning Needs *</label>
                <textarea id="message" className="form-textarea" placeholder="Describe the size, surface material (concrete, brick, wood, siding), and condition of the area..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Request My Quote</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, WhatsApp will open with your prefilled quote request so you can chat directly with our team.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
          </>
        )}
      </main>
  <footer className="site-footer" role="contentinfo">
    <div className="container footer-grid">
      
      {/* Col 1: Brand */}
      <div className="footer-col-brand">
        <a href="#home" onClick={(e) => navigateTo('home', e)} className="site-logo">
          <div className="logo-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>
        <p>Professional pressure washing and exterior cleaning solutions for homes and businesses.</p>
      </div>

      {/* Col 2: Quick Links */}
      <div className="footer-col">
        <h4 className="footer-heading">Quick Links</h4>
        <div className="footer-links">
          <a href="#home" onClick={(e) => navigateTo('home', e)} className="footer-link">Home</a>
          <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="footer-link">About Us</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Services</a>
          <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="footer-link">Gallery</a>
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="footer-link">Contact</a>
        </div>
      </div>

      {/* Col 3: Services */}
      <div className="footer-col">
        <h4 className="footer-heading">Our Services</h4>
        <div className="footer-links">
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Driveway Washing</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">House Washing</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Roof Soft Washing</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Deck Cleaning</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Washing</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Patio Cleaning</a>
        </div>
      </div>

      {/* Col 4: Contact */}
      <div className="footer-col">
        <h4 className="footer-heading">Contact Information</h4>
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
            <span>Pittsburgh, PA & Surrounding Areas</span>
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
