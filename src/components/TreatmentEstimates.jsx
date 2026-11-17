import React from 'react';
import {
  Activity,
  Heart,
  Brain,
  ShieldAlert,
  Flame,
  Sparkles,
  Layers,
  User,
  ShieldCheck,
  Crosshair,
  HeartPulse,
  ArrowRight,
  Info
} from 'lucide-react';
import { TREATMENT_ESTIMATES } from '../data/lweData.js';

const ESTIMATE_ICON_MAP = {
  Bone: Activity,
  Activity: Activity,
  Brain: Brain,
  Heart: Heart,
  HeartPulse: HeartPulse,
  ShieldAlert: ShieldAlert,
  Flame: Flame,
  Sparkles: Sparkles,
  Layers: Layers,
  User: User,
  ShieldCheck: ShieldCheck,
  Crosshair: Crosshair
};

export default function TreatmentEstimates({ onGetQuote }) {
  const handleQuote = (item) => {
    if (onGetQuote) {
      onGetQuote(item.name);
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-estimates-section" id="estimates" aria-label="Treatment Cost Estimates">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="estimates-tag-pill">TRANSPARENT PRICING</div>
          <h2 className="section-title-bold">
            Transparent &amp; Competitive Treatment Estimates
          </h2>
          <p className="section-subtitle-muted">
            We facilitate competitive, transparent pricing packages directly with accredited hospitals in India, ensuring exceptional care at cost-effective rates.
          </p>
        </div>

        {/* 12 Estimates Cards Grid from PDF Page 4 */}
        <div className="estimates-cards-grid">
          {TREATMENT_ESTIMATES.map((t) => {
            const Icon = ESTIMATE_ICON_MAP[t.icon] || Activity;
            return (
              <div
                key={t.name}
                className="estimate-price-card"
                onClick={() => handleQuote(t)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleQuote(t);
                }}
              >
                <div className="estimate-card-top">
                  <div className="estimate-icon-circle">
                    <Icon size={20} color="#0284c7" />
                  </div>
                  <span className="estimate-category-tag">{t.category}</span>
                </div>

                <h3 className="estimate-treatment-name">{t.name}</h3>

                <div className="estimate-pricing-row">
                  <span className="starting-label">Starting at</span>
                  <span className="price-bold">{t.startingPrice}</span>
                </div>

                <div className="estimate-card-btn-link">
                  <span>Get Quote</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Cost Disclaimer */}
        <div className="estimate-disclaimer-box">
          <Info size={18} color="#0284c7" style={{ flexShrink: 0 }} />
          <p>
            <strong>Note on Estimates:</strong> The prices listed above are indicative baseline packages at accredited Indian hospitals. The final cost quote is customized and confirmed by the attending hospital specialists after reviewing your individual diagnostic scans, clinical condition, and implant choice.
          </p>
        </div>
      </div>
    </section>
  );
}

