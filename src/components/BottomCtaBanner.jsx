import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { CheckCircle2, Phone, Landmark } from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function BottomCtaBanner({ title = 'Get Expert Orthopedic Surgery in India with Complete Support' }) {
  const handleWhatsApp = () => {
    trackWhatsAppClick('bottom_banner');
  };

  return (
    <section className="lwe-bottom-cta-banner" aria-label="Expert Medical Travel Support">
      <div className="container bottom-banner-container">
        {/* Left: India Gate Graphic & Headline */}
        <div className="bottom-banner-left">
          <div className="india-gate-badge">
            <Landmark size={32} color="#e0a526" />
          </div>
          <div>
            <h2 className="bottom-banner-title">{title}</h2>
            <div className="bottom-banner-checklist">
              <span className="banner-check-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Right Doctor &amp; Hospital</span>
              </span>
              <span className="banner-check-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Transparent Cost Estimate</span>
              </span>
              <span className="banner-check-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Visa, Travel &amp; Stay Assistance</span>
              </span>
              <span className="banner-check-item">
                <CheckCircle2 size={16} color="#10b981" />
                <span>Dedicated Patient Coordinator</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Contact Buttons */}
        <div className="bottom-banner-actions">
          <a
            href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hello LWE Patient Care, I need expert medical treatment assistance in India.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="btn btn-solid-whatsapp banner-btn"
          >
            <WhatsAppIcon size={22} />
            <span>Chat on WhatsApp</span>
            <strong>{LWE_CONTACT.primaryPhone}</strong>
          </a>

          <a
            href={`tel:${LWE_CONTACT.secondaryPhone.replace(/[^0-9+]/g, '')}`}
            className="btn btn-light-contact banner-btn"
          >
            <Phone size={20} color="#0284c7" />
            <span>Call Us</span>
            <strong>{LWE_CONTACT.secondaryPhone}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

