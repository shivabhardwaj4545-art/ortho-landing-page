import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Send your reports',
      desc: 'Submit your recent diagnostic scans, MRI/CT reports, and physician summaries securely through our form or WhatsApp.'
    },
    {
      title: 'Get a free opinion',
      desc: 'Chief consultants from 2 to 3 leading accredited hospital networks review your file and provide customized treatment opinions and cost estimates.'
    },
    {
      title: 'Visa and travel',
      desc: 'Receive your official hospital Visa Invitation Letter for swift e-Medical Visa approval, along with airport pickup and stay coordination.'
    },
    {
      title: 'Treatment and aftercare',
      desc: 'Undergo treatment with personal bedside assistance, dedicated interpreters, post-discharge review, and tele-health follow-ups once home.'
    }
  ];

  return (
    <section className="section section-alt" id="how-it-works" aria-label="How the Medical Travel Process Works">
      <div className="container">
        <div className="section-header">
          <h2>How it works</h2>
          <p>A structured, hospital-direct process from initial medical file review to your safe return home.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

