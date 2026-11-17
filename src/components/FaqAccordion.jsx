import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { Plus, Minus, Phone, Send, HelpCircle } from 'lucide-react';
import { FAQS, LWE_CONTACT } from '../data/lweData.js';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function FaqAccordion({ onAskQuestion }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('faq_box');
  };

  return (
    <section className="lwe-faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="faq-tag-pill">
            <HelpCircle size={14} color="#0284c7" />
            <span>GOT QUESTIONS? WE’VE GOT ANSWERS</span>
          </div>
          <h2 className="section-title-bold">Frequently Asked Questions</h2>
          <p className="section-subtitle-muted">
            Find quick answers to common questions about medical treatment in India, visa assistance, hospital admission, and LWE Patient Care services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`faq-accordion-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon-wrapper" aria-hidden="true">
                    {isOpen ? <Minus size={18} color="#0284c7" /> : <Plus size={18} color="#64748b" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-answer-container"
                    role="region"
                  >
                    <p className="faq-answer-p">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box from PDF Page 5 */}
        <div className="faq-support-box">
          <h3 className="support-box-title">Still Have Questions?</h3>
          <p className="support-box-desc">
            Our international patient coordinators are available 24/7 to answer your queries in your native language.
          </p>

          <div className="support-buttons-row">
            <a
              href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello LWE Patient Care, I have questions regarding treatment in India.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="btn btn-solid-whatsapp"
            >
              <WhatsAppIcon size={20} />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${LWE_CONTACT.primaryPhone.replace(/[^0-9+]/g, '')}`}
              className="btn btn-primary"
            >
              <Phone size={18} />
              <span>Call Direct</span>
            </a>

            <button
              onClick={() => {
                if (onAskQuestion) onAskQuestion();
                else {
                  const el = document.getElementById('enquiry');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn btn-cta"
            >
              <Send size={18} />
              <span>Send Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

