import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

export default function LiveSocialProofToast() {
  const [visible, setVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const notifications = [
    { title: 'Apex Law & Advisory', location: 'Denver, CO', action: 'ranked #1 on Google Local Pack', time: '4m ago' },
    { title: 'Solstice Aesthetic Clinic', location: 'Austin, TX', action: 'received 12 new online bookings', time: '18m ago' },
    { title: 'Summit Home Systems', location: 'Charlotte, NC', action: 'synced 50+ local directories', time: '35m ago' },
    { title: 'Vela Specialty Goods', location: 'Chicago, IL', action: 'launched automated 5-star review engine', time: '1h ago' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [notifications.length]);

  if (!visible) return null;

  const current = notifications[currentIndex];

  return (
    <div className="fixed bottom-5 left-5 z-40 hidden sm:block animate-fade-in">
      <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
          <FiCheckCircle className="w-4 h-4" />
        </div>
        <div className="text-xs flex-1">
          <div className="font-bold text-[#0C2233]">
            {current.title} <span className="text-[10px] font-mono text-slate-500 font-normal">({current.location})</span>
          </div>
          <div className="text-[11px] text-slate-600 mt-0.5">
            {current.action}
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-[#0C2233] p-1 rounded-lg"
          aria-label="Dismiss Notification"
        >
          <FiX className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

