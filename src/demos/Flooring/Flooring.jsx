import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './flooring.css';

export default function Flooring() {
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
 * ALVORATECH – Premium Flooring Installation & Refinishing Website
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
    living: {
      before: '/flooring/assets/images/ba-living-before.jpg',
      after: '/flooring/assets/images/ba-living-after.jpg',
      caption: 'Living Room Transformation: Stained wall-to-wall carpet replaced with 7.5" wire-brushed European White Oak wide-plank hardwood.'
    },
    kitchen: {
      before: '/flooring/assets/images/ba-kitchen-before.jpg',
      after: '/flooring/assets/images/ba-kitchen-after.jpg',
      caption: 'Kitchen Transformation: Dated linoleum sheet replaced with polished 24x48 rectified Calacatta marble porcelain tile.'
    },
    basement: {
      before: '/flooring/assets/images/ba-basement-before.jpg',
      after: '/flooring/assets/images/ba-basement-after.jpg',
      caption: 'Basement Transformation: Cold uneven concrete floor leveled and finished with 100% waterproof rigid core luxury vinyl plank (LVP).'
    },
    historic: {
      before: '/flooring/assets/images/ba-historic-before.jpg',
      after: '/flooring/assets/images/ba-historic-after.jpg',
      caption: 'Historic Floor Restoration: Deeply scratched 60-year-old pine floor restored via 99.8% dustless sanding and warm satin walnut stain.'
    },
    foyer: {
      before: '/flooring/assets/images/ba-foyer-before.jpg',
      after: '/flooring/assets/images/ba-foyer-after.jpg',
      caption: 'Grand Foyer: Standard straight planks upgraded to architectural double-border French herringbone natural oak parquet.'
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

    // Touch Events
    baHandle.addEventListener('touchstart', () => {
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

  const openLightbox = (imgSrc, captionText) => {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = imgSrc;
    if (lightboxCaption) {
      lightboxCaption.textContent = captionText || 'Alvoratech Flooring Project';
    }
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.gallery-image');
      const title = card.querySelector('.gallery-title');
      const tag = card.querySelector('.gallery-tag');
      const fullCaption = tag && title ? `${tag.textContent} — ${title.textContent}` : (title ? title.textContent : '');
      if (img) {
        openLightbox(img.src, fullCaption);
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

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

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

  // Touch swipe support
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

        // Close others
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.style.maxHeight = '0px';
          }
        });

        // Toggle current
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
     9. IN-HOME ESTIMATE FORM VALIDATION & DIRECT WHATSAPP INTEGRATION
     ========================================================================== */
  const estimateForm = document.getElementById('estimateForm');
  const formStatus = document.getElementById('formStatus');

  if (estimateForm) {
    estimateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phoneNumber');
      const emailInput = document.getElementById('emailAddress');
      const flooringSelect = document.getElementById('flooringType');
      const sqftSelect = document.getElementById('sqftRange');
      const roomDetails = document.getElementById('projectDetails');

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
        if (errEl) errEl.classList.remove('visible');
      };

      // Full Name Validation
      if (!nameInput || !nameInput.value.trim() || nameInput.value.trim().length < 2) {
        setError(nameInput, 'fullNameError', 'Please enter your full name.');
      } else {
        clearError(nameInput, 'fullNameError');
      }

      // Phone Validation
      const phoneClean = phoneInput ? phoneInput.value.replace(/[^0-9]/g, '') : '';
      if (!phoneInput || phoneClean.length < 7) {
        setError(phoneInput, 'phoneError', 'Please enter a valid telephone number.');
      } else {
        clearError(phoneInput, 'phoneError');
      }

      // Email Validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, 'emailError', 'Please enter a valid email address.');
      } else {
        clearError(emailInput, 'emailError');
      }

      // Flooring Selection Validation
      if (!flooringSelect || !flooringSelect.value) {
        setError(flooringSelect, 'flooringError', 'Please select a flooring type.');
      } else {
        clearError(flooringSelect, 'flooringError');
      }

      if (!isValid) return;

      const customerName = nameInput.value.trim();
      const customerPhone = phoneInput.value.trim();
      const customerEmail = emailInput.value.trim();
      const selectedFlooring = flooringSelect.options[flooringSelect.selectedIndex].text;
      const selectedSqft = sqftSelect && sqftSelect.value ? sqftSelect.options[sqftSelect.selectedIndex].text : 'Not sure';
      const notes = roomDetails && roomDetails.value.trim() ? roomDetails.value.trim() : 'None provided';

      const waMessage = 
        `Hello Alvoratech Flooring!\n` +
        `I would like to schedule an In-Home Estimate:\n\n` +
        `• Name: ${customerName}\n` +
        `• Phone: ${customerPhone}\n` +
        `• Email: ${customerEmail}\n` +
        `• Flooring Type: ${selectedFlooring}\n` +
        `• Estimated Area: ${selectedSqft}\n` +
        `• Project Notes: ${notes}`;

      const waUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(waMessage)}`;

      if (formStatus) {
        formStatus.textContent = 'Thank you! Redirecting your request directly to Alvoratech WhatsApp...';
        formStatus.classList.add('success');
      }

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        estimateForm.reset();
        setTimeout(() => {
          if (formStatus) formStatus.classList.remove('success');
        }, 6000);
      }, 700);
    });

    ['fullName', 'phoneNumber', 'emailAddress', 'flooringType'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('is-invalid');
          const errEl = document.getElementById(`${id}Error`.replace('Address', '').replace('Type', ''));
          if (errEl) errEl.classList.remove('visible');
        });
      }
    });
  }

}; runInit();

    } catch (err) {
      console.warn('Interactive script error in Flooring:', err);
    }
  }, []);

  return (
    <div className="flooring-demo" id="top">
      <DemoTopBar demoName="Alvoratech Flooring Specialists" />
      

  {/* ==========================================================================
       2. STICKY HEADER & NAVIGATION
       ========================================================================== */}
  <header className="site-header" role="banner">
    <div className="container-wide">
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" onClick={(e) => navigateTo('home', e)} className="site-logo" aria-label="Alvoratech Home">
          <div className="logo-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3z"/>
              <path d="M3 9h18"/>
              <path d="M3 15h18"/>
              <path d="M9 3v6"/>
              <path d="M15 9v6"/>
              <path d="M9 15v6"/>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" role="navigation" aria-label="Main Navigation">
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="nav-link">Services</a>
          <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">About Us</a>
          <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">Why Us</a>
          <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="nav-link">Portfolio</a>
          <a href="#faq" onClick={(e) => navigateTo('faq', e)} className="nav-link">FAQ</a>
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="nav-link">Contact</a>
        </nav>

        {/* Nav CTA Actions */}
        <div className="nav-actions">
          <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">Schedule In-Home Estimate</a>
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
      <span className="mobile-drawer-title">Flooring Menu</span>
      <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
        &times;
      </button>
    </div>
    <a  href="#hero" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="nav-link">Home</a>
    <a  href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} className="nav-link">Flooring Services</a>
    <a  href="#why-us" onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} className="nav-link">About Us</a>
    <a  href="#portfolio" onClick={(e) => { setMobileMenuOpen(false); navigateTo('portfolio', e); }} className="nav-link">Portfolio Gallery</a>
    <a  href="#faq" onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} className="nav-link">FAQ</a>
    <a  href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="nav-link">Contact & Estimate</a>
    <a  href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{"marginTop":"1rem"}}>
      <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Chat with Us
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
              {currentView === 'about' && 'About Alvoratech'}
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
      <div className="wood-particle plank-1" aria-hidden="true"></div>
      <div className="wood-particle plank-2" aria-hidden="true"></div>
      <div className="wood-particle plank-3" aria-hidden="true"></div>
      <div className="wood-particle plank-4" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-content reveal">
            
            <h1 className="hero-title">
              Flawless Floors. <br />
              <span className="text-gradient">Timeless Craftsmanship.</span>
            </h1>
            <p className="hero-description">
              From luxury wide-plank hardwood and 100% waterproof luxury vinyl plank (LVP) to artisan tile and 99.8% dustless hardwood refinishing. Alvoratech brings over 200 physical samples straight to your home lighting with precision laser installation.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-lg">Schedule In-Home Estimate</a>
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
                NWFA Certified Installers
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                Mobile Showroom Service
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Lifetime Installation Warranty
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-media-wrapper reveal stagger-1">
            <div className="hero-image-container">
              <img src="/flooring/assets/images/floor-hero.jpg" alt="Luxury European wide-plank white oak hardwood floor by Alvoratech" className="hero-image" width="700" height="490" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         4. TRUST INDICATORS (HORIZONTAL VALUE BAR)
         ========================================================================== */}
    <section className="trust-section" aria-label="Why trust Alvoratech Flooring">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Shop-at-Home Showroom</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>We bring 200+ physical samples directly to your home lighting.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Certified Master Craftsmen</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>NWFA & CFI installation standards with subfloor laser leveling.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">99.8% Dustless Sanding</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>HEPA filtration containment keeps your home spotless and odor-free.</p>
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
              <div className="trust-item-title">Lifetime Installation Warranty</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Zero buckling, gap, or squeak guarantee on all certified installs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         5. ABOUT ALVORATECH SECTION
         ========================================================================== */}
    <section className="section-padding bg-sand" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-media reveal">
            <div className="about-image-wrapper">
              <img src="/flooring/assets/images/floor-about.jpg" alt="Alvoratech master craftsman laying architectural hardwood planks" className="about-image" width="600" height="490" />
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal stagger-1">
            <h2>Architectural Precision. <br />Crafted From The Foundation Up.</h2>
            <p>
              At Alvoratech, we know that breathtaking floors begin beneath the surface. While typical contractors rush to lay planks over irregular subfloors, our master installers conduct comprehensive digital moisture profiling, laser grade leveling, and acoustic decoupling to ensure your floors remain dead flat, quiet, and stunning for decades.
            </p>
            <p>
              Whether you are curating European wide-plank white oak for a custom residence, upgrading to 100% waterproof rigid core luxury vinyl plank (LVP), or reviving historical hardwoods with dustless restoration, we handle furniture moving, existing floor haul-away, and final trim work seamlessly.
            </p>

            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Precision Subfloor Preparation</h4>
                  <p>Self-leveling underlayment and digital planar mapping guarantee the NWFA standard of 3/16" flatness across a 10-foot radius.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Digital Moisture Profiling</h4>
                  <p>Pinless capacitive moisture testing across concrete and plywood prevents cupping, crowning, and post-installation plank failure.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>White-Glove Furniture & Clean Service</h4>
                  <p>Our crews carefully move your heavy furniture, haul away old carpet or tile, and leave your home spotless each evening.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              Book an In-Home Consultation
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
         6. CORE FLOORING SERVICES (8 SERVICES)
         ========================================================================== */}
    <section className="section-padding bg-white testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <h2>What Homeowners Say About Alvoratech</h2>
        </div>

        <div className="testimonials-carousel-wrapper reveal stagger-1">
          <div className="testimonials-slider">
            <div className="testimonials-track">
              {/* Slide 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "Alvoratech replaced 2,200 sq. ft. of old carpet with European White Oak in our open-concept home. The mobile showroom made selecting the right wood stain effortless in our natural sunlight. Their crew showed up at 7:30 sharp, leveled our uneven subfloor, and the finished floor is completely quiet and breathtaking."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Jonathan & Claire Sterling</span>
                    <span className="author-role">Residential Homeowners</span>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "We had our 1920s original oak floors refinished. I was terrified of sawdust settling in my kitchen cabinets, but Alvoratech's dustless sanding system had zero airborne residue! The satin walnut finish brought historical richness back to life. Highly recommend their master installers."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Rachel Kensington</span>
                    <span className="author-role">Historic Home Renovation</span>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "With three large golden retrievers, we needed 100% waterproof flooring for our finished walkout basement. Alvoratech installed rigid core LVP with flush stair nosing. It looks exactly like genuine hardwood, has resisted claws and water spills completely, and felt solid underfoot from day one."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Michael & Brenda Hayes</span>
                    <span className="author-role">Pet-Friendly Basement Upgrade</span>
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
         14. SPECIAL CALL-TO-ACTION SECTION
         ========================================================================== */}
    <section className="special-cta-section" aria-label="Call to action">
      <div className="special-cta-content reveal">
        <h2>Transform Your Home From The Ground Up</h2>
        <p>
          From sample selection in your living room to precision laser installation and guaranteed lifetime durability. Connect with Alvoratech today for your free on-site design consultation and estimate.
        </p>
        <div className="hero-actions" style={{"justifyContent":"center"}}>
          <a href="#contact" className="btn btn-primary btn-lg">Schedule In-Home Estimate</a>
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
         15. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
         ========================================================================== */}
    <section className="section-padding bg-white" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Info Card */}
          <div className="contact-info-card reveal">
            <h3>Connect With Alvoratech</h3>
            <p>Ready to select your dream floors? Contact our master estimating and installation team directly via phone, WhatsApp, or email.</p>

            <div className="contact-channels">
              {/* WhatsApp / Phone */}
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

              {/* Email */}
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

              {/* Location (Strictly *) */}
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

            {/* Hours */}
            <div className="contact-location-box">
              <div className="contact-location-label">Operating Hours</div>
              <div style={{"fontSize":"0.95rem","color":"var(--color-navy)","fontWeight":"600"}}>
                Monday – Saturday: 7:00 AM – 6:00 PM <br />
                <span style={{"color":"var(--color-text-muted)","fontWeight":"normal"}}>Sunday: In-Home Design Consultations By Appointment</span>
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

          {/* Right Column: Interactive Estimate Form */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Schedule Your In-Home Flooring Estimate</h3>
            <p>Tell us about your space. Submitting instantly generates a customized WhatsApp request with our scheduling manager.</p>

            <div id="formStatus" className="form-status" role="alert"></div>

            <form id="estimateForm" novalidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input type="text" id="fullName" className="form-input" placeholder="e.g. William Harrington" required />
                  <span id="fullNameError" className="form-error">Please enter your full name.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" className="form-input" placeholder="e.g. +1 (412) 555-0144" required />
                  <span id="phoneError" className="form-error">Please enter a valid telephone number.</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" className="form-input" placeholder="e.g. william@example.com" required />
                  <span id="emailError" className="form-error">Please enter a valid email address.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="sqftRange" className="form-label">Estimated Area (Sq. Ft.)</label>
                  <select id="sqftRange" className="form-select">
                    <option value="under500">Under 500 sq. ft. (1-2 Rooms)</option>
                    <option value="500-1000">500 – 1,000 sq. ft. (Partial Home / Floor)</option>
                    <option value="1000-2500">1,000 – 2,500 sq. ft. (Full Main Level)</option>
                    <option value="2500plus">2,500+ sq. ft. (Entire Home / Commercial)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="flooringType" className="form-label">Flooring Type Required *</label>
                <select id="flooringType" className="form-select" required>
                  <option value="">-- Select Desired Flooring Solution --</option>
                  <option value="hardwood">Solid & Engineered Hardwood Installation</option>
                  <option value="lvp">Luxury Vinyl Plank (LVP / EVP) 100% Waterproof</option>
                  <option value="tile">Porcelain, Ceramic & Marble Tile</option>
                  <option value="refinish">Dustless Hardwood Sanding & Refinishing</option>
                  <option value="laminate">Waterproof High-Performance Laminate</option>
                  <option value="stairs">Custom Hardwood Staircases & Moldings</option>
                  <option value="commercial">Commercial Flooring Solutions</option>
                  <option value="subfloor">Subfloor Repair & Laser Self-Leveling</option>
                </select>
                <span id="flooringError" className="form-error">Please select a flooring type.</span>
              </div>

              <div className="form-group">
                <label htmlFor="projectDetails" className="form-label">Room Details / Goals</label>
                <textarea id="projectDetails" className="form-textarea" placeholder="Mention rooms (living, kitchen, basement), current floor type (carpet, tile, vinyl), and if you have pets or subfloor concerns..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                Submit Free Estimate Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="form-notice">
                🔒 Privacy guaranteed. Your contact details are never shared with external parties.
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
          <h2>Artisan Flooring Solutions for Every Room</h2>
          <p>
            Whether creating seamless open-concept hardwoods, pet-proof waterproof vinyl, or spa-inspired porcelain tile, explore our certified installation specialties.
          </p>
        </div>

        <div className="services-grid-8">
          {/* Service 1 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-hardwood.jpg" alt="Solid and engineered hardwood floor installation" className="service-image" loading="lazy" />
              <span className="service-badge">Luxury Hardwood</span>
            </div>
            <div className="service-content">
              <h3>Solid & Engineered Hardwood</h3>
              <p>Premium 7.5" and 9" European White Oak, American Walnut, and Hickory. Precision tongue-and-groove blind nailing and acoustic glue-assist.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Hardwood%20Flooring%20Installation" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Hardwood Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 2 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-lvp.jpg" alt="100% waterproof luxury vinyl plank LVP flooring" className="service-image" loading="lazy" />
              <span className="service-badge">100% Waterproof</span>
            </div>
            <div className="service-content">
              <h3>Luxury Vinyl Plank (LVP / EVP)</h3>
              <p>Commercial-grade 20mil and 30mil wear layers with rigid stone polymer cores (SPC). 100% waterproof, pet-proof, and kid-proof resilience.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Luxury%20Vinyl%20Plank%20(LVP)%20Installation" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request LVP Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 3 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-tile.jpg" alt="Porcelain ceramic and marble tile installation" className="service-image" loading="lazy" />
              <span className="service-badge">Porcelain & Marble</span>
            </div>
            <div className="service-content">
              <h3>Porcelain, Ceramic & Marble Tile</h3>
              <p>Large-format rectified 24x48 porcelain, herringbone kitchen backsplashes, heated floor membranes, and stain-resistant epoxy grouts.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Tile%20Flooring%20Installation" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Tile Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 4 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-refinishing.jpg" alt="Dustless hardwood floor sanding and refinishing" className="service-image" loading="lazy" />
              <span className="service-badge">Dustless Sanding</span>
            </div>
            <div className="service-content">
              <h3>Dustless Sanding & Refinishing</h3>
              <p>Atomic HEPA dust containment removes 99.8% of airborne particulates. Custom on-floor stain sampling and commercial waterborne polyurethanes.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Dustless%20Hardwood%20Refinishing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Refinishing Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 5 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-laminate.jpg" alt="Waterproof laminate flooring installation" className="service-image" loading="lazy" />
              <span className="service-badge">High Performance</span>
            </div>
            <div className="service-content">
              <h3>Waterproof Laminate Flooring</h3>
              <p>Next-generation high-density core laminates featuring real wood embossing, deep spill protection, and superior scratch durability for active pets.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Waterproof%20Laminate%20Flooring" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Laminate Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 6 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-stairs.jpg" alt="Custom hardwood staircase treads risers and nosing" className="service-image" loading="lazy" />
              <span className="service-badge">Stairs & Trim</span>
            </div>
            <div className="service-content">
              <h3>Custom Staircases & Moldings</h3>
              <p>Solid bullnose treads, painted or matching wood risers, flush-mount reducers, T-moldings, and handcrafted architectural baseboards.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Custom%20Staircase%20%26%20Trim%20Work" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Staircase Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 7 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-commercial.jpg" alt="Commercial flooring and acoustic soundproof subfloors" className="service-image" loading="lazy" />
              <span className="service-badge">Commercial Grade</span>
            </div>
            <div className="service-content">
              <h3>Commercial Flooring Solutions</h3>
              <p>Heavy traffic glue-down vinyl plank, acoustic IIC sound-dampening underlayments, resilient sheet flooring, and executive office suites.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Commercial%20Flooring%20Solutions" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Commercial RFP
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 8 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/flooring/assets/images/service-subfloor.jpg" alt="Subfloor leveling repair and moisture barrier mitigation" className="service-image" loading="lazy" />
              <span className="service-badge">Subfloor Prep</span>
            </div>
            <div className="service-content">
              <h3>Subfloor Repair & Self-Leveling</h3>
              <p>Plywood joist leveling, epoxy moisture vapor barriers, crack isolation membranes, and self-leveling cement compounds for dead-flat perfection.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Subfloor%20Leveling%20%26%20Repair" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Subfloor Evaluation
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
    <section className="section-padding bg-white" id="process">
      <div className="container">
        <div className="section-header reveal">
          <h2>Our 4-Step Flooring Process</h2>
          <p>
            Experience a stress-free path from sample selection to your finished, hand-wiped new floors.
          </p>
        </div>

        <div className="steps-timeline">
          {/* Step 1 */}
          <div className="step-item reveal stagger-1">
            <div className="step-number-box">01</div>
            <h3>In-Home Consultation</h3>
            <p>Our mobile showroom arrives at your door with 200+ samples so you can see textures in your actual room lighting.</p>
          </div>

          {/* Step 2 */}
          <div className="step-item reveal stagger-2">
            <div className="step-number-box">02</div>
            <h3>Laser Measuring & Moisture Check</h3>
            <p>We calculate exact square footage, test subfloor moisture levels, and give you an all-inclusive line-item proposal.</p>
          </div>

          {/* Step 3 */}
          <div className="step-item reveal stagger-3">
            <div className="step-number-box">03</div>
            <h3>Artisan Installation</h3>
            <p>Certified master installers level the subfloor, install moisture barriers, and lay planks with millimeter precision.</p>
          </div>

          {/* Step 4 */}
          <div className="step-item reveal stagger-4">
            <div className="step-number-box">04</div>
            <h3>Walkthrough & Warranty</h3>
            <p>We clean the space, vacuum, inspect every transition with you, and hand you your Lifetime Installation Certificate.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         12. OUR WORK PORTFOLIO GALLERY & LIGHTBOX
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
    <section className="section-padding bg-sand" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-media reveal">
            <div className="about-image-wrapper">
              <img src="/flooring/assets/images/floor-about.jpg" alt="Alvoratech master craftsman laying architectural hardwood planks" className="about-image" width="600" height="490" />
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal stagger-1">
            <h2>Architectural Precision. <br />Crafted From The Foundation Up.</h2>
            <p>
              At Alvoratech, we know that breathtaking floors begin beneath the surface. While typical contractors rush to lay planks over irregular subfloors, our master installers conduct comprehensive digital moisture profiling, laser grade leveling, and acoustic decoupling to ensure your floors remain dead flat, quiet, and stunning for decades.
            </p>
            <p>
              Whether you are curating European wide-plank white oak for a custom residence, upgrading to 100% waterproof rigid core luxury vinyl plank (LVP), or reviving historical hardwoods with dustless restoration, we handle furniture moving, existing floor haul-away, and final trim work seamlessly.
            </p>

            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Precision Subfloor Preparation</h4>
                  <p>Self-leveling underlayment and digital planar mapping guarantee the NWFA standard of 3/16" flatness across a 10-foot radius.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Digital Moisture Profiling</h4>
                  <p>Pinless capacitive moisture testing across concrete and plywood prevents cupping, crowning, and post-installation plank failure.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>White-Glove Furniture & Clean Service</h4>
                  <p>Our crews carefully move your heavy furniture, haul away old carpet or tile, and leave your home spotless each evening.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              Book an In-Home Consultation
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
         6. CORE FLOORING SERVICES (8 SERVICES)
         ========================================================================== */}
    <section className="section-padding bg-sand" id="why-us">
      <div className="container">
        <div className="why-grid">
          {/* Left Media */}
          <div className="why-image-wrapper reveal">
            <img src="/flooring/assets/images/floor-why.jpg" alt="Alvoratech premium flooring craftsmanship and laser leveling" className="why-image" width="600" height="520" />
          </div>

          {/* Right Content */}
          <div className="why-content reveal stagger-1">
            <h2>Why Homeowners and Designers Trust Alvoratech</h2>
            <p>
              We treat floor installation with architectural discipline. From our in-home mobile showroom to our certified dustless containment, your satisfaction is guaranteed.
            </p>

            <div className="why-benefits-grid">
              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h4>Fully Licensed & Insured</h4>
                <p>\$2M comprehensive liability coverage protecting your home and family at every stage.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
                <h4>Laser Subfloor Leveling</h4>
                <p>We grind down high points and fill low spots to eliminate creaks, hollow spots, and bounce.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                </div>
                <h4>99.8% Dustless HEPA Sanding</h4>
                <p>No dust on your walls, HVAC ducts, or furniture during hardwood refinishing.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                </div>
                <h4>Furniture Moving & Haul Away</h4>
                <p>Full-service turnkey care: we move heavy items and haul away old carpeting responsibly.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                </div>
                <h4>Transparent Sq. Ft. Pricing</h4>
                <p>Detailed written proposals including underlayment, transitions, and shoe moldings.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4>Lifetime Installation Warranty</h4>
                <p>Unconditional craftsmanship guarantee against plank buckling, gapping, or separation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         11. HOW IT WORKS (OUR 4-STEP CLIENT JOURNEY)
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
    <section className="section-padding bg-sand ba-section" id="transformations">
      <div className="container">
        <div className="section-header reveal">
          <h2>Witness the Power of Professional Flooring</h2>
          <p>
            Drag the interactive slider handle left and right to inspect real-world floor replacements and dustless refinishing transformations completed by Alvoratech crews.
          </p>
        </div>

        {/* Before-After Category Tabs */}
        <div className="ba-tabs reveal">
          <button className="ba-tab-btn active" data-tab="living">Living Room</button>
          <button className="ba-tab-btn" data-tab="kitchen">Kitchen Tile</button>
          <button className="ba-tab-btn" data-tab="basement">Basement LVP</button>
          <button className="ba-tab-btn" data-tab="historic">Historic Refinish</button>
          <button className="ba-tab-btn" data-tab="foyer">Grand Foyer</button>
        </div>

        {/* Interactive Slider Box */}
        <div className="ba-slider-container reveal stagger-1" aria-label="Before and after flooring transformation comparison slider">
          {/* After (Background) */}
          <div className="ba-image-wrapper ba-image-after">
            <img src="/flooring/assets/images/ba-living-after.jpg" alt="Living room with 7.5 inch European White Oak hardwood floor installed by Alvoratech" className="ba-img" />
            <span className="ba-label ba-label-after">AFTER</span>
          </div>

          {/* Before (Clipped Foreground) */}
          <div className="ba-image-before">
            <img src="/flooring/assets/images/ba-living-before.jpg" alt="Living room before Alvoratech flooring installation with old worn carpet" className="ba-img" />
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
          Living Room Transformation: Stained wall-to-wall carpet replaced with 7.5" wire-brushed European White Oak wide-plank hardwood.
        </p>

        <div style={{"textAlign":"center","marginTop":"2.5rem"}} className="reveal">
          <a href="#contact" className="btn btn-primary">Start Your Own Floor Transformation</a>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         9. FLOORING MATERIAL COMPARISON GUIDE
         ========================================================================== */}
    <section className="section-padding bg-white" id="guide">
      <div className="container">
        <div className="section-header reveal">
          <h2>Which Flooring is Right for Your Lifestyle?</h2>
          <p>
            Compare durability, water resistance, pet friendliness, and room recommendations across our most popular residential flooring types.
          </p>
        </div>

        <div className="material-table-wrapper reveal stagger-1">
          <table className="material-table">
            <thead>
              <tr>
                <th>Flooring Type</th>
                <th>Water Resistance</th>
                <th>Pet & Scratch Durability</th>
                <th>Lifespan</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="material-name">Engineered Hardwood</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Real wood veneer with cross-grain ply core</div>
                </td>
                <td><span className="material-tag tag-good">Moderate (Spill Guard)</span></td>
                <td><span className="material-tag tag-good">High (Aluminum Oxide)</span></td>
                <td>50+ Years (Can Sand 2-3x)</td>
                <td>Living Rooms, Bedrooms, Dining, Upper Floors</td>
              </tr>
              <tr>
                <td>
                  <div className="material-name">Solid Hardwood</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>3/4" solid domestic & exotic timber</div>
                </td>
                <td><span className="material-tag tag-moderate">Low (Moisture Sensitive)</span></td>
                <td><span className="material-tag tag-good">High (Refinishable)</span></td>
                <td>100+ Years (Sand 6-8x)</td>
                <td>Historic Estates, Above-Grade Living Spaces</td>
              </tr>
              <tr>
                <td>
                  <div className="material-name">Luxury Vinyl Plank (LVP)</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Rigid stone polymer core (SPC) + 20mil wear</div>
                </td>
                <td><span className="material-tag tag-excellent">100% Waterproof</span></td>
                <td><span className="material-tag tag-excellent">Maximum (Pet Proof)</span></td>
                <td>25 – 30 Years</td>
                <td>Basements, Kitchens, Bathrooms, Mudrooms</td>
              </tr>
              <tr>
                <td>
                  <div className="material-name">Porcelain & Ceramic Tile</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Fired dense clay with glazed porcelain surface</div>
                </td>
                <td><span className="material-tag tag-excellent">100% Waterproof</span></td>
                <td><span className="material-tag tag-excellent">Maximum (Claw Proof)</span></td>
                <td>50+ Years</td>
                <td>Showers, Bathrooms, Entryways, Heated Floors</td>
              </tr>
              <tr>
                <td>
                  <div className="material-name">Waterproof Laminate</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>High-density fiberboard with resin finish</div>
                </td>
                <td><span className="material-tag tag-good">Topical Spill Proof (72h)</span></td>
                <td><span className="material-tag tag-excellent">Superior Scratch Guard</span></td>
                <td>20 – 25 Years</td>
                <td>Active Family Rooms, Hallways, Rental Homes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         10. WHY CHOOSE ALVORATECH SECTION
         ========================================================================== */}
    <section className="section-padding bg-sand" id="portfolio">
      <div className="container-wide">
        <div className="section-header reveal">
          <h2>Recent Flooring & Refinishing Projects</h2>
          <p>
            Browse our handpicked portfolio of residential homes, custom staircases, luxury master suites, and commercial spaces.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filters reveal">
          <button className="filter-btn active" data-filter="all">All Projects</button>
          <button className="filter-btn" data-filter="hardwood">Hardwood</button>
          <button className="filter-btn" data-filter="lvp">Luxury Vinyl</button>
          <button className="filter-btn" data-filter="tile">Tile</button>
          <button className="filter-btn" data-filter="refinish">Refinishing</button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-8">
          {/* Item 1 */}
          <div className="gallery-card reveal stagger-1" data-category="hardwood">
            <img src="/flooring/assets/images/gallery-herringbone.jpg" alt="French herringbone natural oak parquet installation" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardwood</span>
              <h4 className="gallery-title">French Herringbone Parquet</h4>
            </div>
          </div>

          {/* Item 2 */}
          <div className="gallery-card reveal stagger-2" data-category="hardwood">
            <img src="/flooring/assets/images/gallery-oak.jpg" alt="7.5 inch wide plank white oak hardwood in modern home" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardwood</span>
              <h4 className="gallery-title">Wide-Plank European White Oak</h4>
            </div>
          </div>

          {/* Item 3 */}
          <div className="gallery-card reveal stagger-3" data-category="lvp">
            <img src="/flooring/assets/images/gallery-lvp.jpg" alt="100 percent waterproof coastal rigid core luxury vinyl plank" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Luxury Vinyl</span>
              <h4 className="gallery-title">Coastal Rigid Core LVP</h4>
            </div>
          </div>

          {/* Item 4 */}
          <div className="gallery-card reveal stagger-4" data-category="tile">
            <img src="/flooring/assets/images/gallery-bath-tile.jpg" alt="Large format porcelain tile in master luxury bath" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Tile</span>
              <h4 className="gallery-title">Calacatta Porcelain Master Bath</h4>
            </div>
          </div>

          {/* Item 5 */}
          <div className="gallery-card reveal stagger-1" data-category="refinish">
            <img src="/flooring/assets/images/gallery-refinish.jpg" alt="Dustless sanding and custom walnut stain refinish" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Refinishing</span>
              <h4 className="gallery-title">Custom Satin Walnut Refinish</h4>
            </div>
          </div>

          {/* Item 6 */}
          <div className="gallery-card reveal stagger-2" data-category="hardwood">
            <img src="/flooring/assets/images/gallery-stairs.jpg" alt="Custom hardwood floating staircase treads and risers" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardwood</span>
              <h4 className="gallery-title">Solid White Oak Floating Stairs</h4>
            </div>
          </div>

          {/* Item 7 */}
          <div className="gallery-card reveal stagger-3" data-category="lvp">
            <img src="/flooring/assets/images/gallery-commercial.jpg" alt="Executive office commercial vinyl flooring" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial LVP</span>
              <h4 className="gallery-title">Executive Corporate Suite</h4>
            </div>
          </div>

          {/* Item 8 */}
          <div className="gallery-card reveal stagger-4" data-category="hardwood">
            <img src="/flooring/assets/images/gallery-chevron.jpg" alt="Hungarian chevron patterned wood floor in dining hall" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Hardwood</span>
              <h4 className="gallery-title">Architectural Hungarian Chevron</h4>
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
         13. CUSTOMER TESTIMONIALS SECTION & CAROUSEL
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
    <section className="section-padding bg-sand" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <h2>Frequently Asked Questions</h2>
          <p>
            Find clear answers about acclimatization, subfloor leveling, dustless sanding, and our lifetime installation warranty.
          </p>
        </div>

        <div className="faq-container reveal stagger-1">
          {/* Item 1 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How long does hardwood need to acclimate inside my home?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Solid and engineered hardwood planks typically require 48 to 72 hours of indoor acclimatization with your HVAC running at normal living temperatures (65°–75°F and 35–55% relative humidity). Our installers measure moisture content in both the wood and subfloor to ensure the moisture differential is under 2% to 4% before installing.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can Luxury Vinyl Plank (LVP) be installed in wet areas like basements?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. Our rigid core luxury vinyl planks (SPC) are 100% waterproof from top to bottom. Even if exposed to standing water from a plumbing leak or basement condensation, the planks will not swell, buckle, warp, or delaminate.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How truly "dustless" is your hardwood sanding and refinishing system?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Our truck-mounted vacuum and portable two-stage HEPA containment systems capture 99.8% of airborne dust right at the machine head. You do not need to cover furniture or clean air ducts after we finish. We also use premium low-VOC waterborne finishes that cure quickly with virtually no toxic fumes.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Do you move furniture and haul away our existing flooring?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We offer complete white-glove service. Our crews move standard household furniture, tear out old carpet, tack strips, or tile, dispose of all debris, vacuum the subfloor, and return your furniture to its exact place once the installation is complete.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What is the difference between solid hardwood and engineered hardwood?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Solid hardwood is a single piece of 3/4" milled timber, ideal for above-grade rooms and able to be refinished 6 to 8 times. Engineered hardwood features a real sawn timber top layer over cross-laminated birch or eucalyptus plywood, providing superior dimensional stability against humidity fluctuations and allowing wider plank formats (up to 9").</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Why is subfloor leveling so critical for wide-plank and LVP floors?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>If a subfloor has dips or humps exceeding 3/16", wide-plank click-lock systems will flex when walked on, leading to cracked joints, hollow footstep sounds, and eventual plank separation. We grind high spots and pour self-leveling cement to guarantee a dead-flat foundation.</p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How do I schedule an in-home estimate with your mobile showroom?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Simply submit the estimate request form below, call +1 (412) 796-3968, or click any WhatsApp button. We will schedule a convenient time for our flooring specialist to bring over 200 physical wood, vinyl, and tile samples directly to your home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         16. CONTACT & ESTIMATE REQUEST SECTION
         ========================================================================== */}
            <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
              <a href="tel:+14127963968" className="btn btn-primary">Call +1 (412) 796-3968</a>
            </div>
          </>
        )}

        {/* CONTACT VIEW */}
        {currentView === 'contact' && (
          <>
    <section className="section-padding bg-white" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Info Card */}
          <div className="contact-info-card reveal">
            <h3>Connect With Alvoratech</h3>
            <p>Ready to select your dream floors? Contact our master estimating and installation team directly via phone, WhatsApp, or email.</p>

            <div className="contact-channels">
              {/* WhatsApp / Phone */}
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

              {/* Email */}
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

              {/* Location (Strictly *) */}
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

            {/* Hours */}
            <div className="contact-location-box">
              <div className="contact-location-label">Operating Hours</div>
              <div style={{"fontSize":"0.95rem","color":"var(--color-navy)","fontWeight":"600"}}>
                Monday – Saturday: 7:00 AM – 6:00 PM <br />
                <span style={{"color":"var(--color-text-muted)","fontWeight":"normal"}}>Sunday: In-Home Design Consultations By Appointment</span>
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

          {/* Right Column: Interactive Estimate Form */}
          <div className="contact-form-card reveal stagger-1">
            <h3>Schedule Your In-Home Flooring Estimate</h3>
            <p>Tell us about your space. Submitting instantly generates a customized WhatsApp request with our scheduling manager.</p>

            <div id="formStatus" className="form-status" role="alert"></div>

            <form id="estimateForm" novalidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input type="text" id="fullName" className="form-input" placeholder="e.g. William Harrington" required />
                  <span id="fullNameError" className="form-error">Please enter your full name.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" className="form-input" placeholder="e.g. +1 (412) 555-0144" required />
                  <span id="phoneError" className="form-error">Please enter a valid telephone number.</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" className="form-input" placeholder="e.g. william@example.com" required />
                  <span id="emailError" className="form-error">Please enter a valid email address.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="sqftRange" className="form-label">Estimated Area (Sq. Ft.)</label>
                  <select id="sqftRange" className="form-select">
                    <option value="under500">Under 500 sq. ft. (1-2 Rooms)</option>
                    <option value="500-1000">500 – 1,000 sq. ft. (Partial Home / Floor)</option>
                    <option value="1000-2500">1,000 – 2,500 sq. ft. (Full Main Level)</option>
                    <option value="2500plus">2,500+ sq. ft. (Entire Home / Commercial)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="flooringType" className="form-label">Flooring Type Required *</label>
                <select id="flooringType" className="form-select" required>
                  <option value="">-- Select Desired Flooring Solution --</option>
                  <option value="hardwood">Solid & Engineered Hardwood Installation</option>
                  <option value="lvp">Luxury Vinyl Plank (LVP / EVP) 100% Waterproof</option>
                  <option value="tile">Porcelain, Ceramic & Marble Tile</option>
                  <option value="refinish">Dustless Hardwood Sanding & Refinishing</option>
                  <option value="laminate">Waterproof High-Performance Laminate</option>
                  <option value="stairs">Custom Hardwood Staircases & Moldings</option>
                  <option value="commercial">Commercial Flooring Solutions</option>
                  <option value="subfloor">Subfloor Repair & Laser Self-Leveling</option>
                </select>
                <span id="flooringError" className="form-error">Please select a flooring type.</span>
              </div>

              <div className="form-group">
                <label htmlFor="projectDetails" className="form-label">Room Details / Goals</label>
                <textarea id="projectDetails" className="form-textarea" placeholder="Mention rooms (living, kitchen, basement), current floor type (carpet, tile, vinyl), and if you have pets or subfloor concerns..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                Submit Free Estimate Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <div className="form-notice">
                🔒 Privacy guaranteed. Your contact details are never shared with external parties.
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z"/>
                <path d="M3 9h18"/>
                <path d="M3 15h18"/>
                <path d="M9 3v6"/>
                <path d="M15 9v6"/>
                <path d="M9 15v6"/>
              </svg>
            </div>
            <span className="logo-text">ALVORATECH</span>
          </a>
          <p>
            Alvoratech is an elite American flooring contractor specializing in solid & engineered hardwood installation, 100% waterproof luxury vinyl plank (LVP), custom architectural tile, and 99.8% dustless hardwood restoration.
          </p>
        </div>

        {/* Quick Services */}
        <div>
          <h4 className="footer-heading">Flooring Solutions</h4>
          <ul className="footer-links">
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Engineered Hardwood</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Solid Hardwood Installation</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Luxury Vinyl Plank (LVP)</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Porcelain & Marble Tile</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Dustless Floor Refinishing</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Waterproof Laminate</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Custom Staircase Treads</a></li>
            <li><a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Subfloor Laser Leveling</a></li>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{"color":"var(--color-gold)","flexShrink":"0"}}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <a href="tel:+14127963968" className="footer-link">+1 (412) 796-3968</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-gold)","flexShrink":"0"}}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@Alvoratechhq.com" className="footer-link">info@Alvoratechhq.com</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-gold)","flexShrink":"0"}}>
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
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 Alvoratech Flooring & Refinishing. All rights reserved.
        </div>
        <div>
          Demonstration Website • Location: * • Designed for Excellence
        </div>
      </div>
    </div>
  </footer>

  {/* ==========================================================================
       19. FIXED FLOATING WHATSAPP BANNER (STRICT: ONLY WHATSAPP ICON & PHONE NUMBER)
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
