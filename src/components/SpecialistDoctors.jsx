import React, { useRef, useState, useEffect } from 'react';
import { Star, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { SPECIALIST_DOCTORS } from '../data/lweData.js';

export default function SpecialistDoctors({ onDoctorClick }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = 320;
        if (scrollLeft + cardWidth >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = 320; // approximate width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), SPECIALIST_DOCTORS.length - 1));
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const targetLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -cardWidth * 2 : cardWidth * 2);
    scrollRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
  };

  const handleConsult = (doc) => {
    if (onDoctorClick) {
      onDoctorClick(doc);
    } else {
      const el = document.getElementById('enquiry') || document.getElementById('hero-quote-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-specialists-section" id="doctors" aria-label="Leading Specialists">
      <div className="container">
        {/* Section Heading matching media_1794815710391_5259173d.png */}
        <div className="specialists-header-wrap">
          <h2 className="specialists-main-title">
            <span className="title-red-text">Leading Specialists</span>, By Your Side.
          </h2>
          <div className="carousel-nav-arrows">
            <button
              onClick={() => scrollBy('left')}
              className="carousel-arrow-btn"
              aria-label="Previous Specialists"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy('right')}
              className="carousel-arrow-btn"
              aria-label="Next Specialists"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          className="specialists-carousel-track"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {SPECIALIST_DOCTORS.map((doc, idx) => (
            <div key={doc.name} className="specialist-slide-card">
              {/* Top Row: Circular Photo + Name + Specialty + Hospital + Experience */}
              <div className="slide-card-top">
                <div className="doctor-avatar-circle">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="doctor-avatar-img"
                    loading="lazy"
                  />
                </div>
                <div className="doctor-header-info">
                  <h3 className="doctor-name-bold">{doc.name}</h3>
                  <div className="doctor-spec-subtitle">{doc.title}</div>
                  <div className="doctor-hospital-caps">{doc.hospital}</div>
                  <div className="doctor-exp-red">{doc.experience}</div>
                </div>
              </div>

              {/* Star Rating Row */}
              <div className="doctor-rating-row">
                <div className="rating-stars-cluster" aria-label={`Rating: ${doc.rating} out of 5`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="rating-score-bold">
                  {doc.rating} ({doc.reviewsCount})
                </span>
              </div>

              {/* Specialty Tag Badge */}
              <div className="specialty-shield-tag">
                <Shield size={14} fill="#ef4444" color="#ef4444" />
                <span>{doc.specialtyBadge}</span>
              </div>

              {/* Red Action Button */}
              <button
                onClick={() => handleConsult(doc)}
                className="doctor-profile-red-btn"
              >
                View Full Profile
              </button>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots matching Screenshot */}
        <div className="specialists-dots-indicator" aria-hidden="true">
          {SPECIALIST_DOCTORS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`carousel-dot ${i === activeIndex ? 'active-red-pill' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
