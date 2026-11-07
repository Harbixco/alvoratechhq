import React, { useState, useEffect } from 'react';
import DemoTopBar from '../DemoTopBar';
import './personal-injury.css';

export default function PersonalInjury() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      client: "Sample Client A",
      tag: "FICTIONAL TESTIMONIAL"
    },
    {
      quote: "The explanations were clear, and I never felt rushed into a decision I didn't understand.",
      client: "Sample Client B",
      tag: "FICTIONAL TESTIMONIAL"
    },
    {
      quote: "Having a direct line to the attorney made a difficult time feel a little less overwhelming.",
      client: "Sample Client C",
      tag: "FICTIONAL TESTIMONIAL"
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
    if (!formData.demoConfirm) {
      setFormError('Please check the confirmation box to submit this demo request.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className={`personal-injury-demo ${mobileMenuOpen ? 'menu-open' : ''}`} id="top">
      {/* ── TOP DEMO BAR WITH RETURN BUTTON ── */}
      <DemoTopBar demoName="Alvoratech Personal Injury Counsel" />

      {/* Demo Website Notice Banner */}
      <div className="demo-banner" role="note">
        <span className="demo-banner__mark" aria-hidden="true">!</span>
        <span>DEMO WEBSITE <span className="demo-banner__dash">–</span> THIS IS A DESIGN DEMONSTRATION BY ALVORATECH</span>
      </div>

      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p>Personal injury counsel. Personally.</p>
          <div className="utility-bar__contact">
            <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>Call <span>(800) 555-0199</span></a>
            <span className="utility-bar__divider" aria-hidden="true"></span>
            <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>Email <span>counsel@alvoratechhq.com</span></a>
          </div>
        </div>
      </div>

      {/* Site Header */}
      <header className="site-header">
        <div className="container header__inner">
          <a className="brand" href="#top" onClick={(e) => scrollTo(e, 'top')} aria-label="Alvoratech home">
            <span className="brand__monogram" aria-hidden="true">A</span>
            <span className="brand__name">
              ALVORATECH
              <span>PERSONAL INJURY COUNSEL</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <nav className={`primary-nav ${mobileMenuOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>The Attorney</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>How I Help</a>
            <a href="#process" onClick={(e) => scrollTo(e, 'process')}>Your Case</a>
            <a href="#resources" onClick={(e) => scrollTo(e, 'resources')}>Resources</a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a>
            <a className="button button--small button--gold nav-cta" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
              Free Consultation <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ── HERO SECTION ── */}
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
              <p className="eyebrow eyebrow--light"><span></span> Independent counsel. A personal commitment.</p>
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

            <div className="hero__caption">
              <span>{heroSlides[heroSlide].caption}</span>
              <span className="hero__caption-rule"></span>
              <span className="hero__slide-count">
                <b>0{heroSlide + 1}</b> / 0{heroSlides.length}
              </span>
            </div>
          </div>
        </section>

        {/* ── WELCOME SECTION ── */}
        <section className="welcome section-pad" id="welcome">
          <div className="container welcome__grid">
            <div className="welcome__label">
              <p className="eyebrow"><span></span> A different kind of practice</p>
              <p className="welcome__number">01 <span>—</span> 04</p>
            </div>
            <div className="welcome__body">
              <h2>Big moments deserve <em>personal attention.</em></h2>
              <p className="welcome__lead">
                An injury can change the rhythm of your life. The legal process shouldn't make you feel like a number, too.
              </p>
              <p>
                At Alvoratech, you'll work directly with one attorney who takes the time to understand your concerns, explain your options, and build a thoughtful path forward.
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
        <section className="trust-strip" aria-label="Practice values">
          <div className="container trust-strip__inner">
            <div><span className="trust-icon" aria-hidden="true">✳</span><span>One-to-one attorney access</span></div>
            <div><span className="trust-icon" aria-hidden="true">✳</span><span>Clear, candid guidance</span></div>
            <div><span className="trust-icon" aria-hidden="true">✳</span><span>Focused personal representation</span></div>
            <div><span className="trust-icon" aria-hidden="true">✳</span><span>No fee unless recovery*</span></div>
          </div>
          <p className="trust-strip__note">*Illustrative website copy only. No attorney-client relationship is created by this demonstration.</p>
        </section>

        {/* ── ABOUT SECTION ── */}
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
              <div className="about__portrait-note">
                <span className="about__note-line"></span>
                <span>ALVORATECH / ATTORNEY PROFILE</span>
              </div>
              <div className="about__experience">
                <strong>01:01</strong>
                <span>One attorney<br />for your case</span>
              </div>
            </div>

            <div className="about__copy">
              <p className="eyebrow"><span></span> The person behind your case</p>
              <h2>Meet Alex<br /><em>Morgan<sup className="fiction-asterisk" aria-label="Demonstration profile">*</sup>.</em></h2>
              <p className="about__role">Founder &amp; Personal Injury Attorney <span className="fiction-tag">PRACTICE PROFILE</span></p>
              <p className="about__lead">A steady hand, a listening ear, and a lawyer who knows your name.</p>
              <p>
                Our practice is built around direct communication, careful preparation, and respect for the very real disruption an injury can bring.
              </p>
              <p>
                We personally guide each client through questions, decisions, and next steps—without handing the relationship off to a rotating cast of unfamiliar faces.
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
                Request a Consultation <span aria-hidden="true">↗</span>
              </a>
              <p className="micro-disclaimer">* Demonstration profile highlighting responsive law practice website architecture designed by Alvoratech.</p>
            </div>
          </div>
        </section>

        {/* ── PRACTICE AREAS ── */}
        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow"><span></span> How I can help</p>
                <h2>Focused guidance for<br /><em>life after an injury.</em></h2>
              </div>
              <p>Every situation is different. Explore common matters where our personal injury counsel can help you understand your options.</p>
            </div>

            <div className="services__grid">
              {[
                { title: 'Car Accidents', desc: 'Understand the steps to take after a collision and how an injury claim may move forward.', img: 'car-accident.jpg', num: '01' },
                { title: 'Truck Accidents', desc: 'Review complex questions involving commercial vehicles, evidence, and multiple parties.', img: 'truck.jpg', num: '02' },
                { title: 'Motorcycle Accidents', desc: 'Get clear guidance after a crash, with your recovery and next steps in focus.', img: 'motorcycle.jpg', num: '03' },
                { title: 'Pedestrian Accidents', desc: 'Explore your options after being injured while walking or crossing the road.', img: 'pedestrian.jpg', num: '04' },
                { title: 'Bicycle Accidents', desc: 'Learn how an injury claim may address the impact of a bicycle collision.', img: 'bicycle.jpg', num: '05' },
                { title: 'Slip & Fall Injuries', desc: 'Consider what to document and how property conditions may factor into a claim.', img: 'slip-fall.jpg', num: '06' },
                { title: 'Workplace Injuries', desc: 'Get help understanding workplace injury questions and the possible routes forward.', img: 'workplace.jpg', num: '07' },
                { title: 'Medical Malpractice', desc: 'Discuss concerns about care with a lawyer who can explain the review process.', img: 'medical.jpg', num: '08' },
                { title: 'Wrongful Death', desc: 'Compassionate counsel for families seeking answers after a devastating loss.', img: 'care.jpg', num: '09' },
                { title: 'Catastrophic Injuries', desc: 'Consider the long-term effects of a serious injury and what support may be needed.', img: 'medical.jpg', num: '10' },
                { title: 'Dog Bite Injuries', desc: 'Get practical guidance about documentation, care, and potential liability.', img: 'dog.jpg', num: '11' },
                { title: 'Product Liability', desc: 'Explore questions around an injury connected to a potentially unsafe product.', img: 'product.jpg', num: '12' },
              ].map((item, idx) => (
                <article key={idx} className="service-card">
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
        <section className="difference section-pad">
          <div className="difference__image" role="img" aria-label="Two professionals discussing case notes in an office"></div>
          <div className="difference__content">
            <p className="eyebrow eyebrow--light"><span></span> The Alvoratech difference</p>
            <h2>You won't have to wonder<br /><em>who's handling your case.</em></h2>
            <p>When you work with a solo attorney, the person who listens to your story is the person who guides your case. That's personal representation by design.</p>
            <ul className="difference__list">
              <li><span>01</span><div><strong>Direct communication</strong><p>Speak with the attorney responsible for your matter.</p></div></li>
              <li><span>02</span><div><strong>Personal attention</strong><p>Your concerns and priorities help shape the conversation.</p></div></li>
              <li><span>03</span><div><strong>Clear next steps</strong><p>Understand what comes next and why it matters.</p></div></li>
              <li><span>04</span><div><strong>Focused case handling</strong><p>Thoughtful preparation, with your individual circumstances in view.</p></div></li>
            </ul>
            <a className="text-link text-link--light" href="#process" onClick={(e) => scrollTo(e, 'process')}>
              See how the process works <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* ── CASE PROCESS ── */}
        <section className="process section-pad" id="process">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow"><span></span> A clear path forward</p>
              <h2>Your case, <em>step by step.</em></h2>
              <p>Every matter is unique, but knowing the general process can make the road ahead feel more manageable.</p>
            </div>
            <ol className="process__steps">
              <li className="process-step">
                <span className="process-step__number">01</span>
                <span className="process-step__icon" aria-hidden="true">◎</span>
                <h3>Initial consultation</h3>
                <p>Talk through the broad outline of what happened and ask your first questions.</p>
              </li>
              <li className="process-step">
                <span className="process-step__number">02</span>
                <span className="process-step__icon" aria-hidden="true">⌕</span>
                <h3>Case evaluation</h3>
                <p>Review the circumstances, discuss potential options, and identify what is still unknown.</p>
              </li>
              <li className="process-step">
                <span className="process-step__number">03</span>
                <span className="process-step__icon" aria-hidden="true">▤</span>
                <h3>Investigation &amp; review</h3>
                <p>Gather available records and evidence, then assess the facts relevant to your matter.</p>
              </li>
              <li className="process-step">
                <span className="process-step__number">04</span>
                <span className="process-step__icon" aria-hidden="true">↗</span>
                <h3>Negotiation &amp; advocacy</h3>
                <p>Communicate your position and pursue a resolution that reflects your claim.</p>
              </li>
              <li className="process-step">
                <span className="process-step__number">05</span>
                <span className="process-step__icon" aria-hidden="true">⚖</span>
                <h3>Resolution or trial</h3>
                <p>Consider settlement or, when appropriate, prepare to present the case in court.</p>
              </li>
            </ol>
            <p className="process__note">The process depends on the facts, applicable law, and the parties involved. This overview is general information.</p>
          </div>
        </section>

        {/* ── RESULTS & RECOGNITION ── */}
        <section className="results section-pad">
          <div className="container results__inner">
            <div className="results__copy">
              <p className="eyebrow eyebrow--light"><span></span> Results &amp; recognition</p>
              <h2>Every person's story<br />is <em>more than a number.</em></h2>
              <p>Past results do not guarantee future outcomes. In every case, our focus is on thorough preparation, honest advocacy, and achieving justice for injured clients.</p>
              <p>We work tirelessly to ensure every client receives attentive, dedicated legal support tailored to their recovery needs.</p>
            </div>
            <div className="results__cards">
              <article className="result-card">
                <span>ILLUSTRATIVE CASE RECOVERY</span>
                <strong>$425,000</strong>
                <p>Sample motor vehicle injury claim</p>
                <i>Fictional settlement example for layout demonstration</i>
              </article>
              <article className="result-card">
                <span>PRACTICE DEDICATION</span>
                <strong>12+ yrs</strong>
                <p>Demonstrated industry experience</p>
                <i>Deep focus on personal injury and tort law</i>
              </article>
              <article className="result-card">
                <span>CLIENT COMMITMENT</span>
                <strong>100%</strong>
                <p>Direct attorney engagement</p>
                <i>Zero hand-offs to junior case managers</i>
              </article>
            </div>
          </div>
          <div className="container results__disclaimer">
            All figures and descriptions in this section are illustrative design examples. No outcome is guaranteed.
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="testimonials section-pad" aria-labelledby="testimonial-title">
          <div className="container testimonials__inner">
            <div className="testimonials__aside">
              <p className="eyebrow"><span></span> A personal experience</p>
              <h2 id="testimonial-title">Words that<br /><em>would matter.</em></h2>
              <p>Client feedback highlighting clear communication, compassionate representation, and peace of mind.</p>
              <div className="carousel-controls">
                <button
                  type="button"
                  className="carousel-arrow"
                  aria-label="Previous testimonial"
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  ←
                </button>
                <span className="carousel-count">
                  <b>0{testimonialIndex + 1}</b> / 0{testimonials.length}
                </span>
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

            <div className="testimonial-carousel" aria-roledescription="carousel" aria-label="Sample testimonials">
              <article className="testimonial-slide is-active">
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>“{testimonials[testimonialIndex].quote}”</blockquote>
                <p className="testimonial-slide__name">
                  {testimonials[testimonialIndex].client} <span>{testimonials[testimonialIndex].tag}</span>
                </p>
              </article>
              <p className="testimonial-disclaimer">Fictional sample testimonials for design demonstration only.</p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq section-pad" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro">
              <p className="eyebrow"><span></span> Helpful answers</p>
              <h2>Questions worth<br /><em>asking.</em></h2>
              <p>General information can help you prepare. Your own situation may call for advice from a qualified attorney in your jurisdiction.</p>
              <a className="text-link" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Ask about a consultation <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="faq__list">
              {[
                { q: "What should I do after an accident?", a: "If you can, prioritize immediate safety and medical attention. Consider documenting what happened, keeping relevant records, and speaking with a qualified local attorney before making decisions about a claim." },
                { q: "How much does a personal injury attorney cost?", a: "Fee arrangements vary. Most personal injury matters are handled on a contingency-fee basis, meaning legal fees are only paid if there is a successful recovery." },
                { q: "How long does a personal injury case take?", a: "Timing varies with the facts, medical treatment duration, insurance response times, and whether litigation is filed. An attorney can evaluate your specific timeline." },
                { q: "What happens during a free consultation?", a: "A first conversation covers a high-level account of what happened, your questions, and potential next steps without any pressure or obligation." },
                { q: "Can I pursue compensation for my injuries?", a: "Potential claims depend on the circumstances and applicable negligence law. A consultation can help evaluate liability, damages, and available insurance coverage." },
                { q: "What if the other party does not have insurance?", a: "There may still be options through Uninsured/Underinsured Motorist (UM/UIM) coverage or other responsible third parties." }
              ].map((faq, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary><span>{faq.q}</span><i aria-hidden="true"></i></summary>
                  <div className="faq-item__answer"><p>{faq.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESOURCES & GUIDES ── */}
        <section className="resources section-pad" id="resources">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow"><span></span> Notes for the road ahead</p>
                <h2>Knowledge brings<br /><em>clarity.</em></h2>
              </div>
              <p>Educational resources can help you ask informed questions during your initial legal evaluation.</p>
            </div>

            <div className="resource-grid">
              <article className="resource-card">
                <a className="resource-card__image" href="#faq" onClick={(e) => scrollTo(e, 'faq')}>
                  <img src="/demos/personal-injury/images/legal-documents.jpg" alt="Legal papers on a desk" loading="lazy" width="720" height="480" />
                  <span>01 / START HERE</span>
                </a>
                <div className="resource-card__body">
                  <p className="resource-card__category">PERSONAL INJURY BASICS</p>
                  <h3>Understanding a personal injury claim</h3>
                  <p>A plain-language look at common stages and the questions to bring to an initial consultation.</p>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="text-link">Read the guide <span aria-hidden="true">→</span></a>
                </div>
              </article>

              <article className="resource-card">
                <a className="resource-card__image" href="#faq" onClick={(e) => scrollTo(e, 'faq')}>
                  <img src="/demos/personal-injury/images/road.jpg" alt="Open road in daylight" loading="lazy" width="720" height="480" />
                  <span>02 / AFTER A COLLISION</span>
                </a>
                <div className="resource-card__body">
                  <p className="resource-card__category">CAR ACCIDENTS</p>
                  <h3>What to do after a car accident</h3>
                  <p>Practical considerations for safety, police reporting, documentation, and obtaining care.</p>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="text-link">Read the guide <span aria-hidden="true">→</span></a>
                </div>
              </article>

              <article className="resource-card">
                <a className="resource-card__image" href="#faq" onClick={(e) => scrollTo(e, 'faq')}>
                  <img src="/demos/personal-injury/images/insurance.jpg" alt="Person reviewing paperwork" loading="lazy" width="720" height="480" />
                  <span>03 / COVERAGE &amp; CLAIMS</span>
                </a>
                <div className="resource-card__body">
                  <p className="resource-card__category">INSURANCE</p>
                  <h3>Understanding insurance claims</h3>
                  <p>Learn about common adjustor tactics and why independent legal review protects your rights.</p>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="text-link">Read the guide <span aria-hidden="true">→</span></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── CONSULTATION FORM ── */}
        <section className="consultation section-pad" id="consultation">
          <div className="container consultation__grid">
            <div className="consultation__copy">
              <p className="eyebrow eyebrow--light"><span></span> Start with a conversation</p>
              <h2>Let's talk about<br /><em>what comes next.</em></h2>
              <p>A first conversation can help you understand whether legal guidance may be useful. There is no fee or obligation to proceed.</p>
              <div className="consultation__contact">
                <div><span>PHONE</span><a href="tel:8005550199">(800) 555-0199</a></div>
                <div><span>EMAIL</span><a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a></div>
              </div>
              <div className="consultation__notice">
                <span aria-hidden="true">i</span>
                <p>Interactive Demo Form: Submitting this form displays a success confirmation for template testing.</p>
              </div>
            </div>

            <form className="consultation-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-intro">
                <span>CONFIDENTIAL CONSULTATION</span>
                <p>Request a private evaluation with attorney Alex Morgan.</p>
              </div>

              <div className="form-row">
                <label>
                  Full name <span>*</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    maxLength={100}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email address <span>*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={254}
                    placeholder="yourname@example.com"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Phone number <span>*</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    maxLength={30}
                    placeholder="(555) 000-0000"
                  />
                </label>
                <label>
                  Type of accident or injury
                  <select name="matter" value={formData.matter} onChange={handleInputChange}>
                    <option value="">Select a topic</option>
                    <option>Car accident</option>
                    <option>Truck accident</option>
                    <option>Motorcycle accident</option>
                    <option>Pedestrian or bicycle accident</option>
                    <option>Slip and fall</option>
                    <option>Workplace injury</option>
                    <option>Other injury</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>
                  Preferred consultation date
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Best way to reach you
                  <select name="contactMethod" value={formData.contactMethod} onChange={handleInputChange}>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>No preference</option>
                  </select>
                </label>
              </div>

              <label>
                Brief message <span className="label-optional">OPTIONAL</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  maxLength={400}
                  placeholder="A short note regarding your incident date and location."
                ></textarea>
              </label>

              <label className="form-consent">
                <input
                  type="checkbox"
                  name="demoConfirm"
                  checked={formData.demoConfirm}
                  onChange={handleInputChange}
                />
                <span>I understand this is a live demonstration template created by Alvoratech. <b>*</b></span>
              </label>

              {formError && (
                <p className="form-error" role="alert" style={{ display: 'block', color: '#ffb3ba', marginTop: '12px' }}>
                  {formError}
                </p>
              )}

              {formSubmitted && (
                <div
                  className="form-success"
                  role="status"
                  style={{
                    display: 'block',
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid #22c55e',
                    padding: '16px',
                    borderRadius: '4px',
                    color: '#86efac',
                    marginTop: '16px',
                    fontSize: '13px'
                  }}
                >
                  <strong>Consultation Request Received!</strong><br />
                  Thank you, {formData.name || 'Friend'}. This interactive demonstration form has successfully verified your inquiry.
                </div>
              )}

              <button type="submit" className="button button--gold button--form" style={{ marginTop: '18px' }}>
                Submit Consultation Request <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </section>

        {/* ── CONTACT & LOCATION ── */}
        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact__top">
              <div>
                <p className="eyebrow"><span></span> Here when you need a conversation</p>
                <h2>Reach out.<br /><em>Start with a hello.</em></h2>
              </div>
              <a className="button button--outline" href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>
                Request a consultation <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contact__grid">
              <div className="contact-detail">
                <span>PHONE</span>
                <a href="tel:8005550199">(800) 555-0199</a>
                <p>Call to schedule a private evaluation</p>
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
                <p>Monday–Friday: 8:30 AM – 6:00 PM<br />Emergency line available 24/7</p>
                <p>Weekend consultations by appointment</p>
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
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="container footer__main">
          <div className="footer__brand">
            <a className="brand brand--footer" href="#top" onClick={(e) => scrollTo(e, 'top')}>
              <span className="brand__monogram" aria-hidden="true">A</span>
              <span className="brand__name">
                ALVORATECH
                <span>PERSONAL INJURY COUNSEL</span>
              </span>
            </a>
            <p>Personal injury counsel.<br />Personally.</p>
            <span className="footer__demo">ALVORATECH CLIENT TEMPLATE SHOWCASE</span>
          </div>

          <div className="footer__column">
            <h2>Explore</h2>
            <a href="#about" onClick={(e) => scrollTo(e, 'about')}>The Attorney</a>
            <a href="#services" onClick={(e) => scrollTo(e, 'services')}>How I Help</a>
            <a href="#process" onClick={(e) => scrollTo(e, 'process')}>Your Case</a>
            <a href="#resources" onClick={(e) => scrollTo(e, 'resources')}>Resources</a>
          </div>

          <div className="footer__column">
            <h2>Contact</h2>
            <a href="tel:8005550199">(800) 555-0199</a>
            <a href="mailto:counsel@alvoratechhq.com">counsel@alvoratechhq.com</a>
            <p>Suite 400, Metro Legal Plaza</p>
            <a href="#consultation" onClick={(e) => scrollTo(e, 'consultation')}>Request a consultation ↗</a>
          </div>

          <div className="footer__column footer__disclaimer">
            <h2>Alvora Tech Demo</h2>
            <p>Designed and built for high-converting legal practices. Optimized for responsive speed, local search visibility, and mobile conversions.</p>
            <a href="/" style={{ color: '#dfc28f', fontWeight: 'bold' }}>← Back to Alvora Tech Main Site</a>
          </div>
        </div>

        <div className="footer__bottom" id="legal-disclaimer">
          <div className="container footer__bottom-inner">
            <p>© {new Date().getFullYear()} Alvoratech · Professional Legal Practice Template</p>
            <a href="#top" onClick={(e) => scrollTo(e, 'top')} className="back-to-top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
