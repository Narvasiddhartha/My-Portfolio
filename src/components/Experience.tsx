import React from 'react';
import '../styles/Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import boeingLogo from '../assets/images/boeing.png';
import nitwLogo from '../assets/images/nitw.png';
import amazonLogo from '../assets/images/amazon.png';

const Experience: React.FC = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const timelineRef = useScrollAnimation<HTMLDivElement>();

  const experiences = [
    {
      title: 'Trainee – Amazon ML Summer School \'25',
      company: 'Amazon',
      period: 'August 2025 - Present',
      description: 'Selected for Amazon ML Summer School 2025, a competitive program by Amazon scientists focused on core and advanced machine learning topics. Excited to start this training in August 2025.',
      certificate: 'https://drive.google.com/file/d/1m_01AnN6U7eB4yCQ_a5cKZp0WL_diimX/view?usp=sharing'
    },
    {
      title: 'AIoT Intern',
      company: 'NIT Warangal',
      period: 'May–July 2024',
      description: 'Developed smart IoT systems with AI models.',
      certificate: 'https://drive.google.com/file/d/1uuwuVpUAr_aURfvGFFSKIwzCirO2ar5M/view'
    },
    {
      title: 'AI Developer Intern',
      company: 'IBM SkillsBuild',
      period: 'July–Aug 2024',
      description: 'Built chatbots using Watson Assistant; worked on transformers, LLMs.',
      certificate: 'https://drive.google.com/file/d/13EWO5CLxg39nRn60KlARtjva5_XBKyfj/view'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title scroll-animation" ref={titleRef}>Experience</h2>
        <div className="experience-timeline scroll-scale" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">
                    {exp.period}
                    {exp.title === 'Trainee – Amazon ML Summer School \'25' && (
                      <span className="present-dot"></span>
                    )}
                  </span>
                </div>
                <h4 className="experience-company">
                  {exp.title === 'AIoT Intern' && (
                    <>
                      <span className="experience-sponsored">(Sponsored by BOEING)</span>
                      <div className="experience-logos">
                        <img src={boeingLogo} alt="Boeing Logo" className="experience-logo" />
                        <img src={nitwLogo} alt="NITW Logo" className="experience-logo" />
                      </div>
                    </>
                  )}
                  {exp.title === 'Trainee – Amazon ML Summer School \'25' && (
                    <div className="experience-logos">
                      <img src={amazonLogo} alt="Amazon Logo" className="experience-logo" />
                    </div>
                  )}
                  {exp.company}
                </h4>
                <p className="experience-description">{exp.description}</p>
                {exp.certificate && (
                  <a 
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-certificate"
                  >
                    {exp.title === 'Trainee – Amazon ML Summer School \'25' ? 'View Invitation' : 'View Certificate'}
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
      

    </section>
  );
};

export default Experience; 