import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Star,
  Users,
  Globe2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PATIENT_SHORTS, PATIENT_STORIES_LONG } from '../data/lweData.js';
import VideoModal from './VideoModal.jsx';

export default function PatientTestimonials({ onBookConsultation }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const longScrollRef = useRef(null);
  const shortsScrollRef = useRef(null);

  const [longActiveIndex, setLongActiveIndex] = useState(0);
  const [shortsActiveIndex, setShortsActiveIndex] = useState(0);

  // Auto-scroll effect with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      if (longScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = longScrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const cardWidth = 360;
        if (scrollLeft + cardWidth >= maxScroll - 10) {
          longScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          longScrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleLongScroll = () => {
    if (!longScrollRef.current) return;
    const cardWidth = 360;
    const index = Math.round(longScrollRef.current.scrollLeft / cardWidth);
    setLongActiveIndex(Math.min(Math.max(index, 0), PATIENT_STORIES_LONG.length - 1));
  };

  const handleShortsScroll = () => {
    if (!shortsScrollRef.current) return;
    const cardWidth = 320;
    const index = Math.round(shortsScrollRef.current.scrollLeft / cardWidth);
    setShortsActiveIndex(Math.min(Math.max(index, 0), PATIENT_SHORTS.length - 1));
  };

  const scrollSection = (ref, direction, amount = 360) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  const openVideo = (videoItem) => {
    setActiveVideo(videoItem);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="lwe-testimonials-section" id="testimonials" aria-label="Patient Testimonials">
      <div className="container">
        {/* Section Header with Metrics */}
        <div className="testimonials-header-grid">
          <div>
            <h2 className="section-title-bold">Real Patient Stories</h2>
            <p className="section-subtitle-muted">
              Hear from international patients who received successful orthopedic, spine, and specialized treatment in India.
            </p>
            <div style={{ marginTop: '10px' }}>
              <a
                href="https://www.youtube.com/@lwepatientcare"
                target="_blank"
                rel="noopener noreferrer"
                className="yt-official-channel-badge"
                title="Visit Official YouTube Channel @lwepatientcare"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#ff0000" style={{ flexShrink: 0 }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Watch 160+ Videos on Official YouTube: <strong>@lwepatientcare</strong></span>
              </a>
            </div>
          </div>

          {/* Metrics Column from Reference Screenshot */}
          <div className="testimonials-metrics-row">
            <div className="metric-badge-box">
              <Users size={20} color="#0284c7" />
              <div>
                <strong>1,000+</strong>
                <span>International Patients</span>
              </div>
            </div>
            <div className="metric-badge-box">
              <Star size={20} fill="#eab308" color="#eab308" />
              <div>
                <strong>4.8 / 5</strong>
                <span>Patient Satisfaction</span>
              </div>
            </div>
            <div className="metric-badge-box">
              <Globe2 size={20} color="#10b981" />
              <div>
                <strong>60+</strong>
                <span>Countries Served</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Track 1: Long Patient Video Stories */}
        <div className="video-carousel-wrapper">
          <button
            onClick={() => scrollSection(longScrollRef, 'left', 360)}
            className="video-nav-arrow-btn left-btn"
            aria-label="Previous Stories"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="video-stories-scroll-track"
            ref={longScrollRef}
            onScroll={handleLongScroll}
          >
            {PATIENT_STORIES_LONG.map((story) => (
              <div
                key={story.id}
                className="video-story-scroll-card"
                onClick={() => openVideo(story)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openVideo(story);
                }}
                aria-label={`Watch testimonial by ${story.patient}`}
              >
                {/* Thumbnail with Play Button */}
                <div className="video-thumb-container">
                  <img
                    src={story.thumbnail}
                    alt={story.title}
                    className="video-thumb-img"
                    loading="lazy"
                  />
                  <div className="video-thumb-overlay">
                    <div className="video-play-btn-circle">
                      <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                    </div>
                    <span className="video-time-tag">{story.duration}</span>
                  </div>
                </div>

                {/* Patient Quote & Details */}
                <div className="video-story-body">
                  <blockquote className="video-story-quote">
                    "{story.quote}"
                  </blockquote>
                  <div className="video-patient-signature">
                    <span className="patient-country-code">{story.countryCode || 'KE'}</span>
                    <strong>{story.patient}</strong>
                    <span className="patient-country">· {story.country}</span>
                  </div>
                  <div className="video-procedure-tag">
                    {story.procedure}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollSection(longScrollRef, 'right', 360)}
            className="video-nav-arrow-btn right-btn"
            aria-label="Next Stories"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots Indicator for Long Stories */}
        <div className="carousel-dots-row" aria-hidden="true">
          {PATIENT_STORIES_LONG.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (longScrollRef.current) {
                  longScrollRef.current.scrollTo({ left: i * 360, behavior: 'smooth' });
                }
              }}
              className={`carousel-dot ${i === longActiveIndex ? 'active-red-pill' : ''}`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>

        {/* Scrollable Track 2: Patient Stories (Short Highlights) */}
        <div style={{ marginTop: '54px' }}>
          <div className="shorts-header-row">
            <h3 className="shorts-section-title">Patient Stories (Short Highlights)</h3>
            <div className="shorts-arrows-group">
              <button
                onClick={() => scrollSection(shortsScrollRef, 'left', 320)}
                className="shorts-arrow-btn"
                aria-label="Previous Shorts"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollSection(shortsScrollRef, 'right', 320)}
                className="shorts-arrow-btn"
                aria-label="Next Shorts"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            className="shorts-scroll-track"
            ref={shortsScrollRef}
            onScroll={handleShortsScroll}
          >
            {PATIENT_SHORTS.map((short) => (
              <div
                key={short.id}
                className="short-video-scroll-card"
                onClick={() => openVideo(short)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openVideo(short);
                }}
              >
                <div className="short-thumb-wrapper">
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="short-thumb-img"
                    loading="lazy"
                  />
                  <div className="short-play-badge">
                    <Play size={16} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                  </div>
                  <span className="short-duration">{short.duration}</span>
                </div>
                <div className="short-card-info">
                  <h4 className="short-title">{short.title}</h4>
                  <p className="short-subtitle">{short.subtitle}</p>
                  <div className="short-author">
                    <span className="patient-code-pill">{short.countryCode || 'BD'}</span>
                    <span>{short.patient}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator for Shorts */}
          <div className="carousel-dots-row" aria-hidden="true">
            {PATIENT_SHORTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (shortsScrollRef.current) {
                    shortsScrollRef.current.scrollTo({ left: i * 320, behavior: 'smooth' });
                  }
                }}
                className={`carousel-dot ${i === shortsActiveIndex ? 'active-blue-pill' : ''}`}
                aria-label={`Go to highlight ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={!!activeVideo}
        videoData={activeVideo}
        onClose={closeVideo}
        onBookConsultation={onBookConsultation}
      />
    </section>
  );
}
