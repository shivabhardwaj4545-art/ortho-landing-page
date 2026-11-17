import React, { useState } from 'react';
import {
  ShieldCheck,
  Clock,
  Plane,
  Car,
  Headphones,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { MEDICAL_ASSISTANCE_TABS } from '../data/lweData.js';

export default function MedicalAssistanceTabs({ onAssistanceClick }) {
  const [activeTabId, setActiveTabId] = useState('affordable-services');

  const currentTab =
    MEDICAL_ASSISTANCE_TABS.find((tab) => tab.id === activeTabId) ||
    MEDICAL_ASSISTANCE_TABS[0];

  const handleAction = () => {
    if (onAssistanceClick) {
      onAssistanceClick(currentTab.label);
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-assistance-section" id="assistance" aria-label="Complete Medical Assistance">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="assistance-tag-pill">PATIENT ASSISTANCE</div>
          <h2 className="section-title-bold">
            Everything You Need for a Stress-Free Medical Journey
          </h2>
          <p className="section-subtitle-muted">
            End-to-end clinical, logistical, and concierge coordination so you can focus entirely on healing.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="assistance-tabs-container">
          {/* Vertical Tab List */}
          <div className="assistance-nav-column" role="tablist" aria-label="Medical Assistance Services">
            {MEDICAL_ASSISTANCE_TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`assistance-tab-btn ${isActive ? 'tab-active' : ''}`}
                >
                  <span className="tab-btn-label">{tab.label}</span>
                  <ChevronRight size={16} className="tab-arrow-icon" />
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Content Panel */}
          <div
            className="assistance-content-panel"
            role="tabpanel"
            id={`panel-${currentTab.id}`}
            aria-labelledby={`tab-${currentTab.id}`}
          >
            <div className="assistance-panel-img-wrap">
              <img
                src={currentTab.image}
                alt={currentTab.heading}
                className="assistance-panel-img"
                loading="lazy"
              />
              <div className="panel-img-floating-caption">
                <CheckCircle2 size={16} color="#10b981" />
                <span>{currentTab.heading}</span>
              </div>
            </div>

            <div className="assistance-panel-text-wrap">
              <h3 className="assistance-panel-title">{currentTab.heading}</h3>
              <p className="assistance-panel-desc">{currentTab.desc}</p>

              <div className="assistance-panel-cta-row">
                <button
                  onClick={handleAction}
                  className="btn btn-cta btn-sm"
                >
                  <span>Request {currentTab.label}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Strip below Tabs from PDF Page 3 */}
        <div className="assistance-feature-strip">
          <div className="feature-strip-item">
            <ShieldCheck size={20} color="#0284c7" />
            <span>JCI Accredited Hospitals</span>
          </div>
          <div className="feature-strip-item">
            <Clock size={20} color="#0284c7" />
            <span>No Waiting Time For Treatment</span>
          </div>
          <div className="feature-strip-item">
            <Plane size={20} color="#0284c7" />
            <span>Visa &amp; Travel Assistance</span>
          </div>
          <div className="feature-strip-item">
            <Car size={20} color="#0284c7" />
            <span>Airport Pickup &amp; Stay</span>
          </div>
          <div className="feature-strip-item">
            <Headphones size={20} color="#0284c7" />
            <span>24/7 Patient Support</span>
          </div>
          <div className="feature-strip-item">
            <CheckCircle2 size={20} color="#0284c7" />
            <span>Transparent Process</span>
          </div>
        </div>
      </div>
    </section>
  );
}

