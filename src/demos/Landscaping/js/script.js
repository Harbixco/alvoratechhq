/**
 * ALVORATECH – Premium Landscaping & Outdoor Living Website
 * Core Interactive JavaScript
 * Modular, vanilla ES6+, fully accessible
 */

document.addEventListener('DOMContentLoaded', () => {
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
      before: 'assets/images/ba-patio-before.jpg',
      after: 'assets/images/ba-patio-after.jpg',
      caption: 'Backyard Transformation: Overgrown unpaved yard transformed into an architectural paver patio with seating & evening lighting.'
    },
    curb: {
      before: 'assets/images/ba-curb-before.jpg',
      after: 'assets/images/ba-curb-after.jpg',
      caption: 'Front Yard Curb Appeal: Patchy slope redesigned with tiered natural stone beds, specimen shrubs, and manicured turf.'
    },
    lawn: {
      before: 'assets/images/ba-lawn-before.jpg',
      after: 'assets/images/ba-lawn-after.jpg',
      caption: 'Lawn Revitalization: Severely weed-choked yard transformed into deep-green, golf-course grade lawn with customized aeration & nutrition.'
    },
    wall: {
      before: 'assets/images/ba-wall-before.jpg',
      after: 'assets/images/ba-wall-after.jpg',
      caption: 'Retaining Wall & Grading: Eroded hill stabilized with commercial-grade dry-stack stone retaining wall and landscape plantings.'
    },
    living: {
      before: 'assets/images/ba-living-before.jpg',
      after: 'assets/images/ba-living-after.jpg',
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

});
