import React from 'react';

/**
 * HeaderPhoneButton Component
 * Matches Image 1: Oval pill outlined button with teal border (#00828b), teal text, and pure white interior.
 */
export default function HeaderPhoneButton({ phoneNumber = "(855) 463-5490", className = "" }) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');

  return (
    <a
      href={`tel:+1${cleanNumber}`}
      className={`inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#00828B] hover:bg-[#00828B] text-[#00828B] hover:text-white font-bold text-sm tracking-wide transition-all duration-200 bg-white ${className}`}
      title="Call Us Today"
    >
      <span>{phoneNumber}</span>
    </a>
  );
}
