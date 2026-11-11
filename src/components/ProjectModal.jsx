import React, { useState } from 'react';
import { FiX, FiCheck, FiArrowRight, FiShield, FiClock, FiCheckCircle } from 'react-icons/fi';
import Logo from './Logo';

export default function ProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: 'Home & Field Services',
    city: '',
    website: '',
    noWebsite: false,
    contact: '',
    interests: ['Custom Website', 'Local SEO & Google 3-Pack'],
  });

  if (!isOpen) return null;

  const toggleInterest = (item) => {
    if (formData.interests.includes(item)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== item),
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, item],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const interestOptions = [
    'Custom Website & Hosting',
    'Local SEO & Google 3-Pack',
    '50+ Directory Synchronization',
    'Business Management CRM',
    'Automated Review Generation',
    'Targeted Local Advertising',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0A203C] border border-[#1A4274] rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label="Close Modal"
        >
          <FiX className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <Logo size="small" showDomain={false} className="mb-3" />
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Start Your Free Small Business Demo
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                See how Alvora Tech can elevate your local search visibility, customer bookings, and operations.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Skyline Dental Studio or Sterling Electrical"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white focus:outline-none focus:border-[#39AFB9]"
                  >
                    <option>Home & Field Services</option>
                    <option>Health, Medical & Wellness</option>
                    <option>Legal & Professional Services</option>
                    <option>Retail & Specialty Commerce</option>
                    <option>Dining & Hospitality</option>
                    <option>Personal Care Services</option>
                    <option>Other Small Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    City, State / Metro Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Charlotte, NC or Dallas, TX"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-200">
                    Current Website (Optional)
                  </label>
                  <label className="flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.noWebsite}
                      onChange={(e) => setFormData({ ...formData, noWebsite: e.target.checked })}
                      className="rounded bg-white/[0.05] border-white/20 text-[#FF9718] focus:ring-0"
                    />
                    <span>I don't have a website yet</span>
                  </label>
                </div>
                {!formData.noWebsite && (
                  <input
                    type="text"
                    placeholder="e.g. www.yourbusiness.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9]"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Direct Phone or Business Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="contact@yourbusiness.com or your WhatsApp number"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9]"
                />
              </div>

              {/* Multi-Select Interests */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  What are you looking to improve?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((opt) => {
                    const isChecked = formData.interests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`px-3 py-2 rounded-xl text-left text-xs font-medium border transition-colors flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#39AFB9]/20 border-[#39AFB9] text-white font-bold'
                            : 'bg-white/[0.03] border-white/10 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{opt}</span>
                        {isChecked && <FiCheck className="w-3.5 h-3.5 text-[#39AFB9] shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <span>Request Free Demo & Audit</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <FiClock className="w-3.5 h-3.5 text-[#39AFB9]" />
                  Free 15-Minute Session
                </span>
                <span className="flex items-center gap-1">
                  <FiShield className="w-3.5 h-3.5 text-emerald-400" />
                  No Credit Card Required
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Demo Request Received
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
              We are preparing a local search visibility audit and live platform demo for <strong className="text-white">{formData.businessName}</strong> in <strong className="text-white">{formData.city}</strong>.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-left text-xs font-mono space-y-1.5 text-slate-300">
              <div><span className="text-slate-400">Industry:</span> {formData.industry}</div>
              <div><span className="text-slate-400">Contact:</span> {formData.contact}</div>
              <div><span className="text-slate-400">Expected Response:</span> Within 2 business hours</div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-xs font-semibold text-white transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
