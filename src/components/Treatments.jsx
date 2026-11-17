import React from 'react';

export default function Treatments({ campaign }) {
  return (
    <section className="section" aria-label="Available Treatments">
      <div className="container">
        <div className="treatments-grid">
          {/* Left Column: Heading and one descriptive line */}
          <div>
            <h2>{campaign.trH}</h2>
            <p className="lead-text text-muted">{campaign.trP}</p>
          </div>

          {/* Right Column: Ruled list of 5 treatments */}
          <div>
            <ul className="treatments-list">
              {campaign.treat.map((treatment, idx) => (
                <li key={idx} className="treatment-row">
                  <span>
                    <span className="treatment-bullet" aria-hidden="true">—</span>
                    {treatment}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

