import React from 'react';
import Logo from './Logo';
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer({ onOpenDemoModal, onOpenLoginModal, onOpenFaq }) {
  return (
    <footer className="border-t border-[#112A4A] bg-[#040E1B] pt-10 pb-8 text-slate-300 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 pb-8 border-b border-white/10">
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-3">
            <Logo size="default" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              All-in-one digital marketing and business management platform designed for small and medium businesses. Custom websites, local search dominance, CRM, and automated customer reviews.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] text-slate-300">
                Alvora Tech Cloud: 99.9% Uptime (All Systems Operational)
              </span>
            </div>
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
              <li><a href="#industries" className="hover:text-white transition-colors">Home & Field Services</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Health & Medical Wellness</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Legal & Financial Firms</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Retail & Specialty Stores</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Dining & Hospitality</a></li>
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
                  onClick={onOpenLoginModal}
                  className="hover:text-white transition-colors text-[#39AFB9] font-medium"
                >
                  Client Portal Login
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFaq}
                  className="hover:text-white transition-colors text-slate-400 hover:text-[#39AFB9]"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li className="flex items-center gap-2 text-slate-300 pt-1">
                <FiMail className="w-3.5 h-3.5 text-[#39AFB9] shrink-0" />
                <span>contact@alvoratechhq.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <FiMapPin className="w-3.5 h-3.5 text-[#39AFB9] shrink-0" />
                <span>Global Headquarters</span>
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
