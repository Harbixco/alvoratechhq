import React, { useState } from 'react';
import { DEMO_SHOWCASES } from '../data/content';
import { 
  FiExternalLink, 
  FiCheck, 
  FiSmartphone, 
  FiMonitor, 
  FiZap, 
  FiTrendingUp, 
  FiEye,
  FiX
} from 'react-icons/fi';

export default function LiveDemoShowcase({ onOpenProjectModal }) {
  const [activeTab, setActiveTab] = useState(DEMO_SHOWCASES[0].id);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'

  const currentDemo = DEMO_SHOWCASES.find((d) => d.id === activeTab) || DEMO_SHOWCASES[0];

  return (
    <section id="showcase" className="py-24 bg-[#0A0D14] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold mb-3">
              Turnkey Production Demos
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Tested templates built for real business revenue.
            </h2>
          </div>
          <button
            onClick={onOpenProjectModal}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-slate-200 transition-colors"
          >
            <span>Request Custom Demo for Your Industry</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {DEMO_SHOWCASES.map((demo) => {
            const isSelected = activeTab === demo.id;
            return (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-glow-brand'
                    : 'bg-[#12151F] text-slate-400 border-white/[0.06] hover:text-white hover:border-white/[0.12]'
                }`}
              >
                <span>{demo.category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/[0.05] text-slate-400'
                  }`}
                >
                  {demo.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase Main Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F121C] rounded-3xl p-6 sm:p-10 border border-white/[0.08]">
          {/* Left Column: Specs & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-indigo-300 mb-4">
                <span>{currentDemo.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentDemo.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                {currentDemo.tagline}
              </p>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-6 border-t border-white/[0.06]">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] uppercase font-mono text-slate-400">PageSpeed</div>
                  <div className="text-base font-bold text-white mt-0.5">{currentDemo.stats.speed}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Leads</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">{currentDemo.stats.conversion}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-[10px] uppercase font-mono text-slate-400">Ranking</div>
                  <div className="text-base font-bold text-indigo-400 mt-0.5">{currentDemo.stats.rank}</div>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2.5 mb-8">
                {currentDemo.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/[0.06]">
              <button
                onClick={() => setPreviewModalOpen(true)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-glow-brand"
              >
                <FiEye className="w-4 h-4" />
                <span>Launch Interactive Demo</span>
              </button>
              <button
                onClick={onOpenProjectModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>Use This Architecture</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Device Simulation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl p-2 bg-[#080A10] border border-white/[0.1] shadow-2xl overflow-hidden group">
              {/* Device Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#12151F] rounded-xl border border-white/[0.06] mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                  alvoratechhq.com/demo/{currentDemo.id}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Interactive</span>
                </div>
              </div>

              {/* Visual Showcase Graphic */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#07090E]">
                <img
                  src={currentDemo.image}
                  alt={currentDemo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080A10] via-[#080A10]/30 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-300">Live Production Snapshot</div>
                      <div className="text-xl font-bold text-white mt-0.5">{currentDemo.title}</div>
                    </div>
                    <button
                      onClick={() => setPreviewModalOpen(true)}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Click to Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive In-App Demo Modal */}
      {previewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-4xl bg-[#0F121C] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0C0E17]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-bold text-white text-sm">{currentDemo.title} — Live Interactive Simulation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white/[0.05] p-1 rounded-lg border border-white/[0.08]">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      viewMode === 'desktop' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FiMonitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-1.5 rounded text-xs transition-colors ${
                      viewMode === 'mobile' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FiSmartphone className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setPreviewModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Interactive Content Frame */}
            <div className="flex-1 overflow-y-auto p-6 flex justify-center bg-[#07090E]">
              <div
                className={`transition-all duration-300 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0C0E17] flex flex-col ${
                  viewMode === 'mobile' ? 'w-[375px]' : 'w-full'
                }`}
              >
                {/* Simulated Webpage Header */}
                <div className="p-4 border-b border-white/[0.06] flex items-center justify-between bg-[#111420]">
                  <div className="font-bold text-white text-sm tracking-tight">{currentDemo.title}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-emerald-400">● Open 24/7</span>
                    <button className="px-3 py-1 rounded bg-indigo-600 text-[11px] font-semibold text-white">
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Simulated Hero */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={currentDemo.image} alt="Demo Hero" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-center">
                    <span className="text-xs font-mono text-indigo-400 uppercase font-semibold">Immediate Dispatch</span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Professional {currentDemo.category} in Your Area
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 max-w-md">
                      Licensed, insured, and verified. 100% upfront pricing with zero hidden emergency fees.
                    </p>
                  </div>
                </div>

                {/* Simulated Conversion Form */}
                <div className="p-6 bg-[#0E1118]">
                  <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                    Fast Inquiry & Quote Generator
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      readOnly
                      defaultValue="Marcus Sterling"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      readOnly
                      defaultValue="(512) 890-4412"
                    />
                  </div>
                  <button
                    onClick={() => {
                      alert('Simulated lead sent! In production, this instantly notifies your phone via SMS & WhatsApp.');
                    }}
                    className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-colors"
                  >
                    Test Instant Lead Dispatch
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0C0E17] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Want this exact high-converting template configured for your business in 7 days?
              </span>
              <button
                onClick={() => {
                  setPreviewModalOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Claim This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

