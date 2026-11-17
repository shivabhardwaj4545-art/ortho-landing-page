import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import {
  X,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  MessageCircle,
  Clock,
  Mail
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

export default function EnquiryModal({
  isOpen,
  onClose,
  initialHospital = '',
  initialTreatment = ''
}) {
  const tracking = useTracking();

  const [formData, setFormData] = useState({
    patientName: '',
    countryDialCode: '+91',
    phoneNumber: '',
    email: '',
    preferredHospital: initialHospital,
    medicalProblem: initialTreatment,
    file: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial props
  useEffect(() => {
    if (initialHospital) {
      setFormData((prev) => ({ ...prev, preferredHospital: initialHospital }));
    }
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, medicalProblem: initialTreatment }));
    }
  }, [initialHospital, initialTreatment]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        source: 'Popup Enquiry Modal',
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
        specialty: formData.medicalProblem || 'General Medical Consultation',
        hospital: formData.preferredHospital || 'Any Top Accredited Hospital',
        form: 'enquiry_popup_modal'
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrors({ form: 'Submission failed. Please contact us on WhatsApp.' });
    }
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('enquiry_modal_cta');
  };

  return (
    <div
      className="enquiry-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-heading"
    >
      <div className="enquiry-modal-card">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="enquiry-modal-close-btn"
          aria-label="Close Enquiry Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="enquiry-modal-header">
          <div className="modal-trust-badge">
            <span>Free Visa Invitation · Free Doctor's Opinion · No Fees</span>
          </div>
          <h2 id="enquiry-modal-heading" className="enquiry-modal-title">
            Get Free Treatment Cost Estimate
          </h2>
          <p className="enquiry-modal-subtitle">
            Connect directly with accredited specialist doctors at Medanta, Apollo, Fortis &amp; Max Hospitals.
          </p>
        </div>

        {isSuccess ? (
          <div className="modal-success-state">
            <CheckCircle2 size={48} color="#10b981" />
            <h3>Consultation Request Received!</h3>
            <p>
              Thank you, <strong>{formData.patientName}</strong>. Our International Patient Coordinator has received your details and will connect with you on WhatsApp at{' '}
              <strong>{formData.countryDialCode} {formData.phoneNumber}</strong> within 10 minutes with free specialist opinions.
            </p>
            <div className="modal-success-actions">
              <a
                href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello LWE Patient Care, I just requested a treatment estimate for ${formData.patientName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="btn btn-solid-whatsapp"
              >
                <WhatsAppIcon size={20} />
                <span>Open WhatsApp for Instant Fast Track</span>
              </a>
              <button type="button" onClick={onClose} className="btn btn-outline" style={{ marginTop: '10px' }}>
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="enquiry-modal-form">
            {errors.form && (
              <div className="modal-alert-box">
                <AlertCircle size={16} />
                <span>{errors.form}</span>
              </div>
            )}

            {/* Row 1: Patient Name */}
            <div className="modal-form-group">
              <label htmlFor="modal-patient-name" className="modal-label">
                Patient Name <span className="modal-req">*</span>
              </label>
              <input
                id="modal-patient-name"
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => {
                  setFormData({ ...formData, patientName: e.target.value });
                  if (errors.patientName) setErrors({ ...errors, patientName: null });
                }}
                placeholder="Enter Patient Full Name"
                className={`modal-input ${errors.patientName ? 'modal-input-err' : ''}`}
              />
              {errors.patientName && <span className="modal-err-text">{errors.patientName}</span>}
            </div>

            {/* Row 2: WhatsApp Phone & Email Address (Grid) */}
            <div className="modal-form-row">
              <div className="modal-form-group">
                <label htmlFor="modal-phone-number" className="modal-label">
                  WhatsApp Number <span className="modal-req">*</span>
                </label>
                <div className="modal-phone-cluster">
                  <select
                    value={formData.countryDialCode}
                    onChange={(e) => setFormData({ ...formData, countryDialCode: e.target.value })}
                    className="modal-flag-select"
                    aria-label="Country dial code"
                  >
                    {COUNTRY_DIAL_CODES.map((c) => (
                      <option key={c.code + c.name} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    id="modal-phone-number"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                    }}
                    placeholder="WhatsApp Phone"
                    className={`modal-phone-input ${errors.phoneNumber ? 'modal-input-err' : ''}`}
                  />
                </div>
                {errors.phoneNumber && <span className="modal-err-text">{errors.phoneNumber}</span>}
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-email" className="modal-label">
                  Email Address
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  placeholder="name@example.com"
                  className={`modal-input ${errors.email ? 'modal-input-err' : ''}`}
                />
                {errors.email && <span className="modal-err-text">{errors.email}</span>}
              </div>
            </div>

            {/* Row 3: Preferred Hospital & Medical Condition */}
            <div className="modal-form-row">
              <div className="modal-form-group">
                <label htmlFor="modal-hospital-select" className="modal-label">
                  Preferred Hospital
                </label>
                <select
                  id="modal-hospital-select"
                  value={formData.preferredHospital}
                  onChange={(e) => setFormData({ ...formData, preferredHospital: e.target.value })}
                  className="modal-select"
                >
                  <option value="">Any Top Accredited Hospital</option>
                  {HOSPITALS.map((h) => (
                    <option key={h.name} value={h.name}>
                      {h.name}
                    </option>
                  ))}
                  <option value="Indraprastha Apollo Hospitals">Apollo Hospitals, Delhi</option>
                  <option value="Max Super Speciality Hospital">Max Hospital, Saket</option>
                  <option value="Fortis Memorial Research Institute">Fortis Escorts / FMRI</option>
                  <option value="Medanta – The Medicity">Medanta – The Medicity</option>
                </select>
              </div>

              <div className="modal-form-group">
                <label htmlFor="modal-problem-desc" className="modal-label">
                  Treatment / Problem
                </label>
                <input
                  id="modal-problem-desc"
                  type="text"
                  value={formData.medicalProblem}
                  onChange={(e) => setFormData({ ...formData, medicalProblem: e.target.value })}
                  placeholder="e.g. Knee, Cardiac, Spine"
                  className="modal-input"
                />
              </div>
            </div>

            {/* Row 4: Optional Medical Reports Upload */}
            <div className="modal-form-group modal-file-group">
              <label htmlFor="modal-file-upload" className="modal-file-label">
                <div className="file-upload-box">
                  <Upload size={16} color="#0284c7" />
                  <span>
                    {formData.file ? (
                      <strong>Selected: {formData.file.name}</strong>
                    ) : (
                      'Upload Scans / Reports (Optional - MRI, CT, X-ray, PDF)'
                    )}
                  </span>
                </div>
                <input
                  id="modal-file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setFormData({ ...formData, file: e.target.files[0] });
                    }
                  }}
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="modal-submit-btn"
            >
              {isSubmitting ? 'Submitting…' : 'Get Free Cost Estimate Now'}
            </button>

            {/* Desktop WhatsApp Action */}
            <div className="modal-desktop-whatsapp-wrap">
              <div className="modal-footer-divider">
                <span>OR CONNECT DIRECTLY</span>
              </div>

              <a
                href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello LWE Patient Care, I need an immediate treatment cost estimate for India.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="modal-whatsapp-direct-btn"
              >
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp (+91 97135 07082)</span>
              </a>
            </div>

            {/* Mobile Compact WhatsApp Link */}
            <div className="modal-mobile-whatsapp-compact">
              <a
                href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello LWE Patient Care, I need an immediate treatment cost estimate for India.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
              >
                <WhatsAppIcon size={16} />
                <span>Prefer WhatsApp? <strong>Chat with doctor now</strong></span>
              </a>
            </div>

            <div className="modal-clock-note">
              <Clock size={13} color="#ef4444" />
              <span>Response within <strong>10 minutes</strong></span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
