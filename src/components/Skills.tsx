import React from 'react';
import '../styles/Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const skillsData = [
  {
    category: 'Core Languages',
    color: 'blue',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    color: 'green',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & DevOps',
    color: 'yellow',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'GraphQL', 'Docker'],
  },
  {
    category: 'AI • ML • CV',
    color: 'purple',
    skills: ['Deep Learning', 'Machine Learning', 'AI', 'NLP', 'OpenCV'],
  },
  {
    category: 'Data & Stores',
    color: 'orange',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
  },
  {
    category: 'Cloud & Platforms',
    color: 'teal',
    skills: ['AWS', 'Azure', 'Judge0', 'OpenRouter'],
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