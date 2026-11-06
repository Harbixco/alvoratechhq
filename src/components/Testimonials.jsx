import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
            Proven Outcomes
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0C2233] tracking-tight">
            Built for operators who value numbers over promises.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md flex flex-col justify-between transition-all"
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-5">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0C2233]">{t.author}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
