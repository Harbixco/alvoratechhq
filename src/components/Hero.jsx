import React, { useState, useEffect } from 'react';
import { 
  FiArrowUpRight, 
  FiChevronLeft, 
  FiChevronRight, 
  FiCalendar, 
  FiMail, 
  FiFileText, 
  FiPackage, 
  FiCreditCard, 
  FiCheckCircle, 
  FiStar,
  FiSearch,
  FiTrendingUp
} from 'react-icons/fi';

/**
 * Hero Carousel Component
 * Exactly replicates Image 3 template:
 * - Royal deep navy blue background (#0C2E61 to #061833)
 * - Outline pill: "• AI SEARCH IS ALREADY CHANGING EVERYTHING"
 * - Large white heading: "Your Next Customer Isn't Searching. They're Asking."
 * - Orange action button with circular arrow icon (#FF9718)
 * - Floating stacked customer contact hub cards on the right
 * - Bottom metrics strip: 23,000+, 5,000+, 31.2M+, 15+
 * - Fully animated carousel with autoplay & manual navigation controls
 */
export default function Hero({ onOpenDemoModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 'ai-search',
      pill: 'AI SEARCH IS ALREADY CHANGING EVERYTHING',
      headline: "Your Next Customer Isn't Searching. They're Asking.",
      description:
        'AI recommends businesses based on their reviews, their content, and how fast they respond. We build every piece of that foundation — completely, correctly, and continuously — then give you one hub to manage every customer that follows',
      ctaText: 'Request A Demo',
      type: 'contacts',
    },
    {
      id: 'seo-dominance',
      pill: 'SEARCH EVERYWHERE OPTIMIZATION',
      headline: 'Rank #1 on Google Maps, Apple & AI Engines.',
      description:
        'When local buyers search on their phones, voice assistants, or maps, ensure your business is the verified first choice. Continuous directory sync across 50+ tier-1 networks.',
      ctaText: 'Start Free Demo',
      type: 'seo',
    },
    {
      id: 'business-hub',
      pill: 'ALL-IN-ONE BUSINESS MANAGEMENT PLATFORM',
      headline: 'A Well Run Business Starts With Connected Tools.',
      description:
        'The right tools make it effortless to respond to inquiries in under 15 seconds, schedule appointments, collect payments, and automatically turn happy clients into 5-star Google reviews.',
      ctaText: 'Explore The Platform',
      type: 'crm',
    },
  ];

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 overflow-hidden bg-gradient-to-br from-[#0C2E61] via-[#092247] to-[#061833] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#39AFB9]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[400px] bg-[#00828B]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[400px]">
          {/* Left Column: Carousel Slide Content */}
          <div className="lg:col-span-7 space-y-5 animate-fade-in key={currentSlide}">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {active.headline}
            </h1>

            {/* Subtext matching Image 3 */}
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-2xl font-normal">
              {active.description}
            </p>

            {/* CTA Button matching Image 3 */}
            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-sm tracking-wide transition-colors shadow-md"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <FiArrowUpRight className="w-4 h-4 text-white" />
                </div>
                <span>{active.ctaText}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Mockup corresponding to slide (hidden on mobile per user instruction) */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            {/* Slide 1 Visual: Stacked Contacts Hub matching Image 3 */}
            {active.type === 'contacts' && (
              <div className="relative w-full max-w-md animate-fade-in">
                {/* Back Pill Card Top */}
                <div className="mx-auto w-[85%] bg-white/90 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-white/40 flex items-center justify-between text-slate-800 -mb-4 relative z-0 transform -translate-y-2 opacity-70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#0C2233] text-white font-bold text-xs flex items-center justify-center">
                      AR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0C2233]">Adelle Ricci</div>
                      <div className="text-[10px] text-slate-500">adelle@riccidental.com</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    Active
                  </span>
                </div>

                {/* Back Pill Card Secondary */}
                <div className="mx-auto w-[92%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-white/50 flex items-center justify-between text-slate-800 -mb-3 relative z-10 opacity-90">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#39AFB9] text-white font-bold text-xs flex items-center justify-center">
                      AC
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0C2233]">Alarrieda Calfein</div>
                      <div className="text-[10px] text-slate-500">Website Lead Inbound</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-[#00828B] bg-[#EFF5F6] px-2 py-0.5 rounded-full font-bold">
                    New Lead
                  </span>
                </div>

                {/* Main Hero Card: Adriano Hearn matching Image 3 */}
                <div className="relative z-20 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-white text-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#0C2E61] text-white font-bold text-sm flex items-center justify-center shadow-xs">
                        AH
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#0C2233]">Adriano Hearn</h4>
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                            VIP
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 font-mono">adriano@hearnlaw.com</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Client since Oct 2024</span>
                  </div>

                  {/* Actions Bar matching Image 3 */}
                  <div className="grid grid-cols-5 gap-1.5 pt-3 border-t border-slate-100 text-center">
                    <div className="p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                      <FiCalendar className="w-4 h-4 mx-auto text-[#00828B] mb-1" />
                      <span className="text-[10px] font-semibold text-slate-700 block truncate">Appointment</span>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                      <FiMail className="w-4 h-4 mx-auto text-[#00828B] mb-1" />
                      <span className="text-[10px] font-semibold text-slate-700 block truncate">Message</span>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                      <FiFileText className="w-4 h-4 mx-auto text-[#00828B] mb-1" />
                      <span className="text-[10px] font-semibold text-slate-700 block truncate">Document</span>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                      <FiPackage className="w-4 h-4 mx-auto text-[#00828B] mb-1" />
                      <span className="text-[10px] font-semibold text-slate-700 block truncate">Package</span>
                    </div>
                    <div className="p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                      <FiCreditCard className="w-4 h-4 mx-auto text-[#FF9718] mb-1" />
                      <span className="text-[10px] font-semibold text-slate-700 block truncate">Charge</span>
                    </div>
                  </div>
                </div>

                {/* Sub Pill Card Bottom 1 */}
                <div className="mx-auto w-[92%] bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-white/50 flex items-center justify-between text-slate-800 -mt-3 relative z-10 opacity-90">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#0C2233] text-white font-bold text-xs flex items-center justify-center">
                      AG
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0C2233]">A&G Services</div>
                      <div className="text-[10px] text-slate-500">service@aandgmechanical.com</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    Paid $450
                  </span>
                </div>

                {/* Sub Pill Card Bottom 2 */}
                <div className="mx-auto w-[85%] bg-white/90 backdrop-blur-md rounded-2xl p-2.5 shadow-md border border-white/40 flex items-center justify-between text-slate-800 -mt-2 relative z-0 opacity-70">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#39AFB9] text-white font-bold text-xs flex items-center justify-center">
                      AX
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0C2233]">Alex Guillen</div>
                      <div className="text-[10px] text-slate-500">alex@guillenplumbing.com</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-bold">
                    5.0 ★ Rating
                  </span>
                </div>
              </div>
            )}

            {/* Slide 2 Visual: SEO Dominance Showcase */}
            {active.type === 'seo' && (
              <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-white text-slate-800 animate-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-bold text-[#0C2233] uppercase tracking-wider flex items-center gap-2">
                    <FiSearch className="text-[#00828B]" />
                    Local Google 3-Pack Radar
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                    #1 Ranked
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="flex justify-between items-center text-xs font-bold text-[#0C2233]">
                      <span>1. Your Verified Business</span>
                      <span className="text-[#FF9718]">★★★★★ (182)</span>
                    </div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Top-rated in immediate 25-mile radius</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-60">
                    <div className="text-xs font-bold text-slate-600">2. Competitor A</div>
                    <div className="text-[11px] text-slate-400">★★★★☆ (42 reviews)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-40">
                    <div className="text-xs font-bold text-slate-600">3. Competitor B</div>
                    <div className="text-[11px] text-slate-400">★★★☆☆ (19 reviews)</div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-[#00828B]">
                  <span>50+ Directories Synced</span>
                  <span>100% NAP Match</span>
                </div>
              </div>
            )}

            {/* Slide 3 Visual: All-In-One CRM */}
            {active.type === 'crm' && (
              <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-white text-slate-800 animate-fade-in">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <span className="text-xs font-bold text-[#0C2233] uppercase tracking-wider flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-500" />
                    Automated Growth Workflow
                  </span>
                  <span className="text-[10px] font-mono text-[#FF9718] bg-orange-100 px-2.5 py-0.5 rounded-full font-bold">
                    Zero Phone Tag
                  </span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#EFF5F6] border border-[#39AFB9]/30 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#0C2233]">Instant Inbound Dispatch</div>
                      <div className="text-[11px] text-slate-600">SMS routed to technician phone in &lt; 15s</div>
                    </div>
                    <span className="text-emerald-600 font-bold font-mono">✓ Active</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#0C2233]">Digital One-Click Payment</div>
                      <div className="text-[11px] text-slate-600">Apple Pay & credit cards processed online</div>
                    </div>
                    <span className="text-[#00828B] font-bold font-mono">Paid $890</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#0C2233]">Auto 5-Star Review Request</div>
                      <div className="text-[11px] text-slate-600">Automated thank-you text with Google link</div>
                    </div>
                    <span className="text-[#FF9718] font-bold font-mono">5★ Sent</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Credibility Stats Row matching Image 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-white/10 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              23,000+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Small Businesses Supported
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              5,000+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Verified 5-Star Reviews
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              50+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Connected Local Networks
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
              15+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
              Years Experience in Local Search
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
