import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * PhoneLink Component
 * WhatsApp contact pill link in header
 */
export default function PhoneLink({ phoneNumber = "+1 (412) 769-3968", className = "" }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <a
      href={`https://wa.me/${cleanNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-[#25D366] hover:bg-[#25D366] text-[#0C2233] hover:text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 bg-emerald-50/40 shadow-xs group ${className}`}
      title="WhatsApp Only: +1 (412) 769-3968"
      aria-label="WhatsApp Only: +1 (412) 769-3968"
    >
      <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
      <span>{phoneNumber}</span>
      <span className="hidden xl:inline text-[10px] font-mono text-emerald-700 group-hover:text-white/90">
        (WhatsApp Only)
      </span>
    </a>
  );
}
