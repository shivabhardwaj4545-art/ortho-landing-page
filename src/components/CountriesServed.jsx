import React from 'react';

// Comprehensive high-fidelity SVG Circular Country Flags (zero OS font dependency, 100% cross-platform)
const COUNTRY_FLAGS = {
  bangladesh: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#006a4e" />
      <circle cx="45" cy="50" r="30" fill="#f42a41" />
    </svg>
  ),
  nepal: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#003893" />
      <path d="M15,10 L85,45 L40,45 L85,85 L15,85 Z" fill="#dc143c" stroke="#ffffff" strokeWidth="3" />
      <circle cx="36" cy="35" r="8" fill="#ffffff" />
      <circle cx="36" cy="65" r="9" fill="#ffffff" />
    </svg>
  ),
  usa: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#ffffff" />
      <rect y="0" width="100" height="8" fill="#b22234" />
      <rect y="15" width="100" height="8" fill="#b22234" />
      <rect y="31" width="100" height="8" fill="#b22234" />
      <rect y="46" width="100" height="8" fill="#b22234" />
      <rect y="62" width="100" height="8" fill="#b22234" />
      <rect y="77" width="100" height="8" fill="#b22234" />
      <rect y="92" width="100" height="8" fill="#b22234" />
      <rect width="45" height="50" fill="#3c3b6e" />
      <circle cx="12" cy="12" r="3" fill="#ffffff" />
      <circle cx="24" cy="12" r="3" fill="#ffffff" />
      <circle cx="36" cy="12" r="3" fill="#ffffff" />
      <circle cx="18" cy="25" r="3" fill="#ffffff" />
      <circle cx="30" cy="25" r="3" fill="#ffffff" />
      <circle cx="12" cy="38" r="3" fill="#ffffff" />
      <circle cx="24" cy="38" r="3" fill="#ffffff" />
      <circle cx="36" cy="38" r="3" fill="#ffffff" />
    </svg>
  ),
  uk: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#012169" />
      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#ffffff" strokeWidth="16" />
      <path d="M0,0 L100,100 M100,0 L0,100" stroke="#c8102e" strokeWidth="8" />
      <path d="M50,0 V100 M0,50 H100" stroke="#ffffff" strokeWidth="24" />
      <path d="M50,0 V100 M0,50 H100" stroke="#c8102e" strokeWidth="14" />
    </svg>
  ),
  canada: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#ffffff" />
      <rect x="0" width="25" height="100" fill="#d80621" />
      <rect x="75" width="25" height="100" fill="#d80621" />
      <path d="M50,22 L55,36 L68,34 L60,45 L70,52 L56,58 L54,75 L46,75 L44,58 L30,52 L40,45 L32,34 L45,36 Z" fill="#d80621" />
    </svg>
  ),
  australia: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#00008b" />
      <rect width="45" height="40" fill="#012169" />
      <path d="M0,0 L45,40 M45,0 L0,40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0,0 L45,40 M45,0 L0,40" stroke="#c8102e" strokeWidth="4" />
      <path d="M22,0 V40 M0,20 H45" stroke="#ffffff" strokeWidth="12" />
      <path d="M22,0 V40 M0,20 H45" stroke="#c8102e" strokeWidth="6" />
      <circle cx="22" cy="70" r="7" fill="#ffffff" />
      <circle cx="75" cy="22" r="4" fill="#ffffff" />
      <circle cx="85" cy="40" r="4" fill="#ffffff" />
      <circle cx="70" cy="55" r="4" fill="#ffffff" />
      <circle cx="65" cy="45" r="3" fill="#ffffff" />
      <circle cx="78" cy="75" r="5" fill="#ffffff" />
    </svg>
  ),
  uae: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#00732f" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#000000" />
      <rect x="0" width="28" height="100" fill="#ff0000" />
    </svg>
  ),
  oman: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#ffffff" />
      <rect y="33.3" width="100" height="33.3" fill="#db161e" />
      <rect y="66.6" width="100" height="33.4" fill="#008000" />
      <rect x="0" width="28" height="100" fill="#db161e" />
      <circle cx="14" cy="18" r="7" fill="#ffffff" />
    </svg>
  ),
  kenya: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="30" fill="#000000" />
      <rect y="30" width="100" height="6" fill="#ffffff" />
      <rect y="36" width="100" height="28" fill="#bb0000" />
      <rect y="64" width="100" height="6" fill="#ffffff" />
      <rect y="70" width="100" height="30" fill="#006600" />
      <ellipse cx="50" cy="50" rx="14" ry="24" fill="#990000" stroke="#ffffff" strokeWidth="2" />
      <circle cx="50" cy="50" r="4" fill="#ffffff" />
    </svg>
  ),
  nigeria: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="33.3" height="100" fill="#008751" />
      <rect x="33.3" width="33.4" height="100" fill="#ffffff" />
      <rect x="66.7" width="33.3" height="100" fill="#008751" />
    </svg>
  ),
  uzbekistan: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#0099b5" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="31" width="100" height="3" fill="#ce1126" />
      <rect y="66" width="100" height="3" fill="#ce1126" />
      <rect y="66.6" width="100" height="33.4" fill="#1eb53a" />
      <circle cx="20" cy="16" r="8" fill="#ffffff" />
      <circle cx="23" cy="16" r="7" fill="#0099b5" />
    </svg>
  ),
  ghana: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#ce1126" />
      <rect y="33.3" width="100" height="33.3" fill="#fcd116" />
      <rect y="66.6" width="100" height="33.4" fill="#006b3f" />
      <polygon points="50,38 53,46 62,46 55,52 58,62 50,56 42,62 45,52 36,46 47,46" fill="#000000" />
    </svg>
  ),
  saudiArabia: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#006c35" />
      <path d="M22,38 Q35,32 50,38 Q65,44 78,35 Q70,48 50,45 Q30,48 22,38 Z" fill="#ffffff" />
      <circle cx="34" cy="31" r="2.5" fill="#ffffff" />
      <circle cx="50" cy="29" r="2.5" fill="#ffffff" />
      <circle cx="66" cy="31" r="2.5" fill="#ffffff" />
      <rect x="25" y="58" width="50" height="4" fill="#ffffff" rx="1.5" />
      <polygon points="25,56 16,60 25,64" fill="#ffffff" />
      <rect x="68" y="54" width="3" height="12" fill="#ffffff" rx="1" />
      <circle cx="74" cy="60" r="3" fill="#ffffff" />
    </svg>
  ),
  tanzania: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <polygon points="0,0 100,0 0,100" fill="#1eb53a" />
      <polygon points="100,0 100,100 0,100" fill="#00a3dd" />
      <polygon points="0,75 75,0 100,0 100,25 25,100 0,100" fill="#fcd116" />
      <polygon points="0,85 85,0 100,0 100,15 15,100 0,100" fill="#000000" />
    </svg>
  ),
  iraq: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#ce1126" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#000000" />
      <path d="M30,50 Q40,43 50,50 Q60,57 70,50" stroke="#007a3d" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="40" cy="45" r="2.5" fill="#007a3d" />
      <circle cx="60" cy="45" r="2.5" fill="#007a3d" />
    </svg>
  ),
  ethiopia: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#009a44" />
      <rect y="33.3" width="100" height="33.3" fill="#fed100" />
      <rect y="66.6" width="100" height="33.4" fill="#ef3340" />
      <circle cx="50" cy="50" r="18" fill="#002b7f" />
      <polygon points="50,36 53,46 64,46 55,52 58,62 50,56 42,62 45,52 36,46 47,46" fill="#fed100" />
    </svg>
  ),
  yemen: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#ce1126" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#000000" />
    </svg>
  ),
  srilanka: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#ffbe29" />
      <rect x="7" y="7" width="16" height="86" fill="#00534e" />
      <rect x="25" y="7" width="16" height="86" fill="#eb7400" />
      <rect x="43" y="7" width="50" height="86" fill="#8d153a" />
      <circle cx="68" cy="45" r="14" fill="#ffbe29" />
      <rect x="62" y="55" width="16" height="5" fill="#ffbe29" rx="2" />
    </svg>
  ),
  fiji: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#68bfe5" />
      <rect width="45" height="40" fill="#012169" />
      <path d="M0,0 L45,40 M45,0 L0,40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0,0 L45,40 M45,0 L0,40" stroke="#c8102e" strokeWidth="4" />
      <path d="M22,0 V40 M0,20 H45" stroke="#ffffff" strokeWidth="12" />
      <path d="M22,0 V40 M0,20 H45" stroke="#c8102e" strokeWidth="6" />
      <ellipse cx="72" cy="55" rx="14" ry="18" fill="#ffffff" stroke="#c8102e" strokeWidth="2" />
      <circle cx="72" cy="52" r="7" fill="#c8102e" />
    </svg>
  ),
  mauritius: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="25" fill="#ea2839" />
      <rect y="25" width="100" height="25" fill="#1a206d" />
      <rect y="50" width="100" height="25" fill="#ffd500" />
      <rect y="75" width="100" height="25" fill="#00a04e" />
    </svg>
  ),
  kuwait: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#007a3d" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#ce1126" />
      <polygon points="0,0 35,33.3 35,66.6 0,100" fill="#000000" />
    </svg>
  ),
  qatar: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#8d1b3d" />
      <polygon points="0,0 32,0 38,11 32,22 38,33 32,44 38,55 32,66 38,77 32,88 38,100 0,100" fill="#ffffff" />
    </svg>
  ),
  bahrain: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#ce1126" />
      <polygon points="0,0 28,0 36,20 28,40 36,60 28,80 36,100 0,100" fill="#ffffff" />
    </svg>
  ),
  southAfrica: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="50" fill="#e03c31" />
      <rect y="50" width="100" height="50" fill="#001489" />
      <polygon points="0,0 45,50 0,100" fill="#000000" />
      <path d="M0,0 L50,50 L0,100" stroke="#ffb81c" strokeWidth="8" fill="none" />
      <path d="M0,15 L40,50 L100,50 M0,85 L40,50" stroke="#ffffff" strokeWidth="14" fill="none" />
      <path d="M0,15 L40,50 L100,50 M0,85 L40,50" stroke="#007749" strokeWidth="8" fill="none" />
    </svg>
  ),
  uganda: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="16.6" fill="#000000" />
      <rect y="16.6" width="100" height="16.6" fill="#fcd116" />
      <rect y="33.2" width="100" height="16.6" fill="#d90000" />
      <rect y="49.8" width="100" height="16.6" fill="#000000" />
      <rect y="66.4" width="100" height="16.6" fill="#fcd116" />
      <rect y="83" width="100" height="17" fill="#d90000" />
      <circle cx="50" cy="50" r="16" fill="#ffffff" />
      <circle cx="50" cy="48" r="7" fill="#000000" />
      <circle cx="54" cy="46" r="3" fill="#d90000" />
    </svg>
  ),
  myanmar: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#fecb00" />
      <rect y="33.3" width="100" height="33.3" fill="#34b233" />
      <rect y="66.6" width="100" height="33.4" fill="#ea2839" />
      <polygon points="50,22 56,40 75,40 60,52 65,70 50,58 35,70 40,52 25,40 44,40" fill="#ffffff" />
    </svg>
  ),
  maldives: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#d21034" />
      <rect x="20" y="20" width="60" height="60" fill="#007e3a" rx="4" />
      <circle cx="53" cy="50" r="16" fill="#ffffff" />
      <circle cx="58" cy="50" r="14" fill="#007e3a" />
    </svg>
  ),
  rwanda: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="50" fill="#00a1de" />
      <rect y="50" width="100" height="25" fill="#fad201" />
      <rect y="75" width="100" height="25" fill="#20603d" />
      <circle cx="78" cy="25" r="9" fill="#fad201" />
    </svg>
  ),
  zambia: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#198a00" />
      <rect x="66" y="45" width="11.3" height="55" fill="#de2010" />
      <rect x="77.3" y="45" width="11.3" height="55" fill="#000000" />
      <rect x="88.6" y="45" width="11.4" height="55" fill="#ef7d00" />
      <circle cx="83" cy="25" r="9" fill="#ef7d00" />
    </svg>
  ),
  zimbabwe: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="14.2" fill="#006400" />
      <rect y="14.2" width="100" height="14.2" fill="#ffd700" />
      <rect y="28.4" width="100" height="14.2" fill="#d40000" />
      <rect y="42.6" width="100" height="14.8" fill="#000000" />
      <rect y="57.4" width="100" height="14.2" fill="#d40000" />
      <rect y="71.6" width="100" height="14.2" fill="#ffd700" />
      <rect y="85.8" width="100" height="14.2" fill="#006400" />
      <polygon points="0,0 40,50 0,100" fill="#ffffff" />
      <polygon points="12,42 15,48 22,48 17,52 19,58 13,54 8,58 10,52 5,48 11,48" fill="#d40000" />
    </svg>
  ),
  sudan: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#d21034" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#000000" />
      <polygon points="0,0 40,50 0,100" fill="#007229" />
    </svg>
  ),
  egypt: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#ce1126" />
      <rect y="33.3" width="100" height="33.3" fill="#ffffff" />
      <rect y="66.6" width="100" height="33.4" fill="#000000" />
      <circle cx="50" cy="50" r="7" fill="#c09300" />
    </svg>
  ),
  philippines: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="50" fill="#0038a8" />
      <rect y="50" width="100" height="50" fill="#ce1126" />
      <polygon points="0,0 50,50 0,100" fill="#ffffff" />
      <circle cx="18" cy="50" r="7" fill="#fcd116" />
      <circle cx="7" cy="18" r="2.5" fill="#fcd116" />
      <circle cx="7" cy="82" r="2.5" fill="#fcd116" />
      <circle cx="36" cy="50" r="2.5" fill="#fcd116" />
    </svg>
  ),
  singapore: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="50" fill="#ed2939" />
      <rect y="50" width="100" height="50" fill="#ffffff" />
      <circle cx="24" cy="25" r="13" fill="#ffffff" />
      <circle cx="28" cy="25" r="12" fill="#ed2939" />
      <circle cx="36" cy="20" r="2" fill="#ffffff" />
      <circle cx="36" cy="30" r="2" fill="#ffffff" />
    </svg>
  ),
  germany: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect y="0" width="100" height="33.3" fill="#000000" />
      <rect y="33.3" width="100" height="33.3" fill="#dd0000" />
      <rect y="66.6" width="100" height="33.4" fill="#ffce00" />
    </svg>
  ),
  france: (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="33.3" height="100" fill="#002395" />
      <rect x="33.3" width="33.4" height="100" fill="#ffffff" />
      <rect x="66.7" width="33.3" height="100" fill="#ed2939" />
    </svg>
  )
};

const COUNTRIES_LIST = [
  { name: 'UAE', id: 'uae' },
  { name: 'Oman', id: 'oman' },
  { name: 'Kenya', id: 'kenya' },
  { name: 'Nigeria', id: 'nigeria' },
  { name: 'Bangladesh', id: 'bangladesh' },
  { name: 'Nepal', id: 'nepal' },
  { name: 'USA', id: 'usa' },
  { name: 'UK', id: 'uk' },
  { name: 'Canada', id: 'canada' },
  { name: 'Australia', id: 'australia' },
  { name: 'Uzbekistan', id: 'uzbekistan' },
  { name: 'Ghana', id: 'ghana' },
  { name: 'Saudi Arabia', id: 'saudiArabia' },
  { name: 'Tanzania', id: 'tanzania' },
  { name: 'Iraq', id: 'iraq' },
  { name: 'Ethiopia', id: 'ethiopia' },
  { name: 'Yemen', id: 'yemen' },
  { name: 'Sri Lanka', id: 'srilanka' },
  { name: 'Fiji', id: 'fiji' },
  { name: 'Mauritius', id: 'mauritius' },
  { name: 'Kuwait', id: 'kuwait' },
  { name: 'Qatar', id: 'qatar' },
  { name: 'Bahrain', id: 'bahrain' },
  { name: 'South Africa', id: 'southAfrica' },
  { name: 'Uganda', id: 'uganda' },
  { name: 'Myanmar', id: 'myanmar' },
  { name: 'Maldives', id: 'maldives' },
  { name: 'Rwanda', id: 'rwanda' },
  { name: 'Zambia', id: 'zambia' },
  { name: 'Zimbabwe', id: 'zimbabwe' },
  { name: 'Sudan', id: 'sudan' },
  { name: 'Egypt', id: 'egypt' },
  { name: 'Philippines', id: 'philippines' },
  { name: 'Singapore', id: 'singapore' },
  { name: 'Germany', id: 'germany' },
  { name: 'France', id: 'france' }
];

export default function CountriesServed() {
  return (
    <section className="lwe-countries-marquee-strip" aria-label="Trusted by Patients from 50+ Countries">
      {/* Strip Header with Gold Accent */}
      <div className="countries-strip-header">
        <h2 className="countries-strip-title">
          Trusted by Patients from <span className="title-gold-accent">50+ Countries</span>
        </h2>
      </div>

      {/* 100% Full-Viewport Edge-to-Edge Masked Marquee */}
      <div className="marquee-outer-mask">
        <div className="countries-marquee-track">
          {/* Group 1 (36 Countries) */}
          <div className="marquee-content-set">
            {COUNTRIES_LIST.map((country, index) => (
              <div key={`g1-${country.id}-${index}`} className="marquee-country-item">
                <div className="country-circle-badge">
                  {COUNTRY_FLAGS[country.id] || (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#0284c7' }} />
                  )}
                </div>
                <span className="marquee-country-name">{country.name}</span>
              </div>
            ))}
          </div>

          {/* Group 2 (Identical Clone for 100% Seamless Infinite Looping) */}
          <div className="marquee-content-set" aria-hidden="true">
            {COUNTRIES_LIST.map((country, index) => (
              <div key={`g2-${country.id}-${index}`} className="marquee-country-item">
                <div className="country-circle-badge">
                  {COUNTRY_FLAGS[country.id] || (
                    <div style={{ width: '100%', height: '100%', backgroundColor: '#0284c7' }} />
                  )}
                </div>
                <span className="marquee-country-name">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
