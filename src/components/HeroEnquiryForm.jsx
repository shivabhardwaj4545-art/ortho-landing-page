import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, ShieldCheck, Clock, Send, AlertCircle } from 'lucide-react';
import { useTracking } from '../hooks/useTracking.js';
import { trackFormConversion, trackWhatsAppClick } from '../lib/analytics.js';
import { LWE_CONTACT, HOSPITALS } from '../data/lweData.js';

const COUNTRY_OPTIONS = [
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+7', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+233', name: 'Ghana', flag: '🇬🇭' },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' }
];

export default function HeroEnquiryForm({
  id = 'hero-quote-form',
  title = 'Get Free Cost Estimate',
  subtitle = 'Free Visa Invitation · Free Doctor’s Opinion',
  defaultSpecialty = 'Orthopedics & Joint Replacement',
  ctaText = 'Request Free Cost Estimate'
}) {
  const tracking = useTracking();

  const [formData, setFormData] = useState({
    patientName: '',
    countryCode: '+880',
    whatsappNumber: '',
    country: 'Bangladesh',
    preferredHospital: 'Any Top Accredited Hospital',
    medicalProblem: defaultSpecialty,
    consent: true
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCountryChange = (e) => {
    const selected = COUNTRY_OPTIONS.find((c) => c.name === e.target.value);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        country: selected.name,
        countryCode: selected.code
      }));
    } else {
      setFormData((prev) => ({ ...prev, country: e.target.value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: 'File must be under 20MB. You can also send larger scans on WhatsApp.'
        }));
        setSelectedFile(null);
        return;
      }
      setErrors((prev) => ({ ...prev, file: null }));
      setSelectedFile(file);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.patientName.trim()) {
      errs.patientName = 'Please enter patient name.';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Please enter WhatsApp number.';
    } else if (!/^[0-9\s\-()]{6,15}$/.test(formData.whatsappNumber.trim())) {
      errs.whatsappNumber = 'Please enter a valid phone number.';
    }
    if (!formData.medicalProblem.trim()) {
      errs.medicalProblem = 'Please describe the medical problem or required surgery.';
    }
    if (!formData.consent) {
      errs.consent = 'Please agree to allow hospital doctors to review your medical reports.';
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
      // Build form payload
      const payload = new FormData();
      payload.append('patientName', formData.patientName.trim());
      payload.append('whatsappNumber', `${formData.countryCode} ${formData.whatsappNumber.trim()}`);
      payload.append('country', formData.country);
      payload.append('preferredHospital', formData.preferredHospital);
      payload.append('medicalProblem', formData.medicalProblem);
      payload.append('gclid', tracking.gclid || '');
      payload.append('utm_source', tracking.utm_source || '');
      payload.append('utm_medium', tracking.utm_medium || '');
      payload.append('utm_campaign', tracking.utm_campaign || '');

      if (selectedFile) {
        payload.append('reportFile', selectedFile);
      }

      // Simulated network submission
      await new Promise((resolve) => setTimeout(resolve, 800));

      trackFormConversion({
        specialty: formData.medicalProblem,
        hospital: formData.preferredHospital,
        country: formData.country
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Form error:', err);
      setIsSubmitting(false);
      setErrors({ form: 'Network error. Please message us directly on WhatsApp.' });
    }
  };

  if (isSuccess) {
    return (
      <div className="hero-enquiry-card success-card" id={id} tabIndex={-1}>
        <div className="form-success-header">
          <div className="success-icon-badge">
            <CheckCircle2 size={36} color="#10b981" />
          </div>
          <h3>Enquiry Received!</h3>
          <p className="success-sub">
            Thank you, <strong>{formData.patientName}</strong>. Our international medical team at LWE Patient Care has received your inquiry.
          </p>
        </div>

        <div className="success-body-box">
          <p>
            A dedicated patient care coordinator will contact you on{' '}
            <strong>{formData.countryCode} {formData.whatsappNumber}</strong> within <strong>10 minutes</strong> with doctor opinions and estimated costs.
          </p>
          <div className="success-hospital-pill">
            <span>Preferred: <strong>{formData.preferredHospital}</strong></span>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <a
            href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              `Hello LWE Patient Care, I submitted an inquiry for ${formData.patientName} (${formData.medicalProblem}). Please share doctor recommendations.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('form_success_cta')}
            className="btn btn-solid-whatsapp"
            style={{ width: '100%' }}
          >
            Open WhatsApp for Fast Track
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-enquiry-card" id={id}>
      {/* Card Header matching PDF Page 1 */}
      <div className="form-card-badge-header">
        <div className="form-badge-pill">
          <Clock size={14} color="#10b981" />
          <span>Quick Response within 10 Minutes</span>
        </div>
        <h3 className="form-card-title">{title}</h3>
        <p className="form-card-subtitle">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="hero-form-element">
        {errors.form && (
          <div className="form-alert-banner" role="alert">
            <AlertCircle size={16} />
            <span>{errors.form}</span>
          </div>
        )}

        {/* Patient Name */}
        <div className="form-row-group">
          <label htmlFor={`${id}-name`} className="form-field-label">
            Patient Name <span className="req-star">*</span>
          </label>
          <input
            id={`${id}-name`}
            type="text"
            required
            autoComplete="name"
            value={formData.patientName}
            onChange={(e) => {
              setFormData({ ...formData, patientName: e.target.value });
              if (errors.patientName) setErrors({ ...errors, patientName: null });
            }}
            placeholder="Enter Patient Full Name"
            className={`form-field-input ${errors.patientName ? 'input-error' : ''}`}
          />
          {errors.patientName && <span className="field-error-text">{errors.patientName}</span>}
        </div>

        {/* Country & WhatsApp Number (Dual row) */}
        <div className="form-dual-row">
          <div className="form-col-country">
            <label htmlFor={`${id}-country`} className="form-field-label">
              Country <span className="req-star">*</span>
            </label>
            <select
              id={`${id}-country`}
              value={formData.country}
              onChange={handleCountryChange}
              className="form-field-select"
            >
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.flag} {c.name} ({c.code})
                </option>
              ))}
            </select>
          </div>

          <div className="form-col-phone">
            <label htmlFor={`${id}-phone`} className="form-field-label">
              WhatsApp Phone <span className="req-star">*</span>
            </label>
            <div className="phone-prefix-wrap">
              <span className="phone-prefix-label">{formData.countryCode}</span>
              <input
                id={`${id}-phone`}
                type="tel"
                required
                autoComplete="tel"
                value={formData.whatsappNumber}
                onChange={(e) => {
                  setFormData({ ...formData, whatsappNumber: e.target.value });
                  if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: null });
                }}
                placeholder="Phone Number"
                className={`form-field-input ${errors.whatsappNumber ? 'input-error' : ''}`}
              />
            </div>
            {errors.whatsappNumber && <span className="field-error-text">{errors.whatsappNumber}</span>}
          </div>
        </div>

        {/* Preferred Hospital Dropdown (From PDF Page 1) */}
        <div className="form-row-group">
          <label htmlFor={`${id}-hospital`} className="form-field-label">
            Preferred Hospital <span className="opt-tag">(optional)</span>
          </label>
          <select
            id={`${id}-hospital`}
            value={formData.preferredHospital}
            onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
            className="form-field-select"
          >
            <option value="Any Top Accredited Hospital">Any Top JCI / NABH Accredited Hospital</option>
            {HOSPITALS.map((h) => (
              <option key={h.name} value={h.name}>
                {h.name} ({h.location.split(',')[0]})
              </option>
            ))}
            <option value="Apollo Hospitals">Indraprastha Apollo Hospitals, Delhi</option>
            <option value="Artemis Hospital">Artemis Hospital, Gurgaon</option>
          </select>
        </div>

        {/* Medical Problem / Treatment */}
        <div className="form-row-group">
          <label htmlFor={`${id}-problem`} className="form-field-label">
            Medical Problem / Treatment Required <span className="req-star">*</span>
          </label>
          <input
            id={`${id}-problem`}
            type="text"
            required
            value={formData.medicalProblem}
            onChange={(e) => {
              setFormData({ ...formData, medicalProblem: e.target.value });
              if (errors.medicalProblem) setErrors({ ...errors, medicalProblem: null });
            }}
            placeholder="e.g. Knee Replacement, Spine Surgery, Cancer Treatment"
            className={`form-field-input ${errors.medicalProblem ? 'input-error' : ''}`}
          />
          {errors.medicalProblem && <span className="field-error-text">{errors.medicalProblem}</span>}
        </div>

        {/* Optional Medical Report Upload */}
        <div className="form-row-group">
          <label htmlFor={`${id}-file`} className="form-field-label">
            Upload Medical Reports <span className="opt-tag">(PDF, JPG, PNG - Max 20MB)</span>
          </label>
          <div className="file-upload-box">
            <input
              id={`${id}-file`}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={handleFileChange}
              className="file-hidden-input"
            />
            <label htmlFor={`${id}-file`} className="file-upload-label">
              <UploadCloud size={20} color="#0284c7" />
              <span>
                {selectedFile ? (
                  <strong style={{ color: '#0f766e' }}>{selectedFile.name}</strong>
                ) : (
                  'Click to upload MRI, X-ray, or doctor prescription'
                )}
              </span>
            </label>
          </div>
          {errors.file && <span className="field-error-text">{errors.file}</span>}
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="form-consent-row">
          <input
            id={`${id}-consent`}
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="form-checkbox"
          />
          <label htmlFor={`${id}-consent`} className="form-consent-text">
            I agree to share reports confidentially with LWE partner hospital doctors for surgical assessment.
          </label>
        </div>
        {errors.consent && <span className="field-error-text">{errors.consent}</span>}

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-cta form-submit-btn"
        >
          {isSubmitting ? (
            'Preparing your case…'
          ) : (
            <>
              <span>{ctaText}</span>
              <Send size={16} />
            </>
          )}
        </button>

        {/* Privacy Assurance Footer */}
        <div className="form-footer-security">
          <ShieldCheck size={14} color="#0f766e" />
          <span>100% Privacy Protected · Zero Brokerage Fees · Direct Hospital Rates</span>
        </div>
      </form>
    </div>
  );
}

