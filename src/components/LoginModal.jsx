import React, { useState } from 'react';
import { FiX, FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLogged(true);
    setTimeout(() => {
      setLogged(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-sm bg-[#0A203C] border border-[#1A4274] rounded-3xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          aria-label="Close"
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <Logo size="small" showDomain={false} className="mb-3" />
          <h3 className="text-xl font-bold text-white tracking-tight">
            Client Portal Login
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access your website editor, CRM leads & review management dashboard.
          </p>
        </div>

        {logged ? (
          <div className="text-center py-8 text-emerald-400 text-xs font-mono">
            Signing in...
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Business Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" />
                <input
                  type="email"
                  required
                  placeholder="owner@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-3 text-slate-400 w-4 h-4" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07172C] border border-[#183E6C] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#39AFB9]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#00828B] hover:bg-[#006B72] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
            >
              <span>Sign In to Dashboard</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-center text-[11px] text-slate-400 pt-2 leading-relaxed">
              Need assistance? Email{' '}
              <a href="mailto:info@alvoratechhq.com" className="text-[#00828B] hover:underline font-medium">
                info@alvoratechhq.com
              </a>{' '}
              or chat on{' '}
              <a
                href="https://wa.me/14127693968"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-semibold"
              >
                WhatsApp (+1 412 769-3968)
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

