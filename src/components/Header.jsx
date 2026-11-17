import React, { useState, useEffect, useRef } from 'react';
import LweLogo from './LweLogo.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { Phone, Calendar, MessageCircle, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';
import { trackWhatsAppClick } from '../lib/analytics.js';

export default function Header({ onBookClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const navRef = useRef(null);

  const navLinks = [
    {
      label: 'About Us',
      href: '#about'
    },
    {
      label: 'Doctors',
      href: '#doctors',
      hasDropdown: true,
      items: [
        { label: 'Orthopedic Surgeons', desc: 'Joint replacement, arthroscopy & spine', href: '#doctors' },
        { label: 'Chest & Thoracic Surgeons', desc: 'Robotic thoracic & chest cancer specialists', href: '#doctors' },
        { label: 'Liver Transplant Surgeons', desc: 'Living donor liver transplantation teams', href: '#doctors' },
        { label: 'Neurosurgeons & Spine Specialists', desc: 'Brain tumor, spine decompression & fusion', href: '#doctors' },
        { label: 'Sports Medicine Specialists', desc: 'Ligament repair, ACL & cartilage reconstruction', href: '#doctors' },
        { label: 'View All Leading Specialists →', desc: 'Consult directly with India’s top recognized surgeons', href: '#doctors' }
      ]
    },
    {
      label: 'Hospitals',
      href: '#hospitals'
    },
    {
      label: 'Treatments',
      href: '#treatments',
      hasDropdown: true,
      items: [
        { label: 'Orthopedics & Joint Replacement', desc: 'Robotic knee & hip surgery', href: '#treatments' },
        { label: 'Cardiac & Valve Surgery', desc: 'CABG bypass & minimally invasive valve repair', href: '#treatments' },
        { label: 'Neurosurgery & Spine', desc: 'Brain surgery, disc herniation & spine care', href: '#treatments' },
        { label: 'Organ Transplants', desc: 'Liver, kidney & multi-organ transplant care', href: '#treatments' },
        { label: 'Oncology & Cancer Care', desc: 'Precision oncology, chemotherapy & radiation', href: '#treatments' },
        { label: 'View All Treatments & Surgeries →', desc: 'Over 100+ accredited medical procedures', href: '#treatments' }
      ]
    },
    {
      label: 'Top Procedures',
      href: '#estimates',
      hasDropdown: true,
      items: [
        { label: 'Total Knee Replacement Cost', desc: 'From $4,500 with full rehabilitation', href: '#estimates' },
        { label: 'Hip Replacement Surgery Cost', desc: 'From $5,200 with ceramic/titanium implants', href: '#estimates' },
        { label: 'Heart Bypass Surgery (CABG)', desc: 'From $5,500 at accredited cardiac centers', href: '#estimates' },
        { label: 'Spine Surgery & Decompression', desc: 'From $4,800 minimally invasive procedures', href: '#estimates' },
        { label: 'Liver Transplant Estimate', desc: 'From $28,000 comprehensive surgical package', href: '#estimates' },
        { label: 'View Full Cost Comparison Table →', desc: 'Save 60% to 80% compared to US, UK & Gulf', href: '#estimates' }
      ]
    }
  ];

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileAccordion = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const handleConsultation = (e) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('hero-quote-form') || document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('header_bar');
  };

  return (
    <header className="lwe-exact-header" role="banner" ref={navRef}>
      <div className="container exact-header-container">
        {/* Brand Logo & Navigation */}
        <div className="exact-header-left">
          <a href="#hero" className="exact-brand-link" aria-label="LWE Patient Care Home">
            <LweLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="exact-header-nav" aria-label="Main Navigation">
            <ul className="exact-nav-list">
              {navLinks.map((link) => {
                const isOpen = activeDropdown === link.label;

                if (!link.hasDropdown) {
                  return (
                    <li key={link.label} className="exact-nav-item">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="exact-nav-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }

                return (
                  <li
                    key={link.label}
                    className="exact-nav-item has-dropdown"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`exact-nav-link exact-nav-button ${isOpen ? 'dropdown-active' : ''}`}
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={14}
                        className={`dropdown-caret ${isOpen ? 'caret-rotated' : ''}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="exact-dropdown-menu" role="menu">
                        <div className="dropdown-menu-inner">
                          {link.items.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="dropdown-menu-item"
                              role="menuitem"
                            >
                              <div className="dropdown-item-header">
                                <span className="dropdown-item-title">{item.label}</span>
                              </div>
                              <span className="dropdown-item-desc">{item.desc}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Actions: Phone + Book Appointment (Blue) + Free Consultation (Green) */}
        <div className="exact-header-right">
          <a
            href={`tel:${LWE_CONTACT.primaryPhone.replace(/[^0-9+]/g, '')}`}
            className="exact-phone-link"
            aria-label={`Call ${LWE_CONTACT.primaryPhone}`}
          >
            <Phone size={16} color="#0284c7" fill="#0284c7" />
            <strong>{LWE_CONTACT.primaryPhone}</strong>
          </a>

          <a
            href="#hero-quote-form"
            onClick={handleConsultation}
            className="btn exact-btn-book"
          >
            <Calendar size={15} />
            <span>Book Appointment</span>
          </a>

          <a
            href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Hello LWE Patient Care, I need consultation for medical treatment in India.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="btn exact-btn-consult"
            aria-label="Free Consultation on WhatsApp"
          >
            <WhatsAppIcon size={18} />
            <span>Free Consultation</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="header-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="header-mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-drawer-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                if (!link.hasDropdown) {
                  return (
                    <li key={link.label} className="mobile-nav-item">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="mobile-nav-link"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }

                const isExpanded = !!mobileExpanded[link.label];

                return (
                  <li key={link.label} className="mobile-nav-item mobile-accordion-item">
                    <button
                      type="button"
                      className="mobile-nav-link mobile-accordion-trigger"
                      onClick={() => toggleMobileAccordion(link.label)}
                      aria-expanded={isExpanded}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={18}
                        className={`accordion-chevron ${isExpanded ? 'chevron-up' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <ul className="mobile-subnav-list">
                        {link.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <a
                              href={sub.href}
                              onClick={(e) => handleNavClick(e, sub.href)}
                              className="mobile-subnav-link"
                            >
                              <div className="subnav-title">{sub.label}</div>
                              <div className="subnav-desc">{sub.desc}</div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-actions">
              <a
                href={`tel:${LWE_CONTACT.primaryPhone.replace(/[^0-9+]/g, '')}`}
                className="btn btn-outline-primary"
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <Phone size={16} />
                <span>Call {LWE_CONTACT.primaryPhone}</span>
              </a>
              <a
                href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello LWE Patient Care, I need consultation for medical treatment in India.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="btn btn-solid-whatsapp"
                style={{ width: '100%', marginBottom: '10px' }}
              >
                <WhatsAppIcon size={20} />
                <span>Free Consultation on WhatsApp</span>
              </a>
              <a
                href="#hero-quote-form"
                onClick={handleConsultation}
                className="btn exact-btn-book"
                style={{ width: '100%' }}
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
