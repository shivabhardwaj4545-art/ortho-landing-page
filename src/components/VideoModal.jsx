import React, { useEffect } from 'react';
import { X, Play, ShieldCheck, PhoneCall } from 'lucide-react';
import { LWE_CONTACT } from '../data/lweData.js';

export default function VideoModal({ isOpen, onClose, videoData, onBookConsultation }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoData) return null;

  return (
    <div
      className="video-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={videoData.title}
    >
      <div
        className="video-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="video-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>{videoData.flag || '🏥'}</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', color: '#0f172a' }}>{videoData.title}</h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                {videoData.patient} · {videoData.country}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="video-modal-close-btn"
            aria-label="Close video player"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Embed / Realistic Preview */}
        <div className="video-modal-player-wrap">
          {videoData.videoUrl ? (
            <iframe
              src={videoData.videoUrl}
              title={videoData.title}
              width="100%"
              height="100%"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '380px',
                border: 'none',
                display: 'block'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="video-player-inner">
              <img
                src={videoData.thumbnail}
                alt={videoData.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="video-player-overlay">
                <div className="video-player-play-ring">
                  <Play size={32} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                </div>
                <span className="video-player-duration-badge">
                  Patient Video Clip · {videoData.duration || '03:45'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Quote & Consultation Footer */}
        <div className="video-modal-footer">
          {videoData.quote && (
            <blockquote className="video-modal-quote">
              "{videoData.quote}"
            </blockquote>
          )}
          <div className="video-modal-actions">
            <button
              onClick={() => {
                onClose();
                if (onBookConsultation) onBookConsultation();
              }}
              className="btn btn-cta btn-sm"
              style={{ padding: '10px 18px' }}
            >
              Get Free Treatment Plan
            </button>
            <a
              href={videoData.watchUrl || "https://www.youtube.com/@lwepatientcare"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ padding: '10px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff0000', borderColor: '#e2e8f0' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Watch on YouTube</span>
            </a>
            <a
              href={`https://wa.me/${LWE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello LWE Patient Care, I watched ${videoData.patient}'s testimonial about ${videoData.title} and want to inquire about treatment in India.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid-whatsapp btn-sm"
              style={{ padding: '10px 18px' }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

