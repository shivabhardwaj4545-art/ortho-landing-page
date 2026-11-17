/**
 * Centralized authentic business data for LWE Patient Care
 * Sourced directly from Reference 1 (Orthopedic Landing Screenshot)
 * and Reference 2 (LWE Patient Care 5-Page Website PDF).
 */

export const LWE_CONTACT = {
  brandName: 'LWE Patient Care',
  parentCompany: 'A Unit of LWE CARE PHARMACEUTICALS PVT LTD',
  tagline: 'Medical Treatment in India for International Patients',
  subTagline: 'Unit of LWE Care Pharmaceuticals',
  primaryPhone: '+91 97135 07082',
  secondaryPhone: '+91 97184 14989',
  whatsappNumber: '+919713507082',
  email: 'contact@lwepatientcare.in',
  address: 'Durga Enclave, Plot No.1, Near Doon Bharti Public School, Faridabad, Haryana, 121003',
  website: 'https://lwepatientcare.in/',
  disclaimer:
    'LWE Patient Care is a medical travel and healthcare facilitation service. Medical consultations, diagnostic opinions, and surgical procedures are provided directly by independent partner accredited super specialty hospitals and registered medical professionals in India.'
};

export const STATS = [
  { value: '300+', label: 'Top Class Hospitals', icon: 'Building2' },
  { value: '400+', label: 'Experienced Doctors', icon: 'UserCheck' },
  { value: '25,000+', label: 'Patients Assisted', icon: 'Users' },
  { value: '20+', label: 'Serving Cities', icon: 'MapPin' }
];

export const TRUST_INDICATORS = [
  { title: 'Experienced Orthopedic Surgeons', desc: 'Board-certified chief consultants with 15-35+ years practice' },
  { title: 'World-Class Hospitals', desc: 'JCI and NABH accredited facilities with robotic operation suites' },
  { title: 'Cost-Effective Treatment', desc: 'Up to 60-70% savings compared to Western and Gulf countries' },
  { title: 'Complete Travel Assistance', desc: 'Free visa letters, airport pickup, translators, and stay coordination' }
];

export const TREATMENTS_OFFERED = [
  {
    id: 'knee-replacement',
    name: 'Knee Replacement',
    subtitle: 'Robotic & Minimally Invasive',
    tag: 'Joint Care',
    icon: 'Activity'
  },
  {
    id: 'hip-replacement',
    name: 'Hip Replacement',
    subtitle: 'Ceramic & Titanium Implants',
    tag: 'Joint Care',
    icon: 'ShieldCheck'
  },
  {
    id: 'shoulder-surgery',
    name: 'Shoulder Surgery',
    subtitle: 'Rotator Cuff & Total Shoulder',
    tag: 'Orthopedics',
    icon: 'Crosshair'
  },
  {
    id: 'spine-surgery',
    name: 'Spine Surgery',
    subtitle: 'Endoscopic, Decompression & Fusion',
    tag: 'Neuro & Spine',
    icon: 'Bone'
  },
  {
    id: 'arthroscopy',
    name: 'Arthroscopy',
    subtitle: 'Minimally Invasive Keyhole Surgery',
    tag: 'Sports Medicine',
    icon: 'Flame'
  },
  {
    id: 'sports-injury',
    name: 'Sports Injury Treatment',
    subtitle: 'ACL, PCL & Meniscus Reconstruction',
    tag: 'Sports Medicine',
    icon: 'Zap'
  },
  {
    id: 'bone-fracture',
    name: 'Bone Fracture & Non-Union',
    subtitle: 'Complex Trauma & Ilizarov Fixation',
    tag: 'Trauma Care',
    icon: 'Layers'
  },
  {
    id: 'joint-pain',
    name: 'Joint Pain & Arthritis Care',
    subtitle: 'Cartilage Preservation & Biologicals',
    tag: 'Pain Management',
    icon: 'HeartPulse'
  }
];

export const SPECIALIST_DOCTORS = [
  {
    name: 'Dr. Yash Gulati',
    title: 'Orthopedic Surgeon',
    hospital: 'INDRAPRASTHA APOLLO',
    experience: '35+ Years Exp.',
    rating: '4.8',
    reviewsCount: '1050+',
    specialtyBadge: 'Orthopedic',
    qualification: 'MS (Ortho), MCh, Joint Reconstruction Specialist',
    expertise: 'Primary & Revision Hip Replacement, Knee Arthroplasty',
    image: '/doctor/d1.jpeg'
  },
  {
    name: 'Prof. Arvind Kumar',
    title: 'Chest & Thoracic Surgeon',
    hospital: 'MEDANTA',
    experience: '48+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1150+',
    specialtyBadge: 'Chest Surgery',
    qualification: 'MS, FACS, FICS, Robotic Thoracic Specialist',
    expertise: 'Robotic Chest Surgery, Lung Cancer, Thymoma',
    image: '/doctor/d2.jpeg'
  },
  {
    name: 'Dr. A.S. Soin',
    title: 'Liver Transplant Surgeon',
    hospital: 'MEDANTA',
    experience: '38+ Years Exp.',
    rating: '4.8',
    reviewsCount: '900+',
    specialtyBadge: 'Liver Transplant',
    qualification: 'MBBS, MS, FRCS (Glasgow), FRCS (Edin)',
    expertise: 'Living Donor Liver Transplant, Complex Hepato-Biliary',
    image: '/doctor/d3.jpeg'
  },
  {
    name: 'Dr. Sudheer K. Tyagi',
    title: 'Neurosurgeon',
    hospital: 'INDRAPRASTHA APOLLO',
    experience: '33+ Years Exp.',
    rating: '4.9',
    reviewsCount: '840+',
    specialtyBadge: 'Neurosurgery',
    qualification: 'MS, MCh (Neurosurgery), Senior Consultant',
    expertise: 'Brain Tumor Surgery, Complex Spine Surgery, Minimally Invasive Neuro',
    image: '/doctor/d4.jpeg'
  },
  {
    name: 'Dr. Vikram Dua',
    title: 'Senior Spine Surgeon',
    hospital: 'MAX HEALTHCARE',
    experience: '25+ Years Exp.',
    rating: '4.9',
    reviewsCount: '980+',
    specialtyBadge: 'Spine Surgery',
    qualification: 'MS (Ortho), MCh (Spine Surgery)',
    expertise: 'Spine Surgery, Slip Disc, Spinal Deformity, Nerve Compression',
    image: '/doctor/d5.jpeg'
  },
  {
    name: 'Dr. Rahul Sharma',
    title: 'Joint Replacement Surgeon',
    hospital: 'FORTIS HOSPITALS',
    experience: '20+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1100+',
    specialtyBadge: 'Joint Replacement',
    qualification: 'MS (Ortho), DNB, Fellowship (Joint Replacement)',
    expertise: 'Knee & Hip Replacement, Arthritis, Joint Reconstruction',
    image: '/doctor/d6.jpeg'
  },
  {
    name: 'Dr. Amit Verma',
    title: 'Arthroscopy & Sports Surgeon',
    hospital: 'MEDANTA',
    experience: '18+ Years Exp.',
    rating: '4.8',
    reviewsCount: '750+',
    specialtyBadge: 'Sports Medicine',
    qualification: 'MS (Ortho), Fellowship (Arthroscopy & Sports Medicine)',
    expertise: 'Arthroscopy, Sports Injury, Ligament & Cartilage Repair',
    image: '/doctor/d7.jpeg'
  },
  {
    name: 'Dr. Pravas Mishra',
    title: 'Hematology & Bone Marrow Transplant',
    hospital: 'MAX HEALTHCARE',
    experience: '22+ Years Exp.',
    rating: '4.9',
    reviewsCount: '820+',
    specialtyBadge: 'BMT & Hematology',
    qualification: 'MD, DM (Clinical Hematology)',
    expertise: 'Allogeneic & Autologous Stem Cell Transplants, Leukemia',
    image: '/doctor/d8.jpeg'
  },
  {
    name: 'Dr. Subhash Chandra',
    title: 'Chairman - Interventional Cardiology',
    hospital: 'BLK-MAX HOSPITAL',
    experience: '34+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1400+',
    specialtyBadge: 'Cardiology',
    qualification: 'MD, DM, DNB (Cardiology), FACC',
    expertise: 'Coronary Angioplasty, TAVI, Structural Heart Interventions',
    image: '/doctor/d9.jpeg'
  },
  {
    name: 'Dr. Hitesh Garg',
    title: 'Head - Ortho-Spine Surgery',
    hospital: 'ARTEMIS HOSPITAL',
    experience: '21+ Years Exp.',
    rating: '4.8',
    reviewsCount: '940+',
    specialtyBadge: 'Spine Surgery',
    qualification: 'MS (Ortho), Fellowship (Spine Surgery, USA)',
    expertise: 'Scoliosis Correction, Artificial Disc Replacement, Minimally Invasive Spine',
    image: '/doctor/d10.jpeg'
  },
  {
    name: 'Dr. Pradeep Chowbey',
    title: 'Chairman - Minimal Access Surgery',
    hospital: 'MAX HEALTHCARE',
    experience: '45+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1650+',
    specialtyBadge: 'Bariatric & Laparoscopy',
    qualification: 'MS, MNAMS, FICS, FACS, FCLS',
    expertise: 'Advanced Laparoscopic GI Surgery, Bariatric & Metabolic Care',
    image: '/doctor/d11.jpeg'
  },
  {
    name: 'Dr. Harit Chaturvedi',
    title: 'Chairman - Surgical Oncology',
    hospital: 'MAX HEALTHCARE',
    experience: '32+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1280+',
    specialtyBadge: 'Oncology',
    qualification: 'MS, MCh (Surgical Oncology)',
    expertise: 'Thoraco-abdominal, Breast, Gastrointestinal & Thoracic Oncology',
    image: '/doctor/d12.jpeg'
  },
  {
    name: 'Dr. S.K.S. Marya',
    title: 'Chairman - Bone & Joint Institute',
    hospital: 'MEDANTA',
    experience: '40+ Years Exp.',
    rating: '4.9',
    reviewsCount: '1520+',
    specialtyBadge: 'Joint Replacement',
    qualification: 'MS (Ortho), DNB, MCh (Liverpool), FRCS (England)',
    expertise: 'Complex Joint Replacement, Computer-Navigated & Robotic Knee Surgery',
    image: '/doctor/d13.jpeg'
  }
];

export const HOSPITALS = [
  {
    name: 'Indraprastha Apollo',
    rating: '4.9',
    reviews: '(1250+ Reviews)',
    location: 'Sarita Vihar, Delhi Mathura Road, New Delhi',
    established: 'Established: 1996',
    beds: '710+ Beds',
    specialties: 'Robotic Surgery, Cardiology, Oncology & Organ Transplants',
    image: '/assets/images/hospital-apollo.webp',
    accreditation: 'JCI & NABH Accredited'
  },
  {
    name: 'Max Super Speciality',
    rating: '4.8',
    reviews: '(980+ Reviews)',
    location: 'Press Enclave Road, Saket New Delhi',
    established: 'Established: 1989',
    beds: '530+ Beds',
    specialties: 'Bone Marrow, Neurosciences, Oncology & Advanced Orthopedics',
    image: '/assets/images/hospital-blk-max.webp',
    accreditation: 'JCI & NABH Accredited'
  },
  {
    name: 'Fortis Escorts Heart Institute',
    rating: '4.9',
    reviews: '(1420+ Reviews)',
    location: 'Okhla Road, New Delhi / FMRI Gurgaon',
    established: 'Established: 1988',
    beds: '1,000+ Beds',
    specialties: 'Heart Transplant, Robotic Knee, Oncology & Brain Care',
    image: '/assets/images/hospital-fortis.webp',
    accreditation: 'JCI & NABH Accredited'
  },
  {
    name: 'Medanta – The Medicity',
    rating: '4.9',
    reviews: '(1850+ Reviews)',
    location: 'CH Bakhtawar Singh Road, Sector 38, Gurugram',
    established: 'Established: 2009',
    beds: '1,250+ Beds',
    specialties: 'Cardiac, Oncology, Neuro, Ortho & Organ Transplant',
    image: '/assets/images/hospital-medanta.webp',
    accreditation: 'JCI & NABH Accredited'
  },
  {
    name: 'Amrita Hospital',
    rating: '4.8',
    reviews: '(920+ Reviews)',
    location: 'Sector 88, Faridabad, Delhi NCR',
    established: 'Established: 2022',
    beds: '2,600+ Beds (Asia’s Largest)',
    specialties: 'Multi-organ transplant, Robotic Surgery & Precision Oncology',
    image: '/assets/images/hospital-amrita.webp',
    accreditation: 'NABH Accredited'
  }
];

export const HOSPITAL_PARTNER_LOGOS = [
  { name: 'Max Healthcare', color: '#004f9e' },
  { name: 'Fortis Hospitals', color: '#008542' },
  { name: 'Medanta The Medicity', color: '#e31b23' },
  { name: 'Apollo Hospitals', color: '#0072ce' },
  { name: 'Artemis Hospitals', color: '#8b5a2b' }
];

export const PATIENT_SHORTS = [
  {
    id: 'short-1',
    title: 'Orthopedic Surgery in India: Patient Journey from Bangladesh',
    subtitle: 'Full patient journey, hospital stay & successful recovery in India',
    patient: 'International Patient & Family',
    country: 'Bangladesh',
    countryCode: 'BD',
    flag: '🇧🇩',
    duration: '03:15',
    thumbnail: 'https://i.ytimg.com/vi/ETVRLlTFrIU/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ETVRLlTFrIU?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=ETVRLlTFrIU'
  },
  {
    id: 'short-2',
    title: 'Open-Heart Surgery: Advanced Cardiac Care at Accord Hospital',
    subtitle: 'High precision coronary intervention & post-op recovery',
    patient: 'Cardiac Patient',
    country: 'Nigeria',
    countryCode: 'NG',
    flag: '🇳🇬',
    duration: '04:12',
    thumbnail: 'https://i.ytimg.com/vi/XaYX3bRzsDw/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/XaYX3bRzsDw?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=XaYX3bRzsDw'
  },
  {
    id: 'short-3',
    title: 'Restoring Mobility: Advanced Spine Care and Treatment in India',
    subtitle: 'Spine decompression, rehabilitation & pain-free mobility',
    patient: 'Spine Care Patient',
    country: 'Kenya',
    countryCode: 'KE',
    flag: '🇰🇪',
    duration: '03:40',
    thumbnail: 'https://i.ytimg.com/vi/0VYIpnjdX74/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/0VYIpnjdX74?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=0VYIpnjdX74'
  },
  {
    id: 'short-4',
    title: 'Advanced Spine Surgery by Dr. Vikram Dua: Patient Story',
    subtitle: 'Minimally invasive spine surgery with rapid recovery in Delhi NCR',
    patient: 'Spine Patient',
    country: 'Ghana',
    countryCode: 'GH',
    flag: '🇬🇭',
    duration: '02:55',
    thumbnail: 'https://i.ytimg.com/vi/MuJgK0rnX28/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/MuJgK0rnX28?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=MuJgK0rnX28'
  },
  {
    id: 'short-5',
    title: 'International Patient Experience: Successful Kidney Treatment',
    subtitle: 'Comprehensive renal care & hospital coordination in India',
    patient: 'Kidney Patient',
    country: 'Uzbekistan',
    countryCode: 'UZ',
    flag: '🇺🇿',
    duration: '03:18',
    thumbnail: 'https://i.ytimg.com/vi/9dEUEzWEOL0/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/9dEUEzWEOL0?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=9dEUEzWEOL0'
  },
  {
    id: 'short-6',
    title: 'Ovarian Cancer Treatment Success: Ms. Mbuyi’s Journey to Recovery',
    subtitle: 'Advanced oncology surgical care & chemotherapy support',
    patient: 'Ms. Mbuyi',
    country: 'Africa / Congo',
    countryCode: 'CD',
    flag: '🇨🇩',
    duration: '04:05',
    thumbnail: 'https://i.ytimg.com/vi/SJLQHxwfrWY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/SJLQHxwfrWY?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=SJLQHxwfrWY'
  },
  {
    id: 'short-7',
    title: 'Advanced Brain Aneurysm Treatment: Flow Diverter Success Story',
    subtitle: 'High precision neuro intervention with top neurosurgeon',
    patient: 'Neuro Patient',
    country: 'UAE',
    countryCode: 'AE',
    flag: '🇦🇪',
    duration: '03:22',
    thumbnail: 'https://i.ytimg.com/vi/G_GhUtwn_IQ/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/G_GhUtwn_IQ?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=G_GhUtwn_IQ'
  }
];

export const PATIENT_STORIES_LONG = [
  {
    id: 'story-1',
    title: 'Orthopedic Surgery: Patient Journey from Bangladesh',
    quote: 'From report review in Dhaka to surgery in India and return travel, LWE took care of every step with complete compassion.',
    patient: 'Tariq & Family',
    country: 'Bangladesh',
    countryCode: 'BD',
    flag: '🇧🇩',
    duration: '03:15',
    procedure: 'Complex Orthopedic Reconstruction',
    thumbnail: 'https://i.ytimg.com/vi/ETVRLlTFrIU/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ETVRLlTFrIU?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=ETVRLlTFrIU'
  },
  {
    id: 'story-2',
    title: 'Open-Heart Surgery: Advanced Cardiac Care',
    quote: 'The heart surgery was successful with world-class facilities and zero waiting time. LWE patient coordinators were by our side daily.',
    patient: 'Chinedu Eze',
    country: 'Nigeria',
    countryCode: 'NG',
    flag: '🇳🇬',
    duration: '04:12',
    procedure: 'Open-Heart Surgery & Valve Repair',
    thumbnail: 'https://i.ytimg.com/vi/XaYX3bRzsDw/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/XaYX3bRzsDw?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=XaYX3bRzsDw'
  },
  {
    id: 'story-3',
    title: 'Restoring Mobility: Advanced Spine Care in India',
    quote: 'I had severe spinal pain and could not walk. The surgeons in India treated me with immense care and got me back on my feet.',
    patient: 'David Mwangi',
    country: 'Kenya',
    countryCode: 'KE',
    flag: '🇰🇪',
    duration: '03:40',
    procedure: 'Advanced Spine Decompression & Fixation',
    thumbnail: 'https://i.ytimg.com/vi/0VYIpnjdX74/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/0VYIpnjdX74?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=0VYIpnjdX74'
  },
  {
    id: 'story-4',
    title: 'Spine Surgery Success by Dr. Vikram Dua',
    quote: 'Dr. Vikram Dua and the medical team explained everything clearly. The minimally invasive procedure solved my chronic back problem.',
    patient: 'Kofi Mensah',
    country: 'Ghana',
    countryCode: 'GH',
    flag: '🇬🇭',
    duration: '02:55',
    procedure: 'Minimally Invasive Spine Surgery',
    thumbnail: 'https://i.ytimg.com/vi/MuJgK0rnX28/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/MuJgK0rnX28?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=MuJgK0rnX28'
  },
  {
    id: 'story-5',
    title: 'Successful Kidney Treatment Experience in India',
    quote: 'We were guided smoothly with medical visas, interpreter services, and top nephrology consultants in New Delhi.',
    patient: 'Dilshod Akhmedov',
    country: 'Uzbekistan',
    countryCode: 'UZ',
    flag: '🇺🇿',
    duration: '03:18',
    procedure: 'Nephrology & Renal Therapy',
    thumbnail: 'https://i.ytimg.com/vi/9dEUEzWEOL0/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/9dEUEzWEOL0?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=9dEUEzWEOL0'
  },
  {
    id: 'story-6',
    title: 'Ovarian Cancer Treatment Success: Ms. Mbuyi',
    quote: 'Finding affordable, cutting-edge cancer therapy was a blessing. The oncologists gave me hope and a complete cure.',
    patient: 'Ms. Mbuyi',
    country: 'Africa / Congo',
    countryCode: 'CD',
    flag: '🇨🇩',
    duration: '04:05',
    procedure: 'Multidisciplinary Surgical Oncology',
    thumbnail: 'https://i.ytimg.com/vi/SJLQHxwfrWY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/SJLQHxwfrWY?autoplay=1&rel=0',
    watchUrl: 'https://www.youtube.com/watch?v=SJLQHxwfrWY'
  }
];

export const MEDICAL_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Send Us Your Reports',
    desc: 'Upload recent MRI, CT scans, blood reports, or discharge summaries through WhatsApp or our secure portal.'
  },
  {
    step: '02',
    title: 'Get Doctor’s Opinion',
    desc: 'Chief consultants from 2 to 3 leading accredited hospital networks evaluate your file within 24 to 48 hours.'
  },
  {
    step: '03',
    title: 'Receive Treatment Plan & Estimate',
    desc: 'Receive transparent, hospital-direct pricing estimates, length-of-stay details, and doctor recommendations.'
  },
  {
    step: '04',
    title: 'Visa & Travel Support',
    desc: 'Official hospital Visa Invitation Letters (VIL) issued for patient and attendants, plus flights and stay guidance.'
  },
  {
    step: '05',
    title: 'Treatment in India',
    desc: 'Complimentary airport pickup, dedicated language interpreter, priority admission, and personal bedside assistance.'
  },
  {
    step: '06',
    title: 'Recovery & Follow-Up',
    desc: 'Post-op physical therapy, medication titration, fit-to-fly clearance, and long-term teleconsultation once home.'
  }
];

export const MEDICAL_ASSISTANCE_TABS = [
  {
    id: 'affordable-services',
    label: 'Affordable Medical Services',
    heading: 'High-quality, cost-effective healthcare solutions',
    desc: 'We bridge the gap between world-class medical expertise and affordability. By partnering with leading JCI and NABH accredited hospitals, we ensure you receive premium surgical and diagnostic care at 60-70% lower cost than in Western or Gulf countries, with zero hidden brokerage charges.',
    image: '/assets/images/assistance-team.webp'
  },
  {
    id: 'visa-invitation',
    label: 'Medical Visa Invitation Letter',
    heading: 'Fast-track Indian e-Medical Visa processing',
    desc: 'Receive official Visa Invitation Letters (VIL) issued directly by partner hospitals for the patient and up to two medical attendants. This enables swift online e-Medical Visa approval from the Indian Embassy or Visa Portal in 48-72 hours.',
    image: '/assets/images/hero-doctor-patient.webp'
  },
  {
    id: 'pre-scheduled-appointments',
    label: 'Pre-scheduled Doctor’s Appointment',
    heading: 'Priority consultations with department directors',
    desc: 'Skip waiting queues. Your initial consultations and diagnostic slots with senior professors and department chiefs are confirmed and locked in before your plane takes off.',
    image: '/doctor/d5.jpeg'
  },
  {
    id: 'airport-pickup',
    label: 'Complimentary Airport Pickup & Drop',
    heading: 'Door-to-door reception from the airport terminal',
    desc: 'A dedicated patient executive meets you at New Delhi, Mumbai, or Bangalore international terminals with private air-conditioned vehicle or medical ambulance transfer directly to the hospital or accommodation.',
    image: '/assets/images/hospital-medanta.webp'
  },
  {
    id: 'verified-hotels',
    label: 'Verified Hotels Near Hospitals',
    heading: 'Comfortable family accommodations with kitchens',
    desc: 'We arrange vetted hotels and service apartments within a 5 to 10-minute radius of the hospital, equipped with kitchenettes, Wi-Fi, and 24/7 security at pre-negotiated international patient rates.',
    image: '/assets/images/hospital-amrita.webp'
  },
  {
    id: 'in-hospital-assistance',
    label: 'Local and In-Hospital Assistance',
    heading: 'Dedicated personal care executive by your bedside',
    desc: 'From OPD registration, currency exchange, local SIM cards, admission paperwork to diagnostic coordination, our on-ground care coordinators accompany you every single step of the way.',
    image: '/assets/images/testimonial-martha.webp'
  },
  {
    id: 'interpreter-facility',
    label: 'Interpreter Facility',
    heading: 'Fluent native medical language interpreters',
    desc: 'Eliminate language barriers with certified native-speaking interpreters for Arabic, French, Russian, Bengali, Swahili, and Uzbek who assist you during all physician rounds and clinical evaluations.',
    image: '/assets/images/testimonial-james.webp'
  },
  {
    id: 'priority-admission',
    label: 'Priority Admission',
    heading: 'Zero waiting time for surgical intervention',
    desc: 'International patient fast-track corridors guarantee seamless hospital admission, immediate private room allotment, and streamlined pre-anesthetic clearance.',
    image: '/assets/images/hospital-blk-max.webp'
  }
];

export const MEDICAL_SPECIALTIES = [
  { name: 'Cardiology & Heart', desc: 'CABG Bypass, Valve Replacement, TAVI & Angioplasty', icon: 'Heart', color: '#e11d48' },
  { name: 'Oncology & Cancer', desc: 'CyberKnife, TrueBeam, Surgical Oncology & Immunotherapy', icon: 'ShieldAlert', color: '#9333ea' },
  { name: 'Nephrology & Kidney', desc: 'Kidney Transplant, Dialysis & Minimally Invasive Urology', icon: 'Activity', color: '#2563eb' },
  { name: 'Orthopedics & Joints', desc: 'Robotic Knee & Hip Replacement, Complex Spine Surgery', icon: 'Bone', color: '#0d9488' },
  { name: 'General & GI Surgery', desc: 'Laparoscopic Hernia, Gallbladder, Bariatric & Colorectal', icon: 'Stethoscope', color: '#059669' },
  { name: 'Gastroenterology', desc: 'Endoscopy, Pancreatic Care, Liver Disease & GI Oncology', icon: 'Utensils', color: '#d97706' },
  { name: 'Neurology & Brain', desc: 'Brain Tumor Craniotomy, DBS, Stroke & Spine Surgery', icon: 'Brain', color: '#4f46e5' },
  { name: 'IVF & Fertility', desc: 'ICSI, Donor Programs, PGT-A & Hysteroscopy', icon: 'Baby', color: '#db2777' },
  { name: 'Liver Transplant', desc: 'Living Donor Liver Transplant with 95%+ success rate', icon: 'HeartPulse', color: '#ea580c' },
  { name: 'Kidney Transplant', desc: 'Laparoscopic Donor Nephrectomy & ABO-Incompatible Transplants', icon: 'Cross', color: '#0284c7' }
];

export const TREATMENT_ESTIMATES = [
  { name: 'Knee Replacement', startingPrice: '$4,000', icon: 'Bone', category: 'Orthopedics' },
  { name: 'Hip Replacement', startingPrice: '$5,500', icon: 'Activity', category: 'Orthopedics' },
  { name: 'Brain Tumor Surgery', startingPrice: '$5,000', icon: 'Brain', category: 'Neurosurgery' },
  { name: 'Heart Bypass (CABG)', startingPrice: '$4,500', icon: 'Heart', category: 'Cardiology' },
  { name: 'Valve Replacement', startingPrice: '$9,500', icon: 'HeartPulse', category: 'Cardiology' },
  { name: 'Breast Cancer Surgery', startingPrice: '$5,000', icon: 'ShieldAlert', category: 'Oncology' },
  { name: 'Lung Cancer Surgery', startingPrice: '$5,500', icon: 'Flame', category: 'Oncology' },
  { name: 'Rhinoplasty', startingPrice: '$1,800', icon: 'Sparkles', category: 'Cosmetic' },
  { name: 'Breast Implants', startingPrice: '$2,750', icon: 'Layers', category: 'Cosmetic' },
  { name: 'Hair Transplant', startingPrice: '$1,400', icon: 'User', category: 'Cosmetic' },
  { name: 'Cervical Cancer Treatment', startingPrice: '$4,500', icon: 'ShieldCheck', category: 'Gynecology' },
  { name: 'Hysterectomy (TLH)', startingPrice: '$3,000', icon: 'Crosshair', category: 'Gynecology' }
];

export const COUNTRIES_SERVED = [
  { name: 'Bangladesh', flag: '🇧🇩' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Oman', flag: '🇴🇲' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'Uzbekistan', flag: '🇺🇿' },
  { name: 'Kazakhstan', flag: '🇰🇿' },
  { name: 'Nepal', flag: '🇳🇵' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Ethiopia', flag: '🇪🇹' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Australia', flag: '🇦🇺' }
];

export const FAQS = [
  {
    q: 'Why should I choose India for medical treatment through LWE Patient Care?',
    a: 'India offers internationally accredited (JCI and NABH) tertiary hospitals, globally trained surgeons, and advanced robotic technologies at 60% to 80% lower costs than the USA, UK, or Gulf nations. With LWE Patient Care, you pay zero coordination fees and receive direct hospital billing, free opinions, visa support, and personal hospital liaisons.'
  },
  {
    q: 'How does LWE Patient Care assist international patients?',
    a: 'We provide end-to-end facilitation: medical file reviews by 2 to 3 leading department directors, transparent cost quotes, official hospital Visa Invitation Letters (VIL), complimentary airport pickup, vetted accommodations, language interpreters, in-hospital bedside guidance, and post-discharge follow-up teleconsultations.'
  },
  {
    q: 'How can I get a Medical Visa Invitation Letter (VIL) for India?',
    a: 'Once our senior consultant reviews your medical reports and confirms your treatment plan, the chosen accredited partner hospital issues an official Medical Visa Invitation Letter for you and up to two medical attendants, allowing quick online e-Medical Visa processing in 48 to 72 hours.'
  },
  {
    q: 'Is there any charge for medical consultation and cost estimation?',
    a: 'No. Our coordination and preliminary opinion services are 100% free of charge for international patients. You pay only the hospital directly for medical diagnostics and procedures upon arrival.'
  },
  {
    q: 'Will language be a barrier during my medical trip?',
    a: 'Not at all. All senior doctors, surgeons, and hospital nursing supervisors speak fluent English. In addition, LWE Patient Care provides certified native interpreters for Arabic, French, Russian, Bengali, Swahili, and Uzbek to accompany you throughout all consultations and hospital rounds.'
  },
  {
    q: 'Can family members travel with the patient to India?',
    a: 'Yes. Up to two family members or medical attendants can travel under the Indian e-Medical Attendant Visa. We also help book convenient family suites and service apartments with kitchen amenities within 5 minutes of the hospital.'
  },
  {
    q: 'How does post-treatment follow-up work after returning to my country?',
    a: 'Before departing India, you receive a complete medical dossier with discharge summaries, imaging discs, and medication guidelines. We schedule regular video teleconsultations between you and your operating surgeon at 2 weeks, 1 month, and 3 months to monitor your full recovery.'
  }
];

