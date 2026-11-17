import React, { useRef, useState } from 'react';
import {
  Star,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Award,
  ShieldCheck
} from 'lucide-react';
import { HOSPITALS, HOSPITAL_PARTNER_LOGOS } from '../data/lweData.js';

export default function TopHospitals({ onHospitalSelect }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth auto-scroll carousel
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = 380;
        if (scrollLeft + cardWidth >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = 380;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), HOSPITALS.length - 1));
  };

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const scrollBy = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    const targetLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
    scrollRef.current.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
  };

  const handleBook = (hospitalName) => {
    if (onHospitalSelect) {
      onHospitalSelect(hospitalName);
    } else {
      const el = document.getElementById('enquiry') || document.getElementById('hero-quote-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="lwe-top-hospitals-section" id="hospitals" aria-label="Top Hospitals in India">
      <div className="container">
        {/* Section Heading matching media_1794815887357_ade49afa.jpg */}
        <div className="top-hospitals-header">
          <h2 className="top-hospitals-main-title">Top Hospital in India</h2>
          <p className="top-hospitals-subtitle">Where Global Patients Meet India's Top Hospitals</p>
        </div>

        {/* Carousel Track with Prev/Next Controls */}
        <div className="hospitals-carousel-wrapper">
          <button
            onClick={() => scrollBy('left')}
            className="carousel-side-nav left-nav"
            aria-label="Previous Hospitals"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="hospitals-carousel-track"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {HOSPITALS.map((hospital, idx) => (
              <div key={hospital.name} className="hospital-slide-card">
                {/* 16:9 Hospital Image */}
                <div className="hospital-slide-img-wrap">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="hospital-slide-img"
                    loading="lazy"
                  />
                  {hospital.accreditation && (
                    <span className="hospital-floating-badge">{hospital.accreditation}</span>
                  )}
                </div>

                {/* Card Content */}
                <div className="hospital-slide-body">
                  <h3 className="hospital-name-heading">{hospital.name}</h3>

                  {/* Rating Stars */}
                  <div className="hospital-stars-row">
                    <div className="stars-cluster">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <span className="stars-score-text">
                      {hospital.rating} {hospital.reviews}
                    </span>
                  </div>

                  {/* Location Pin */}
                  <div className="hospital-meta-item">
                    <MapPin size={15} color="#0284c7" className="meta-icon" />
                    <span className="meta-text">{hospital.location}</span>
                  </div>

                  {/* Established Date */}
                  <div className="hospital-meta-item">
                    <Clock size={15} color="#64748b" className="meta-icon" />
                    <span className="meta-text">{hospital.established}</span>
                  </div>

                  {/* Blue Book Now Button */}
                  <button
                    onClick={() => handleBook(hospital.name)}
                    className="hospital-book-btn"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBy('right')}
            className="carousel-side-nav right-nav"
            aria-label="Next Hospitals"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="hospitals-dots-indicator" aria-hidden="true">
          {HOSPITALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`carousel-dot ${i === activeIndex ? 'active-blue-pill' : ''}`}
              aria-label={`Go to hospital slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All Hospitals Button matching Screenshot */}
        <div className="view-all-hospitals-wrap">
          <a href="#enquiry" onClick={() => handleBook('All Hospitals')} className="view-all-hospitals-btn">
            <span>View All Hospitals</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Accreditation and Trust Strip */}
        <div className="hospitals-accreditation-footer">
          <div className="accred-footer-left">
            <span className="accred-label">Trusted Accredited Networks:</span>
            <div className="accred-logos-list">
              {HOSPITAL_PARTNER_LOGOS.map((logo) => (
                <span key={logo.name} className="accred-logo-pill">
                  <span className="accred-dot" style={{ backgroundColor: logo.color }} />
                  {logo.name}
                </span>
              ))}
            </div>
          </div>
          <div className="accred-footer-seals">
            <div className="seal-item">
              <Award size={20} color="#d97706" />
              <span>NABH Accredited</span>
            </div>
            <div className="seal-item">
              <ShieldCheck size={20} color="#d97706" />
              <span>JCI Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
