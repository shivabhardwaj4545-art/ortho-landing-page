import React from 'react';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function MobileBar({
  phone = '+91 98765 43210 [EDIT]',
  whatsappNumber = '+91 98765 43210 [EDIT]',
  specialty = 'medical treatment'
}) {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  const cleanWhatsApp = whatsappNumber.replace(/[^0-9]/g, '');

  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    `Hello, I would like to inquire about ${specialty} in India.`
  )}`;

  const handleWhatsApp = () => {
    trackWhatsAppClick('mobile_bar');
  };

  return (
    <nav className="mobile-bar" aria-label="Quick contact actions">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="btn btn-solid-whatsapp"
        aria-label="Chat with coordinator on WhatsApp"
      >
        WhatsApp
      </a>

      <a
        href={`tel:${cleanPhone}`}
        className="btn btn-cta"
        aria-label={`Call coordinator at ${phone}`}
      >
        Call
      </a>
    </nav>
  );
}

