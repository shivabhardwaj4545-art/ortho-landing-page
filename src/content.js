/**
 * Master Content Catalog for all Google Ads landing page campaigns.
 * Every piece of campaign copy is defined here for single-point editing.
 *
 * Supported campaigns:
 * - orthopedics (aliases: orthopaedics)
 * - neurosurgery
 * - oncology
 * - gynecology (aliases: gynaecology)
 * - cardiac
 * - general (fallback)
 */

export const CONTENT = {
  orthopedics: {
    spec: 'Orthopedics & Joint Replacement',
    h1: 'Knee and hip replacement in India',
    sub: 'Review verified surgeon credentials, compare accredited hospitals in Delhi, Mumbai, and Bangalore, and receive a fixed-estimate treatment quote within 24 hours.',
    trust: [
      'NABH & JCI accredited orthopedic centers with laminar airflow operating suites',
      'Computer-navigated & robotic joint replacement with international implant brands (Stryker, Zimmer Biomet)',
      'Dedicated international desk: medical visa letter, airport transfer, and rehabilitation planning'
    ],
    trH: 'Advanced joint & orthopedic procedures',
    trP: 'Surgeries performed by chief orthopedic consultants with 15+ years of specialized surgical practice.',
    treat: [
      'Robotic total knee replacement (unilateral and bilateral)',
      'Total hip replacement with ceramic-on-polyethylene bearings',
      'Minimally invasive partial (unicompartmental) knee replacement',
      'Revision joint replacement for worn or loosened implants',
      'Complex arthroscopic ACL / meniscus reconstruction and cartilage repair'
    ],
    cost: [
      {
        procedure: 'Total Knee Replacement (Single, US FDA-approved implant)',
        india: '$4,200 – $6,500',
        uk: '£12,000 – £16,500 [EDIT]',
        usa: '$35,000 – $55,000 [EDIT]'
      },
      {
        procedure: 'Total Hip Replacement (Ceramic / Titanium, single joint)',
        india: '$4,800 – $7,200',
        uk: '£13,500 – £18,000 [EDIT]',
        usa: '$38,000 – $60,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'How long do I need to stay in India for a knee or hip replacement?',
        a: 'Most joint replacement patients stay in the hospital for 3 to 5 days, followed by 10 to 12 days in a nearby recuperation hotel or service apartment for supervised physiotherapy and stitch removal. Plan for an overall stay of 14 to 18 days.'
      },
      {
        q: 'Which implant brands are used by the partner hospitals?',
        a: 'Our partner hospitals use globally recognized, US FDA-approved brands including Zimmer Biomet, Stryker, DePuy Synthes (Johnson & Johnson), and Smith & Nephew. Implant certificates and batch numbers are handed directly to you at discharge.'
      },
      {
        q: 'When will I be able to walk after surgery?',
        a: 'With modern fast-track surgical and anesthesia protocols, physical therapists assist patients to stand and take initial steps with a walker within 24 hours of surgery.'
      },
      {
        q: 'How do I obtain an Indian Medical Visa (e-Med Visa)?',
        a: 'Once our senior consultant reviews your X-rays/MRIs and confirms your case, the hospital issues an official Medical Visa Invitation Letter for you and up to two medical attendants. This enables swift online e-Visa processing.'
      },
      {
        q: 'Can both knees be operated on during the same trip?',
        a: 'Yes. Bilateral knee replacement can be performed simultaneously or staged 3 to 4 days apart, subject to evaluation of your cardiac health, hemoglobin levels, and surgical fitness by the senior anesthetist.'
      }
    ],
    photoCaption: 'Orthopedic surgical theater & robotic joint replacement suite 16:9',
    heroImage: '/images/hero-orthopedics.webp'
  },

  neurosurgery: {
    spec: 'Neurosurgery & Spine Care',
    h1: 'Brain tumor and spine surgery in India',
    sub: 'Consult board-certified neurosurgeons and access microsurgical facilities, intraoperative MRI, and robotic spine instrumentation at premier partner hospitals.',
    trust: [
      'State-of-the-art neuro-navigation, functional MRI, and intraoperative neuromonitoring',
      'Multidisciplinary tumor boards combining neurosurgery, radiation oncology, and neurology',
      'Full-service logistics: priority consultation scheduling, language interpreters, and ICU recovery'
    ],
    trH: 'Specialized neurosurgical & spine procedures',
    trP: 'Treatments carried out in dedicated neuro-intensive care units under internationally experienced neurosurgical teams.',
    treat: [
      'Microsurgical brain tumor excision (gliomas, meningiomas, acoustic neuromas)',
      'Minimally invasive spine surgery (MISS) for herniated discs and stenosis',
      'Multi-level spinal fusion (TLIF, PLIF) with robotic screw guidance',
      'Endoscopic skull-base and transsphenoidal pituitary tumor resection',
      'Deep brain stimulation (DBS) for Parkinson’s disease and movement disorders'
    ],
    cost: [
      {
        procedure: 'Brain Tumor Craniotomy / Microsurgical Resection',
        india: '$6,000 – $9,500',
        uk: '£22,000 – £32,000 [EDIT]',
        usa: '$75,000 – $120,000 [EDIT]'
      },
      {
        procedure: 'Minimally Invasive Spinal Decompression / Fusion (1-2 levels)',
        india: '$5,000 – $8,000',
        uk: '£16,000 – £24,000 [EDIT]',
        usa: '$50,000 – $85,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'How are complex brain tumor cases evaluated prior to travel?',
        a: 'You can upload your latest brain MRI and CT DICOM files through our secure portal. A senior neurosurgeon reviews the scans with a neuroradiologist and provides a preliminary surgical opinion and plan within 24 to 48 hours.'
      },
      {
        q: 'What neuro-navigation technologies are available at partner hospitals?',
        a: 'Partner facilities are equipped with frameless stereotactic neuro-navigation, intraoperative neuro-monitoring (IONM), cavitron ultrasonic surgical aspirators (CUSA), and intraoperative MRI/CT suites to maximize tumor resection while protecting eloquent brain regions.'
      },
      {
        q: 'How long is the required hospital and country stay for spine surgery?',
        a: 'For minimally invasive spine procedures, hospital stay is usually 2 to 3 days, followed by 7 to 10 days of post-operative monitoring before fitness-to-fly clearance. Complex fusions may require 14 to 21 days total in India.'
      },
      {
        q: 'Will language barriers affect discussions with the neurosurgeon?',
        a: 'All senior surgeons and senior clinical coordinators speak fluent English. For Arabic, French, Russian, and Swahili-speaking patients, dedicated medical interpreters accompany you to all consultations and ward rounds.'
      },
      {
        q: 'What is included in the treatment estimate provided before arrival?',
        a: 'Our written quote covers surgeon fees, pre-operative routine investigations, theater charges, ICU and room stay, basic medications, and routine implants. Any elective diagnostics or prolonged ICU requirements are clearly identified upfront.'
      }
    ],
    photoCaption: 'Neuro-navigation suite & microsurgical operative microscopy 16:9',
    heroImage: '/images/hero-neurosurgery.webp'
  },

  oncology: {
    spec: 'Medical & Surgical Oncology',
    h1: 'Cancer treatment in India',
    sub: 'Access comprehensive tumor board evaluations, advanced radiation therapies, targeted chemotherapy, and organ-preserving oncology surgery at NABH/JCI accredited centers.',
    trust: [
      'Comprehensive cancer centers with PET-CT, CyberKnife, TrueBeam LINAC, and Proton Beam access',
      'Tumor board reviews comprising surgical, medical, and radiation oncologists for every case',
      'Affordable access to certified international oncology molecules and biologic therapies'
    ],
    trH: 'Comprehensive cancer management programs',
    trP: 'Evidence-based protocols aligned with international NCCN guidelines to deliver optimal oncological outcomes.',
    treat: [
      'Organ-preserving surgical oncology for breast, GI, and gynecological cancers',
      'Advanced radiation therapy (IMRT, IGRT, CyberKnife, and TrueBeam stereotactic radiosurgery)',
      'Systemic chemotherapy, targeted immunotherapy, and hormone protocols',
      'Bone marrow and stem cell transplants (autologous and allogeneic)',
      'Minimally invasive laparoscopic and robotic-assisted oncological resections'
    ],
    cost: [
      {
        procedure: 'Surgical Tumor Resection (Breast, Colon, or Oral Cavity)',
        india: '$4,500 – $7,800',
        uk: '£15,000 – £22,000 [EDIT]',
        usa: '$45,000 – $80,000 [EDIT]'
      },
      {
        procedure: 'Advanced Radiation Therapy Course (IMRT / IGRT, 25-30 fractions)',
        india: '$3,800 – $6,200',
        uk: '£18,000 – £26,000 [EDIT]',
        usa: '$55,000 – $95,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'Can I start systemic chemotherapy or radiation immediately upon arrival?',
        a: 'On arrival, restaging investigations (such as repeat PET-CT or biopsy histopathology review) are conducted within 24 to 48 hours to confirm the exact staging. Treatment commences immediately after the tumor board concurs on the protocol.'
      },
      {
        q: 'Are the chemotherapy and immunotherapy medications genuine and certified?',
        a: 'All oncology pharmaceuticals administered in our partner hospitals are sourced directly from authorized manufacturers (e.g., Roche, Novartis, Pfizer) with stringent cold-chain custody and barcode batch verification.'
      },
      {
        q: 'Can my initial cycles be done in India and remaining cycles continued in my home country?',
        a: 'Yes. Many international patients undergo surgery or initial chemotherapy in India. The medical oncologist provides a detailed discharge dossier, protocol regimen, and medication continuation guidelines for your home oncologist.'
      },
      {
        q: 'How does the multidisciplinary tumor board work?',
        a: 'Your case is evaluated collectively by a surgical oncologist, medical oncologist, radiation oncologist, radiologist, and histopathologist to establish a tailored, staged treatment plan rather than relying on a single physician’s opinion.'
      },
      {
        q: 'What accommodation options are available for family members during extended therapies?',
        a: 'Our international patient desk arranges verified service apartments and guest houses equipped with kitchen facilities within 5 to 10 minutes of the cancer institute to keep family living costs minimal and comfortable.'
      }
    ],
    photoCaption: 'Radiation oncology linear accelerator & patient care unit 16:9',
    heroImage: '/images/hero-oncology.webp'
  },

  gynecology: {
    spec: 'Advanced Gynecology & Women’s Health',
    h1: 'Fibroid and endometriosis treatment in India',
    sub: 'Receive minimally invasive laparoscopic and robotic gynecological care from renowned female specialists, preserving fertility with accelerated post-operative recovery.',
    trust: [
      'Fertility-sparing laparoscopic and robotic surgical procedures with minimal scarring',
      'Renowned female gynecologists and reproductive medicine specialists',
      'Private rooms, discreet international care coordination, and dedicated patient liaisons'
    ],
    trH: 'Minimally invasive gynecological procedures',
    trP: 'State-of-the-art keyhole and hysteroscopic interventions tailored to your reproductive and health objectives.',
    treat: [
      'Laparoscopic and robotic myomectomy (uterine fibroid removal preserving the uterus)',
      'Advanced laparoscopic excision of deep infiltrating endometriosis',
      'Total laparoscopic hysterectomy (TLH) with rapid recovery protocols',
      'Operative hysteroscopy for polyps, uterine septa, and intrauterine adhesions',
      'Diagnostic and therapeutic fertility workups including fallopian tubal recanalization'
    ],
    cost: [
      {
        procedure: 'Laparoscopic Myomectomy (Uterine Fibroid Removal)',
        india: '$3,200 – $4,800',
        uk: '£8,500 – £12,500 [EDIT]',
        usa: '$24,000 – $38,000 [EDIT]'
      },
      {
        procedure: 'Total Laparoscopic Hysterectomy (TLH)',
        india: '$3,500 – $5,200',
        uk: '£9,000 – £14,000 [EDIT]',
        usa: '$26,000 – $42,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'Will a myomectomy affect my chances of getting pregnant in the future?',
        a: 'Uterus-preserving laparoscopic myomectomy is specifically designed to retain fertility. Removing symptomatic fibroids often improves uterine cavity structure and enhances future conception and carrying capacity.'
      },
      {
        q: 'What is the recovery timeline for laparoscopic fibroid surgery?',
        a: 'Patients typically spend 1 to 2 nights in the hospital. Light walking begins the day after surgery. Most international patients are comfortable and certified fit to travel back home within 7 to 10 days.'
      },
      {
        q: 'Can I request a female surgeon and dedicated female nursing team?',
        a: 'Yes. We partner with some of India’s most distinguished female gynecological and laparoscopic surgeons. You can request a female-led surgical and nursing care team when submitting your medical documents.'
      },
      {
        q: 'What medical records should I share before traveling for endometriosis?',
        a: 'Please upload recent pelvic ultrasound reports, pelvic MRI scans (if available), any previous surgical discharge summaries, and recent blood reports (CBC, CA-125). A specialist will review these before your departure.'
      },
      {
        q: 'Is robotic surgery available for complex multi-fibroid cases?',
        a: 'Yes. For large, multiple, or deeply intramural fibroids, the da Vinci surgical system offers superior 3D magnification and wristed instruments for high-precision suturing of the uterine muscle wall.'
      }
    ],
    photoCaption: 'Laparoscopic gynecological operative suite & recovery suite 16:9',
    heroImage: '/images/hero-gynecology.webp'
  },

  cardiac: {
    spec: 'Cardiology & Cardiac Surgery',
    h1: 'Heart surgery and bypass in India',
    sub: 'Consult renowned cardiac surgeons with experience of 20,000+ procedures, operating in dedicated heart institutes with high-volume coronary and valve outcomes.',
    trust: [
      'High-volume cardiac centers performing over 3,000 open and off-pump heart surgeries annually',
      'Hybrid operating rooms, modern cath labs, and 24/7 dedicated coronary care units',
      'Comprehensive pre-travel cardiac clearance, expedited ICU step-down, and international transfer support'
    ],
    trH: 'Advanced adult & pediatric cardiac procedures',
    trP: 'Precision cardiac interventions delivered by chief cardiac surgeons and senior cardiologists.',
    treat: [
      'Coronary artery bypass grafting (CABG - beating heart and minimally invasive)',
      'Aortic and mitral valve replacement or repair (mechanical and tissue bioprosthetic)',
      'Transcatheter aortic valve implantation (TAVI / TAVR)',
      'Pediatric cardiac surgery (ASD, VSD, Tetralogy of Fallot repair)',
      'Complex angioplasty with drug-eluting stents and intravascular ultrasound guidance (IVUS)'
    ],
    cost: [
      {
        procedure: 'Coronary Artery Bypass Graft (CABG, Off-Pump / Beating Heart)',
        india: '$5,200 – $7,800',
        uk: '£18,000 – £26,000 [EDIT]',
        usa: '$70,000 – $110,000 [EDIT]'
      },
      {
        procedure: 'Single Heart Valve Replacement (Mitral or Aortic, with certified valve)',
        india: '$5,800 – $8,500',
        uk: '£20,000 – £28,000 [EDIT]',
        usa: '$80,000 – $125,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'Is it safe for a heart patient to take an international flight to India?',
        a: 'Prior to your travel, our chief cardiac surgeon reviews your coronary angiogram, echocardiogram, and ECG to confirm medical stability for flying. If required, we coordinate medical escort assistance or oxygen cylinder clearance with airlines.'
      },
      {
        q: 'What is the advantage of beating-heart (off-pump) bypass surgery?',
        a: 'Off-pump CABG is performed while the heart is still beating, avoiding the heart-lung machine. This significantly reduces the risk of stroke, renal stress, and transfusion needs, and speeds up post-operative recovery for international patients.'
      },
      {
        q: 'How many days of hospital stay are required for open-heart surgery?',
        a: 'Standard stay is 2 to 3 days in the coronary intensive care unit (CICU) followed by 4 to 5 days in a private step-down cardiac ward. You are discharged around day 7 and monitored locally for an additional 7 to 10 days before flying home.'
      },
      {
        q: 'What certifications do your partner cardiac surgeons hold?',
        a: 'Our network includes chief surgeons with FRCS, American Board, or Indian MCh qualifications who have trained at leading institutes in the UK, USA, or Australia and have completed thousands of bypass and valve procedures.'
      },
      {
        q: 'How are follow-up consultations handled once I return home?',
        a: 'Before departure, you receive a full discharge folder with medication titration protocols. Free tele-consultations with your operating cardiac surgeon are scheduled at 2 weeks, 1 month, and 3 months via secure video call.'
      }
    ],
    photoCaption: 'Cardiothoracic surgical suite & digital catheterization laboratory 16:9',
    heroImage: '/images/hero-cardiac.webp'
  },

  general: {
    spec: 'Specialty Medical Treatment',
    h1: 'Specialty treatment in India',
    sub: 'Connect with top-tier accredited hospital networks across India. Share your medical reports to receive verified clinical opinions, hospital comparisons, and clear cost estimates.',
    trust: [
      'NABH and JCI accredited multispecialty hospital partnerships across major metropolitan cities',
      'Transparent, direct hospital price estimates with no hidden broker markups',
      'Dedicated international desk: medical visa letters, free airport pickup, and multi-language support'
    ],
    trH: 'Major specialty treatments available',
    trP: 'Complete medical coordination across premier tertiary care centers with international standards.',
    treat: [
      'Orthopedics, total knee, and hip replacement surgery',
      'Neurosurgery, brain tumor excision, and spine instrumentation',
      'Comprehensive medical, surgical, and radiation oncology',
      'Cardiac surgery, coronary bypass (CABG), and heart valve repair',
      'Advanced laparoscopic surgery, organ transplants, and fertility care'
    ],
    cost: [
      {
        procedure: 'Specialty Surgical Procedure (Average Major Surgery)',
        india: '$4,000 – $7,500',
        uk: '£14,000 – £22,000 [EDIT]',
        usa: '$40,000 – $75,000 [EDIT]'
      },
      {
        procedure: 'Comprehensive Diagnostic & Staging Workup (Full Body)',
        india: '$600 – $1,200',
        uk: '£2,500 – £4,000 [EDIT]',
        usa: '$6,000 – $10,000 [EDIT]'
      }
    ],
    faq: [
      {
        q: 'Why do international patients choose India for specialty medical care?',
        a: 'India offers internationally accredited (JCI and NABH) tertiary hospitals, world-trained surgeons, advanced robotic and diagnostic technologies, and no waiting queues—at 60% to 80% lower costs than the US or UK.'
      },
      {
        q: 'How does the free medical opinion process work?',
        a: 'Upload your latest medical summaries and scan reports through our form. Our clinical coordinator shares your case with chief specialists at 2 to 3 leading hospital centers and returns a comprehensive opinion and cost estimate within 24 hours.'
      },
      {
        q: 'What assistance is provided for visas and travel logistics?',
        a: 'We facilitate official hospital visa invitation letters for the Indian e-Medical Visa for the patient and attendants, organize complimentary airport ambulance/car pickup, book nearby service accommodation, and assign an interpreter.'
      },
      {
        q: 'Are there any hidden fees or charges for your assistance?',
        a: 'No. Our coordination services are completely free for international patients. You pay the hospital directly for your treatment according to the hospital’s official billing schedule.'
      },
      {
        q: 'How do I pay the hospital in India?',
        a: 'You can pay the hospital directly via international wire transfer (SWIFT), credit card, or traveler’s currency exchange at the hospital’s dedicated international billing desk upon admission.'
      }
    ],
    photoCaption: 'Modern tertiary care hospital center & international patient wing 16:9',
    heroImage: '/images/hero-general.webp'
  }
};

