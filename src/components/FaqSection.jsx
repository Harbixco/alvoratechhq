import React, { useState } from 'react';
import { FiChevronDown, FiX, FiSearch, FiHelpCircle, FiArrowRight, FiShield, FiCheckCircle } from 'react-icons/fi';

/**
 * FaqSection / FAQ Component
 * Dedicated self-contained FAQ component holding all questions, categories, and search filter.
 * Can be opened as an interactive modal/drawer from the Header or Footer.
 */
export default function FaqSection({ isOpen, onClose, onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Getting Started', 'Search Everywhere & SEO', 'Business CRM & Payments', 'Ownership & Support'];

  const faqData = [
    {
      category: 'Getting Started',
      question: 'What is Alvora Tech and what does the platform include?',
      answer: 'Alvora Tech delivers an integrated digital marketing and operations platform for small businesses. We combine custom website design, local search engine optimization (Local SEO), 50+ directory sync, and all-in-one business management tools with dedicated specialist support.',
    },
    {
      category: 'Getting Started',
      question: 'How fast can our business website and directory listings launch?',
      answer: 'Standard platforms go live within 7 to 10 business days. Our team handles copy drafting, design, mobile tuning, and directory claim submissions so you can continue running your daily operations.',
    },
    {
      category: 'Search Everywhere & SEO',
      question: 'How does your Local SEO and Google 3-Pack ranking work?',
      answer: 'We clean and synchronize your business NAP (Name, Address, Phone) across 50+ tier-1 directories (Google, Apple Maps, Yelp, Bing), structure localized schema markup on your website, optimize your Google Business Profile categories, and implement a direct client review pipeline.',
    },
    {
      category: 'Search Everywhere & SEO',
      question: 'What happens when search engines change their algorithms or adopt AI?',
      answer: 'Our platform continuously monitors directory signals and AI discovery engines. We update your schema, service definitions, and profile citations automatically every month to prevent search decay.',
    },
    {
      category: 'Business CRM & Payments',
      question: 'What is included in the All-in-One Business Management Platform (CRM)?',
      answer: 'The platform centralizes your customer interactions: an integrated inbox for website leads, online appointment scheduling synced with your team calendar, digital invoicing with credit card processing, and an automated review request engine.',
    },
    {
      category: 'Business CRM & Payments',
      question: 'How fast do I receive payments from invoices and online checkout?',
      answer: 'Payments processed through our platform deposit into your verified business bank account on a fast next-day payout cycle (typically 24 hours), with transparent competitive processing rates and PCI compliance.',
    },
    {
      category: 'Ownership & Support',
      question: 'Do I own my website and business domain?',
      answer: 'Yes, 100%. You own your domain, website assets, brand copy, and customer records. There are no proprietary lock-ins or hostage clauses.',
    },
    {
      category: 'Ownership & Support',
      question: 'What ongoing maintenance and support is provided?',
      answer: 'Every active client is assigned a dedicated marketing specialist. Your plan includes fast edge cloud hosting, security monitoring, daily backups, directory upkeep, and unlimited minor content edits.',
    },
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0A203C] border border-[#1A4274] rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label="Close FAQ"
        >
          <FiX className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#39AFB9] mb-1">
            FAQ & Knowledge Center
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Everything you need to know about our all-in-one digital marketing and business management platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <FiSearch className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search questions (e.g., SEO, ownership, payments, timeline)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#FF9718] text-white border-[#FF9718] font-bold shadow-sm'
                  : 'bg-[#0E284A] text-slate-300 border-[#1A4274] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isExpanded = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0E284A] border border-[#1A4274] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-[#39AFB9]' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-200 leading-relaxed border-t border-white/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-400 text-xs">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Modal Footer Callout */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#061833] -mx-6 -mb-6 p-6">
          <div className="text-left">
            <div className="text-xs font-bold text-white">Still have questions about your specific market?</div>
            <div className="text-[11px] text-slate-300">Our marketing specialists answer within 2 business hours.</div>
          </div>
          <button
            onClick={() => {
              onClose();
              if (onOpenDemoModal) onOpenDemoModal();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <span>Ask A Specialist</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
