import React from 'react';

/**
 * Faq Component
 * Built using native semantic <details> and <summary> elements.
 * The + / − toggle indicator is handled purely and reliably via CSS (details[open]),
 * ensuring full accessibility and eliminating React synthetic event lifecycle issues.
 */
export default function Faq({ faqs = [] }) {
  return (
    <section className="section" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-header">
          <h2>Frequently asked questions</h2>
          <p>Key information regarding clinical reviews, hospital admission, logistics, and payments.</p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-summary">
                <span>{item.q}</span>
                <span className="faq-toggle-icon" aria-hidden="true"></span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
