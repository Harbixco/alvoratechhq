/**
 * ALVORATECH – PREMIUM CLEANING SERVICES WEBSITE
 * Interactive JavaScript (Vanilla ES6+)
 * File: js/script.js
 */

document.addEventListener('DOMContentLoaded', () => {
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
});
