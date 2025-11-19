import React, { useState } from 'react';
import '../styles/Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import boeingLogo from '../assets/images/boeing.png';
import nitwLogo from '../assets/images/nitw.png';
import amazonLogo from '../assets/images/amazon.png';
import smartDoor1 from '../assets/images/smart door 1.png';
import smartDoor2 from '../assets/images/smart door 2.png';
import smartDoor3 from '../assets/images/smart door 3.png';
import smartDoor4 from '../assets/images/smart door 4.png';
import smartDoor5 from '../assets/images/smart door 5.jpg';

type ExperienceItem = {
  title: string;
  company: string;
  companyLine: string;
  companySubline?: string;
  period: string;
  badge?: string;
  summary: string;
  highlights?: string[];
  tags?: string[];
  theme: string;
  certificate?: string;
  hasLogo?: 'drdo' | 'amazon' | 'nit' | '';
  isPresent?: boolean;
  projectLink?: string;
  screenshots?: string[];
};

const Experience: React.FC = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const timelineRef = useScrollAnimation<HTMLDivElement>();

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openGallery = (images: string[]) => {
    setGalleryImages(images);
    setGalleryOpen(true);
  };

  const closeGallery = () => setGalleryOpen(false);

  const experiences: ExperienceItem[] = [
    {
      title: 'Project Intern',
      company: 'DRDO (DRDL — Defence Research and Development Laboratory)',
      companyLine: 'DRDO (DRDL)',
      companySubline: 'Defence Research and Development Laboratory — Kanchanbagh, Hyderabad, Telangana',
      period: 'Sep 2025 – Present',
      badge: 'Paid',
      summary: 'Building ML-driven defence systems and full-stack mission dashboards alongside DRDL scientists.',
      highlights: [
        'Designing deep-learning models that score seeker health and propulsion readiness for rapid mission decisions.',
        'Developing internal React + FastAPI applications with role-based access for telemetry playback and alerting.',
        'Automating deployment pipelines across secured on-prem clusters with hardened telemetry ingestion and audit trails.',
      ],
      tags: ['DRDO', 'AI/ML', 'Deep Learning', 'FastAPI', 'React', 'Full-Stack', 'On-site'],
      theme: 'indigo',
      certificate: '',
      hasLogo: 'drdo',
      isPresent: true,
    },
    {
      title: 'Trainee – Amazon ML Summer School \'25',
      company: 'Amazon',
      companyLine: 'Amazon',
      period: 'Aug 2025',
      summary: 'Completed Amazon’s invite-only ML Summer School focused on generative AI, scalable optimization, and leadership principles.',
      highlights: [
        'Selected among top engineering students across India after a competitive ML screening.',
        'Built capstone notebooks covering experimentation tracking, hyper-parameter tuning, and responsible AI checkpoints.',
        'Collaborated with Amazon scientists on AWS-native reference architectures for production ML.',
      ],
      tags: ['Amazon', 'GenAI', 'Optimization', 'AWS', 'Certification'],
      theme: 'amber',
      certificate: 'https://drive.google.com/file/d/1m_01AnN6U7eB4yCQ_a5cKZp0WL_diimX/view?usp=sharing',
      hasLogo: 'amazon',
      isPresent: false,
    },
    {
      title: 'AIoT Intern',
      company: 'NIT Warangal',
      companyLine: 'NIT Warangal',
      companySubline: 'Warangal, Telangana',
      period: 'May – Jul 2024',
      summary: 'Developed smart IoT systems with AI models, including ESP32-CAM + Telegram smart door unlockers over WiFi.',
      highlights: [
        'Built ESP32-CAM and Telegram-integrated smart door lock prototypes delivering secure remote unlock workflows with AI-based face verification.',
        'Trained lightweight CNN models and vision pipelines to detect authorized faces and raise alerts for intrusions in real time.',
      ],
      tags: ['AIoT', 'Edge Vision', 'ESP32', 'AI Models', 'Boeing'],
      theme: 'sky',
      certificate: 'https://drive.google.com/file/d/1uuwuVpUAr_aURfvGFFSKIwzCirO2ar5M/view',
      hasLogo: 'nit',
      isPresent: false,
      projectLink: 'https://github.com/Narvasiddhartha/Smart-Wifi-Door-Lock-Using-ESP32-CAM-Telegram-',
      screenshots: [smartDoor5, smartDoor1, smartDoor2, smartDoor3, smartDoor4],
    },
    {
      title: 'AI Developer Intern',
      company: 'IBM SkillsBuild',
      companyLine: 'IBM SkillsBuild',
      period: 'Jul – Aug 2024',
      summary: 'Prototyped cognitive assistants with Watson, LangChain, and vector databases for enterprise knowledgebases.',
      highlights: [
        'Delivered transformer-based FAQ bot with 92% intent accuracy.',
        'Implemented evaluation harness combining BLEU, ROUGE, and human review to harden responses.',
      ],
      tags: ['IBM', 'Watson', 'LangChain', 'LLMs', 'APIs'],
      theme: 'purple',
      certificate: 'https://drive.google.com/file/d/13EWO5CLxg39nRn60KlARtjva5_XBKyfj/view',
      hasLogo: '',
      isPresent: false,
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title scroll-animation" ref={titleRef}>Experience</h2>
        <div className="experience-grid scroll-scale" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <article key={index} className={`experience-card theme-${exp.theme}`}>
              <div className="experience-card-ring" aria-hidden="true"></div>
              <div className="experience-card-body">
                <div className="experience-top">
                  <div>
                    <p className="experience-title">{exp.title}</p>
                    {exp.badge && <span className="experience-badge">{exp.badge}</span>}
                    <div className="experience-company">
                      {exp.hasLogo === 'drdo' && (
                        <div className="experience-logos">
                          <img src={'/images/image.png'} alt="DRDO DRDL Logo" className="experience-logo" />
                        </div>
                      )}
                      {exp.hasLogo === 'amazon' && (
                        <div className="experience-logos">
                          <img src={amazonLogo} alt="Amazon Logo" className="experience-logo" />
                        </div>
                      )}
                      {exp.hasLogo === 'nit' && (
                        <>
                          <span className="experience-sponsored">(Sponsored by Boeing)</span>
                          <div className="experience-logos">
                            <img src={boeingLogo} alt="Boeing Logo" className="experience-logo" />
                            <img src={nitwLogo} alt="NITW Logo" className="experience-logo" />
                          </div>
                        </>
                      )}
                      <span className="experience-company-primary">{exp.companyLine || exp.company}</span>
                      {exp.companySubline && (
                        <span className="experience-company-subline">{exp.companySubline}</span>
                      )}
                    </div>
                  </div>
                  <div className="experience-period-chip">
                    <span>{exp.period}</span>
                    {exp.isPresent && <span className="present-dot" aria-label="Currently ongoing"></span>}
                  </div>
                </div>

                <p className="experience-summary">{exp.summary}</p>
                {exp.highlights && (
                  <ul className="experience-highlights">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {exp.tags && (
                  <div className="experience-tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="experience-tag">{tag}</span>
                    ))}
                  </div>
                )}

                {(exp.projectLink || exp.certificate || exp.screenshots) && (
                  <div className="experience-actions">
                    {exp.projectLink && (
                      <a
                        href={exp.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-cta"
                      >
                        View Project
                      </a>
                    )}
                    {exp.screenshots && (
                      <button
                        type="button"
                        className="experience-cta secondary"
                        onClick={() => openGallery(exp.screenshots!)}
                      >
                        Images
                      </button>
                    )}
                    {exp.certificate && (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-cta"
                      >
                        {exp.title.includes('Amazon') ? 'View Invitation' : 'View Certificate'}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        {galleryOpen && (
          <div className="experience-modal-overlay" onClick={closeGallery}>
            <div className="experience-modal" onClick={e => e.stopPropagation()}>
              <button className="experience-modal-close" onClick={closeGallery} aria-label="Close images">&times;</button>
              <h3 className="experience-modal-title">Project Images</h3>
              <div className="experience-modal-images">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="experience-modal-image-wrapper">
                    <img src={img} alt={`Project screenshot ${idx + 1}`} />
                    <span>{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 