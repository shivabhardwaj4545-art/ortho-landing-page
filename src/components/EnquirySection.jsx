import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import {
  FileText,
  UserCheck,
  Plane,
  HeartPulse,
  PhoneForwarded,
  UploadCloud,
  CheckCircle2,
  Send,
  AlertCircle,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';
import { useTracking } from '../hooks/useTracking.js';
import { trackFormConversion } from '../lib/analytics.js';

const TREATMENTS_LIST = [
  'Knee Replacement Surgery',
  'Hip Replacement Surgery',
  'Spine & Disc Surgery',
  'Shoulder & Arthroscopy Surgery',
  'Sports Injury & ACL Reconstruction',
  'Bone Fracture & Trauma Care',
  'Cardiology & Bypass Surgery (CABG)',
  'Cancer & Surgical Oncology',
  'Liver / Kidney Transplant',
  'Other Specialty Care'
];

const COUNTRIES = [
  'Bangladesh',
  'Kenya',
  'Nigeria',
  'Oman',
  'UAE',
  'Saudi Arabia',
  'Uzbekistan',
  'Kazakhstan',
  'Nepal',
  'Ghana',
  'Ethiopia',
  'Tanzania',
  'United Kingdom',
  'United States',
  'Canada'
];

export default function EnquirySection() {
  const tracking = useTracking();

  const [formData, setFormData] = useState({
    fullName: '',
    country: 'Bangladesh',
    phoneCode: '+880',
    whatsappNumber: '',
    email: '',
    treatmentRequired: 'Knee Replacement Surgery'
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    let code = '+880';
    if (country === 'Kenya') code = '+254';
    else if (country === 'Nigeria') code = '+234';
    else if (country === 'Oman') code = '+968';
    else if (country === 'UAE') code = '+971';
    else if (country === 'Saudi Arabia') code = '+966';
    else if (country === 'Uzbekistan') code = '+998';
    else if (country === 'Nepal') code = '+977';
    else if (country === 'Ghana') code = '+233';
    else if (country === 'United Kingdom') code = '+44';
    else if (country === 'United States' || country === 'Canada') code = '+1';

    setFormData((prev) => ({
      ...prev,
      country,
      phoneCode: code
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: 'File must be under 20MB. You can also send scans on WhatsApp.'
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
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.whatsappNumber.trim()) errs.whatsappNumber = 'Please enter your WhatsApp number.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
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
        patientName: formData.fullName.trim(),
        whatsappNumber: `${formData.phoneCode} ${formData.whatsappNumber.trim()}`,
        email: formData.email.trim(),
        country: formData.country,
        treatmentRequired: formData.treatmentRequired,
        preferredHospital: 'Accredited Partner Hospitals',
        source: 'Share Medical Reports Form',
        message: formData.message || '',
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
        specialty: formData.treatmentRequired,
        country: formData.country,
        form: 'share_reports_form'
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrors({ form: 'Submission failed. Please connect with us directly on WhatsApp.' });
    }
  };

  return (
    <section className="lwe-enquiry-section" id="enquiry" aria-label="Share Your Medical Reports">
      <div className="container enquiry-container-grid">
        {/* Left Column: Form Card from Reference Screenshot */}
        <div className="enquiry-form-card">
          <div className="enquiry-card-header">
            <div className="enquiry-header-icon-wrap">
              <FileText size={24} color="#0284c7" />
            </div>
            <div>
              <h2 className="enquiry-card-title">Share Your Medical Reports</h2>
              <p className="enquiry-card-subtitle">
                Get an expert orthopedic surgical opinion from our team.
              </p>
            </div>
          </div>

          {isSuccess ? (
            <div className="enquiry-success-view">
              <CheckCircle2 size={44} color="#10b981" />
              <h3>Thank You, {formData.fullName}!</h3>
              <p>
                Your medical case has been routed to our chief surgical coordinators. We will contact you at{' '}
                <strong>{formData.phoneCode} {formData.whatsappNumber}</strong> within one working day.
              </p>
              <div style={{ marginTop: '20px' }}>
                <a
                  href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello LWE Patient Care, I submitted reports for ${formData.fullName} (${formData.treatmentRequired}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid-whatsapp"
                >
                  <WhatsAppIcon size={20} />
                  <span>Message Medical Coordinator Now</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="enquiry-inner-form">
              {errors.form && (
                <div className="form-alert-banner">
                  <AlertCircle size={16} />
                  <span>{errors.form}</span>
                </div>
              )}

              {/* Row 1: Full Name & Country */}
              <div className="enquiry-two-col-row">
                <div className="enquiry-field-group">
                  <label htmlFor="enquiry-fullname" className="enquiry-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="enquiry-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    placeholder="Enter your name"
                    className={`enquiry-input ${errors.fullName ? 'input-error' : ''}`}
                  />
                  {errors.fullName && <span className="field-error-text">{errors.fullName}</span>}
                </div>

                <div className="enquiry-field-group">
                  <label htmlFor="enquiry-country" className="enquiry-label">
                    Country <span className="req">*</span>
                  </label>
                  <select
                    id="enquiry-country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="enquiry-select"
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Email Address */}
              <div className="enquiry-two-col-row">
                <div className="enquiry-field-group">
                  <label htmlFor="enquiry-whatsapp" className="enquiry-label">
                    WhatsApp Number <span className="req">*</span>
                  </label>
                  <div className="enquiry-phone-wrap">
                    <span className="phone-prefix">{formData.phoneCode}</span>
                    <input
                      id="enquiry-whatsapp"
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsappNumber: e.target.value });
                        if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: null });
                      }}
                      placeholder="WhatsApp phone number"
                      className={`enquiry-input ${errors.whatsappNumber ? 'input-error' : ''}`}
                    />
                  </div>
                  {errors.whatsappNumber && <span className="field-error-text">{errors.whatsappNumber}</span>}
                </div>

                <div className="enquiry-field-group">
                  <label htmlFor="enquiry-email" className="enquiry-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="Enter email address"
                    className={`enquiry-input ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && <span className="field-error-text">{errors.email}</span>}
                </div>
              </div>

              {/* Row 3: Treatment Required */}
              <div className="enquiry-field-group" style={{ marginBottom: '14px' }}>
                <label htmlFor="enquiry-treatment" className="enquiry-label">
                  Treatment Required <span className="req">*</span>
                </label>
                <select
                  id="enquiry-treatment"
                  value={formData.treatmentRequired}
                  onChange={(e) => setFormData({ ...formData, treatmentRequired: e.target.value })}
                  className="enquiry-select"
                >
                  {TREATMENTS_LIST.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Medical Reports Box from Screenshot */}
              <div className="enquiry-field-group">
                <label htmlFor="enquiry-reports" className="enquiry-label">
                  Upload Medical Reports <span className="opt">(X-ray / MRI / CT Scan / Other) [PDF, JPG, PNG – Max 20 MB]</span>
                </label>
                <div className="enquiry-file-dropzone">
                  <input
                    id="enquiry-reports"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.webp"
                    onChange={handleFileChange}
                    className="file-hidden-input"
                  />
                  <label htmlFor="enquiry-reports" className="file-dropzone-label">
                    <UploadCloud size={24} color="#0284c7" />
                    <span>
                      {selectedFile ? (
                        <strong style={{ color: '#0f766e' }}>{selectedFile.name}</strong>
                      ) : (
                        'Click to upload or drag & drop reports here'
                      )}
                    </span>
                  </label>
                </div>
                {errors.file && <span className="field-error-text">{errors.file}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-cta enquiry-submit-btn"
              >
                {isSubmitting ? (
                  'Submitting your file…'
                ) : (
                  <>
                    <span>Request Orthopedic Surgical Opinion</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Complete Travel & Treatment Coordination from Reference Screenshot */}
        <div className="enquiry-coordination-card">
          <div className="coordination-header">
            <div className="coordination-icon-wrap">
              <Plane size={24} color="#0284c7" />
            </div>
            <div>
              <h3 className="coordination-title">Complete Travel &amp; Treatment Coordination</h3>
              <p className="coordination-subtitle">
                We take care of everything so you can focus on your recovery.
              </p>
            </div>
          </div>

          {/* 5-Step Visual Timeline from Screenshot */}
          <div className="coordination-steps-flow">
            <div className="coord-step-item">
              <div className="coord-step-circle">
                <FileText size={20} color="#0284c7" />
              </div>
              <strong className="coord-step-title">1. Share Reports</strong>
              <span className="coord-step-sub">(Online)</span>
            </div>

            <div className="coord-step-divider">›</div>

            <div className="coord-step-item">
              <div className="coord-step-circle">
                <UserCheck size={20} color="#0284c7" />
              </div>
              <strong className="coord-step-title">2. Get Doctor’s Opinion</strong>
              <span className="coord-step-sub">&amp; Plan</span>
            </div>

            <div className="coord-step-divider">›</div>

            <div className="coord-step-item">
              <div className="coord-step-circle">
                <Plane size={20} color="#0284c7" />
              </div>
              <strong className="coord-step-title">3. Visa Invitation</strong>
              <span className="coord-step-sub">&amp; Travel Support</span>
            </div>

            <div className="coord-step-divider">›</div>

            <div className="coord-step-item">
              <div className="coord-step-circle">
                <HeartPulse size={20} color="#0284c7" />
              </div>
              <strong className="coord-step-title">4. Treatment in India</strong>
              <span className="coord-step-sub">(at Top Hospitals)</span>
            </div>

            <div className="coord-step-divider">›</div>

            <div className="coord-step-item">
              <div className="coord-step-circle">
                <PhoneForwarded size={20} color="#0284c7" />
              </div>
              <strong className="coord-step-title">5. Recovery &amp; Follow-Up</strong>
              <span className="coord-step-sub">(Online)</span>
            </div>
          </div>

          {/* Assistance Guarantee Box */}
          <div className="coord-guarantee-box">
            <ShieldCheck size={20} color="#0f766e" />
            <div>
              <strong>LWE Zero-Brokerage Promise</strong>
              <p>
                You pay directly to the hospital billing desk upon arrival. Our consultation, medical visa invitation letters, and airport pickup are 100% complimentary for patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

