import React, { useState, useEffect } from 'react';
import { useCampaign } from './hooks/useCampaign.js';

// LWE Patient Care Component Suite
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import TreatmentsCarousel from './components/TreatmentsCarousel.jsx';
import SpecialistDoctors from './components/SpecialistDoctors.jsx';
import TopHospitals from './components/TopHospitals.jsx';
import PatientTestimonials from './components/PatientTestimonials.jsx';
import MedicalAssistanceTabs from './components/MedicalAssistanceTabs.jsx';
import AboutLwe from './components/AboutLwe.jsx';
import MedicalJourney from './components/MedicalJourney.jsx';
import SpecialtiesGrid from './components/SpecialtiesGrid.jsx';
import WhyChooseIndia from './components/WhyChooseIndia.jsx';
import TreatmentEstimates from './components/TreatmentEstimates.jsx';
import EnquirySection from './components/EnquirySection.jsx';
import CountriesServed from './components/CountriesServed.jsx';
import FaqAccordion from './components/FaqAccordion.jsx';
import BottomCtaBanner from './components/BottomCtaBanner.jsx';
import Footer from './components/Footer.jsx';
import StickyMobileBar from './components/StickyMobileBar.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import EnquiryModal from './components/EnquiryModal.jsx';

export default function App() {
  const { campaignKey, content } = useCampaign();

  // Enquiry Popup Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHospital, setModalHospital] = useState('');
  const [modalTreatment, setModalTreatment] = useState('');

  // Dynamic document title update for high Google Ads Quality Score
  useEffect(() => {
    if (content?.spec) {
      document.title = `${content.spec} in India | LWE Patient Care`;
    } else {
      document.title = 'Best Medical Tourism Company in India | LWE Patient Care';
    }
  }, [content]);

  // Show Enquiry Popup Modal automatically after scrolling past 3 - 4 sections
  const hasAutoTriggeredRef = React.useRef(false);

  useEffect(() => {
    const checkScroll = () => {
      if (hasAutoTriggeredRef.current) return;

      // Scroll threshold: ~850px represents scrolling past Header, Hero, and Treatments into Doctors (3-4 sections)
      const scrollPos = window.scrollY || window.pageYOffset;
      const targetEl = document.getElementById('doctors') || document.getElementById('hospitals');
      const targetOffset = targetEl ? targetEl.offsetTop - 300 : 850;

      if (scrollPos >= targetOffset) {
        hasAutoTriggeredRef.current = true;
        setIsModalOpen(true);
        window.removeEventListener('scroll', checkScroll);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const openEnquiryModal = (treatmentOrHospital = '') => {
    hasAutoTriggeredRef.current = true;
    if (typeof treatmentOrHospital === 'string' && treatmentOrHospital) {
      const lower = treatmentOrHospital.toLowerCase();
      if (
        lower.includes('hospital') ||
        lower.includes('medanta') ||
        lower.includes('apollo') ||
        lower.includes('fortis') ||
        lower.includes('max')
      ) {
        setModalHospital(treatmentOrHospital);
      } else {
        setModalTreatment(treatmentOrHospital);
      }
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="lwe-site-wrapper">
      {/* 1. Header (Sticky, with phone, WhatsApp & Request Consultation) */}
      <Header onBookClick={openEnquiryModal} />

      <main id="main-content">
        {/* 2. Hero Section + Hero Enquiry Form (Highest Priority) */}
        <HeroSection
          campaign={content}
          campaignKey={campaignKey}
          onConsultationClick={openEnquiryModal}
        />

        {/* 3. Treatments & Surgeries Carousel / Grid */}
        <TreatmentsCarousel onSelectTreatment={openEnquiryModal} />

        {/* 4. Specialist Doctors Profiles (Leading Specialists) */}
        <SpecialistDoctors onDoctorClick={(doc) => openEnquiryModal(doc?.name || doc?.specialtyBadge)} />

        {/* 5. Top Hospitals in India & Accreditation Strip */}
        <TopHospitals onHospitalSelect={(h) => openEnquiryModal(h)} />

        {/* 6. Patient Testimonials & Video Stories Modal */}
        <PatientTestimonials onBookConsultation={openEnquiryModal} />

        {/* Below 5-6 Sections: Trusted by Patients from 50+ Countries (Matches media_1794897951528_2da40b22.jpg) */}
        <CountriesServed />

        {/* 7. Complete Medical Assistance (8 Interactive Tabs) */}
        <MedicalAssistanceTabs onAssistanceClick={openEnquiryModal} />

        {/* 8. About LWE Patient Care (One Stop for Hospitals, Travel, Care) */}
        <AboutLwe onStartJourney={openEnquiryModal} />

        {/* 9. Medical Treatment Journey (6-Step Timeline) */}
        <MedicalJourney onBookClick={openEnquiryModal} />

        {/* 10. Medical Specialties (10 Specialties Grid) */}
        <SpecialtiesGrid onSelectSpecialty={openEnquiryModal} />

        {/* 11. Why Choose India & 10 Years Milestone Commemoration */}
        <WhyChooseIndia onConsultationClick={openEnquiryModal} />

        {/* 12. Transparent & Competitive Treatment Estimates */}
        <TreatmentEstimates onGetQuote={(t) => openEnquiryModal(t)} />

        {/* 13. Share Your Medical Reports (Two-Column Enquiry & Travel Coordination) */}
        <EnquirySection />


        {/* 15. Frequently Asked Questions (7 authentic PDF questions) */}
        <FaqAccordion onAskQuestion={openEnquiryModal} />

        {/* 16. Bottom India Gate CTA Banner */}
        <BottomCtaBanner />
      </main>

      {/* 17. Footer & Security Badges */}
      <Footer />

      {/* 18. Mobile Sticky Contact Bar */}
      <StickyMobileBar />

      {/* 19. Floating WhatsApp Bottom Chat Button */}
      <FloatingWhatsApp />

      {/* 20. Automatic / Interactive Enquiry Popup Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        initialHospital={modalHospital}
        initialTreatment={modalTreatment}
      />
    </div>
  );
}
