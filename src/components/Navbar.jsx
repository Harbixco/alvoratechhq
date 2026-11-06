import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { FiMenu, FiX, FiArrowRight, FiUserCheck } from 'react-icons/fi';

export default function Navbar({ onOpenDemoModal, onOpenLoginModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-[#08090D]/90 backdrop-blur-xl border-white/[0.12] shadow-2xl py-3 px-5 sm:px-6'
            : 'bg-[#08090D]/60 backdrop-blur-md border-white/[0.06] py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <Logo size="default" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-300 hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Client Portal Button (Townsquare style) */}
            <button
              onClick={onOpenLoginModal}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-xl hover:bg-white/[0.05] transition-colors"
            >
              Client Login
            </button>

            {/* Start Free Demo CTA */}
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 shadow-glow-brand hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Free Demo</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenDemoModal}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 text-white"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden pt-4 pb-2 mt-3 border-t border-white/[0.08] flex flex-col gap-2 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.06] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full text-center text-xs font-semibold py-2.5 rounded-xl bg-white/[0.05] text-slate-300 hover:text-white"
              >
                Client Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase font-semibold py-2.5 rounded-xl bg-indigo-600 text-white shadow-glow-brand"
              >
                <span>Start Free Demo</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
