import React, { useState, useEffect } from 'react';
import { useTracking } from '../hooks/useTracking.js';
import { trackFormConversion } from '../lib/analytics.js';

const COMMON_COUNTRIES = [
  'Bangladesh',
  'Kenya',
  'Nigeria',
  'Oman',
  'Tanzania',
  'United Arab Emirates',
  'Saudi Arabia',
  'Kuwait',
  'Iraq',
  'Uzbekistan',
  'Kazakhstan',
  'Nepal',
  'Sri Lanka',
  'Ghana',
  'Ethiopia',
  'Uganda',
  'Zimbabwe',
  'United Kingdom',
  'United States',
  'Canada'
];

const SPECIALTIES = [
  { value: 'Orthopedics & Joint Replacement', label: 'Orthopedics & Joint Replacement' },
  { value: 'Neurosurgery & Spine Care', label: 'Neurosurgery & Spine Care' },
  { value: 'Medical & Surgical Oncology', label: 'Cancer & Oncology' },
  { value: 'Advanced Gynecology & Women’s Health', label: 'Gynecology & Women’s Health' },
  { value: 'Cardiology & Cardiac Surgery', label: 'Cardiac & Heart Surgery' },
  { value: 'Specialty Medical Treatment', label: 'Other Specialty Treatment' }
];

export default function EnquiryForm({
  id = 'quote',
  instanceName = 'Hero Quote Form',
  defaultSpecialty = 'Specialty Medical Treatment',
  activeCampaignKey = 'general'
}) {
  const trackingParams = useTracking();

  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    whatsappNumber: '',
    email: '',
    specialty: defaultSpecialty,
    medicalCondition: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync default specialty when campaign changes
  useEffect(() => {
    if (defaultSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: defaultSpecialty }));
    }
  }, [defaultSpecialty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          file: 'Please upload a PDF or image file (JPG, PNG, WebP).'
        }));
        setSelectedFile(null);
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: 'File size must be under 20MB. You can also share larger scans directly via WhatsApp.'
        }));
        setSelectedFile(null);
        return;
      }
      setErrors((prev) => ({ ...prev, file: null }));
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.country.trim()) {
      errs.country = 'Please enter or select your country.';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Please enter your WhatsApp phone number with country code.';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.whatsappNumber.trim())) {
      errs.whatsappNumber = 'Please enter a valid phone number including country code (e.g. +234...).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.specialty) {
      errs.specialty = 'Please select a medical specialty.';
    }
    return errs;
  };

  /**
   * Submit Handler:
   * Encapsulates submission to your backend API, CRM (HubSpot/Zoho), Formspree, or Google Apps Script.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Build FormData payload including tracking parameters and file
      const payload = new FormData();
      payload.append('fullName', formData.fullName.trim());
      payload.append('country', formData.country.trim());
      payload.append('whatsappNumber', formData.whatsappNumber.trim());
      payload.append('email', formData.email.trim());
      payload.append('specialty', formData.specialty);
      payload.append('medicalCondition', formData.medicalCondition.trim());
      payload.append('formInstance', instanceName);

      // Hidden Google Ads and UTM attribution fields
      payload.append('campaign_key', activeCampaignKey);
      payload.append('gclid', trackingParams.gclid || '');
      payload.append('utm_source', trackingParams.utm_source || '');
      payload.append('utm_medium', trackingParams.utm_medium || '');
      payload.append('utm_campaign', trackingParams.utm_campaign || '');
      payload.append('utm_term', trackingParams.utm_term || '');

      if (selectedFile) {
        payload.append('medicalReport', selectedFile);
      }

      /*
       * =====================================================================
       * BACKEND / CRM ENDPOINT INTEGRATION:
       * Replace the simulated delay below with your live endpoint call, e.g.:
       *
       * const response = await fetch('https://api.yourdomain.com/v1/enquiry', {
       *   method: 'POST',
       *   body: payload
       * });
       * if (!response.ok) throw new Error('Network error on submission');
       * =====================================================================
       */
      await new Promise((resolve) => setTimeout(resolve, 900));

      // Trigger Google Ads conversion tracking safely
      trackFormConversion({
        specialty: formData.specialty,
        campaign: activeCampaignKey,
        country: formData.country
      });

      setIsSubmitting(false);
      setIsSuccess(true);

      /*
       * OPTIONAL REDIRECT TO THANK YOU PAGE:
       * To send visitors to a dedicated /thank-you page for URL-based Google Ads conversion tracking,
       * uncomment the line below:
       *
       * window.location.href = '/thank-you.html';
       */
    } catch (error) {
      console.error('Submission failed:', error);
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        submit: 'There was a temporary problem sending your enquiry. Please message us on WhatsApp or try again.'
      }));
    }
  };

  if (isSuccess) {
    return (
      <div className="enquiry-panel" id={id} tabIndex={-1}>
        <div className="form-success-box" role="status" aria-live="polite">
          <span className="form-success-badge">Enquiry Received</span>
          <h3>Thank you, {formData.fullName}.</h3>
          <p>
            Your details have been routed to our international patient coordination team.
            A medical liaison will review your case with the treating specialists and contact you on{' '}
            <strong>{formData.whatsappNumber}</strong> and <strong>{formData.email}</strong> within one working day.
          </p>
          <p className="text-muted" style={{ fontSize: '14px' }}>
            Reference Specialty: <strong>{formData.specialty}</strong>
          </p>
          <div style={{ marginTop: '24px' }}>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: '',
                  country: '',
                  whatsappNumber: '',
                  email: '',
                  specialty: defaultSpecialty,
                  medicalCondition: ''
                });
                setSelectedFile(null);
              }}
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enquiry-panel" id={id}>
      <div className="form-header-note">
        A coordinator replies within one working day.
      </div>

      <form onSubmit={handleSubmit} noValidate aria-label="Medical Treatment Estimate Form">
        {/* Hidden tracking fields for security & bot autofill inspection */}
        <input type="hidden" name="gclid" value={trackingParams.gclid || ''} />
        <input type="hidden" name="utm_source" value={trackingParams.utm_source || ''} />
        <input type="hidden" name="utm_medium" value={trackingParams.utm_medium || ''} />
        <input type="hidden" name="utm_campaign" value={trackingParams.utm_campaign || ''} />
        <input type="hidden" name="campaign_key" value={activeCampaignKey} />

        {errors.submit && (
          <div
            className="field-error"
            role="alert"
            style={{ marginBottom: '16px', padding: '8px', backgroundColor: 'var(--error-bg)' }}
          >
            {errors.submit}
          </div>
        )}

        {/* Full Name */}
        <div className="form-group">
          <label htmlFor={`${id}-fullName`} className="form-label">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-fullName`}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Samuel Adebayo"
            className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            aria-describedby={errors.fullName ? `${id}-name-err` : undefined}
          />
          {errors.fullName && (
            <span id={`${id}-name-err`} className="field-error" role="alert">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor={`${id}-country`} className="form-label">
            Country of residence <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-country`}
            name="country"
            type="text"
            list={`${id}-countries-list`}
            required
            autoComplete="country-name"
            value={formData.country}
            onChange={handleChange}
            placeholder="Select or type country"
            className={`form-input ${errors.country ? 'is-invalid' : ''}`}
            aria-invalid={errors.country ? 'true' : 'false'}
            aria-describedby={errors.country ? `${id}-country-err` : undefined}
          />
          <datalist id={`${id}-countries-list`}>
            {COMMON_COUNTRIES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          {errors.country && (
            <span id={`${id}-country-err`} className="field-error" role="alert">
              {errors.country}
            </span>
          )}
        </div>

        {/* WhatsApp Number */}
        <div className="form-group">
          <label htmlFor={`${id}-whatsapp`} className="form-label">
            WhatsApp number with country code <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-whatsapp`}
            name="whatsappNumber"
            type="tel"
            required
            autoComplete="tel"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="+234 80 1234 5678"
            className={`form-input ${errors.whatsappNumber ? 'is-invalid' : ''}`}
            aria-invalid={errors.whatsappNumber ? 'true' : 'false'}
            aria-describedby={errors.whatsappNumber ? `${id}-whatsapp-err` : undefined}
          />
          {errors.whatsappNumber && (
            <span id={`${id}-whatsapp-err`} className="field-error" role="alert">
              {errors.whatsappNumber}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor={`${id}-email`} className="form-label">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="patient@example.com"
            className={`form-input ${errors.email ? 'is-invalid' : ''}`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? `${id}-email-err` : undefined}
          />
          {errors.email && (
            <span id={`${id}-email-err`} className="field-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        {/* Specialty Select */}
        <div className="form-group">
          <label htmlFor={`${id}-specialty`} className="form-label">
            Medical specialty <span aria-hidden="true">*</span>
          </label>
          <select
            id={`${id}-specialty`}
            name="specialty"
            required
            value={formData.specialty}
            onChange={handleChange}
            className={`form-select ${errors.specialty ? 'is-invalid' : ''}`}
            aria-invalid={errors.specialty ? 'true' : 'false'}
          >
            {SPECIALTIES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <span className="field-error" role="alert">
              {errors.specialty}
            </span>
          )}
        </div>

        {/* Medical Condition (Optional Textarea) */}
        <div className="form-group">
          <label htmlFor={`${id}-condition`} className="form-label">
            Medical condition &amp; diagnosis <span className="optional">(optional)</span>
          </label>
          <textarea
            id={`${id}-condition`}
            name="medicalCondition"
            rows="3"
            value={formData.medicalCondition}
            onChange={handleChange}
            placeholder="Briefly describe the symptoms, doctor recommendations, or surgery advised..."
            className="form-textarea"
          ></textarea>
        </div>

        {/* Medical Reports (Optional File Input) */}
        <div className="form-group">
          <label htmlFor={`${id}-file`} className="form-label">
            Upload medical reports <span className="optional">(optional)</span>
          </label>
          <input
            id={`${id}-file`}
            name="medicalReports"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.webp"
            onChange={handleFileChange}
            className="form-file-input"
            aria-describedby={`${id}-file-hint`}
          />
          <span id={`${id}-file-hint`} className="form-file-hint">
            Accepted: PDF, JPG, PNG (Max 20MB). You can also share reports on WhatsApp.
          </span>
          {errors.file && (
            <span className="field-error" role="alert">
              {errors.file}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-cta form-btn-submit"
        >
          {isSubmitting ? 'Sending inquiry…' : 'Get free treatment estimate'}
        </button>

        {/* Privacy Assurance */}
        <p className="form-privacy-note">
          Your reports are used only to prepare your estimate and are shared only with the hospitals reviewing your case.
        </p>
      </form>
    </div>
  );
}

