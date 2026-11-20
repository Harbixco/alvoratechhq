import React from 'react';
import Logo from './Logo';
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer({ onOpenDemoModal, onOpenFaq }) {
  return (
    <footer className="border-t border-[#112A4A] bg-[#040E1B] pt-10 pb-8 text-slate-300 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 pb-8 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-3">
            <Logo size="default" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Integrated digital marketing and operations platform designed for growing small and medium businesses. Custom web development, local search dominance, CRM, and automated customer reputation.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <div className="font-bold text-white uppercase font-mono tracking-wider text-[11px] mb-3">
              Solutions
            </div>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-white transition-colors">Website Design & Hosting</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Search Everywhere (SEO)</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Business Management CRM</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Reputation & Reviews</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Social & Local Advertising</a></li>
            </ul>
          </div>

          {/* Column 3: Industries Served (Hidden on mobile per user instruction) */}
          <div className="hidden md:block">
            <div className="font-bold text-white uppercase font-mono tracking-wider text-[11px] mb-3">
              Industries Served
            </div>
            <ul className="space-y-2">
              <li><a href="/plumbing-services" className="hover:text-white transition-colors">Plumbing & Field Services</a></li>
              <li><a href="/dental-care" className="hover:text-white transition-colors">Dental & Health Clinics</a></li>
              <li><a href="/demos/personal-injury" className="hover:text-white transition-colors">Legal & Practice Counsel</a></li>
              <li><a href="/auto-repair" className="hover:text-white transition-colors">Auto Repair & Specialty</a></li>
              <li><a href="/contractor" className="hover:text-white transition-colors">General Contracting</a></li>
              <li><a href="/towing-company" className="hover:text-white transition-colors">Towing & Roadside</a></li>
              <li><a href="/tree-removal/" className="hover:text-white transition-colors">Tree Removal & Care</a></li>
            </ul>
          </div>

          {/* Column 4: Client & Contact */}
          <div>
            <div className="font-bold text-white uppercase font-mono tracking-wider text-[11px] mb-3">
              Connect & Support
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenFaq}
                  className="hover:text-white transition-colors text-slate-400 hover:text-[#39AFB9]"
                >
                  FAQ
                </button>
              </li>
              <li className="flex items-center gap-2 text-slate-300 pt-1">
                <FiMail className="w-3.5 h-3.5 text-[#39AFB9] shrink-0" />
                <a href="mailto:info@alvoratechhq.com" className="hover:text-white hover:underline transition-colors">
                  info@alvoratechhq.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/14127963968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                  title="WhatsApp Only: +1 (412) 796-3968"
                >
                  +1 (412) 796-3968 <span className="text-[10px] text-emerald-400 font-mono">(WhatsApp Only)</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FiMapPin className="w-3.5 h-3.5 text-[#39AFB9] shrink-0" />
                <span>New York City, Albany</span>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-1.5 text-[#FF9718] hover:text-[#E8860F] font-bold text-xs"
                >
                  <span>Start Free Demo</span>
                  <FiArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-black text-white flex items-center justify-center transition-all duration-200"
                aria-label="X (formerly Twitter)"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#BD081C] text-white flex items-center justify-center transition-all duration-200"
                aria-label="Pinterest"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Alvora Tech (<span className="text-slate-300">alvoratechhq.com</span>). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
