import React, { useState } from 'react';
import { FiTrendingUp, FiArrowUpRight } from 'react-icons/fi';

export default function RoiCalculator({ onOpenDemoModal }) {
  const [monthlyInquiries, setMonthlyInquiries] = useState(20);
  const [avgTicketValue, setAvgTicketValue] = useState(350);

  // Conversion increase with Townsquare-style Search Everywhere SEO + 50+ Directory Sync (~2.4x)
  const additionalLeadsMultiplier = 2.4;
  const projectedLeads = Math.round(monthlyInquiries * additionalLeadsMultiplier);
  const newMonthlyRevenue = (projectedLeads - monthlyInquiries) * avgTicketValue * 0.4; // 40% close rate on high-intent local inbound
  const annualRevenue = newMonthlyRevenue * 12;

  return (
    <section id="calculator" className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2233] tracking-tight">
            Calculate your local market potential.
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            See the projected revenue impact of ranking in your city's Google 3-Pack and synchronizing 50+ local directories.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Sliders on Clean White Background */}
            <div className="space-y-6">
              {/* Slider 1: Current Inquiries */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-[#0C2233]">Current Monthly Inquiries</label>
                  <span className="text-sm font-mono font-bold text-[#FF9718] bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    {monthlyInquiries} leads / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF9718]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1.5">
                  <span>5 leads</span>
                  <span>75 leads</span>
                  <span>150+ leads</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Value */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-[#0C2233]">Average Customer / Order Value</label>
                  <span className="text-sm font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    ${avgTicketValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3500"
                  step="50"
                  value={avgTicketValue}
                  onChange={(e) => setAvgTicketValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1.5">
                  <span>$50</span>
                  <span>$1,750</span>
                  <span>$3,500+</span>
                </div>
              </div>
            </div>

            {/* Right Column: Calculated Projection Card in Deep Navy */}
            <div className="bg-gradient-to-br from-[#0C2E61] to-[#061833] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-300 font-bold">
                  Projected New Annual Revenue
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white mt-2 tracking-tight">
                  +${Math.round(annualRevenue).toLocaleString()}
                  <span className="text-sm font-normal text-slate-300 block sm:inline sm:ml-2">/ year</span>
                </div>

                <div className="grid grid-cols-2 gap-4 my-6 pt-6 border-t border-white/15">
                  <div>
                    <div className="text-xs font-mono text-slate-300 font-semibold">Projected Leads</div>
                    <div className="text-xl font-bold text-[#39AFB9] mt-1">{projectedLeads} / mo</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">+{projectedLeads - monthlyInquiries} extra leads</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-300 font-semibold">Monthly Added Gross</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">+${Math.round(newMonthlyRevenue).toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-mono">at 40% inbound close</div>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF9718] hover:bg-[#E8860F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Discuss Your Growth Plan</span>
                <FiArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
