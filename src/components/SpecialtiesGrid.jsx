import React from 'react';
import {
  Heart,
  ShieldAlert,
  Activity,
  Bone,
  Stethoscope,
  Utensils,
  Brain,
  Baby,
  HeartPulse,
  Crosshair,
  ArrowRight
} from 'lucide-react';
import { MEDICAL_SPECIALTIES } from '../data/lweData.js';

const SPECIALTY_ICON_MAP = {
  Heart: Heart,
  ShieldAlert: ShieldAlert,
  Activity: Activity,
  Bone: Bone,
  Stethoscope: Stethoscope,
  Utensils: Utensils,
  Brain: Brain,
  Baby: Baby,
  HeartPulse: HeartPulse,
  Crosshair: Crosshair
};

export default function SpecialtiesGrid({ onSelectSpecialty }) {
  const handleClick = (spec) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(spec.name);
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-specialties-section" id="specialties" aria-label="Medical Specialties">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="specialties-tag-pill">CLINICAL EXCELLENCE</div>
          <h2 className="section-title-bold">Our Medical Specialties</h2>
          <p className="section-subtitle-muted">
            Connect with premier departments and specialized surgery institutes across India.
          </p>
        </div>

        {/* 10 Specialties Grid */}
        <div className="specialties-grid-container">
          {MEDICAL_SPECIALTIES.map((spec) => {
            const Icon = SPECIALTY_ICON_MAP[spec.icon] || Heart;
            return (
              <div
                key={spec.name}
                className="specialty-card-item"
                onClick={() => handleClick(spec)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleClick(spec);
                }}
              >
                <div
                  className="specialty-icon-circle"
                  style={{ backgroundColor: `${spec.color}15`, color: spec.color }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="specialty-card-title">{spec.name}</h3>
                <p className="specialty-card-desc">{spec.desc}</p>
                <div className="specialty-card-link">
                  <span>Enquire Specialty</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

