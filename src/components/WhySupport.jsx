import React from 'react';

export default function WhySupport() {
  const supportItems = [
    {
      title: 'International patient desk',
      desc: 'Direct priority liaison at partner hospitals ensuring no admission delays, queue skipping for diagnostics, and dedicated executive handling.'
    },
    {
      title: 'Medical interpreters',
      desc: 'Fluent native-language interpreters for Arabic, French, Russian, Bengali, and Swahili accompanying you throughout all clinical consultations.'
    },
    {
      title: 'Airport transfer & logistics',
      desc: 'Complimentary private vehicle or medical ambulance reception directly from Delhi, Mumbai, or Bangalore international terminals to the hospital.'
    },
    {
      title: 'Stay for family & attendants',
      desc: 'Assistance booking clean, vetted serviced apartments and hotels with kitchenette amenities near the hospital campus at negotiated patient rates.'
    },
    {
      title: 'Written cost estimates',
      desc: 'Clear, itemized pre-admission treatment quotes signed by hospital billing directors, guaranteeing no surprise brokerage commissions.'
    },
    {
      title: 'Post-discharge follow-up',
      desc: 'Scheduled video consultations with your operating surgeon and continuity of care communication after you fly back to your home country.'
    }
  ];

  return (
    <section className="section" aria-label="End-to-End International Patient Support">
      <div className="container">
        <div className="section-header">
          <h2>Why travel with our support</h2>
          <p>Complete logistical, linguistic, and clinical coordination so you can focus entirely on recovery.</p>
        </div>

        <div className="support-grid">
          {supportItems.map((item, idx) => (
            <div key={idx} className="support-item">
              <h3 className="support-title">{item.title}</h3>
              <p className="support-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

