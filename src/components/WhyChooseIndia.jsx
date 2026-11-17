import React from 'react';
import {
  CheckCircle2,
  Award,
  Globe2,
  Building2,
  UserCheck,
  HeartHandshake,
  Headphones,
  ShieldCheck,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';

export default function WhyChooseIndia({ onConsultationClick }) {
  const trustPoints = [
    'Save up to 70% compared to Western medical costs',
    'World-Class Hospitals & Robotic Infrastructure',
    'Priority Specialist Appointments & Expedited Scheduling',
    'Highly Experienced Board-Certified Specialist Doctors',
    'Comprehensive Bedside Care for International Patients'
  ];

  const statMetrics = [
    { value: '50+', label: 'Countries Served', icon: Globe2 },
    { value: '300+', label: 'Partner Hospitals', icon: Building2 },
    { value: '400+', label: 'Specialist Doctors', icon: UserCheck },
    { value: '95%+', label: 'Patient Satisfaction', icon: Award },
    { value: '25,000+', label: 'Happy Patients', icon: Heart },
    { value: '24/7', label: 'Patient Support', icon: Headphones }
  ];

  return (
    <section className="lwe-why-india-section" id="why-india" aria-label="Why Choose India">
      <div className="container">
        {/* Top Part: Why Choose India Split Grid from PDF Page 3 */}
        <div className="why-india-split-grid">
          <div className="why-india-narrative">
            <div className="why-tag-pill">GLOBAL HEALTHCARE DESTINATION</div>
            <h2 className="section-title-bold">Why Choose India for Medical Treatment?</h2>
            <p className="why-lead-desc">
              India has emerged as a premier global hub for international patients, offering Joint Commission International (JCI) accredited healthcare infrastructure, robotic surgical technologies, and internationally acclaimed chief specialists at 60% to 70% lower costs than the USA, UK, or UAE.
            </p>

            <ul className="why-checklist">
              {trustPoints.map((pt) => (
                <li key={pt}>
                  <CheckCircle2 size={18} color="#10b981" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '28px' }}>
              <a
                href="#enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  if (onConsultationClick) onConsultationClick();
                  else {
                    const el = document.getElementById('enquiry');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-solid-whatsapp"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* 6 Stats Grid from PDF Page 3 */}
          <div className="why-india-stats-column">
            <div className="why-stats-grid">
              {statMetrics.map((sm) => {
                const Icon = sm.icon;
                return (
                  <div key={sm.label} className="why-stat-box">
                    <Icon size={24} color="#0284c7" />
                    <strong className="why-stat-val">{sm.value}</strong>
                    <span className="why-stat-lbl">{sm.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 10 Years Milestone Commemorative Official Brand Asset from PDF Page 4 */}
        <div className="anniversary-milestone-banner-container">
          <img
            src="/assets/images/lwe-10-years-milestone.webp"
            alt="LWE Patient Care - 10 Years of Healing Beyond Borders - Celebrating a decade of hope, healing, and successful medical journeys"
            className="anniversary-milestone-banner-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

