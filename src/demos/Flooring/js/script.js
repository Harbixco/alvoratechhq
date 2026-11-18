/**
 * ALVORATECH – Premium Flooring Installation & Refinishing Website
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
      before: 'assets/images/ba-living-before.jpg',
      after: 'assets/images/ba-living-after.jpg',
      caption: 'Living Room Transformation: Stained wall-to-wall carpet replaced with 7.5" wire-brushed European White Oak wide-plank hardwood.'
    },
    kitchen: {
      before: 'assets/images/ba-kitchen-before.jpg',
      after: 'assets/images/ba-kitchen-after.jpg',
      caption: 'Kitchen Transformation: Dated linoleum sheet replaced with polished 24x48 rectified Calacatta marble porcelain tile.'
    },
    basement: {
      before: 'assets/images/ba-basement-before.jpg',
      after: 'assets/images/ba-basement-after.jpg',
      caption: 'Basement Transformation: Cold uneven concrete floor leveled and finished with 100% waterproof rigid core luxury vinyl plank (LVP).'
    },
    historic: {
      before: 'assets/images/ba-historic-before.jpg',
      after: 'assets/images/ba-historic-after.jpg',
      caption: 'Historic Floor Restoration: Deeply scratched 60-year-old pine floor restored via 99.8% dustless sanding and warm satin walnut stain.'
    },
    foyer: {
      before: 'assets/images/ba-foyer-before.jpg',
      after: 'assets/images/ba-foyer-after.jpg',
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

});
