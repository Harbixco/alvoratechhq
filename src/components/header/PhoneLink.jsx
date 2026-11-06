import React from 'react';

/**
 * PhoneLink Component
 * Outlined pill call button link in header matching Image 1.
 */
export default function PhoneLink({ phoneNumber = "(855) 463-5490", className = "" }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <a
      href={`tel:+1${cleanNumber}`}
      className={`inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#00828B] hover:bg-[#00828B] text-[#00828B] hover:text-white font-bold text-sm tracking-wide transition-all duration-200 bg-white shadow-xs ${className}`}
      title="Call Us Directly"
    >
      <span>{phoneNumber}</span>
    </a>
  );
}

