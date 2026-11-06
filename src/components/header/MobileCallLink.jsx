import React from 'react';

/**
 * MobileCallLink Component
 * Dedicated call link component for mobile screens.
 */
export default function MobileCallLink({ phoneNumber = "(855) 463-5490", className = "" }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <a
      href={`tel:+1${cleanNumber}`}
      className={`px-3 py-1.5 rounded-full border border-[#00828B] text-[#00828B] text-xs font-bold sm:hidden hover:bg-[#00828B] hover:text-white transition-colors ${className}`}
      title="Call Us Directly"
    >
      Call
    </a>
  );
}

