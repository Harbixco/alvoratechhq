import React, { useState } from 'react';
import { FiSearch, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export default function DigitalAuditTool({ onOpenDemoModal }) {
  const [businessName, setBusinessName] = useState('');
  const [cityOrZip, setCityOrZip] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!businessName || !cityOrZip || !contact) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBusinessName('');
    setCityOrZip('');
    setContact('');
  };

  return (
    <section className="py-12 sm:py-16 bg-[#07172C] border-t border-[#133560] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See how your business ranks locally.
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Our digital marketing specialists evaluate your Google 3-Pack visibility, directory accuracy across 50+ networks, and competitor search footprint.
          </p>
        </div>

        {/* Audit Intake Box */}
        <div className="bg-[#0A203C] rounded-2xl p-6 sm:p-8 border border-[#163862] shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Legal Group"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    City, State or ZIP
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Austin, TX"
                    value={cityOrZip}
                    onChange={(e) => setCityOrZip(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Where to send report"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400">
                  Complimentary diagnostic • No obligation • Delivered within 24 hours
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FiSearch className="w-3.5 h-3.5" />
                  <span>Request Free Audit</span>
                </button>
              </div>
            </form>
          ) : (
            /* Confirmed Status View */
            <div className="text-center py-6 animate-fade-in space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Audit Request Received for {businessName}
              </h3>
              <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                A digital specialist is analyzing your local presence in {cityOrZip}. Your comprehensive report will be delivered to <span className="text-white font-bold">{contact}</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-2.5 rounded-xl bg-[#00828B] hover:bg-[#006B72] text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Speak With a Specialist Now</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Submit Another Business
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
