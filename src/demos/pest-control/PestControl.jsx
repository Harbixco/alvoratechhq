import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './pest-control.css';

export default function PestControl() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (["services","gallery","why-us","faq","contact"].includes(hash)) {
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
      if (["services","gallery","why-us","faq","contact"].includes(hash)) {
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
 * ALVORATECH – PREMIUM PEST CONTROL & EXTERMINATION SERVICES WEBSITE
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
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* ==========================================================================
     5. INTERACTIVE PEST IDENTIFICATION GUIDE (SIGNATURE FEATURE)
     ========================================================================== */
  const pestTabs = document.querySelectorAll('.pest-tab-btn');
  const pestCard = document.getElementById('pestDetailCard');
  const pestImg = document.getElementById('pestDetailImg');
  const pestThreatBadge = document.getElementById('pestThreatBadge');
  const pestTitle = document.getElementById('pestDetailTitle');
  const pestSigns = document.getElementById('pestDetailSigns');
  const pestZones = document.getElementById('pestDetailZones');
  const pestProtocol = document.getElementById('pestDetailProtocol');
  const pestReportBtn = document.getElementById('pestReportBtn');

  const pestDatabase = {
    termites: {
      title: 'Termite Colony Activity',
      badge: 'High Structural Threat',
      img: '/pest-control/assets/images/pest-termite.jpg',
      signs: 'Mud tubes along foundation walls, discarded wings near window sills, hollow-sounding wooden beams, or blistered drywall.',
      zones: 'Subterranean soil, crawlspaces, basement joists, wall studs, and exterior wood-to-ground contact points.',
      protocol: 'Precision structural evaluation, specialized liquid perimeter barriers, and targeted baiting defense systems.',
      waQuery: 'Hi Alvoratech, I suspect a Termite issue at my property and need an inspection.'
    },
    rodents: {
      title: 'Mice & Rat Infestation',
      badge: 'Hygiene & Wiring Threat',
      img: '/pest-control/assets/images/pest-rodent.jpg',
      signs: 'Small dark droppings in cabinets, gnaw marks on food boxes or wires, scratching noises in attics/walls at night.',
      zones: 'Attics, basements, wall voids, kitchen pantries, garage corners, and crawlspace entry holes.',
      protocol: 'Multi-point entry exclusion, targeted sanitization, mechanical trapping, and perimeter bait station barriers.',
      waQuery: 'Hi Alvoratech, I am dealing with Rodents (mice/rats) and need prompt exclusion.'
    },
    bedbugs: {
      title: 'Bed Bug Infestation',
      badge: 'High Discomfort Threat',
      img: '/pest-control/assets/images/pest-bedbug.jpg',
      signs: 'Small rust-colored stains on mattress seams, tiny egg casings, waking up with clustered red skin welts.',
      zones: 'Mattress seams, headboards, baseboards, upholstered furniture crevices, and electrical outlet plates.',
      protocol: 'Intensive thermal application and specialized residual perimeter defense to eradicate all life stages.',
      waQuery: 'Hi Alvoratech, I need urgent assistance regarding Bed Bugs.'
    },
    ants: {
      title: 'Carpenter & Sugar Ant Trails',
      badge: 'Nuisance & Wood Damage',
      img: '/pest-control/assets/images/pest-ant.jpg',
      signs: 'Visible ant trails across kitchen counters, fine sawdust shavings (frass) under wooden sills, winged swarmers indoors.',
      zones: 'Kitchen countertops, wall voids, beneath sinks, exterior patio perimeters, and damp decaying wood.',
      protocol: 'Colony nest disruption with transfer baits, interior crack-and-crevice treatments, and continuous exterior foundation barriers.',
      waQuery: 'Hi Alvoratech, I have an Ant infestation and would like a treatment quote.'
    },
    cockroaches: {
      title: 'German & American Cockroaches',
      badge: 'Health & Sanitation Alert',
      img: '/pest-control/assets/images/pest-cockroach.jpg',
      signs: 'Unpleasant oily odor, pepper-like droppings behind refrigerators, oval egg capsules (oothecae) in dark cabinets.',
      zones: 'Warm dark spaces behind kitchen appliances, under sinks, floor drains, basements, and commercial food prep areas.',
      protocol: 'Targeted baiting gel matrices, insect growth regulators (IGRs), and moisture control barrier sealing.',
      waQuery: 'Hi Alvoratech, I need Cockroach eradication for my property.'
    },
    mosquitoes: {
      title: 'Mosquito & Yard Pests',
      badge: 'Outdoor Biting Nuisance',
      img: '/pest-control/assets/images/pest-mosquito.jpg',
      signs: 'Persistent biting insects in foliage, standing water breeding activity, inability to enjoy outdoor patios.',
      zones: 'Underbrush, dense garden foliage, shaded lawn perimeters, bird baths, and gutter downspout catchment zones.',
      protocol: 'Foliage barrier misting, standing water larvicide treatment, and active breeding ground disruption.',
      waQuery: 'Hi Alvoratech, I am interested in Mosquito reduction for my yard and outdoor areas.'
    }
  };

  if (pestTabs.length > 0 && pestCard) {
    pestTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        pestTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const pestKey = tab.getAttribute('data-pest');
        const data = pestDatabase[pestKey];

        if (data) {
          pestCard.style.opacity = '0.6';
          setTimeout(() => {
            if (pestTitle) pestTitle.textContent = data.title;
            if (pestThreatBadge) pestThreatBadge.textContent = data.badge;
            if (pestImg) {
              pestImg.src = data.img;
              pestImg.alt = data.title;
            }
            if (pestSigns) pestSigns.textContent = data.signs;
            if (pestZones) pestZones.textContent = data.zones;
            if (pestProtocol) pestProtocol.textContent = data.protocol;
            if (pestReportBtn) {
              pestReportBtn.href = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(data.waQuery)}`;
            }
            pestCard.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  /* ==========================================================================
     6. FIELD WORK GALLERY FILTERING & LIGHTBOX
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

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
    const title = card.querySelector('.gallery-title')?.innerText || 'Field Inspection';
    const tag = card.querySelector('.gallery-tag')?.innerText || 'Alvoratech Defense';

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

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
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

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

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
     9. INSPECTION REQUEST FORM VALIDATION & WHATSAPP GENERATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const pestTypeSelect = document.getElementById('pestType');
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

    [fullNameInput, emailInput, phoneInput, pestTypeSelect, propertyTypeSelect, messageInput].forEach(field => {
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

      if (!pestTypeSelect.value) {
        showError(pestTypeSelect, 'Please select the pest type observed.');
        isValid = false;
      } else {
        clearError(pestTypeSelect);
      }

      if (!propertyTypeSelect.value) {
        showError(propertyTypeSelect, 'Please select your property type.');
        isValid = false;
      } else {
        clearError(propertyTypeSelect);
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
        showError(messageInput, 'Please include space details or signs of pest activity.');
        isValid = false;
      } else {
        clearError(messageInput);
      }

      if (isValid) {
        const customerName = fullNameInput.value.trim();
        const customerEmail = emailInput.value.trim();
        const customerPhone = phoneInput.value.trim();
        const customerPest = pestTypeSelect.options[pestTypeSelect.selectedIndex].text;
        const customerProperty = propertyTypeSelect.options[propertyTypeSelect.selectedIndex].text;
        const customerMessage = messageInput.value.trim();

        const prefilledText = 
          `Hi Alvoratech, I would like to request a pest control inspection:\n\n` +
          `• Full Name: ${customerName}\n` +
          `• Email: ${customerEmail}\n` +
          `• Phone: ${customerPhone}\n` +
          `• Pest Observed: ${customerPest}\n` +
          `• Property Type: ${customerProperty}\n` +
          `• Activity Details: ${customerMessage}`;

        const encodedMessage = encodeURIComponent(prefilledText);
        const redirectUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

        if (formStatus) {
          formStatus.textContent = 'Validation successful! Opening WhatsApp to send your inspection request directly to Alvoratech...';
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
      console.warn('Interactive script error in PestControl:', err);
    }
  }, []);

  return (
    <div className="pest-control-demo" id="top">
      <DemoTopBar demoName="Alvoratech Pest Control & Extermination" />
      

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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <span className="logo-text">ALVORATECH</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="nav-links" role="navigation" aria-label="Primary navigation">
        <a href="#home" onClick={(e) => navigateTo('home', e)} className="nav-link active">Home</a>
        <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">About</a>
        <a href="#services" onClick={(e) => navigateTo('services', e)} className="nav-link">Services</a>
        <a href="#pest-guide" className="nav-link">Pest Identifier</a>
        <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className="nav-link">Why Choose Us</a>
        <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="nav-link">Contact</a>
      </nav>

      {/* Desktop Header CTA */}
      <div className="nav-actions">
        <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">
          <span>Request Inspection</span>
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
      <span className="mobile-drawer-title">Pest Control Menu</span>
      <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
        &times;
      </button>
    </div>
    <nav>
      <a href="#home" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="nav-link">Home</a>
      <a href="#why-us" onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} className="nav-link">About Us</a>
      <a href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} className="nav-link">Services</a>
      <a href="#pest-guide" onClick={() => setMobileMenuOpen(false)} className="nav-link">Pest Identifier</a>
      <a href="#faq" onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} className="nav-link">FAQ</a>
      <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="nav-link">Contact</a>
    </nav>
    <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="btn btn-primary nav-cta">
      Request Free Inspection
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
    <section className="hero-section" id="home">
      {/* Radar Pulse Ring Accent */}
      <div className="radar-pulse-ring" aria-hidden="true"></div>

      <div className="container hero-grid">
        
        {/* Left Content */}
        <div className="hero-content">
          

          <h1 className="hero-title reveal stagger-1">
            Total Pest Defense.<br />
            <span className="text-gradient">Guarding What Matters Most.</span>
          </h1>

          <p className="hero-description reveal stagger-2">
            Targeted residential and commercial pest management solutions designed to eliminate active infestations and establish long-lasting perimeter protection.
          </p>

          <div className="hero-actions reveal stagger-3">
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>Request an Inspection</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline btn-lg">Explore Treatment Plans</a>
          </div>

          {/* Hero Trust Badges */}
          <div className="hero-trust-indicators reveal stagger-4">
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span>Residential & Commercial Protection</span>
            </div>
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Family & Pet-Conscious Solutions</span>
            </div>
            <div className="hero-trust-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Rapid Response Inquiries</span>
            </div>
          </div>
        </div>

        {/* Right Media with Floating Cards */}
        <div className="hero-media-wrapper reveal">
          <div className="hero-image-container">
            <img src="/pest-control/assets/images/pest-hero.jpg" alt="Certified pest control technician conducting a property inspection" className="hero-image" width="600" height="490" />
          </div>

          {/* Floating Badge */}
          <div className="floating-shield-card">
            <div className="floating-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="floating-text">
              <strong>Active Perimeter Shield</strong>
              <span>Barrier Inspection & Eradication</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         TRUST INDICATORS (HORIZONTAL VALUE BAR)
         ======================================================================== */}
    <section className="trust-section" aria-label="Core Capabilities">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-item reveal">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span className="trust-item-title">Advanced Inspection</span>
          </div>

          <div className="trust-item reveal stagger-1">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span className="trust-item-title">Targeted Treatments</span>
          </div>

          <div className="trust-item reveal stagger-2">
            <div className="trust-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <span className="trust-item-title">Perimeter Defense</span>
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
            <span className="trust-item-title">Customer-Focused Service</span>
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
            <img src="/pest-control/assets/images/pest-about.jpg" alt="Alvoratech pest control technician performing a thorough foundation inspection" className="about-image" width="540" height="490" loading="lazy" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="reveal stagger-1">Defending Homes and Businesses with Precision and Care.</h2>
          
          <p className="reveal stagger-2">
            At Alvoratech, we understand the stress and disruption unwanted pests cause to homeowners and commercial facilities. Our mission is to deliver comprehensive pest management solutions focused on detailed property evaluations, targeted treatment methodologies, and proactive perimeter protection.
          </p>

          {/* 3 Supporting Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Thorough Diagnostic Approach</h4>
                <p>We trace infestations to their source, inspecting crawlspaces, attics, foundation cracks, and entry voids.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Modern Application Equipment</h4>
                <p>Utilizing high-precision misting tools, targeted micro-injectors, and tamper-resistant monitoring stations.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Targeted Species Solutions</h4>
                <p>Specific eradication strategies customized for termites, rodents, bed bugs, ants, and outdoor pests.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Speak With Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         PEST CONTROL SERVICES (8 SERVICES)
         ======================================================================== */}
    <section className="section-padding bg-light testimonials-section" id="testimonials">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">What Clients Value About Our Service</h2>
          
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
                  <p className="testimonial-text">"We discovered termite activity in our basement framework during a renovation. Alvoratech acted swiftly, conducted a thorough subterranean evaluation, and treated the perimeter. Complete relief!"</p>
                  <div className="testimonial-author">
                    <span className="author-name">David M.</span>
                    <span className="author-role">Homeowner (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"As a restaurant operator, health inspections are non-negotiable. Alvoratech provides punctual, discreet commercial pest management and detailed compliance logs. Invaluable partners."</p>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah B.</span>
                    <span className="author-role">Restaurant Operator (Sample Review)</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="stars-rating" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <p className="testimonial-text">"We had a stubborn rodent problem in our attic that standard traps couldn't solve. Alvoratech found the roofline entry gaps, sealed them permanently, and cleared the space in days."</p>
                  <div className="testimonial-author">
                    <span className="author-name">Marcus T.</span>
                    <span className="author-role">Property Owner (Sample Review)</span>
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
        <h2>Take Back Your Home from Unwanted Pests.</h2>
        <p>Don't let pests compromise your comfort, hygiene, or structural safety. Get in touch with Alvoratech today.</p>
        <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
          </svg>
          <span>Get Started on WhatsApp</span>
        </a>
      </div>
    </section>

    {/* ========================================================================
         FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION - 7 ITEMS)
         ======================================================================== */}
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Schedule Your Property Inspection</h2>
          <p className="reveal stagger-2">Tell us about the pests you've observed, and our team will coordinate the next steps.</p>
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
                    <a href="tel:+14127963968" style={{"fontSize":"0.85rem","color":"var(--color-forest)","fontWeight":"600"}}>(Call directly)</a>
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
            <h3>Request an Inspection</h3>
            <p>Tell us what pests you've seen and we will prepare your prefilled request directly in WhatsApp.</p>

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

              {/* Pest Type & Property Type in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pestType" className="form-label">Pest Type Observed *</label>
                  <select id="pestType" className="form-select" required>
                    <option value="">Select Pest Observed...</option>
                    <option value="Termites">Termites</option>
                    <option value="Rodents (Mice/Rats)">Rodents (Mice/Rats)</option>
                    <option value="Bed Bugs">Bed Bugs</option>
                    <option value="Ants">Ants</option>
                    <option value="Cockroaches">Cockroaches</option>
                    <option value="Mosquitoes & Ticks">Mosquitoes & Ticks</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="General / Unidentified">General / Unidentified</option>
                  </select>
                  <div className="form-error" id="pestTypeError"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type *</label>
                  <select id="propertyType" className="form-select" required>
                    <option value="">Select Property Type...</option>
                    <option value="Single-Family Home">Single-Family Home</option>
                    <option value="Apartment / Condo">Apartment / Condo</option>
                    <option value="Commercial / Retail">Commercial / Retail</option>
                    <option value="Warehouse / Facility">Warehouse / Facility</option>
                  </select>
                  <div className="form-error" id="propertyTypeError"></div>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Observed Activity / Space Details *</label>
                <textarea id="message" className="form-textarea" placeholder="Describe the signs of activity (droppings, sawdust, sounds) and affected areas (attic, kitchen, basement)..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Send Inspection Request</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, your inspection details will open directly in WhatsApp so our team can coordinate with you immediately.
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
          <h2 className="reveal stagger-1">Comprehensive Pest Defense Solutions</h2>
          <p className="reveal stagger-2">Targeted extermination and prevention services engineered for specific pests and property environments.</p>
        </div>

        <div className="services-grid-8">
          
          {/* SERVICE 1: TERMITE INSPECTION & DEFENSE */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-termite.jpg" alt="Termite structural wood inspection and barrier defense" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Termites</span>
            </div>
            <div className="service-content">
              <h3>Termite Inspection & Defense</h3>
              <p>Proactive monitoring and barrier treatments to safeguard structural wooden foundations and joists.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Termite%20Inspection%20and%20Defense" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 2: RODENT EXCLUSION & CONTROL */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-rodent.jpg" alt="Rodent exclusion and attic entry point sealing" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Mice & Rats</span>
            </div>
            <div className="service-content">
              <h3>Rodent Exclusion & Control</h3>
              <p>Comprehensive trapping, removal, and entry-point sealing against mice and rats in walls and attics.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Rodent%20Exclusion%20and%20Control" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 3: BED BUG THERMAL & TARGETED TREATMENTS */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-bedbug.jpg" alt="Bed bug elimination and residential room treatment" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Bed Bugs</span>
            </div>
            <div className="service-content">
              <h3>Bed Bug Treatments</h3>
              <p>Intensive multi-stage targeted eradication designed to reach hidden seams and nesting areas.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Bed%20Bug%20Treatments" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 4: MOSQUITO & TICK REDUCTION */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-mosquito.jpg" alt="Lawn and perimeter foliage mosquito barrier application" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Outdoor Pests</span>
            </div>
            <div className="service-content">
              <h3>Mosquito & Tick Reduction</h3>
              <p>Exterior yard misting and standing water larval disruption to reclaim outdoor patios and lawns.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Mosquito%20and%20Tick%20Reduction" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 5: ANT & CRAWLING INSECT ELIMINATION */}
          <article className="service-card reveal">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-ant.jpg" alt="Kitchen and interior perimeter ant crawling insect defense" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Ants & Crawlers</span>
            </div>
            <div className="service-content">
              <h3>Ant Defense</h3>
              <p>Disruption of active nesting colonies and exterior barrier applications for persistent ant trails.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Ant%20Defense" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 6: COCKROACH ERADICATION */}
          <article className="service-card reveal stagger-1">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-cockroach.jpg" alt="Targeted cockroach eradication in dark moisture-prone spaces" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Roaches</span>
            </div>
            <div className="service-content">
              <h3>Cockroach Eradication</h3>
              <p>High-potency bait matrices and perimeter crack sealing for kitchens, basements, and utilities.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Cockroach%20Eradication" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 7: WILDLIFE & NUISANCE ANIMAL CONTROL */}
          <article className="service-card reveal stagger-2">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-wildlife.jpg" alt="Humane wildlife trapping and roofline animal exclusion" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Wildlife</span>
            </div>
            <div className="service-content">
              <h3>Wildlife Management</h3>
              <p>Humane trapping and exclusion barriers to prevent raccoons, squirrels, and bats from attic nesting.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Wildlife%20Management" target="_blank" rel="noopener noreferrer" className="service-cta-link">
                <span>Request This Service</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>

          {/* SERVICE 8: COMMERCIAL FACILITY PEST MANAGEMENT */}
          <article className="service-card reveal stagger-3">
            <div className="service-image-box">
              <img src="/pest-control/assets/images/service-commercial.jpg" alt="Commercial warehouse facility and restaurant pest management" className="service-image" width="400" height="200" loading="lazy" />
              <span className="service-badge">Commercial</span>
            </div>
            <div className="service-content">
              <h3>Commercial Pest Defense</h3>
              <p>Scheduled regulatory compliance inspections and preventative defense for restaurants and facilities.</p>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I'm%20interested%20in%20Commercial%20Pest%20Defense" target="_blank" rel="noopener noreferrer" className="service-cta-link">
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
         INTERACTIVE PEST IDENTIFICATION GUIDE (SIGNATURE FEATURE)
         ======================================================================== */}
    <section className="section-padding bg-light pest-guide-section" id="pest-guide">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Identify the Threat. Protect Your Space.</h2>
          <p className="reveal stagger-2">Select a pest type to learn about common signs of infestation, nesting zones, and recommended action.</p>
        </div>

        {/* Pest Selection Tabs */}
        <div className="pest-tabs reveal">
          <button type="button" className="pest-tab-btn active" data-pest="termites">Termites</button>
          <button type="button" className="pest-tab-btn" data-pest="rodents">Rodents (Mice & Rats)</button>
          <button type="button" className="pest-tab-btn" data-pest="bedbugs">Bed Bugs</button>
          <button type="button" className="pest-tab-btn" data-pest="ants">Ants</button>
          <button type="button" className="pest-tab-btn" data-pest="cockroaches">Cockroaches</button>
          <button type="button" className="pest-tab-btn" data-pest="mosquitoes">Mosquitoes</button>
        </div>

        {/* Active Pest Details Display Card */}
        <div className="pest-detail-card reveal" id="pestDetailCard">
          
          <div className="pest-detail-media">
            <img src="/pest-control/assets/images/pest-termite.jpg" alt="Termite colony activity identification" className="pest-detail-img" id="pestDetailImg" />
          </div>

          <div className="pest-detail-content">
            <span className="pest-threat-badge" id="pestThreatBadge">High Structural Threat</span>
            <h3 id="pestDetailTitle">Termite Colony Activity</h3>
            
            <div className="pest-info-row">
              <strong>Common Signs of Infestation</strong>
              <p id="pestDetailSigns">Mud tubes along foundation walls, discarded wings near window sills, hollow-sounding wooden beams, or blistered drywall.</p>
            </div>

            <div className="pest-info-row">
              <strong>High-Risk Nesting Zones</strong>
              <p id="pestDetailZones">Subterranean soil, crawlspaces, basement joists, wall studs, and exterior wood-to-ground contact points.</p>
            </div>

            <div className="pest-info-row">
              <strong>Recommended Alvoratech Protocol</strong>
              <p id="pestDetailProtocol">Precision structural evaluation, specialized liquid perimeter barriers, and targeted baiting defense systems.</p>
            </div>

            <div style={{"marginTop":"1.75rem"}}>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1?text=Hi%20Alvoratech,%20I%20suspect%20a%20Termite%20issue%20at%20my%20property%20and%20need%20an%20inspection." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="pestReportBtn">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
                </svg>
                <span>Report This Pest to Alvoratech</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         WHY CHOOSE ALVORATECH SECTION
         ======================================================================== */}
    <section className="section-padding bg-light" id="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Our 4-Step Pest Defense Cycle</h2>
          <p className="reveal stagger-2">A systematic approach to diagnosing, eliminating, and preventing pest infestations.</p>
        </div>

        <div className="steps-timeline">
          
          <div className="step-item reveal">
            <div className="step-number-box">01</div>
            <h3>Request Inspection</h3>
            <p>Contact Alvoratech via WhatsApp, form, or phone to describe the issue.</p>
          </div>

          <div className="step-item reveal stagger-1">
            <div className="step-number-box">02</div>
            <h3>Property Evaluation</h3>
            <p>We examine entry points, nesting zones, and moisture conditions.</p>
          </div>

          <div className="step-item reveal stagger-2">
            <div className="step-number-box">03</div>
            <h3>Targeted Application</h3>
            <p>We deploy species-specific treatments to eradicate active pests.</p>
          </div>

          <div className="step-item reveal stagger-3">
            <div className="step-number-box">04</div>
            <h3>Perimeter Defense</h3>
            <p>Establish protective barriers for year-round peace of mind.</p>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         FIELD WORK & INSPECTION GALLERY SECTION
         ======================================================================== */}
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
      <div className="container about-grid">
        
        {/* Left Media */}
        <div className="about-media reveal">
          <div className="about-image-wrapper">
            <img src="/pest-control/assets/images/pest-about.jpg" alt="Alvoratech pest control technician performing a thorough foundation inspection" className="about-image" width="540" height="490" loading="lazy" />
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2 className="reveal stagger-1">Defending Homes and Businesses with Precision and Care.</h2>
          
          <p className="reveal stagger-2">
            At Alvoratech, we understand the stress and disruption unwanted pests cause to homeowners and commercial facilities. Our mission is to deliver comprehensive pest management solutions focused on detailed property evaluations, targeted treatment methodologies, and proactive perimeter protection.
          </p>

          {/* 3 Supporting Feature Cards */}
          <div className="about-features-list">
            
            <div className="about-feature-card reveal stagger-1">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Thorough Diagnostic Approach</h4>
                <p>We trace infestations to their source, inspecting crawlspaces, attics, foundation cracks, and entry voids.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-2">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Modern Application Equipment</h4>
                <p>Utilizing high-precision misting tools, targeted micro-injectors, and tamper-resistant monitoring stations.</p>
              </div>
            </div>

            <div className="about-feature-card reveal stagger-3">
              <div className="feature-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="feature-info">
                <h4>Targeted Species Solutions</h4>
                <p>Specific eradication strategies customized for termites, rodents, bed bugs, ants, and outdoor pests.</p>
              </div>
            </div>

          </div>

          <div className="reveal stagger-4">
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.926-.453-1.077-.42-1.936-1.391-2.091-1.584-.15-.195-.828-1.101-.828-2.102 0-1.001.524-1.493.71-1.696.186-.203.407-.254.543-.254.136 0 .271.001.391.008.125.006.291-.047.455.347.169.407.576 1.405.627 1.507.051.102.085.22.017.356-.068.136-.102.22-.203.339-.102.119-.214.266-.305.356-.102.102-.208.212-.089.416.119.203.528.871 1.134 1.411.782.696 1.442.912 1.646 1.014.203.102.323.085.441-.051.119-.136.509-.593.645-.797.136-.203.271-.17.458-.102.186.068 1.187.559 1.39.661.203.102.339.153.39.237.051.085.051.492-.093.897z"/>
              </svg>
              <span>Speak With Our Team</span>
            </a>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         PEST CONTROL SERVICES (8 SERVICES)
         ======================================================================== */}
    <section className="section-padding bg-white" id="why-choose">
      <div className="container why-grid">
        
        {/* Left Image */}
        <div className="why-image-wrapper reveal">
          <img src="/pest-control/assets/images/pest-why.jpg" alt="Commercial grade precision pest defense equipment and technicians" className="why-image" width="540" height="520" loading="lazy" />
        </div>

        {/* Right Content */}
        <div className="why-content">
          <h2 className="reveal stagger-1">Why Choose Us?</h2>
          <p className="reveal stagger-2">We blend comprehensive property diagnostics with targeted, family-conscious formulations to eradicate pests and maintain long-term peace of mind.</p>

          <div className="why-benefits-grid">
            
            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h4>Methodical Inspections</h4>
              <p>Thorough examination of attic voids, foundation joints, and plumbing chases.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4>Targeted Formulations</h4>
              <p>Formulations specifically tailored for exact species biology without over-application.</p>
            </div>

            <div className="why-benefit-card reveal stagger-3">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h4>Respect for Living Spaces</h4>
              <p>Clean, courteous technician practices respecting carpets, pets, and children.</p>
            </div>

            <div className="why-benefit-card reveal stagger-4">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                </svg>
              </div>
              <h4>Flexible Scheduling</h4>
              <p>Convenient residential appointments and off-hour commercial service options.</p>
            </div>

            <div className="why-benefit-card reveal stagger-1">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h4>Proactive Barriers</h4>
              <p>Exterior foundation treatments preventing pests before they enter living areas.</p>
            </div>

            <div className="why-benefit-card reveal stagger-2">
              <div className="why-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h4>Direct WhatsApp Contact</h4>
              <p>Instant direct communication via WhatsApp and direct telephone response.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* ========================================================================
         HOW IT WORKS (THE 4-STEP DEFENSE CYCLE)
         ======================================================================== */}
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

    <section className="section-padding bg-white" id="gallery">
      <div className="container-wide">
        
        <div className="section-header">
          <h2 className="reveal stagger-1">Precision in the Field. Real Protection.</h2>
          <p className="reveal stagger-2">Explore photographs of technician inspections, perimeter treatments, and specialized commercial defense.</p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters reveal">
          <button type="button" className="filter-btn active" data-filter="all">All Operations</button>
          <button type="button" className="filter-btn" data-filter="residential">Residential Inspection</button>
          <button type="button" className="filter-btn" data-filter="commercial">Commercial Defense</button>
          <button type="button" className="filter-btn" data-filter="perimeter">Perimeter & Yard</button>
        </div>

        {/* 8 High-Quality Image Cards */}
        <div className="gallery-grid-8" id="galleryGrid">
          
          <div className="gallery-card reveal" data-category="residential">
            <img src="/pest-control/assets/images/gallery-inspection.jpg" alt="Technician inspecting home baseboard and entry points" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Foundation Diagnostic Check</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-1" data-category="perimeter">
            <img src="/pest-control/assets/images/gallery-perimeter.jpg" alt="Exterior foundation perimeter barrier application" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Perimeter</span>
              <h3 className="gallery-title">Perimeter Barrier Shield</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-2" data-category="residential">
            <img src="/pest-control/assets/images/gallery-attic.jpg" alt="Attic and crawlspace rodent exclusion inspection" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Attic Void Inspection</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-3" data-category="commercial">
            <img src="/pest-control/assets/images/gallery-commercial.jpg" alt="Commercial corporate facility scheduled pest defense" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Commercial</span>
              <h3 className="gallery-title">Commercial Facility Service</h3>
            </div>
          </div>

          <div className="gallery-card reveal" data-category="perimeter">
            <img src="/pest-control/assets/images/gallery-sprayer.jpg" alt="Commercial spray application equipment for pest prevention" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Equipment</span>
              <h3 className="gallery-title">Micro-Mist Application</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-1" data-category="residential">
            <img src="/pest-control/assets/images/gallery-monitoring.jpg" alt="Technician installing tamper-resistant monitoring station" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Residential</span>
              <h3 className="gallery-title">Tamper-Proof Monitoring</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-2" data-category="residential">
            <img src="/pest-control/assets/images/gallery-exclusion.jpg" alt="Roofline and crawlspace structural exclusion work" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Exclusion</span>
              <h3 className="gallery-title">Entry Gap Sealing</h3>
            </div>
          </div>

          <div className="gallery-card reveal stagger-3" data-category="perimeter">
            <img src="/pest-control/assets/images/gallery-yard.jpg" alt="Outdoor lawn and foliage mosquito reduction treatment" className="gallery-image" width="400" height="270" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-tag">Perimeter</span>
              <h3 className="gallery-title">Foliage Barrier Misting</h3>
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
          <h2 className="reveal stagger-1">Everything You Need to Know</h2>
          <p className="reveal stagger-2">Find clear, honest answers regarding our residential and commercial pest defense solutions.</p>
        </div>

        <div className="faq-container">
          
          {/* Question 1 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What types of pests does Alvoratech treat?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Alvoratech manages a wide range of common and structural pests, including subterranean termites, rodents (mice and rats), bed bugs, ants, German and American cockroaches, mosquitoes, ticks, spiders, and nuisance wildlife.</p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Are your pest control treatments safe for pets and children?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We prioritize modern, targeted formulations applied according to strict safety protocols. We recommend allowing treated surfaces to dry thoroughly before children and pets re-enter the immediate area.</p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What should I do before the technician arrives for an inspection?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Ensure clear access to key diagnostic areas: under sinks, around basement perimeter walls, near crawlspace openings, and attic entrances. Noting where and when you observed pest activity helps our technician pinpoint the source faster.</p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="faq-item reveal">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How quickly can Alvoratech respond to an urgent pest situation?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>We prioritize urgent requests submitted via WhatsApp and direct telephone contact. Our team works to schedule prompt evaluations to prevent small issues from expanding into major infestations.</p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="faq-item reveal stagger-1">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>What is the difference between a one-time treatment and ongoing perimeter protection?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>A one-time treatment resolves an existing active infestation. Ongoing perimeter defense reinforces exterior barrier treatments cyclically to disrupt insect reproductive cycles and stop new pests from entering your structure.</p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="faq-item reveal stagger-2">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>Do you provide commercial pest management for businesses and food establishments?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>Yes. We offer tailored commercial programs for food service, retail, office parks, and warehousing that adhere to local sanitary regulations, with minimal disruption to your operations.</p>
            </div>
          </div>

          {/* Question 7 */}
          <div className="faq-item reveal stagger-3">
            <button type="button" className="faq-button" aria-expanded="false">
              <span>How can I schedule an inspection or request a quote?</span>
              <div className="faq-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div className="faq-content">
              <p>You can schedule an inspection by clicking any WhatsApp button on this site, messaging us directly at +1 (412) 796-3968, submitting the contact form below, or emailing info@Alvoratechhq.com.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ========================================================================
         CONTACT & INSPECTION REQUEST SECTION
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
          <h2 className="reveal stagger-1">Schedule Your Property Inspection</h2>
          <p className="reveal stagger-2">Tell us about the pests you've observed, and our team will coordinate the next steps.</p>
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
                    <a href="tel:+14127963968" style={{"fontSize":"0.85rem","color":"var(--color-forest)","fontWeight":"600"}}>(Call directly)</a>
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
            <h3>Request an Inspection</h3>
            <p>Tell us what pests you've seen and we will prepare your prefilled request directly in WhatsApp.</p>

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

              {/* Pest Type & Property Type in Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pestType" className="form-label">Pest Type Observed *</label>
                  <select id="pestType" className="form-select" required>
                    <option value="">Select Pest Observed...</option>
                    <option value="Termites">Termites</option>
                    <option value="Rodents (Mice/Rats)">Rodents (Mice/Rats)</option>
                    <option value="Bed Bugs">Bed Bugs</option>
                    <option value="Ants">Ants</option>
                    <option value="Cockroaches">Cockroaches</option>
                    <option value="Mosquitoes & Ticks">Mosquitoes & Ticks</option>
                    <option value="Wildlife">Wildlife</option>
                    <option value="General / Unidentified">General / Unidentified</option>
                  </select>
                  <div className="form-error" id="pestTypeError"></div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyType" className="form-label">Property Type *</label>
                  <select id="propertyType" className="form-select" required>
                    <option value="">Select Property Type...</option>
                    <option value="Single-Family Home">Single-Family Home</option>
                    <option value="Apartment / Condo">Apartment / Condo</option>
                    <option value="Commercial / Retail">Commercial / Retail</option>
                    <option value="Warehouse / Facility">Warehouse / Facility</option>
                  </select>
                  <div className="form-error" id="propertyTypeError"></div>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Observed Activity / Space Details *</label>
                <textarea id="message" className="form-textarea" placeholder="Describe the signs of activity (droppings, sawdust, sounds) and affected areas (attic, kitchen, basement)..." required></textarea>
                <div className="form-error" id="messageError"></div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-lg" style={{"width":"100%"}}>
                <span>Send Inspection Request</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <p className="form-notice">
                Upon submitting, your inspection details will open directly in WhatsApp so our team can coordinate with you immediately.
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <span className="logo-text">ALVORATECH</span>
        </a>
        <p>Professional residential and commercial pest defense solutions designed for safety, precision, and lasting peace of mind.</p>
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
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Termite Defense</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Rodent Exclusion</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Bed Bug Treatments</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Mosquito Control</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Ant Defense</a>
          <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Pest Management</a>
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
