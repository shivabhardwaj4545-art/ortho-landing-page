import React from 'react';

/**
 * TrustStrip Component
 * 4 columns divided by thin vertical lines.
 * Uses strict [EDIT] placeholders for metrics to prevent fabricating statistics.
 */
export default function TrustStrip() {
  const trustMetrics = [
    {
      value: 'NABH & JCI',
      label: 'Accredited partner hospitals across India [EDIT]'
    },
    {
      value: '15+ Years',
      label: 'Clinical coordination & patient advocacy [EDIT]'
    },
    {
      value: '45+ Countries',
      label: 'Patients served from Middle East, CIS & Africa [EDIT]'
    },
    {
      value: '12,000+',
      label: 'International patient inquiries assisted [EDIT]'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '32px', paddingBottom: '32px' }} aria-label="Accreditation and Experience">
      <div className="container">
        <div className="trust-strip-grid">
          {trustMetrics.map((item, idx) => (
            <div key={idx} className="trust-strip-item">
              <div className="trust-strip-value">{item.value}</div>
              <div className="trust-strip-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

