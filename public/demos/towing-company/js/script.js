document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");
  const revealItems = document.querySelectorAll(".reveal");

  const updateHeaderState = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  const setMenuState = (isOpen) => {
    if (!header || !navToggle) return;
    header.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = header && header.classList.contains("menu-open");
      setMenuState(!isOpen);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16 }
      )
    : null;

  revealItems.forEach((item) => {
    if (revealObserver) {
      revealObserver.observe(item);
    } else {
      item.classList.add("is-visible");
    }
  });

  const updateActiveNav = () => {
    const offset = 150;
    let currentId = "home";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isActive);
    });
  };

  updateActiveNav();
  window.addEventListener("scroll", updateActiveNav, { passive: true });

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      faqItems.forEach((entry) => {
        const question = entry.querySelector(".faq-question");
        if (!question) return;
        question.setAttribute("aria-expanded", "false");
        entry.classList.remove("active");
      });

      if (!isExpanded) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".slider-btn--prev");
  const nextButton = document.querySelector(".slider-btn--next");
  let activeSlide = 0;

  const showSlide = (index) => {
    if (!testimonialCards.length) return;
    activeSlide = (index + testimonialCards.length) % testimonialCards.length;
    testimonialCards.forEach((card, idx) => {
      card.classList.toggle("is-active", idx === activeSlide);
    });
  };

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => showSlide(activeSlide - 1));
    nextButton.addEventListener("click", () => showSlide(activeSlide + 1));
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.querySelector(".lightbox-close");

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    if (lightboxImage) lightboxImage.src = "";
  };

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      const fullImage = item.getAttribute("data-full");
      lightboxImage.src = fullImage || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const setStatus = (message, type) => {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.remove("is-error", "is-success");
    if (type) formStatus.classList.add(type);
  };

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullName");
      const whatsapp = document.getElementById("whatsapp");
      const vehicleType = document.getElementById("vehicleType");
      const serviceRequired = document.getElementById("serviceRequired");
      const location = document.getElementById("location");
      const description = document.getElementById("description");

      const fields = [fullName, whatsapp, vehicleType, serviceRequired, location, description];
      let hasError = false;

      fields.forEach((field) => {
        if (!field) return;
        field.setAttribute("aria-invalid", "false");
      });

      if (!fullName || !fullName.value.trim()) {
        hasError = true;
        fullName?.setAttribute("aria-invalid", "true");
      }

      if (!whatsapp || !whatsapp.value.trim()) {
        hasError = true;
        whatsapp?.setAttribute("aria-invalid", "true");
      }

      if (!vehicleType || !vehicleType.value.trim()) {
        hasError = true;
        vehicleType?.setAttribute("aria-invalid", "true");
      }

      if (!serviceRequired || !serviceRequired.value.trim()) {
        hasError = true;
        serviceRequired?.setAttribute("aria-invalid", "true");
      }

      if (!location || !location.value.trim()) {
        hasError = true;
        location?.setAttribute("aria-invalid", "true");
      }

      if (!description || !description.value.trim()) {
        hasError = true;
        description?.setAttribute("aria-invalid", "true");
      }

      if (hasError) {
        setStatus("Please complete all required fields before sending your request.", "is-error");
        return;
      }

      const message = [
        "Hello Alvoratech,",
        "",
        `Full Name: ${fullName.value.trim()}`,
        `WhatsApp Number: ${whatsapp.value.trim()}`,
        `Vehicle Type: ${vehicleType.value.trim()}`,
        `Service Required: ${serviceRequired.value.trim()}`,
        `Current Location: ${location.value.trim()}`,
        "",
        "Description of Assistance Needed:",
        description.value.trim()
      ].join("\n");

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/message/RVTZQMFL7I6OH1?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      form.reset();
      setStatus("Your request was prepared in WhatsApp. Please review and send it.", "is-success");
    });
  }
});
