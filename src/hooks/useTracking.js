import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mta_tracking_params';

const PARAM_KEYS = [
  'gclid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content'
];

/**
 * useTracking
 * Captures Google Click ID (gclid) and UTM tracking parameters from the URL.
 * Persists them in sessionStorage so attribution is preserved across navigation
 * and page refreshes until the user closes their tab/session.
 */
export function useTracking() {
  const [trackingData, setTrackingData] = useState({
    gclid: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });

  useEffect(() => {
    try {
      // 1. Read existing params from sessionStorage if present
      let stored = {};
      const rawStored = window.sessionStorage.getItem(STORAGE_KEY);
      if (rawStored) {
        stored = JSON.parse(rawStored);
      }

      // 2. Read fresh params from current URL
      const searchParams = new URLSearchParams(window.location.search);
      const freshParams = {};
      let hasFresh = false;

      PARAM_KEYS.forEach((key) => {
        const val = searchParams.get(key);
        if (val) {
          freshParams[key] = val;
          hasFresh = true;
        }
      });

      // 3. Merge: fresh URL parameters take precedence over previously stored
      const merged = { ...stored, ...freshParams };

      if (hasFresh || Object.keys(stored).length > 0) {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      }

      setTrackingData((prev) => ({ ...prev, ...merged }));
    } catch (e) {
      // Graceful fallback if sessionStorage is blocked by browser privacy settings
      console.warn('Storage unavailable for tracking params:', e);
    }
  }, []);

  return trackingData;
}

