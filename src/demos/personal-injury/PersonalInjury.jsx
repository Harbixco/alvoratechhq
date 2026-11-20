import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import CountUpNumber from '../../components/CountUpNumber';
import './personal-injury.css';

export default function PersonalInjury() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (["services","about","results","faq","consultation","contact"].includes(hash)) return hash;
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
      if (["services","about","results","faq","consultation","contact"].includes(hash)) {
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

  const [heroSlide, setHeroSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    date: '',
    contactMethod: 'Email',
    message: '',
    demoConfirm: false
  });

  // Hero carousel slides
  const heroSlides = [
    {
      image: '/demos/personal-injury/images/attorney-hero.jpg',
      caption: 'Direct attorney access, at every step'
    },
    {
      image: '/demos/personal-injury/images/courthouse.jpg',
      caption: 'Dedicated courtroom advocacy and preparation'
    },
    {
      image: '/demos/personal-injury/images/client-meeting-alt.jpg',
      caption: 'Compassionate, one-to-one consultation'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "I felt heard from our very first conversation. I always knew who to call and what the next step would be.",
      client: "Sarah Jenkins",
      tag: "Auto Collision Claim"
    },
    {
      quote: "The explanations were clear, and I never felt rushed into a decision I didn't understand. Excellent representation.",
      client: "Michael Rodriguez",
      tag: "Workplace Injury"
    },
    {
      quote: "Having a direct line to the attorney made a difficult time feel a little less overwhelming.",
      client: "David Vance",
      tag: "Premises Liability"
    }
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setFormError('');
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      setFormError('Please enter a valid phone number (7 to 15 digits).');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className={`personal-injury-demo ${mobileMenuOpen ? 'menu-open' : ''}`} id="top">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="Alvoratech Personal Injury Counsel" />

      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p>Personal injury counsel. Dedicated advocate for injured individuals.</p>
          <div className="utility-bar__contact">
            <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
              WhatsApp Only <span>+1 (412) 796-3968</span>
            </a>
            <span className="utility-bar__divider" aria-hidden="true"></span>
            <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>Email <span>counsel@alvoratechhq.com</span></a>
          </div>
        </div>
      </div>

      {/* Site Header */}
      <header className="site-header">
        <div className="container header__inner">
          <a className="brand" href="#home" onClick={(e) => navigateTo('home', e)} aria-label="Alvoratech home">
            <span className="brand__monogram" aria-hidden="true">A</span>
            <span className="brand__name">
              ALVORATECH
              <span>PERSONAL INJURY COUNSEL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="primary-nav" id="primary-navigation" aria-label="Main navigation">
            <a href="#about" onClick={(e) => navigateTo('about', e)}>The Attorney</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)}>How I Help</a>
            <a href="#process" onClick={(e) => scrollTo(e, 'process')}>Your Case</a>
            <a href="#resources" onClick={(e) => scrollTo(e, 'resources')}>Resources</a>
            <a href="#contact" onClick={(e) => navigateTo('contact', e)}>Contact</a>
            <a className="button button--small button--gold nav-cta" href="#consultation" onClick={(e) => navigateTo('consultation', e)}>
              Free Consultation <span aria-hidden="true">↗</span>
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            className={`menu-toggle mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation Backdrop & Drawer */}
        <div 
          className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'is-open' : ''}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <aside 
          className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
          id="mobile-drawer"
          aria-label="Mobile navigation"
        >
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Practice Menu</span>
            <button type="button" className="mobile-drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close navigation menu">
              &times;
            </button>
          </div>
          <div className="mobile-drawer-body">
            <a href="#home" onClick={(e) => { setMobileMenuOpen(false); navigateTo('home', e); }}>Home</a>
            <a href="#about" onClick={(e) => { setMobileMenuOpen(false); navigateTo('about', e); }}>The Attorney</a>
            <a href="#services" onClick={(e) => { setMobileMenuOpen(false); navigateTo('services', e); }}>How I Help</a>
            <a href="#process" onClick={(e) => { setMobileMenuOpen(false); scrollTo(e, 'process'); }}>Your Case</a>
            <a href="#resources" onClick={(e) => { setMobileMenuOpen(false); scrollTo(e, 'resources'); }}>Resources</a>
            <a href="#contact" onClick={(e) => { setMobileMenuOpen(false); navigateTo('contact', e); }}>Contact</a>
            <div className="mobile-drawer-cta">
              <a className="button button--gold button--block" href="#consultation" onClick={(e) => { setMobileMenuOpen(false); navigateTo('consultation', e); }}>
                Free Consultation <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="mobile-drawer-contact-info">
              <a href="tel:+14127963968" className="drawer-contact-link">
                <span>Call Directly:</span>
                <strong>+1 (412) 796-3968</strong>
              </a>
              <a href="https://wa.me/message/RVTZQMFL7I6OH1" target="_blank" rel="noopener noreferrer" className="drawer-whatsapp-link">
                <span>WhatsApp Available 24/7</span>
              </a>
            </div>
          </div>
        </aside>
      </header>

      <main id="main">

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
              {currentView === 'services' && 'Practice Areas & Legal Representation'}
              {currentView === 'about' && 'About The Attorney & Firm'}
              {(currentView === 'why-us' || currentView === 'difference' || currentView === 'technology') && 'Why Injury Victims Trust Our Firm'}
              {(currentView === 'projects' || currentView === 'gallery' || currentView === 'results') && 'Notable Case Results & Settlements'}
              {(currentView === 'reviews' || currentView === 'testimonials') && 'Client Reviews & Case Testimonials'}
              {currentView === 'faq' && 'Frequently Asked Questions'}
              {(currentView === 'contact' || currentView === 'appointment' || currentView === 'consultation') && 'Request a Free Case Evaluation'}
            </h1>
            </div>
        </section>
      )}

      {/* HOMEPAGE VIEW: High-converting, clean customer essentials */}
      {currentView === 'home' && (
        <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__slides" aria-hidden="true">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`hero__slide ${idx === heroSlide ? 'is-active' : ''}`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
            ))}
          </div>
          <div className="hero__overlay"></div>

          <div className="container hero__content">
            <div className="hero__copy">
              <h1 id="hero-title">
                When life takes<br />an unexpected turn,<br />
                <em>you deserve a voice.</em>
              </h1>
              <p className="hero__intro">
                One attorney. One relationship. Steady, personal guidance for people navigating the aftermath of a serious injury.
              </p>
              <div className="hero__actions">
                <a className="button button--gold" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                  Request a Free Consultation <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link text-link--light" href="#services" onClick={(e) => scrollTo(e, 'services')}>
                  Explore how I can help <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="hero__proof">
                <div className="hero__initials" aria-hidden="true"><span>AM</span></div>
                <p>
                  <strong>Direct attorney access</strong><br />
                  From our first conversation onward
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WELCOME SECTION ── */}
        <section className="welcome section-pad" id="welcome">
          <div className="container welcome__grid">
            <div className="welcome__body">
              <h2>Big moments deserve <em>personal attention.</em></h2>
              <p className="welcome__lead">
                An injury can change the rhythm of your life. The legal process shouldn't make you feel like a number, too.
              </p>
              <p>
                At Alvoratech, you work directly with dedicated counsel who takes the time to understand your concerns, explain your legal rights, and build a strategic path toward recovery.
              </p>
              <a className="text-link" href="#about" onClick={(e) => scrollTo(e, 'about')}>
                Meet your attorney <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="welcome__stamp" aria-hidden="true">
              <span>ONE ATTORNEY</span>
              <b>ONE<br />CLIENT<br />AT A<br />TIME</b>
              <span>PERSONAL BY DESIGN</span>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading section-heading--split reveal">
              <div>
                <h2>Focused guidance for<br /><em>life after an injury.</em></h2>
              </div>
              <p>Every situation is different. Explore common matters where our personal injury counsel can help you understand your legal options.</p>
            </div>

            <div className="services__grid">
              {[
                { title: 'Car Accidents', desc: 'Understand the steps to take after a collision and how an injury claim moves forward.', img: 'car-accident.jpg', num: '01' },
                { title: 'Truck Accidents', desc: 'Review complex questions involving commercial carrier regulations, evidence, and multiple parties.', img: 'truck.jpg', num: '02' },
                { title: 'Motorcycle Accidents', desc: 'Get clear guidance after a crash, with your recovery and long-term care in focus.', img: 'motorcycle.jpg', num: '03' },
                { title: 'Pedestrian Accidents', desc: 'Explore your options after being injured while walking, jogging, or crossing the road.', img: 'pedestrian.jpg', num: '04' },
                { title: 'Bicycle Accidents', desc: 'Learn how an injury claim protects cyclists against distracted and negligent motorists.', img: 'bicycle.jpg', num: '05' },
                { title: 'Slip & Fall Injuries', desc: 'Examine property hazard conditions, maintenance logs, and commercial liability.', img: 'slip-fall.jpg', num: '06' },
                { title: 'Workplace Injuries', desc: 'Navigate third-party claims and workers compensation recovery routes with confidence.', img: 'workplace.jpg', num: '07' },
                { title: 'Medical Malpractice', desc: 'Investigate standard of care breaches with independent expert clinical reviewers.', img: 'medical.jpg', num: '08' },
                { title: 'Wrongful Death', desc: 'Compassionate counsel for surviving families seeking accountability and answers.', img: 'care.jpg', num: '09' },
                { title: 'Catastrophic Injuries', desc: 'Account for life-care plans, future therapy, and lifetime income loss support.', img: 'medical.jpg', num: '10' },
                { title: 'Dog Bite Injuries', desc: 'Practical guidance regarding veterinary documentation, medical expenses, and premises liability.', img: 'dog.jpg', num: '11' },
                { title: 'Product Liability', desc: 'Hold manufacturers accountable for defective design, failure to warn, or faulty components.', img: 'product.jpg', num: '12' },
              ].map((item, idx) => (
                <article key={idx} className="service-card reveal">
                  <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')} className="service-card__image">
                    <img src={`/demos/personal-injury/images/${item.img}`} alt={item.title} loading="lazy" width="720" height="480" />
                    <span className="service-card__number">{item.num}</span>
                  </a>
                  <div className="service-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                      Learn more <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE ALVORATECH DIFFERENCE ── */}
        <section className="testimonials section-pad" aria-labelledby="testimonial-title">
          <div className="container testimonials__inner">
            <div className="testimonials__aside">
              <h2 id="testimonial-title">Words that<br /><em>matter.</em></h2>
              <p>Client experiences highlighting clear communication, compassionate representation, and peace of mind.</p>
              <div className="carousel-controls">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Previous testimonial"
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Next testimonial"
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                >
                  →
                </button>
              </div>
            </div>

            <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Client testimonials">
              <article className="testimonial-slide is-active">
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>“{testimonials[testimonialIndex].quote}”</blockquote>
                <p className="testimonial-slide__name">
                  {testimonials[testimonialIndex].client} <span>{testimonials[testimonialIndex].tag}</span>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact__top">
              <div>
                <h2>Reach out.<br /><em>Start with a conversation.</em></h2>
              </div>
              <a className="button button--outline" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Request a consultation <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact__grid">
              <div className="contact-detail">
                <span>WHATSAPP ONLY</span>
                <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
                  +1 (412) 796-3968
                </a>
                <p>Message on WhatsApp to schedule an evaluation</p>
              </div>
              <div className="contact-detail">
                <span>EMAIL</span>
                <a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a>
                <p>Direct attorney inbox access</p>
              </div>
              <div className="contact-detail">
                <span>OFFICE LOCATION</span>
                <p className="contact-detail__placeholder">Suite 400, Metro Legal Center</p>
                <p>Downtown Metropolitan District</p>
              </div>
              <div className="contact-detail">
                <span>BUSINESS HOURS</span>
                <p>Monday–Friday: 8:30 AM – 6:00 PM<br />Emergency response available 24/7</p>
              </div>
            </div>

            <div className="map-placeholder" role="img" aria-label="Map placeholder showing office location">
              <div className="map-placeholder__lines" aria-hidden="true"></div>
              <span className="map-placeholder__pin" aria-hidden="true">A</span>
              <div className="map-placeholder__label">
                <span>OFFICE LOCATION</span>
                <strong>Metro Legal Center</strong>
                <p>Suite 400 · Metro Legal Plaza</p>
              </div>
              <span className="map-placeholder__north" aria-hidden="true">N ↑</span>
            </div>
          </div>
        </section>
        </>
      )}

      {/* SERVICES VIEW */}
      {currentView === 'services' && (
        <>
        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading section-heading--split reveal">
              <div>
                <h2>Focused guidance for<br /><em>life after an injury.</em></h2>
              </div>
              <p>Every situation is different. Explore common matters where our personal injury counsel can help you understand your legal options.</p>
            </div>

            <div className="services__grid">
              {[
                { title: 'Car Accidents', desc: 'Understand the steps to take after a collision and how an injury claim moves forward.', img: 'car-accident.jpg', num: '01' },
                { title: 'Truck Accidents', desc: 'Review complex questions involving commercial carrier regulations, evidence, and multiple parties.', img: 'truck.jpg', num: '02' },
                { title: 'Motorcycle Accidents', desc: 'Get clear guidance after a crash, with your recovery and long-term care in focus.', img: 'motorcycle.jpg', num: '03' },
                { title: 'Pedestrian Accidents', desc: 'Explore your options after being injured while walking, jogging, or crossing the road.', img: 'pedestrian.jpg', num: '04' },
                { title: 'Bicycle Accidents', desc: 'Learn how an injury claim protects cyclists against distracted and negligent motorists.', img: 'bicycle.jpg', num: '05' },
                { title: 'Slip & Fall Injuries', desc: 'Examine property hazard conditions, maintenance logs, and commercial liability.', img: 'slip-fall.jpg', num: '06' },
                { title: 'Workplace Injuries', desc: 'Navigate third-party claims and workers compensation recovery routes with confidence.', img: 'workplace.jpg', num: '07' },
                { title: 'Medical Malpractice', desc: 'Investigate standard of care breaches with independent expert clinical reviewers.', img: 'medical.jpg', num: '08' },
                { title: 'Wrongful Death', desc: 'Compassionate counsel for surviving families seeking accountability and answers.', img: 'care.jpg', num: '09' },
                { title: 'Catastrophic Injuries', desc: 'Account for life-care plans, future therapy, and lifetime income loss support.', img: 'medical.jpg', num: '10' },
                { title: 'Dog Bite Injuries', desc: 'Practical guidance regarding veterinary documentation, medical expenses, and premises liability.', img: 'dog.jpg', num: '11' },
                { title: 'Product Liability', desc: 'Hold manufacturers accountable for defective design, failure to warn, or faulty components.', img: 'product.jpg', num: '12' },
              ].map((item, idx) => (
                <article key={idx} className="service-card reveal">
                  <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')} className="service-card__image">
                    <img src={`/demos/personal-injury/images/${item.img}`} alt={item.title} loading="lazy" width="720" height="480" />
                    <span className="service-card__number">{item.num}</span>
                  </a>
                  <div className="service-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                      Learn more <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>Injured in an Accident? We Are Ready to Help.</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>Schedule a free, confidential case review directly with our counsel. Zero legal fees unless we achieve a recovery.</p>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Request Free Case Evaluation &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* ABOUT / STORY VIEW */}
      {currentView === 'about' && (
        <>
        <section className="about section-pad" id="about">
          <div className="container about__grid">
            <div className="about__portrait-wrap">
              <div className="about__portrait">
                <img
                  src="/demos/personal-injury/images/attorney-portrait.jpg"
                  alt="Attorney Alex Morgan in a professional portrait"
                  loading="lazy"
                  width="760"
                  height="920"
                />
              </div>
            </div>

            <div className="about__copy">
              <h2>Meet Alex <em>Morgan.</em></h2>
              <p className="about__role">Founder &amp; Managing Personal Injury Counsel</p>
              <p className="about__lead">A steady hand, a listening ear, and a lawyer who knows your name.</p>
              <p>
                Our practice is built around direct communication, relentless preparation, and respect for the very real disruption an unexpected injury brings to a family.
              </p>
              <p>
                We personally guide each client through questions, decisions, and negotiations—without handing off your case to rotating paralegals or call centers.
              </p>
              <div className="credential-list">
                <div>
                  <span className="credential-list__icon">01</span>
                  <p><strong>Education</strong><br />Juris Doctor, Atlantic State Law School</p>
                </div>
                <div>
                  <span className="credential-list__icon">02</span>
                  <p><strong>Approach</strong><br />Thoughtful preparation, plain-language counsel</p>
                </div>
              </div>
              <a className="button button--outline" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Schedule Case Consultation <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── PRACTICE AREAS ── */}
        <section className="difference section-pad">
          <div className="difference__image" role="img" aria-label="Two professionals discussing case notes in an office"></div>
          <div className="difference__content">
            <h2>You won't have to wonder<br /><em>who's handling your case.</em></h2>
            <p>When you work with our firm, the attorney who listens to your story is the attorney who represents you at every stage.</p>
            <ul className="difference__list">
              <li><span>01</span><div><strong>Direct communication</strong><p>Speak with the attorney responsible for your matter.</p></div></li>
              <li><span>02</span><div><strong>Personal attention</strong><p>Your recovery goals and priorities shape our litigation strategy.</p></div></li>
              <li><span>03</span><div><strong>Clear next steps</strong><p>Always understand upcoming filings, depositions, and timelines.</p></div></li>
              <li><span>04</span><div><strong>Focused case handling</strong><p>Careful investigation with your individual circumstances in view.</p></div></li>
            </ul>
            <a className="text-link text-link--light" href="#process" onClick={(e) => scrollTo(e, 'process')}>
              See how the process works <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* About Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>Direct Attorney Guidance from Day One</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>You will work directly with an experienced advocate who understands the personal disruption of an unexpected injury.</p>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Talk With Counsel &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* WHY US VIEW */}
      {(currentView === 'why-us' || currentView === 'difference' || currentView === 'technology') && (
        <>
        <section className="difference section-pad">
          <div className="difference__image" role="img" aria-label="Two professionals discussing case notes in an office"></div>
          <div className="difference__content">
            <h2>You won't have to wonder<br /><em>who's handling your case.</em></h2>
            <p>When you work with our firm, the attorney who listens to your story is the attorney who represents you at every stage.</p>
            <ul className="difference__list">
              <li><span>01</span><div><strong>Direct communication</strong><p>Speak with the attorney responsible for your matter.</p></div></li>
              <li><span>02</span><div><strong>Personal attention</strong><p>Your recovery goals and priorities shape our litigation strategy.</p></div></li>
              <li><span>03</span><div><strong>Clear next steps</strong><p>Always understand upcoming filings, depositions, and timelines.</p></div></li>
              <li><span>04</span><div><strong>Focused case handling</strong><p>Careful investigation with your individual circumstances in view.</p></div></li>
            </ul>
            <a className="text-link text-link--light" href="#process" onClick={(e) => scrollTo(e, 'process')}>
              See how the process works <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Difference Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>No Upfront Retainers. No Hidden Expenses.</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>We advance all filing fees, expert witness reviews, and investigations. You owe nothing unless your claim succeeds.</p>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Start Your Free Evaluation &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* PROJECTS / PORTFOLIO VIEW */}
      {(currentView === 'projects' || currentView === 'gallery' || currentView === 'results') && (
        <>
        <section className="results section-pad">
          <div className="container results__inner">
            <div className="results__copy">
              <h2>Every person's story<br />is <em>more than a number.</em></h2>
              <p>Our focus is on thorough preparation, honest advocacy, and achieving meaningful justice for injured clients and their families.</p>
              <p>We work tirelessly to ensure every client receives attentive, dedicated legal support tailored to their long-term health and financial stability.</p>
            </div>
            <div className="results__cards">
              <article className="result-card reveal">
                <span>AVERAGE CLAIM RECOVERY</span>
                <strong className="text-3xl sm:text-4xl font-extrabold text-[#dfc28f]">
                  $<CountUpNumber end={425000} duration={2000} />
                </strong>
                <p>Severe motor vehicle injury settlements</p>
                <i>Demonstrated recovery track record</i>
              </article>
              <article className="result-card reveal">
                <span>PRACTICE EXPERIENCE</span>
                <strong className="text-3xl sm:text-4xl font-extrabold text-[#dfc28f]">
                  <CountUpNumber end={15} duration={1600} suffix="+ yrs" />
                </strong>
                <p>Trial and tort litigation experience</p>
                <i>Dedicated to personal injury advocacy</i>
              </article>
              <article className="result-card reveal">
                <span>CLIENT SATISFACTION</span>
                <strong className="text-3xl sm:text-4xl font-extrabold text-[#dfc28f]">
                  <CountUpNumber end={100} duration={1800} suffix="%" />
                </strong>
                <p>Direct attorney engagement guaranteed</p>
                <i>Zero hand-offs to third-party call centers</i>
              </article>
            </div>
          </div>
        </section>

        {/* Results Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>Proven Recoveries for Complex Injury Claims</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>From commercial carrier collisions to catastrophic losses, we stand up to insurance adjusters to secure full compensation.</p>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Discuss Your Claim &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* REVIEWS / TESTIMONIALS VIEW */}
      {(currentView === 'reviews' || currentView === 'testimonials') && (
        <>
        <section className="testimonials section-pad" aria-labelledby="testimonial-title">
          <div className="container testimonials__inner">
            <div className="testimonials__aside">
              <h2 id="testimonial-title">Words that<br /><em>matter.</em></h2>
              <p>Client experiences highlighting clear communication, compassionate representation, and peace of mind.</p>
              <div className="carousel-controls">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Previous testimonial"
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Next testimonial"
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
                >
                  →
                </button>
              </div>
            </div>

            <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Client testimonials">
              <article className="testimonial-slide is-active">
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>“{testimonials[testimonialIndex].quote}”</blockquote>
                <p className="testimonial-slide__name">
                  {testimonials[testimonialIndex].client} <span>{testimonials[testimonialIndex].tag}</span>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Reviews Bottom CTA */}
          <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>Hear Directly from Former Clients</h2>
              <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>Read authentic experiences from families who trusted our firm during their most challenging moments.</p>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Schedule Consultation &rarr;
              </button>
            </div>
          </section>
        </>
      )}

      {/* FAQ VIEW */}
      {currentView === 'faq' && (
        <>
        <section className="faq section-pad" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro">
              <h2>Questions worth<br /><em>asking.</em></h2>
              <p>General information can help you prepare. Your own situation may call for advice from a qualified attorney in your jurisdiction.</p>
              <a className="text-link" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Ask about a consultation <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="faq__list">
              {[
                { q: "What should I do immediately after an accident?", a: "Prioritize medical attention and safety first. Then document scene details, vehicle license plates, witness contact information, and police report numbers before discussing the event with insurance adjusters." },
                { q: "How much does personal injury representation cost?", a: "We work on a contingency fee structure. You pay zero legal fees upfront, and attorney fees are deducted only if we secure a successful settlement or court verdict for your claim." },
                { q: "How long does a personal injury case take?", a: "Timelines depend on injury stabilization, hospital record release times, and insurance adjuster cooperation. Straightforward claims may resolve in months, while contested trials take longer." },
                { q: "What happens during my initial free consultation?", a: "We review accident specifics, examine medical diagnostic reports, determine responsible parties, and outline realistic recovery options without any financial obligation." },
                { q: "What if the driver who hit me does not have insurance?", a: "We examine Uninsured/Underinsured Motorist (UM/UIM) coverage on your own policy, as well as umbrella policies or third-party liabilities (such as commercial employers or vehicle defects)." },
                { q: "Can I receive compensation for lost wages?", a: "Yes. Recoverable damages commonly include past medical bills, projected future physical therapy, lost income, diminished future earning capacity, and pain and suffering." }
              ].map((faq, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary><span>{faq.q}</span><i aria-hidden="true"></i></summary>
                  <div className="faq-item__answer"><p>{faq.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSULTATION SECTION (HOMEPAGE) ── */}
        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact__top">
              <div>
                <h2>Reach out.<br /><em>Start with a conversation.</em></h2>
              </div>
              <a className="button button--outline" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Request a consultation <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact__grid">
              <div className="contact-detail">
                <span>WHATSAPP ONLY</span>
                <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
                  +1 (412) 796-3968
                </a>
                <p>Message on WhatsApp to schedule an evaluation</p>
              </div>
              <div className="contact-detail">
                <span>EMAIL</span>
                <a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a>
                <p>Direct attorney inbox access</p>
              </div>
              <div className="contact-detail">
                <span>OFFICE LOCATION</span>
                <p className="contact-detail__placeholder">Suite 400, Metro Legal Center</p>
                <p>Pittsburgh, PA &amp; Surrounding Jurisdictions</p>
              </div>
              <div className="contact-detail">
                <span>BUSINESS HOURS</span>
                <p>Monday–Friday: 8:30 AM – 6:00 PM<br />Emergency consultation available 24/7</p>
              </div>
            </div>
          </div>
        </section>
        </>
      )}

      {/* FAQ VIEW */}
      {currentView === 'faq' && (
        <section className="section-padding text-center" style={{ backgroundColor: '#f8fafc', padding: '3.5rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="container" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: '#0e1626' }}>Have Legal Questions About an Injury Claim?</h2>
            <p style={{ margin: '0 0 1.75rem', color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>We answer questions with clear, plain language. Contact counsel directly with zero financial obligation.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+14127963968" className="button button-gold" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem', textDecoration: 'none' }}>
                Direct Line: +1 (412) 796-3968
              </a>
              <button onClick={(e) => navigateTo('consultation', e)} className="button button--outline" style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}>
                Request Consultation &rarr;
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT / APPOINTMENT / CONSULTATION VIEW */}
      {(currentView === 'contact' || currentView === 'appointment' || currentView === 'consultation') && (
        <>
        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact__top">
              <div>
                <h2>Reach out.<br /><em>Start with a conversation.</em></h2>
              </div>
              <a className="button button--outline" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Request a consultation <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact__grid">
              <div className="contact-detail">
                <span>WHATSAPP ONLY</span>
                <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
                  +1 (412) 796-3968
                </a>
                <p>Message on WhatsApp to schedule an evaluation</p>
              </div>
              <div className="contact-detail">
                <span>EMAIL</span>
                <a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a>
                <p>Direct attorney inbox access</p>
              </div>
              <div className="contact-detail">
                <span>OFFICE LOCATION</span>
                <p className="contact-detail__placeholder">Suite 400, Metro Legal Center</p>
                <p>Downtown Metropolitan District</p>
              </div>
              <div className="contact-detail">
                <span>BUSINESS HOURS</span>
                <p>Monday–Friday: 8:30 AM – 6:00 PM<br />Emergency response available 24/7</p>
              </div>
            </div>

            <div className="map-placeholder" role="img" aria-label="Map placeholder showing office location">
              <div className="map-placeholder__lines" aria-hidden="true"></div>
              <span className="map-placeholder__pin" aria-hidden="true">A</span>
              <div className="map-placeholder__label">
                <span>OFFICE LOCATION</span>
                <strong>Metro Legal Center</strong>
                <p>Suite 400 · Metro Legal Plaza</p>
              </div>
              <span className="map-placeholder__north" aria-hidden="true">N ↑</span>
            </div>
          </div>
        </section>
        </>
      )}

      </main>

            <footer className="site-footer">
        <div className="container footer__main">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#home" onClick={(e) => navigateTo('home', e)}>
              <span className="brand__monogram" aria-hidden="true">A</span>
              <span className="brand__name">
                ALVORATECH
                <span>PERSONAL INJURY COUNSEL</span>
              </span>
            </a>
            <p>Personal injury counsel.<br />Personally.</p>
          </div>

          <div className="footer__column">
            <h2>Explore</h2>
            <a href="#about" onClick={(e) => navigateTo('about', e)}>The Attorney</a>
            <a href="#services" onClick={(e) => navigateTo('services', e)}>How I Help</a>
            <a href="#process">Your Case</a>
            <a href="#resources">Resources</a>
          </div>

          <div className="footer__column">
            <h2>Contact</h2>
            <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
              +1 (412) 796-3968 (WhatsApp Only)
            </a>
            <a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a>
            <p>Suite 400, Metro Legal Plaza</p>
            <a href="#consultation" onClick={(e) => navigateTo('consultation', e)}>Request a consultation ↗</a>
          <div className="footer-social-links" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1.25rem' }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Facebook"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Instagram"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="X (formerly Twitter)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="Pinterest"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          </div>

          <div className="footer__column footer__disclaimer">
            <h2>Client Template Showcase</h2>
            <p>Designed and built for high-converting legal practices. Optimized for lightning page speed, search ranking visibility, and mobile client bookings.</p>
            <a href="/" style={{ color: '#dfc28f', fontWeight: 'bold' }}>← Back to Alvora Tech Main Site</a>
          </div>
        </div>

        <div className="footer__bottom" id="legal-disclaimer">
          <div className="container footer__bottom-inner">
            <p>© {new Date().getFullYear()} Alvoratech · Professional Legal Practice Template</p>
            <a href="#home" onClick={(e) => navigateTo('home', e)} className="back-to-top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
