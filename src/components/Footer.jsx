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
