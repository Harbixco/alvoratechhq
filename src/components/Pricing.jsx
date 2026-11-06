import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/content';
import { FiCheck, FiArrowUpRight, FiZap } from 'react-icons/fi';

export default function Pricing({ onOpenDemoModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'upfront'

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
            Transparent Investment
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2233] tracking-tight">
            Plans built to fit your small business growth.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            No long-term contracts. Complete ownership of your digital assets from day one.
          </p>

          {/* Billing Switcher */}
          <div className="mt-5 inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-[#00828B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0C2233]'
              }`}
            >
              Monthly Partnership (Hosting, Updates & Support)
            </button>
            <button
              onClick={() => setBillingCycle('upfront')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                billingCycle === 'upfront'
                  ? 'bg-[#00828B] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#0C2233]'
              }`}
            >
              Turnkey Upfront Package
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.popular;
            const price = billingCycle === 'monthly' ? tier.monthlyRate : tier.upfrontRate;
            const period = billingCycle === 'monthly' ? '/ month' : ' one-time';

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#0C2E61] to-[#071830] text-white border-2 border-[#FF9718] shadow-2xl -translate-y-2'
                    : 'bg-[#F8FAFC] text-slate-800 border border-slate-200 hover:border-[#00828B] hover:bg-white hover:shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#FF9718] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-md">
                    Recommended Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold tracking-tight ${isPopular ? 'text-white' : 'text-[#0C2233]'}`}>
                      {tier.name}
                    </h3>
                    {isPopular && <FiZap className="w-5 h-5 text-[#FF9718]" />}
                  </div>

                  <p className={`text-xs mb-6 leading-relaxed ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {tier.description}
                  </p>

                  <div className={`mb-6 pb-6 border-b ${isPopular ? 'border-white/15' : 'border-slate-200'}`}>
                    <div className="flex items-baseline">
                      <span className={`text-4xl font-extrabold tracking-tight ${isPopular ? 'text-white' : 'text-[#0C2233]'}`}>
                        {price}
                      </span>
                      <span className={`text-xs font-mono ml-2 ${isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                        {period}
                      </span>
                    </div>
                    {billingCycle === 'monthly' ? (
                      <span className="text-[11px] text-emerald-600 font-mono mt-1 block font-bold">
                        Includes ongoing support, hosting & updates
                      </span>
                    ) : (
                      <span className={`text-[11px] font-mono mt-1 block font-bold ${isPopular ? 'text-[#39AFB9]' : 'text-[#00828B]'}`}>
                        Full turnkey build & directory setup
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className={`flex items-start gap-3 text-xs ${isPopular ? 'text-slate-200' : 'text-slate-700'}`}>
                        <FiCheck className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-[#39AFB9]' : 'text-[#00828B]'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-98 ${
                    isPopular
                      ? 'bg-[#FF9718] hover:bg-[#E8860F] text-white shadow-glow-orange'
                      : 'bg-[#00828B] hover:bg-[#006B72] text-white shadow-md'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
