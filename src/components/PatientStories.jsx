import React from 'react';
import ImagePlaceholder from './ImagePlaceholder.jsx';

/**
 * PatientStories Component
 * Shows real clinical journey frameworks without fabricated claims or fake review stars.
 * Real verified patient interviews and hospital discharge records must be placed in [EDIT] slots.
 */
export default function PatientStories() {
  const stories = [
    {
      country: 'Patient Case Study · West Africa [EDIT: Country & Case ID]',
      procedure: 'Complex Bilateral Joint Replacement [EDIT: Actual Procedure]',
      image: '/images/patient-story-1.webp',
      summary:
        '[EDIT: 2-3 sentences summarizing the verified medical journey — e.g. Pre-travel assessment, 12-day hospital and rehabilitation stay in Delhi, safe flight back, and post-discharge mobility status.]'
    },
    {
      country: 'Patient Case Study · Middle East [EDIT: Country & Case ID]',
      procedure: 'Microsurgical Neuro-Navigation Procedure [EDIT: Actual Procedure]',
      image: '/images/patient-story-2.webp',
      summary:
        '[EDIT: 2-3 sentences summarizing the verified case history — e.g. Multi-disciplinary tumor board review, robotic navigation surgery, Arabic interpreter bedside support, and flight fitness clearance.]'
    },
    {
      country: 'Patient Case Study · Central Asia [EDIT: Country & Case ID]',
      procedure: 'Advanced Cardiac Intervention [EDIT: Actual Procedure]',
      image: '/images/patient-story-3.webp',
      summary:
        '[EDIT: 2-3 sentences summarizing verified hospital care — e.g. Off-pump coronary bypass, 7-day stay, Russian interpreter assistance, and follow-up tele-consultations conducted at 30 days.]'
    }
  ];

  return (
    <section className="section" aria-label="International Patient Case Studies">
      <div className="container">
        <div className="section-header">
          <h2>International patient journeys</h2>
          <p>
            Real recovery experiences of patients and families who traveled to India for specialized clinical care.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story, idx) => (
            <article key={idx} className="story-card">
              <ImagePlaceholder
                src={story.image}
                alt={story.procedure}
                aspectRatio="16/9"
                caption={`Verified patient journey 16:9 [EDIT: Real consultation photo ${idx + 1}]`}
              />
              <div className="story-content">
                <div className="story-origin">{story.country}</div>
                <h3 className="story-header">{story.procedure}</h3>
                <p className="story-desc">{story.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

