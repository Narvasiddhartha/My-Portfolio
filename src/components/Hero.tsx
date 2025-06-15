import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/images/profile.jpg';

const skills = [
  'Python', 'Java', 'Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'AI'
];

const details = {
  name: 'Narva Siddhartha',
  email: 'narvasiddhartha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/narva-siddhartha-4b04bb211/',
  github: 'https://github.com/Narvasiddhartha',
};

const resumeUrl = 'https://drive.google.com/file/d/1MHcOPyfx8rzswFOUZSK2ukVuCa-2aGH3/view';

const Hero: React.FC = () => {
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    const text = `Name: ${details.name}\nEmail: ${details.email}\nLinkedIn: ${details.linkedin}\nGitHub: ${details.github}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-skill-bg">
        {skills.map((skill, i) => (
          <span key={i} className={`skill-float skill-float-${i % 8}`}>{skill}</span>
        ))}
      </div>
      <div className="container hero-container hero-landscape">
        <img 
          src={profileImage}
          alt="Narva Siddhartha" 
          className="hero-image animate-scale hero-image-large" 
        />
        <div className="code-editor-mockup-wrapper">
          <div className="car-anim">
            <span role="img" aria-label="car" className="car-emoji">🚗</span>
          </div>
          <div className="code-editor-mockup">
            <div className="code-editor-header">
              <span className="code-circle red"></span>
              <span className="code-circle yellow"></span>
              <span className="code-circle green"></span>
              <div className="header-btn-group">
                <button className="copy-btn" onClick={handleCopy} title="Copy details" type="button">
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </div>
            <div className="hero-code compact-code">
              <div className="code-row code-top-row">
                <span className="code-keyword">public class</span> <span className="code-class">Portfolio</span> {'{'}</div>
              <div className="code-row">
                <span className="code-keyword">String</span> <span className="code-field">NAME</span> = <span className="code-value highlight">"Narva Siddhartha"</span>;
              </div>
              <div className="code-row">
                <span className="code-keyword">String</span> <span className="code-field">EMAIL</span> = 
                <a href="mailto:narvasiddhartha@gmail.com" className="code-value highlight code-email">"narvasiddhartha@gmail.com"</a>;
              </div>
              <div className="code-row">
                <span className="code-keyword">String</span> <span className="code-field">LINKEDIN</span> = <a href="https://www.linkedin.com/in/narva-siddhartha-4b04bb211/" target="_blank" rel="noopener noreferrer" className="code-value code-string">"https://www.linkedin.com/in/narva-siddhartha-4b04bb211/"</a>;
              </div>
              <div className="code-row">
                <span className="code-keyword">String</span> <span className="code-field">GITHUB</span> = <a href="https://github.com/Narvasiddhartha" target="_blank" rel="noopener noreferrer" className="code-value code-string">"https://github.com/Narvasiddhartha"</a>;
              </div>
              <div className="code-row code-bottom-row">{'}'}</div>
            </div>
          </div>
        </div>
      </div>
      {showScrollDown && (
        <div className="scroll-down-anim">
          <span className="scroll-down-text">Scroll Down</span>
          <span className="scroll-down-arrow">&#8595;</span>
        </div>
      )}
    </section>
  );
};

export default Hero; 