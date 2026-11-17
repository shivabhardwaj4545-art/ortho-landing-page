import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { Phone } from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function StickyMobileBar() {
  const cleanWhatsApp = LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  const cleanPhone = LWE_CONTACT.primaryPhone.replace(/[^0-9+]/g, '');

  const handleWhatsApp = () => {
    trackWhatsAppClick('sticky_mobile_bar');
  };

  return (
    <div className="lwe-sticky-mobile-bar" aria-label="Quick contact actions">
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
          'Hello LWE Patient Care, I need consultation for medical treatment in India.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="btn btn-solid-whatsapp mobile-bar-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={20} />
        <span>WhatsApp</span>
      </a>

      <a
        href={`tel:${cleanPhone}`}
        className="btn btn-cta mobile-bar-btn"
        aria-label={`Call ${LWE_CONTACT.primaryPhone}`}
      >
        <Phone size={18} />
        <span>Call Doctor</span>
      </a>
    </div>
  );
}

