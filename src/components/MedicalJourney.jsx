import React from 'react';
import {
  FileText,
  UserCheck,
  ClipboardList,
  Plane,
  HeartPulse,
  PhoneForwarded,
  ArrowRight
} from 'lucide-react';
import { MEDICAL_JOURNEY_STEPS } from '../data/lweData.js';

const STEP_ICONS = [
  FileText,
  UserCheck,
  ClipboardList,
  Plane,
  HeartPulse,
  PhoneForwarded
];

export default function MedicalJourney({ onBookClick }) {
  const handleBook = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-journey-section" id="journey" aria-label="Medical Treatment Journey">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="journey-tag-pill">OUR PROCESS</div>
          <h2 className="section-title-bold">
            A Hassle-Free Path to <span style={{ color: '#0284c7' }}>Better Health</span>
          </h2>
          <p className="section-subtitle-muted">
            Serving patients in more than 30 nations with a clear, stress-free medical coordination roadmap.
          </p>
        </div>

        {/* 6-Step Visual Timeline */}
        <div className="journey-timeline-grid">
          {MEDICAL_JOURNEY_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || FileText;
            return (
              <div key={step.step} className="journey-step-card">
                <div className="step-card-header">
                  <span className="step-counter-tag">{step.step}</span>
                  <div className="step-icon-circle">
                    <Icon size={20} color="#0284c7" />
                  </div>
                </div>
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-desc">{step.desc}</p>
                {idx < MEDICAL_JOURNEY_STEPS.length - 1 && (
                  <div className="step-connector-arrow" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="journey-cta-banner">
          <div>
            <h4 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>
              Ready to have your medical scans evaluated by chief Indian specialists?
            </h4>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#64748b' }}>
              Free evaluation · No obligation · Full privacy guaranteed
            </p>
          </div>
          <button
            onClick={handleBook}
            className="btn btn-cta"
          >
            <span>Book An Appointment</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

