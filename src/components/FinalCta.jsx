import React from 'react';
import EnquiryForm from './EnquiryForm.jsx';

export default function FinalCta({ campaign, campaignKey }) {
  const handleScrollToQuote = (e) => {
    e.preventDefault();
    const heroQuote = document.getElementById('quote');
    if (heroQuote) {
      heroQuote.scrollIntoView({ behavior: 'smooth' });
      const input = heroQuote.querySelector('input');
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    }
  };

  return (
    <section className="final-cta-section" aria-label="Request Treatment Estimate">
      <div className="container">
        <div className="final-cta-inner">
          <div>
            <h2>Send your reports. Get your estimate in one working day.</h2>
            <p>
              Share your diagnosis or scans with our medical team. We will coordinate directly with
              senior department directors at accredited hospitals across India to provide an itemized,
              transparent treatment estimate without any obligation.
            </p>
            <div style={{ marginBottom: '24px' }}>
              <a
                href="#quote"
                onClick={handleScrollToQuote}
                className="btn btn-cta"
              >
                Scroll to main form
              </a>
            </div>
            <ul style={{ listStyle: 'none', color: '#c3dbdd', fontSize: '14px', lineHeight: '1.8' }}>
              <li>✓ No broker markups or hidden coordination fees</li>
              <li>✓ Medical visa invitation letters provided directly by partner hospitals</li>
              <li>✓ Free airport reception &amp; multi-lingual medical interpreter assistance</li>
            </ul>
          </div>

          <div>
            {/* Second instance of the shared EnquiryForm */}
            <EnquiryForm
              id="quote-final"
              instanceName="Final CTA Form"
              defaultSpecialty={campaign.spec}
              activeCampaignKey={campaignKey}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

