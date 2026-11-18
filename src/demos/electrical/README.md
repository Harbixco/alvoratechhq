# ALVORATECH – Premier Residential & Commercial Electrical Contractors

A custom-designed, high-converting, responsive website built for **Alvoratech**, an established licensed electrical contracting firm specializing in 24/7 emergency dispatch, 200A/400A service panel heavy-ups, Tesla EV Level 2 charging stations, Generac whole-home standby generators, and commercial three-phase power. Built exclusively with **HTML5, CSS3, and modern Vanilla JavaScript (ES6+)** without external frameworks or third-party UI dependencies.

---

## ⚡ Project Overview

- **Business Name:** Alvoratech
- **Industry:** Licensed Residential & Commercial Electrical Contracting
- **Phone / 24/7 Emergency Line:** `+1 (412) 796-3968`
- **WhatsApp Direct Channel:** [https://wa.me/message/RVTZQMFL7I6OH1](https://wa.me/message/RVTZQMFL7I6OH1)
- **Email:** `info@Alvoratechhq.com`
- **Location:** `*`
- **Design Aesthetic:** Deep Substation Graphite (`#0B132B` / `#050814`), High-Voltage Safety Amber (`#F59E0B` / `#D97706`), Precision Cobalt (`#2563EB`), Clean Off-White (`#F8FAFC`), and Pure White (`#FFFFFF`).

---

## 📁 Project Structure

```text
alvoratech/
│
├── index.html              # Semantic HTML5, Schema.org Electrician JSON-LD, SEO metadata
│
├── css/
│   └── style.css           # Custom CSS3 (Tokens, Flex/Grid, Electric Animations, Breakpoints)
│
├── js/
│   └── script.js           # Vanilla ES6+ (Load calculator, Before/after slider, Lightbox, Accordion, Dispatch)
│
├── assets/
│   ├── images/             # 30 high-resolution authentic electrical contractor photographs
│   │   ├── elec-hero.jpg
│   │   ├── elec-about.jpg
│   │   ├── elec-why.jpg
│   │   ├── elec-cta-bg.jpg
│   │   ├── service-panel.jpg
│   │   ├── service-ev.jpg
│   │   ├── service-generator.jpg
│   │   ├── service-emergency.jpg
│   │   ├── service-commercial.jpg
│   │   ├── service-lighting.jpg
│   │   ├── service-surge.jpg
│   │   ├── service-inspection.jpg
│   │   ├── ba-panel-before.jpg / ba-panel-after.jpg
│   │   ├── ba-ev-before.jpg / ba-ev-after.jpg
│   │   ├── ba-conduit-before.jpg / ba-conduit-after.jpg
│   │   ├── ba-gen-before.jpg / ba-gen-after.jpg
│   │   ├── ba-light-before.jpg / ba-light-after.jpg
│   │   └── gallery-*.jpg
│   └── icons/              # Scalable SVG icons and circuit badge graphics
│
└── README.md               # Project documentation and deployment guide
```

---

## ⚡ Key Architectural & Design Features

### 1. Mandatory Demo Banners (3 Separate Banners)
1. **Top Demo Banner (`.top-demo-banner`):** Positioned above the navigation header with a high-visibility amber demo badge.
2. **Middle Demo Banner (`.middle-demo-banner`):** Positioned immediately following the core services section, illustrating web conversion capabilities and direct WhatsApp consultation.
3. **Bottom Demo Banner (`.bottom-demo-banner`):** Placed directly before the footer with a "Chat With Us" CTA routing to WhatsApp.

### 2. Static Floating WhatsApp Bottom Banner
- **Element ID:** `#fixed-whatsapp-banner`
- **Position:** Pinned to viewport bottom-right (desktop) and centered bottom pill (mobile).
- **Behavior:** Persists across all scrolling actions across every section with `z-index: 9999`.
- **Content:** Contains **only** the official WhatsApp icon and phone number `+1 (412) 796-3968`, linking directly to `https://wa.me/message/RVTZQMFL7I6OH1`.

### 3. Dynamic Interactive Components (Vanilla JS)
- **Streamlined 5-Item Navigation:** A clean header navbar featuring `Services`, `Portfolio`, `Why Us`, `FAQ`, and `Contact`, plus an emergency "Schedule Service" CTA.
- **Interactive Home Electrical Load Calculator:** Real-time engineering logic calculating continuous household demand. Visitors toggle additions (Level 2 EV Charger, Heat Pump HVAC, Induction Range, Hot Tub, Electric Dryer) to inspect calculated Amps, gauge bar status, and panel upgrade recommendations (100A, 200A, or 400A) with direct WhatsApp integration.
- **5-Scenario Interactive Before & After Slider:** Draggable comparison slider for 200A Panel Heavy-Ups, Tesla EV Wall Connectors, Commercial EMT Conduit, Generac Standby Generators, and Recessed LED Lighting.
- **Hazardous Panels Warning Matrix:** Educational guide detailing the fire hazards of obsolete Federal Pacific (FPE) Stab-Lok, Zinsco/Sylvania, and Challenger electrical panels.
- **Tier-1 Brand Partnerships:** Showcases certified installations using Square D® by Schneider, Generac®, Tesla Energy, and Eaton®.
- **Filterable Project Gallery with Lightbox Modal:** Categorized portfolio with filters (*All, Panel Heavy-Ups, EV & Generators, Commercial, Architectural Lighting*) and full-screen inspection modal.
- **Verified Client Testimonials Carousel:** Auto-sliding testimonial track with dot pagination and demo review disclaimers.
- **6-Item FAQ Accordion:** Expandable questions addressing 200A upgrade signs, EV charger capacity, recurring breaker trips, electrical emergencies, generator operation, and permitting.
- **Fast Emergency & Estimate Dispatch Form:** Real-time form validation that packages user requirements and routes directly to WhatsApp.

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
