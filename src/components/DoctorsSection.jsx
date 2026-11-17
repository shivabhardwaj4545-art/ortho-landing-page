import React from 'react';
import ImagePlaceholder from './ImagePlaceholder.jsx';

export default function DoctorsSection({ specialtyName = 'Specialty Care' }) {
  const doctors = [
    {
      name: '[Doctor Name 1 - Lead Specialist]',
      qualification: '[MBBS, MS/MD, MCh / FRCS / Fellowship (UK/USA)]',
      experience: '[22+ Years Clinical Experience]',
      hospital: '[Max Healthcare / Fortis Memorial / Apollo Hospitals]',
      image: '/images/doctor-1.webp'
    },
    {
      name: '[Doctor Name 2 - Senior Consultant]',
      qualification: '[MBBS, DNB, Fellowship in Robotic & Minimally Invasive Surgery]',
      experience: '[18+ Years Clinical Experience]',
      hospital: '[Medanta The Medicity / Artemis Hospital]',
      image: '/images/doctor-2.webp'
    },
    {
      name: '[Doctor Name 3 - Chief Department Director]',
      qualification: '[MBBS, MS, American Board / International Faculty]',
      experience: '[26+ Years Clinical Experience]',
      hospital: '[Manipal Hospital / Gleneagles Global Health City]',
      image: '/images/doctor-3.webp'
    }
  ];

  return (
    <section className="section" aria-label="Partner Hospital Specialists">
      <div className="container">
        <div className="section-header">
          <h2>Consult leading hospital specialists</h2>
          <p>
            Your reports are directly evaluated by verified department directors and senior surgical consultants in {specialtyName}.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc, idx) => (
            <div key={idx} className="doctor-card">
              <ImagePlaceholder
                src={doc.image}
                alt={doc.name}
                aspectRatio="4/5"
                caption={`Doctor portrait 4:5 [EDIT: Add verified photo of ${doc.name}]`}
              />
              <div className="doctor-info">
                <h3 className="doctor-name">{doc.name}</h3>
                <div className="doctor-qual">{doc.qualification}</div>
                <div className="doctor-meta">
                  {doc.experience} · {doc.hospital}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

