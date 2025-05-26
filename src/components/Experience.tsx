import React from 'react';
import '../styles/Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience: React.FC = () => {
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const timelineRef = useScrollAnimation<HTMLDivElement>();

  const experiences = [
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
    },
    {
      title: 'Web Development Intern',
      company: 'Proxenix',
      period: (
        <span>
          01-June-2025 – <span className="present-dot"></span> Present
        </span>
      ),
      description: 'Contributing to real-world projects, collaborating with cross-functional teams, and building modern, responsive web applications using the latest technologies. Gained hands-on experience in full-stack development and agile workflows.'
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
                  <span className="experience-period">{exp.period}</span>
                </div>
                <h4 className="experience-company">
                  {exp.title === 'AIoT Intern' && (
                    <>
                      <span className="experience-sponsored">(Sponsored by BOEING)</span>
                      <div className="experience-logos">
                        <img src="/images/boeing.png" alt="Boeing Logo" className="experience-logo" />
                        <img src="/images/NITW.png" alt="NITW Logo" className="experience-logo" />
                      </div>
                    </>
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
                    View Certificate
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