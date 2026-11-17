import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import {
  ShieldCheck,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { LWE_CONTACT, HOSPITALS } from '../data/lweData.js';
import { useTracking } from '../hooks/useTracking.js';
import { trackFormConversion, trackWhatsAppClick } from '../lib/analytics.js';

const COUNTRY_DIAL_CODES = [
  { flag: '🇮🇳', code: '+91', name: 'India' },
  { flag: '🇧🇩', code: '+880', name: 'Bangladesh' },
  { flag: '🇰🇪', code: '+254', name: 'Kenya' },
  { flag: '🇳🇬', code: '+234', name: 'Nigeria' },
  { flag: '🇴🇲', code: '+968', name: 'Oman' },
  { flag: '🇦🇪', code: '+971', name: 'UAE' },
  { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' },
  { flag: '🇺🇿', code: '+998', name: 'Uzbekistan' },
  { flag: '🇳🇵', code: '+977', name: 'Nepal' },
  { flag: '🇬🇭', code: '+233', name: 'Ghana' },
  { flag: '🇬🇧', code: '+44', name: 'UK' },
  { flag: '🇺🇸', code: '+1', name: 'USA' }
];

export default function HeroSection({ campaignKey = 'general' }) {
  const tracking = useTracking();

  const [formData, setFormData] = useState({
    patientName: '',
    countryDialCode: '+91',
    phoneNumber: '',
    email: '',
    preferredHospital: '',
    medicalProblem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWhatsApp = () => {
    trackWhatsAppClick('hero_whatsapp_btn');
  };

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Please enter patient name';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter phone number';
    } else if (!/^[0-9\s\-]{6,15}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = 'Enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vErrors = validate();
    if (Object.keys(vErrors).length > 0) {
      setErrors(vErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData = {
        patientName: formData.patientName.trim(),
        whatsappNumber: `${formData.countryDialCode} ${formData.phoneNumber.trim()}`,
        email: formData.email.trim(),
        preferredHospital: formData.preferredHospital || 'Any Top Hospital',
        treatmentRequired: formData.medicalProblem.trim() || 'General Medical Consultation',
        source: 'Hero Enquiry Form',
        gclid: tracking.gclid || '',
        utm_source: tracking.utm_source || '',
        utm_campaign: tracking.utm_campaign || ''
      };

      try {
        await fetch('/api/enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        });
      } catch (postErr) {
        console.warn('API POST error, lead tracked:', postErr);
      }

      trackFormConversion({
        specialty: formData.medicalProblem || 'General',
        hospital: formData.preferredHospital || 'General',
        country: formData.countryDialCode
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrors({ form: 'Submission error. Please message us directly on WhatsApp.' });
    }
  };

  return (
    <section
      className="lwe-exact-hero-section"
      id="hero"
      aria-label="Hero Introduction"
      style={{
        backgroundImage: `linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.94) 36%, rgba(255, 255, 255, 0.42) 58%, rgba(255, 255, 255, 0.12) 100%), url('/assets/images/hero-doctor-consult-center.webp')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      {/* Background with Doctor Image & Soft Hospital Wash */}
      <div className="exact-hero-bg-overlay" />

      <div className="container exact-hero-grid">
        {/* Left Side Column matching media_1794814658727_081a5f35.jpg */}
        <div className="exact-hero-left">
          {/* Top text block */}
          <div className="exact-hero-top-text">
            Get Advanced Medical Treatment in India at Affordable Cost
          </div>

          {/* Subtitle bold */}
          <h1 className="exact-hero-bold-title">
            Trusted by 1000+ International<br />
            Patients from Bangladesh &amp; Africa
          </h1>

          {/* Consult with Specialists Shield Box */}
          <div className="exact-hero-shield-box">
            <div className="exact-shield-icon-wrap">
              <ShieldCheck size={28} color="#0284c7" />
            </div>
            <div>
              <span className="shield-sub">Consult with</span>
              <strong className="shield-strong">Experienced Specialist Doctors</strong>
            </div>
          </div>

          {/* Green WhatsApp Consultation Button */}
          <div className="exact-hero-whatsapp-row">
            <a
              href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello LWE Patient Care, I need consultation for medical treatment in India.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="exact-whatsapp-consult-btn"
              aria-label="Get Free Consultation on WhatsApp"
            >
              <WhatsAppIcon size={22} />
              <span>Get Free Consultation on WhatsApp</span>
            </a>
          </div>

          {/* Reviews Row with 4 Avatars */}
          <div className="exact-hero-reviews-row">
            <div className="exact-avatars-cluster">
              <img src="/assets/images/avatar-1.webp" alt="Patient Reviewer 1" className="cluster-avatar" />
              <img src="/assets/images/avatar-2.webp" alt="Patient Reviewer 2" className="cluster-avatar" />
              <img src="/assets/images/avatar-3.webp" alt="Patient Reviewer 3" className="cluster-avatar" />
              <img src="/assets/images/avatar-4.webp" alt="Patient Reviewer 4" className="cluster-avatar" />
            </div>
            <div className="exact-reviews-text">
              <strong className="reviews-bold">More Than 2000</strong>
              <span className="reviews-score">Patients Reviews (4.8 of 5)</span>
            </div>
          </div>

          {/* Quick Response within 10 Minutes */}
          <div className="exact-hero-clock-row">
            <Clock size={16} color="#ef4444" />
            <span>
              Quick Response within <strong>10 Minutes</strong>
            </span>
          </div>
        </div>

        {/* Right Side Column: The White Form Card matching media_1794814658727_081a5f35.jpg */}
        <div className="exact-hero-right">
          <div className="exact-form-card" id="hero-quote-form">
            <div className="exact-form-header">
              <h2 className="exact-form-title-line">Free Visa invitation</h2>
              <h3 className="exact-form-title-line">Free Doctor's Opinion</h3>
              <h4 className="exact-form-title-line">Get Cost Estimate (Free Quote)</h4>
            </div>

            {isSuccess ? (
              <div className="exact-form-success">
                <CheckCircle2 size={44} color="#10b981" />
                <h3>Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.patientName}</strong>. A medical coordinator is reviewing your case and will WhatsApp you at{' '}
                  <strong>{formData.countryDialCode} {formData.phoneNumber}</strong> within 10 minutes.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <a
                    href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello LWE Patient Care, I submitted a request for ${formData.patientName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-solid-whatsapp btn-sm"
                  >
                    Open WhatsApp for Fast Track
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="exact-form-body">
                {errors.form && (
                  <div className="form-alert-banner">
                    <AlertCircle size={15} />
                    <span>{errors.form}</span>
                  </div>
                )}

                {/* Patient Name */}
                <div className="exact-form-group">
                  <label htmlFor="exact-patient-name" className="exact-label">
                    Patient Name <span className="exact-req">*</span>
                  </label>
                  <input
                    id="exact-patient-name"
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => {
                      setFormData({ ...formData, patientName: e.target.value });
                      if (errors.patientName) setErrors({ ...errors, patientName: null });
                    }}
                    placeholder="Enter Patient Name"
                    className={`exact-input ${errors.patientName ? 'exact-input-err' : ''}`}
                  />
                  {errors.patientName && <span className="exact-err-msg">{errors.patientName}</span>}
                </div>

                {/* Phone * (Flag + Code Dropdown + Phone Input) */}
                <div className="exact-form-group">
                  <label htmlFor="exact-phone-number" className="exact-label">
                    Phone <span className="exact-req">*</span>
                  </label>
                  <div className="exact-phone-cluster">
                    <select
                      value={formData.countryDialCode}
                      onChange={(e) => setFormData({ ...formData, countryDialCode: e.target.value })}
                      className="exact-flag-select"
                      aria-label="Select country dial code"
                    >
                      {COUNTRY_DIAL_CODES.map((c) => (
                        <option key={c.code + c.name} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      id="exact-phone-number"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                      }}
                      placeholder="Phone Number"
                      className={`exact-phone-input ${errors.phoneNumber ? 'exact-input-err' : ''}`}
                    />
                  </div>
                  {errors.phoneNumber && <span className="exact-err-msg">{errors.phoneNumber}</span>}
                </div>

                {/* Email Address */}
                <div className="exact-form-group">
                  <label htmlFor="exact-email-input" className="exact-label">
                    Email Address
                  </label>
                  <input
                    id="exact-email-input"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="name@example.com"
                    className={`exact-input ${errors.email ? 'exact-input-err' : ''}`}
                  />
                  {errors.email && <span className="exact-err-msg">{errors.email}</span>}
                </div>

                {/* Preferred Hospital */}
                <div className="exact-form-group">
                  <label htmlFor="exact-preferred-hospital" className="exact-label">
                    Preferred Hospital
                  </label>
                  <select
                    id="exact-preferred-hospital"
                    value={formData.preferredHospital}
                    onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
                    className="exact-select"
                  >
                    <option value="">Select Hospital</option>
                    {HOSPITALS.map((h) => (
                      <option key={h.name} value={h.name}>
                        {h.name}
                      </option>
                    ))}
                    <option value="Indraprastha Apollo Hospitals">Indraprastha Apollo Hospitals, Delhi</option>
                    <option value="Artemis Hospital">Artemis Hospital, Gurgaon</option>
                    <option value="Any Top Accredited Hospital">Any Top JCI / NABH Accredited Hospital</option>
                  </select>
                </div>

                {/* Medical Problem */}
                <div className="exact-form-group">
                  <label htmlFor="exact-medical-problem" className="exact-label">
                    Medical Problem
                  </label>
                  <input
                    id="exact-medical-problem"
                    type="text"
                    value={formData.medicalProblem}
                    onChange={(e) => setFormData({ ...formData, medicalProblem: e.target.value })}
                    placeholder="Describe the current medical problem"
                    className="exact-input"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="exact-form-submit-btn"
                >
                  {isSubmitting ? 'Submitting…' : 'Get Free Cost Estimate'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Smooth Bottom Wave Shape from media_1794814658727_081a5f35.jpg */}
      <div className="exact-hero-bottom-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '85px', display: 'block' }}
        >
          {/* Subtle curved blue guideline */}
          <path
            d="M0,35 C320,80 620,10 1020,45 C1220,62 1360,30 1440,25 L1440,85 L0,85 Z"
            fill="rgba(2, 132, 199, 0.08)"
          />
          {/* Main solid white wave dividing hero into the next section */}
          <path
            d="M0,50 C360,95 720,20 1100,55 C1280,72 1380,45 1440,40 L1440,85 L0,85 Z"
            fill="#ffffff"
          />
        </svg>
      </div>



    </section>
  );
}
