import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import CountUpNumber from '../../components/CountUpNumber';
import './auto-repair.css';

/**
 * AutoRepair Component
 * Converted React landing page for Alvoratech Precision Auto Care demo
 * Accessible at: http://localhost:3000/auto-repair
 */
export default function AutoRepair() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const heroSlides = [
    {
      image: '/demos/auto-repair/images/alt-workshop.jpg',
      alt: 'Automotive workshop with technician inspecting vehicle',
    },
    {
      image: '/demos/auto-repair/images/sports-car.jpg',
      alt: 'Precision sports car performance tuning',
    },
    {
      image: '/demos/auto-repair/images/night-car.jpg',
      alt: 'Luxury vehicle headlights at dusk',
    },
  ];

  const reviews = [
    {
      quote:
        'They took the time to explain everything and never made me feel pressured. My car is running beautifully—and I finally feel good about bringing it in.',
      name: 'Jamie M.',
      role: 'Customer since 2021',
      avatar: 'JM',
    },
    {
      quote:
        'Professional, kind and genuinely thorough. I appreciated the updates throughout the day and the honest advice about what could wait.',
      name: 'Casey L.',
      role: 'Customer since 2022',
      avatar: 'CL',
    },
    {
      quote:
        'From the first hello to picking up my keys, the whole experience felt easy. It’s a relief to have a shop I can trust.',
      name: 'Taylor R.',
      role: 'Customer since 2023',
      avatar: 'TR',
    },
  ];

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="auto-repair-demo" id="top">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="Alvoratech Precision Auto Care" />

      {/* Demo Notice Banner */}
      <div className="demo-banner" role="note">
        <span className="demo-banner__tag">DEMO WEBSITE</span>
        <span>Concept website only — Alvoratech is not an operating repair business.</span>
      </div>

      {/* Site Header */}
      <header className="site-header">
        <div className="header-top">
          <a href="#top" className="brand" aria-label="Alvoratech home" onClick={(e) => scrollToSection(e, 'top')}>
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 42 42" fill="none">
                <path d="M5 31.5 18.5 6h5L37 31.5h-8l-2.7-5.3H15.8l-2.7 5.3H5Z" fill="currentColor" />
                <path d="m18.7 20.8 2.4-4.6 2.4 4.6h-4.8Z" fill="#121312" />
                <path d="M9 35h24" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <span className="brand__name">
              ALVORA<span>TECH</span>
            </span>
          </a>

          <div className="header-top__right">
            <span className="header-location">
              <span className="status-dot"></span> Your neighborhood auto care
            </span>
            <span className="header-divider"></span>
            <a
              className="header-phone"
              href="https://wa.me/14127693968"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Only: +1 (412) 769-3968"
            >
              <span className="phone-icon" aria-hidden="true">↗</span> +1 (412) 769-3968 (WhatsApp)
            </a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className="main-nav__inner">
            <div className="nav-links">
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Our story</a>
              <a href="#difference" onClick={(e) => scrollToSection(e, 'difference')}>Why Alvoratech</a>
              <a href="#team" onClick={(e) => scrollToSection(e, 'team')}>Our team</a>
              <a href="#reviews" onClick={(e) => scrollToSection(e, 'reviews')}>Reviews</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </div>
            <a className="button button--nav" href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>
              Book a visit <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* ── HERO SECTION ── */}
        <section className="hero" aria-label="Alvoratech auto care">
          <div className="hero__slides" aria-hidden="true">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`hero__slide ${idx === heroIndex ? 'is-active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
          </div>
          <div className="hero__shade"></div>

          <div className="hero__content container">
            <div className="eyebrow eyebrow--light">
              <span></span> Driven by precision. Built on trust.
            </div>
            <h1>
              Confidence in<br />every <em>mile.</em>
            </h1>
            <p>
              Thoughtful people. Clear answers. Expert auto care that gets you back to what matters.
            </p>
            <div className="hero__actions">
              <a className="button button--accent" href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>
                Schedule your visit <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link text-link--light" href="#services" onClick={(e) => scrollToSection(e, 'services')}>
                Explore our services <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero__proof">
              <span className="proof-stars" aria-label="Five out of five stars">★★★★★</span>
              <span>Care that keeps you moving</span>
            </div>
          </div>

          <div className="hero__bottom container">
            <span className="hero__index">
              <b>{String(heroIndex + 1).padStart(2, '0')}</b>
              <span className="hero__index-line"></span> 03
            </span>
            <div className="hero__controls">
              <button
                type="button"
                className="hero-arrow hero-prev"
                aria-label="Previous slide"
                onClick={() => setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              >
                ←
              </button>
              <button
                type="button"
                className="hero-arrow hero-next"
                aria-label="Next slide"
                onClick={() => setHeroIndex((prev) => (prev + 1) % heroSlides.length)}
              >
                →
              </button>
            </div>
          </div>
          <a className="hero__scroll" href="#services" onClick={(e) => scrollToSection(e, 'services')}>
            <span>Scroll to discover</span>
            <span className="scroll-line"></span>
          </a>
        </section>

        {/* ── TRUST STRIP ── */}
        <div className="trust-strip" aria-label="Alvoratech commitments">
          <div className="container trust-strip__inner">
            <div>
              <span className="trust-number">01</span>
              <span>Clarity before<br />the wrench turns</span>
            </div>
            <div>
              <span className="trust-number">02</span>
              <span>Quality parts.<br />Careful work.</span>
            </div>
            <div>
              <span className="trust-number">03</span>
              <span>Here for the<br />long road</span>
            </div>
            <a href="#difference" onClick={(e) => scrollToSection(e, 'difference')}>
              The Alvoratech standard <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* ── SERVICES SECTION ── */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <div className="eyebrow">
                  <span></span> Complete auto care
                </div>
                <h2>
                  One trusted team.<br /><em>Every turn.</em>
                </h2>
              </div>
              <p>
                From the quick essentials to the complex fixes, our technicians bring precision and a personal touch to every service.
              </p>
            </div>

            <div className="services-grid">
              {[
                {
                  id: '01',
                  title: 'Engine diagnostics',
                  desc: 'Clear answers for warning lights, strange sounds and performance issues.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <path d="M9 20h5l4-6h13l5 6h4v17h-4l-3 4H17l-3-4H9V20Z" />
                      <path d="M19 14V9h11v5m-13 9h15m-4 5 4 3-4 3" />
                    </svg>
                  ),
                },
                {
                  id: '02',
                  title: 'Brake repair',
                  desc: 'Confident stopping starts with a thorough inspection and expert care.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <circle cx="24" cy="25" r="15" />
                      <circle cx="24" cy="25" r="7" />
                      <path d="M19 8h10v5H19zM11 13l4 4m18-4-4 4" />
                    </svg>
                  ),
                },
                {
                  id: '03',
                  title: 'Oil & filter',
                  desc: 'Routine maintenance made easy, with the right oil for your vehicle.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <path d="M18 8h12l-1 8 7 8v14H12V24l7-8-1-8Z" />
                      <path d="M19 28h10m-5-8v13" />
                    </svg>
                  ),
                },
                {
                  id: '04',
                  title: 'Transmission',
                  desc: 'Careful diagnostics and repair to keep every gear change smooth.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <path d="M9 14h30v21H9zM15 14V9m18 5V9M9 23h30m-20 0v12m10-12v12" />
                      <circle cx="16" cy="19" r="1" />
                      <circle cx="24" cy="19" r="1" />
                      <circle cx="32" cy="19" r="1" />
                    </svg>
                  ),
                },
                {
                  id: '05',
                  title: 'Tires & alignment',
                  desc: 'Balanced handling and a confident ride, mile after mile.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <circle cx="24" cy="24" r="16" />
                      <circle cx="24" cy="24" r="8" />
                      <path d="M24 8v8m0 16v8M8 24h8m16 0h8M13 13l6 6m10 10 6 6m0-22-6 6m-10 10-6 6" />
                    </svg>
                  ),
                },
                {
                  id: '06',
                  title: 'Battery care',
                  desc: 'Testing and replacement so you can count on a strong start.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <rect x="9" y="15" width="30" height="23" rx="2" />
                      <path d="M17 15v-4h14v4m-7 5v13m-6-6h12" />
                    </svg>
                  ),
                },
                {
                  id: '07',
                  title: 'Suspension',
                  desc: 'Smoother, steadier driving with suspension care tailored to your car.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <path d="M15 9v8l-4 3 8 6-8 6 8 7m14-30v8l4 3-8 6 8 6-8 7" />
                    </svg>
                  ),
                },
                {
                  id: '08',
                  title: 'Vehicle maintenance',
                  desc: 'Proactive care that helps protect your vehicle and your plans.',
                  svg: (
                    <svg viewBox="0 0 48 48">
                      <path d="m24 7 4 4 6-1 1 6 5 4-3 5 1 6-6 2-3 6-6-2-6 2-3-6-6-2 1-6-3-5 5-4 1-6 6 1 6-4Z" />
                      <circle cx="24" cy="24" r="6" />
                    </svg>
                  ),
                },
              ].map((service) => (
                <div
                  key={service.id}
                  className="service-card"
                  onClick={(e) => {
                    setSelectedService(service.title);
                    scrollToSection(e, 'appointment');
                  }}
                >
                  <span className="service-card__number">{service.id}</span>
                  <span className="service-icon" aria-hidden="true">
                    {service.svg}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="card-arrow" aria-hidden="true">↗</span>
                </div>
              ))}
            </div>

            <div className="services-foot">
              <span>Not sure what your vehicle needs?</span>
              <a className="text-link" href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>
                Tell us what's going on <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-visual">
              <img
                src="/demos/auto-repair/images/alt-workshop.jpg"
                alt="Technician working under the hood of a vehicle in a repair workshop"
                loading="lazy"
              />
              <div className="about-visual__label">
                <span>ALVORATECH</span>
                <b>Built on trust.<br />Driven by care.</b>
              </div>
              <div className="about-visual__stamp">
                <span>CARE<br />IN EVERY<br />DETAIL</span>
                <svg viewBox="0 0 80 80" aria-hidden="true">
                  <circle cx="40" cy="40" r="36" />
                  <path d="M20 42h40M40 22v40M26 28l28 28m0-28L26 56" />
                </svg>
              </div>
            </div>

            <div className="about-copy">
              <div className="eyebrow eyebrow--light">
                <span></span> The Alvoratech difference
              </div>
              <h2>
                Good service<br />is a <em>feeling.</em>
              </h2>
              <p className="about-lead">
                It’s the calm of knowing what’s happening with your car—and why. That’s the kind of auto care we believe in.
              </p>
              <p>
                Alvoratech brings together skilled hands, modern diagnostic tools and a simple promise: listen first, explain clearly, and treat every vehicle like it carries someone we care about.
              </p>
              <a className="button button--outline-light" href="#difference" onClick={(e) => scrollToSection(e, 'difference')}>
                Get to know us <span aria-hidden="true">↗</span>
              </a>

              <div className="about-stats">
                <div>
                  <strong>
                    <CountUpNumber end={15} suffix="+" duration={1.8} />
                  </strong>
                  <span>years of<br />experience</span>
                </div>
                <div>
                  <strong>
                    <CountUpNumber end={4} suffix="k+" duration={2} />
                  </strong>
                  <span>vehicles<br />cared for</span>
                </div>
                <div>
                  <strong>
                    <CountUpNumber end={98} suffix="%" duration={1.8} />
                  </strong>
                  <span>customers<br />recommend us</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFFERENCE SECTION ── */}
        <section className="difference-section section" id="difference">
          <div className="container">
            <div className="section-heading section-heading--center">
              <div className="eyebrow">
                <span></span> What matters most
              </div>
              <h2>
                Car care, without<br /><em>the guesswork.</em>
              </h2>
              <p>Every visit is shaped around your time, your questions and what’s right for your vehicle.</p>
            </div>

            <div className="difference-grid">
              <article className="difference-card">
                <span className="difference-card__num">01 / HONESTY</span>
                <div className="difference-icon" aria-hidden="true">◉</div>
                <h3>Clear, upfront guidance</h3>
                <p>We explain what we find and talk through your options before work begins.</p>
              </article>
              <article className="difference-card">
                <span className="difference-card__num">02 / CRAFT</span>
                <div className="difference-icon" aria-hidden="true">✳</div>
                <h3>Work with intention</h3>
                <p>Experienced technicians, modern diagnostic equipment and attention to detail.</p>
              </article>
              <article className="difference-card">
                <span className="difference-card__num">03 / RESPECT</span>
                <div className="difference-icon" aria-hidden="true">↗</div>
                <h3>Your time matters</h3>
                <p>Thoughtful scheduling and helpful updates keep you in the loop at every step.</p>
              </article>
              <article className="difference-card">
                <span className="difference-card__num">04 / CARE</span>
                <div className="difference-icon" aria-hidden="true">♡</div>
                <h3>People come first</h3>
                <p>We’re here to make the repair experience a little more human, every time.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── TEAM SECTION ── */}
        <section className="team-section section" id="team">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <div className="eyebrow">
                  <span></span> The people behind the work
                </div>
                <h2>
                  Skill you can trust.<br /><em>People you know.</em>
                </h2>
              </div>
              <p>
                Good repairs start with good people. Meet the kind of thoughtful experts we’d want looking after our own cars.
              </p>
            </div>

            <div className="team-grid">
              <article className="team-card">
                <div className="team-card__image">
                  <img
                    src="/demos/auto-repair/images/technician.jpg"
                    alt="Automotive technician standing beside an open vehicle hood"
                    loading="lazy"
                  />
                  <span className="team-card__tag">LEAD TECHNICIAN</span>
                </div>
                <div className="team-card__details">
                  <div>
                    <h3>Jordan Mitchell</h3>
                    <p>Diagnostics &amp; repair</p>
                  </div>
                  <a href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')} aria-label="Book an appointment with Jordan">↗</a>
                </div>
              </article>

              <article className="team-card">
                <div className="team-card__image">
                  <img
                    src="/demos/auto-repair/images/alt-workshop.jpg"
                    alt="Mechanic inspecting an open engine in a service bay"
                    loading="lazy"
                  />
                  <span className="team-card__tag">MASTER MECHANIC</span>
                </div>
                <div className="team-card__details">
                  <div>
                    <h3>Sam Rivera</h3>
                    <p>Maintenance &amp; repair</p>
                  </div>
                  <a href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')} aria-label="Book an appointment with Sam">↗</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── GALLERY SECTION ── */}
        <section className="gallery-section">
          <div className="container gallery-heading">
            <div>
              <div className="eyebrow eyebrow--light">
                <span></span> A closer look
              </div>
              <h2>
                Our work.<br /><em>Our workshop.</em>
              </h2>
            </div>
            <a className="text-link text-link--light" href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>
              See us in person <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item gallery-item--wide">
              <img
                src="/demos/auto-repair/images/alt-service.jpg"
                alt="Organized selection of tools in an automotive repair workshop"
                loading="lazy"
              />
              <figcaption>
                <span>01</span> The workshop
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="/demos/auto-repair/images/workshop.jpg"
                alt="Close-up of engine belt and pulley components"
                loading="lazy"
              />
              <figcaption>
                <span>02</span> The details
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="/demos/auto-repair/images/sports-car.jpg"
                alt="Dark performance car on the road"
                loading="lazy"
              />
              <figcaption>
                <span>03</span> Ready for the road
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── REVIEWS SECTION ── */}
        <section className="reviews-section section" id="reviews">
          <div className="container reviews-layout">
            <div className="reviews-intro">
              <div className="eyebrow">
                <span></span> Kind words, miles later
              </div>
              <h2>
                Trust is earned<br /><em>one visit at a time.</em>
              </h2>
              <div className="review-score">
                <strong>5.0</strong>
                <span>
                  <b>★★★★★</b>
                  <small>Based on customer feedback</small>
                </span>
              </div>
            </div>

            <div className="review-carousel" aria-roledescription="carousel" aria-label="Customer testimonials">
              <div className="review-track">
                {reviews.map((rev, idx) => (
                  <blockquote
                    key={idx}
                    className={`review-slide ${idx === reviewIndex ? 'is-active' : ''}`}
                  >
                    <span className="quote-mark">“</span>
                    <p>{rev.quote}</p>
                    <footer>
                      <span className="review-avatar">{rev.avatar}</span>
                      <span>
                        <b>{rev.name}</b>
                        <small>{rev.role}</small>
                      </span>
                      <span className="review-stars" aria-label="5 out of 5 stars">
                        ★★★★★
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>

              <div className="review-controls">
                <span className="review-dots" aria-label="Choose testimonial">
                  {reviews.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      className={dotIdx === reviewIndex ? 'is-active' : ''}
                      aria-label={`Show testimonial ${dotIdx + 1}`}
                      onClick={() => setReviewIndex(dotIdx)}
                    />
                  ))}
                </span>
                <div>
                  <button
                    className="review-prev"
                    aria-label="Previous testimonial"
                    onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                  >
                    ←
                  </button>
                  <button
                    className="review-next"
                    aria-label="Next testimonial"
                    onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── APPOINTMENT SECTION ── */}
        <section className="appointment-section" id="appointment">
          <div className="container appointment-layout">
            <div className="appointment-copy">
              <div className="eyebrow eyebrow--light">
                <span></span> Let's get you moving
              </div>
              <h2>
                A better visit<br />starts <em>right here.</em>
              </h2>
              <p>
                Tell us a little about your vehicle and what it needs. Our service team will be in touch to confirm a time.
              </p>
              <div className="appointment-note">
                <span className="note-icon">✓</span>
                <span>
                  <b>No pressure. Just helpful service.</b>
                  <small>This demonstration form does not transmit or store information.</small>
                </span>
              </div>
              <div className="appointment-contact">
                <span>Have a question? Message us on WhatsApp only.</span>
                <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
                  +1 (412) 769-3968 (WhatsApp Only) <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <form className="appointment-form" id="appointment-form" onSubmit={handleAppointmentSubmit}>
              <div className="form-heading">
                <span>01 — APPOINTMENT REQUEST</span>
                <p>All fields marked <b>*</b> are required.</p>
              </div>

              <div className="form-grid">
                <label className="field">
                  Your name <b>*</b>
                  <input name="name" type="text" autoComplete="name" required minLength="2" placeholder="First and last name" />
                </label>
                <label className="field">
                  Phone number <b>*</b>
                  <input name="phone" type="tel" autoComplete="tel" required minLength="7" placeholder="Your best contact number" />
                </label>
                <label className="field">
                  Email address <b>*</b>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@domain.com" />
                </label>
                <label className="field">
                  Vehicle <b>*</b>
                  <input name="vehicle" type="text" required placeholder="Year, make and model" />
                </label>
                <label className="field field--full">
                  What can we help with? <b>*</b>
                  <select
                    name="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    <option>Engine diagnostics</option>
                    <option>Brake repair</option>
                    <option>Oil & filter</option>
                    <option>Transmission</option>
                    <option>Tires & alignment</option>
                    <option>Battery care</option>
                    <option>Suspension</option>
                    <option>Vehicle maintenance</option>
                    <option>Other / not sure</option>
                  </select>
                </label>
                <label className="field field--full">
                  Anything else we should know?
                  <textarea name="message" rows="3" placeholder="A few details can help us prepare"></textarea>
                </label>
              </div>

              <div className="form-submit">
                <button className="button button--accent" type="submit">
                  Request an appointment <span aria-hidden="true">↗</span>
                </button>
                <span className="form-privacy">Your details stay with our team.</span>
              </div>

              {appointmentSubmitted && (
                <div className="form-success" role="status">
                  <span>✓</span>
                  <div>
                    <b>Request received — in this demo.</b>
                    <p>Your information has been logged in this preview. In a live production deployment, your staff receives an instant SMS & email notification.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="faq-section section" id="faq">
          <div className="container faq-layout">
            <div className="faq-intro">
              <div className="eyebrow">
                <span></span> Good to know
              </div>
              <h2>
                A few things<br />you might <em>wonder.</em>
              </h2>
              <p>Still have a question? We’re always happy to help.</p>
              <a className="text-link" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="faq-list">
              <details>
                <summary>
                  Do I need an appointment?
                  <span></span>
                </summary>
                <p>
                  An appointment helps us plan for your visit and give your vehicle the attention it deserves. Use the form above to request a time.
                </p>
              </details>
              <details>
                <summary>
                  Will you explain repairs before starting?
                  <span></span>
                </summary>
                <p>
                  Always. We’ll share what we find, answer your questions and discuss the recommended work before moving forward.
                </p>
              </details>
              <details>
                <summary>
                  Can I bring in a vehicle if I’m not sure what’s wrong?
                  <span></span>
                </summary>
                <p>
                  Absolutely. Tell us what you’ve noticed, and our technicians can inspect the vehicle and help identify next steps.
                </p>
              </details>
              <details>
                <summary>
                  What kinds of vehicles do you service?
                  <span></span>
                </summary>
                <p>
                  Alvoratech provides turn-key digital templates for local auto repair shops, European vehicle specialists, tire shops, and performance garages.
                </p>
              </details>
              <details>
                <summary>
                  Is this a real repair shop?
                  <span></span>
                </summary>
                <p>
                  No. This is an interactive demo template built by Alvoratech to showcase how our client websites function and convert visitors into appointments.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <div className="eyebrow eyebrow--light">
                <span></span> Come say hello
              </div>
              <h2>
                Good people.<br /><em>Good roads ahead.</em>
              </h2>
              <p>Questions, a curious noise, or just need a place to start? We’re here for you.</p>
              <a className="button button--outline-light" href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>
                Book a visit <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-detail">
                <span>WHATSAPP ONLY</span>
                <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
                  +1 (412) 769-3968
                </a>
              </div>
              <div className="contact-detail">
                <span>SEND US A NOTE</span>
                <a href="mailto:service@alvoratechhq.com">service@alvoratechhq.com</a>
              </div>
              <div className="contact-detail">
                <span>FIND THE SHOP</span>
                <p>124 Industrial Parkway<br />Metro District, Suite 100</p>
              </div>
              <div className="contact-detail">
                <span>WHEN WE'RE HERE</span>
                <p>
                  Monday–Friday <b>8:00 am – 6:00 pm</b><br />
                  Saturday <b>9:00 am – 2:00 pm</b><br />
                  Sunday <b>Closed</b>
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <form className="contact-form" id="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form__heading">
                <div className="eyebrow eyebrow--light">
                  <span></span> Send us a note
                </div>
                <p>We’d love to hear from you.</p>
              </div>

              <label className="field">
                Your name <b>*</b>
                <input name="name" type="text" autoComplete="name" required minLength="2" />
              </label>
              <label className="field">
                Email address <b>*</b>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="field contact-form__message">
                Your message <b>*</b>
                <textarea name="message" rows="3" required minLength="5"></textarea>
              </label>

              <div className="contact-form__submit">
                <button className="button button--accent" type="submit">
                  Send a message <span aria-hidden="true">↗</span>
                </button>
              </div>

              {contactSubmitted && (
                <div className="form-success contact-form__success" role="status">
                  <span>✓</span>
                  <div>
                    <b>Message sent in demo mode!</b>
                    <p>In a live website, the Alvoratech automated customer inbox routes this message directly to your staff's mobile devices.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="contact-bottom container">
            <span>ALVORATECH — PRECISION AUTO CARE</span>
            <span>LOCAL CARE. LONG-HAUL TRUST.</span>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand--footer" href="#top" onClick={(e) => scrollToSection(e, 'top')}>
            <span className="brand__mark" aria-hidden="true">
              <svg viewBox="0 0 42 42" fill="none">
                <path d="M5 31.5 18.5 6h5L37 31.5h-8l-2.7-5.3H15.8l-2.7 5.3H5Z" fill="currentColor" />
                <path d="m18.7 20.8 2.4-4.6 2.4 4.6h-4.8Z" fill="#121312" />
                <path d="M9 35h24" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <span className="brand__name">
              ALVORA<span>TECH</span>
            </span>
          </a>
          <p>Expert auto care, delivered with a little more heart.</p>
          <div className="footer-links">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>Our story</a>
            <a href="#appointment" onClick={(e) => scrollToSection(e, 'appointment')}>Appointments</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQs</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </div>
          <div className="footer-contact">
            <span>
              WHATSAPP ONLY{' '}
              <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
                +1 (412) 769-3968
              </a>
            </span>
            <span>EMAIL <a href="mailto:service@alvoratechhq.com">service@alvoratechhq.com</a></span>
          </div>
        </div>
        <div className="container footer-legal">
          <span>© 2026 Alvoratech. Demonstration website — template preview.</span>
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')}>Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

