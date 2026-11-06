import React, { useState } from 'react';
import { PRICING_TIERS } from '../data/content';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function Pricing({ onOpenDemoModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'upfront'

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2233] tracking-tight">
            Plans built for growing small businesses.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            No long-term contracts. Complete ownership of your domain and digital assets.
          </p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#0C2233] shadow-xs'
                  : 'text-slate-600 hover:text-[#0C2233]'
              }`}
            >
              Monthly Partnership
            </button>
            <button
              onClick={() => setBillingCycle('upfront')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-150 ${
                billingCycle === 'upfront'
                  ? 'bg-white text-[#0C2233] shadow-xs'
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
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  isPopular
                    ? 'bg-[#0C2E61] text-white border-2 border-[#00828B] shadow-xl'
                    : 'bg-[#F8FAFC] text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00828B] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold tracking-tight ${isPopular ? 'text-white' : 'text-[#0C2233]'}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <p className={`text-xs mb-6 leading-relaxed ${isPopular ? 'text-slate-200' : 'text-slate-600'}`}>
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
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className={`flex items-start gap-3 text-xs ${isPopular ? 'text-slate-100' : 'text-slate-700'}`}>
                        <FiCheck className={`w-4 h-4 shrink-0 mt-0.5 ${isPopular ? 'text-[#39AFB9]' : 'text-[#00828B]'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    isPopular
                      ? 'bg-[#FF9718] hover:bg-[#E8860F] text-white shadow-md'
                      : 'bg-[#00828B] hover:bg-[#006B72] text-white shadow-xs'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
