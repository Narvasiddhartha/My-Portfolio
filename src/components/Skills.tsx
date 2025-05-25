import React from 'react';
import '../styles/Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const skillsData = [
  {
    category: 'Languages',
    color: 'blue',
    skills: ['C', 'Python', 'Java', 'C#'],
  },
  {
    category: 'Web Technologies',
    color: 'green',
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs'],
  },
  {
    category: 'Tools & Frameworks',
    color: 'purple',
    skills: ['Flask', 'Django', 'Git', 'PowerBI', 'Tableau', 'Visual Studio'],
  },
  {
    category: 'Databases',
    color: 'yellow',
    skills: ['SQL', 'MySQL', 'PLSQL', 'MongoDB'],
  },
  {
    category: 'Domain Knowledge',
    color: 'orange',
    skills: ['Machine Learning', 'Data Science', 'Data Analytics', 'Full Stack Development'],
  },
  {
    category: 'Cloud',
    color: 'teal',
    skills: ['AWS', 'Azure', 'Google Cloud', 'Heroku'],
  },
  {
    category: 'Networking',
    color: 'red',
    skills: ['TCP/IP', 'DNS', 'HTTP', 'REST APIs', 'VPN'],
  },
];

const Skills: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLHeadingElement>();
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title scroll-animation" ref={sectionRef}>Skills</h2>
        <div className="skills-categories">
          {skillsData.map((cat, idx) => (
            <div className="skills-category scroll-animation" key={cat.category} style={{ animationDelay: `${0.1 * idx}s` }}>
              <h3 className="skills-category-title">{cat.category}</h3>
              <div className="skills-badges">
                {cat.skills.map(skill => (
                  <span className={`skill-badge badge-${cat.color}`} key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 