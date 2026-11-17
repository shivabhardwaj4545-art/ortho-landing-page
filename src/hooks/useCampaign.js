import { useMemo } from 'react';
import { CONTENT } from '../content.js';

const ALIASES = {
  orthopaedics: 'orthopedics',
  orthopaedic: 'orthopedics',
  orthopedic: 'orthopedics',
  gynaecology: 'gynecology',
  gynaecologic: 'gynecology',
  gynecologic: 'gynecology',
  heart: 'cardiac',
  cardio: 'cardiac',
  spine: 'neurosurgery',
  brain: 'neurosurgery',
  cancer: 'oncology'
};

/**
 * useCampaign Hook
 * Inspects URL search query `?campaign=` and returns the matching content object
 * along with its normalized campaign key. Unknown values safely fall back to 'general'.
 */
export function useCampaign() {
  const result = useMemo(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const raw = searchParams.get('campaign');

      if (!raw) {
        return {
          campaignKey: 'general',
          content: CONTENT.general
        };
      }

      const normalized = raw.trim().toLowerCase();
      const resolvedKey = ALIASES[normalized] || normalized;

      if (CONTENT[resolvedKey]) {
        return {
          campaignKey: resolvedKey,
          content: CONTENT[resolvedKey]
        };
      }

      return {
        campaignKey: 'general',
        content: CONTENT.general
      };
    } catch (e) {
      console.warn('Error parsing campaign parameter:', e);
      return {
        campaignKey: 'general',
        content: CONTENT.general
      };
    }
  }, []);

  return result;
}

