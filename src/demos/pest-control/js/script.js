/**
 * ALVORATECH – PREMIUM PEST CONTROL & EXTERMINATION SERVICES WEBSITE
 * Interactive JavaScript (Vanilla ES6+)
 * File: js/script.js
 */

document.addEventListener('DOMContentLoaded', () => {
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
      img: 'assets/images/pest-termite.jpg',
      signs: 'Mud tubes along foundation walls, discarded wings near window sills, hollow-sounding wooden beams, or blistered drywall.',
      zones: 'Subterranean soil, crawlspaces, basement joists, wall studs, and exterior wood-to-ground contact points.',
      protocol: 'Precision structural evaluation, specialized liquid perimeter barriers, and targeted baiting defense systems.',
      waQuery: 'Hi Alvoratech, I suspect a Termite issue at my property and need an inspection.'
    },
    rodents: {
      title: 'Mice & Rat Infestation',
      badge: 'Hygiene & Wiring Threat',
      img: 'assets/images/pest-rodent.jpg',
      signs: 'Small dark droppings in cabinets, gnaw marks on food boxes or wires, scratching noises in attics/walls at night.',
      zones: 'Attics, basements, wall voids, kitchen pantries, garage corners, and crawlspace entry holes.',
      protocol: 'Multi-point entry exclusion, targeted sanitization, mechanical trapping, and perimeter bait station barriers.',
      waQuery: 'Hi Alvoratech, I am dealing with Rodents (mice/rats) and need prompt exclusion.'
    },
    bedbugs: {
      title: 'Bed Bug Infestation',
      badge: 'High Discomfort Threat',
      img: 'assets/images/pest-bedbug.jpg',
      signs: 'Small rust-colored stains on mattress seams, tiny egg casings, waking up with clustered red skin welts.',
      zones: 'Mattress seams, headboards, baseboards, upholstered furniture crevices, and electrical outlet plates.',
      protocol: 'Intensive thermal application and specialized residual perimeter defense to eradicate all life stages.',
      waQuery: 'Hi Alvoratech, I need urgent assistance regarding Bed Bugs.'
    },
    ants: {
      title: 'Carpenter & Sugar Ant Trails',
      badge: 'Nuisance & Wood Damage',
      img: 'assets/images/pest-ant.jpg',
      signs: 'Visible ant trails across kitchen counters, fine sawdust shavings (frass) under wooden sills, winged swarmers indoors.',
      zones: 'Kitchen countertops, wall voids, beneath sinks, exterior patio perimeters, and damp decaying wood.',
      protocol: 'Colony nest disruption with transfer baits, interior crack-and-crevice treatments, and continuous exterior foundation barriers.',
      waQuery: 'Hi Alvoratech, I have an Ant infestation and would like a treatment quote.'
    },
    cockroaches: {
      title: 'German & American Cockroaches',
      badge: 'Health & Sanitation Alert',
      img: 'assets/images/pest-cockroach.jpg',
      signs: 'Unpleasant oily odor, pepper-like droppings behind refrigerators, oval egg capsules (oothecae) in dark cabinets.',
      zones: 'Warm dark spaces behind kitchen appliances, under sinks, floor drains, basements, and commercial food prep areas.',
      protocol: 'Targeted baiting gel matrices, insect growth regulators (IGRs), and moisture control barrier sealing.',
      waQuery: 'Hi Alvoratech, I need Cockroach eradication for my property.'
    },
    mosquitoes: {
      title: 'Mosquito & Yard Pests',
      badge: 'Outdoor Biting Nuisance',
      img: 'assets/images/pest-mosquito.jpg',
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
});
