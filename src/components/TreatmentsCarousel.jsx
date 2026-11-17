import React from 'react';
import {
  Activity,
  ShieldCheck,
  Crosshair,
  Flame,
  Zap,
  Layers,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { TREATMENTS_OFFERED } from '../data/lweData.js';

const ICON_MAP = {
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Crosshair: Crosshair,
  Bone: Activity,
  Flame: Flame,
  Zap: Zap,
  Layers: Layers,
  HeartPulse: HeartPulse
};

export default function TreatmentsCarousel({ onSelectTreatment }) {
  const handleTreatmentClick = (treatment) => {
    if (onSelectTreatment) {
      onSelectTreatment(treatment.name);
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-treatments-section" id="treatments" aria-label="Treatments and Surgeries">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-divider-line">
            <span className="line-accent" />
            <h2 className="section-title-bold">Orthopedic Treatments &amp; Surgeries We Offer</h2>
            <span className="line-accent" />
          </div>
          <p className="section-subtitle-muted">
            Comprehensive care for a wide range of bone, joint and spine conditions.
          </p>
        </div>

        {/* 8 Treatment Cards Grid */}
        <div className="treatments-cards-grid">
          {TREATMENTS_OFFERED.map((t) => {
            const IconComponent = ICON_MAP[t.icon] || Activity;
            return (
              <div
                key={t.id}
                className="treatment-item-card"
                onClick={() => handleTreatmentClick(t)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleTreatmentClick(t);
                }}
              >
                <div className="treatment-card-icon-wrap">
                  <IconComponent size={28} color="#0284c7" />
                </div>
                <h3 className="treatment-card-name">{t.name}</h3>
                <p className="treatment-card-subtitle">{t.subtitle}</p>
                <span className="treatment-card-tag">{t.tag}</span>
                <div className="treatment-card-cta">
                  <span>Enquire</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

