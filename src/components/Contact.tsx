import React from 'react';
import '../styles/Contact.css';

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/narva-siddhartha-4b04bb211/', icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/Narvasiddhartha', icon: 'fab fa-github' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/narvasiddhartha/', icon: 'fa-solid fa-code' },
];

const Contact: React.FC = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-card animate-fade-in">
        <div className="contact-header">
          <span className="contact-wave" role="img" aria-label="Laptop">💻</span>
          <h3 className="contact-subtitle">Let's Connect!</h3>
        </div>
        <div className="contact-main">
          <div className="contact-main-details">
            <div className="contact-row name-row">
              <i className="fas fa-user contact-icon"></i>
              <span className="contact-highlight contact-animate">Narva Siddhartha</span>
            </div>
            <div className="contact-row contact-row-bg email-row">
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:narvasiddhartha@gmail.com" className="contact-highlight contact-animate">narvasiddhartha@gmail.com</a>
            </div>
            <div className="contact-row contact-row-bg phone-row">
              <i className="fas fa-phone contact-icon"></i>
              <a href="tel:+917680904822">+91 76809 04822</a>
            </div>
          </div>
          <div className="contact-socials-modern">
            {socials.map((s, idx) => (
              <div key={idx} className="contact-social-group">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="contact-social-btn" title={s.name}>
                  <i className={s.icon}></i>
                </a>
                <span className="contact-social-label">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 