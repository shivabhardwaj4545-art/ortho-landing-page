/**
 * Google Ads & Analytics Integration Helper
 *
 * Configurable identifiers for Google Ads conversion tracking.
 * Replace placeholders [AW-XXXXXXXXXX], [AW-XXXXXXXXXX/FORM_LABEL], and
 * [AW-XXXXXXXXXX/WHATSAPP_LABEL] with your active Google Ads conversion tag details.
 *
 * GOOGLE TAG MANAGER (GTM) ALTERNATIVE:
 * If you prefer Google Tag Manager instead of direct gtag.js:
 * 1. Remove the gtag script from index.html and embed your GTM container snippet (GTM-XXXXXXX).
 * 2. In GTM, create custom event triggers for 'form_submission' and 'whatsapp_click'.
 * 3. The functions below will automatically push to window.dataLayer if available,
 *    allowing GTM triggers to fire without any code modifications.
 */

export const TRACKING_CONFIG = {
  // Replace with your Google Ads Conversion ID (e.g., 'AW-1234567890')
  AW_CONVERSION_ID: '[AW-XXXXXXXXXX]',

  // Replace with your Form Submission Conversion Send-To label
  // e.g. 'AW-1234567890/AbCdEfGhIjKlMnOpQrS'
  FORM_CONVERSION_LABEL: '[AW-XXXXXXXXXX/FORM_LABEL]',

  // Replace with your WhatsApp Click Conversion Send-To label
  // e.g. 'AW-1234567890/ZyxWvUtSrQpOnMlKjIh'
  WHATSAPP_CONVERSION_LABEL: '[AW-XXXXXXXXXX/WHATSAPP_LABEL]'
};

/**
 * Safely track form conversions in Google Ads & GTM dataLayer
 * @param {Object} details - metadata about the conversion (campaign, specialty, etc.)
 */
export function trackFormConversion(details = {}) {
  try {
    // 1. Google Ads gtag direct tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: TRACKING_CONFIG.FORM_CONVERSION_LABEL,
        event_category: 'Lead',
        event_label: details.specialty || 'General Enquiry',
        value: 1.0,
        currency: 'USD'
      });
    }

    // 2. DataLayer push for GTM compatibility
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        conversionType: 'lead_enquiry',
        specialty: details.specialty || '',
        campaign: details.campaign || ''
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('[Analytics] Form conversion tracked:', details);
    }
  } catch (err) {
    console.warn('[Analytics] Failed to record form conversion:', err);
  }
}

/**
 * Safely track WhatsApp button clicks in Google Ads & GTM dataLayer
 * @param {string} sourceLocation - location where the button was clicked ('hero', 'mobile_bar', 'floating_pill')
 */
export function trackWhatsAppClick(sourceLocation = 'unknown') {
  try {
    // 1. Google Ads gtag direct tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: TRACKING_CONFIG.WHATSAPP_CONVERSION_LABEL,
        event_category: 'Contact',
        event_label: `WhatsApp Click - ${sourceLocation}`
      });
    }

    // 2. DataLayer push for GTM compatibility
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        sourceLocation: sourceLocation
      });
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Analytics] WhatsApp click tracked from: ${sourceLocation}`);
    }
  } catch (err) {
    console.warn('[Analytics] Failed to record WhatsApp click:', err);
  }
}

