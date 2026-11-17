import React, { useState } from 'react';
import { FiChevronDown, FiMail, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * MobileNavDrawer Component
 * Fully high-contrast, perfectly visible text on white mobile drawer matching Image 1.
 */
export default function MobileNavDrawer({ isOpen, onClose, onOpenDemoModal, onOpenFaq }) {
  const [activeSection, setActiveSection] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="lg:hidden mt-2 pt-3 pb-5 border-t border-slate-200 bg-white flex flex-col gap-2.5 animate-fade-in text-[#1E242B]">
      {/* Home */}
      <a
        href="#"
        onClick={onClose}
        className="px-3 py-2.5 rounded-xl text-sm font-bold text-[#1E242B] hover:text-[#00828B] hover:bg-slate-100 transition-colors"
      >
        Home
      </a>

      {/* AI Visibility Accordion */}
      <div>
        <button
          onClick={() => toggleSection('ai')}
          className="w-full px-3 py-2.5 rounded-xl text-sm font-bold text-[#1E242B] hover:text-[#00828B] flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <span>AI Visibility</span>
          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeSection === 'ai' ? 'rotate-180 text-[#00828B]' : 'text-[#1E242B]'
            }`}
          />
        </button>
        {activeSection === 'ai' && (
          <div className="pl-5 pr-3 py-2 space-y-2 text-xs font-semibold text-[#2D3748] bg-[#F8FAFC] rounded-xl border-l-4 border-[#00828B] ml-2 mt-1">
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Website Design & Hosting
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Independent Endorsement
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Google Business Profile (3-Pack)
            </a>
            <a href="#platform" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • A Well Run Business (CRM)
            </a>
            <a href="#platform" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • How It Works
            </a>
          </div>
        )}
      </div>

      {/* Solutions Accordion */}
      <div>
        <button
          onClick={() => toggleSection('solutions')}
          className="w-full px-3 py-2.5 rounded-xl text-sm font-bold text-[#1E242B] hover:text-[#00828B] flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <span>Solutions</span>
          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeSection === 'solutions' ? 'rotate-180 text-[#00828B]' : 'text-[#1E242B]'
            }`}
          />
        </button>
        {activeSection === 'solutions' && (
          <div className="pl-5 pr-3 py-2 space-y-2 text-xs font-semibold text-[#2D3748] bg-[#F8FAFC] rounded-xl border-l-4 border-[#00828B] ml-2 mt-1">
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Search Everywhere Optimization
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Advertising & Social (Google & Meta)
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Ecommerce & Payments
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Merchant Services
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Business Domains & Security
            </a>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Professional Business Email
            </a>
          </div>
        )}
      </div>

      {/* Results Accordion */}
      <div>
        <button
          onClick={() => toggleSection('results')}
          className="w-full px-3 py-2.5 rounded-xl text-sm font-bold text-[#1E242B] hover:text-[#00828B] flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <span>Results & Industries</span>
          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeSection === 'results' ? 'rotate-180 text-[#00828B]' : 'text-[#1E242B]'
            }`}
          />
        </button>
        {activeSection === 'results' && (
          <div className="pl-5 pr-3 py-2 space-y-2 text-xs font-semibold text-[#2D3748] bg-[#F8FAFC] rounded-xl border-l-4 border-[#00828B] ml-2 mt-1">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-1">Live Demo Templates:</span>
            <a href="/plumbing-services" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Plumbing Services Demo →
            </a>
            <a href="/contractor" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • General Contractor Demo →
            </a>
            <a href="/dental-care" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Dental Clinic Demo →
            </a>
            <a href="/auto-repair" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Auto Repair Care Demo →
            </a>
            <a href="/personal-injury" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Legal Practice &amp; Injury Demo →
            </a>
            <a href="/demos/towing-company/" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Towing &amp; Roadside Demo →
            </a>
            <a href="/demos/tree-removal/" onClick={onClose} className="block py-1 hover:text-[#00828B] font-bold text-[#00828B]">
              • Tree Removal &amp; Arborist Demo →
            </a>
            <div className="pt-1 mt-1 border-t border-slate-200">
              <a href="#portfolio" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
                • Browse All Client Demos
              </a>
            </div>
          </div>
        )}
      </div>

      {/* About Accordion */}
      <div>
        <button
          onClick={() => toggleSection('about')}
          className="w-full px-3 py-2.5 rounded-xl text-sm font-bold text-[#1E242B] hover:text-[#00828B] flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <span>About</span>
          <FiChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              activeSection === 'about' ? 'rotate-180 text-[#00828B]' : 'text-[#1E242B]'
            }`}
          />
        </button>
        {activeSection === 'about' && (
          <div className="pl-5 pr-3 py-2 space-y-2 text-xs font-semibold text-[#2D3748] bg-[#F8FAFC] rounded-xl border-l-4 border-[#00828B] ml-2 mt-1">
            <a href="#portfolio" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • About Us & Mission
            </a>
            <button
              onClick={() => {
                onClose();
                if (onOpenFaq) onOpenFaq();
              }}
              className="block w-full text-left py-1.5 hover:text-[#00828B]"
            >
              • Common Questions (FAQ)
            </button>
            <a href="#solutions" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Personal Dedicated Support
            </a>
            <a href="#pricing" onClick={onClose} className="block py-1.5 hover:text-[#00828B]">
              • Pricing & Plans
            </a>
          </div>
        )}
      </div>

      {/* Direct WhatsApp Contact Button */}
      <a
        href="https://wa.me/14127963968"
        target="_blank"
        rel="noopener noreferrer"
        className="my-1 py-3 px-4 rounded-xl bg-emerald-50 border-2 border-[#25D366] text-xs font-bold text-[#0C2233] hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2 shadow-xs"
      >
        <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
        <span>WhatsApp Only: +1 (412) 796-3968</span>
      </a>

      {/* Direct Email Contact Link */}
      <a
        href="mailto:info@alvoratechhq.com"
        className="my-1 py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#00828B] hover:border-[#00828B] transition-colors flex items-center justify-center gap-2"
      >
        <FiMail className="w-3.5 h-3.5 text-[#00828B]" />
        <span>info@alvoratechhq.com</span>
      </a>

      {/* Bottom Action Button */}
      <div className="pt-2 border-t border-slate-200">
        <button
          onClick={() => {
            onClose();
            onOpenDemoModal();
          }}
          className="w-full py-3.5 px-4 rounded-xl bg-[#00828B] hover:bg-[#006B72] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
        >
          <span>Start Free Demo</span>
          <FiArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
