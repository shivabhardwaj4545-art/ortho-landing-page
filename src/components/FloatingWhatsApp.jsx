import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { LWE_CONTACT } from '../data/lweData.js';
import { trackWhatsAppClick } from '../lib/analytics.js';

/**
 * Floating Left Dual Action Buttons
 * Matches user reference media_1794897359143_6ee5b28c.png:
 * - Opposite side (bottom-left)
 * - Green circular WhatsApp button (top) without text
 * - Blue circular Direct Call button (bottom) without text
 * - Vertically stacked with smooth hover states and glowing pulse
 */
export default function FloatingWhatsApp() {
  const cleanWhatsApp = LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  const cleanPhone = LWE_CONTACT.primaryPhone.replace(/[^0-9+]/g, '');

  const handleWhatsApp = () => {
    trackWhatsAppClick('floating_left_whatsapp');
  };

  return (
    <div className="lwe-floating-left-actions" aria-label="Direct Contact Actions">
      {/* 1. Green Circular WhatsApp Button (Top) */}
      <a
        href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
          'Hello LWE Patient Care, I need consultation for medical treatment in India.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsApp}
        className="floating-action-circle floating-circle-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="floating-circle-pulse whatsapp-pulse" aria-hidden="true" />
        <WhatsAppIcon size={30} />
      </a>

      {/* 2. Blue Circular Direct Call Button (Bottom) */}
      <a
        href={`tel:${cleanPhone}`}
        className="floating-action-circle floating-circle-call"
        aria-label={`Direct Call: ${LWE_CONTACT.primaryPhone}`}
        title={`Call Us Directly: ${LWE_CONTACT.primaryPhone}`}
      >
        <span className="floating-circle-pulse call-pulse" aria-hidden="true" />
        <Phone size={24} color="#ffffff" strokeWidth={2.4} fill="#ffffff" />
      </a>
    </div>
  );
}
