import React from 'react';
import EnquiryForm from './EnquiryForm.jsx';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function Hero({ campaign, campaignKey, whatsappNumber = '+91 98765 43210 [EDIT]' }) {
  const cleanWhatsAppNumber = whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    `Hello, I would like to inquire about ${campaign.spec} in India.`
  )}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero');
  };

  const handleScrollToQuote = (e) => {
    e.preventDefault();
    const target = document.getElementById('quote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      const firstInput = target.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 300);
      }
    }
  };

  return (
    <section className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-grid">
        {/* Left Column: Headline, Trust Points, CTAs, Hero Photo */}
        <div className="hero-content">
          <h1>{campaign.h1}</h1>
          <p className="lead-text">{campaign.sub}</p>

          <ul className="hero-trust-list" aria-label="Key medical guarantees">
            {campaign.trust.map((item, idx) => (
              <li key={idx} className="hero-trust-item">
                {item}
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <a
              href="#quote"
              onClick={handleScrollToQuote}
              className="btn btn-cta"
            >
              Get free treatment estimate
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="btn btn-outline-whatsapp"
              aria-label="Chat directly on WhatsApp"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero-image-wrap">
            <ImagePlaceholder
              src={campaign.heroImage}
              alt={campaign.h1}
              aspectRatio="16/9"
              caption={campaign.photoCaption || 'Partner hospital advanced surgical facility 16:9'}
              priority={true}
            />
          </div>
        </div>

        {/* Right Column: Hero Instance of the Enquiry Form */}
        <div className="hero-form-wrapper">
          <EnquiryForm
            id="quote"
            instanceName="Hero Primary Form"
            defaultSpecialty={campaign.spec}
            activeCampaignKey={campaignKey}
          />
        </div>
      </div>
    </section>
  );
}

