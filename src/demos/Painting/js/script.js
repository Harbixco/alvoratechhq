/**
 * ALVORATECH – PREMIUM RESIDENTIAL & COMMERCIAL PAINTING CONTRACTORS
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

  // Close drawer when any mobile nav link or CTA button is clicked
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
     5. INTERACTIVE COLOR PALETTE VISUALIZER
     ========================================================================== */
  const colorData = {
    alabaster: {
      name: "Alabaster White",
      hex: "#F2EFE9",
      contrast: "#0F172A",
      finish: "Matte / Eggshell",
      rooms: "Living Rooms & Open Concepts",
      sheen: "Soft, Warm Light Reflectance",
      desc: "Warm, radiant, light-reflective white that creates spacious comfort without harsh yellow undertones."
    },
    naval: {
      name: "Naval Indigo",
      hex: "#1D2939",
      contrast: "#FFFFFF",
      finish: "Satin / Semi-Gloss",
      rooms: "Dining Rooms, Cabinets & Accent Walls",
      sheen: "Rich Architectural Lustre",
      desc: "Dramatic, commanding deep navy that anchors architectural millwork and custom kitchen cabinetry."
    },
    sage: {
      name: "Modern Sage",
      hex: "#84937F",
      contrast: "#FFFFFF",
      finish: "Eggshell / Velvet",
      rooms: "Bedrooms, Bathrooms & Studies",
      sheen: "Smooth Earthy Matte",
      desc: "Serene organic green bringing calmness, mindfulness, and natural daylight harmony indoors."
    },
    repose: {
      name: "Repose Greige",
      hex: "#D1CCC4",
      contrast: "#0F172A",
      finish: "Eggshell / Satin",
      rooms: "Whole-Home Walls, Trim & Basements",
      sheen: "Balanced Neutral Sheen",
      desc: "The ultimate designer neutral bridging warm wood flooring and contemporary cool metallic accents."
    },
    charcoal: {
      name: "Charcoal Slate",
      hex: "#2C3439",
      contrast: "#FFFFFF",
      finish: "Low-Lustre / Semi-Gloss",
      rooms: "Exteriors, Front Doors & Fireplaces",
      sheen: "High-Durability Exterior Sheen",
      desc: "Striking contemporary contrast creating bold, modern curb appeal on trim, garage doors, and stucco."
    }
  };

  const swatchButtons = document.querySelectorAll('.swatch-button');
  const previewCanvas = document.querySelector('.preview-wall-canvas');
  const previewTitle = document.getElementById('preview-color-title');
  const previewDesc = document.getElementById('preview-color-desc');
  const metaHex = document.getElementById('meta-hex-code');
  const metaFinish = document.getElementById('meta-finish-type');
  const metaRooms = document.getElementById('meta-recommended-rooms');

  if (swatchButtons.length > 0 && previewCanvas) {
    swatchButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        swatchButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const swatchKey = btn.getAttribute('data-swatch');
        const data = colorData[swatchKey];

        if (data) {
          previewCanvas.style.backgroundColor = data.hex;
          if (previewTitle) previewTitle.textContent = data.name;
          if (previewDesc) previewDesc.textContent = data.desc;
          if (metaHex) metaHex.textContent = data.hex;
          if (metaFinish) metaFinish.textContent = data.finish;
          if (metaRooms) metaRooms.textContent = data.rooms;
        }
      });
    });
  }

  /* ==========================================================================
     6. 5-SCENARIO INTERACTIVE BEFORE & AFTER SHOWCASE
     ========================================================================== */
  const baScenarios = {
    cabinets: {
      before: 'assets/images/ba-cabinets-before.jpg',
      after: 'assets/images/ba-cabinets-after.jpg',
      title: 'Kitchen Cabinet Refinishing & Factory Urethane Spray'
    },
    exterior: {
      before: 'assets/images/ba-exterior-before.jpg',
      after: 'assets/images/ba-exterior-after.jpg',
      title: 'Modern Exterior Siding & Trim Color Transformation'
    },
    living: {
      before: 'assets/images/ba-living-before.jpg',
      after: 'assets/images/ba-living-after.jpg',
      title: 'Open-Concept Living Room Designer Refresh'
    },
    deck: {
      before: 'assets/images/ba-deck-before.jpg',
      after: 'assets/images/ba-deck-after.jpg',
      title: 'Weathered Cedar Deck Power Wash & Penetrating Stain'
    },
    commercial: {
      before: 'assets/images/ba-commercial-before.jpg',
      after: 'assets/images/ba-commercial-after.jpg',
      title: 'Commercial Office Space Painting & Drywall Repair'
    }
  };

  const baTabButtons = document.querySelectorAll('.ba-tab-btn');
  const baImgBefore = document.getElementById('ba-image-before');
  const baImgAfter = document.getElementById('ba-image-after');
  const baAfterWrap = document.getElementById('ba-after-wrap');
  const baHandle = document.getElementById('ba-handle');
  const baRangeInput = document.getElementById('ba-range');
  const baSliderContainer = document.querySelector('.ba-slider-container');

  // Handle Tab Switch
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
          // Reset slider to center
          if (baRangeInput) {
            baRangeInput.value = 50;
            updateSliderPosition(50);
          }
        }
      });
    });
  }

  // Update Slider Position Function
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

  // Synchronize internal width of after image with container width
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

  // Filtering
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

  // Lightbox Modal
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
     8. INTERACTIVE PAINTING COST ESTIMATOR
     ========================================================================== */
  const serviceRates = {
    'interior-room': { minRate: 2.10, maxRate: 2.60, label: 'Single/Multi Room Interior', hours: '1 – 2 Days' },
    'full-interior': { minRate: 2.70, maxRate: 3.40, label: 'Complete Home Interior', hours: '3 – 5 Days' },
    'cabinets': { minRate: 3.80, maxRate: 4.80, label: 'Kitchen Cabinet Refinishing', hours: '3 – 4 Days' },
    'exterior': { minRate: 3.00, maxRate: 3.90, label: 'Exterior Siding & Trim', hours: '3 – 6 Days' }
  };

  let selectedService = 'full-interior';
  const calcServiceButtons = document.querySelectorAll('.calc-service-btn');
  const calcRange = document.getElementById('calc-sqft-range');
  const calcRangeDisplay = document.getElementById('calc-sqft-display');
  const calcPriceOutput = document.getElementById('calc-price-output');
  const calcServiceDisplay = document.getElementById('calc-meta-service');
  const calcTimelineDisplay = document.getElementById('calc-meta-timeline');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  const updateEstimate = () => {
    if (!calcRange || !calcPriceOutput) return;
    const sqft = parseInt(calcRange.value, 10);
    const serviceInfo = serviceRates[selectedService] || serviceRates['full-interior'];

    const minPrice = Math.round(sqft * serviceInfo.minRate);
    const maxPrice = Math.round(sqft * serviceInfo.maxRate);

    calcPriceOutput.textContent = `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()}`;
    if (calcRangeDisplay) calcRangeDisplay.textContent = `${sqft.toLocaleString()} sq ft`;
    if (calcServiceDisplay) calcServiceDisplay.textContent = serviceInfo.label;
    if (calcTimelineDisplay) calcTimelineDisplay.textContent = serviceInfo.hours;

    // Update WhatsApp link with prefilled parameters
    if (calcWhatsappBtn) {
      const msg = encodeURIComponent(
        `Hello Alvoratech! I used your online estimator for ${serviceInfo.label} (~${sqft.toLocaleString()} sq ft). My estimated range is $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}. I would like to schedule an on-site consultation!`
      );
      calcWhatsappBtn.href = `https://wa.me/message/RVTZQMFL7I6OH1?text=${msg}`;
    }
  };

  if (calcServiceButtons.length > 0) {
    calcServiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        calcServiceButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedService = btn.getAttribute('data-service');
        updateEstimate();
      });
    });
  }

  if (calcRange) {
    calcRange.addEventListener('input', updateEstimate);
  }

  updateEstimate();

  /* ==========================================================================
     9. TESTIMONIALS SLIDER & AUTOPLAY
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
     10. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const answer = item.querySelector('.faq-answer');

    if (button && answer) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-button');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current item
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
     11. ESTIMATE REQUEST FORM VALIDATION & WHATSAPP REDIRECT
     ========================================================================== */
  const estimateForm = document.getElementById('estimate-request-form');

  if (estimateForm) {
    estimateForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim() || '';
      const phone = document.getElementById('form-phone')?.value.trim() || '';
      const email = document.getElementById('form-email')?.value.trim() || '';
      const service = document.getElementById('form-service')?.value || 'Not Specified';
      const notes = document.getElementById('form-notes')?.value.trim() || 'No additional notes provided.';

      if (!name || !phone) {
        alert('Please provide your name and phone number so our painting estimator can assist you.');
        return;
      }

      const message = `Hello Alvoratech Painting! I would like to request an estimate consultation:\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email || 'N/A'}\n` +
        `• Project Scope: ${service}\n` +
        `• Project Notes: ${notes}\n\n` +
        `Please contact me to arrange an on-site walkthrough!`;

      const whatsappUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Reset form and show confirmation
      estimateForm.reset();
      alert('Thank you! Redirecting you to WhatsApp to connect directly with our Alvoratech painting dispatcher.');
    });
  }

});
