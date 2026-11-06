import React from 'react';
import { 
  RiGoogleFill, 
  RiAppleFill, 
  RiVercelFill, 
  RiReactjsFill,
  RiCompass3Fill,
  RiGlobalLine
} from 'react-icons/ri';
import { 
  SiStripe, 
  SiYelp
} from 'react-icons/si';

export default function BrandMarquee() {
  const networks = [
    { name: 'Google 3-Pack', icon: RiGoogleFill },
    { name: 'Apple Maps Ecosystem', icon: RiAppleFill },
    { name: 'Stripe Payments', icon: SiStripe },
    { name: 'Yelp Verified Partner', icon: SiYelp },
    { name: 'Vercel Edge Network', icon: RiVercelFill },
    { name: 'Local Search Directories', icon: RiCompass3Fill },
    { name: 'React Architecture', icon: RiReactjsFill },
  ];

  return (
    <div className="border-y border-white/[0.06] bg-[#07080C] py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 text-center">
        <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
          Native Synchronization Across Tier-1 Global Networks
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-pulse-slow gap-10 sm:gap-14 items-center justify-around w-full px-6 flex-wrap">
          {networks.map((net, idx) => {
            const Icon = net.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors duration-200"
              >
                <Icon className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium tracking-tight">{net.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
