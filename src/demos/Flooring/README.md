# Alvoratech – Premium Flooring Installation & Refinishing Website

A custom-designed, responsive, high-converting website built for **Alvoratech**, a premier American residential and commercial flooring installation, luxury vinyl plank (LVP), custom tile, and dustless hardwood refinishing company.

---

## 🪵 Project Architecture

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
│   ├── images/                 # 30 high-resolution flooring photos (hero, services, portfolio, before/after)
│   └── icons/                  # Inline SVG icons and badges
│
└── README.md                   # Documentation & local development guide
```

---

## ✨ Key Features & Components

1. **Top, Middle & Bottom Demo Banners**:
   - **Top Demo Banner**: Informs visitors immediately that this is a demonstration website for Alvoratech.
   - **Middle Demo Banner**: Highlight banner showcasing what a custom-crafted website achieves for exterior and interior contractors.
   - **Bottom Demo Banner**: Prominent call-to-action preceding the footer with instant WhatsApp engagement.

2. **Fixed WhatsApp Floating Banner**:
   - Anchored to the bottom-right viewport across all sections and scroll states.
   - Follows strict design specifications: features **only** the official WhatsApp icon and `+1 (412) 796-3968`.
   - Direct link to `https://wa.me/message/RVTZQMFL7I6OH1`.

3. **Interactive Before-and-After Transformation Slider**:
   - Touch and mouse draggable split comparison slider.
   - 5 interactive tabs:
     1. *Living Room* (Worn carpet ➔ 7.5" European White Oak Hardwood)
     2. *Kitchen Tile* (Outdated sheet vinyl ➔ Rectified Calacatta marble porcelain tile)
     3. *Basement LVP* (Damp concrete ➔ 100% waterproof rigid core luxury vinyl plank)
     4. *Historic Refinish* (Scratched 60-year-old pine ➔ Restored satin walnut dustless finish)
     5. *Grand Foyer* (Standard straight planks ➔ Architectural French herringbone parquet)
   - Dynamic captioning and responsive coordinate synchronization.

4. **Flooring Material Comparison Guide**:
   - Comprehensive matrix comparing Engineered Hardwood, Solid Hardwood, Luxury Vinyl Plank (LVP), Porcelain & Ceramic Tile, and Waterproof Laminate across Water Resistance, Scratch Durability, Lifespan, and Ideal Rooms.

5. **8 Comprehensive Flooring Services**:
   - Solid & Engineered Hardwood Installation
   - Luxury Vinyl Plank (LVP / EVP) Waterproof Flooring
   - Porcelain, Ceramic & Marble Tile Installation
   - Dustless Hardwood Sanding & Custom Refinishing
   - Waterproof Laminate Flooring
   - Custom Hardwood Staircases & Transition Trim
   - Commercial Flooring Solutions
   - Subfloor Repair, Leveling & Moisture Mitigation
   - Each service includes an itemized description and direct pre-formatted WhatsApp quote trigger.

6. **Portfolio Gallery & Modal Lightbox**:
   - Filterable categories: *All Projects*, *Hardwood*, *Luxury Vinyl*, *Tile*, *Refinishing*.
   - Fullscreen keyboard-accessible modal lightbox with Escape key and backdrop dismissal.

7. **Customer Testimonials Carousel**:
   - Automated rotating carousel with 5.5-second cadence and hover/touch pause.
   - Sample client feedback disclaimer pill.

8. **FAQ Accordion**:
   - 7 detailed flooring questions answering acclimatization, subfloor leveling, dustless sanding, furniture moving, and lifetime warranties.
   - Smooth CSS height transition with single-active accordion mechanics and ARIA attributes.

9. **Interactive In-Home Estimate Request Form**:
   - Real-time input validation (Full Name, Phone, Email, Flooring Type Selection).
   - Direct integration: formats an inquiry summary and seamlessly redirects the user into WhatsApp.

---

## 🎨 Design System & Color Palette

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Deep Walnut Navy** | `#0F1E2E` | Structural headings, typography, dark contrast |
| **Deep Charcoal** | `#09111A` | Hero gradients, footer, deep overlays |
| **Honey Oak / Gold** | `#C68A4C` | Primary actions, branding, badges, rating stars |
| **Golden Oak Hover** | `#B37537` | Hover states |
| **Soft Cream Sand** | `#FBF9F6` | Alternating section backgrounds |
| **Pure White** | `#FFFFFF` | Card surfaces, clean contrast |
| **WhatsApp Green** | `#25D366` | Floating banner and WhatsApp action buttons |

### Typography
- **Headings**: `Plus Jakarta Sans` (weights: 600, 700, 800)
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
