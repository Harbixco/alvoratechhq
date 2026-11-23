import React, { useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * DemoTopBar - Veltrix Hub Edition
 * Pinned at the very top of each live demo template.
 * Provides a button returning to Veltrix Hub and a high-converting WhatsApp CTA.
 */
export default function DemoTopBar({ demoName = 'Client Template Demo' }) {
  const handleBackToIndex = (e) => {
    window.location.href = '/';
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targetSelectors = [
      '.reveal', '.reveal-on-scroll', '.animate-on-scroll', '.service-card',
      '.pf-service-card', '.pf-why-card', '.pf-testi-card', '.pf-hero-card',
      '.difference-card', '.result-card', '.review-card', '.feature-card',
      '.benefit-card', '.why-benefit-card', '.prep-step-card', '.step-item',
      '.trust-item', '.metric-card', '.gallery-card', '.gallery-item', '.process-step'
    ].join(', ');

    const activate = (el) => {
      el.classList.add('active');
      el.classList.add('is-visible');
      el.classList.add('visible');
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll(targetSelectors).forEach(activate);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.04, rootMargin: '0px 0px 50px 0px' });

    const scanAndObserve = () => {
      const elements = document.querySelectorAll(targetSelectors);
      elements.forEach(el => {
        if (!el.classList.contains('active') && !el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            activate(el);
          } else {
            observer.observe(el);
          }
        }
      });
    };

    scanAndObserve();
    const frameId = requestAnimationFrame(scanAndObserve);
    const initialTimer = setTimeout(scanAndObserve, 250);

    const mutationObserver = new MutationObserver(() => { scanAndObserve(); });
    const rootEl = document.getElementById('root') || document.body;
    if (rootEl) {
      mutationObserver.observe(rootEl, { childList: true, subtree: true });
    }

    const handleHashOrScroll = () => { scanAndObserve(); };
    window.addEventListener('hashchange', handleHashOrScroll);
    window.addEventListener('scroll', handleHashOrScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(initialTimer);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('hashchange', handleHashOrScroll);
      window.removeEventListener('scroll', handleHashOrScroll);
    };
  }, []);

  const whatsappMsg = encodeURIComponent('Hello Veltrix Hub, I saw the ' + demoName + ' demo and I am interested in a website like this for my business.');

  return (
    <aside 
      className="sticky top-0 left-0 right-0 z-[999999] bg-[#050f2c] text-white border-b border-cyan-900/60 px-3 sm:px-6 py-2.5 shadow-lg backdrop-blur-md bg-opacity-95"
      role="banner"
      aria-label="Demo template banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <a
          href="/"
          onClick={handleBackToIndex}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 shadow-sm transition-all duration-200 active:scale-95 shrink-0"
          aria-label="Back to Veltrix Hub"
        >
          <FiArrowLeft className="w-4 h-4" />
          <span>Veltrix Hub</span>
        </a>

        <div className="hidden md:flex items-center gap-2 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live Demo:</span>
          <strong className="text-white font-semibold">{demoName}</strong>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={'https://wa.me/2348087098270?text=' + whatsappMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 shrink-0"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
