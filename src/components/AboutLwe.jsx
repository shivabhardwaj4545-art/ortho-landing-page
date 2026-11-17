import React, { useState, useEffect } from 'react';
import { Building2, UserCheck, Users, MapPin, ArrowRight } from 'lucide-react';

// Images curated from user directory: public/ht&c/
const GROUP_SLIDES = {
  group1: [
    { src: '/htc/002.png', alt: 'Group 1 - Patient Care' },
    { src: '/htc/010.png', alt: 'Group 1 - International Patient Care' },
    { src: '/htc/026.png', alt: 'Group 1 - Patient Bedside Care' },
    { src: '/htc/050.png', alt: 'Group 1 - Dedicated Nurse Coordinator' },
    { src: '/htc/074.png', alt: 'Group 1 - Rehabilitation Care' }
  ],
  group2: [
    { src: '/htc/003.png', alt: 'Group 2 - Medical Travel' },
    { src: '/htc/013.png', alt: 'Group 2 - Airport Reception & Transport' },
    { src: '/htc/027.png', alt: 'Group 2 - Medical Visa Assistance' },
    { src: '/htc/051.png', alt: 'Group 2 - Travel Concierge Support' },
    { src: '/htc/075.png', alt: 'Group 2 - Local Transit Coordination' }
  ],
  group3: [
    { src: '/htc/004.png', alt: 'Group 3 - Hospital Support' },
    { src: '/htc/028.png', alt: 'Group 3 - Super Specialty Operation Theatres' },
    { src: '/htc/033.png', alt: 'Group 3 - Advanced Hospital Wing' },
    { src: '/htc/052.png', alt: 'Group 3 - JCI / NABH Accredited Facility' }
  ],
  group4: [
    { src: '/htc/005.png', alt: 'Group 4 - Recovery Stories' },
    { src: '/htc/030.png', alt: 'Group 4 - Successful Patient Outcome' },
    { src: '/htc/056.png', alt: 'Group 4 - Post-Op Healing Journey' },
    { src: '/htc/080.jpg', alt: 'Group 4 - Smiling International Patient' }
  ]
};

export default function AboutLwe({ onStartJourney }) {
  // Timestamp-based automatic image transition indices
  const [slideIndices, setSlideIndices] = useState({
    group1: 0,
    group2: 0,
    group3: 0,
    group4: 0
  });

  const [isPaused, setIsPaused] = useState(false);

  // Automated timestamp rotation: transitions images automatically every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSlideIndices(prev => ({
        group1: (prev.group1 + 1) % GROUP_SLIDES.group1.length,
        group2: (prev.group2 + 1) % GROUP_SLIDES.group2.length,
        group3: (prev.group3 + 1) % GROUP_SLIDES.group3.length,
        group4: (prev.group4 + 1) % GROUP_SLIDES.group4.length
      }));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleStart = () => {
    if (onStartJourney) {
      onStartJourney();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-about-section" id="about" aria-label="About LWE Patient Care">
      <div className="container about-container-grid">
        {/* Left Side: Auto-Scrolling Photo Quad Grid from public/ht&c */}
        <div 
          className="about-photo-quad-grid"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card 1: Group 1 · Patient Care */}
          <div className="quad-item quad-item-1">
            <div 
              className="quad-slider-track"
              style={{ transform: `translateX(-${slideIndices.group1 * 100}%)` }}
            >
              {GROUP_SLIDES.group1.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  className="quad-img"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="quad-label">Group 1 · Patient Care</span>
            <div className="quad-dots" aria-hidden="true">
              {GROUP_SLIDES.group1.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`quad-dot ${idx === slideIndices.group1 ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Group 2 · Medical Travel */}
          <div className="quad-item quad-item-2">
            <div 
              className="quad-slider-track"
              style={{ transform: `translateX(-${slideIndices.group2 * 100}%)` }}
            >
              {GROUP_SLIDES.group2.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  className="quad-img"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="quad-label">Group 2 · Medical Travel</span>
            <div className="quad-dots" aria-hidden="true">
              {GROUP_SLIDES.group2.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`quad-dot ${idx === slideIndices.group2 ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Card 3: Group 3 · Hospital Support */}
          <div className="quad-item quad-item-3">
            <div 
              className="quad-slider-track"
              style={{ transform: `translateX(-${slideIndices.group3 * 100}%)` }}
            >
              {GROUP_SLIDES.group3.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  className="quad-img"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="quad-label">Group 3 · Hospital Support</span>
            <div className="quad-dots" aria-hidden="true">
              {GROUP_SLIDES.group3.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`quad-dot ${idx === slideIndices.group3 ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Card 4: Group 4 · Recovery Stories */}
          <div className="quad-item quad-item-4">
            <div 
              className="quad-slider-track"
              style={{ transform: `translateX(-${slideIndices.group4 * 100}%)` }}
            >
              {GROUP_SLIDES.group4.map((item, idx) => (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  className="quad-img"
                  loading="lazy"
                />
              ))}
            </div>
            <span className="quad-label">Group 4 · Recovery Stories</span>
            <div className="quad-dots" aria-hidden="true">
              {GROUP_SLIDES.group4.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`quad-dot ${idx === slideIndices.group4 ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Narrative & Statistics */}
        <div className="about-content-column">
          <div className="about-pill-badge">ABOUT LWE PATIENT CARE</div>
          <h2 className="section-title-bold">
            One Stop for <span style={{ color: '#0284c7' }}>Hospitals</span>,{' '}
            <span style={{ color: '#0f766e' }}>Travel</span>, and Care.
          </h2>

          <p className="about-body-text">
            Get world-class medical treatment in India with zero stress. From matching your reports with leading super-specialty surgeons to facilitating your medical visa, airport reception, and hospital admission, we take care of all logistics so you and your family can focus entirely on recovery.
          </p>

          {/* 4 Stats Grid matching PDF Page 1 */}
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <div className="stat-icon-wrap" style={{ backgroundColor: '#e0f2fe' }}>
                <Building2 size={22} color="#0284c7" />
              </div>
              <div>
                <strong className="stat-number">300+</strong>
                <span className="stat-label">Top Class Hospitals</span>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="stat-icon-wrap" style={{ backgroundColor: '#ecfdf5' }}>
                <UserCheck size={22} color="#10b981" />
              </div>
              <div>
                <strong className="stat-number">400+</strong>
                <span className="stat-label">Experienced Doctors</span>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="stat-icon-wrap" style={{ backgroundColor: '#f0fdfa' }}>
                <Users size={22} color="#0f766e" />
              </div>
              <div>
                <strong className="stat-number">25,000+</strong>
                <span className="stat-label">Patients Assisted</span>
              </div>
            </div>

            <div className="about-stat-card">
              <div className="stat-icon-wrap" style={{ backgroundColor: '#fef3c7' }}>
                <MapPin size={22} color="#d97706" />
              </div>
              <div>
                <strong className="stat-number">20+</strong>
                <span className="stat-label">Serving Indian Cities</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div style={{ marginTop: '28px' }}>
            <button
              onClick={handleStart}
              className="btn btn-primary"
            >
              <span>Start Your Journey Today</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
