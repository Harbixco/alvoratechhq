import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './landscaping.css';

export default function Landscaping() {
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
 * ALVORATECH – Premium Landscaping & Outdoor Living Website
 * Core Interactive JavaScript
 * Modular, vanilla ES6+, fully accessible
 */

const runInit = () => {
  'use strict';

  /* ==========================================================================
     1. STICKY HEADER SCROLL EFFECT
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
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-drawer .nav-link, .mobile-drawer .btn');

  const openDrawer = () => {
    if (!mobileDrawer || !mobileToggle || !mobileOverlay) return;
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!mobileDrawer || !mobileToggle || !mobileOverlay) return;
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
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

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  /* ==========================================================================
     3. SMOOTH ANCHOR SCROLLING WITH OFFSET
     ========================================================================== */
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash without jump
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  /* ==========================================================================
     4. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const reveals = document.querySelectorAll('.reveal');

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

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not available
    reveals.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     5. INTERACTIVE BEFORE-AND-AFTER TRANSFORMATION SLIDER
     ========================================================================== */
  const baContainer = document.querySelector('.ba-slider-container');
  const baBefore = document.querySelector('.ba-image-before');
  const baHandle = document.querySelector('.ba-handle');
  const baBeforeImg = document.querySelector('.ba-image-before .ba-img');
  const baAfterImg = document.querySelector('.ba-image-after .ba-img');
  const baTabs = document.querySelectorAll('.ba-tab-btn');
  const baCaption = document.querySelector('.ba-caption');

  const transformationData = {
    patio: {
      before: '/landscaping/assets/images/ba-patio-before.jpg',
      after: '/landscaping/assets/images/ba-patio-after.jpg',
      caption: 'Backyard Transformation: Overgrown unpaved yard transformed into an architectural paver patio with seating & evening lighting.'
    },
    curb: {
      before: '/landscaping/assets/images/ba-curb-before.jpg',
      after: '/landscaping/assets/images/ba-curb-after.jpg',
      caption: 'Front Yard Curb Appeal: Patchy slope redesigned with tiered natural stone beds, specimen shrubs, and manicured turf.'
    },
    lawn: {
      before: '/landscaping/assets/images/ba-lawn-before.jpg',
      after: '/landscaping/assets/images/ba-lawn-after.jpg',
      caption: 'Lawn Revitalization: Severely weed-choked yard transformed into deep-green, golf-course grade lawn with customized aeration & nutrition.'
    },
    wall: {
      before: '/landscaping/assets/images/ba-wall-before.jpg',
      after: '/landscaping/assets/images/ba-wall-after.jpg',
      caption: 'Retaining Wall & Grading: Eroded hill stabilized with commercial-grade dry-stack stone retaining wall and landscape plantings.'
    },
    living: {
      before: '/landscaping/assets/images/ba-living-before.jpg',
      after: '/landscaping/assets/images/ba-living-after.jpg',
      caption: 'Outdoor Living Room: Bare back lawn converted into custom outdoor entertainment pavilion with fire feature & cedar arbor.'
    }
  };

  let isDragging = false;

  const syncBeforeImageWidth = () => {
    if (!baContainer || !baBeforeImg) return;
    const containerWidth = baContainer.offsetWidth;
    baBeforeImg.style.width = containerWidth + 'px';
  };

  const setSliderPosition = (xPos) => {
    if (!baContainer || !baBefore || !baHandle) return;
    const rect = baContainer.getBoundingClientRect();
    let x = xPos - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    baBefore.style.width = percentage + '%';
    baHandle.style.left = percentage + '%';
  };

  if (baContainer && baBefore && baHandle) {
    syncBeforeImageWidth();
    window.addEventListener('resize', syncBeforeImageWidth);

    // Mouse Events
    baHandle.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
    });

    baContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    // Touch Events for Mobile & Tablet
    baHandle.addEventListener('touchstart', (e) => {
      isDragging = true;
    }, { passive: true });

    baContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) {
        setSliderPosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      setSliderPosition(e.touches[0].clientX);
    }, { passive: true });
  }

  // Before-After Tabs
  baTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const scene = tab.getAttribute('data-tab');
      if (!scene || !transformationData[scene]) return;

      baTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const data = transformationData[scene];
      if (baBeforeImg && baAfterImg) {
        baBeforeImg.src = data.before;
        baAfterImg.src = data.after;
      }
      if (baCaption) {
        baCaption.textContent = data.caption;
      }

      // Reset to 50%
      if (baBefore && baHandle) {
        baBefore.style.width = '50%';
        baHandle.style.left = '50%';
      }
      syncBeforeImageWidth();
    });
  });

  /* ==========================================================================
     6. OUR WORK PORTFOLIO GALLERY & LIGHTBOX MODAL
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Lightbox Modal
  let currentGalleryIndex = 0;
  const visibleCardsList = () => Array.from(galleryCards).filter(card => card.style.display !== 'none');

  const openLightbox = (imgSrc, captionText, index) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    if (lightboxCaption) {
      lightboxCaption.textContent = captionText || 'Alvoratech Landscaping Project';
    }
    currentGalleryIndex = index;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  galleryCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.gallery-image');
      const title = card.querySelector('.gallery-title');
      const tag = card.querySelector('.gallery-tag');
      const fullCaption = tag && title ? `${tag.textContent} — ${title.textContent}` : (title ? title.textContent : '');
      if (img) {
        openLightbox(img.src, fullCaption, index);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ==========================================================================
     7. TESTIMONIALS CAROUSEL
     ========================================================================== */
  const track = document.querySelector('.testimonials-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.querySelector('.slider-dots');

  let currentSlide = 0;
  let autoplayTimer = null;
  const slideCount = slides.length;

  // Build dots if dotsContainer exists and slides > 0
  if (dotsContainer && slideCount > 0) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const goToSlide = (index) => {
    if (!track || slideCount === 0) return;
    if (index < 0) {
      currentSlide = slideCount - 1;
    } else if (index >= slideCount) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      restartAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      restartAutoplay();
    });
  }

  const startAutoplay = () => {
    if (slideCount > 1) {
      autoplayTimer = setInterval(nextSlide, 5500);
    }
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);
  }

  // Touch swipe support for testimonials
  let touchStartX = 0;
  let touchEndX = 0;

  if (track) {
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoplay();
    }, { passive: true });
  }

  startAutoplay();

  /* ==========================================================================
     8. FAQ ACCORDION (SMOOTH HEIGHT TOGGLE)
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (button && content) {
      button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = '0px';
          }
        });

        // Toggle current FAQ item
        if (isActive) {
          item.classList.remove('active');
          button.setAttribute('aria-expanded', 'false');
          content.style.maxHeight = '0px';
        } else {
          item.classList.add('active');
          button.setAttribute('aria-expanded', 'true');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    const firstItem = faqItems[0];
    const firstBtn = firstItem.querySelector('.faq-button');
    const firstContent = firstItem.querySelector('.faq-content');
    firstItem.classList.add('active');
    if (firstBtn) firstBtn.setAttribute('aria-expanded', 'true');
    if (firstContent) {
      firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
  }

  /* ==========================================================================
     9. ESTIMATE REQUEST FORM VALIDATION & DIRECT WHATSAPP INTEGRATION
     ========================================================================== */
  const estimateForm = document.getElementById('estimateForm');
  const formStatus = document.getElementById('formStatus');

  if (estimateForm) {
    estimateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Inputs
      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('emailAddress');
      const phoneInput = document.getElementById('phoneNumber');
      const serviceSelect = document.getElementById('serviceNeeded');
      const propertySelect = document.getElementById('propertyType');
      const detailsInput = document.getElementById('projectDetails');

      // Helper functions
      const setError = (input, errorId, message) => {
        if (!input) return;
        input.classList.add('is-invalid');
        const errEl = document.getElementById(errorId);
        if (errEl) {
          errEl.textContent = message;
          errEl.classList.add('visible');
        }
        isValid = false;
      };

      const clearError = (input, errorId) => {
        if (!input) return;
        input.classList.remove('is-invalid');
        const errEl = document.getElementById(errorId);
        if (errEl) {
          errEl.classList.remove('visible');
        }
      };

      // Full Name Validation
      if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, 'fullNameError', 'Please enter your full name.');
      } else {
        clearError(nameInput, 'fullNameError');
      }

      // Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, 'emailError', 'Please enter a valid email address.');
      } else {
        clearError(emailInput, 'emailError');
      }

      // Phone Validation
      const phoneClean = phoneInput ? phoneInput.value.replace(/[^0-9]/g, '') : '';
      if (!phoneInput || phoneClean.length < 7) {
        setError(phoneInput, 'phoneError', 'Please enter a valid telephone number.');
      } else {
        clearError(phoneInput, 'phoneError');
      }

      // Service Select Validation
      if (!serviceSelect || !serviceSelect.value) {
        setError(serviceSelect, 'serviceError', 'Please select a landscaping service.');
      } else {
        clearError(serviceSelect, 'serviceError');
      }

      if (!isValid) {
        return;
      }

      // Format WhatsApp Pre-filled message
      const customerName = nameInput.value.trim();
      const customerEmail = emailInput.value.trim();
      const customerPhone = phoneInput.value.trim();
      const selectedService = serviceSelect.options[serviceSelect.selectedIndex].text;
      const selectedProperty = propertySelect && propertySelect.value ? propertySelect.options[propertySelect.selectedIndex].text : 'Standard';
      const notes = detailsInput && detailsInput.value.trim() ? detailsInput.value.trim() : 'None provided';

      const waMessage = 
        `Hello Alvoratech Landscaping!\n` +
        `I would like to request a free estimate:\n\n` +
        `• Name: ${customerName}\n` +
        `• Phone: ${customerPhone}\n` +
        `• Email: ${customerEmail}\n` +
        `• Service: ${selectedService}\n` +
        `• Property: ${selectedProperty}\n` +
        `• Project Details: ${notes}`;

      const waUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(waMessage)}`;

      // Show inline success message
      if (formStatus) {
        formStatus.textContent = 'Thank you! Redirecting your request directly to Alvoratech WhatsApp...';
        formStatus.classList.add('success');
      }

      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        estimateForm.reset();
        setTimeout(() => {
          if (formStatus) formStatus.classList.remove('success');
        }, 6000);
      }, 700);
    });

    // Clear validation styling on input
    ['fullName', 'emailAddress', 'phoneNumber', 'serviceNeeded'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('is-invalid');
          const errEl = document.getElementById(`${id}Error`.replace('Address', '').replace('Needed', ''));
          if (errEl) errEl.classList.remove('visible');
        });
      }
    });
  }

}; runInit();

    } catch (err) {
      console.warn('Interactive script error in Landscaping:', err);
    }
  }, []);

  return (
    <div className="landscaping-demo" id="top">
      <DemoTopBar demoName="Alvoratech Landscaping & Outdoor Living" />
      

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
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" role="navigation" aria-label="Main Navigation">
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="nav-link">Services</a>
          <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">About Us</a>
          <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="nav-link">Portfolio</a>
          <a href="#testimonials" onClick={(e) => navigateTo('reviews', e)} className="nav-link">Reviews</a>
          <a href="#faq" onClick={(e) => navigateTo('faq', e)} className="nav-link">FAQ</a>
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="nav-link">Contact</a>
        </nav>

        {/* Nav CTA Actions */}
        <div className="nav-actions">
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">Get Free Estimate</a>
          <button className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}  aria-expanded={mobileMenuOpen} aria-label="Open navigation menu">
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
      <span className="mobile-drawer-title">Landscaping Menu</span>
      <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
        &times;
      </button>
    </div>
    <a href="#hero" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="nav-link">Home</a>
    <a href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} className="nav-link">Services</a>
    <a href="#why-us" onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} className="nav-link">About Us</a>
    <a href="#portfolio" onClick={(e) => { setMobileMenuOpen(false); navigateTo('portfolio', e); }} className="nav-link">Portfolio Gallery</a>
    <a href="#faq" onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} className="nav-link">FAQ</a>
    <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="nav-link">Contact & Estimate</a>
    <a href="tel:+14127963968" className="btn btn-primary" style={{"marginTop":"1rem"}}>
      Call: +1 (412) 796-3968
    </a>
    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{"marginTop":"0.5rem"}}>
      Chat on WhatsApp
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
              {(currentView === 'why-us' || currentView === 'why-choose') && 'Why Property Owners Choose Us'}
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
    <section className="hero-section" id="hero">
      {/* Animated Floating Foliage Elements */}
      <div className="leaf-particle leaf-1" aria-hidden="true"></div>
      <div className="leaf-particle leaf-2" aria-hidden="true"></div>
      <div className="leaf-particle leaf-3" aria-hidden="true"></div>
      <div className="leaf-particle leaf-4" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Value Copy */}
          <div className="hero-content reveal">
            
            <h1 className="hero-title">
              Crafting Landscapes. <br />
              <span className="text-gradient">Elevating Outdoor Living.</span>
            </h1>
            <p className="hero-description">
              From custom paver patios, retaining walls, and outdoor living sanctuaries to master 3D design and estate grounds maintenance. Alvoratech brings unparalleled artistry, engineering, and horticultural precision to your property.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-lg">Request Free Estimate</a>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="hero-trust-indicators">
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Licensed & Insured
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Photorealistic 3D Renders
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                5-Year Hardscape Warranty
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature */}
          <div className="hero-media-wrapper reveal stagger-1">
            <div className="hero-image-container">
              <img src="/landscaping/assets/images/landscape-hero.jpg" alt="Luxury estate manicured landscaping and architectural hardscaping by Alvoratech" className="hero-image" width="700" height="490" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         4. TRUST INDICATORS (HORIZONTAL VALUE BAR)
         ========================================================================== */}
    <section className="trust-section" aria-label="Why trust Alvoratech">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Licensed & Insured</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Comprehensive \$2M liability & workers' compensation.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">3D Concept Renders</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Visualize your project in photorealistic detail first.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">On-Time Completion</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Dedicated superintendents and daily clean worksites.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-4">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Guaranteed Durability</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Multi-year warranties on all paver and stone structures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         5. ABOUT US SECTION
         ========================================================================== */}
    <section className="section-padding bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-media reveal">
            <div className="about-image-wrapper">
              <img src="/landscaping/assets/images/landscape-about.jpg" alt="Alvoratech landscaping crew performing precision estate planting" className="about-image" width="600" height="490" />
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal stagger-1">
            <h2>Rooted in Craftsmanship. <br />Driven by Precision Outdoor Design.</h2>
            <p>
              At Alvoratech, we believe your exterior property is an extension of your home's architecture and living space. Founded with a commitment to uncompromised craftsmanship, we merge architectural hardscaping, environmental horticulture, and high-efficiency water management into seamless outdoor sanctuaries.
            </p>
            <p>
              Whether constructing expansive natural bluestone terraces, stabilizing steep slopes with structural retaining walls, or maintaining premier corporate grounds, our team executes every phase with laser precision and courteous professionalism.
            </p>

            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Architectural Structural Integrity</h4>
                  <p>Proper sub-base compaction, laser leveling, and geogrid reinforcement guarantee zero settling or sagging for decades.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Climate-Adapted Botanical Science</h4>
                  <p>Tailored soil amendments and climate-resilient native plant palettes ensure lush seasonal color with minimal water waste.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Turnkey Communication & Oversight</h4>
                  <p>A single dedicated project superintendent manages your project from excavation to final walkthrough and ongoing maintenance.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              Talk With Our Landscape Designers
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         6. LANDSCAPING SERVICES (8 SERVICES)
         ========================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <h2>What Property Owners Say About Us</h2>
        </div>

        <div className="testimonials-carousel-wrapper reveal stagger-1">
          <div className="testimonials-slider">
            <div className="testimonials-track">
              {/* Slide 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "Alvoratech transformed our backyard from a sloped, unusable mud pit into an architectural masterpiece. The 3D render preview was exact to the millimeter. Their team worked tirelessly, showed up right on time each morning, and the craftsmanship of the natural stone patio has increased our property value tremendously."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">David & Sarah Miller</span>
                    <span className="author-role">Residential Estate Homeowners</span>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "As a facility director managing an 18-acre corporate park, finding a reliable grounds contractor was always challenging. Alvoratech stepped in with proactive weekly communication, immaculate turf striped lines, and automated smart irrigation that cut our exterior water bill by 32%."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Marcus Vance</span>
                    <span className="author-role">Director of Facilities, Tech Ridge Campus</span>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "We had a severe grading and water runoff problem that threatened our foundation during heavy rains. Alvoratech engineered a multi-tier retaining wall and French drain network that solved the drainage completely, while creating a stunning tiered botanical garden. Highly recommended!"
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Elena Rostova</span>
                    <span className="author-role">Private Homeowner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="slider-controls">
            <button className="slider-btn slider-prev" aria-label="Previous testimonial slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div className="slider-dots"></div>
            <button className="slider-btn slider-next" aria-label="Next testimonial slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         13. SPECIAL CALL-TO-ACTION SECTION
         ========================================================================== */}
    <section className="special-cta-section" aria-label="Call to action">
      <div className="special-cta-content reveal">
        <h2>Ready to Elevate Your Outdoor Living Space?</h2>
        <p>
          From concept 3D blueprints to the final stone paver, Alvoratech delivers unmatched landscaping artistry and engineering. Speak with our landscape consultants today for a no-obligation site consultation.
        </p>
        <div className="hero-actions" style={{"justifyContent":"center"}}>
          <a href="#contact" className="btn btn-primary btn-lg">Request Free Estimate</a>
          <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         14. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
         ========================================================================== */}
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Information Card */}
          <div className="contact-info-card reveal">
            <h3>Connect With Alvoratech</h3>
            <p>Ready to start your landscape journey? Reach out to our design and estimating team directly via phone, WhatsApp, or email.</p>

            <div className="contact-channels">
              {/* WhatsApp Channel */}
              <div className="contact-channel-item">
                <div className="channel-icon-box whatsapp-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>WhatsApp / Phone</h4>
                  <a href="tel:+14127963968" className="channel-link">+1 (412) 796-3968</a>
                </div>
              </div>

              {/* Email Channel */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Email Support</h4>
                  <a href="mailto:info@Alvoratechhq.com" className="channel-link">info@Alvoratechhq.com</a>
                </div>
              </div>

              {/* Location Box (Strictly *) */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Location</h4>
                  <span className="channel-link">*</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="contact-location-box">
              <div className="contact-location-label">Business Hours</div>
              <div style={{"fontSize":"0.95rem","color":"var(--color-navy)","fontWeight":"600"}}>
                Monday – Saturday: 7:00 AM – 6:00 PM <br />
                <span style={{"color":"var(--color-text-muted)","fontWeight":"normal"}}>Sunday: Emergency Property Response</span>
              </div>
            </div>

            <div style={{"marginTop":"1.75rem"}}>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{"width":"100%"}}>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Estimate Request Form */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request Your Free Property Estimate</h3>
            <p>Fill out the details below. Submitting will immediately generate a customized WhatsApp summary for our landscape estimators.</p>

            <div id="formStatus" className="form-status" role="alert"></div>

            <form id="estimateForm" novalidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input type="text" id="fullName" className="form-input" placeholder="e.g. Robert Anderson" required />
                  <span id="fullNameError" className="form-error">Please enter your full name.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" className="form-input" placeholder="e.g. +1 (412) 555-0192" required />
                  <span id="phoneError" className="form-error">Please enter a valid telephone number.</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" className="form-input" placeholder="e.g. robert@example.com" required />
                  <span id="emailError" className="form-error">Please enter a valid email address.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type</label>
                  <select id="propertyType" className="form-select">
                    <option value="residential">Residential Estate</option>
                    <option value="commercial">Commercial / Corporate Campus</option>
                    <option value="hoa">HOA / Multi-Family Community</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceNeeded" className="form-label">Primary Service Required *</label>
                <select id="serviceNeeded" className="form-select" required>
                  <option value="">-- Select a Landscaping Service --</option>
                  <option value="hardscape">Custom Hardscaping & Paver Patios</option>
                  <option value="design">Landscape Architecture & 3D Design</option>
                  <option value="retaining_wall">Retaining Walls & Slope Grading</option>
                  <option value="lawn_care">Lawn Care & Turf Management</option>
                  <option value="irrigation">Smart Irrigation & French Drains</option>
                  <option value="planting">Specimen Tree & Shrub Planting</option>
                  <option value="lighting">Architectural Outdoor Night Lighting</option>
                  <option value="commercial">Commercial Grounds Maintenance</option>
                </select>
                <span id="serviceError" className="form-error">Please select a service.</span>
              </div>

              <div className="form-group">
                <label htmlFor="projectDetails" className="form-label">Project Details / Goals</label>
                <textarea id="projectDetails" className="form-textarea" placeholder="Describe your yard dimensions, desired features (fire pit, patio, turf aeration), or current drainage issues..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                Submit Free Estimate Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="form-notice">
                🔒 Privacy guaranteed. Your contact information is never shared with third parties.
              </div>
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
        <div className="section-header reveal">
          <h2>Master Landscaping & Outdoor Living Solutions</h2>
          <p>
            From bespoke concept design and heavy structural masonry to manicured lawn health and automated nightscapes. Discover how Alvoratech transforms properties.
          </p>
        </div>

        <div className="services-grid-8">
          {/* Service 1 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-design.jpg" alt="Landscape 3D architectural master planning by Alvoratech" className="service-image" loading="lazy" />
              <span className="service-badge">Master Plan</span>
            </div>
            <div className="service-content">
              <h3>Landscape Architecture & 3D Design</h3>
              <p>Custom 3D CAD modeling, photorealistic rendering walkthroughs, topographical grading maps, and botanical schedules before ground is broken.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Landscape%20Architecture%20%26%203D%20Design" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Design Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 2 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-hardscape.jpg" alt="Interlocking paver patio and outdoor kitchen installation" className="service-image" loading="lazy" />
              <span className="service-badge">Outdoor Living</span>
            </div>
            <div className="service-content">
              <h3>Custom Hardscaping & Paver Patios</h3>
              <p>Enduring interlocking concrete pavers, natural bluestone terraces, custom stone fire pits, built-in BBQ kitchens, and courtyard walkways.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Custom%20Hardscaping%20%26%20Paver%20Patios" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Hardscape Estimate
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 3 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/ba-wall-after.jpg" alt="Engineered stone retaining wall and terrace installation" className="service-image" loading="lazy" />
              <span className="service-badge">Structural Masonry</span>
            </div>
            <div className="service-content">
              <h3>Retaining Walls & Terraced Grading</h3>
              <p>Engineered segmental block and natural stone retaining walls to stabilize hillsides, halt soil erosion, and unlock usable flat yard space.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Retaining%20Walls%20%26%20Grading" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Wall Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 4 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-lawn.jpg" alt="Lush green lawn treatment and estate maintenance" className="service-image" loading="lazy" />
              <span className="service-badge">Turf Science</span>
            </div>
            <div className="service-content">
              <h3>Lawn Care & Turf Management</h3>
              <p>Seasonal core aeration, overseeding with premium cultivars, slow-release balanced nutrition, targeted weed elimination, and precision mowing.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Lawn%20Care%20%26%20Turf%20Management" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Lawn Care Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 5 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-irrigation.jpg" alt="Smart irrigation sprinkler and drainage system installation" className="service-image" loading="lazy" />
              <span className="service-badge">Water Efficiency</span>
            </div>
            <div className="service-content">
              <h3>Smart Irrigation & French Drains</h3>
              <p>WiFi-connected weather-sensing sprinkler zones, micro-drip plant watering, French drain conduits, and swales to eradicate standing water.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Smart%20Irrigation%20%26%20Drainage" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Drainage Plan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 6 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-tree.jpg" alt="Specimen tree planting and horticultural care" className="service-image" loading="lazy" />
              <span className="service-badge">Horticulture</span>
            </div>
            <div className="service-content">
              <h3>Specimen Tree & Shrub Planting</h3>
              <p>Planting mature shade trees, evergreen privacy screens, ornamental flowering shrubs, seasonal mulch bedding, and deep root fertilization.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Tree%20%26%20Shrub%20Planting" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Planting Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 7 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-lighting.jpg" alt="Architectural low-voltage landscape lighting" className="service-image" loading="lazy" />
              <span className="service-badge">Illumination</span>
            </div>
            <div className="service-content">
              <h3>Architectural Outdoor Lighting</h3>
              <p>Low-voltage solid brass LED landscape fixtures, tree canopy uplighting, pathway safety illumination, and smart automated twilight timers.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Architectural%20Outdoor%20Lighting" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Lighting Design
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 8 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/landscaping/assets/images/service-commercial.jpg" alt="Corporate commercial grounds management and exterior landscaping" className="service-image" loading="lazy" />
              <span className="service-badge">Commercial Care</span>
            </div>
            <div className="service-content">
              <h3>Commercial Grounds Maintenance</h3>
              <p>Reliable commercial landscape contracting for corporate campuses, retail plazas, and HOAs with scheduled weekly maintenance and pristine curb appeal.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Commercial%20Grounds%20Maintenance" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Commercial RFP
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         8. INTERACTIVE BEFORE-AND-AFTER TRANSFORMATION SLIDER
         ========================================================================== */}
    <section className="section-padding bg-light" id="process">
      <div className="container">
        <div className="section-header reveal">
          <h2>Our 4-Step Landscape Process</h2>
          <p>
            Experience a structured, stress-free path from conceptual vision to complete outdoor living reality.
          </p>
        </div>

        <div className="steps-timeline">
          {/* Step 1 */}
          <div className="step-item reveal stagger-1">
            <div className="step-number-box">01</div>
            <h3>On-Site Consultation</h3>
            <p>We walk your grounds, evaluate sun exposure, soil, and drainage, and discuss your lifestyle desires and budget.</p>
          </div>

          {/* Step 2 */}
          <div className="step-item reveal stagger-2">
            <div className="step-number-box">02</div>
            <h3>3D Concept & Materials</h3>
            <p>Our landscape architects generate 3D renders and guide you through stone samples, paver textures, and plant schedules.</p>
          </div>

          {/* Step 3 */}
          <div className="step-item reveal stagger-3">
            <div className="step-number-box">03</div>
            <h3>Precision Construction</h3>
            <p>Our skilled masons and horticulturalists execute site grading, compaction, masonry, and planting with daily superintendent oversight.</p>
          </div>

          {/* Step 4 */}
          <div className="step-item reveal stagger-4">
            <div className="step-number-box">04</div>
            <h3>Walkthrough & Care</h3>
            <p>We review every inch with you, provide custom maintenance instructions, and activate your multi-year warranty.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         11. OUR WORK PORTFOLIO GALLERY & LIGHTBOX
         ========================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                Request Service Consultation &rarr;
              </button>
            </div>
          </>
        )}

        {/* WHY US / ABOUT VIEW */}
        {(currentView === 'why-us' || currentView === 'why-choose' || currentView === 'about') && (
          <>
    <section className="section-padding bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-media reveal">
            <div className="about-image-wrapper">
              <img src="/landscaping/assets/images/landscape-about.jpg" alt="Alvoratech landscaping crew performing precision estate planting" className="about-image" width="600" height="490" />
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal stagger-1">
            <h2>Rooted in Craftsmanship. <br />Driven by Precision Outdoor Design.</h2>
            <p>
              At Alvoratech, we believe your exterior property is an extension of your home's architecture and living space. Founded with a commitment to uncompromised craftsmanship, we merge architectural hardscaping, environmental horticulture, and high-efficiency water management into seamless outdoor sanctuaries.
            </p>
            <p>
              Whether constructing expansive natural bluestone terraces, stabilizing steep slopes with structural retaining walls, or maintaining premier corporate grounds, our team executes every phase with laser precision and courteous professionalism.
            </p>

            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Architectural Structural Integrity</h4>
                  <p>Proper sub-base compaction, laser leveling, and geogrid reinforcement guarantee zero settling or sagging for decades.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Climate-Adapted Botanical Science</h4>
                  <p>Tailored soil amendments and climate-resilient native plant palettes ensure lush seasonal color with minimal water waste.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Turnkey Communication & Oversight</h4>
                  <p>A single dedicated project superintendent manages your project from excavation to final walkthrough and ongoing maintenance.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              Talk With Our Landscape Designers
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         6. LANDSCAPING SERVICES (8 SERVICES)
         ========================================================================== */}
    <section className="section-padding bg-white" id="why-us">
      <div className="container">
        <div className="why-grid">
          {/* Left Media */}
          <div className="why-image-wrapper reveal">
            <img src="/landscaping/assets/images/landscape-why.jpg" alt="Alvoratech modern landscaping machinery and laser leveling grading tools" className="why-image" width="600" height="520" />
          </div>

          {/* Right Content */}
          <div className="why-content reveal stagger-1">
            <h2>The Alvoratech Standard of Excellence</h2>
            <p>
              We treat outdoor construction with the same discipline, structural engineering, and design nuance typically reserved for interior architectural renovations.
            </p>

            <div className="why-benefits-grid">
              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h4>Fully Licensed & Insured</h4>
                <p>\$2M comprehensive liability coverage protecting your estate and family at every step.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h4>Itemized Written Quotes</h4>
                <p>Complete transparent proposals with exact material breakdowns and zero hidden add-ons.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                </div>
                <h4>Punctual Milestone Delivery</h4>
                <p>We start on schedule, maintain clean daily job sites, and finish before your deadline.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                <h4>5-Year Hardscape Warranty</h4>
                <p>Unconditional structural warranty covering pavers, polymeric sand, and retaining walls.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path></svg>
                </div>
                <h4>Microclimate Native Plants</h4>
                <p>Curated botanical palettes bred to thrive in local soil with minimal irrigation required.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <h4>Low-Impact Machinery</h4>
                <p>Rubber-tracked mini machinery that preserves existing lawn, driveways, and tree roots.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         10. HOW IT WORKS (OUR 4-STEP LANDSCAPE PROCESS)
         ========================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                Partner With Our Specialists &rarr;
              </button>
            </div>
          </>
        )}

        {/* PORTFOLIO / GALLERY VIEW */}
        {(currentView === 'portfolio' || currentView === 'gallery') && (
          <>
    <section className="section-padding bg-light ba-section" id="transformations">
      <div className="container">
        <div className="section-header reveal">
          <h2>Witness the Power of Professional Landscaping</h2>
          <p>
            Drag the interactive slider handle left and right to reveal the dramatic real-world property transformations executed by Alvoratech's specialized crews.
          </p>
          
        </div>

        {/* Before-After Category Tabs */}
        <div className="ba-tabs reveal">
          <button className="ba-tab-btn active" data-tab="patio">Backyard Patio</button>
          <button className="ba-tab-btn" data-tab="curb">Front Yard Curb</button>
          <button className="ba-tab-btn" data-tab="lawn">Lawn Revitalization</button>
          <button className="ba-tab-btn" data-tab="wall">Retaining Wall</button>
          <button className="ba-tab-btn" data-tab="living">Outdoor Living Room</button>
        </div>

        {/* Interactive Slider Box */}
        <div className="ba-slider-container reveal stagger-1" aria-label="Before and after transformation comparison slider">
          {/* After (Background) */}
          <div className="ba-image-wrapper ba-image-after">
            <img src="/landscaping/assets/images/ba-patio-after.jpg" alt="Backyard transformed after Alvoratech paver patio construction" className="ba-img" />
            <span className="ba-label ba-label-after">AFTER</span>
          </div>

          {/* Before (Clipped Foreground) */}
          <div className="ba-image-before">
            <img src="/landscaping/assets/images/ba-patio-before.jpg" alt="Backyard before Alvoratech landscaping intervention" className="ba-img" />
            <span className="ba-label ba-label-before">BEFORE</span>
          </div>

          {/* Draggable Handle */}
          <div className="ba-handle" aria-label="Slider handle">
            <div className="ba-handle-circle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
                <polyline points="9 18 15 12 9 6" transform="translate(6, 0)"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Dynamic Caption */}
        <p className="ba-caption reveal">
          Backyard Transformation: Overgrown unpaved yard transformed into an architectural paver patio with seating & evening lighting.
        </p>

        <div style={{"textAlign":"center","marginTop":"2.5rem"}} className="reveal">
          <a href="#contact" className="btn btn-primary">Start Your Own Property Transformation</a>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         9. WHY CHOOSE ALVORATECH SECTION
         ========================================================================== */}
    <section className="section-padding bg-white" id="portfolio">
      <div className="container-wide">
        <div className="section-header reveal">
          <h2>Recent Landscape & Hardscape Projects</h2>
          <p>
            Browse our handpicked collection of residential estates, custom stone patios, lush gardens, and commercial spaces.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filters reveal">
          <button className="filter-btn active" data-filter="all">All Projects</button>
          <button className="filter-btn" data-filter="hardscaping">Hardscaping</button>
          <button className="filter-btn" data-filter="design">Landscape Design</button>
          <button className="filter-btn" data-filter="lawn">Lawn & Care</button>
          <button className="filter-btn" data-filter="commercial">Commercial</button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-8">
          {/* Item 1 */}
          <div className="gallery-card reveal stagger-1" data-category="design">
            <img src="/landscaping/assets/images/gallery-estate.jpg" alt="Luxury residential landscape estate design" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Landscape Design</span>
              <h4 className="gallery-title">Luxury Private Estate</h4>
            </div>
          </div>

          {/* Item 2 */}
          <div className="gallery-card reveal stagger-2" data-category="hardscaping">
            <img src="/landscaping/assets/images/gallery-pavers.jpg" alt="Architectural interlocking stone paver patio" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardscaping</span>
              <h4 className="gallery-title">Bluestone Living Terrace</h4>
            </div>
          </div>

          {/* Item 3 */}
          <div className="gallery-card reveal stagger-3" data-category="hardscaping">
            <img src="/landscaping/assets/images/gallery-firepit.jpg" alt="Custom outdoor stone fire pit lounge area" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardscaping</span>
              <h4 className="gallery-title">Custom Stone Fire Pit</h4>
            </div>
          </div>

          {/* Item 4 */}
          <div className="gallery-card reveal stagger-4" data-category="lawn">
            <img src="/landscaping/assets/images/gallery-turf.jpg" alt="Manicured golf-grade residential turf" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Lawn & Care</span>
              <h4 className="gallery-title">Golf-Grade Turf Care</h4>
            </div>
          </div>

          {/* Item 5 */}
          <div className="gallery-card reveal stagger-1" data-category="commercial">
            <img src="/landscaping/assets/images/gallery-commercial.jpg" alt="Corporate campus commercial landscape" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h4 className="gallery-title">Corporate Headquarters</h4>
            </div>
          </div>

          {/* Item 6 */}
          <div className="gallery-card reveal stagger-2" data-category="design">
            <img src="/landscaping/assets/images/gallery-waterfall.jpg" alt="Natural stone cascading garden waterfall feature" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Landscape Design</span>
              <h4 className="gallery-title">Natural Cascading Water Feature</h4>
            </div>
          </div>

          {/* Item 7 */}
          <div className="gallery-card reveal stagger-3" data-category="hardscaping">
            <img src="/landscaping/assets/images/gallery-lighting.jpg" alt="Architectural twilight illumination on outdoor terrace" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardscaping</span>
              <h4 className="gallery-title">Architectural Nightscape</h4>
            </div>
          </div>

          {/* Item 8 */}
          <div className="gallery-card reveal stagger-4" data-category="design">
            <img src="/landscaping/assets/images/gallery-garden.jpg" alt="Lush perennial garden with specimen ornamental plantings" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Landscape Design</span>
              <h4 className="gallery-title">Botanical Perennial Garden</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Lightbox Modal */}
    <div className="lightbox-modal" role="dialog" aria-modal="true" aria-label="Portfolio image viewer">
      <div className="lightbox-container">
        <button className="lightbox-close" aria-label="Close modal">×</button>
        <img src="" alt="" className="lightbox-img" />
        <div className="lightbox-caption"></div>
      </div>
    </div>

    {/* ==========================================================================
         12. CUSTOMER TESTIMONIALS SECTION & CAROUSEL
         ========================================================================== */}
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
        <div className="section-header reveal">
          <h2>Everything You Need to Know</h2>
          <p>
            Find answers to common questions about our design approach, hardscape warranties, schedules, and estimates.
          </p>
        </div>

        <div className="faq-container reveal stagger-1">
          {/* Item 1 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How does your 3D landscape design process work?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>We start with a thorough on-site property evaluation, measuring boundaries, grading elevations, and current plantings. Our landscape architecture team then drafts a 3D digital walkthrough showing exact textures, paver colors, mature plant canopies, and evening illumination so you can see your finished space before any work begins.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What type of paver base do you use to prevent sinking or shifting?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>We excavate to virgin subsoil, lay commercial-grade woven geotextile fabric to prevent subgrade contamination, compact dense crushed aggregate stone base in 2-inch lifts with heavy vibratory compactors, screed bedding sand, and secure all edges with heavy-duty concrete bond beams and polymeric locking joint sand.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Do you offer ongoing seasonal maintenance after construction?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. Alvoratech offers comprehensive annual maintenance packages including spring cleanups, core aeration, balanced lawn fertilization, ornamental shrub pruning, mulch replenishment, irrigation winterization and spring startups, and seasonal color rotations.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Is Alvoratech fully licensed, bonded, and insured?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We carry full general liability insurance (\$2,000,000 coverage) and comprehensive workers' compensation on every team member who steps onto your property. Certificates of insurance are provided with every formal estimate.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How long does a typical hardscape or patio project take?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Standard paver patios (400–700 sq ft) generally require 4 to 7 business days from excavation to polymeric sand activation. Larger estate transformations involving multi-level retaining walls, outdoor kitchens, and complete garden installations typically take 2 to 3 weeks depending on weather conditions.</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can you solve yard drainage or foundation standing water problems?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Absolutely. Drainage engineering is one of our core specialties. We design laser-graded swales, install perforated PVC French drains with cleanout ports, bury downspouts to discharge safely away from foundations, and construct dry creek beds that enhance your landscape aesthetically while carrying high storm volume.</p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How do I get an estimate or schedule an initial consultation?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Simply submit the estimate request form below, call us at +1 (412) 796-3968, or click any WhatsApp button to connect immediately with our project scheduling team. We will review your goals and set up a convenient on-site consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         15. CONTACT & ESTIMATE REQUEST SECTION
         ========================================================================== */}
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
        <div className="contact-grid">
          {/* Left Column: Contact Information Card */}
          <div className="contact-info-card reveal">
            <h3>Connect With Alvoratech</h3>
            <p>Ready to start your landscape journey? Reach out to our design and estimating team directly via phone, WhatsApp, or email.</p>

            <div className="contact-channels">
              {/* WhatsApp Channel */}
              <div className="contact-channel-item">
                <div className="channel-icon-box whatsapp-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>WhatsApp / Phone</h4>
                  <a href="tel:+14127963968" className="channel-link">+1 (412) 796-3968</a>
                </div>
              </div>

              {/* Email Channel */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Email Support</h4>
                  <a href="mailto:info@Alvoratechhq.com" className="channel-link">info@Alvoratechhq.com</a>
                </div>
              </div>

              {/* Location Box (Strictly *) */}
              <div className="contact-channel-item">
                <div className="channel-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Location</h4>
                  <span className="channel-link">*</span>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="contact-location-box">
              <div className="contact-location-label">Business Hours</div>
              <div style={{"fontSize":"0.95rem","color":"var(--color-navy)","fontWeight":"600"}}>
                Monday – Saturday: 7:00 AM – 6:00 PM <br />
                <span style={{"color":"var(--color-text-muted)","fontWeight":"normal"}}>Sunday: Emergency Property Response</span>
              </div>
            </div>

            <div style={{"marginTop":"1.75rem"}}>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{"width":"100%"}}>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Estimate Request Form */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Request Your Free Property Estimate</h3>
            <p>Fill out the details below. Submitting will immediately generate a customized WhatsApp summary for our landscape estimators.</p>

            <div id="formStatus" className="form-status" role="alert"></div>

            <form id="estimateForm" novalidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input type="text" id="fullName" className="form-input" placeholder="e.g. Robert Anderson" required />
                  <span id="fullNameError" className="form-error">Please enter your full name.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" className="form-input" placeholder="e.g. +1 (412) 555-0192" required />
                  <span id="phoneError" className="form-error">Please enter a valid telephone number.</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" className="form-input" placeholder="e.g. robert@example.com" required />
                  <span id="emailError" className="form-error">Please enter a valid email address.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type</label>
                  <select id="propertyType" className="form-select">
                    <option value="residential">Residential Estate</option>
                    <option value="commercial">Commercial / Corporate Campus</option>
                    <option value="hoa">HOA / Multi-Family Community</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceNeeded" className="form-label">Primary Service Required *</label>
                <select id="serviceNeeded" className="form-select" required>
                  <option value="">-- Select a Landscaping Service --</option>
                  <option value="hardscape">Custom Hardscaping & Paver Patios</option>
                  <option value="design">Landscape Architecture & 3D Design</option>
                  <option value="retaining_wall">Retaining Walls & Slope Grading</option>
                  <option value="lawn_care">Lawn Care & Turf Management</option>
                  <option value="irrigation">Smart Irrigation & French Drains</option>
                  <option value="planting">Specimen Tree & Shrub Planting</option>
                  <option value="lighting">Architectural Outdoor Night Lighting</option>
                  <option value="commercial">Commercial Grounds Maintenance</option>
                </select>
                <span id="serviceError" className="form-error">Please select a service.</span>
              </div>

              <div className="form-group">
                <label htmlFor="projectDetails" className="form-label">Project Details / Goals</label>
                <textarea id="projectDetails" className="form-textarea" placeholder="Describe your yard dimensions, desired features (fire pit, patio, turf aeration), or current drainage issues..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                Submit Free Estimate Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="form-notice">
                🔒 Privacy guaranteed. Your contact information is never shared with third parties.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
          </>
        )}
      </main>
  <footer className="site-footer" role="contentinfo">
    <div className="container-wide">
      <div className="footer-grid">
        {/* Brand Info */}
        <div className="footer-col-brand">
          <a href="#hero" onClick={(e) => navigateTo('home', e)} className="site-logo">
            <div className="logo-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <span className="logo-text">ALVORATECH</span>
          </a>
          <p>
            Alvoratech is an elite American landscaping, hardscaping, and grounds management firm dedicated to transforming residential estates and commercial properties through timeless masonry, horticultural science, and 3D architectural design.
          </p>
        </div>

        {/* Quick Services */}
        <div>
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Landscape Architecture</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Custom Paver Patios</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Retaining Walls & Grading</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Lawn Care & Aeration</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Smart Irrigation & Drainage</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Specimen Tree Planting</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Outdoor Night Lighting</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Grounds</a></li>
          </ul>
        </div>

        {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero" onClick={(e) => navigateTo('home', e)} className="footer-link">Home</a></li>
              <li><a href="#about" onClick={(e) => navigateTo('about', e)} className="footer-link">About Us</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Services</a></li>
              <li><a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="footer-link">Gallery</a></li>
              <li><a href="#contact" onClick={(e) => navigateTo('contact', e)} className="footer-link">Contact</a></li>
            </ul>
          </div>

        {/* Contact Col */}
        <div>
          <h4 className="footer-heading">Contact Information</h4>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{"color":"var(--color-leaf)","flexShrink":"0"}}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <a href="tel:+14127963968" className="footer-link">+1 (412) 796-3968</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-leaf)","flexShrink":"0"}}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@Alvoratechhq.com" className="footer-link">info@Alvoratechhq.com</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-leaf)","flexShrink":"0"}}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>*</span>
          </div>
          <div style={{"marginTop":"1.25rem"}}>
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              WhatsApp Direct Chat
            </a>
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
          © 2026 Alvoratech Landscaping & Grounds Care. All rights reserved.
        </div>
        <div>
          Demonstration Website • Location: * • Designed for Excellence
        </div>
      </div>
    </div>
  </footer>

  {/* ==========================================================================
       18. FIXED FLOATING WHATSAPP BANNER (STRICT: ONLY WHATSAPP ICON & PHONE NUMBER)
       ========================================================================== */}
  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="fixed-whatsapp-banner" aria-label="Chat with Alvoratech on WhatsApp">
    <svg className="fixed-whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span className="fixed-whatsapp-text">+1 (412) 796-3968</span>
  </a>

  {/* Script File */}
  

    </div>
  );
}
