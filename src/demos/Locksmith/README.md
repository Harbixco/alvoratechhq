# ALVORATECH – 24/7 Mobile Locksmith & Emergency Security Services

A custom-designed, high-converting, responsive website built for **Alvoratech**, a premier 24/7 mobile locksmith and security hardware installation service. Built exclusively with **HTML5, CSS3, and Vanilla JavaScript (ES6+)** without any external UI frameworks or third-party dependencies.

---

## 🔐 Project Overview

- **Business Name:** Alvoratech
- **Industry:** 24/7 Emergency Mobile Locksmith, Automotive Key Replacement, Residential Security & Commercial Access Control
- **Phone / Emergency Hotline:** `+1 (412) 796-3968`
- **WhatsApp Direct Channel:** [https://wa.me/message/RVTZQMFL7I6OH1](https://wa.me/message/RVTZQMFL7I6OH1)
- **Email:** `info@Alvoratechhq.com`
- **Location:** `*`
- **Design Aesthetic:** High-authority Tactical Midnight Navy (`#0A192F` / `#050C16`) accented with High-Visibility Emergency Amber (`#F59E0B` / `#D97706`), Electric Trust Cyan (`#06B6D4`), and Clean Slate (`#F8FAFC`).

---

## 📁 Project Structure

```text
alvoratech/
│
├── index.html              # Main HTML5 document (Semantic, Schema.org LocalBusiness, SEO metadata)
│
├── css/
│   └── style.css           # Custom CSS3 styling, responsive grid, animations, custom properties
│
├── js/
│   └── script.js           # Vanilla ES6+ JS: Dispatch status, Before/After slider, Lightbox, Carousels, Forms
│
├── assets/
│   ├── images/             # 30 high-resolution authentic locksmith photographs
│   │   ├── lock-hero.jpg
│   │   ├── lock-about.jpg
│   │   ├── lock-why.jpg
│   │   ├── lock-cta-bg.jpg
│   │   ├── service-emergency.jpg
│   │   ├── service-auto.jpg
│   │   ├── service-smartlock.jpg
│   │   ├── service-rekey.jpg
│   │   ├── service-access.jpg
│   │   ├── service-safe.jpg
│   │   ├── service-ignition.jpg
│   │   ├── service-panicbar.jpg
│   │   ├── ba-door-before.jpg / ba-door-after.jpg
│   │   ├── ba-auto-before.jpg / ba-auto-after.jpg
│   │   ├── ba-comm-before.jpg / ba-comm-after.jpg
│   │   ├── ba-safe-before.jpg / ba-safe-after.jpg
│   │   ├── ba-master-before.jpg / ba-master-after.jpg
│   │   └── gallery-*.jpg
│   └── icons/              # Scalable SVG icons and badge graphics
│
└── README.md               # Project documentation and deployment guide
```

---

## ⚡ Key Architectural & Design Features

### 1. Mandatory Demo Banners
1. **Top Demo Banner (`#top-demo-banner`):** Situated above the main header, clearly declaring demonstration status with high-visibility amber badge.
2. **Middle Demo Banner (`#middle-demo-banner`):** Positioned following the core services section, showcasing web conversion capabilities with an instant WhatsApp consultation CTA.
3. **Bottom Demo Banner (`#bottom-demo-banner`):** Placed directly above the footer with a quick-action "Chat With Us" button routing to WhatsApp.

### 2. Static Floating WhatsApp Bottom Banner
- **Element ID:** `#fixed-whatsapp-banner`
- **Position:** Fixed at viewport bottom right (desktop) and streamlined bottom pill (mobile).
- **Behavior:** Persists across all scrolling actions across the entire site with high `z-index: 9999`.
- **Content:** Contains **only** the official WhatsApp icon and phone number `+1 (412) 796-3968`, linking directly to `https://wa.me/message/RVTZQMFL7I6OH1`.

### 3. Dynamic Interactive Components (Vanilla JS)
- **Live Dispatcher Radar Status:** Pulsing radar beacon displaying active technician on-call status, live estimated arrival time (15–30 mins), and damage-free guarantee indicators.
- **5-Scenario Security Before/After Comparison Slider:** Interactive draggable split-screen slider comparing compromised vs. reinforced hardware across Residential, Automotive, Commercial Panic Bars, Heavy Safes, and Multi-Tenant Master Systems.
- **ANSI Grade Security Matrix:** Interactive visual breakdown of ANSI Grade 1 (Heavy Commercial), Grade 2 (Light Commercial / High-End Residential), and Grade 3 (Basic Residential) specifications.
- **Filterable Hardware & Fieldwork Gallery:** 8-item portfolio with filter tabs (All, Automotive, Smart Locks, Commercial) and an integrated fullscreen modal lightbox.
- **Customer Testimonial Slider:** Auto-cycling carousel with manual dot pagination and touch swipe support.
- **6-Item Security FAQ Accordion:** Accessible toggle cards addressing rekeying vs. lock changes, lockout procedures, smart lock weatherproofing, and upfront quotes.
- **Emergency Dispatch Request Form:** Real-time form validation with automatic routing to WhatsApp with pre-filled service details.

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

## 🛡️ Adherence to Strict Constraints
- **Frameworks:** 100% Vanilla HTML5, CSS3, and ES6+ JavaScript. No React, Vue, jQuery, or Bootstrap.
- **Contact Info:** All phone links use `tel:+14127963968`, all WhatsApp links use `https://wa.me/message/RVTZQMFL7I6OH1`, and email links use `mailto:info@Alvoratechhq.com`.
- **Location:** Stated strictly as `*` without invented cities or addresses.
- **Images:** All 30 image assets are stored locally within `assets/images/`.
