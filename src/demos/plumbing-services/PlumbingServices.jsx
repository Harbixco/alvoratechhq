import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import CountUpNumber from '../../components/CountUpNumber';
import DemoTopBar from '../DemoTopBar';
import './plumbing.css';

/**
 * PlumbingServices Component
 * Converted React JS landing page from /plumb/ (ProFlow Plumbing)
 * Accessible at: http://localhost:3000/plumbing-services
 */
export default function PlumbingServices() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    problem: '',
  });

  const slides = [
    {
      badge: 'Emergency service, day or night',
      title: 'Plumbing trouble?',
      titleEm: "We're on our way.",
      desc: 'Fast, dependable help for leaks, burst pipes, and urgent repairs. Reach a real technician directly on WhatsApp and get help moving quickly.',
      ctaPrimary: 'WhatsApp for Emergency Help',
      ctaPrimaryHref: 'https://wa.me/14127693968',
      ctaSecondary: 'Request a Quote',
      ctaSecondaryHref: '#contact',
      image: 'https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_1280.jpg',
    },
    {
      badge: 'Built right, from the pipes up',
      title: 'Reliable work.',
      titleEm: 'Lasting results.',
      desc: 'From pipe repairs to new installations, our plumbing team gets the details right and keeps your home or business flowing.',
      ctaPrimary: 'Explore Our Services',
      ctaPrimaryHref: '#services',
      ctaSecondary: 'Get a Free Estimate',
      ctaSecondaryHref: '#contact',
      image: 'https://cdn.pixabay.com/photo/2017/08/23/10/22/pipes-2672184_1280.jpg',
    },
    {
      badge: 'Comfort starts at home',
      title: 'Small drips?',
      titleEm: "We'll make them stop.",
      desc: 'Get help with faucets, fixtures, and everyday plumbing repairs—with friendly service and clear, upfront estimates.',
      ctaPrimary: 'Schedule a Home Visit',
      ctaPrimaryHref: '#contact',
      ctaSecondary: 'WhatsApp a Plumber',
      ctaSecondaryHref: 'https://wa.me/14127693968',
      image: 'https://cdn.pixabay.com/photo/2015/05/31/11/24/tap-791172_1280.jpg',
    },
  ];

  // Carousel autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileNavOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="plumbing-demo" id="top">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="ProFlow Plumbing Services" />

      {/* ── DEMO RIBBON ── */}
      <div className="pf-demo-ribbon">Demo</div>

      {/* ════════════════════════════════════════
           HEADER
         ════════════════════════════════════════ */}
      <header className="pf-header">
        <div className="pf-header-top">
          <span>💬 WhatsApp Only 24/7 for Emergencies</span>
          <span>•</span>
          <span>Licensed &amp; Insured</span>
          <span>•</span>
          <span>Free Estimates</span>
        </div>

        <div className="pf-nav-wrap">
          <a href="#top" onClick={(e) => scrollToSection(e, '#top')} className="pf-logo">
            <div className="pf-logo-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div className="pf-logo-text">
              ProFlow<span>Plumbing Services</span>
            </div>
          </a>

          <nav className="pf-nav">
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
            <a href="#residential" onClick={(e) => scrollToSection(e, '#residential')}>Residential</a>
            <a href="#commercial" onClick={(e) => scrollToSection(e, '#commercial')}>Commercial</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="pf-nav-cta">
              Get Free Quote
            </a>
          </nav>

          <button
            className={`pf-hamburger ${mobileNavOpen ? 'is-open' : ''}`}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileNavOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`pf-mobile-nav ${mobileNavOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a>
          <a href="#residential" onClick={(e) => scrollToSection(e, '#residential')}>Residential</a>
          <a href="#commercial" onClick={(e) => scrollToSection(e, '#commercial')}>Commercial</a>
          <a href="#drain" onClick={(e) => scrollToSection(e, '#drain')}>Drain Services</a>
          <a href="#water-damage" onClick={(e) => scrollToSection(e, '#water-damage')}>Water Damage</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="pf-mobile-cta">
            Get Free Quote
          </a>
        </div>
      </header>

      {/* ════════════════════════════════════════
           HERO SECTION
         ════════════════════════════════════════ */}
      <section
        className="pf-hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pf-hero-slides">
          {slides.map((slide, sIdx) => {
            const isActive = sIdx === activeSlide;
            const isBefore = sIdx === (activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
            return (
              <div
                key={sIdx}
                className={`pf-hero-slide ${isActive ? 'is-active' : ''} ${isBefore ? 'is-before' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            );
          })}
        </div>

        <div className="pf-hero-grid">
          <div className="pf-hero-content">
            <div className="pf-hero-carousel">
              {slides.map((slide, sIdx) => {
                const isActive = sIdx === activeSlide;
                const isBefore = sIdx === (activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
                return (
                  <div
                    key={sIdx}
                    className={`pf-hero-copy ${isActive ? 'is-active' : ''} ${isBefore ? 'is-before' : ''}`}
                    aria-hidden={!isActive}
                  >
                    <div className="pf-hero-badge">{slide.badge}</div>
                    <h1>
                      {slide.title}
                      <em>{slide.titleEm}</em>
                    </h1>
                    <p>{slide.desc}</p>
                    <div className="pf-hero-btns">
                      <a
                        href={slide.ctaPrimaryHref}
                        {...(slide.ctaPrimaryHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        onClick={(e) => slide.ctaPrimaryHref.startsWith('#') && scrollToSection(e, slide.ctaPrimaryHref)}
                        className="pf-btn-primary"
                      >
                        {slide.ctaPrimaryHref.includes('wa.me') ? (
                          <FaWhatsapp size={18} />
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        )}
                        <span>{slide.ctaPrimary}</span>
                      </a>
                      <a
                        href={slide.ctaSecondaryHref}
                        {...(slide.ctaSecondaryHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        onClick={(e) => slide.ctaSecondaryHref.startsWith('#') && scrollToSection(e, slide.ctaSecondaryHref)}
                        className="pf-btn-outline"
                      >
                        <span>{slide.ctaSecondary}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero Card */}
          <div className="pf-hero-card">
            <h3>Contact Us Anytime</h3>

            <a
              href="https://wa.me/14127693968"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-contact-item"
              style={{ textDecoration: 'none' }}
            >
              <div className="pf-contact-icon">
                <FaWhatsapp style={{ width: '20px', height: '20px', fill: 'var(--amber)', stroke: 'none' }} />
              </div>
              <div>
                <div className="pf-contact-label">Emergency WhatsApp Only</div>
                <div className="pf-contact-val">+1 (412) 769-3968</div>
              </div>
            </a>

            <div className="pf-contact-item">
              <div className="pf-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="pf-contact-label">Email Us</div>
                <div className="pf-contact-val">contact@proflowplumbing.com</div>
              </div>
            </div>

            <div className="pf-contact-item">
              <div className="pf-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="pf-contact-label">Working Hours</div>
                <div className="pf-contact-val">24/7 Emergency Service</div>
              </div>
            </div>

            <div className="pf-contact-item">
              <div className="pf-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="pf-contact-label">Service Area</div>
                <div className="pf-contact-val">Metro Area &amp; Surrounding Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           TRUST BAR
         ════════════════════════════════════════ */}
      <div className="pf-trust-bar">
        <div className="pf-trust-inner">
          <div className="pf-trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="pf-trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>24/7 Emergency Service</span>
          </div>
          <div className="pf-trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Free Estimates</span>
          </div>
          <div className="pf-trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>5-Star Rated Service</span>
          </div>
          <div className="pf-trust-item">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Family Owned Since 2008</span>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
           SERVICES GRID
         ════════════════════════════════════════ */}
      <section className="pf-section pf-section-alt" id="services">
        <div className="pf-container">
          <div className="pf-section-head">
            <div className="pf-section-label">What We Do</div>
            <h2 className="pf-section-title">Complete Plumbing Solutions</h2>
            <p className="pf-section-sub">
              From minor leaks to major installations, our certified plumbers handle every job with precision and care.
            </p>
          </div>

          <div className="pf-services-grid">
            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>Emergency Repairs</h3>
              <p>Burst pipes, major leaks, or no water — we respond fast, 24 hours a day, 7 days a week. Same-day service guaranteed.</p>
            </div>

            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 6v4m0 4h.01" />
                </svg>
              </div>
              <h3>Drain Cleaning</h3>
              <p>Slow or blocked drains cleared using professional-grade hydro-jetting and snake equipment — no mess, no damage.</p>
            </div>

            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 010 8h-1" />
                  <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3>Water Heater Services</h3>
              <p>Installation, repair, and replacement of all water heater types including tankless systems. Hot water restored fast.</p>
            </div>

            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <h3>Pipe Installation</h3>
              <p>New construction, remodeling, or pipe replacement. We install copper, PVC, and PEX piping to code — every time.</p>
            </div>

            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>Leak Detection</h3>
              <p>Advanced non-invasive technology to locate hidden leaks behind walls and under slabs before they cause serious damage.</p>
            </div>

            <div className="pf-service-card">
              <div className="pf-svc-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Bathroom &amp; Kitchen</h3>
              <p>Full bathroom and kitchen plumbing — toilets, faucets, sinks, garbage disposals, and remodel plumbing support.</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="pf-stats-row">
            <div className="pf-stat-box">
              <div className="pf-stat-num">
                <CountUpNumber end={15} duration={1400} suffix="+" />
              </div>
              <div className="pf-stat-label">Years in Business</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">
                <CountUpNumber end={4800} duration={1800} suffix="+" />
              </div>
              <div className="pf-stat-label">Jobs Completed</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">4.9<span>★</span></div>
              <div className="pf-stat-label">Average Rating</div>
            </div>
            <div className="pf-stat-box">
              <div className="pf-stat-num">
                <CountUpNumber end={60} duration={1500} suffix="min" />
              </div>
              <div className="pf-stat-label">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           RESIDENTIAL PLUMBING
         ════════════════════════════════════════ */}
      <section className="pf-section" id="residential">
        <div className="pf-container">
          <div className="pf-two-col">
            <div className="pf-col-text">
              <div className="pf-section-label">For Homeowners</div>
              <h2 className="pf-section-title">Residential Plumbing</h2>
              <p className="pf-section-sub">
                Your home deserves plumbing that works perfectly. We handle everything from routine maintenance to urgent repairs — with care, respect for your property, and zero surprises on the bill.
              </p>

              <div className="pf-feature-list">
                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Whole-Home Plumbing Inspections</strong>
                    <p>Complete assessment of your plumbing system to catch problems before they become expensive emergencies.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Toilet, Faucet &amp; Fixture Repairs</strong>
                    <p>Running toilets, dripping faucets, and broken fixtures fixed quickly using quality parts that last.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Water Pressure Issues</strong>
                    <p>Low or inconsistent pressure diagnosed and resolved — from pressure regulators to blocked supply lines.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Remodel &amp; New Installation</strong>
                    <p>Full plumbing support for bathroom and kitchen remodels — rough-in to final connection.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="pf-btn-primary" style={{ width: 'fit-content' }}>
                Schedule Home Visit
              </a>
            </div>

            <div className="pf-col-img">
              <img
                src="https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&q=80"
                alt="Plumber repairing pipes beneath a sink"
                loading="lazy"
              />
              <div className="pf-img-badge">🏠 Trusted by 2,000+ Homeowners</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           COMMERCIAL PLUMBING
         ════════════════════════════════════════ */}
      <section className="pf-section pf-section-alt" id="commercial">
        <div className="pf-container">
          <div className="pf-two-col reverse">
            <div className="pf-col-text">
              <div className="pf-section-label">For Businesses</div>
              <h2 className="pf-section-title">Commercial Plumbing</h2>
              <p className="pf-section-sub">
                Downtime costs money. Our commercial team responds fast, works efficiently, and minimizes disruption to your business operations — whether it's a restaurant, office building, or retail space.
              </p>

              <div className="pf-feature-list">
                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Restaurants &amp; Food Service</strong>
                    <p>Grease trap cleaning, commercial kitchen drain service, and health code compliant plumbing installations.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Office &amp; Retail Buildings</strong>
                    <p>Multi-restroom service, water line maintenance, and scheduled preventive maintenance contracts available.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>New Construction &amp; Fit-Outs</strong>
                    <p>Complete commercial plumbing from ground up — working with contractors and developers on all project sizes.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Backflow Prevention &amp; Testing</strong>
                    <p>Annual backflow device testing and certification to keep your business compliant with local codes.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="pf-btn-primary" style={{ width: 'fit-content' }}>
                Get Commercial Quote
              </a>
            </div>

            <div className="pf-col-img">
              <img
                src="https://images.unsplash.com/photo-1650551182991-b07558247564?w=800&q=80"
                alt="Commercial plumbing pipes and valves"
                loading="lazy"
              />
              <div className="pf-img-badge">🏢 Serving 500+ Local Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           DRAIN SERVICES
         ════════════════════════════════════════ */}
      <section className="pf-section" id="drain">
        <div className="pf-container">
          <div className="pf-two-col">
            <div className="pf-col-text">
              <div className="pf-section-label">Drain Solutions</div>
              <h2 className="pf-section-title">Drain Cleaning &amp; Repair</h2>
              <p className="pf-section-sub">
                Blocked, slow, or foul-smelling drains are more than an inconvenience — they can signal serious pipe damage. We use professional equipment to clear and inspect every drain thoroughly.
              </p>

              <div className="pf-feature-list">
                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Hydro-Jetting Service</strong>
                    <p>High-pressure water jetting blasts through grease, scale, and tree root intrusions that snaking can't clear.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Video Drain Inspection</strong>
                    <p>We run a camera inside your pipes to see exactly what's happening — no guesswork, no unnecessary digging.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Sewer Line Cleaning</strong>
                    <p>Main sewer line blockages cleared fast to prevent sewage backup into your home or business.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Root Intrusion Removal</strong>
                    <p>Tree roots growing into sewer lines are one of the top causes of drain failure — we remove them completely.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="pf-btn-primary" style={{ width: 'fit-content' }}>
                Book Drain Service
              </a>
            </div>

            <div className="pf-col-img">
              <img
                src="https://images.unsplash.com/photo-1676210134050-6f12c6898395?w=800&q=80"
                alt="Plumber repairing a toilet"
                loading="lazy"
              />
              <div className="pf-img-badge">🔧 Same-Day Drain Clearing</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           WATER DAMAGE & EMERGENCY
         ════════════════════════════════════════ */}
      <section className="pf-section pf-section-alt" id="water-damage">
        <div className="pf-container">
          <div className="pf-two-col reverse">
            <div className="pf-col-text">
              <div className="pf-section-label">Emergency Response</div>
              <h2 className="pf-section-title">Water Damage &amp; Flood Response</h2>
              <p className="pf-section-sub">
                A burst pipe or sudden flood can cause thousands in damage within hours. Our emergency team responds in 60 minutes or less to stop the source and protect your property.
              </p>

              <div className="pf-feature-list">
                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Burst Pipe Emergency Response</strong>
                    <p>We locate and stop burst pipes immediately, then assess and repair the full extent of the damage.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Flooding &amp; Water Extraction</strong>
                    <p>Fast water removal to minimize structural damage and reduce the risk of mold growth in your walls and floors.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Insurance Claim Support</strong>
                    <p>We document everything and provide detailed reports to help you file a successful insurance claim.</p>
                  </div>
                </div>

                <div className="pf-feat-item">
                  <div className="pf-feat-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <strong>Pipe Replacement &amp; Restoration</strong>
                    <p>Full replacement of damaged pipes and support throughout the property restoration process.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/14127693968"
                target="_blank"
                rel="noopener noreferrer"
                className="pf-btn-primary"
                style={{ width: 'fit-content', background: '#DC2626' }}
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Emergency Line Now</span>
              </a>
            </div>

            <div className="pf-col-img">
              <img
                src="https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80"
                alt="Plumber repairing pipes inside a wall"
                loading="lazy"
              />
              <div className="pf-img-badge">🚨 60-Min Emergency Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           EMERGENCY BANNER
         ════════════════════════════════════════ */}
      <div className="pf-emergency">
        <div className="pf-container">
          <h2>Plumbing Emergency? Don't Wait.</h2>
          <p>Every minute counts. Our emergency crew is standing by on WhatsApp right now.</p>
          <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer" className="pf-phone-big">
            +1 (412) 769-3968
          </a>
          <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer" className="pf-btn-dark">
            <FaWhatsapp size={20} />
            <span>Tap to WhatsApp Now — WhatsApp Only (24/7)</span>
          </a>
        </div>
      </div>

      {/* ════════════════════════════════════════
           WHY CHOOSE US
         ════════════════════════════════════════ */}
      <section className="pf-section" style={{ background: 'var(--navy)' }} id="about">
        <div className="pf-container">
          <div className="pf-section-head center">
            <div className="pf-section-label" style={{ color: 'var(--amber)' }}>Why ProFlow</div>
            <h2 className="pf-section-title" style={{ color: 'var(--white)' }}>Why Homeowners Choose Us</h2>
            <p className="pf-section-sub" style={{ color: 'rgba(255,255,255,.6)' }}>
              We built our reputation one job at a time — by showing up on time, being honest about pricing, and doing work we're proud to put our name on.
            </p>
          </div>

          <div className="pf-why-grid">
            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <h3>Fast Response Time</h3>
              <p>We average under 60 minutes to reach your location for emergencies — because we know time is critical when it comes to water damage.</p>
            </div>

            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <h3>Licensed &amp; Fully Insured</h3>
              <p>Every technician on our team is state-licensed and fully insured. You're protected — and so is your home — on every single job.</p>
            </div>

            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
              <h3>Upfront, Flat Pricing</h3>
              <p>We give you a clear price before any work begins. No hidden fees, no surprise charges on the final bill — ever.</p>
            </div>

            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              <h3>Workmanship Guarantee</h3>
              <p>All repairs and installations come with a 1-year labor guarantee. If something isn't right, we come back and fix it — no charge.</p>
            </div>

            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
              <h3>Experienced Local Team</h3>
              <p>Our plumbers average 12 years of hands-on experience. We've seen every plumbing problem imaginable and know exactly how to fix it.</p>
            </div>

            <div className="pf-why-card">
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              <h3>Clear Communication</h3>
              <p>We explain what we find, what needs to be done, and why — in plain language, not plumber jargon. You're always in control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           TESTIMONIALS
         ════════════════════════════════════════ */}
      <section className="pf-section pf-section-alt">
        <div className="pf-container">
          <div className="pf-section-head center">
            <div className="pf-section-label">Customer Reviews</div>
            <h2 className="pf-section-title">What Our Clients Say</h2>
            <p className="pf-section-sub">
              Don't just take our word for it — here's what real customers have to say about ProFlow Plumbing.
            </p>
          </div>

          <div className="pf-testi-grid">
            <div className="pf-testi-card">
              <div className="pf-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <blockquote>
                "Pipe burst at 11pm on a Sunday. ProFlow had someone at my door in 45 minutes. They stopped the flooding, fixed the pipe, and even cleaned up the mess. Absolutely incredible service — I won't call anyone else."
              </blockquote>
              <div className="pf-reviewer">
                <div className="pf-avatar" style={{ background: '#1a3a5c' }}>MR</div>
                <div className="pf-reviewer-info">
                  <strong>Michael R.</strong>
                  <span>Homeowner — Austin, TX</span>
                </div>
              </div>
            </div>

            <div className="pf-testi-card">
              <div className="pf-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <blockquote>
                "We use ProFlow for all three of our restaurant locations. They understand that our business can't afford downtime. Always responsive, always professional, and their preventive maintenance contract has saved us twice."
              </blockquote>
              <div className="pf-reviewer">
                <div className="pf-avatar" style={{ background: '#7c3aed' }}>SL</div>
                <div className="pf-reviewer-info">
                  <strong>Sandra L.</strong>
                  <span>Restaurant Owner — Denver, CO</span>
                </div>
              </div>
            </div>

            <div className="pf-testi-card">
              <div className="pf-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                ))}
              </div>
              <blockquote>
                "Had a slow drain that two other plumbers couldn't fix. ProFlow came in with a camera, found a root intrusion 30 feet down the line, and cleared it the same day. The pricing was completely upfront — no surprises. Highly recommend."
              </blockquote>
              <div className="pf-reviewer">
                <div className="pf-avatar" style={{ background: '#065f46' }}>JT</div>
                <div className="pf-reviewer-info">
                  <strong>James T.</strong>
                  <span>Homeowner — Charlotte, NC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           CONTACT FORM SECTION
         ════════════════════════════════════════ */}
      <section className="pf-section" id="contact">
        <div className="pf-container">
          <div className="pf-section-head">
            <div className="pf-section-label">Get In Touch</div>
            <h2 className="pf-section-title">Request a Free Quote</h2>
            <p className="pf-section-sub">
              Fill out the form and we'll get back to you within 30 minutes during business hours — or message us directly on WhatsApp for immediate assistance.
            </p>
          </div>

          <div className="pf-contact-wrap">
            <div className="pf-contact-info">
              <h3>We're Here When You Need Us</h3>

              <div className="pf-info-row">
                <div className="pf-info-icon">
                  <FaWhatsapp style={{ width: '20px', height: '20px', fill: 'var(--amber-dark)', stroke: 'none' }} />
                </div>
                <div>
                  <strong>WhatsApp Only</strong>
                  <span>
                    <a
                      href="https://wa.me/14127693968"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'underline' }}
                    >
                      +1 (412) 769-3968
                    </a>{' '}
                    — 24/7 Emergency Support
                  </span>
                </div>
              </div>

              <div className="pf-info-row">
                <div className="pf-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>contact@proflowplumbing.com</span>
                </div>
              </div>

              <div className="pf-info-row">
                <div className="pf-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon–Fri: 7am–7pm | Sat: 8am–5pm | Emergency: 24/7</span>
                </div>
              </div>

              <div className="pf-info-row">
                <div className="pf-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Service Area</strong>
                  <span>Metro Area &amp; Surrounding Communities</span>
                </div>
              </div>
            </div>

            <form className="pf-contact-form" onSubmit={handleFormSubmit}>
              <h3>Get Your Free Estimate</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-white/10 text-center space-y-2">
                  <div className="text-amber-400 font-bold text-lg font-['Bebas_Neue'] tracking-wider">
                    Quote Request Received!
                  </div>
                  <p className="text-xs text-white/90">
                    Thank you {formData.firstName}! A certified plumbing technician will review your request and contact you at {formData.phone || formData.email} within 30 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs text-amber-400 hover:text-white underline font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="pf-form-row">
                    <div className="pf-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="pf-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pf-form-row">
                    <div className="pf-field">
                      <label htmlFor="phone">WhatsApp / Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your WhatsApp or phone number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="pf-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pf-field">
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater Service</option>
                      <option>Pipe Installation / Repair</option>
                      <option>Residential Plumbing</option>
                      <option>Commercial Plumbing</option>
                      <option>Water Damage / Flood</option>
                      <option>Leak Detection</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="pf-field">
                    <label htmlFor="problem">Describe the Problem</label>
                    <textarea
                      id="problem"
                      name="problem"
                      placeholder="Tell us what's happening — the more detail, the better we can prepare..."
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    />
                  </div>

                  <button className="pf-submit-btn" type="submit">
                    Send My Free Quote Request →
                  </button>
                  <p className="pf-form-status">
                    Fast response guaranteed • Upfront flat pricing • No obligation
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
           FOOTER
         ════════════════════════════════════════ */}
      <footer className="pf-footer">
        <div className="pf-footer-grid">
          <div className="pf-footer-brand">
            <a href="#top" onClick={(e) => scrollToSection(e, '#top')} className="pf-logo">
              <div className="pf-logo-icon">
                <svg viewBox="0 0 24 24" fill="#0A1628">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div className="pf-logo-text">
                ProFlow<span>Plumbing Services</span>
              </div>
            </a>
            <p>
              Family-owned and operated since 2008. Serving homeowners and businesses with honest, reliable plumbing services you can count on. Powered by Alvora Tech.
            </p>
          </div>

          <div className="pf-footer-col">
            <h4>Services</h4>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Emergency Repairs</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Drain Cleaning</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Water Heaters</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Pipe Installation</a>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Leak Detection</a>
          </div>

          <div className="pf-footer-col">
            <h4>Service Type</h4>
            <a href="#residential" onClick={(e) => scrollToSection(e, '#residential')}>Residential</a>
            <a href="#commercial" onClick={(e) => scrollToSection(e, '#commercial')}>Commercial</a>
            <a href="#drain" onClick={(e) => scrollToSection(e, '#drain')}>Drain Services</a>
            <a href="#water-damage" onClick={(e) => scrollToSection(e, '#water-damage')}>Water Damage</a>
          </div>

          <div className="pf-footer-col">
            <h4>Contact</h4>
            <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
              +1 (412) 769-3968 (WhatsApp Only)
            </a>
            <a href="mailto:contact@proflowplumbing.com">contact@proflowplumbing.com</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Get Free Quote</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About Us</a>
          </div>
        </div>

        <div className="pf-footer-bottom">
          <span>© {new Date().getFullYear()} ProFlow Plumbing Services. All rights reserved. Demo site engineered by Alvora Tech.</span>
          <span>
            Licensed &amp; Insured | <a href="/">Alvora Tech Main Platform</a>
          </span>
        </div>
      </footer>

      {/* ── STICKY MOBILE WHATSAPP CTA ── */}
      <div className="pf-sticky-cta">
        <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ width: '20px', height: '20px', fill: 'var(--navy)', stroke: 'none' }} />
          <span>WhatsApp Us — +1 (412) 769-3968</span>
        </a>
      </div>
    </div>
  );
}

