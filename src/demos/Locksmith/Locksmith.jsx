import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './locksmith.css';

export default function Locksmith() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    try {
      /**
 * ALVORATECH – 24/7 Locksmith & Emergency Security Services
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
     5. INTERACTIVE BEFORE-AND-AFTER SECURITY TRANSFORMATION SLIDER
     ========================================================================== */
  const baContainer = document.querySelector('.ba-slider-container');
  const baBefore = document.querySelector('.ba-image-before');
  const baHandle = document.querySelector('.ba-handle');
  const baBeforeImg = document.querySelector('.ba-image-before .ba-img');
  const baAfterImg = document.querySelector('.ba-image-after .ba-img');
  const baTabs = document.querySelectorAll('.ba-tab-btn');
  const baCaption = document.querySelector('.ba-caption');

  const transformationData = {
    door: {
      before: '/locksmith/assets/images/ba-door-before.jpg',
      after: '/locksmith/assets/images/ba-door-after.jpg',
      caption: 'Residential Entry: Loose builder deadbolt replaced with ANSI Grade 1 Smart Biometric Touchscreen Deadbolt with tamper alarm.'
    },
    comm: {
      before: '/locksmith/assets/images/ba-comm-before.jpg',
      after: '/locksmith/assets/images/ba-comm-after.jpg',
      caption: 'Commercial Exit: Tampered surface latch replaced with heavy-duty UL-listed Fire Exit Panic Bar and Keyed Mortise Cylinder.'
    },
    auto: {
      before: '/locksmith/assets/images/ba-auto-before.jpg',
      after: '/locksmith/assets/images/ba-auto-after.jpg',
      caption: 'Automotive Ignition: Broken key extracted on roadside and replaced with brand new OEM-spec laser-cut smart transponder fob.'
    },
    master: {
      before: '/locksmith/assets/images/ba-master-before.jpg',
      after: '/locksmith/assets/images/ba-master-after.jpg',
      caption: 'Retail Master Keyway: 12 mismatched office door locks rekeyed into a unified tiered Master Key system with restricted blanks.'
    },
    safe: {
      before: '/locksmith/assets/images/ba-safe-before.jpg',
      after: '/locksmith/assets/images/ba-safe-after.jpg',
      caption: 'Commercial Safe: Jammed mechanical dial serviced and upgraded to an instant-access UL-listed electronic digital keypad.'
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
      lightboxCaption.textContent = captionText || 'Alvoratech Locksmith Project';
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
     9. EMERGENCY DISPATCH FORM VALIDATION & DIRECT WHATSAPP INTEGRATION
     ========================================================================== */
  const dispatchForm = document.getElementById('dispatchForm');
  const formStatus = document.getElementById('formStatus');

  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      const nameInput = document.getElementById('fullName');
      const phoneInput = document.getElementById('phoneNumber');
      const emailInput = document.getElementById('emailAddress');
      const serviceSelect = document.getElementById('serviceNeeded');
      const urgencySelect = document.getElementById('urgencyLevel');
      const detailsInput = document.getElementById('serviceDetails');

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
        setError(phoneInput, 'phoneError', 'Please enter a valid phone number for mobile dispatch.');
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

      // Service Selection Validation
      if (!serviceSelect || !serviceSelect.value) {
        setError(serviceSelect, 'serviceError', 'Please select a locksmith service.');
      } else {
        clearError(serviceSelect, 'serviceError');
      }

      if (!isValid) return;

      const customerName = nameInput.value.trim();
      const customerPhone = phoneInput.value.trim();
      const customerEmail = emailInput.value.trim();
      const selectedService = serviceSelect.options[serviceSelect.selectedIndex].text;
      const selectedUrgency = urgencySelect && urgencySelect.value ? urgencySelect.options[urgencySelect.selectedIndex].text : 'Standard';
      const notes = detailsInput && detailsInput.value.trim() ? detailsInput.value.trim() : 'None provided';

      const waMessage = 
        `🚨 LOCKSMITH SERVICE REQUEST - ALVORATECH\n` +
        `• Name: ${customerName}\n` +
        `• Phone: ${customerPhone}\n` +
        `• Email: ${customerEmail}\n` +
        `• Service: ${selectedService}\n` +
        `• Urgency: ${selectedUrgency}\n` +
        `• Vehicle/Property Details: ${notes}`;

      const waUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(waMessage)}`;

      if (formStatus) {
        formStatus.textContent = 'Routing your request to Alvoratech Mobile Dispatch on WhatsApp...';
        formStatus.classList.add('success');
      }

      setTimeout(() => {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        dispatchForm.reset();
        setTimeout(() => {
          if (formStatus) formStatus.classList.remove('success');
        }, 6000);
      }, 700);
    });

    ['fullName', 'phoneNumber', 'emailAddress', 'serviceNeeded'].forEach(id => {
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
      console.warn('Interactive script error in Locksmith:', err);
    }
  }, []);

  return (
    <div className="locksmith-demo" id="top">
      <DemoTopBar demoName="Alvoratech 24/7 Mobile Locksmith" />
      

  {/* ==========================================================================
       1. TOP DEMO BANNER
       ========================================================================== */}
  <div className="top-demo-banner" role="region" aria-label="Demo notice">
    <div className="top-demo-content">
      <span className="demo-pill">DEMO WEBSITE</span>
      <span>You're viewing a demonstration website for <strong>Alvoratech Locksmith & Security</strong>.</span>
    </div>
  </div>

  {/* ==========================================================================
       2. STICKY HEADER & NAVIGATION
       ========================================================================== */}
  <header className="site-header" role="banner">
    <div className="container-wide">
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="site-logo" aria-label="Alvoratech Home">
          <div className="logo-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <circle cx="12" cy="11" r="3"/>
              <path d="M12 14v3"/>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" role="navigation" aria-label="Main Navigation">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Nav CTA Actions */}
        <div className="nav-actions">
          <a href="tel:+14127963968" className="btn btn-primary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Dispatch
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
    <a onClick={() => setMobileMenuOpen(false)} href="#hero" className="nav-link">Home</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#services" className="nav-link">Locksmith Services</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#about" className="nav-link">About Alvoratech</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#why-us" className="nav-link">Why Choose Us</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#portfolio" className="nav-link">Portfolio Gallery</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="nav-link">FAQ</a>
    <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="nav-link">Contact & Dispatch</a>
    <a onClick={() => setMobileMenuOpen(false)} href="tel:+14127963968" className="btn btn-primary" style={{"marginTop":"1rem"}}>
      Call: +1 (412) 796-3968
    </a>
    <a onClick={() => setMobileMenuOpen(false)} href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
      <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      WhatsApp Dispatch
    </a>
  </aside>

  <main id="main-content">
    {/* ==========================================================================
         3. HERO SECTION
         ========================================================================== */}
    <section className="hero-section" id="hero">
      <div className="shield-particle shield-1" aria-hidden="true"></div>
      <div className="shield-particle shield-2" aria-hidden="true"></div>
      <div className="shield-particle shield-3" aria-hidden="true"></div>
      <div className="shield-particle shield-4" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-content reveal">
            <span className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              24/7 RAPID MOBILE DISPATCH • 15–30 MIN AVERAGE ARRIVAL
            </span>
            <h1 className="hero-title">
              Locked Out? Keys Lost? <br />
              <span className="text-gradient">Fast 24/7 Mobile Locksmith.</span>
            </h1>
            <p className="hero-description">
              Certified master locksmiths equipped with state-of-the-art mobile workshops dispatched immediately to your home, vehicle, or business. From damage-free emergency lockouts and laser key cutting to high-security deadbolts and master key architecture.
            </p>
            <div className="hero-actions">
              <a href="tel:+14127963968" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: +1 (412) 796-3968
              </a>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <div className="hero-trust-indicators">
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                15–30 Min Arrival
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Licensed & Bonded
              </div>
              <div className="hero-trust-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Damage-Free Guarantee
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-media-wrapper reveal stagger-1">
            <div className="hero-image-container">
              <img src="/locksmith/assets/images/lock-hero.jpg" alt="Professional Alvoratech mobile locksmith technician working on security door lock" className="hero-image" width="700" height="490" />
            </div>
            <div className="floating-craft-card">
              <div className="floating-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="floating-text">
                <strong>Certified Security</strong>
                <span>Zero Damage Entry Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         4. TRUST INDICATORS (HORIZONTAL VALUE BAR)
         ========================================================================== */}
    <section className="trust-section" aria-label="Why trust Alvoratech Locksmith">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 14 14"></polyline>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">15–30 Min Fast Arrival</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Mobile locksmith vans stationed for rapid local emergency response.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Licensed, Bonded & Insured</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Fully certified ALOA-standard technicians with complete background checks.</p>
            </div>
          </div>

          <div className="trust-item reveal stagger-3">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <div className="trust-item-title">Zero Hidden Pricing</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Transparent upfront flat-rate quotes before any work begins.</p>
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
              <div className="trust-item-title">Damage-Free Guarantee</div>
              <p style={{"fontSize":"0.85rem","marginBottom":"0"}}>Non-destructive professional bypass techniques for doors and vehicles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         5. ABOUT ALVORATECH SECTION
         ========================================================================== */}
    <section className="section-padding bg-light" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-media reveal">
            <div className="about-image-wrapper">
              <img src="/locksmith/assets/images/lock-about.jpg" alt="Alvoratech certified locksmith master pinning a brass cylinder in mobile workshop" className="about-image" width="600" height="490" />
            </div>
          </div>

          {/* Text Column */}
          <div className="about-content reveal stagger-1">
            <span className="section-eyebrow">ABOUT ALVORATECH SECURITY</span>
            <h2>Integrity in Every Keyway. <br />Protection When You Need It Most.</h2>
            <p>
              In an industry plagued by lead-generation mills and scam operators quoting low call-out fees only to drill out locks, Alvoratech was founded on unshakeable integrity, transparent pricing, and master-level locksmithing skills.
            </p>
            <p>
              Every mobile unit in our fleet functions as a complete roadside security laboratory: equipped with computer-guided laser key cutters, transponder EEPROM programmers, high-security lock cylinders, and non-destructive bypass tools. We prioritize picking, decoding, and rekeying your existing hardware before ever recommending replacement.
            </p>

            <div className="about-features-list">
              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="11" r="3"/>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Non-Destructive Entry Priority</h4>
                  <p>Our master technicians bypass deadbolts and automotive locks without drilling or damaging glass, paint, or weatherstripping.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Automotive Transponder Key Labs</h4>
                  <p>On-site cutting and chip programming for 98% of domestic and foreign vehicles, including push-to-start smart fobs and laser-cut keys.</p>
                </div>
              </div>

              <div className="about-feature-card">
                <div className="feature-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="feature-info">
                  <h4>Commercial Master Key Architecture</h4>
                  <p>Custom restricted keyway systems that eliminate key duplication risks and grant customized access control across your facilities.</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-navy">
              Speak With a Certified Security Consultant
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
         6. CORE LOCKSMITH SERVICES (8 SERVICES)
         ========================================================================== */}
    <section className="section-padding bg-white" id="services">
      <div className="container-wide">
        <div className="section-header reveal">
          <span className="section-eyebrow">COMPREHENSIVE SECURITY SPECIALTIES</span>
          <h2>Professional Locksmith & Access Control Services</h2>
          <p>
            Whether locked out on the road, upgrading residential deadbolts, or securing a corporate commercial facility, our certified technicians are ready 24/7.
          </p>
        </div>

        <div className="services-grid-8">
          {/* Service 1 */}
          <article className="service-card reveal stagger-1" id="emergency">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-emergency.jpg" alt="24/7 Emergency home and office lockout service" className="service-image" loading="lazy" />
              <span className="service-badge">24/7 Emergency</span>
            </div>
            <div className="service-content">
              <h3>24/7 Emergency Lockouts</h3>
              <p>Locked out of your home, apartment, or office? Rapid 15–30 minute mobile dispatch with non-destructive lock picking to get you safely inside.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=EMERGENCY%20LOCKOUT:%20I%20am%20locked%20out%20and%20need%20immediate%20assistance" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Emergency Unlock
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 2 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-auto.jpg" alt="Automotive key replacement and transponder fob programming" className="service-image" loading="lazy" />
              <span className="service-badge">Automotive Keys</span>
            </div>
            <div className="service-content">
              <h3>Car Key Replacement & Fobs</h3>
              <p>On-site high-security laser key cutting, transponder chip programming, smart proximity push-to-start fobs, and remote keyless entry pairing.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I%20need%20a%20replacement%20car%20key%20or%20smart%20fob" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Car Key Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 3 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-rekey.jpg" alt="Lock rekeying and cylinder master key conversion" className="service-image" loading="lazy" />
              <span className="service-badge">Rekeying</span>
            </div>
            <div className="service-content">
              <h3>Lock Rekeying & Keyway Pinning</h3>
              <p>Moved into a new home or changed tenants? Keep your existing hardware while changing internal brass pins so old keys will never work again.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Lock%20Rekeying%20Services" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Rekey Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 4 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-smartlock.jpg" alt="High security deadbolts and smart keyless entry deadbolts" className="service-image" loading="lazy" />
              <span className="service-badge">Smart Security</span>
            </div>
            <div className="service-content">
              <h3>Smart Locks & Deadbolts</h3>
              <p>Upgrade to ANSI Grade 1 high-security deadbolts, biometric fingerprint entry, WiFi touchscreen keypads, and integrated home automation locks.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Smart%20Lock%20Installation" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Smart Lock Upgrade
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 5 */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-panicbar.jpg" alt="Commercial panic bars push bars and exit device installation" className="service-image" loading="lazy" />
              <span className="service-badge">Commercial Fire/Life</span>
            </div>
            <div className="service-content">
              <h3>Panic Bars & Exit Hardware</h3>
              <p>OSHA, ADA, and NFPA life-safety compliant commercial push bars, delayed egress devices, heavy-duty door closers, and mortise lock sets.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I%20need%20Commercial%20Panic%20Bar%20or%20Exit%20Hardware" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Exit Device Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 6 */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-access.jpg" alt="Electronic access control keycards and maglock systems" className="service-image" loading="lazy" />
              <span className="service-badge">Access Control</span>
            </div>
            <div className="service-content">
              <h3>Access Control & Keycard Entry</h3>
              <p>Keyless electronic access for retail, warehouses, and corporate facilities. Magnetic shear locks, RFID badge scanners, and cloud audit logging.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I'm%20interested%20in%20Electronic%20Access%20Control" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Access Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 7 */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-ignition.jpg" alt="Broken key extraction and steering column ignition repair" className="service-image" loading="lazy" />
              <span className="service-badge">Ignition Repair</span>
            </div>
            <div className="service-content">
              <h3>Broken Key Extraction & Ignition</h3>
              <p>Precision micro-extraction of snapped keys from automotive ignitions and door locks without cylinder destruction, plus tumbler rebuilds.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I%20have%20a%20broken%20key%20or%20ignition%20problem" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Ignition Service
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>

          {/* Service 8 */}
          <article className="service-card reveal stagger-4">
            <div className="service-image-box">
              <img src="/locksmith/assets/images/service-safe.jpg" alt="Safe cracking combination changes and electronic keypad retrofitting" className="service-image" loading="lazy" />
              <span className="service-badge">Safe Servicing</span>
            </div>
            <div className="service-content">
              <h3>Safe Cracking & Digital Upgrades</h3>
              <p>Lost combination or jammed mechanical dial? Certified safe technicians handle manipulation, electronic retrofits, and high-security lockouts.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hello%20Alvoratech,%20I%20need%20Safe%20Cracking%20or%20Servicing" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                Request Safe Specialist
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         7. MIDDLE DEMO BANNER
         ========================================================================== */}
    <section className="middle-demo-banner" role="region" aria-label="Demo mid-page showcase">
      <div className="container">
        <div className="middle-demo-card">
          <div className="middle-demo-text">
            <span className="demo-pill" style={{"marginBottom":"0.75rem","display":"inline-block"}}>THIS IS A WEBSITE DEMO</span>
            <h3>SEE WHAT A PROFESSIONAL WEBSITE CAN DO FOR YOUR BUSINESS.</h3>
            <p>This is a demonstration of how Alvoratech can present its emergency, automotive, and commercial security services online.</p>
          </div>
          <div>
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         8. INTERACTIVE BEFORE-AND-AFTER SECURITY TRANSFORMATION SLIDER
         ========================================================================== */}
    <section className="section-padding bg-light ba-section" id="transformations">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">SECURITY UPGRADE PROOF</span>
          <h2>Witness the Power of Certified Locksmithing</h2>
          <p>
            Drag the interactive slider handle left and right to inspect real-world security restorations, smart deadbolt retrofits, and commercial fire exit installations.
          </p>
          <div className="ba-disclaimer-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Drag handle left or right to compare Before & After
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        {/* Before-After Category Tabs */}
        <div className="ba-tabs reveal">
          <button className="ba-tab-btn active" data-tab="door">Smart Deadbolt</button>
          <button className="ba-tab-btn" data-tab="comm">Panic Exit Hardware</button>
          <button className="ba-tab-btn" data-tab="auto">Car Ignition Key</button>
          <button className="ba-tab-btn" data-tab="master">Master Keyway</button>
          <button className="ba-tab-btn" data-tab="safe">Digital Safe Lock</button>
        </div>

        {/* Interactive Slider Box */}
        <div className="ba-slider-container reveal stagger-1" aria-label="Before and after security transformation comparison slider">
          {/* After (Background) */}
          <div className="ba-image-wrapper ba-image-after">
            <img src="/locksmith/assets/images/ba-door-after.jpg" alt="ANSI Grade 1 Smart Deadbolt installed after Alvoratech upgrade" className="ba-img" />
            <span className="ba-label ba-label-after">AFTER (SECURED)</span>
          </div>

          {/* Before (Clipped Foreground) */}
          <div className="ba-image-before">
            <img src="/locksmith/assets/images/ba-door-before.jpg" alt="Loose builder deadbolt before Alvoratech locksmith upgrade" className="ba-img" />
            <span className="ba-label ba-label-before">BEFORE (VULNERABLE)</span>
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
          Residential Entry: Loose builder deadbolt replaced with ANSI Grade 1 Smart Biometric Touchscreen Deadbolt with tamper alarm.
        </p>

        <div style={{"textAlign":"center","marginTop":"2.5rem"}} className="reveal">
          <a href="#contact" className="btn btn-primary">Upgrade Your Property's Security</a>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         9. ANSI SECURITY GRADE COMPARISON GUIDE
         ========================================================================== */}
    <section className="section-padding bg-white" id="grades">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">CONSUMER HARDWARE GUIDE</span>
          <h2>Understanding ANSI/BHMA Security Lock Grades</h2>
          <p>
            Not all locks provide real security. Learn how certified Grade 1 hardware protects your family and assets against kick-ins, bumping, and picking.
          </p>
        </div>

        <div className="ansi-table-wrapper reveal stagger-1">
          <table className="ansi-table">
            <thead>
              <tr>
                <th>Hardware Grade</th>
                <th>Kick-In Resistance</th>
                <th>Cycle Durability</th>
                <th>Pick & Drill Shielding</th>
                <th>Ideal Application</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="ansi-name">ANSI Grade 1 (Commercial High-Security)</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Solid hardened steel bolt with anti-saw rollers</div>
                </td>
                <td><span className="grade-tag grade-max">Maximum (10 Strikes @ 150 ft-lbs)</span></td>
                <td><span className="grade-tag grade-max">1,000,000+ Cycles</span></td>
                <td>Hardened ball bearings & spool pins</td>
                <td>Exterior Perimeter, Luxury Homes, Commercial Stores</td>
              </tr>
              <tr>
                <td>
                  <div className="ansi-name">ANSI Grade 2 (Heavy-Duty Residential)</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Reinforced steel chassis and strike box</div>
                </td>
                <td><span className="grade-tag grade-mid">Heavy Duty (5 Strikes @ 150 ft-lbs)</span></td>
                <td><span className="grade-tag grade-mid">400,000 Cycles</span></td>
                <td>Drill-resistant faceplates</td>
                <td>Standard Front Doors, Interior Offices, Garage Entries</td>
              </tr>
              <tr>
                <td>
                  <div className="ansi-name">ANSI Grade 3 (Basic Builder Grade)</div>
                  <div style={{"fontSize":"0.85rem","color":"var(--color-text-muted)"}}>Standard die-cast zinc internal components</div>
                </td>
                <td><span className="grade-tag grade-basic">Basic (2 Strikes @ 150 ft-lbs)</span></td>
                <td><span className="grade-tag grade-basic">200,000 Cycles</span></td>
                <td>Standard brass tumblers only</td>
                <td>Interior Closets, Secondary Gates, Storage Closets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         10. WHY CHOOSE ALVORATECH SECTION
         ========================================================================== */}
    <section className="section-padding bg-light" id="why-us">
      <div className="container">
        <div className="why-grid">
          {/* Left Media */}
          <div className="why-image-wrapper reveal">
            <img src="/locksmith/assets/images/lock-why.jpg" alt="Alvoratech professional locksmith equipment and laser cutting keys" className="why-image" width="600" height="520" />
          </div>

          {/* Right Content */}
          <div className="why-content reveal stagger-1">
            <span className="section-eyebrow">THE ALVORATECH STANDARD</span>
            <h2>Why Stranded Drivers & Facility Managers Trust Us</h2>
            <p>
              When an emergency strikes, you need honest, certified security experts who show up quickly, state the exact price upfront, and resolve your issue without damaging your property.
            </p>

            <div className="why-benefits-grid">
              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h4>Licensed & Bonded</h4>
                <p>Complete \$2M liability insurance and certified master locksmith background checks.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                </div>
                <h4>15–30 Min Response</h4>
                <p>Strategically routed mobile response vans equipped with full key cutting labs.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h4>Upfront Honest Rates</h4>
                <p>Guaranteed flat-rate quote before any tool touches your lock. Zero scam fees.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4>Non-Destructive Bypass</h4>
                <p>We pick and decode locks first. No unnecessary drilling or door replacements.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <h4>On-Site Key Cutting</h4>
                <p>Computerized laser key cutting for modern automotive fobs, smart keys, and high-security keyways.</p>
              </div>

              <div className="why-benefit-card">
                <div className="why-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="11" r="3"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>90-Day Parts & Labor</h4>
                <p>Comprehensive warranty covering every rekeyed cylinder, smart lock, and transponder key.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         11. HOW IT WORKS (OUR 4-STEP EMERGENCY DISPATCH)
         ========================================================================== */}
    <section className="section-padding bg-white" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">FAST RAPID RESPONSE</span>
          <h2>Our 4-Step Emergency Dispatch Process</h2>
          <p>
            Experience a seamless, panic-free path from lockout to safety in four simple steps.
          </p>
        </div>

        <div className="steps-timeline">
          {/* Step 1 */}
          <div className="step-item reveal stagger-1">
            <div className="step-number-box">01</div>
            <h3>Contact Dispatch</h3>
            <p>Call or WhatsApp our 24/7 emergency dispatch line. You speak directly with a certified technician, never a third-party call center.</p>
          </div>

          {/* Step 2 */}
          <div className="step-item reveal stagger-2">
            <div className="step-number-box">02</div>
            <h3>Flat-Rate Quote & ETA</h3>
            <p>We confirm your situation, provide an exact flat-rate price, and give you an accurate mobile unit arrival time (15–30 min).</p>
          </div>

          {/* Step 3 */}
          <div className="step-item reveal stagger-3">
            <div className="step-number-box">03</div>
            <h3>Rapid Arrival & Bypass</h3>
            <p>Our marked mobile locksmith van arrives on scene. The technician verifies ID and unlocks your door without damage.</p>
          </div>

          {/* Step 4 */}
          <div className="step-item reveal stagger-4">
            <div className="step-number-box">04</div>
            <h3>Key Handover & Warranty</h3>
            <p>We test keys or new locks, provide your receipt, and activate our 90-day parts and labor warranty.</p>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         12. OUR WORK PORTFOLIO GALLERY & LIGHTBOX
         ========================================================================== */}
    <section className="section-padding bg-light" id="portfolio">
      <div className="container-wide">
        <div className="section-header reveal">
          <span className="section-eyebrow">PORTFOLIO OF RECENT WORK</span>
          <h2>Real Field Installations & Emergency Unlocks</h2>
          <p>
            Explore our field work across automotive programming, residential smart locks, and commercial access installations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="gallery-filters reveal">
          <button className="filter-btn active" data-filter="all">All Work</button>
          <button className="filter-btn" data-filter="auto">Automotive</button>
          <button className="filter-btn" data-filter="residential">Residential</button>
          <button className="filter-btn" data-filter="commercial">Commercial</button>
          <button className="filter-btn" data-filter="safe">Safes</button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid-8">
          {/* Item 1 */}
          <div className="gallery-card reveal stagger-1" data-category="residential">
            <img src="/locksmith/assets/images/gallery-smartdeadbolt.jpg" alt="Smart touchscreen deadbolt installed on luxury home" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h4 className="gallery-title">Biometric Smart Deadbolt</h4>
            </div>
          </div>

          {/* Item 2 */}
          <div className="gallery-card reveal stagger-2" data-category="auto">
            <img src="/locksmith/assets/images/gallery-carfob.jpg" alt="Laser cut car key transponder smart fob programming" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Automotive</span>
              <h4 className="gallery-title">Laser Cut Smart Key Fob</h4>
            </div>
          </div>

          {/* Item 3 */}
          <div className="gallery-card reveal stagger-3" data-category="residential">
            <img src="/locksmith/assets/images/gallery-rekeypins.jpg" alt="Master rekeying brass pins and lock cylinder re-pinning" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h4 className="gallery-title">High-Security Cylinder Rekey</h4>
            </div>
          </div>

          {/* Item 4 */}
          <div className="gallery-card reveal stagger-4" data-category="commercial">
            <img src="/locksmith/assets/images/gallery-accesscontrol.jpg" alt="Keycard RFID badge reader and electronic magnetic door lock" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h4 className="gallery-title">RFID Card Access System</h4>
            </div>
          </div>

          {/* Item 5 */}
          <div className="gallery-card reveal stagger-1" data-category="auto">
            <img src="/locksmith/assets/images/gallery-laserkey.jpg" alt="Computerized automotive key cutting machine" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Automotive</span>
              <h4 className="gallery-title">Computerized Key Decoding</h4>
            </div>
          </div>

          {/* Item 6 */}
          <div className="gallery-card reveal stagger-2" data-category="safe">
            <img src="/locksmith/assets/images/gallery-safelock.jpg" alt="Commercial digital safe keypad upgrade" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Safe Security</span>
              <h4 className="gallery-title">Electronic Safe Retrofit</h4>
            </div>
          </div>

          {/* Item 7 */}
          <div className="gallery-card reveal stagger-3" data-category="commercial">
            <img src="/locksmith/assets/images/gallery-panicbar.jpg" alt="Commercial fire exit panic bar hardware" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h4 className="gallery-title">UL-Listed Panic Exit Device</h4>
            </div>
          </div>

          {/* Item 8 */}
          <div className="gallery-card reveal stagger-4" data-category="commercial">
            <img src="/locksmith/assets/images/gallery-commercialhub.jpg" alt="Corporate office master key system installation" className="gallery-image" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h4 className="gallery-title">Corporate Facility Keyway</h4>
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
    <section className="section-padding bg-white testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">CLIENT REVIEWS</span>
          <h2>What Property Owners & Drivers Say</h2>
          <div className="testimonials-disclaimer-pill">
            Demonstration Reviews • Sample Client Feedback
          </div>
        </div>

        <div className="testimonials-carousel-wrapper reveal stagger-1">
          <div className="testimonials-slider">
            <div className="testimonials-track">
              {/* Slide 1 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "I was locked out of my car at midnight outside a shopping plaza in freezing weather. Alvoratech had a technician on-site in 22 minutes! He unlocked my car in under two minutes without a single scratch on the weatherstripping, and charged the exact flat rate quoted on the phone. Incredible service."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah Jenkins</span>
                    <span className="author-role">Emergency Automotive Lockout</span>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "We recently purchased a home and wanted all exterior locks rekeyed to a single master key, plus a biometric smart deadbolt on the front door. Alvoratech did the whole house in under two hours, explained the app setup clearly, and gave us extra laser-cut spare keys on the spot."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Brian & Michelle Ross</span>
                    <span className="author-role">Residential Rekey & Smart Deadbolt</span>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 stars">★★★★★</div>
                  <blockquote className="testimonial-text">
                    "As a commercial property manager handling a 14-unit retail center, security compliance is vital. Alvoratech installed panic bars on all rear exits and established a restricted master key system that prevents unauthorized key duplication. True professionals."
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="author-name">Arthur Montgomery</span>
                    <span className="author-role">Commercial Facility Director</span>
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
        <span className="demo-pill" style={{"marginBottom":"1.25rem","display":"inline-block"}}>EMERGENCY LOCKSMITH ON STANDBY</span>
        <h2>Never Stay Stranded. Security is Just One Call Away.</h2>
        <p>
          Whether facing an emergency midnight lockout, broken car key, or needing commercial access control installation. Alvoratech's certified technicians are dispatched immediately with 15–30 minute arrival.
        </p>
        <div className="hero-actions" style={{"justifyContent":"center"}}>
          <a href="tel:+14127963968" className="btn btn-primary btn-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Dispatch: +1 (412) 796-3968
          </a>
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
    <section className="section-padding bg-light" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-eyebrow">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find honest answers regarding emergency arrival times, car key programming, pricing transparency, and lock rekeying.
          </p>
        </div>

        <div className="faq-container reveal stagger-1">
          {/* Item 1 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>How quickly can an Alvoratech mobile locksmith arrive at my location?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Our mobile units maintain an average arrival time of 15 to 30 minutes for emergency lockouts. When you call, our dispatcher gives you a realistic, GPS-tracked ETA based on traffic conditions and current unit locations.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can you unlock my house or car without damaging the lock or window?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes! In over 95% of calls, our master technicians employ non-destructive bypass techniques—including precision lock picking, lishi decoding, and specialized air-wedge bypass tools. We only drill as an absolute last resort if a lock has suffered catastrophic mechanical seizure.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can you make a replacement car key if I have lost the original?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. Our mobile vans carry computerized laser cutters and OBD-II transponder programming computers. We can decode your vehicle's door cylinder or VIN code, cut a brand new key, and pair the transponder chip or smart push-to-start fob on site without requiring a costly tow to the dealership.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What is the difference between rekeying a lock and replacing it?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Rekeying keeps your existing door hardware, knob, or deadbolt in place while our technician reconfigures the internal brass pins to fit a brand new key. It costs significantly less than buying new hardware and instantly invalidates any old keys held by previous owners or tenants.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Do you provide upfront pricing before dispatching a mobile technician?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Always. Unlike scam operators who quote \$15 to \$29 just to show up and inflate the bill to \$300+, Alvoratech provides clear, honest, all-inclusive flat pricing upfront. No hidden travel surcharges, no surprise service fees.</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>Can you install smart locks that connect to my phone and existing deadbolt?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We supply and install top-rated ANSI Grade 1 smart deadbolts from Yale, Schlage, and Ultraloq featuring fingerprint sensors, PIN codes, auto-locking, and WiFi smartphone remote unlocking. We ensure exact door alignment so the motorized bolt never jams.</p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="faq-item">
            <button className="faq-button" aria-expanded="false">
              <span>What should I do if my key broke off inside the lock or car ignition?</span>
              <div className="faq-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Do not try to force it out with pliers or insert the broken piece back in, as this pushes the broken fragment deeper into the pin tumblers. Call us immediately. Our technicians use microscopic extraction tools to safely remove the fragment and cut a new replacement key right from your broken pieces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ==========================================================================
         16. CONTACT & EMERGENCY DISPATCH FORM
         ========================================================================== */}
    <section className="section-padding bg-white" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Info Card */}
          <div className="contact-info-card reveal">
            <span className="section-eyebrow">24/7 RAPID DISPATCH</span>
            <h3>Connect With Alvoratech Dispatch</h3>
            <p>Need urgent mobile assistance or want to schedule a commercial security audit? Reach our certified dispatchers directly via phone, WhatsApp, or email.</p>

            <div className="contact-channels">
              {/* Phone / WhatsApp */}
              <div className="contact-channel-item">
                <div className="channel-icon-box whatsapp-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="channel-info">
                  <h4>Phone & WhatsApp Dispatch</h4>
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
                  <h4>Email Dispatch</h4>
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
              <div className="contact-location-label">Service Hours</div>
              <div style={{"fontSize":"0.95rem","color":"var(--color-navy)","fontWeight":"700"}}>
                24 Hours a Day • 7 Days a Week • 365 Days a Year <br />
                <span style={{"color":"var(--color-text-muted)","fontWeight":"normal"}}>Including all Holidays & Midnight Roadside Emergencies</span>
              </div>
            </div>

            <div style={{"marginTop":"1.75rem"}}>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{"width":"100%"}}>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp Dispatch
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="contact-form-card reveal stagger-1">
            <span className="section-eyebrow">FAST SERVICE REQUEST</span>
            <h3>Request Immediate Mobile Locksmith</h3>
            <p>Fill out the details below. Submitting will immediately format and route an urgent WhatsApp dispatch ticket to our nearest technician.</p>

            <div id="formStatus" className="form-status" role="alert"></div>

            <form id="dispatchForm" novalidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input type="text" id="fullName" className="form-input" placeholder="e.g. Marcus Bradley" required />
                  <span id="fullNameError" className="form-error">Please enter your full name.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                  <input type="tel" id="phoneNumber" className="form-input" placeholder="e.g. +1 (412) 555-0188" required />
                  <span id="phoneError" className="form-error">Please enter a valid telephone number.</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="form-label">Email Address *</label>
                  <input type="email" id="emailAddress" className="form-input" placeholder="e.g. marcus@example.com" required />
                  <span id="emailError" className="form-error">Please enter a valid email address.</span>
                </div>

                <div className="form-group">
                  <label htmlFor="urgencyLevel" className="form-label">Urgency Level</label>
                  <select id="urgencyLevel" className="form-select">
                    <option value="emergency">EMERGENCY (Stranded / Locked Out Now)</option>
                    <option value="today">Today (Within 2–4 Hours)</option>
                    <option value="scheduled">Scheduled Appointment (Future Date)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceNeeded" className="form-label">Service Required *</label>
                <select id="serviceNeeded" className="form-select" required>
                  <option value="">-- Select Locksmith Service --</option>
                  <option value="emergency_lockout">24/7 Emergency Lockout (House, Auto or Business)</option>
                  <option value="car_key">Car Key Replacement & Transponder Fob</option>
                  <option value="rekey">Lock Rekeying & Keyway Pinning</option>
                  <option value="smartlock">Smart Lock & Deadbolt Installation</option>
                  <option value="panic_bar">Commercial Panic Bar & Exit Hardware</option>
                  <option value="access_control">Electronic Access Control & Keycards</option>
                  <option value="broken_key">Broken Key Extraction & Ignition Repair</option>
                  <option value="safe">Safe Cracking & Digital Keypad Upgrade</option>
                </select>
                <span id="serviceError" className="form-error">Please select a service.</span>
              </div>

              <div className="form-group">
                <label htmlFor="serviceDetails" className="form-label">Situation Details / Vehicle Info</label>
                <textarea id="serviceDetails" className="form-textarea" placeholder="For vehicles: provide Year, Make, Model. For homes/offices: mention lock type, number of doors, or exact lockout situation..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                Submit Fast Dispatch Request
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

    {/* ==========================================================================
         17. BOTTOM DEMO BANNER
         ========================================================================== */}
    <section className="bottom-demo-banner" role="region" aria-label="Demo site conclusion">
      <div className="container">
        <div className="bottom-demo-card reveal">
          <span className="demo-pill" style={{"marginBottom":"1rem","display":"inline-block"}}>DEMONSTRATION SHOWCASE</span>
          <h2>Locked Out or Need a Security Upgrade?</h2>
          <p>Experience how Alvoratech can present its emergency, automotive, and commercial security services online. Connect with our dispatch team today and experience rapid, certified locksmith services.</p>
          <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat With Us
          </a>
        </div>
      </div>
    </section>
  </main>

  {/* ==========================================================================
       18. FOOTER
       ========================================================================== */}
  <footer className="site-footer" role="contentinfo">
    <div className="container-wide">
      <div className="footer-grid">
        {/* Brand Info */}
        <div className="footer-col-brand">
          <a href="#hero" className="site-logo">
            <div className="logo-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <circle cx="12" cy="11" r="3"/>
                <path d="M12 14v3"/>
              </svg>
            </div>
            <span className="logo-text">ALVORATECH</span>
          </a>
          <p>
            Alvoratech is an elite American mobile locksmith and physical security company specializing in 24/7 emergency lockouts, automotive transponder keys, commercial panic hardware, lock rekeying, and high-security access control.
          </p>
        </div>

        {/* Quick Services */}
        <div>
          <h4 className="footer-heading">Locksmith Services</h4>
          <ul className="footer-links">
            <li><a href="#services" className="footer-link">24/7 Emergency Lockouts</a></li>
            <li><a href="#services" className="footer-link">Automotive Key Replacement</a></li>
            <li><a href="#services" className="footer-link">Lock Rekeying & Keyways</a></li>
            <li><a href="#services" className="footer-link">Smart Lock Deadbolts</a></li>
            <li><a href="#services" className="footer-link">Commercial Panic Bars</a></li>
            <li><a href="#services" className="footer-link">Card Access Control</a></li>
            <li><a href="#services" className="footer-link">Ignition Cylinder Repair</a></li>
            <li><a href="#services" className="footer-link">Safe Cracking & Servicing</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><a href="#hero" className="footer-link">Home</a></li>
            <li><a href="#about" className="footer-link">About Alvoratech</a></li>
            <li><a href="#transformations" className="footer-link">Security Before & After</a></li>
            <li><a href="#grades" className="footer-link">ANSI Security Grades</a></li>
            <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
            <li><a href="#process" className="footer-link">Our 4-Step Process</a></li>
            <li><a href="#portfolio" className="footer-link">Project Portfolio</a></li>
            <li><a href="#testimonials" className="footer-link">Client Reviews</a></li>
            <li><a href="#faq" className="footer-link">FAQ</a></li>
            <li><a href="#contact" className="footer-link">Emergency Dispatch</a></li>
          </ul>
        </div>

        {/* Contact Col */}
        <div>
          <h4 className="footer-heading">Contact Information</h4>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{"color":"var(--color-amber)","flexShrink":"0"}}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <a href="tel:+14127963968" className="footer-link">+1 (412) 796-3968</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-amber)","flexShrink":"0"}}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:info@Alvoratechhq.com" className="footer-link">info@Alvoratechhq.com</a>
          </div>
          <div className="footer-contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{"color":"var(--color-amber)","flexShrink":"0"}}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>*</span>
          </div>
          <div style={{"marginTop":"1.25rem"}}>
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
              WhatsApp Direct Dispatch
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          © 2026 Alvoratech Locksmith & Security Services. All rights reserved.
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
