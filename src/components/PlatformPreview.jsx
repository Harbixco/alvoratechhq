import React, { useState } from 'react';
import { 
  FiInbox, 
  FiCalendar, 
  FiCreditCard, 
  FiStar, 
  FiArrowUpRight 
} from 'react-icons/fi';

export default function PlatformPreview({ onOpenDemoModal }) {
  const [activeModule, setActiveModule] = useState('inbox');

  const modules = [
    {
      id: 'inbox',
      name: 'Unified Lead Inbox',
      icon: FiInbox,
      description: 'Capture every message from your website form, SMS, and WhatsApp into one organized feed.',
    },
    {
      id: 'calendar',
      name: 'Appointment Scheduling',
      icon: FiCalendar,
      description: 'Let customers book their own appointments online without phone tag, synced directly to your calendar.',
    },
    {
      id: 'invoicing',
      name: 'Invoicing & Payments',
      icon: FiCreditCard,
      description: 'Send professional digital invoices in seconds and accept credit cards, debit, or Apple Pay.',
    },
    {
      id: 'reviews',
      name: '5-Star Review Engine',
      icon: FiStar,
      description: 'Automatically text review requests to satisfied clients right after a job or purchase is completed.',
    },
  ];

  return (
    <section id="platform" className="py-10 sm:py-14 bg-[#07172C] border-t border-[#133560] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-widest text-[#39AFB9] font-bold mb-3">
              Operations Center
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              The All-In-One Business Management Platform.
            </h2>
            <p className="mt-4 text-sm text-slate-200/90">
              Run your entire small business from one intuitive interface. Eliminate disconnected spreadsheets, manual text messages, and lost leads.
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="group self-start md:self-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#FF9718] hover:bg-[#E8860F] text-xs font-bold text-white transition-all shadow-glow-orange hover:scale-105 active:scale-95"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
            <span>Request Live Demo</span>
          </button>
        </div>

        {/* Module Switcher Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isSelected = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0E284A] border-2 border-[#FF9718] shadow-glow-orange'
                    : 'bg-[#0A1F3C] border-[#163862] hover:border-[#39AFB9]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-[#FF9718] text-white' : 'bg-white/[0.08] text-[#39AFB9]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#FF9718] animate-pulse" />
                  )}
                </div>
                <div>
                  <div className={`text-xs font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {mod.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Platform Screen Simulation */}
        <div className="rounded-3xl bg-[#0A203C] border border-[#163862] p-6 sm:p-8 shadow-2xl">
          {/* Module: Lead Inbox */}
          {activeModule === 'inbox' && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FiInbox className="text-[#39AFB9] w-4 h-4" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Customer Inbox & Lead Routing
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                  Instant SMS Sync Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E284A] border border-[#39AFB9]/40">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>Jonathan Reed</span>
                    <span className="text-[10px] font-mono text-[#FF9718]">Website Quote</span>
                  </div>
                  <div className="text-slate-300 mb-2">"Looking for a full service proposal for our local clinic..."</div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
                    <span>Phone: (512) 490-2101</span>
                    <span className="text-emerald-400 font-bold">● New Lead</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>Claire Montgomery</span>
                    <span className="text-[10px] font-mono text-slate-400">Google Business Msg</span>
                  </div>
                  <div className="text-slate-300 mb-2">"Do you have availability for consultation this Friday afternoon?"</div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
                    <span>Channel: Google Maps</span>
                    <span>18m ago</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex items-center justify-between font-bold text-white mb-1">
                    <span>Horizon Logistics</span>
                    <span className="text-[10px] font-mono text-slate-400">Contact Form</span>
                  </div>
                  <div className="text-slate-300 mb-2">"Ready to move forward with the annual contract."</div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
                    <span>Status: High Priority</span>
                    <span>1h ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Module: Calendar & Scheduling */}
          {activeModule === 'calendar' && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-[#39AFB9] w-4 h-4" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Automated Appointment Calendar
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#39AFB9] bg-[#39AFB9]/15 px-2.5 py-1 rounded border border-[#39AFB9]/30 font-bold">
                  Google & Outlook Calendar Synced
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0E284A] border border-[#39AFB9]/40">
                  <div className="font-bold text-white">09:30 AM — Consultation Session</div>
                  <div className="text-slate-200 mt-1">Client: Marcus Vance</div>
                  <div className="text-[10px] font-mono text-[#FF9718] mt-2 font-bold">Automated SMS Reminder Sent</div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="font-bold text-white">01:00 PM — Site Inspection</div>
                  <div className="text-slate-200 mt-1">Client: Elena Rostova</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-2">Confirmed via Online Booking Link</div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="font-bold text-white">03:30 PM — Service Review</div>
                  <div className="text-slate-200 mt-1">Client: Apex Studio Group</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-2 font-bold">Deposit Paid Online ($150)</div>
                </div>
              </div>
            </div>
          )}

          {/* Module: Invoicing & Payments */}
          {activeModule === 'invoicing' && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FiCreditCard className="text-[#FF9718] w-4 h-4" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Instant Invoicing & Digital Payments
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 font-bold">
                  Stripe & Apple Pay Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-slate-400">Invoice #2041</span>
                    <span className="text-emerald-400 font-bold">$1,250.00</span>
                  </div>
                  <div className="text-white font-semibold">Thorne Medical Center</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-2 font-bold">✓ Paid via Credit Card</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0E284A] border border-[#39AFB9]/40">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-slate-400">Invoice #2042</span>
                    <span className="text-[#FF9718] font-bold">$480.00</span>
                  </div>
                  <div className="text-white font-semibold">David Chen Architecture</div>
                  <div className="text-[10px] text-[#39AFB9] font-mono mt-2 font-bold">Sent via SMS (Viewing Now)</div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-slate-400">Invoice #2043</span>
                    <span className="text-amber-400 font-bold">$890.00</span>
                  </div>
                  <div className="text-white font-semibold">Vela Goods & Living</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-2">Auto-Reminder in 24 Hours</div>
                </div>
              </div>
            </div>
          )}

          {/* Module: Reviews */}
          {activeModule === 'reviews' && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FiStar className="text-amber-400 w-4 h-4 fill-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Automated 5-Star Reputation Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 font-bold">
                  Google & Yelp Auto-Syndication
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    ★★★★★
                  </div>
                  <div className="text-white font-semibold">"Best customer service in town"</div>
                  <div className="text-slate-300 mt-1">Reviewer: Michael B. via Google Business</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-2 font-bold">✓ Auto-syndicated to Website</div>
                </div>

                <div className="p-4 rounded-xl bg-[#081B34] border border-[#163862]">
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    ★★★★★
                  </div>
                  <div className="text-white font-semibold">"Booked online in 30 seconds"</div>
                  <div className="text-slate-300 mt-1">Reviewer: Jessica S. via Yelp Verified</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-2 font-bold">✓ Auto-syndicated to Website</div>
                </div>

                <div className="p-4 rounded-xl bg-[#0E284A] border border-[#39AFB9]/40">
                  <div className="text-xs font-semibold text-white mb-1">Review Trigger Engine</div>
                  <div className="text-slate-300">14 review requests sent today via SMS. 6 reviews generated (42% response).</div>
                  <div className="text-[10px] text-[#39AFB9] font-mono mt-2 font-bold">Next batch scheduled: 5:00 PM</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
