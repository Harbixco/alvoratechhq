import React, { useState } from 'react';
import DemoTopBar from '../DemoTopBar';
import CountUpNumber from '../../components/CountUpNumber';
import './contractor.css';

export default function Contractor() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const projectsData = [
    {
      id: 'northline',
      categoryKey: 'commercial',
      category: 'COMMERCIAL · OFFICE',
      title: 'Northline Workplace',
      description: 'An illustrative commercial office project focused on a bright, adaptable workplace, considered finishes, and a smooth path from planning through delivery.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      isFeature: true,
    },
    {
      id: 'oak-house',
      categoryKey: 'residential',
      category: 'RESIDENTIAL · NEW BUILD',
      title: 'Oak House',
      description: 'An illustrative new-build home combining warm natural materials, a connection to the landscape, and practical spaces for everyday living.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
    {
      id: 'foundry-commons',
      categoryKey: 'commercial',
      category: 'COMMERCIAL · INTERIOR',
      title: 'Foundry Commons',
      description: 'An illustrative commercial interior brought together around natural light, flexible collaboration areas, and durable, welcoming finishes.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
    {
      id: 'the-harper',
      categoryKey: 'renovation',
      category: 'RENOVATION · RESIDENTIAL',
      title: 'The Harper',
      description: 'An illustrative residential renovation that gives a familiar space new life through thoughtful planning and a refreshed, cohesive interior.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
    {
      id: 'ridgeview',
      categoryKey: 'residential',
      category: 'RESIDENTIAL · CUSTOM HOME',
      title: 'Ridgeview Residence',
      description: 'An illustrative custom residence balancing clean architectural lines, inviting materials, and a practical connection between indoor and outdoor living.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
    {
      id: 'union-hall',
      categoryKey: 'renovation',
      category: 'RENOVATION · COMMERCIAL',
      title: 'Union Hall',
      description: 'An illustrative commercial renovation centered on renewing an existing space with durable finishes, improved comfort, and a clear identity.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
    {
      id: 'oakridge-roof',
      categoryKey: 'roofing',
      category: 'ROOFING · RESIDENTIAL',
      title: 'Oakridge Roof Renewal',
      description: 'An illustrative residential roofing project showcasing a roof renewal designed to complement the home and help protect it from the elements.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
      isFeature: false,
    },
  ];

  const testimonials = [
    {
      quote: '“The process felt collaborative from day one. The team kept communication clear and brought a thoughtful approach to every detail.”',
      author: 'Jordan M.',
      role: 'Commercial office · Fictional demo',
      avatar: 'JM',
      avatarClass: '',
    },
    {
      quote: '“From planning through final handover, we always knew what was happening next. The result feels like home in every way.”',
      author: 'Alex L.',
      role: 'Custom residence · Fictional demo',
      avatar: 'AL',
      avatarClass: 'avatar-two',
    },
    {
      quote: '“A complex renovation felt surprisingly manageable. The team listened, adapted, and treated the space with real care.”',
      author: 'Riley K.',
      role: 'Building renovation · Fictional demo',
      avatar: 'RK',
      avatarClass: 'avatar-three',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === activeFilter);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contractor-demo" id="home">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="Alvoratech General Contractor & Construction" />

      {/* Demo Notice Banner */}
      {!bannerDismissed && (
        <aside className="demo-banner" aria-label="Demo website notice">
          <span className="demo-badge">DEMO</span>
          <p>
            DEMO WEBSITE <span className="demo-divider">—</span> This is a construction website preview created by Alvoratech.
          </p>
          <button
            className="banner-close"
            type="button"
            aria-label="Dismiss demo notice"
            onClick={() => setBannerDismissed(true)}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </aside>
      )}

      {/* Site Header */}
      <header className="site-header">
        <nav className="nav-shell container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={(e) => scrollTo(e, 'home')}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 44 44">
                <path d="M5 36 21.8 7 39 36h-8.2l-9-15.5L13 36H5Z" />
                <path d="M17 29h17" className="mark-cut" />
              </svg>
            </span>
            <span className="brand-name">
              alvora<span>tech</span>
              <small>BUILDING WITH PURPOSE</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
            <div className="nav-links">
              <a href="#home" onClick={(e) => scrollTo(e, 'home')}>Home</a>
              <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About Us</a>
              <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Services</a>
              <a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Projects</a>
              <a href="#process" onClick={(e) => scrollTo(e, 'process')}>Our Process</a>
              <a href="#testimonials" onClick={(e) => scrollTo(e, 'testimonials')}>Testimonials</a>
              <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
            </div>
            <a className="button button-gold nav-cta" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
              Request a Free Quote <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-image" role="img" aria-label="Construction site background"></div>
          <div className="hero-shade"></div>
          <div className="hero-grid container">
            <div className="hero-content">
              <p className="eyebrow eyebrow-light">
                <span className="eyebrow-line"></span> GENERAL CONTRACTING · BUILT AROUND YOU
              </p>
              <h1>
                Building your vision.<br />
                <span>Delivering excellence.</span>
              </h1>
              <p className="hero-copy">
                From concept to completion, Alvoratech delivers exceptional construction solutions built on quality craftsmanship, integrity, and innovation.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#projects" onClick={(e) => scrollTo(e, 'projects')}>
                  Explore our projects <span>↗</span>
                </a>
                <a className="button button-outline-light" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                  Request a free quote <span>→</span>
                </a>
              </div>
            </div>
            <div className="hero-aside">
              <span className="aside-rule"></span>
              <p>Thoughtful planning.<br />Lasting craftsmanship.</p>
            </div>
          </div>
          <a className="scroll-cue" href="#about" onClick={(e) => scrollTo(e, 'about')}>
            <span className="scroll-cue-line"></span>
            <span>SCROLL TO EXPLORE</span>
          </a>
          <div className="hero-index">
            <span>01</span><i></i><span>04</span>
          </div>
        </section>

        {/* ── STATS SECTION ── */}
        <section className="stats-section" aria-label="Alvoratech at a glance">
          <div className="stats-grid container">
            <div className="stats-intro">
              <span className="eyebrow">OUR TRACK RECORD</span>
              <p>Experience that<br />builds confidence.</p>
            </div>
            <div className="stat-item">
              <strong>
                <CountUpNumber end={15} suffix="+" duration={1.8} />
              </strong>
              <span>Years of experience</span>
            </div>
            <div className="stat-item">
              <strong>
                <CountUpNumber end={250} suffix="+" duration={2} />
              </strong>
              <span>Projects completed</span>
            </div>
            <div className="stat-item">
              <strong>
                <CountUpNumber end={98} suffix="%" duration={1.8} />
              </strong>
              <span>Client satisfaction</span>
            </div>
            <div className="stat-item">
              <strong>
                <CountUpNumber end={50} suffix="+" duration={2} />
              </strong>
              <span>Skilled professionals</span>
            </div>
          </div>
          <p className="stats-note container">Illustrative demo figures for presentation purposes.</p>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section className="about-section section-pad" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="about-photo image-frame">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=85"
                  alt="Construction professionals working together on site"
                  loading="lazy"
                />
              </div>
              <div className="about-stamp">
                <span>BUILT ON</span>
                <strong>TRUST<br />&amp; CRAFT</strong>
                <i>ALVORATECH · EST. 2009</i>
              </div>
              <div className="about-caption">
                <span className="caption-dot"></span> Craftsmanship in every detail
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">
                <span className="eyebrow-line"></span> WHO WE ARE
              </span>
              <h2>Building trust through <span>quality construction.</span></h2>
              <p className="lead">
                Great buildings start with great partnerships. We bring people, expertise, and practical thinking together to make every project work harder.
              </p>
              <p>
                From the first conversation to the final walkthrough, our team is committed to dependable communication, careful planning, safe worksites, and quality that lasts. Every detail is considered. Every commitment matters.
              </p>
              <div className="belief-grid">
                <article>
                  <span className="belief-icon">01</span>
                  <div>
                    <h3>Our mission</h3>
                    <p>Deliver exceptional spaces through dependable, people-first construction.</p>
                  </div>
                </article>
                <article>
                  <span className="belief-icon">02</span>
                  <div>
                    <h3>Our vision</h3>
                    <p>Build a stronger future through enduring places and trusted partnerships.</p>
                  </div>
                </article>
                <article>
                  <span className="belief-icon">03</span>
                  <div>
                    <h3>Our values</h3>
                    <p>Integrity, safety, craftsmanship, collaboration, and accountability.</p>
                  </div>
                </article>
              </div>
              <a className="text-link" href="#process" onClick={(e) => scrollTo(e, 'process')}>
                Discover how we work <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ── */}
        <section className="services-section section-pad section-dark" id="services">
          <div className="container">
            <div className="section-heading heading-light">
              <div>
                <span className="eyebrow eyebrow-light">
                  <span className="eyebrow-line"></span> WHAT WE DO
                </span>
                <h2>Built around your <span>ambition.</span></h2>
              </div>
              <p>
                From a single renovation to a ground-up build, our team brings the right expertise to every scale of work.
              </p>
            </div>

            <div className="services-grid">
              {[
                {
                  id: '01',
                  title: 'General Contracting',
                  desc: 'One accountable partner to coordinate people, materials, and every moving part.',
                  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="M5 27V12l11-7 11 7v15M11 27v-8h10v8M3 27h26" />,
                },
                {
                  id: '02',
                  title: 'Commercial Construction',
                  desc: 'High-performing workplaces and commercial spaces designed for what comes next.',
                  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="M7 28V5h18v23M4 28h24M12 10h2m4 0h2m-8 5h2m4 0h2m-8 5h2m4 0h2" />,
                },
                {
                  id: '03',
                  title: 'Residential Construction',
                  desc: 'Thoughtfully built homes shaped around the way you want to live.',
                  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="m4 15 12-10 12 10M7 13v14h18V13M13 27v-8h6v8" />,
                },
                {
                  id: '04',
                  title: 'Building Renovations',
                  desc: 'Give existing spaces a considered new chapter with less disruption and more purpose.',
                  image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="M5 27V9h22v18M3 27h26M10 15h4m4 0h4m-12 6h4m4 0h4M10 5h12v4H10z" />,
                },
                {
                  id: '05',
                  title: 'Project Management',
                  desc: 'Clear leadership, proactive coordination, and a steady hand from start to finish.',
                  image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
                  svg: (
                    <>
                      <circle cx="16" cy="16" r="11" />
                      <path d="M16 9v7l5 3M5 5l4 4" />
                    </>
                  ),
                },
                {
                  id: '06',
                  title: 'Design & Build',
                  desc: 'Connected design and construction for a more cohesive, buildable vision.',
                  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="m4 26 12-20 12 20M9 18h14M13 26l3-6 3 6M4 29h24" />,
                },
                {
                  id: '07',
                  title: 'Remodeling Services',
                  desc: 'Refresh the way your property looks, feels, and works inside and out.',
                  image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="M5 27V6h22v21M9 27v-8h14v8M10 11h4m4 0h4M3 27h26" />,
                },
                {
                  id: '08',
                  title: 'Structural Works',
                  desc: 'Sound structural solutions with care for safety, performance, and longevity.',
                  image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="M5 27V8l11-4 11 4v19M3 27h26M11 12h2m6 0h2m-10 5h2m6 0h2m-10 5h2m6 0h2" />,
                },
                {
                  id: '09',
                  title: 'Roofing Solutions',
                  desc: 'Roof installation, replacement, and repairs to help protect your home from the elements.',
                  image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=800&q=80',
                  svg: <path d="m3 16 13-10 13 10M6 14v14h20V14M12 28v-9h8v9M4 28h24" />,
                },
              ].map((serv) => (
                <article key={serv.id} className="service-card">
                  <div className="service-image">
                    <img src={serv.image} alt={serv.title} loading="lazy" />
                    <span className="service-number">{serv.id}</span>
                  </div>
                  <div className="service-body">
                    <span className="service-icon" aria-hidden="true">
                      <svg viewBox="0 0 32 32">{serv.svg}</svg>
                    </span>
                    <h3>{serv.title}</h3>
                    <p>{serv.desc}</p>
                    <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                      Explore service <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS SECTION ── */}
        <section className="projects-section section-pad" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-line"></span> SELECTED WORK
                </span>
                <h2>Spaces made to <span>move us.</span></h2>
              </div>
              <p>A few examples of the places and possibilities we're proud to help bring to life.</p>
            </div>

            <div className="project-toolbar">
              <p>
                PORTFOLIO <span>·</span> <b>{String(filteredProjects.length).padStart(2, '0')} PROJECTS</b>
              </p>
              <div className="project-filters" role="group" aria-label="Filter projects">
                {['all', 'commercial', 'residential', 'renovation', 'roofing'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-button ${activeFilter === cat ? 'is-active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat === 'all' ? 'All work' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((proj) => (
                <article
                  key={proj.id}
                  className={`project-card ${proj.isFeature && activeFilter === 'all' ? 'project-feature' : ''}`}
                >
                  <button
                    className="project-open"
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <span className="project-image">
                      <img src={proj.image} alt={proj.title} loading="lazy" />
                    </span>
                    <span className="project-overlay">
                      <span>VIEW PROJECT <i>↗</i></span>
                    </span>
                    <span className="project-info">
                      <span>
                        <small>{proj.category}</small>
                        <strong>{proj.title}</strong>
                      </span>
                      <span className="project-arrow">↗</span>
                    </span>
                  </button>
                </article>
              ))}
            </div>
            <p className="portfolio-note">Portfolio names and projects shown are illustrative demo content.</p>
          </div>
        </section>

        {/* ── WHY US SECTION ── */}
        <section className="why-section section-pad">
          <div className="container why-grid">
            <div className="why-heading">
              <span className="eyebrow eyebrow-light">
                <span className="eyebrow-line"></span> THE ALVORATECH DIFFERENCE
              </span>
              <h2>Good people.<br /><span>Good building.</span></h2>
              <p>We make the complex feel clear, and the important things stay important.</p>
              <a className="button button-outline-light" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                Let's talk about your project <span>↗</span>
              </a>
            </div>
            <div className="why-list">
              {[
                { num: '01', title: 'Experienced construction professionals', desc: 'Seasoned people who know how to anticipate challenges and keep work moving.' },
                { num: '02', title: 'Quality materials & craftsmanship', desc: 'Thoughtful choices, precise execution, and details made to stand the test of time.' },
                { num: '03', title: 'On-time project delivery', desc: 'Realistic schedules, coordinated teams, and clear visibility along the way.' },
                { num: '04', title: 'Transparent communication', desc: 'Direct answers, thoughtful updates, and no surprises where they can be avoided.' },
                { num: '05', title: 'Competitive, considered pricing', desc: 'Clear scope and informed decisions to make the most of your investment.' },
                { num: '06', title: 'Safety-focused operations', desc: 'A culture of care that protects our people, partners, and your project.' },
              ].map((item) => (
                <article key={item.num} className="why-item">
                  <span className="why-icon">
                    <svg viewBox="0 0 32 32">
                      <path d="M16 4 6 8v7c0 7 4 11 10 13 6-2 10-6 10-13V8L16 4Z" />
                      <path d="m11 16 3 3 7-7" />
                    </svg>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <b>{item.num}</b>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS SECTION ── */}
        <section className="process-section section-pad" id="process">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-line"></span> OUR WORKING PROCESS
                </span>
                <h2>From first hello to <span>final handover.</span></h2>
              </div>
              <p>Good work comes from a clear process. Here's how we make a big undertaking feel manageable.</p>
            </div>
            <div className="process-grid">
              {[
                { step: '01', title: 'Consultation', desc: 'We listen closely, ask the right questions, and get to know what success means to you.' },
                { step: '02', title: 'Planning & design', desc: 'We shape the scope, align the team, and build a practical plan before work begins.' },
                { step: '03', title: 'Construction', desc: 'Our people coordinate every detail and bring your project to life with care.' },
                { step: '04', title: 'Final delivery', desc: 'We walk through the finished work together and make sure you\'re ready to move in.' },
              ].map((proc) => (
                <article key={proc.step} className="process-step">
                  <div className="step-top">
                    <span className="step-number">{proc.step}</span>
                    <span className="step-icon">
                      <svg viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="11" />
                        <path d="M16 9v7l5 3" />
                      </svg>
                    </span>
                  </div>
                  <h3>{proc.title}</h3>
                  <p>{proc.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS SECTION ── */}
        <section className="testimonials-section section-pad" id="testimonials">
          <div className="container testimonial-layout">
            <div className="testimonial-intro">
              <span className="eyebrow">
                <span className="eyebrow-line"></span> PARTNERS IN THE PROCESS
              </span>
              <h2>Good work is<br /><span>built together.</span></h2>
              <p>Every successful project begins with listening and grows through trust.</p>
              <div className="slider-controls">
                <button
                  type="button"
                  className="slider-button"
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  ←
                </button>
                <span className="slider-count">
                  <b>{String(activeTestimonial + 1).padStart(2, '0')}</b> <i>/</i> <span>03</span>
                </span>
                <button
                  type="button"
                  className="slider-button"
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                >
                  →
                </button>
              </div>
              <p className="fictional-note">Fictional demo testimonials — illustrative presentation.</p>
            </div>

            <div className="testimonial-stage">
              <article className="testimonial-slide">
                <div className="quote-mark">“</div>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
                <div className="client-profile">
                  <div className={`client-avatar ${testimonials[activeTestimonial].avatarClass}`}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <strong>{testimonials[activeTestimonial].author}</strong>
                    <span>{testimonials[activeTestimonial].role}</span>
                  </div>
                  <span className="client-type">DEMO PROFILE</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="cta-section">
          <div className="cta-bg" role="img" aria-label="Modern construction project at sunset"></div>
          <div className="cta-overlay"></div>
          <div className="container cta-content">
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-line"></span> YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h2>Ready to build something <span>exceptional?</span></h2>
            <p>Let's turn your construction vision into reality. Our team is ready to discuss your next project.</p>
            <a className="button button-gold" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
              Start your project <span>↗</span>
            </a>
          </div>
        </section>

        {/* ── CONTACT FORM SECTION ── */}
        <section className="contact-section section-pad" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">
                <span className="eyebrow-line"></span> LET'S MAKE IT HAPPEN
              </span>
              <h2>Tell us what<br />you're <span>building.</span></h2>
              <p>Share a little about your project and we'll be in touch to talk through what's possible.</p>
              <div className="contact-details">
                <div>
                  <span className="contact-symbol">↗</span>
                  <p>
                    <small>WHATSAPP ONLY</small>
                    <span>
                      <a
                        href="https://wa.me/14127693968"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        +1 (412) 769-3968
                      </a>
                    </span>
                  </p>
                </div>
                <div>
                  <span className="contact-symbol">@</span>
                  <p>
                    <small>EMAIL US</small>
                    <span>projects@alvoratechhq.com</span>
                  </p>
                </div>
                <div>
                  <span className="contact-symbol">⌖</span>
                  <p>
                    <small>OUR LOCATION</small>
                    <span>500 Construction Way, Suite 400</span>
                  </p>
                </div>
              </div>
            </div>

            <form className="inquiry-form" onSubmit={handleFormSubmit}>
              <div className="form-heading">
                <h3>Start a conversation</h3>
                <span>ALL FIELDS MARKED * ARE REQUIRED</span>
              </div>
              <div className="form-row">
                <label>
                  Full name *
                  <input name="name" type="text" placeholder="Your name" required minLength="2" />
                </label>
                <label>
                  Email address *
                  <input name="email" type="email" placeholder="you@example.com" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  WhatsApp / Phone number
                  <input name="phone" type="tel" placeholder="Your WhatsApp or phone number" />
                </label>
                <label>
                  Project type *
                  <select name="projectType" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>General contracting</option>
                    <option>Commercial construction</option>
                    <option>Residential construction</option>
                    <option>Building renovation</option>
                    <option>Project management</option>
                    <option>Design & build</option>
                    <option>Roofing services</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label>
                Tell us about your project *
                <textarea
                  name="description"
                  rows="4"
                  placeholder="A few details about what you have in mind..."
                  required
                  minLength="5"
                ></textarea>
              </label>
              <div className="form-footer">
                <p>Demo form only. In production, this sends an instant SMS and email to your estimators.</p>
                <button className="button button-dark" type="submit">
                  Submit inquiry <span>↗</span>
                </button>
              </div>
              {formSubmitted && (
                <div className="form-message">
                  ✓ Inquiry logged in demonstration preview!
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home" onClick={(e) => scrollTo(e, 'home')}>
              <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 44 44">
                  <path d="M5 36 21.8 7 39 36h-8.2l-9-15.5L13 36H5Z" />
                  <path d="M17 29h17" className="mark-cut" />
                </svg>
              </span>
              <span className="brand-name">
                alvora<span>tech</span>
                <small>BUILDING WITH PURPOSE</small>
              </span>
            </a>
            <p>Building with purpose, integrity, and a commitment to work that lasts.</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About us</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Our services</a>
            <a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Selected work</a>
            <a href="#process" onClick={(e) => scrollTo(e, 'process')}>Our process</a>
          </div>
          <div className="footer-column">
            <h3>Our services</h3>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>General contracting</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Commercial build</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Residential design</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Renovations</a>
          </div>
          <div className="footer-column footer-contact">
            <h3>Get in touch</h3>
            <a href="https://wa.me/14127693968" target="_blank" rel="noopener noreferrer">
              WHATSAPP ONLY: +1 (412) 769-3968
            </a>
            <span>EMAIL: projects@alvoratechhq.com</span>
            <a className="footer-quote" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
              Tell us about your project <span>↗</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2026 Alvoratech. All rights reserved.</span>
            <span>DEMO WEBSITE · ALL PROJECTS, FIGURES &amp; TESTIMONIALS ARE ILLUSTRATIVE</span>
            <a href="#home" onClick={(e) => scrollTo(e, 'home')}>BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>

      {/* ── PROJECT DETAILS MODAL ── */}
      {selectedProject && (
        <div className="contractor-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="contractor-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="dialog-close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="dialog-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="dialog-content">
              <span className="eyebrow">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <a
                className="button button-dark"
                href="#contact"
                onClick={(e) => {
                  setSelectedProject(null);
                  scrollTo(e, 'contact');
                }}
              >
                Discuss a similar project <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

