const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu-wrap');
const menuLinks = document.querySelectorAll('.nav-menu a');
const faqItems = document.querySelectorAll('.faq-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const backToTop = document.querySelector('.back-to-top');
const contactForm = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  if (!button) return;

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    faqItems.forEach((faq) => {
      faq.classList.remove('active');
      const question = faq.querySelector('.faq-question');
      if (question) question.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle('active', item === button));

    galleryItems.forEach((item) => {
      const matches = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !matches);
    });
  });
});

function openLightbox(source, altText) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = source;
  lightboxImg.alt = altText;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  lightboxImg.alt = '';
}

galleryItems.forEach((item) => {
  const image = item.querySelector('img');
  if (!image) return;

  item.addEventListener('click', () => openLightbox(image.src, image.alt));
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

let currentSlide = 0;

function showSlide(index) {
  if (!testimonialItems.length) return;
  currentSlide = (index + testimonialItems.length) % testimonialItems.length;

  testimonialItems.forEach((item, idx) => {
    item.classList.toggle('active', idx === currentSlide);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlide);
  });
}

const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

if (testimonialItems.length) {
  setInterval(() => showSlide(currentSlide + 1), 5000);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop?.classList.add('show');
  } else {
    backToTop?.classList.remove('show');
  }
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const fullName = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!fullName || !email || !phone || !service || !message) {
      setFormMessage('Please fill in all required fields before submitting.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormMessage('Please enter a valid email address.', 'error');
      return;
    }

    if (message.length < 12) {
      setFormMessage('Please provide a more detailed project description.', 'error');
      return;
    }

    setFormMessage('Your request has been prepared successfully. Please contact Alvoratech on WhatsApp to complete the form submission.', 'success');
    contactForm.reset();
  });
}

function setFormMessage(text, type) {
  if (!formMessage) return;
  formMessage.textContent = text;
  formMessage.className = 'form-message';
  formMessage.classList.add(type);
}
