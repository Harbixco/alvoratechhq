import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import {
  FiCheck,
  FiPhoneCall,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUp,
  FiX
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './tree-removal.css';

export default function TreeRemoval() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (["services","about","projects","testimonials","faq","contact"].includes(hash)) return hash;
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
      if (["services","about","projects","testimonials","faq","contact"].includes(hash)) {
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

  const [navOpen, setNavOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeFaq, setActiveFaq] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Tree Removal',
      desc: 'Professional tree removal solutions for unwanted, damaged, dead, or hazardous trees.',
      image: '/tree-removal/images/tree-removal-crew.webp',
      alt: 'Tree removal crew cutting down a tree in a residential area',
    },
    {
      title: 'Tree Trimming & Pruning',
      desc: 'Tree maintenance solutions that help improve appearance, manage growth, and maintain healthy outdoor spaces.',
      image: '/tree-removal/images/tree-trimming.webp',
      alt: 'Arborist trimming a tree branch with a saw',
    },
    {
      title: 'Stump Grinding & Removal',
      desc: 'Solutions for removing unwanted tree stumps and reclaiming usable outdoor yard and turf space.',
      image: '/tree-removal/images/stump-grinding.webp',
      alt: 'Stump grinder working on a tree stump',
    },
    {
      title: 'Emergency Tree Services',
      desc: 'Immediate assistance with storm damage, fallen limbs, and dangerous structural property threats.',
      image: '/tree-removal/images/residential-tree-removal.webp',
      alt: 'Tree removal crew working on a large residential tree',
    },
    {
      title: 'Land & Lot Clearing',
      desc: 'Tree and dense vegetation clearing solutions for residential developments and commercial expansions.',
      image: '/tree-removal/images/tree-removal-crew.webp',
      alt: 'Tree crew cutting down a tree as part of property clearing',
    },
    {
      title: 'Tree Maintenance',
      desc: 'Routine crown thinning, deadwooding, and health assessments to keep your grounds safe and vibrant.',
      image: '/tree-removal/images/tree-trimming.webp',
      alt: 'Arborist performing routine tree trimming',
    },
  ];

  const projects = [
    {
      title: 'Controlled Tree Removal',
      category: 'removal',
      label: 'Tree Removal',
      image: '/tree-removal/images/tree-removal-crew.webp',
      alt: 'Tree crew cutting down a tree in a residential neighborhood',
    },
    {
      title: 'Canopy Pruning & Shaping',
      category: 'trimming',
      label: 'Tree Trimming',
      image: '/tree-removal/images/tree-trimming.webp',
      alt: 'Arborist sawing a branch during tree trimming',
    },
    {
      title: 'Deep Stump Extraction',
      category: 'stump',
      label: 'Stump Grinding',
      image: '/tree-removal/images/stump-grinding.webp',
      alt: 'Stump grinder operating beside a tree stump',
    },
    {
      title: 'Estate Perimeter Clearing',
      category: 'clearing',
      label: 'Land Clearing',
      image: '/tree-removal/images/residential-tree-removal.webp',
      alt: 'Workers removing a large tree from a residential property',
    },
    {
      title: 'Sectional Crane Take-Down',
      category: 'removal',
      label: 'Tree Removal',
      image: '/tree-removal/images/arborist-tree-cutting.webp',
      alt: 'Arborist felling a large tree in sections with a chainsaw',
    },
    {
      title: 'Lateral Branch Clearance',
      category: 'trimming',
      label: 'Tree Trimming',
      image: '/tree-removal/images/tree-removal-crew.webp',
      alt: 'Tree care crew working on a mature tree',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const testimonials = [
    {
      quote: 'The team was responsive, professional, and made a stressful tree removal situation feel straightforward. Communication was clear from start to finish.',
      person: 'David M.',
      role: 'Residential Property Owner',
    },
    {
      quote: 'Their service was organized and thoughtful. The crew handled our pruning needs carefully and kept the property neat throughout the project.',
      person: 'Sarah H.',
      role: 'Homeowner',
    },
    {
      quote: 'We appreciated how easy it was to ask questions and get a clear estimate. The process felt professional and customer-focused.',
      person: 'Robert T.',
      role: 'Commercial Property Manager',
    },
  ];

  const faqs = [
    {
      q: 'What types of tree removal services do you offer?',
      a: 'Alvoratech provides tree removal services for unwanted, damaged, dead, and hazardous trees, with support tailored to each property and project.',
    },
    {
      q: 'Do you provide tree trimming and pruning?',
      a: 'Yes. Tree trimming and pruning are available to improve appearance, manage growth, and support healthier outdoor spaces.',
    },
    {
      q: 'Can you help remove unwanted tree stumps?',
      a: 'Yes. Stump grinding and removal services can help reclaim usable outdoor space and improve the overall look of a property.',
    },
    {
      q: 'Do you offer emergency tree services?',
      a: 'Emergency response support can be arranged for tree-related issues caused by severe storms or unexpected property hazards.',
    },
    {
      q: 'How can I request a free estimate?',
      a: 'Contact Alvoratech directly through WhatsApp or use the contact form to share your property details and service needs.',
    },
    {
      q: 'Do you provide residential and commercial tree services?',
      a: 'Yes. Services can be planned for both residential homes and commercial commercial complexes depending on project scope.',
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    if (!name || !phone || !service) return;

    const text = [
      'Hello Alvoratech Tree Care,',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Service: ${service}`,
      message ? `Project Details: ${message}` : '',
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="tree-removal-demo min-h-screen">
      {/* Alvoratech Demo Banner */}
      <DemoTopBar demoName="Alvoratech Professional Tree Removal & Care" />

      {/* Demo Sub-Banner */}
      <div className="demo-banner banner-top" aria-label="Website demo banner">
        <div className="container banner-inner">
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
                fontSize: '0.8rem',
                letterSpacing: '0.04em',
              }}
            >
              &larr; BACK TO ALVORATECH
            </a>
            <p>WEBSITE DEMO - Sample arborist and tree care website template created by Alvoratech.</p>
          </div>
          <div className="banner-action">
            <span>Inquire for Your Business</span>
            <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="site-header">
        <nav className="navbar container" aria-label="Primary navigation">
          <a href="#home" onClick={(e) => navigateTo('home', e)} className="logo" aria-label="Alvoratech home">
            <span className="logo-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree icon">
                <circle cx="32" cy="14" r="6" fill="currentColor" />
                <path d="M32 20 L22 39 H28 V52 H36 V39 H42 Z" fill="currentColor" />
                <path d="M20 32 C20 23, 28 18, 32 18 C36 18, 44 23, 44 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="logo-text">Alvoratech</span>
          </a>

          <button
            className={`nav-toggle ${navOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-menu-wrap ${navOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              <li><a href="#home" onClick={(e) => { setNavOpen(false); navigateTo('home', e); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { setNavOpen(false); navigateTo('about', e); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { setNavOpen(false); navigateTo('services', e); }}>Services</a></li>
              <li><a href="#projects" onClick={(e) => { setNavOpen(false); navigateTo('projects', e); }}>Projects</a></li>
              <li><a href="#testimonials" onClick={(e) => { setNavOpen(false); navigateTo('testimonials', e); }}>Reviews</a></li>
              <li><a href="#contact" onClick={(e) => { setNavOpen(false); navigateTo('contact', e); }}>Contact</a></li>
              <li>
                <a
                  className="btn btn-primary nav-cta"
                  href="https://wa.me/message/RVTZQMFL7I6OH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setNavOpen(false)}
                >
                  Get a Free Estimate
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">

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
              {currentView === 'about' && 'About Alvoratech'}
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
        <section id="home" className="hero">
          <div className="hero-media" aria-hidden="true"></div>
          <div className="hero-overlay"></div>

          <div className="container hero-inner">
            <div className="hero-copy reveal is-visible">
              <p className="eyebrow">Reliable Tree Solutions</p>
              <h1>Professional Tree Removal &amp; Tree Care Services You Can Trust</h1>
              <p className="lead">
                From difficult tree removals to routine maintenance, Alvoratech helps property owners maintain safer,
                cleaner, and more beautiful outdoor spaces.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/message/RVTZQMFL7I6OH1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get a Free Estimate
                </a>
                <a
                  className="btn btn-secondary"
                  href="#services"
                  onClick={(e) => scrollToSection(e, 'services')}
                >
                  Explore Our Services
                </a>
              </div>
              <p className="trust-indicator">Professional Service | Reliable Communication | Customer-Focused Solutions</p>
            </div>
          </div>
        </section>

        {/* About Section */}

        <section id="services" className="services section">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Our Tree Services</p>
              <h2>Complete Tree Care for Residential and Commercial Properties</h2>
            </div>
            <div className="service-grid">
              {services.map((svc, idx) => (
                <article className="service-card reveal is-visible" key={idx}>
                  <img src={svc.image} alt={svc.alt} loading="lazy" decoding="async" />
                  <div className="card-content">
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    <a
                      href="https://wa.me/message/RVTZQMFL7I6OH1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request a Quote &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="testimonials" className="testimonials section">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Customer Testimonials</p>
              <h2>Client feedback from property owners</h2>
            </div>
            <div className="testimonial-carousel reveal is-visible" aria-live="polite">
              <button
                className="carousel-btn prev"
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <FiChevronLeft />
              </button>
              <div className="testimonial-track">
                {testimonials.map((t, idx) => (
                  <article
                    className={`testimonial-item ${idx === testimonialIndex ? 'active' : ''}`}
                    key={idx}
                    style={{ display: idx === testimonialIndex ? 'block' : 'none' }}
                  >
                    <div className="stars" aria-label="Five star review">Rating: 5.0 / 5.0</div>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                    <div className="person">
                      <strong>{t.person}</strong>
                      <span>{t.role}</span>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="carousel-btn next"
                type="button"
                aria-label="Next testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <div className="promo-banner middle-banner">
          <div className="container promo-inner reveal is-visible">
            <div>
              <h2>Your Tree Service Business Deserves a Professional Online Presence.</h2>
              <p>
                Want a modern website like this for your business? Alvoratech creates professional websites that help you
                showcase your services and connect with customers.
              </p>
            </div>
            <div className="banner-buttons">
              <a
                className="btn btn-primary"
                href="https://wa.me/message/RVTZQMFL7I6OH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="contact" className="contact section">
          <div className="container contact-grid">
            <div className="contact-copy reveal is-visible">
              <p className="section-tag">Contact Us</p>
              <h2>Let's Talk About Your Tree Service Needs.</h2>
              <ul className="contact-list">
                <li>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer">
                    +1 (412) 796-3968
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@Alvoratechhq.com">info@Alvoratechhq.com</a>
                </li>
                <li><strong>Service:</strong> Residential &amp; Commercial Service</li>
              </ul>
              <a
                className="btn btn-primary whatsapp-button mt-4"
                href="https://wa.me/message/RVTZQMFL7I6OH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-form-wrap reveal is-visible">
              <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
                <div className="form-grid">
                  <label>
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </label>
                  <label>
                    <span>Service Required *</span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Tree Removal">Tree Removal</option>
                      <option value="Tree Trimming & Pruning">Tree Trimming &amp; Pruning</option>
                      <option value="Stump Grinding & Removal">Stump Grinding &amp; Removal</option>
                      <option value="Emergency Tree Services">Emergency Tree Services</option>
                      <option value="Land & Lot Clearing">Land &amp; Lot Clearing</option>
                      <option value="Tree Maintenance">Tree Maintenance</option>
                    </select>
                  </label>
                </div>
                <label>
                  <span>Project Description</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the tree location, hazards, or property access..."
                  ></textarea>
                </label>
                <button className="btn btn-primary submit-btn" type="submit">
                  Send Your Request on WhatsApp
                </button>
                {formSubmitted && (
                  <p className="form-message mt-3 text-sm font-semibold text-emerald-600">
                    Your request was opened in WhatsApp.
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
        <section id="services" className="services section">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Our Tree Services</p>
              <h2>Complete Tree Care for Residential and Commercial Properties</h2>
            </div>
            <div className="service-grid">
              {services.map((svc, idx) => (
                <article className="service-card reveal is-visible" key={idx}>
                  <img src={svc.image} alt={svc.alt} loading="lazy" decoding="async" />
                  <div className="card-content">
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    <a
                      href="https://wa.me/message/RVTZQMFL7I6OH1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Request a Quote &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
        <section id="about" className="about section">
          <div className="container about-grid">
            <div className="about-image reveal is-visible">
              <img
                src="/tree-removal/images/arborist-tree-cutting.webp"
                alt="Arborist using a chainsaw to remove a tree in sections"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-content reveal is-visible">
              <p className="section-tag">About Alvoratech</p>
              <h2>We Build Professional Websites That Help You Attract More Clients.</h2>
              <p>
                Alvoratech creates polished, professional websites that help businesses showcase their services, build
                trust with potential customers, and attract more clients. We make it easier for your business to stand
                out online and connect with the people who need what you offer.
              </p>
              <div className="highlight-list">
                <article>
                  <div className="icon-box" aria-hidden="true"><FiCheck /></div>
                  <div>
                    <h3>Customer-Focused Service</h3>
                  </div>
                </article>
                <article>
                  <div className="icon-box" aria-hidden="true"><FiCheck /></div>
                  <div>
                    <h3>Professional Approach</h3>
                  </div>
                </article>
                <article>
                  <div className="icon-box" aria-hidden="true"><FiCheck /></div>
                  <div>
                    <h3>Reliable Communication</h3>
                  </div>
                </article>
              </div>
              <a className="btn btn-primary" href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="reasons section alt-bg">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Why Choose Alvoratech?</p>
              <h2>Reliable service, thoughtful communication, and dependable results.</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Experienced Team</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Safety First Approach</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Proper Equipment</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Customer Satisfaction</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiPhoneCall /></div>
                <h3>Reliable Communication</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Comprehensive Services</h3>
              </article>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
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
        <section className="reasons section alt-bg">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Why Choose Alvoratech?</p>
              <h2>Reliable service, thoughtful communication, and dependable results.</h2>
            </div>
            <div className="feature-grid">
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Experienced Team</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Safety First Approach</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Proper Equipment</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Customer Satisfaction</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiPhoneCall /></div>
                <h3>Reliable Communication</h3>
              </article>
              <article className="feature-card reveal is-visible">
                <div className="feature-icon" aria-hidden="true"><FiCheck /></div>
                <h3>Comprehensive Services</h3>
              </article>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
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
        <section id="projects" className="projects section">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Our Work</p>
              <h2>Tree Service Work in Action</h2>
              <p className="gallery-note">Illustrative photographs showcasing tree service operations.</p>
            </div>

            <div className="gallery-filters reveal is-visible" aria-label="Project filters">
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </button>
              <button
                className={`filter-btn ${activeFilter === 'removal' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter('removal')}
              >
                Tree Removal
              </button>
              <button
                className={`filter-btn ${activeFilter === 'trimming' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter('trimming')}
              >
                Tree Trimming
              </button>
              <button
                className={`filter-btn ${activeFilter === 'stump' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter('stump')}
              >
                Stump Grinding
              </button>
              <button
                className={`filter-btn ${activeFilter === 'clearing' ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter('clearing')}
              >
                Land Clearing
              </button>
            </div>

            <div className="gallery-grid reveal is-visible">
              {filteredProjects.map((p, idx) => (
                <figure
                  className="gallery-item cursor-pointer"
                  key={idx}
                  onClick={() => {
                    setLightboxImage(p.image);
                    setLightboxOpen(true);
                  }}
                >
                  <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
                  <figcaption>{p.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
        <section id="testimonials" className="testimonials section">
          <div className="container">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Customer Testimonials</p>
              <h2>Client feedback from property owners</h2>
            </div>
            <div className="testimonial-carousel reveal is-visible" aria-live="polite">
              <button
                className="carousel-btn prev"
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <FiChevronLeft />
              </button>
              <div className="testimonial-track">
                {testimonials.map((t, idx) => (
                  <article
                    className={`testimonial-item ${idx === testimonialIndex ? 'active' : ''}`}
                    key={idx}
                    style={{ display: idx === testimonialIndex ? 'block' : 'none' }}
                  >
                    <div className="stars" aria-label="Five star review">Rating: 5.0 / 5.0</div>
                    <p>&ldquo;{t.quote}&rdquo;</p>
                    <div className="person">
                      <strong>{t.person}</strong>
                      <span>{t.role}</span>
                    </div>
                  </article>
                ))}
              </div>
              <button
                className="carousel-btn next"
                type="button"
                aria-label="Next testimonial"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <div className="promo-banner middle-banner">
          <div className="container promo-inner reveal is-visible">
            <div>
              <h2>Your Tree Service Business Deserves a Professional Online Presence.</h2>
              <p>
                Want a modern website like this for your business? Alvoratech creates professional websites that help you
                showcase your services and connect with customers.
              </p>
            </div>
            <div className="banner-buttons">
              <a
                className="btn btn-primary"
                href="https://wa.me/message/RVTZQMFL7I6OH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started on WhatsApp
              </a>
            </div>
          </div>
        </div>

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
        <section className="faq section">
          <div className="container faq-wrap">
            <div className="section-heading reveal is-visible">
              <p className="section-tag">Frequently Asked Questions</p>
              <h2>Answers to common tree service questions.</h2>
            </div>

            <div className="faq-list reveal is-visible">
              {faqs.map((faq, idx) => (
                <article className={`faq-item ${activeFaq === idx ? 'active' : ''}`} key={idx}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={activeFaq === idx}
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{activeFaq === idx ? '-' : '+'}</span>
                  </button>
                  {activeFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
        <section id="contact" className="contact section">
          <div className="container contact-grid">
            <div className="contact-copy reveal is-visible">
              <p className="section-tag">Contact Us</p>
              <h2>Let's Talk About Your Tree Service Needs.</h2>
              <ul className="contact-list">
                <li>
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer">
                    +1 (412) 796-3968
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@Alvoratechhq.com">info@Alvoratechhq.com</a>
                </li>
                <li><strong>Service:</strong> Residential &amp; Commercial Service</li>
              </ul>
              <a
                className="btn btn-primary whatsapp-button mt-4"
                href="https://wa.me/message/RVTZQMFL7I6OH1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-form-wrap reveal is-visible">
              <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
                <div className="form-grid">
                  <label>
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label>
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    <span>Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </label>
                  <label>
                    <span>Service Required *</span>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Tree Removal">Tree Removal</option>
                      <option value="Tree Trimming & Pruning">Tree Trimming &amp; Pruning</option>
                      <option value="Stump Grinding & Removal">Stump Grinding &amp; Removal</option>
                      <option value="Emergency Tree Services">Emergency Tree Services</option>
                      <option value="Land & Lot Clearing">Land &amp; Lot Clearing</option>
                      <option value="Tree Maintenance">Tree Maintenance</option>
                    </select>
                  </label>
                </div>
                <label>
                  <span>Project Description</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the tree location, hazards, or property access..."
                  ></textarea>
                </label>
                <button className="btn btn-primary submit-btn" type="submit">
                  Send Your Request on WhatsApp
                </button>
                {formSubmitted && (
                  <p className="form-message mt-3 text-sm font-semibold text-emerald-600">
                    Your request was opened in WhatsApp.
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
            <a href="#home" onClick={(e) => navigateTo('home', e)} className="logo footer-logo" aria-label="Alvoratech home">
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree icon">
                  <circle cx="32" cy="14" r="6" fill="currentColor" />
                  <path d="M32 20 L22 39 H28 V52 H36 V39 H42 Z" fill="currentColor" />
                  <path d="M20 32 C20 23, 28 18, 32 18 C36 18, 44 23, 44 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <span className="logo-text">Alvoratech</span>
            </a>
            <p>Professional tree removal and tree services designed to help property owners maintain cleaner, safer, and more attractive outdoor spaces.</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" onClick={(e) => navigateTo('home', e)}>Home</a></li>
              <li><a href="#about" onClick={(e) => navigateTo('about', e)}>About Us</a></li>
              <li><a href="#services" onClick={(e) => navigateTo('services', e)}>Our Services</a></li>
              <li><a href="#projects" onClick={(e) => navigateTo('projects', e)}>Our Projects</a></li>
              <li><a href="#contact" onClick={(e) => navigateTo('contact', e)}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3>Tree Services</h3>
            <ul>
              <li>Tree Removal</li>
              <li>Tree Trimming &amp; Pruning</li>
              <li>Stump Grinding</li>
              <li>Emergency Tree Services</li>
              <li>Land &amp; Lot Clearing</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +1 (412) 796-3968
                </a>
              </li>
              <li><a href="mailto:info@Alvoratechhq.com">Email: info@Alvoratechhq.com</a></li>
              <li>Location: United States</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>&copy; {new Date().getFullYear()} Alvoratech. All Rights Reserved.</p>
            <p className="demo-disclaimer">Demo website for presentation purposes.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <a
        className="floating-whatsapp"
        href="https://wa.me/message/RVTZQMFL7I6OH1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat With Us on WhatsApp"
      >
        <FaWhatsapp className="floating-whatsapp-icon w-6 h-6" />
        <span className="floating-whatsapp-text">Chat on WhatsApp: +1 (412) 796-3968</span>
      </a>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightbox"
          style={{ display: 'flex' }}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close image"
          >
            &times;
          </button>
          <img src={lightboxImage} alt="Expanded project view" />
        </div>
      )}
    </div>
  );
}
