import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import {
  FiTruck,
  FiShield,
  FiPhoneCall,
  FiTool,
  FiClock,
  FiMapPin,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiArrowRight,
  FiHelpCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './towing-company.css';

export default function TowingCompany() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (["services","about","why-us","gallery","faq","contact"].includes(hash)) return hash;
      if (['services', 'about', 'reviews', 'testimonials', 'projects', 'gallery', 'faq', 'contact'].includes(hash)) return hash;
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
      if (["services","about","why-us","gallery","faq","contact"].includes(hash)) {
        setCurrentView(hash);
      } else if (['services', 'about', 'reviews', 'testimonials', 'projects', 'gallery', 'faq', 'contact'].includes(hash)) {
        setCurrentView(hash);
      } else {
        setCurrentView('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    vehicleType: '',
    serviceRequired: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Emergency Towing',
      desc: 'Reliable towing assistance for vehicles that break down unexpectedly on highways or city streets.',
      image: '/towing-company/images/hero-tow-truck.webp',
      alt: 'Tow truck responding to an emergency service call',
      icon: FiTruck,
    },
    {
      title: 'Flatbed Towing',
      desc: 'Professional flatbed transportation for vehicles requiring completely secure and level transport.',
      image: '/towing-company/images/flatbed-towing.webp',
      alt: 'Flatbed towing truck in service',
      icon: FiShield,
    },
    {
      title: 'Heavy-Duty Towing',
      desc: 'Towing and recovery solutions for commercial trucks, fleet vehicles, and larger machinery.',
      image: '/towing-company/images/heavy-duty-towing.webp',
      alt: 'Commercial heavy-duty tow truck',
      icon: FiTool,
    },
    {
      title: 'Accident Recovery',
      desc: 'Vehicle recovery and transportation assistance following collisions or off-road departures.',
      image: '/towing-company/images/vehicle-recovery.webp',
      alt: 'Tow truck recovering a disabled vehicle',
      icon: FiCheckCircle,
    },
    {
      title: 'Motorcycle Towing',
      desc: 'Specialized straps and tie-down transportation for motorcycles and two-wheeled vehicles.',
      image: '/towing-company/images/motorcycle-towing.webp',
      alt: 'Specialized motorcycle towing rig',
      icon: FiTruck,
    },
    {
      title: 'Long-Distance Towing',
      desc: 'Vehicle transportation for customers requiring longer-distance inter-city relocation.',
      image: '/towing-company/images/flatbed-towing.webp',
      alt: 'Long distance vehicle transport',
      icon: FiMapPin,
    },
    {
      title: 'Roadside Assistance',
      desc: 'Fast, dependable assistance for common roadside problems while travelling.',
      image: '/towing-company/images/roadside-assistance.webp',
      alt: 'Roadside assistance technician at work',
      icon: FiTool,
    },
    {
      title: 'Jump-Start Services',
      desc: 'Rapid support for vehicles experiencing dead batteries or starting system faults.',
      image: '/towing-company/images/motorcycle-towing.webp',
      alt: 'Jump start battery service equipment',
      icon: FiClock,
    },
    {
      title: 'Tire Change Assistance',
      desc: 'On-scene assistance with flat, punctured, or compromised vehicle tires.',
      image: '/towing-company/images/heavy-duty-towing.webp',
      alt: 'Mobile roadside tire change support',
      icon: FiTool,
    },
    {
      title: 'Vehicle Lockout Assistance',
      desc: 'Damage-free vehicle entry assistance when locked out of your vehicle.',
      image: '/towing-company/images/roadside-assistance.webp',
      alt: 'Automotive locksmith lockout service',
      icon: FiShield,
    },
  ];

  const galleryImages = [
    { src: '/towing-company/images/towing-gallery/gallery-1.webp', alt: 'Tow truck with recovery equipment' },
    { src: '/towing-company/images/towing-gallery/gallery-2.webp', alt: 'Flatbed tow truck loading vehicle' },
    { src: '/towing-company/images/towing-gallery/gallery-3.webp', alt: 'Heavy duty tow truck on duty' },
    { src: '/towing-company/images/towing-gallery/gallery-4.webp', alt: 'Roadside assistance service vehicle' },
    { src: '/towing-company/images/towing-gallery/gallery-5.webp', alt: 'Highway vehicle recovery unit' },
    { src: '/towing-company/images/towing-gallery/gallery-6.webp', alt: 'Flatbed truck in transit' },
  ];

  const testimonials = [
    {
      text: 'Stranded on the highway with a blown tire and no spare. Dispatch was calm, professional, and had a truck to me within thirty minutes.',
      author: 'David R.',
      role: 'Fleet Manager',
    },
    {
      text: 'Honest rates, clean equipment, and careful handling of our classic car on the flatbed. Best towing experience I have had.',
      author: 'Sarah K.',
      role: 'Private Owner',
    },
    {
      text: 'When our delivery van broke down before a major route, Alvoratech had it safely transported to our repair facility without delay.',
      author: 'Marcus L.',
      role: 'Logistics Director',
    },
  ];

  const faqs = [
    {
      q: 'What towing services does Alvoratech offer?',
      a: 'Alvoratech provides light-duty towing, flatbed transport, heavy-duty recovery, roadside assistance, lockout entry, jump-starts, and long-distance transport.',
    },
    {
      q: 'Do you provide emergency towing?',
      a: 'Yes. Emergency dispatch is available around the clock to support stranded motorists, commercial fleets, and recovery situations.',
    },
    {
      q: 'Do you offer flatbed towing for luxury or all-wheel-drive vehicles?',
      a: 'Yes. Flatbed towing keeps all wheels entirely off the pavement, ensuring zero transmission or drivetrain strain for AWD and lowered cars.',
    },
    {
      q: 'Can I request roadside assistance directly via WhatsApp?',
      a: 'Yes. You can tap the WhatsApp buttons on this page to share your GPS location, vehicle details, and photographs directly with our dispatch team.',
    },
    {
      q: 'What information should I provide when calling for assistance?',
      a: 'Please share your current location, vehicle make and model, nature of the issue (mechanical failure, collision, flat tire), and your destination.',
    },
    {
      q: 'Do you handle long-distance vehicle relocations?',
      a: 'Yes. Scheduled long-distance relocations are available across state lines with flat-rate quotes and insured transport.',
    },
    {
      q: 'How can I get an immediate quote?',
      a: 'Send a quick message via WhatsApp or submit the contact form below with your pickup and drop-off coordinates.',
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, whatsapp, vehicleType, serviceRequired, location, description } = formData;
    if (!fullName || !whatsapp || !vehicleType || !serviceRequired || !location) {
      setFormStatus({ message: 'Please complete all required fields.', type: 'is-error' });
      return;
    }

    const message = [
      'Hello Alvoratech Dispatch,',
      '',
      `Full Name: ${fullName}`,
      `WhatsApp Phone: ${whatsapp}`,
      `Vehicle: ${vehicleType}`,
      `Service: ${serviceRequired}`,
      `Location: ${location}`,
      description ? `Notes: ${description}` : '',
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormStatus({ message: 'Dispatch request prepared in WhatsApp.', type: 'is-success' });
  };

  return (
    <div className="towing-company-demo min-h-screen">
      {/* Pinned Alvoratech Demo Banner */}
      <DemoTopBar demoName="Alvoratech Towing & Roadside Assistance" />

      {/* Demo Sub-Banner */}
      <div className="demo-banner" aria-label="Website demo banner">
        <div className="container demo-banner__inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#FF9718',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.76rem',
                letterSpacing: '0.04em',
              }}
            >
              &larr; BACK TO ALVORATECH
            </a>
            <p>WEBSITE DEMO - Sample emergency towing website template created by Alvoratech.</p>
          </div>
          <a
            href="https://wa.me/message/RVTZQMFL7I6OH1"
            className="demo-banner__button"
            target="_blank"
            rel="noreferrer"
          >
            CONTACT DISPATCH ON WHATSAPP
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-shell">
          <a href="#home" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="brand" aria-label="Alvoratech home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img" aria-label="Towing service icon">
                <path d="M12 43h4.7l3.4-11.6h16.9L39 43h13v4.8H12V43Zm8.7-2.4h6.6v-5.3h-6.6v5.3Zm19.8-12.3h5.8l3.8 7.6h-9.6v-7.6Zm-23.6 0h9.4v7.6H17.9v-7.6Zm9.4-9.8c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2v5.1H27.3v-5.1Z" />
                <circle cx="21.2" cy="47.6" r="4.8" />
                <circle cx="46.5" cy="47.6" r="4.8" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>ALVORA</strong><span>TECH</span>
            </span>
          </a>

          <button
            className="nav-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="site-nav" id="primary-navigation" aria-label="Main navigation">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Towing Menu</span>
              <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
                &times;
              </button>
            </div>
            <a href="#home" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }} className="nav-link active">Home</a>
            <a href="#about" onClick={(e) => { setMobileMenuOpen(false); navigateTo('about', e); }} className="nav-link">About Us</a>
            <a href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }} className="nav-link">Services</a>
            <a href="#why-us" onClick={(e) => { setMobileMenuOpen(false); navigateTo('why-us', e); }} className="nav-link">Why Us</a>
            <a href="#gallery" onClick={(e) => { setMobileMenuOpen(false); navigateTo('gallery', e); }} className="nav-link">Gallery</a>
            <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }} className="nav-link">Contact</a>
            <a
              href="https://wa.me/message/RVTZQMFL7I6OH1"
              className="nav-cta"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              DISPATCH NOW
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="home">

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
              {(currentView === 'why-us' || currentView === 'difference' || currentView === 'technology') && 'Why Property Owners Choose Us'}
              {(currentView === 'projects' || currentView === 'gallery' || currentView === 'results') && 'Featured Portfolio & Projects'}
              {(currentView === 'reviews' || currentView === 'testimonials') && 'Client Testimonials & Ratings'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {(currentView === 'contact' || currentView === 'appointment' || currentView === 'consultation') && 'Contact & Book Consultation'}
            </h1>
            </div>
        </section>
      )}

      {/* HOMEPAGE VIEW: High-converting, clean customer essentials */}
      {currentView === 'home' && (
        <>
        <section className="hero">
          <div className="hero-backdrop" aria-hidden="true"></div>
          <div className="container hero-inner">
            <div className="hero-content reveal is-visible">
              
              <h1>FAST, RELIABLE &amp; PROFESSIONAL TOWING SERVICES</h1>
              <p>
                Stranded on the road? Alvoratech provides dependable towing and roadside assistance
                to help get you and your vehicle moving again.
              </p>
              <div className="hero-actions">
                <a
                  href="https://wa.me/message/RVTZQMFL7I6OH1"
                  className="button button-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  REQUEST TOWING ON WHATSAPP
                </a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="button button-secondary">
                  EXPLORE OUR SERVICES
                </a>
              </div>
              <ul className="trust-points" aria-label="Service highlights">
                <li>Professional Towing Services</li>
                <li>Reliable Vehicle Transportation</li>
                <li>Roadside Assistance</li>
              </ul>
            </div>
            <div className="hero-visual reveal is-visible" aria-label="Tow truck on highway">
              <div className="hero-card">
                <img
                  src="/towing-company/images/hero-tow-truck.webp"
                  alt="Professional tow truck on the highway"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <h2>COMPLETE TOWING &amp; ROADSIDE ASSISTANCE SOLUTIONS</h2>
              <p>Professional vehicle transportation and roadside assistance tailored for any situation.</p>
            </div>

            <div className="service-grid">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <article className="service-card reveal is-visible" key={idx}>
                    <img src={svc.image} alt={svc.alt} loading="lazy" decoding="async" />
                    <div className="service-card__content">
                      <div className="service-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon className="w-5 h-5 text-[#ff6b22]" />
                      </div>
                      <h3>{svc.title}</h3>
                      <p>{svc.desc}</p>
                      <a
                        href="https://wa.me/message/RVTZQMFL7I6OH1"
                        className="service-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        REQUEST THIS SERVICE &rarr;
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mid-Page Promo Banner */}
        <section className="testimonials section" id="testimonials">
          <div className="container">
            <div className="section-heading section-heading--light reveal is-visible">
              <h2 style={{ color: '#ffffff' }}>WHAT DRIVERS SAY ABOUT US</h2>
            </div>

            <div className="testimonial-slider reveal is-visible">
              <button
                className="slider-btn slider-btn--prev"
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                &lsaquo;
              </button>
              <div className="testimonial-track">
                {testimonials.map((t, idx) => (
                  <article
                    className={`testimonial-card ${idx === testimonialIndex ? 'is-active' : ''}`}
                    key={idx}
                    style={{ display: idx === testimonialIndex ? 'block' : 'none' }}
                  >
                    <div className="stars" aria-label="5 star rating">Rating: 5.0 / 5.0</div>
                    <p>&ldquo;{t.text}&rdquo;</p>
                    <div className="testimonial-author">
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="slider-btn slider-btn--next"
                type="button"
                aria-label="Next testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-details reveal is-visible">
              <h2>GET IN TOUCH WITH ALVORATECH</h2>
              <ul className="contact-list">
                <li>
                  <span>WhatsApp:</span>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noreferrer">
                    +1 (412) 796-3968
                  </a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto:info@Alvoratechhq.com">info@Alvoratechhq.com</a>
                </li>
                <li>
                  <span>Service Area:</span>
                  <span>United States Metropolitan &amp; Interstate Regions</span>
                </li>
              </ul>
            </div>

            <div className="contact-form-wrap reveal is-visible">
              <form id="contactForm" onSubmit={handleFormSubmit} noValidate>
                <div className="form-row">
                  <label>
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label>
                    <span>WhatsApp Number *</span>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+1 (___) ___-____"
                      required
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Vehicle Type *</span>
                    <input
                      type="text"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      placeholder="Sedan, SUV, Truck, Motorcycle"
                      required
                    />
                  </label>
                  <label>
                    <span>Service Required *</span>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Emergency Towing">Emergency Towing</option>
                      <option value="Flatbed Towing">Flatbed Towing</option>
                      <option value="Heavy-Duty Towing">Heavy-Duty Towing</option>
                      <option value="Accident Recovery">Accident Recovery</option>
                      <option value="Motorcycle Towing">Motorcycle Towing</option>
                      <option value="Long-Distance Towing">Long-Distance Towing</option>
                      <option value="Roadside Assistance">Roadside Assistance</option>
                      <option value="Jump-Start Services">Jump-Start Services</option>
                      <option value="Tire Change Assistance">Tire Change Assistance</option>
                      <option value="Vehicle Lockout Assistance">Vehicle Lockout Assistance</option>
                    </select>
                  </label>
                </div>

                <div className="form-row form-row--single">
                  <label>
                    <span>Current Location / Coordinates *</span>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Current city, highway mile marker, or intersection"
                      required
                    />
                  </label>
                </div>

                <div className="form-row form-row--single">
                  <label>
                    <span>Description of Assistance Needed</span>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us what happened and where you need the vehicle transported..."
                    ></textarea>
                  </label>
                </div>

                <button type="submit" className="button button-primary button-block">
                  SEND SERVICE REQUEST ON WHATSAPP
                </button>
                {formStatus.message && (
                  <p className={`form-status mt-3 text-sm font-semibold ${formStatus.type === 'is-error' ? 'text-red-500' : 'text-emerald-500'}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
        </>
      )}

      {/* SERVICES VIEW */}
      {currentView === 'services' && (
        <>
        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <h2>COMPLETE TOWING &amp; ROADSIDE ASSISTANCE SOLUTIONS</h2>
              <p>Professional vehicle transportation and roadside assistance tailored for any situation.</p>
            </div>

            <div className="service-grid">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <article className="service-card reveal is-visible" key={idx}>
                    <img src={svc.image} alt={svc.alt} loading="lazy" decoding="async" />
                    <div className="service-card__content">
                      <div className="service-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon className="w-5 h-5 text-[#ff6b22]" />
                      </div>
                      <h3>{svc.title}</h3>
                      <p>{svc.desc}</p>
                      <a
                        href="https://wa.me/message/RVTZQMFL7I6OH1"
                        className="service-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        REQUEST THIS SERVICE &rarr;
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mid-Page Promo Banner */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <button onClick={(e) => navigateTo('contact', e)} className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', cursor: 'pointer' }}>
              Schedule Service Consultation &rarr;
            </button>
          </div>
        </>
      )}

      {/* ABOUT / STORY VIEW */}
      {currentView === 'about' && (
        <>
        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-media reveal is-visible">
              <div className="about-image-wrap">
                <img
                  src="/towing-company/images/heavy-duty-towing.webp"
                  alt="Ford F-350 tow truck"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="about-content reveal is-visible">
              <h2>DEPENDABLE TOWING SOLUTIONS WHEN YOU NEED THEM</h2>
              <p>
                Alvoratech is dedicated to providing professional towing, vehicle transportation, and
                roadside assistance solutions. Our goal is to make vehicle recovery and transportation
                easier through dependable service and clear communication.
              </p>
              <ul className="check-list">
                <li>Professional Service Approach</li>
                <li>Customer-Focused Assistance</li>
                <li>Reliable Vehicle Transportation</li>
              </ul>
              <a
                href="https://wa.me/message/RVTZQMFL7I6OH1"
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                CONTACT ON WHATSAPP
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us section" id="why-us">
          <div className="container">
            <div className="section-heading reveal is-visible section-heading--light">
              <h2>WHY CHOOSE ALVORATECH?</h2>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiCheckCircle /></div>
                <h3>Professional Service</h3>
                <p>A structured, safety-first approach to every recovery.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiPhoneCall /></div>
                <h3>Customer-Focused</h3>
                <p>Direct communication and prompt arrival time estimates.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiTruck /></div>
                <h3>Multiple Towing Solutions</h3>
                <p>Services for light cars, heavy trucks, and motorcycles.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FaWhatsapp /></div>
                <h3>Convenient Communication</h3>
                <p>Fast dispatch updates and location sharing via WhatsApp.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiShield /></div>
                <h3>Reliable Assistance</h3>
                <p>Licensed, insured, and verified equipment on every job.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiClock /></div>
                <h3>Fast Turnaround</h3>
                <p>Immediate coordination to reduce roadside waiting time.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <button onClick={(e) => navigateTo('contact', e)} className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', cursor: 'pointer' }}>
              Connect With Our Specialists &rarr;
            </button>
          </div>
        </>
      )}

      {/* WHY US VIEW */}
      {(currentView === 'why-us' || currentView === 'difference' || currentView === 'technology') && (
        <>
        <section className="why-us section" id="why-us">
          <div className="container">
            <div className="section-heading reveal is-visible section-heading--light">
              <h2>WHY CHOOSE ALVORATECH?</h2>
            </div>

            <div className="benefits-grid">
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiCheckCircle /></div>
                <h3>Professional Service</h3>
                <p>A structured, safety-first approach to every recovery.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiPhoneCall /></div>
                <h3>Customer-Focused</h3>
                <p>Direct communication and prompt arrival time estimates.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiTruck /></div>
                <h3>Multiple Towing Solutions</h3>
                <p>Services for light cars, heavy trucks, and motorcycles.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FaWhatsapp /></div>
                <h3>Convenient Communication</h3>
                <p>Fast dispatch updates and location sharing via WhatsApp.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiShield /></div>
                <h3>Reliable Assistance</h3>
                <p>Licensed, insured, and verified equipment on every job.</p>
              </article>
              <article className="benefit-card reveal is-visible">
                <div className="benefit-icon"><FiClock /></div>
                <h3>Fast Turnaround</h3>
                <p>Immediate coordination to reduce roadside waiting time.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <button onClick={(e) => navigateTo('contact', e)} className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', cursor: 'pointer' }}>
              Work With Our Team &rarr;
            </button>
          </div>
        </>
      )}

      {/* PROJECTS / PORTFOLIO VIEW */}
      {(currentView === 'projects' || currentView === 'gallery' || currentView === 'results') && (
        <>
        <section className="gallery section" id="gallery">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <h2>OUR TOWING &amp; RECOVERY GALLERY</h2>
            </div>

            <div className="gallery-grid">
              {galleryImages.map((img, idx) => (
                <button
                  className="gallery-item reveal is-visible"
                  type="button"
                  key={idx}
                  onClick={() => {
                    setLightboxImage(img.src);
                    setLightboxOpen(true);
                  }}
                  aria-label={img.alt}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                  <span className="gallery-overlay">View</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <button onClick={(e) => navigateTo('contact', e)} className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', cursor: 'pointer' }}>
              Request Project Estimate &rarr;
            </button>
          </div>
        </>
      )}

      {/* REVIEWS / TESTIMONIALS VIEW */}
      {(currentView === 'reviews' || currentView === 'testimonials') && (
        <>
        <section className="testimonials section" id="testimonials">
          <div className="container">
            <div className="section-heading section-heading--light reveal is-visible">
              <h2 style={{ color: '#ffffff' }}>WHAT DRIVERS SAY ABOUT US</h2>
            </div>

            <div className="testimonial-slider reveal is-visible">
              <button
                className="slider-btn slider-btn--prev"
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                &lsaquo;
              </button>
              <div className="testimonial-track">
                {testimonials.map((t, idx) => (
                  <article
                    className={`testimonial-card ${idx === testimonialIndex ? 'is-active' : ''}`}
                    key={idx}
                    style={{ display: idx === testimonialIndex ? 'block' : 'none' }}
                  >
                    <div className="stars" aria-label="5 star rating">Rating: 5.0 / 5.0</div>
                    <p>&ldquo;{t.text}&rdquo;</p>
                    <div className="testimonial-author">
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="slider-btn slider-btn--next"
                type="button"
                aria-label="Next testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <button onClick={(e) => navigateTo('contact', e)} className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', cursor: 'pointer' }}>
              Experience Our Certified Quality &rarr;
            </button>
          </div>
        </>
      )}

      {/* FAQ VIEW */}
      {currentView === 'faq' && (
        <>
        <section className="faq section" id="faq">
          <div className="container faq-shell reveal is-visible">
            <div className="section-heading section-heading--left">
              <h2>FREQUENTLY ASKED QUESTIONS</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={activeFaq === idx}
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  >
                    {faq.q}
                  </button>
                  {activeFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: '#f8fafc' }}>
            <a href="tel:+14127963968" className="button button-gold" style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', textDecoration: 'none' }}>
              Direct Line: +1 (412) 796-3968
            </a>
          </div>
        </>
      )}

      {/* CONTACT / APPOINTMENT / CONSULTATION VIEW */}
      {(currentView === 'contact' || currentView === 'appointment' || currentView === 'consultation') && (
        <>
        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-details reveal is-visible">
              <h2>GET IN TOUCH WITH ALVORATECH</h2>
              <ul className="contact-list">
                <li>
                  <span>WhatsApp:</span>
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noreferrer">
                    +1 (412) 796-3968
                  </a>
                </li>
                <li>
                  <span>Email:</span>
                  <a href="mailto:info@Alvoratechhq.com">info@Alvoratechhq.com</a>
                </li>
                <li>
                  <span>Service Area:</span>
                  <span>United States Metropolitan &amp; Interstate Regions</span>
                </li>
              </ul>
            </div>

            <div className="contact-form-wrap reveal is-visible">
              <form id="contactForm" onSubmit={handleFormSubmit} noValidate>
                <div className="form-row">
                  <label>
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label>
                    <span>WhatsApp Number *</span>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+1 (___) ___-____"
                      required
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>Vehicle Type *</span>
                    <input
                      type="text"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      placeholder="Sedan, SUV, Truck, Motorcycle"
                      required
                    />
                  </label>
                  <label>
                    <span>Service Required *</span>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Emergency Towing">Emergency Towing</option>
                      <option value="Flatbed Towing">Flatbed Towing</option>
                      <option value="Heavy-Duty Towing">Heavy-Duty Towing</option>
                      <option value="Accident Recovery">Accident Recovery</option>
                      <option value="Motorcycle Towing">Motorcycle Towing</option>
                      <option value="Long-Distance Towing">Long-Distance Towing</option>
                      <option value="Roadside Assistance">Roadside Assistance</option>
                      <option value="Jump-Start Services">Jump-Start Services</option>
                      <option value="Tire Change Assistance">Tire Change Assistance</option>
                      <option value="Vehicle Lockout Assistance">Vehicle Lockout Assistance</option>
                    </select>
                  </label>
                </div>

                <div className="form-row form-row--single">
                  <label>
                    <span>Current Location / Coordinates *</span>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Current city, highway mile marker, or intersection"
                      required
                    />
                  </label>
                </div>

                <div className="form-row form-row--single">
                  <label>
                    <span>Description of Assistance Needed</span>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us what happened and where you need the vehicle transported..."
                    ></textarea>
                  </label>
                </div>

                <button type="submit" className="button button-primary button-block">
                  SEND SERVICE REQUEST ON WHATSAPP
                </button>
                {formStatus.message && (
                  <p className={`form-status mt-3 text-sm font-semibold ${formStatus.type === 'is-error' ? 'text-red-500' : 'text-emerald-500'}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
        </>
      )}

      </main>

            <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" onClick={(e) => navigateTo('home', e)} className="brand brand--footer" aria-label="Alvoratech home">
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 64 64" role="img" aria-label="Alvoratech slogan icon">
                  <path d="M12 43h4.7l3.4-11.6h16.9L39 43h13v4.8H12V43Zm8.7-2.4h6.6v-5.3h-6.6v5.3Zm19.8-12.3h5.8l3.8 7.6h-9.6v-7.6Zm-23.6 0h9.4v7.6H17.9v-7.6Zm9.4-9.8c0-3.4 2.8-6.2 6.2-6.2s6.2 2.8 6.2 6.2v5.1H27.3v-5.1Z" />
                  <circle cx="21.2" cy="47.6" r="4.8" />
                  <circle cx="46.5" cy="47.6" r="4.8" />
                </svg>
              </span>
              <span className="brand-text">
                <strong>ALVORA</strong><span>TECH</span>
              </span>
            </a>
            <p className="footer-copy">
              Dependable towing, vehicle transportation, and roadside assistance solutions built to help
              drivers get back on the road with confidence.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => navigateTo('home', e)}>Home</a></li>
              <li><a href="#about" onClick={(e) => navigateTo('about', e)}>About Us</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Our Services</a></li>
              <li><a href="#gallery" onClick={(e) => navigateTo('gallery', e)}>Gallery</a></li>
              <li><a href="#contact" onClick={(e) => navigateTo('contact', e)}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Emergency Towing</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Flatbed Towing</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Roadside Assistance</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Heavy-Duty Towing</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Vehicle Recovery</a></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-links footer-links--contact">
              <li>
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noreferrer">
                  WhatsApp: +1 (412) 796-3968
                </a>
              </li>
              <li><a href="mailto:info@Alvoratechhq.com">Email: info@Alvoratechhq.com</a></li>
              <li><span>Service: 24/7 Dispatch Available</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom__inner">
            <p>&copy; {new Date().getFullYear()} Alvoratech. All Rights Reserved.</p>
            
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <div className="floating-whatsapp" aria-label="WhatsApp contact banner">
        <div className="container floating-whatsapp__inner">
          <span className="floating-whatsapp__text">DISPATCH ASSISTANCE AVAILABLE</span>
          <a href="tel:+14127963968" className="floating-whatsapp__phone">+1 (412) 796-3968</a>
          <a
            href="https://wa.me/message/RVTZQMFL7I6OH1"
            className="floating-whatsapp__button"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WHATSAPP DISPATCH</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox is-open"
          id="lightbox"
          aria-hidden="false"
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close gallery image"
          >
            &times;
          </button>
          <img src={lightboxImage} alt="Expanded gallery view" id="lightboxImage" />
        </div>
      )}
    </div>
  );
}
