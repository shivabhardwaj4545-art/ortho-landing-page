import React from 'react';

/**
 * Official LWE Logo Component
 * Uses the authentic brand identity image provided in media_1794891499793_2b326326.webp
 */
export default function LweLogo({ isLight = false, className = '' }) {
  return (
    <div
      className={`lwe-brand-box ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none'
      }}
    >
      <img
        src="/assets/images/lwe-logo.webp"
        alt="LWE Patient Care - Medical Treatment in India"
        className="lwe-brand-official-logo"
        style={{
          height: '42px',
          width: 'auto',
          maxHeight: '44px',
          display: 'block',
          objectFit: 'contain',
          filter: isLight ? 'brightness(1.05) drop-shadow(0 1px 2px rgba(0,0,0,0.3))' : 'none'
        }}
      />
    </div>
  );
}
