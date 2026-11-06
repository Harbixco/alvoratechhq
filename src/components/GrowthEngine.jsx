import React from 'react';
import { COMPARISON_METRICS } from '../data/content';
import { FiXCircle, FiCheckCircle, FiZap, FiSearch, FiSmartphone, FiDatabase } from 'react-icons/fi';

export default function GrowthEngine() {
  return (
    <section id="engine" className="py-24 bg-[#08090D] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold mb-3">
            The Performance Gap
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why 80% of local websites fail to generate revenue.
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Slow loading times and missing directory sync silently divert customers to your competitors every single day.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legacy / Typical Website Card */}
          <div className="p-8 rounded-3xl bg-[#0D0F15] border border-rose-500/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                Typical Outdated Website
              </span>
              <span className="text-xs font-mono text-slate-500">Industry Average</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-slate-400">Mobile PageSpeed</div>
                <div className="text-2xl font-bold text-rose-400 mt-1">34 - 55 / 100</div>
                <div className="text-xs text-slate-400 mt-1">Visitors bounce after waiting 4+ seconds</div>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <div className="text-xs font-mono text-slate-400">Local Search Visibility</div>
                <div className="text-base font-semibold text-slate-300 mt-1">Buried on Page 2–4 of Google</div>
                <div className="text-xs text-slate-400 mt-1">No schema, missing categories, unverified pins</div>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <div className="text-xs font-mono text-slate-400">Directory Consistency</div>
                <div className="text-base font-semibold text-slate-300 mt-1">Mismatched NAP Data</div>
                <div className="text-xs text-slate-400 mt-1">Conflicting addresses on Apple Maps, Yelp & Bing</div>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <div className="text-xs font-mono text-slate-400">Lead Notification</div>
                <div className="text-base font-semibold text-slate-300 mt-1">Passive Email Inbox</div>
                <div className="text-xs text-slate-400 mt-1">Leads sit unread for hours or end up in Spam</div>
              </div>
            </div>
          </div>

          {/* Alvora Tech Engineered Architecture Card */}
          <div className="p-8 rounded-3xl bg-[#0F1320] border border-indigo-500/30 relative overflow-hidden shadow-glow-brand">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Alvora Tech Platform
              </span>
              <span className="text-xs font-mono text-indigo-300">alvoratechhq.com</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-slate-400">Mobile PageSpeed</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">98 - 100 / 100</div>
                <div className="text-xs text-slate-300 mt-1">Sub-second 0.6s Time-to-Interactive</div>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-xs font-mono text-slate-400">Local Search Visibility</div>
                <div className="text-base font-semibold text-white mt-1">Google 3-Pack Guaranteed Positioning</div>
                <div className="text-xs text-slate-300 mt-1">Geo-targeted landing pages & verified Local SEO schema</div>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-xs font-mono text-slate-400">Directory Consistency</div>
                <div className="text-base font-semibold text-white mt-1">50+ Tier-1 Networks Synchronized</div>
                <div className="text-xs text-slate-300 mt-1">One central dashboard auto-syncs Apple Maps, Yelp & Bing</div>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                <div className="text-xs font-mono text-slate-400">Lead Notification</div>
                <div className="text-base font-semibold text-emerald-400 mt-1">Immediate SMS & WhatsApp Routing</div>
                <div className="text-xs text-slate-300 mt-1">Receive buyer details within 15 seconds of form submission</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
