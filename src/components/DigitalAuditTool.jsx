import React, { useState } from 'react';
import { FiSearch, FiCheckCircle, FiAlertCircle, FiArrowUpRight, FiZap, FiMapPin, FiStar, FiRefreshCw } from 'react-icons/fi';

export default function DigitalAuditTool({ onOpenDemoModal }) {
  const [businessName, setBusinessName] = useState('');
  const [cityOrZip, setCityOrZip] = useState('');
  const [scanning, setScanning] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  const steps = [
    'Querying Google Local 3-Pack positioning...',
    'Checking 50+ directory listings (Apple Maps, Yelp, Bing)...',
    'Analyzing mobile loading performance & Core Web Vitals...',
    'Scanning public customer review volume and sentiment...',
    'Compiling your Small Business Growth Scorecard...',
  ];

  const handleStartScan = (e) => {
    e.preventDefault();
    if (!businessName || !cityOrZip) return;

    setScanning(true);
    setAuditComplete(false);
    setScanStep(0);

    // Step-by-step progress simulation
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setScanning(false);
          setAuditComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <section className="py-10 sm:py-14 bg-[#07172C] border-t border-[#133560] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs uppercase font-mono tracking-widest text-[#39AFB9] font-bold mb-3">
            Instant Digital Health Check
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See how your business ranks locally.
          </h2>
          <p className="mt-4 text-sm text-slate-200/90 leading-relaxed">
            Run a complimentary diagnostic on your local search visibility, directory consistency, and mobile performance.
          </p>
        </div>

        {/* Audit Search Box */}
        <div className="bg-[#0A203C] rounded-3xl p-5 sm:p-8 border border-[#163862] shadow-2xl">
          {!auditComplete ? (
            <div>
              <form onSubmit={handleStartScan} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-6">
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Legal Group or Sterling Dental"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      disabled={scanning}
                      className="w-full px-4 py-3 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      City, State or ZIP Code
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Austin, TX or 78701"
                      value={cityOrZip}
                      onChange={(e) => setCityOrZip(e.target.value)}
                      disabled={scanning}
                      className="w-full px-4 py-3 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9] transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-end">
                    <button
                      type="submit"
                      disabled={scanning}
                      className="w-full py-3 px-4 rounded-xl bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-orange disabled:opacity-50 active:scale-95"
                    >
                      {scanning ? (
                        <>
                          <FiRefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Scanning</span>
                        </>
                      ) : (
                        <>
                          <FiSearch className="w-3.5 h-3.5" />
                          <span>Scan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Real-time Scanner Ticker */}
              {scanning && (
                <div className="mt-8 pt-6 border-t border-white/10 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                    <span className="flex items-center gap-2 text-[#39AFB9] font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#FF9718] animate-ping" />
                      {steps[scanStep]}
                    </span>
                    <span className="font-bold text-white">{Math.round(((scanStep + 1) / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#061833] rounded-full overflow-hidden border border-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF9718] to-[#39AFB9] transition-all duration-500 rounded-full"
                      style={{ width: `${((scanStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Scorecard Results View */
            <div className="animate-fade-in space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <div className="text-xs font-mono text-[#39AFB9] uppercase font-bold">
                    Digital Audit Completed
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-0.5">
                    {businessName} — {cityOrZip}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setAuditComplete(false);
                    setBusinessName('');
                    setCityOrZip('');
                  }}
                  className="text-xs text-[#FF9718] hover:text-white underline self-start sm:self-auto font-bold"
                >
                  Scan Another Business
                </button>
              </div>

              {/* 4 Scorecard Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 1. Google 3-Pack */}
                <div className="p-4 rounded-2xl bg-[#0E284A] border border-amber-500/30">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-300">Google 3-Pack</span>
                    <FiAlertCircle className="text-amber-400 w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-amber-400">Needs Optimization</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Ranking outside the top 3 for high-intent neighborhood keywords.
                  </div>
                </div>

                {/* 2. Directory Sync */}
                <div className="p-4 rounded-2xl bg-[#0E284A] border border-rose-500/30">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-300">Directory Sync</span>
                    <FiAlertCircle className="text-rose-400 w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-rose-400">18 Inconsistencies</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Mismatched address or phone numbers found on Apple Maps & Yelp.
                  </div>
                </div>

                {/* 3. Mobile Speed */}
                <div className="p-4 rounded-2xl bg-[#0E284A] border border-emerald-500/30">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-300">Mobile Speed</span>
                    <FiZap className="text-emerald-400 w-4 h-4" />
                  </div>
                  <div className="text-lg font-bold text-emerald-400">Target: 0.6s LCP</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Modernizing to Alvora Tech stack will reduce bounce rates by ~58%.
                  </div>
                </div>

                {/* 4. Review Velocity */}
                <div className="p-4 rounded-2xl bg-[#0E284A] border border-[#39AFB9]/40">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-slate-300">Review Engine</span>
                    <FiStar className="text-[#39AFB9] w-4 h-4 fill-[#39AFB9]" />
                  </div>
                  <div className="text-lg font-bold text-[#39AFB9]">Growth Opportunity</div>
                  <div className="text-[11px] text-slate-300 mt-1">
                    Competitors average 40+ more reviews in your local radius.
                  </div>
                </div>
              </div>

              {/* Action Banner */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-200">
                  Ready to fix directory inconsistencies and claim the #1 Google 3-Pack spot in {cityOrZip}?
                </div>
                <button
                  onClick={onOpenDemoModal}
                  className="group w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-glow-orange hover:scale-105 active:scale-95"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Review Solutions with a Specialist</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
