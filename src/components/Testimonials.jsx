import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="text-xs uppercase font-mono tracking-widest text-[#00828B] font-bold mb-3">
            Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2233] tracking-tight">
            Trusted by local business owners nationwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-[#0C2233]">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
