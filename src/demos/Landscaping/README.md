# Alvoratech – Premium Landscaping, Hardscaping & Grounds Care Website

A custom-designed, responsive, high-converting website built for **Alvoratech**, a premier American residential estate and commercial landscaping company.

This project delivers architectural elegance, rich typography, smooth interactive features, before-and-after transformation comparisons, and direct WhatsApp quote routing.

---

## 🌿 Project Architecture

```
alvoratech/
│
├── index.html                  # Semantic HTML5, Schema.org LocalBusiness, SEO metadata
│
├── css/
│   └── style.css               # Design tokens, CSS Grid/Flexbox, responsive media queries, animations
│
├── js/
│   └── script.js               # Vanilla ES6+: Before/After slider, lightbox, carousel, accordion, form
│
├── assets/
│   ├── images/                 # 24 high-resolution landscaping photos (hero, services, portfolio, before/after)
│   └── icons/                  # Inline SVG icons and badges
│
└── README.md                   # Documentation & local development guide
```

---

## ✨ Key Features & Components

1. **Top, Middle & Bottom Demo Banners**:
   - **Top Demo Banner**: Informs visitors immediately that this is a demonstration website for Alvoratech.
   - **Middle Demo Banner**: Highlight banner showcasing what a custom-crafted website achieves for exterior contractors.
   - **Bottom Demo Banner**: Prominent call-to-action preceding the footer with instant WhatsApp engagement.

2. **Fixed WhatsApp Floating Banner**:
   - Anchored to the bottom-right viewport across all sections and scroll states.
   - Follows strict design specifications: features **only** the official WhatsApp icon and `+1 (412) 796-3968`.
   - Direct link to `https://wa.me/message/RVTZQMFL7I6OH1`.

3. **Interactive Before-and-After Transformation Slider**:
   - Touch and mouse draggable split comparison slider.
   - 5 interactive tabs: *Backyard Patio*, *Front Yard Curb*, *Lawn Revitalization*, *Retaining Wall*, and *Outdoor Living Room*.
   - Dynamic captioning and responsive coordinate synchronization.

4. **8 Comprehensive Landscaping Services**:
   - Landscape Architecture & 3D Design
   - Custom Hardscaping & Paver Patios
   - Retaining Walls & Terraced Grading
   - Estate Lawn Care & Turf Management
   - Smart Irrigation & French Drains
   - Specimen Tree & Shrub Planting
   - Architectural Outdoor Night Lighting
   - Commercial Grounds Maintenance
   - Each service includes an itemized description and direct pre-formatted WhatsApp quote trigger.

5. **Portfolio Gallery & Modal Lightbox**:
   - Filterable categories: *All Projects*, *Hardscaping*, *Landscape Design*, *Lawn & Care*, *Commercial*.
   - Fullscreen keyboard-accessible modal lightbox with Escape key and backdrop dismissal.

6. **Customer Testimonials Carousel**:
   - Automated rotating carousel with 5-second cadence and hover/touch pause.
   - Sample client feedback disclaimer pill.

7. **FAQ Accordion**:
   - 7 detailed landscaping questions answering design, drainage, warranties, and timelines.
   - Smooth CSS height transition with single-active accordion mechanics and ARIA attributes.

8. **Interactive Estimate Request Form**:
   - Real-time input validation (Full Name, Phone, Email, Service Selection).
   - Direct integration: formats an inquiry summary and seamlessly redirects the user into WhatsApp.

---

## 🎨 Design System & Color Palette

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Navy** | `#0B1F3A` | Structural headings, typography, dark contrast |
| **Deep Navy** | `#071426` | Hero gradients, footer, deep overlays |
| **Emerald Green** | `#15803D` | Primary actions, branding, trust badges |
| **Leaf Accent** | `#22C55E` | Highlights, badges, active indicators |
| **Amber Gold** | `#D97706` | Rating stars, warm accent notes |
| **Light Background** | `#F4F8FC` | Alternating section backgrounds |
| **WhatsApp Green** | `#25D366` | Floating banner and WhatsApp action buttons |

### Typography
- **Headings**: `Plus Jakarta Sans` (weights: 500, 600, 700, 800)
- **Body**: `Inter` (weights: 400, 500, 600)

---

## 📞 Business Information & Constraints

- **Business Name**: Alvoratech
- **WhatsApp / Phone**: `+1 (412) 796-3968`
- **WhatsApp URL**: `https://wa.me/message/RVTZQMFL7I6OH1`
- **Email**: `info@Alvoratechhq.com`
- **Location**: `*` *(strictly asterisk, no invented city/state/zip)*

---

## 🚀 Local Setup & Preview

No build tools, bundlers, or frameworks required.

1. Clone or navigate to the directory:
   ```bash
   cd alvoratech
   ```
2. Open `index.html` directly in any modern web browser:
   - On Windows: Double-click `index.html` or run:
     ```powershell
     Start-Process index.html
     ```
   - Or serve with any static web server (e.g. Python):
     ```bash
     python -m http.server 8000
     ```
   - Navigate to `http://localhost:8000`

---

## 📱 Mobile Responsiveness

The layout adapts seamlessly across all viewports:
- **Desktop (1200px+)**: 4-column service/gallery grids, expanded sticky header, floating craft badges.
- **Tablet (768px – 1199px)**: 2-column grids, mobile slide-out navigation drawer.
- **Mobile (320px – 767px)**: Single-column stacked layouts, touch-enabled before-after slider, optimized compact floating WhatsApp banner.
