import React, { useState } from 'react';
import DemoTopBar from '../DemoTopBar';
import './dental-care.css';

export default function DentalCare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="dental-care-demo" id="home">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="Apex Dental Care" />

      {/* Demo Notice Banner */}
      <div className="demo-banner" role="note">
        <i className="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span><strong>DEMO WEBSITE</strong> — Sample healthcare website template created by Alvoratech.</span>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home" onClick={(e) => scrollTo(e, 'home')}>
            <span className="brand-mark" aria-hidden="true">
              <i className="fa-solid fa-tooth"></i>
            </span>
            <span className="brand-name">
              apex<span> dental care</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => scrollTo(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About Us</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Services</a>
            <a href="#technology" onClick={(e) => scrollTo(e, 'technology')}>Technology</a>
            <a href="#reviews" onClick={(e) => scrollTo(e, 'reviews')}>Patient Reviews</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
            <a className="button button-small nav-cta glowing-btn" href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
              Book an Appointment <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ── HERO ── */}
        <section className="hero section-wrap" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> A better kind of dental visit
            </div>
            <h1>
              Your Comfort,<br />Our <span>Priority.</span>
            </h1>
            <p className="hero-location">Modern Family &amp; Cosmetic Dentistry</p>
            <p className="hero-copy">
              Experience gentle, state-of-the-art dental care tailored for your whole family, from routine cleanings to advanced smile transformations.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="button" onClick={(e) => scrollTo(e, 'contact')}>
                Schedule Your Visit <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#services" className="button button-outline" onClick={(e) => scrollTo(e, 'services')}>
                Explore Services
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="" />
              </div>
              <div>
                <strong>Good care. Great smiles.</strong>
                <span>Trusted by hundreds of local families</span>
              </div>
              <div className="proof-rating">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <strong>5.0</strong>
                <span>Google rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame floating-anim">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Bright, welcoming modern dental clinic"
              />
            </div>
            <div className="image-note">
              <span className="note-icon">
                <i className="fa-solid fa-heart" aria-hidden="true"></i>
              </span>
              <span>
                <strong>Care that feels different</strong>
                <small>Thoughtful from hello to follow-up</small>
              </span>
            </div>
            <div className="hero-image-index" aria-hidden="true">
              01 <span></span> 03
            </div>
          </div>

          <div className="hero-trust" aria-label="Practice highlights">
            <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> 5-Star Rated on Google</span>
            <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Same-Day Emergency Care</span>
            <span><i className="fa-solid fa-circle-check" aria-hidden="true"></i> Accepting New Patients</span>
          </div>
        </section>

        {/* ── INTRO STRIP ── */}
        <section className="intro-strip" aria-label="Our promise">
          <div className="intro-strip-inner">
            <span>Care with intention</span><i className="fa-solid fa-plus" aria-hidden="true"></i>
            <span>Comfort without compromise</span><i className="fa-solid fa-plus" aria-hidden="true"></i>
            <span>Confidence that lasts</span>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about-section section-wrap" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85"
              alt="Dental care team welcoming a patient into a bright treatment room"
              loading="lazy"
            />
            <div className="about-image-caption">
              <i className="fa-solid fa-sparkles" aria-hidden="true"></i> A little more human. A lot more you.
            </div>
          </div>
          <div className="about-copy">
            <span className="section-kicker">A practice built around you</span>
            <h2>Because going to the dentist should feel <em>good.</em></h2>
            <p>
              We believe great dentistry starts with listening. Our dedicated team pairs thoughtful, personal care with the latest technology—so every visit feels clear, calm, and entirely on your terms.
            </p>
            <a href="#technology" className="text-link" onClick={(e) => scrollTo(e, 'technology')}>
              Get to know our approach <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <div className="about-stat">
              <strong>01</strong>
              <span>One friendly team, here for every chapter of your smile.</span>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services section-wrap section-tint" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Care for every smile</span>
              <h2>Expert care, made personal.</h2>
            </div>
            <p>Whether it’s your twice-a-year visit or the smile you’ve been dreaming of, we make the next step feel simple.</p>
          </div>

          <div className="services-grid">
            {[
              {
                id: '01',
                title: 'Preventive Care & Cleanings',
                desc: 'Thoughtful checkups, gentle cleanings, and digital X-rays to keep your smile feeling its best.',
                icon: 'fa-tooth',
                image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=720&q=80',
              },
              {
                id: '02',
                title: 'Cosmetic Dentistry',
                desc: 'Professional whitening, custom veneers, and smile makeovers designed around you.',
                icon: 'fa-wand-magic-sparkles',
                image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=720&q=80',
              },
              {
                id: '03',
                title: 'Implants & Restorations',
                desc: 'Beautifully natural-looking solutions that restore your confidence and comfort.',
                icon: 'fa-shield-heart',
                image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=720&q=80',
              },
              {
                id: '04',
                title: 'Orthodontics & Aligners',
                desc: 'Subtle, comfortable clear aligners that fit your life while straightening your smile.',
                icon: 'fa-face-smile',
                image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=720&q=80',
              },
              {
                id: '05',
                title: 'Emergency Dental Care',
                desc: 'When the unexpected happens, our team is here with prompt, compassionate care.',
                icon: 'fa-kit-medical',
                image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=720&q=80',
              },
            ].map((srv) => (
              <article key={srv.id} className="service-card">
                <div className="service-photo">
                  <img src={srv.image} alt={srv.title} loading="lazy" />
                  <span className="service-number">{srv.id}</span>
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <i className={`fa-solid ${srv.icon}`} aria-hidden="true"></i>
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setSelectedService(srv.title);
                      scrollTo(e, 'contact');
                    }}
                  >
                    Learn more <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── TECHNOLOGY ── */}
        <section className="technology-section section-wrap" id="technology">
          <div className="tech-image">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1100&q=85"
              alt="Advanced digital dental technology in a calm, modern treatment room"
              loading="lazy"
            />
            <div className="tech-image-label">
              <span className="pulse-dot"></span> Thoughtfully advanced
            </div>
          </div>
          <div className="tech-content">
            <span className="section-kicker">A calmer kind of care</span>
            <h2>Modern technology.<br /><em>More peace of mind.</em></h2>
            <p>
              Innovative tools help us make your care more precise, more comfortable, and easier to understand at every step.
            </p>
            <div className="tech-features">
              <div className="tech-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-cube" aria-hidden="true"></i></span>
                <div>
                  <h3>Digital 3D Scans</h3>
                  <p>Quick, comfortable digital impressions—no messy molds.</p>
                </div>
              </div>
              <div className="tech-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-feather-pointed" aria-hidden="true"></i></span>
                <div>
                  <h3>Comfort-First Options</h3>
                  <p>Gentle techniques and personalized comfort options.</p>
                </div>
              </div>
              <div className="tech-feature-item">
                <span className="feature-icon"><i className="fa-solid fa-mug-hot" aria-hidden="true"></i></span>
                <div>
                  <h3>Little Luxuries</h3>
                  <p>Warm blankets, headphones, and a moment to settle in.</p>
                </div>
              </div>
              <div className="tech-feature-item">
                <span className="feature-icon"><i className="fa-regular fa-credit-card" aria-hidden="true"></i></span>
                <div>
                  <h3>Flexible Financing</h3>
                  <p>Clear estimates and flexible ways to plan your care.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="reviews-section section-tint" id="reviews">
          <div className="section-wrap">
            <div className="section-heading reviews-heading">
              <div>
                <span className="section-kicker">A little love from our patients</span>
                <h2>Smiles say it best.</h2>
              </div>
              <div className="reviews-rating">
                <span className="rating-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <strong>5.0</strong>
                <small>Patient-rated care</small>
              </div>
            </div>
            <div className="reviews-grid">
              <article className="review-card">
                <div className="review-top">
                  <span className="rating-stars">★★★★★</span>
                  <i className="fa-brands fa-google" aria-hidden="true"></i>
                </div>
                <blockquote>“I’ve always had dental anxiety, but everyone at Apex made me feel so comfortable. I actually look forward to my cleanings now.”</blockquote>
                <div className="reviewer">
                  <span className="reviewer-avatar">SM</span>
                  <div><strong>Sarah M.</strong><small>Patient since 2022</small></div>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
              </article>

              <article className="review-card">
                <div className="review-top">
                  <span className="rating-stars">★★★★★</span>
                  <i className="fa-brands fa-google" aria-hidden="true"></i>
                </div>
                <blockquote>“My new smile looks so natural. The whole process was thoughtfully explained, and the team was wonderful from day one.”</blockquote>
                <div className="reviewer">
                  <span className="reviewer-avatar avatar-sage">DK</span>
                  <div><strong>David K.</strong><small>Patient since 2023</small></div>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
              </article>

              <article className="review-card">
                <div className="review-top">
                  <span className="rating-stars">★★★★★</span>
                  <i className="fa-brands fa-google" aria-hidden="true"></i>
                </div>
                <blockquote>“They fit me in the same day when I had an emergency. Kind, professional, and genuinely caring—exactly what you hope for.”</blockquote>
                <div className="reviewer">
                  <span className="reviewer-avatar avatar-blue">JR</span>
                  <div><strong>Jessica R.</strong><small>Patient since 2021</small></div>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── CONTACT / BOOKING ── */}
        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-info">
              <span className="section-kicker">Your next chapter starts here</span>
              <h2>Let’s make room for a brighter smile.</h2>
              <p>Tell us a little about what you need. Our friendly team will be in touch to find a time that works for you.</p>
              <p className="contact-phone">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>{' '}
                <a
                  href="https://wa.me/14127963968"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  +1 (412) 796-3968 (WhatsApp Only)
                </a>
              </p>
              <div className="office-details">
                <p>
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <span>240 Medical Plaza, Suite 300, Metro Health District</span>
                </p>
                <p>
                  <i className="fa-regular fa-clock" aria-hidden="true"></i>
                  <span>Monday–Friday, 8:00 am–5:00 pm<br />Saturday by appointment</span>
                </p>
                <p>
                  <i className="fa-regular fa-envelope" aria-hidden="true"></i>
                  <span>care@apexdentalcare.com</span>
                </p>
              </div>
              <p className="emergency-note">
                <i className="fa-solid fa-heart-pulse" aria-hidden="true"></i> Dental emergency? Message us on WhatsApp for same-day care.
              </p>
            </div>

            <form id="bookingForm" className="booking-form" onSubmit={handleBookingSubmit}>
              <div className="form-heading">
                <span className="section-kicker">We’ll take it from here</span>
                <h3>Request an appointment</h3>
                <p>Share a few details and we’ll be in touch soon.</p>
              </div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name <span>*</span></label>
                <input type="text" id="fullName" name="name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">WhatsApp / Phone Number <span>*</span></label>
                <input type="tel" id="phone" name="phone" required placeholder="Your WhatsApp or phone number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address <span>*</span></label>
                <input type="email" id="email" name="email" required placeholder="you@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed <span>*</span></label>
                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Select a service</option>
                  <option>Preventive Care & Cleanings</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Implants & Restorations</option>
                  <option>Orthodontics & Aligners</option>
                  <option>Emergency Dental Care</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <button type="submit" className="button form-submit">
                Request my appointment <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>
              <p className="form-disclaimer">
                Demonstration appointment form. In live deployment, synced with your practice management software.
              </p>

              {formSubmitted && (
                <div className="success-message" role="status">
                  <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
                  <span><strong>Thank you!</strong> Your appointment request has been logged in this demonstration preview.</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-content section-wrap">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home" onClick={(e) => scrollTo(e, 'home')}>
              <span className="brand-mark" aria-hidden="true">
                <i className="fa-solid fa-tooth"></i>
              </span>
              <span className="brand-name">
                apex<span> dental care</span>
              </span>
            </a>
            <p>Thoughtful, modern dentistry for the way you want to feel.</p>
          </div>
          <div className="footer-col">
            <h2>Explore</h2>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>About us</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>Our services</a>
            <a href="#technology" onClick={(e) => scrollTo(e, 'technology')}>Our approach</a>
            <a href="#reviews" onClick={(e) => scrollTo(e, 'reviews')}>Patient reviews</a>
          </div>
          <div className="footer-col">
            <h2>Visit us</h2>
            <p>240 Medical Plaza, Suite 300<br />Metro Health District</p>
            <p>Mon–Fri, 8:00 am–5:00 pm</p>
            <a href="https://wa.me/14127963968" target="_blank" rel="noopener noreferrer">
              +1 (412) 796-3968 (WhatsApp Only)
            </a>
          </div>
          <div className="footer-emergency">
            <span className="footer-emergency-icon">
              <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </span>
            <h2>Here when you need us.</h2>
            <p>For urgent dental concerns, message our office on WhatsApp for same-day emergency care.</p>
            <a
              href="https://wa.me/14127963968"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-demo-number"
              style={{ textDecoration: 'none' }}
            >
              +1 (412) 796-3968 (WhatsApp Only)
            </a>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <p>© 2026 Apex Dental Care <span>•</span> Alvora Tech Demo Template</p>
          <a href="#home" onClick={(e) => scrollTo(e, 'home')}>
            Back to top <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

