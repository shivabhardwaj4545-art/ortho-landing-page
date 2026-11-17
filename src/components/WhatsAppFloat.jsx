import React from 'react';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function WhatsAppFloat({
  whatsappNumber = '+91 98765 43210 [EDIT]',
  specialty = 'medical treatment'
}) {
  const cleanWhatsApp = whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    `Hello, I would like to inquire about ${specialty} in India.`
  )}`;

  const handleClick = () => {
    trackWhatsAppClick('floating_pill');
  };

  return (
    <aside aria-label="Floating WhatsApp Inquiry">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="whatsapp-float"
        aria-label="Direct WhatsApp assistance with our medical coordinator"
      >
        <span>WhatsApp us</span>
      </a>
    </aside>
  );
}

