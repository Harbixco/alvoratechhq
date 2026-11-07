import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * MobileCallLink Component
 * Dedicated WhatsApp quick link for mobile screens
 */
export default function MobileCallLink({ phoneNumber = "+1 (412) 769-3968", className = "" }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <a
      href={`https://wa.me/${cleanNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#25D366] bg-emerald-50 text-[#0C2233] text-xs font-bold sm:hidden hover:bg-[#25D366] hover:text-white transition-colors ${className}`}
      title="Message us on WhatsApp"
      aria-label="Message us on WhatsApp"
    >
      <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
      <span>WhatsApp</span>
    </a>
  );
}
