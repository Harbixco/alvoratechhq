# ALVORATECH – Residential & Commercial Painting Contractors

A custom-designed, high-converting, responsive website built for **Alvoratech**, a premier residential and commercial painting contractor specializing in interior painting, exterior coatings, kitchen cabinet factory spraying, deck staining, and architectural color consultation. Built strictly with **HTML5, CSS3, and modern Vanilla JavaScript (ES6+)** without external frameworks or third-party UI dependencies.

---

## 🎨 Project Overview

- **Business Name:** Alvoratech
- **Industry:** Residential & Commercial Painting Contractors, Cabinet Refinishing & Deck Staining
- **Phone / Direct Line:** `+1 (412) 796-3968`
- **WhatsApp Direct Channel:** [https://wa.me/message/RVTZQMFL7I6OH1](https://wa.me/message/RVTZQMFL7I6OH1)
- **Email:** `info@Alvoratechhq.com`
- **Location:** `*`
- **Design Aesthetic:** Deep Architectural Slate (`#0F172A`), Master Painter Cobalt (`#2563EB`), Vibrant Artisan Coral (`#F97316`), Clean Alabaster Off-White (`#F8FAFC`), and Pure White (`#FFFFFF`).

---

## 📁 Project Structure

```text
alvoratech/
│
├── index.html              # Semantic HTML5, Schema.org PaintingContractor JSON-LD, SEO metadata
│
├── css/
│   └── style.css           # Custom CSS3 (Tokens, Flex/Grid, Animations, Breakpoints)
│
├── js/
│   └── script.js           # Vanilla ES6+ (Color visualizer, Before/after slider, Lightbox, Estimator, FAQ)
│
├── assets/
│   ├── images/             # 30 high-resolution authentic painting contractor photographs
│   │   ├── paint-hero.jpg
│   │   ├── paint-about.jpg
│   │   ├── paint-why.jpg
│   │   ├── paint-cta-bg.jpg
│   │   ├── service-interior.jpg
│   │   ├── service-exterior.jpg
│   │   ├── service-cabinets.jpg
│   │   ├── service-commercial.jpg
│   │   ├── service-deck.jpg
│   │   ├── service-drywall.jpg
│   │   ├── service-color.jpg
│   │   ├── service-epoxy.jpg
│   │   ├── ba-cabinets-before.jpg / ba-cabinets-after.jpg
│   │   ├── ba-exterior-before.jpg / ba-exterior-after.jpg
│   │   ├── ba-living-before.jpg / ba-living-after.jpg
│   │   ├── ba-deck-before.jpg / ba-deck-after.jpg
│   │   ├── ba-commercial-before.jpg / ba-commercial-after.jpg
│   │   └── gallery-*.jpg
│   └── icons/              # Scalable SVG icons and badge graphics
│
└── README.md               # Project documentation and deployment guide
```

---

## ⚡ Key Architectural & Design Features

### 1. Mandatory Demo Banners (3 Separate Banners)
1. **Top Demo Banner (`.top-demo-banner`):** Positioned at the very top of the website above the navigation header with a distinct demo alert badge.
2. **Middle Demo Banner (`.middle-demo-banner`):** Positioned immediately following the core services section, showcasing digital client acquisition and instant WhatsApp consultation.
3. **Bottom Demo Banner (`.bottom-demo-banner`):** Placed directly before the footer with a "Chat With Us" CTA routing to WhatsApp.

### 2. Static Floating WhatsApp Bottom Banner
- **Element ID:** `#fixed-whatsapp-banner`
- **Position:** Pinned to viewport bottom-right (desktop) and centered bottom pill (mobile).
- **Behavior:** Persists across all scrolling actions across every section with `z-index: 9999`.
- **Content:** Contains **only** the official WhatsApp icon and phone number `+1 (412) 796-3968`, linking directly to `https://wa.me/message/RVTZQMFL7I6OH1`.

### 3. Dynamic Interactive Components (Vanilla JS)
- **Interactive Color Palette Visualizer:** Visitors can click trending designer architectural swatches (*Alabaster White, Naval Indigo, Modern Sage, Repose Greige, Charcoal Slate*) to see live wall canvas background color updates, hex code display, recommended finishes (Matte, Satin, Semi-Gloss), and ideal room applications.
- **5-Scenario Interactive Before & After Slider:** Draggable split-screen comparison slider allowing homeowners to inspect real transformations across Kitchen Cabinets, Home Exterior, Living Room, Weathered Deck, and Commercial Office.
- **5-Step Meticulous Prep Process:** Step-by-step visual roadmap illustrating why Alvoratech coatings outlast competitors (Masking, HEPA Dustless Sanding, Caulking, High-Adhesion Primer, Dual Finish Coats).
- **Certified Brand Partnerships:** Badges highlighting Sherwin-Williams®, Benjamin Moore®, Behr Pro®, and PPG Paints™.
- **Filterable Project Gallery with Lightbox Modal:** Categorized portfolio with filters (*All, Interior, Exterior, Kitchen Cabinets, Decks*) and an accessible full-screen inspection lightbox.
- **Interactive Painting Cost Estimator:** Real-time square footage slider providing preliminary price ranges and estimated job timelines with one-click WhatsApp estimate booking.
- **Verified Client Testimonials Carousel:** Auto-sliding testimonial track with dot pagination and demo review disclaimers.
- **6-Item FAQ Accordion:** Expandable questions addressing timelines, furniture moving, paint grades, cabinet spray processes, low-VOC safety, and warranties.
- **Fast Estimate Request Form:** Form validation with automated routing to WhatsApp with prefilled project information.

---

## 🚀 Local Setup & Testing

### Direct Browser Open
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Local HTTP Server (Recommended)
To run with an HTTP server:

```powershell
# Using Python
cd c:\Users\HP\Desktop\Templates\alvoratech
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🛡️ Strict Constraint Compliance
- **Frameworks:** 100% Vanilla HTML5, CSS3, and ES6+ JavaScript. No frameworks or external UI dependencies.
- **Contact Details:** Phone links use `tel:+14127963968`, WhatsApp links use `https://wa.me/message/RVTZQMFL7I6OH1`, and email links use `mailto:info@Alvoratechhq.com`.
- **Location:** Strictly and verbatim rendered as `*`.
- **Local Assets:** All 30 authentic photography assets are stored locally within `assets/images/`.
