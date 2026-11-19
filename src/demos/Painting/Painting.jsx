import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './painting.css';

export default function Painting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (['services', 'portfolio', 'gallery', 'why-us', 'about', 'faq', 'contact', 'estimate'].includes(hash)) {
        if (hash === 'gallery') return 'portfolio';
        if (hash === 'about') return 'why-us';
        if (hash === 'estimate') return 'contact';
        return hash;
      }
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
      if (['services', 'portfolio', 'gallery', 'why-us', 'about', 'faq', 'contact', 'estimate'].includes(hash)) {
        if (hash === 'gallery') setCurrentView('portfolio');
        else if (hash === 'about') setCurrentView('why-us');
        else if (hash === 'estimate') setCurrentView('contact');
        else setCurrentView(hash);
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
 * ALVORATECH – PREMIUM RESIDENTIAL & COMMERCIAL PAINTING CONTRACTORS
 * Pure Vanilla JavaScript ES6+ Architecture
 */

      const runInit = () => {
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
          anchor.addEventListener('click', function (e) {
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
           6. 5-SCENARIO INTERACTIVE BEFORE & AFTER SLIDER
           ========================================================================== */
        const baScenarios = {
          cabinets: {
            before: '/painting/assets/images/ba-cabinets-before.jpg',
            after: '/painting/assets/images/service-cabinet-refinishing.jpg?v=7',
            title: 'Kitchen Cabinet Refinishing & Factory Urethane Spray'
          },
          exterior: {
            before: '/painting/assets/images/ba-exterior-before.jpg',
            after: '/painting/assets/images/ba-exterior-after.jpg',
            title: 'Modern Exterior Siding & Trim Color Transformation'
          },
          living: {
            before: '/painting/assets/images/ba-living-before.jpg',
            after: '/painting/assets/images/ba-living-after.jpg',
            title: 'Open-Concept Living Room Designer Refresh'
          },
          deck: {
            before: '/painting/assets/images/ba-deck-before.jpg',
            after: '/painting/assets/images/ba-deck-after.jpg',
            title: 'Weathered Cedar Deck Power Wash & Penetrating Stain'
          },
          commercial: {
            before: '/painting/assets/images/ba-commercial-before.jpg',
            after: '/painting/assets/images/ba-commercial-after.jpg',
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

      }; runInit();

    } catch (err) {
      console.warn('Interactive script error in Painting:', err);
    }
  }, []);

  return (
    <div className="painting-demo" id="top">
      <DemoTopBar demoName="Alvoratech Painting Contractors" />


      {/* ==========================================================================
       1. TOP DEMO BANNER
       ========================================================================== */}
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
                  <path d="M19 11V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4" />
                  <path d="M14 8h5a2 2 0 0 1 2 2v1" />
                  <rect x="10" y="14" width="12" height="8" rx="2" />
                  <path d="M14 18h4" />
                </svg>
              </div>
              <div>
                <span className="logo-text">ALVORATECH</span>
                <span className="logo-tagline">Painting Contractors</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="nav-links" role="navigation" aria-label="Main Navigation">
              <a href="#hero" onClick={(e) => navigateTo('home', e)} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#services" onClick={(e) => navigateTo('services', e)} className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Services</a>
              <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className={`nav-link ${currentView === 'portfolio' ? 'active' : ''}`}>Portfolio</a>
              <a href="#why-us" onClick={(e) => navigateTo('why-us', e)} className={`nav-link ${currentView === 'why-us' ? 'active' : ''}`}>Why Us</a>
              <a href="#faq" onClick={(e) => navigateTo('faq', e)} className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
              <a href="#contact" onClick={(e) => navigateTo('contact', e)} className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>

            {/* Nav CTA Actions */}
            <div className="nav-actions">
              <a href="#estimate" onClick={(e) => navigateTo('contact', e)} className="btn btn-primary btn-sm">
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Get Free Estimate
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
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Painting Menu</span>
          <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
            &times;
          </button>
        </div>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} href="#hero" className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>Home</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} href="#services" className={`nav-link ${currentView === 'services' ? 'active' : ''}`}>Painting Services</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('portfolio', e); }} href="#portfolio" className={`nav-link ${currentView === 'portfolio' ? 'active' : ''}`}>Project Gallery</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} href="#why-us" className={`nav-link ${currentView === 'why-us' ? 'active' : ''}`}>Why Choose Us</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('faq', e); }} href="#faq" className={`nav-link ${currentView === 'faq' ? 'active' : ''}`}>FAQ</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className={`nav-link ${currentView === 'contact' ? 'active' : ''}`}>Contact & Location</a>
        <a onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} href="#contact" className="btn btn-primary" style={{ "marginTop": "1rem" }}>
          Get Free Estimate
        </a>
        <a onClick={() => setMobileMenuOpen(false)} href="tel:+14127963968" className="btn btn-secondary" style={{ "marginTop": "0.5rem" }}>
          Call: +1 (412) 796-3968
        </a>
        <a onClick={() => setMobileMenuOpen(false)} href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ "marginTop": "0.5rem" }}>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat On WhatsApp
        </a>
      </aside>
      <main id="main-content">
      {/* Section Breadcrumb & Hero Banner */}
      {currentView !== 'home' && (
        <section className="view-page-banner" style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '3.5rem 1.5rem',
          color: '#ffffff',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <nav style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#94a3b8' }} aria-label="Breadcrumb">
              <a href="#hero" onClick={(e) => navigateTo('home', e)} style={{ color: '#e2e8f0', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 0.5rem', opacity: 0.6 }}>/</span>
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>
                {currentView === 'services' && 'Services'}
                {currentView === 'portfolio' && 'Portfolio'}
                {currentView === 'why-us' && 'Why Choose Us'}
                {currentView === 'faq' && 'Frequently Asked Questions'}
                {currentView === 'contact' && 'Contact & Free Estimate'}
              </span>
            </nav>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 0.75rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
              {currentView === 'services' && 'Our Painting Services & Capabilities'}
              {currentView === 'portfolio' && 'Project Portfolio & Transformations'}
              {currentView === 'why-us' && 'About Alvoratech & Why Homeowners Choose Us'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {currentView === 'contact' && 'Request Your Free Estimate'}
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#cbd5e1', margin: 0, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              {currentView === 'services' && 'From fine interior finishes and clean cabinet spray booths to durable commercial weatherproofing coatings.'}
              {currentView === 'portfolio' && 'Explore authentic residential, commercial, and cabinetry transformations across the greater region.'}
              {currentView === 'why-us' && 'Our trade standards, licensed master painters, and zero-shortcut architectural philosophy.'}
              {currentView === 'faq' && 'Transparent answers regarding preparation, materials, pricing, project timelines, and our 10-year warranty.'}
              {currentView === 'contact' && 'Get in touch with our master painting team for an upfront, transparent consultation and detailed project estimate.'}
            </p>
          </div>
        </section>
      )}

        {/* HOMEPAGE VIEW: Clean, customer-centric essentials */}
        {currentView === 'home' && (
          <>
        <section className="hero-section" id="hero">
          <div className="container">
            <div className="hero-grid">
              {/* Left Column Content */}
              <div className="hero-content reveal">
                

                <h1 className="hero-title">
                  Flawless Color. Meticulous Prep. <span className="highlight-accent">Enduring Craftsmanship.</span>
                </h1>

                <p className="hero-subtitle">
                  Transforming residential homes and commercial spaces with architectural coatings, dust-free prep, and laser-straight cut lines guaranteed for years to come.
                </p>

                <div className="hero-ctas">
                  <a href="#estimate" className="btn btn-coral btn-lg">
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Get a Free Estimate
                  </a>
                  <a href="#portfolio" className="btn btn-secondary btn-lg">
                    Explore Our Portfolio
                  </a>
                </div>

                {/* Trust Row */}
                <div className="hero-trust-row">
                  <div className="trust-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>Licensed & Fully Insured</span>
                  </div>
                  <div className="trust-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>2-Year Workmanship Warranty</span>
                  </div>
                  <div className="trust-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>100% Dust-Controlled Prep</span>
                  </div>
                </div>
              </div>

              {/* Right Column Image Presentation */}
              <div className="hero-media reveal stagger-2">
                <div className="hero-image-wrapper">
                  <img src="/painting/assets/images/hero-painter-roller.jpg?v=10" alt="Alvoratech professional painting contractor rolling crisp interior wall" className="hero-image" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         4. TRUST METRICS STRIP
         ========================================================================== */}
        <section className="metrics-strip">
          <div className="container">
            <div className="metrics-grid">
              {/* Metric 1 */}
              <div className="metric-card reveal stagger-1">
                <div className="metric-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="metric-info">
                  <h3>2-Year</h3>
                  <p>Written Craftsmanship Warranty against peeling or blistering</p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="metric-card reveal stagger-2">
                <div className="metric-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="metric-info">
                  <h3>100%</h3>
                  <p>HEPA Dust-Controlled Sanding & Furniture Protection</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="metric-card reveal stagger-3">
                <div className="metric-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                </div>
                <div className="metric-info">
                  <h3>Zero-Odor</h3>
                  <p>Ultra-Low-VOC & Pet-Safe Premium Interior Formulations</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="metric-card reveal stagger-4">
                <div className="metric-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 14v1" /><path d="M9 19v2" /><path d="M9 3v2" /><path d="M9 9v1" /></svg>
                </div>
                <div className="metric-info">
                  <h3>Firm Quote</h3>
                  <p>Guaranteed All-Inclusive Pricing with No Hidden Surcharges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         5. CORE PAINTING SERVICES (8 COMPREHENSIVE CARDS)
         ========================================================================== */}
        {/* ==========================================================================
             HOME FEATURED SERVICES PREVIEW
             ========================================================================== */}
        <section className="section-padding services-section" id="services">
          <div className="container">
            <div className="section-header text-center reveal">
              <span className="section-eyebrow">OUR SPECIALTIES</span>
              <h2>Architectural Painting Services</h2>
              <p className="section-subtitle">
                Engineered for maximum longevity, flawless aesthetics, and zero disruption to your daily routine.
              </p>
            </div>
            
            <div className="services-grid-8">
              {/* Service 1: Interior */}
              <article className="service-card reveal stagger-1">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-interior.jpg" alt="Interior room painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Interior Precision</span>
                </div>
                <div className="service-content">
                  <h3>Interior Wall & Ceiling Painting</h3>
                  <p>Flawless brushwork and rolling with zero splatter, razor-sharp cut lines, and odor-free premium low-VOC paints.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              {/* Service 2: Exterior */}
              <article className="service-card reveal stagger-2">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-exterior.jpg" alt="Exterior home painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Weather Defense</span>
                </div>
                <div className="service-content">
                  <h3>Exterior Siding & Trim Protection</h3>
                  <p>Elastomeric sealants and weather-tested coatings shielding siding, brick, and stucco against seasonal weathering.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              {/* Service 3: Cabinets */}
              <article className="service-card reveal stagger-3">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-cabinet-refinishing.jpg?v=7" alt="Kitchen cabinet spraying" className="service-image" loading="lazy" />
                  <span className="service-badge">Kitchen Cabinets</span>
                </div>
                <div className="service-content">
                  <h3>Cabinet Spraying & Refinishing</h3>
                  <p>Breathe new life into your kitchen with factory-smooth urethane enamels at 70% less cost than replacement.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>

              {/* Service 4: Commercial */}
              <article className="service-card reveal stagger-4">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-commercial.jpg" alt="Commercial interior and exterior painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Commercial</span>
                </div>
                <div className="service-content">
                  <h3>Commercial & Architectural Coating</h3>
                  <p>Fast-turnaround commercial coating solutions scheduled after-hours to keep your facilities fully operational.</p>
                  <button onClick={(e) => navigateTo('services', e)} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Explore Service Details &rarr;
                  </button>
                </div>
              </article>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button onClick={(e) => navigateTo('services', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', fontWeight: 600 }}>
                View All 8 Services & Specialty Solutions &rarr;
              </button>
            </div>
          </div>
        </section>
        <section className="section-padding" id="about" style={{ "backgroundColor": "var(--color-bg-light)" }}>
          <div className="container">
            <div className="why-grid">
              <div className="why-image-card reveal">
                <img src="/painting/assets/images/about-painter-wall.jpg?v=10" alt="Alvoratech master painting contractor cutting pristine trim lines" className="why-image" loading="lazy" />
              </div>
              <div className="reveal stagger-1">
                <span className="section-eyebrow">ABOUT ALVORATECH</span>
                <h2>Raising the Standard of Residential & Commercial Painting</h2>
                <p style={{ "fontSize": "1.0625rem", "marginBottom": "1.25rem" }}>
                  At Alvoratech, painting isn’t just a trade—it’s an architectural discipline. We believe homeowners deserve a contractor who arrives on time, treats their property like a museum, communicates transparently, and leaves behind immaculate, enduring beauty.
                </p>
                <p style={{ "marginBottom": "2rem" }}>
                  Our crews are background-checked, fully insured professionals trained in fine lacquer spraying, historical trim preservation, and advanced weather-barrier coatings. We never subcontract your trust to third parties.
                </p>
                <div style={{ "display": "flex", "gap": "1rem", "flexWrap": "wrap" }}>
                  <a href="#estimate" className="btn btn-coral">Request Your Consultation</a>
                  <a href="tel:+14127963968" className="btn btn-secondary">Direct Line: +1 (412) 796-3968</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         12. FILTERABLE PROJECT GALLERY (LIGHTBOX ENABLED)
         ========================================================================== */}
        <section className="section-padding testimonials-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow blue">CLIENT VOICES</span>
              <h2>What Property Owners Say About Alvoratech</h2>
              <div style={{ "marginTop": "0.5rem", "fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.08em", "color": "var(--color-coral)", "fontWeight": "700" }}>
                Demonstration Testimonials • Verified Client Feedback Examples
              </div>
            </div>

            <div className="testimonials-slider-box reveal stagger-1">
              <div className="testimonial-track-container">
                <div className="testimonial-track">
                  {/* Slide 1 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "Alvoratech transformed our outdated honey-oak kitchen cabinets into flawless factory-smooth white shaker perfection. You cannot see a single brush stroke. They finished on Thursday right on schedule!"
                    </blockquote>
                    <div className="test-author">
                      <h4>Sarah M.</h4>
                      <span>Residential Homeowner • Kitchen Cabinet Refinishing</span>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "The level of prep work Alvoratech put into our home exterior was extraordinary. They scraped, sealed, caulked every seam, and applied two coats of Duration. Our house looks brand new!"
                    </blockquote>
                    <div className="test-author">
                      <h4>David & Karen P.</h4>
                      <span>Complete Exterior Siding & Trim Project</span>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "As a property manager overseeing medical suites, I need painters who are quiet, clean, and use zero-odor low-VOC coatings. Alvoratech worked over the weekend and left the office immaculate."
                    </blockquote>
                    <div className="test-author">
                      <h4>Marcus R.</h4>
                      <span>Commercial Facility Manager</span>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "Their color consultation was invaluable. We were stuck between five shades of white and greige. Their designer brought large samples and analyzed our lighting. The results are stunning!"
                    </blockquote>
                    <div className="test-author">
                      <h4>Elena V.</h4>
                      <span>Whole-Home Interior Renovation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="testimonial-dots">
                <button className="test-dot active" data-slide="0" aria-label="Go to slide 1"></button>
                <button className="test-dot" data-slide="1" aria-label="Go to slide 2"></button>
                <button className="test-dot" data-slide="2" aria-label="Go to slide 3"></button>
                <button className="test-dot" data-slide="3" aria-label="Go to slide 4"></button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         16. FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ========================================================================== */}
        <section className="section-padding estimate-form-section" id="estimate">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">FAST ESTIMATE DISPATCH</span>
              <h2>Request Your Free On-Site Consultation</h2>
              <p>Fill out the simple form below. Our estimators will review your project details and follow up promptly with scheduling options.</p>
            </div>

            <div className="estimate-form-wrapper reveal stagger-1">
              <form id="estimate-request-form" novalidate>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">Full Name *</label>
                    <input type="text" id="form-name" className="form-input" placeholder="e.g. John Miller" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-phone">Phone Number *</label>
                    <input type="tel" id="form-phone" className="form-input" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">Email Address</label>
                    <input type="email" id="form-email" className="form-input" placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-service">Project Type *</label>
                    <select id="form-service" className="form-select" required>
                      <option value="" disabled selected>Select Painting Scope</option>
                      <option value="Interior Painting">Interior Home Painting</option>
                      <option value="Exterior Painting">Exterior House Painting</option>
                      <option value="Kitchen Cabinets">Kitchen Cabinet Spraying</option>
                      <option value="Commercial Painting">Commercial / Office Painting</option>
                      <option value="Deck Staining">Deck Staining & Sealing</option>
                      <option value="Drywall & Texture">Drywall Repair / Ceiling</option>
                      <option value="Epoxy Floors">Epoxy Garage Floor</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-notes">Project Notes & Square Footage Details</label>
                  <textarea id="form-notes" className="form-textarea" placeholder="Tell us about your home, number of rooms, desired colors, or timeline preferences..."></textarea>
                </div>

                <button type="submit" className="btn btn-coral btn-lg" style={{ "width": "100%" }}>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Submit & Connect on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         18. BOTTOM DEMO BANNER
         ========================================================================== */}
          </>
        )}

        {/* SERVICES VIEW: Complete Services, Visualizer, Calculator & Prep */}
        {currentView === 'services' && (
          <>
        <section className="section-padding services-section" id="services">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">COMPREHENSIVE PAINTING SPECIALTIES</span>
              <h2>Exceptional Finishing for Every Architectural Surface</h2>
              <p>From fine interior woodwork and custom cabinetry to complete exterior weatherproof transformations, our master crews deliver enduring perfection.</p>
            </div>

            <div className="services-grid-8">
              {/* Service 1 */}
              <article className="service-card reveal stagger-1">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-interior.jpg" alt="Interior residential room painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Interior Walls</span>
                </div>
                <div className="service-content">
                  <h3>Interior Home Painting</h3>
                  <p>Flawless wall, ceiling, and trim coating using washable scrub-resistant latex for busy families.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Laser-straight ceiling & baseboard lines</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Complete floor & furniture masking</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Interior Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 2 */}
              <article className="service-card reveal stagger-2">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-exterior.jpg" alt="Exterior residential home painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Exterior Protection</span>
                </div>
                <div className="service-content">
                  <h3>Exterior House Painting</h3>
                  <p>Heavy-duty weatherproofing for fiber cement, wood siding, stucco, brick, gutters, and trim.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Thorough pressure wash & scraping</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>UV-resistant elastomeric sealants</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Exterior Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 3 */}
              <article className="service-card reveal stagger-3">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-cabinet-refinishing.jpg?v=7" alt="Kitchen cabinet factory spraying and refinishing" className="service-image" loading="lazy" />
                  <span className="service-badge">Kitchen Cabinets</span>
                </div>
                <div className="service-content">
                  <h3>Cabinet Spraying & Refinishing</h3>
                  <p>Breathe new life into your kitchen with factory-smooth urethane enamels at 70% less cost than replacement.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Off-site door spraying in clean booths</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Rock-hard scratch-resistant enamel</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Cabinet Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 4 */}
              <article className="service-card reveal stagger-4">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-commercial.jpg" alt="Commercial office painting" className="service-image" loading="lazy" />
                  <span className="service-badge">Commercial</span>
                </div>
                <div className="service-content">
                  <h3>Commercial & Office Painting</h3>
                  <p>Fast-turnaround painting for retail, corporate suites, medical facilities, and multi-tenant properties.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Flexible night & weekend scheduling</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>High-traffic scuff-resistant formulas</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Commercial Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 5 */}
              <article className="service-card reveal stagger-1">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-deck.jpg" alt="Deck staining and wood sealing" className="service-image" loading="lazy" />
                  <span className="service-badge">Decks & Wood</span>
                </div>
                <div className="service-content">
                  <h3>Deck Staining & Sealing</h3>
                  <p>Restore natural wood beauty and protect outdoor decks, pergolas, and fences from rot, mold, and harsh sun.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Penetrating oil & acrylic hybrid stains</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Anti-mildew moisture barrier</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Deck Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 6 */}
              <article className="service-card reveal stagger-2">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-drywall.jpg" alt="Drywall repair and texture matching" className="service-image" loading="lazy" />
                  <span className="service-badge">Drywall Repair</span>
                </div>
                <div className="service-content">
                  <h3>Drywall Repair & Patching</h3>
                  <p>Seamless repair of stress cracks, water damage spots, nail pops, and outdated popcorn ceiling removal.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Exact orange-peel & knockdown matching</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Dustless sanding vacuum technology</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Repair Quote
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 7 */}
              <article className="service-card reveal stagger-3">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-color.jpg" alt="Architectural color consultation" className="service-image" loading="lazy" />
                  <span className="service-badge">Consultation</span>
                </div>
                <div className="service-content">
                  <h3>Architectural Color Consultation</h3>
                  <p>Expert color coordination tailored to your natural lighting, fixed flooring, and contemporary interior aesthetics.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>On-site oversized test swatches</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Cohesive whole-home palettes</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Book Color Consult
                    </a>
                  </div>
                </div>
              </article>

              {/* Service 8 */}
              <article className="service-card reveal stagger-4">
                <div className="service-image-box">
                  <img src="/painting/assets/images/service-epoxy.jpg" alt="Epoxy and concrete floor coatings" className="service-image" loading="lazy" />
                  <span className="service-badge">Epoxy Floors</span>
                </div>
                <div className="service-content">
                  <h3>Epoxy & Concrete Coatings</h3>
                  <p>Commercial-grade 100% solids epoxy and polyaspartic coatings for residential garages, basements, and showrooms.</p>
                  <div className="service-features">
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Diamond-grind surface mechanical prep</span>
                    </div>
                    <div className="service-feature-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>Chemical, oil & hot-tire resistant</span>
                    </div>
                  </div>
                  <div className="service-action">
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" style={{ "width": "100%" }}>
                      Request Epoxy Quote
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         6. MIDDLE DEMO BANNER
         ========================================================================== */}
        <section className="section-padding visualizer-section" id="visualizer">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow blue">LIVE COLOR VISUALIZER</span>
              <h2>Explore America’s Most Beloved Designer Palettes</h2>
              <p>Click any trending architectural shade below to inspect its live room ambience, hex balance, and recommended sheen.</p>
            </div>

            <div className="visualizer-container reveal stagger-1">
              {/* Swatch Controls Column */}
              <div className="swatch-controls">
                <h3>Curated Designer Swatches</h3>
                <p>Formulated in partnership with leading architectural colorists for optimal light reflectance value (LRV).</p>

                <div className="swatch-buttons-grid">
                  {/* Swatch 1: Alabaster */}
                  <button className="swatch-button active" data-swatch="alabaster" aria-label="Select Alabaster White">
                    <span className="swatch-circle" style={{ "backgroundColor": "#F2EFE9" }}></span>
                    <span className="swatch-label">
                      <strong>Alabaster White</strong>
                      <span>SW 7008 • Warm White</span>
                    </span>
                  </button>

                  {/* Swatch 2: Naval */}
                  <button className="swatch-button" data-swatch="naval" aria-label="Select Naval Indigo">
                    <span className="swatch-circle" style={{ "backgroundColor": "#1D2939" }}></span>
                    <span className="swatch-label">
                      <strong>Naval Indigo</strong>
                      <span>SW 6244 • Moody Navy</span>
                    </span>
                  </button>

                  {/* Swatch 3: Modern Sage */}
                  <button className="swatch-button" data-swatch="sage" aria-label="Select Modern Sage">
                    <span className="swatch-circle" style={{ "backgroundColor": "#84937F" }}></span>
                    <span className="swatch-label">
                      <strong>Modern Sage</strong>
                      <span>BM HC-116 • Organic Green</span>
                    </span>
                  </button>

                  {/* Swatch 4: Repose Greige */}
                  <button className="swatch-button" data-swatch="repose" aria-label="Select Repose Greige">
                    <span className="swatch-circle" style={{ "backgroundColor": "#D1CCC4" }}></span>
                    <span className="swatch-label">
                      <strong>Repose Greige</strong>
                      <span>SW 7015 • Balanced Neutral</span>
                    </span>
                  </button>

                  {/* Swatch 5: Charcoal Slate */}
                  <button className="swatch-button" data-swatch="charcoal" aria-label="Select Charcoal Slate">
                    <span className="swatch-circle" style={{ "backgroundColor": "#2C3439" }}></span>
                    <span className="swatch-label">
                      <strong>Charcoal Slate</strong>
                      <span>BM 2128-10 • Dramatic Dark</span>
                    </span>
                  </button>
                </div>

                <a href="#estimate" className="btn btn-primary" style={{ "width": "100%" }}>
                  Schedule In-Home Swatch Consultation
                </a>
              </div>

              {/* Swatch Live Preview Column */}
              <div className="swatch-preview-card">
                <div className="preview-wall-canvas" id="preview-canvas">
                  <div className="preview-room-overlay">
                    <h4 id="preview-color-title">Alabaster White</h4>
                    <p id="preview-color-desc">Warm, radiant, light-reflective white that creates spacious comfort without harsh yellow undertones.</p>
                  </div>
                </div>

                <div className="preview-meta-panel">
                  <div className="meta-details-grid">
                    <div className="meta-detail-col">
                      <span>Hex Color Code</span>
                      <strong id="meta-hex-code">#F2EFE9</strong>
                    </div>
                    <div className="meta-detail-col">
                      <span>Recommended Sheen</span>
                      <strong id="meta-finish-type">Matte / Eggshell</strong>
                    </div>
                    <div className="meta-detail-col">
                      <span>Ideal Spaces</span>
                      <strong id="meta-recommended-rooms">Living Rooms & Open Concepts</strong>
                    </div>
                  </div>

                  <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "1rem" }}>
                    <span style={{ "fontSize": "0.8125rem", "color": "var(--color-text-muted)" }}>
                      *Exact perceived tone varies slightly based on northern vs southern exposure.
                    </span>
                    <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                      Inquire About This Color
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         8. 5-SCENARIO BEFORE & AFTER COMPARISON SLIDER
         ========================================================================== */}
        <section className="section-padding calculator-section" id="estimator">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">INSTANT TRANSPARENCY</span>
              <h2>Interactive Painting Project Cost Estimator</h2>
              <p>Select your scope and adjust the estimated square footage to receive an instant preliminary investment estimate.</p>
            </div>

            <div className="calculator-wrapper reveal stagger-1">
              {/* Inputs Column */}
              <div className="calc-inputs">
                <h3>Project Scope & Size</h3>
                <p>Estimates include all labor, high-adhesion primers, two finish coats, and thorough masking.</p>

                {/* Service Selection */}
                <div className="calc-group">
                  <label className="calc-label">Choose Service Category</label>
                  <div className="calc-service-grid">
                    <button className="calc-service-btn" data-service="interior-room">Single/Multi Room</button>
                    <button className="calc-service-btn active" data-service="full-interior">Whole Home Interior</button>
                    <button className="calc-service-btn" data-service="cabinets">Kitchen Cabinets</button>
                    <button className="calc-service-btn" data-service="exterior">Home Exterior</button>
                  </div>
                </div>

                {/* Square Footage Range */}
                <div className="calc-group">
                  <label className="calc-label" htmlFor="calc-sqft-range">Estimated Floor / Surface Area</label>
                  <div className="range-slider-wrapper">
                    <div className="range-value-display">
                      <span>Selected Area:</span>
                      <strong id="calc-sqft-display">1,800 sq ft</strong>
                    </div>
                    <input type="range" min="300" max="4500" step="50" value="1800" className="custom-range" id="calc-sqft-range" />
                    <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "var(--color-text-muted)" }}>
                      <span>300 sq ft</span>
                      <span>2,400 sq ft</span>
                      <span>4,500+ sq ft</span>
                    </div>
                  </div>
                </div>

                <p style={{ "fontSize": "0.8125rem", "color": "var(--color-text-muted)", "marginTop": "1rem" }}>
                  *Final firm quotes are provided in writing following a brief 15-minute on-site assessment.
                </p>
              </div>

              {/* Results Column */}
              <div className="calc-results-panel">
                <span className="calc-results-badge">Preliminary Estimate</span>

                <div className="calc-estimate-box">
                  <span>Estimated Investment Range:</span>
                  <div className="calc-price-output" id="calc-price-output">$4,860 – $6,120</div>
                </div>

                <div className="calc-meta-list">
                  <div className="calc-meta-row">
                    <span>Selected Service:</span>
                    <strong id="calc-meta-service">Complete Home Interior</strong>
                  </div>
                  <div className="calc-meta-row">
                    <span>Projected Timeline:</span>
                    <strong id="calc-meta-timeline">3 – 5 Days</strong>
                  </div>
                  <div className="calc-meta-row">
                    <span>Included Warranty:</span>
                    <strong>2-Year Written Guarantee</strong>
                  </div>
                  <div className="calc-meta-row">
                    <span>Paint Grade:</span>
                    <strong>Sherwin-Williams / Benjamin Moore</strong>
                  </div>
                </div>

                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-coral btn-lg" id="calc-whatsapp-btn">
                  Lock In This Estimate on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         14. WHY CHOOSE ALVORATECH (4 PILLARS)
         ========================================================================== */}
        <section className="section-padding prep-section" id="prep">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">WHY OUR COATINGS OUTLAST OTHERS</span>
              <h2>Our 5-Step Meticulous Preparation Process</h2>
              <p>90% of paint failures stem from rushed preparation. At Alvoratech, we spend twice as much time prepping surfaces as we do applying paint.</p>
            </div>

            <div className="prep-grid-5">
              {/* Step 1 */}
              <div className="prep-step-card reveal stagger-1">
                <div className="prep-number">01</div>
                <div className="prep-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <h3>Total Shielding & Masking</h3>
                <p>Every floor, furnishing, fixture, and window is completely sealed using clean builder paper, static-cling plastic, and delicate-surface tape.</p>
              </div>

              {/* Step 2 */}
              <div className="prep-step-card reveal stagger-2">
                <div className="prep-number">02</div>
                <div className="prep-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /></svg>
                </div>
                <h3>HEPA Dustless Sanding</h3>
                <p>We sand every surface with Festool HEPA extractors, eliminating 99.9% of airborne particles while smoothing out blemishes and prior brush marks.</p>
              </div>

              {/* Step 3 */}
              <div className="prep-step-card reveal stagger-3">
                <div className="prep-number">03</div>
                <div className="prep-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 2 4 4-14 14H4v-4L18 2z" /></svg>
                </div>
                <h3>Caulking & Seamless Patch</h3>
                <p>All baseboard seams, window casing gaps, and trim joints are filled with 50-year elastomeric acrylic caulk to stop air drafts and shadow lines.</p>
              </div>

              {/* Step 4 */}
              <div className="prep-step-card reveal stagger-4">
                <div className="prep-number">04</div>
                <div className="prep-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
                <h3>High-Adhesion Stain Primer</h3>
                <p>We apply high-bonding, stain-blocking primers over raw wood, repairs, or tannins to guarantee flawless adhesion and eliminate bleed-through.</p>
              </div>

              {/* Step 5 */}
              <div className="prep-step-card reveal stagger-1">
                <div className="prep-number">05</div>
                <div className="prep-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <h3>Dual Premium Finish Coats</h3>
                <p>Two generous coats of architectural-grade enamel or acrylic are applied with airless sprayers or fine microfiber rollers for uniform depth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         10. PREMIUM BRAND PARTNERSHIPS
         ========================================================================== */}
        <div className="brands-strip">
          <div className="container">
            <div className="brands-strip-title">CERTIFIED INDUSTRIAL COATING PARTNERS</div>
            <div className="brands-grid">
              <div className="brand-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                <strong>Sherwin-Williams®</strong>
              </div>
              <div className="brand-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                <strong>Benjamin Moore®</strong>
              </div>
              <div className="brand-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                <strong>Behr Pro®</strong>
              </div>
              <div className="brand-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                <strong>PPG Paints™</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
         11. ABOUT ALVORATECH
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <span className="section-eyebrow">READY TO TRANSFORM YOUR SPACE?</span>
                <h2>Get a Custom Quote For Your Project</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Schedule a complimentary in-home or on-site estimate with our certified architectural coating specialists.</p>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                  Request Free Estimate &rarr;
                </button>
              </div>
            </section>
          </>
        )}

        {/* PORTFOLIO VIEW: Before/After Slider & Filterable Lightbox Gallery */}
        {currentView === 'portfolio' && (
          <>
        <section className="section-padding ba-section" id="transformations">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">DRAMATIC TRANSFORMATIONS</span>
              <h2>Witness the Power of Professional Prep & Spray</h2>
              <p>Drag the interactive handle left and right to inspect real-world finish restorations across cabinets, exteriors, living spaces, and outdoor decks.</p>
            </div>

            {/* Scenario Tabs */}
            <div className="ba-tabs-nav reveal">
              <button className="ba-tab-btn active" data-scenario="cabinets">Kitchen Cabinets</button>
              <button className="ba-tab-btn" data-scenario="exterior">Home Exterior</button>
              <button className="ba-tab-btn" data-scenario="living">Living Room</button>
              <button className="ba-tab-btn" data-scenario="deck">Deck Staining</button>
              <button className="ba-tab-btn" data-scenario="commercial">Commercial Office</button>
            </div>

            {/* Slider Widget Container */}
            <div className="ba-slider-container reveal stagger-1">
              {/* Before Image */}
              <img src="/painting/assets/images/ba-cabinets-before.jpg" alt="Before painting condition" className="ba-image ba-image-before" id="ba-image-before" />
              <span className="ba-badge ba-badge-before">BEFORE PREP</span>

              {/* After Image with dynamic clip wrap */}
              <div className="ba-image-after-wrap" id="ba-after-wrap">
                <img src="/painting/assets/images/service-cabinet-refinishing.jpg?v=7" alt="After professional spray finish" className="ba-image ba-image-after" id="ba-image-after" />
              </div>
              <span className="ba-badge ba-badge-after">AFTER ALVORATECH</span>

              {/* Handle */}
              <div className="ba-handle" id="ba-handle">
                <div className="ba-handle-button" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ "marginLeft": "-6px" }}>
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              {/* Accessible Range Input */}
              <input type="range" min="0" max="100" value="50" className="ba-range-input" id="ba-range" aria-label="Percentage before after slider" />
            </div>
          </div>
        </section>

        {/* ==========================================================================
         9. 5-STEP METICULOUS PREPARATION PROCESS
         ========================================================================== */}
        <section className="section-padding gallery-section" id="portfolio">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow blue">PORTFOLIO OF CRAFTSMANSHIP</span>
              <h2>Real Projects. Pristine Finishes.</h2>
              <p>Browse our recent residential and commercial transformations. Click any project to open full-resolution inspection photography.</p>
            </div>

            {/* Filter Controls */}
            <div className="gallery-filters reveal">
              <button className="filter-btn active" data-filter="all">All Projects</button>
              <button className="filter-btn" data-filter="interior">Interior</button>
              <button className="filter-btn" data-filter="exterior">Exterior</button>
              <button className="filter-btn" data-filter="cabinets">Kitchen Cabinets</button>
              <button className="filter-btn" data-filter="deck">Decks & Wood</button>
            </div>

            {/* Gallery Grid (8 Items) */}
            <div className="gallery-grid reveal stagger-1">
              {/* Item 1 */}
              <div className="gallery-item" data-category="interior">
                <img src="/painting/assets/images/gallery-accentwall.jpg" alt="Moody dark navy accent wall in open living room" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Modern Indigo Geometric Accent</h4>
                  <span>Interior Feature Wall</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="gallery-item" data-category="cabinets">
                <img src="/painting/assets/images/service-cabinet-refinishing.jpg?v=7" alt="Custom sprayed white shaker kitchen cabinets" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Custom Shaker Cabinet Refinishing</h4>
                  <span>Factory Lacquer Finish</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="gallery-item" data-category="exterior">
                <img src="/painting/assets/images/gallery-victorianexterior.jpg" alt="Refreshed contemporary two-tone home exterior" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Two-Tone Architectural Exterior</h4>
                  <span>Weather-Resistant Siding & Trim</span>
                </div>
              </div>

              {/* Item 4 */}
              <div className="gallery-item" data-category="deck">
                <img src="/painting/assets/images/gallery-deckstain.jpg" alt="Natural cedar deck with UV-protective penetrating stain" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Cedar Deck Restoration & Sealing</h4>
                  <span>UV-Blocking Penetrating Oil</span>
                </div>
              </div>

              {/* Item 5 */}
              <div className="gallery-item" data-category="interior">
                <img src="/painting/assets/images/gallery-livingroom.jpg" alt="Sunlit vaulted ceiling living room painted in designer greige" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Sunlit Vaulted Ceiling Interior</h4>
                  <span>Eggshell Washable Latex</span>
                </div>
              </div>

              {/* Item 6 */}
              <div className="gallery-item" data-category="interior">
                <img src="/painting/assets/images/gallery-stairwell.jpg" alt="Crisp modern staircase wall painting" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Multi-Story Stairwell Coating</h4>
                  <span>Zero-Scuff Architectural Finish</span>
                </div>
              </div>

              {/* Item 7 */}
              <div className="gallery-item" data-category="exterior">
                <img src="/painting/assets/images/gallery-brickpainting.jpg" alt="Limewashed and painted brick residence" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Limewash & Masonry Coating</h4>
                  <span>Breathable Mineral Paint</span>
                </div>
              </div>

              {/* Item 8 */}
              <div className="gallery-item" data-category="interior">
                <img src="/painting/assets/images/gallery-diningroom.jpg" alt="Formal dining room with dark trim and wainscoting" loading="lazy" />
                <div className="gallery-overlay">
                  <h4>Formal Dining Room Millwork</h4>
                  <span>High-Gloss Satin Trim</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal Container */}
        <div className="lightbox-modal" id="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image preview">
          <div className="lightbox-content-box">
            <button className="lightbox-close" id="lightbox-close" aria-label="Close image preview">×</button>
            <img src="" alt="Enlarged view" className="lightbox-img" id="lightbox-img" />
            <div className="lightbox-caption" id="lightbox-caption"></div>
          </div>
        </div>

        {/* ==========================================================================
         13. INTERACTIVE PAINTING COST ESTIMATOR
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <span className="section-eyebrow">YOUR HOME COULD BE NEXT</span>
                <h2>Love The Way Your Space Looks</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Every project includes meticulous surface preparation, dustless sanding, and a comprehensive 10-year warranty.</p>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                  Start Your Consultation &rarr;
                </button>
              </div>
            </section>
          </>
        )}

        {/* WHY US VIEW: Company Standards, 4 Pillars & Customer Testimonials */}
        {currentView === 'why-us' && (
          <>
        <section className="section-padding" id="about" style={{ "backgroundColor": "var(--color-bg-light)" }}>
          <div className="container">
            <div className="why-grid">
              <div className="why-image-card reveal">
                <img src="/painting/assets/images/about-painter-wall.jpg?v=10" alt="Alvoratech master painting contractor cutting pristine trim lines" className="why-image" loading="lazy" />
              </div>
              <div className="reveal stagger-1">
                <span className="section-eyebrow">ABOUT ALVORATECH</span>
                <h2>Raising the Standard of Residential & Commercial Painting</h2>
                <p style={{ "fontSize": "1.0625rem", "marginBottom": "1.25rem" }}>
                  At Alvoratech, painting isn’t just a trade—it’s an architectural discipline. We believe homeowners deserve a contractor who arrives on time, treats their property like a museum, communicates transparently, and leaves behind immaculate, enduring beauty.
                </p>
                <p style={{ "marginBottom": "2rem" }}>
                  Our crews are background-checked, fully insured professionals trained in fine lacquer spraying, historical trim preservation, and advanced weather-barrier coatings. We never subcontract your trust to third parties.
                </p>
                <div style={{ "display": "flex", "gap": "1rem", "flexWrap": "wrap" }}>
                  <a href="#estimate" className="btn btn-coral">Request Your Consultation</a>
                  <a href="tel:+14127963968" className="btn btn-secondary">Direct Line: +1 (412) 796-3968</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         12. FILTERABLE PROJECT GALLERY (LIGHTBOX ENABLED)
         ========================================================================== */}
        <section className="section-padding why-section" id="why-us">
          <div className="container">
            <div className="why-grid">
              {/* Text Pillars */}
              <div className="reveal">
                <span className="section-eyebrow">THE ALVORATECH DIFFERENCE</span>
                <h2>Why Homeowners & Property Managers Choose Alvoratech</h2>
                <p style={{ "marginBottom": "2.5rem" }}>
                  We eliminate the common frustrations of working with trade contractors—unreturned calls, messy living rooms, and unexpected price hikes.
                </p>

                <div className="why-pillars-list">
                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div>
                      <h3>On-Time Arrival & Completion</h3>
                      <p>We respect your routine. Our crews start at 8:00 AM sharp and complete your project within the contracted timeline.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                    </div>
                    <div>
                      <h3>Immaculate Daily Cleanups</h3>
                      <p>At the end of each workday, tools are packed neatly, floors vacuumed, and rooms organized so your home remains livable.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    </div>
                    <div>
                      <h3>Dedicated Foreman On-Site</h3>
                      <p>An experienced lead project foreman oversees your job daily, conducting quality control audits and keeping you updated.</p>
                    </div>
                  </div>

                  <div className="pillar-item">
                    <div className="pillar-icon-box">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 14v1" /><path d="M9 19v2" /><path d="M9 3v2" /><path d="M9 9v1" /></svg>
                    </div>
                    <div>
                      <h3>All-Inclusive Written Estimates</h3>
                      <p>Our itemized estimates account for prep, primers, materials, and cleanup. You will never encounter unexpected add-ons.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Image */}
              <div className="why-image-card reveal stagger-2">
                <img src="/painting/assets/images/paint-why.jpg" alt="Pristine painted modern living room with crisp architecture" className="why-image" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         15. VERIFIED CLIENT TESTIMONIALS
         ========================================================================== */}
        <section className="section-padding testimonials-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow blue">CLIENT VOICES</span>
              <h2>What Property Owners Say About Alvoratech</h2>
              <div style={{ "marginTop": "0.5rem", "fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.08em", "color": "var(--color-coral)", "fontWeight": "700" }}>
                Demonstration Testimonials • Verified Client Feedback Examples
              </div>
            </div>

            <div className="testimonials-slider-box reveal stagger-1">
              <div className="testimonial-track-container">
                <div className="testimonial-track">
                  {/* Slide 1 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "Alvoratech transformed our outdated honey-oak kitchen cabinets into flawless factory-smooth white shaker perfection. You cannot see a single brush stroke. They finished on Thursday right on schedule!"
                    </blockquote>
                    <div className="test-author">
                      <h4>Sarah M.</h4>
                      <span>Residential Homeowner • Kitchen Cabinet Refinishing</span>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "The level of prep work Alvoratech put into our home exterior was extraordinary. They scraped, sealed, caulked every seam, and applied two coats of Duration. Our house looks brand new!"
                    </blockquote>
                    <div className="test-author">
                      <h4>David & Karen P.</h4>
                      <span>Complete Exterior Siding & Trim Project</span>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "As a property manager overseeing medical suites, I need painters who are quiet, clean, and use zero-odor low-VOC coatings. Alvoratech worked over the weekend and left the office immaculate."
                    </blockquote>
                    <div className="test-author">
                      <h4>Marcus R.</h4>
                      <span>Commercial Facility Manager</span>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="testimonial-card">
                    <div className="test-stars">★★★★★</div>
                    <blockquote className="test-quote">
                      "Their color consultation was invaluable. We were stuck between five shades of white and greige. Their designer brought large samples and analyzed our lighting. The results are stunning!"
                    </blockquote>
                    <div className="test-author">
                      <h4>Elena V.</h4>
                      <span>Whole-Home Interior Renovation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="testimonial-dots">
                <button className="test-dot active" data-slide="0" aria-label="Go to slide 1"></button>
                <button className="test-dot" data-slide="1" aria-label="Go to slide 2"></button>
                <button className="test-dot" data-slide="2" aria-label="Go to slide 3"></button>
                <button className="test-dot" data-slide="3" aria-label="Go to slide 4"></button>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         16. FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <span className="section-eyebrow">STANDARDS YOU CAN TRUST</span>
                <h2>Work With Master-Certified Painters</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Fully licensed, insured, and background-checked technicians who treat your property like a museum.</p>
                <button onClick={(e) => navigateTo('contact', e)} className="btn btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem' }}>
                  Speak With Our Team &rarr;
                </button>
              </div>
            </section>
          </>
        )}

        {/* FAQ VIEW: Comprehensive Accordions */}
        {currentView === 'faq' && (
          <>
        <section className="section-padding faq-section" id="faq">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">COMMON QUESTIONS</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our painting timelines, surface preparation, paint grades, and warranties.</p>
            </div>

            <div className="faq-container reveal stagger-1">
              {/* FAQ 1 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>How long does a typical interior or exterior painting project take?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>An average single or two-room interior refresh typically takes 1 to 2 days. A complete whole-home interior generally requires 3 to 5 business days, and complete home exteriors take 3 to 6 days depending on weather and structural prep. Your written proposal includes an exact timeline guarantee.</p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>Do I need to move all of my furniture before your crew arrives?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>We ask only that you clear small personal knickknacks, fragile decor, and electronics from the rooms. Our crew will carefully move all large furniture to the center of the room and wrap it securely under heavy-duty plastic sheeting and clean drop cloths.</p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>What brand and quality level of paint do you use?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>We work exclusively with America’s premier architectural coatings, predominantly Sherwin-Williams (Duration®, Emerald®, SuperPaint®) and Benjamin Moore (Aura®, Regal® Select, Advance® Cabinet Finish). We do not use watered-down builder-grade paints.</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>How do you handle kitchen cabinet refinishing?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>We remove all cabinet doors and drawer fronts to be professionally prepped, degreased, sanded, primed, and sprayed off-site in our controlled spray booth with conversion urethane enamel. Meanwhile, your cabinet frames in the kitchen are masked, prepped, and sprayed on-site for a factory-level finish.</p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>Are your paints safe and low-odor for children and pets?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>Yes. All of our interior wall and ceiling coatings are zero-VOC or ultra-low-VOC formulations that emit virtually zero odor. You and your family can sleep safely in your home the very same night without unpleasant fumes or chemical smells.</p>
                </div>
              </div>

              {/* FAQ 6 */}
              <div className="faq-item">
                <button className="faq-button" aria-expanded="false">
                  <span>What is covered under your 2-Year Workmanship Warranty?</span>
                  <div className="faq-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </button>
                <div className="faq-answer">
                  <p>Our 2-year warranty covers any peeling, chipping, flaking, or blistering caused by coating application defects or surface preparation failure. If an issue occurs, our team will promptly inspect and repair the affected area at zero cost to you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         17. FAST ESTIMATE REQUEST FORM SECTION
         ========================================================================== */}
            <section className="section-padding text-center" style={{ backgroundColor: 'var(--color-surface, #ffffff)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="container" style={{ maxWidth: '700px' }}>
                <span className="section-eyebrow">STILL HAVE QUESTIONS?</span>
                <h2>We're Here to Help</h2>
                <p style={{ margin: '1rem 0 2rem', color: '#64748b' }}>Speak directly with our master contractor today or send us a message for immediate assistance.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+14127963968" className="btn btn-primary">Call +1 (412) 796-3968</a>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">Chat On WhatsApp</a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* CONTACT VIEW: Full Estimate Form & Location Details */}
        {currentView === 'contact' && (
          <>
        <section className="section-padding estimate-form-section" id="estimate">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-eyebrow">FAST ESTIMATE DISPATCH</span>
              <h2>Request Your Free On-Site Consultation</h2>
              <p>Fill out the simple form below. Our estimators will review your project details and follow up promptly with scheduling options.</p>
            </div>

            <div className="estimate-form-wrapper reveal stagger-1">
              <form id="estimate-request-form" novalidate>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">Full Name *</label>
                    <input type="text" id="form-name" className="form-input" placeholder="e.g. John Miller" required />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-phone">Phone Number *</label>
                    <input type="tel" id="form-phone" className="form-input" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">Email Address</label>
                    <input type="email" id="form-email" className="form-input" placeholder="john@example.com" />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-service">Project Type *</label>
                    <select id="form-service" className="form-select" required>
                      <option value="" disabled selected>Select Painting Scope</option>
                      <option value="Interior Painting">Interior Home Painting</option>
                      <option value="Exterior Painting">Exterior House Painting</option>
                      <option value="Kitchen Cabinets">Kitchen Cabinet Spraying</option>
                      <option value="Commercial Painting">Commercial / Office Painting</option>
                      <option value="Deck Staining">Deck Staining & Sealing</option>
                      <option value="Drywall & Texture">Drywall Repair / Ceiling</option>
                      <option value="Epoxy Floors">Epoxy Garage Floor</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-notes">Project Notes & Square Footage Details</label>
                  <textarea id="form-notes" className="form-textarea" placeholder="Tell us about your home, number of rooms, desired colors, or timeline preferences..."></textarea>
                </div>

                <button type="submit" className="btn btn-coral btn-lg" style={{ "width": "100%" }}>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Submit & Connect on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ==========================================================================
         18. BOTTOM DEMO BANNER
         ========================================================================== */}
          </>
        )}
      </main>
      <footer className="site-footer" id="contact" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Brand Info */}
            <div className="footer-col">
              <div className="site-logo" style={{ "marginBottom": "1.25rem" }}>
                <div className="logo-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M19 11V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4" />
                    <path d="M14 8h5a2 2 0 0 1 2 2v1" />
                    <rect x="10" y="14" width="12" height="8" rx="2" />
                    <path d="M14 18h4" />
                  </svg>
                </div>
                <div>
                  <span className="logo-text" style={{ "color": "var(--color-white)" }}>ALVORATECH</span>
                  <span className="logo-tagline">Painting Contractors</span>
                </div>
              </div>
              <p style={{ "fontSize": "0.9375rem", "marginBottom": "1.5rem", "lineHeight": "1.6" }}>
                Premier residential and commercial painting contractor specializing in architectural coatings, fine cabinet spraying, and enduring exterior weather protection.
              </p>
              <div style={{ "fontSize": "0.8125rem", "color": "#64748B" }}>
                Licensed • Insured • 2-Year Written Craftsmanship Warranty
              </div>
            </div>

            {/* Col 2: Services Directory */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <div className="footer-links">
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Interior Home Painting</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Exterior Siding & Trim</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Cabinet Spraying & Lacquer</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Commercial Offices</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Deck Staining & Sealing</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Drywall Patching & Texture</a>
                <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Epoxy Garage Floors</a>
              </div>
            </div>

        {/* Col 3: Clean Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#hero" onClick={(e) => navigateTo('home', e)} className="footer-link">Home</a>
            <a href="#about" onClick={(e) => navigateTo('about', e)} className="footer-link">About Us</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)} className="footer-link">Services</a>
            <a href="#portfolio" onClick={(e) => navigateTo('portfolio', e)} className="footer-link">Gallery</a>
            <a href="#contact" onClick={(e) => navigateTo('contact', e)} className="footer-link">Contact</a>
          </div>
        </div>

            {/* Col 4: Contact & Exact Constraints */}
            <div className="footer-col">
              <h4>Direct Contact</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <span style={{ "display": "block", "fontSize": "0.75rem", "textTransform": "uppercase", "color": "#64748B" }}>Phone / WhatsApp</span>
                    <a href="tel:+14127963968" style={{ "color": "var(--color-white)", "fontWeight": "600" }}>+1 (412) 796-3968</a>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <div>
                    <span style={{ "display": "block", "fontSize": "0.75rem", "textTransform": "uppercase", "color": "#64748B" }}>Email Inquiry</span>
                    <a href="mailto:info@Alvoratechhq.com" style={{ "color": "var(--color-white)", "fontWeight": "600" }}>info@Alvoratechhq.com</a>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <span style={{ "display": "block", "fontSize": "0.75rem", "textTransform": "uppercase", "color": "#64748B" }}>Service Area / Location</span>
                    <span style={{ "color": "var(--color-white)", "fontWeight": "700", "fontSize": "1.1rem" }}>*</span>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  <div>
                    <span style={{ "display": "block", "fontSize": "0.75rem", "textTransform": "uppercase", "color": "#64748B" }}>Operating Hours</span>
                    <span style={{ "color": "#CBD5E1", "fontSize": "0.875rem" }}>Mon - Sat: 7:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Alvoratech Painting Contractors. All rights reserved.
            </div>
            <div>
              Demonstration Website • Powered by Alvoratech
            </div>
          </div>
        </div>
      </footer>

      {/* ==========================================================================
       20. STATIC FLOATING WHATSAPP BOTTOM BANNER
       ========================================================================== */}
      <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" id="fixed-whatsapp-banner" aria-label="Chat with Alvoratech on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span>+1 (412) 796-3968</span>
      </a>

      {/* Script */}


    </div>
  );
}
