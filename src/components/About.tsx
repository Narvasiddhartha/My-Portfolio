import React from 'react';
import '../styles/About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const aboutRef = useScrollAnimation<HTMLHeadingElement>();
  const introRef = useScrollAnimation<HTMLParagraphElement>();
  const interestsRef = useScrollAnimation<HTMLDivElement>();
  const strengthsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title scroll-animation" ref={aboutRef}>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro scroll-left" ref={introRef}>
              I am a passionate B.Tech AI & ML student at SR University with a strong academic record (GPA 9.0). 
              My journey in technology is driven by a deep fascination with artificial intelligence and its 
              applications in solving real-world problems. I combine technical expertise with creative problem-solving 
              to develop innovative solutions that make a real impact.
            </p>
            <div className="about-grid">
              <div className="about-interests scroll-right" ref={interestsRef}>
                <h3>Areas of Interest</h3>
                <ul className="stagger-children">
                  <li>Deep Learning & Neural Networks</li>
                  <li>AIoT (Artificial Intelligence of Things)</li>
                  <li>Intelligent Chatbots & Conversational AI</li>
                  <li>Full Stack Web Development</li>
                  <li>Natural Language Processing</li>
                  <li>Computer Vision</li>
                </ul>
              </div>
              <div className="about-strengths scroll-left" ref={strengthsRef}>
                <h3>Key Strengths</h3>
                <ul className="stagger-children">
                  <li>Fast learner with a strong foundation in AI/ML concepts</li>
                  <li>Excellent team player with strong communication skills</li>
                  <li>Creative problem-solver with attention to detail</li>
                  <li>Passionate about continuous learning and innovation</li>
                  <li>Strong analytical and critical thinking abilities</li>
                  <li>Adaptable to new technologies and methodologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 