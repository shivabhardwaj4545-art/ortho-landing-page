import React from 'react';

export default function TopBar({ companyName = '[Company Name]', phone = '+91 98765 43210 [EDIT]' }) {
  const handleScrollToQuote = (e) => {
    e.preventDefault();
    const target = document.getElementById('quote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // If target has an input, focus the first input for convenience
      const firstInput = target.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 400);
      }
    }
  };

  const rawPhone = phone.replace(/[^0-9+]/g, '');

  return (
    <header className="topbar">
      <div className="container topbar-content">
        <a href="/" className="topbar-brand" aria-label={`${companyName} Home`}>
          <span>{companyName}</span>
          <span className="brand-badge">India Care</span>
        </a>

        <div className="topbar-actions">
          <a
            href={`tel:${rawPhone}`}
            className="topbar-phone"
            aria-label={`Call medical coordinator at ${phone}`}
          >
            <span>Direct Desk:</span>
            <strong>{phone}</strong>
          </a>

          <a
            href="#quote"
            onClick={handleScrollToQuote}
            className="btn btn-cta btn-sm"
          >
            Get free quote
          </a>
        </div>
      </div>
    </header>
  );
}

