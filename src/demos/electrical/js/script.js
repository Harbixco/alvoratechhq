/**
 * ALVORATECH – PREMIER ELECTRICAL CONTRACTORS
 * Licensed Residential & Commercial Electrical Engineering
 * Pure Vanilla JavaScript ES6+ Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
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
     6. 5-SCENARIO INTERACTIVE BEFORE & AFTER SLIDER
     ========================================================================== */
  const baScenarios = {
    panel: {
      before: 'assets/images/ba-panel-before.jpg',
      after: 'assets/images/ba-panel-after.jpg',
      title: '200A Main Panel Heavy-Up & Whole-Home Surge Arrestor'
    },
    ev: {
      before: 'assets/images/ba-ev-before.jpg',
      after: 'assets/images/ba-ev-after.jpg',
      title: 'Tesla Wall Connector Level 2 Dedicated EV Circuit'
    },
    conduit: {
      before: 'assets/images/ba-conduit-before.jpg',
      after: 'assets/images/ba-conduit-after.jpg',
      title: 'Commercial EMT Metallic Conduit & Three-Phase Distribution'
    },
    gen: {
      before: 'assets/images/ba-gen-before.jpg',
      after: 'assets/images/ba-gen-after.jpg',
      title: 'Generac Automatic Standby Generator Installation'
    },
    light: {
      before: 'assets/images/ba-light-before.jpg',
      after: 'assets/images/ba-light-after.jpg',
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

});
