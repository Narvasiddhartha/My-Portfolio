import React, { useState } from 'react';
import '../styles/Projects.css';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import disasterImage from '../assets/images/Disaster.png';
import faceEmotionImage from '../assets/images/Face emotion.png';
import smartDoor1 from '../assets/images/smart door 1.png';
import smartDoor2 from '../assets/images/smart door 2.png';
import smartDoor3 from '../assets/images/smart door 3.png';
import smartDoor4 from '../assets/images/smart door 4.png';
import smartDoor5 from '../assets/images/smart door 5.jpg';

const projects = [
  {
    title: 'Study-Hub',
    description: <>
      Study-Hub is a <strong>full-stack learning companion</strong> for computer science students. It combines curated study resources, AI-assisted planning, subject-wise quizzes, collaborative notes, and a built-in code runner into a single workspace.
    </>,
    image: '/images/screenshot-1.jpeg',
    profileImage: '/images/screenshot-2.jpeg',
    github: 'https://github.com/Narvasiddhartha/Study-Hub',
    screenshots: [
      '/images/screenshot-1.jpeg',
      '/images/screenshot-2.jpeg',
      '/images/screenshot-3.jpeg',
      '/images/screenshot-4.jpeg',
      '/images/screenshot-5.jpeg',
      '/images/screenshot-6.jpeg',
    ],
    tools: [
      'React 19',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'OpenRouter',
      'Judge0',
      'Bootstrap 5',
      'Chart.js',
    ],
  },
  {
    title: 'Disaster Tweet Classification',
    description: <>
      Classifies disaster-related tweets in <strong>real-time</strong> using <strong>ML</strong> and <strong>NLP</strong>.<br/>
      Achieved <strong>92% accuracy</strong> on real-world data.<br/>
      Helps in <strong>rapid disaster response</strong> and <strong>information filtering</strong>.
    </>,
    image: 'https://raw.githubusercontent.com/Narvasiddhartha/Disaster-Tweet-Classification/main/assets/disaster-tweet.png',
    profileImage: disasterImage,
    github: 'https://github.com/Narvasiddhartha/Disaster-Tweet-Classification',
    tools: ['Python', 'scikit-learn', 'Pandas', 'NLP', 'Jupyter Notebook']
  },
  {
    title: 'Smart Attendance System',
    description: <>
      Developed a <strong>face recognition–based attendance system</strong> with real-time student detection.<br/>
      Achieved <strong>98% accuracy</strong> in automated attendance marking using OpenCV and classification models.<br/>
      Built a <strong>Flask web interface</strong> with features like student registration, daily reports, and CSV export.
    </>,
    image: 'https://raw.githubusercontent.com/Narvasiddhartha/Face-Recognition-Based-Attendance-System/main/assets/attendance-system.png',
    profileImage: project1,
    github: 'https://github.com/Narvasiddhartha/Face-Recognition-Based-Attendance-System',
    screenshots: [
      project1,
      project2,
      project3,
      project4,
      project5,
    ],
    tools: ['Python', 'OpenCV', 'Flask', 'ML', 'GitHub']
  },
  {
    title: 'Real-Time Facial Emotion Recognition',
    description: <>
      Detects facial emotions in <strong>real-time</strong> using <strong>OpenCV</strong> and <strong>AI</strong>.<br/>
      Achieved <strong>95% accuracy</strong> on diverse datasets.<br/>
      Enables <strong>emotion-aware applications</strong> and <strong>smart interfaces</strong>.
    </>,
    image: 'https://raw.githubusercontent.com/Narvasiddhartha/Facial-Emotion-Recognition/main/assets/emotion-recognition.png',
    profileImage: faceEmotionImage,
    github: 'https://github.com/Narvasiddhartha/Facial-Emotion-Recognition',
    tools: ['Python', 'OpenCV', 'Keras', 'TensorFlow', 'Jupyter Notebook']
  },
  {
    title: 'Smart Wifi Door Lock Using ESP32-CAM & Telegram',
    description: <>
      Remotely control your door lock using <strong>Telegram</strong> and <strong>ESP32-CAM</strong>.<br/>
      <strong>Real-time photo capture</strong> and <strong>secure authentication</strong> for enhanced safety.<br/>
      A practical <strong>IoT project</strong> for smart, connected home security.
    </>,
    image: '/images/esp32-cam-doorlock.png',
    profileImage: '/images/esp32-cam-doorlock.png',
    github: 'https://github.com/Narvasiddhartha/Smart-Wifi-Door-Lock-Using-ESP32-CAM-Telegram-',
    screenshots: [
      smartDoor5,
      smartDoor1,
      smartDoor2,
      smartDoor3,
      smartDoor4,
    ],
    tools: ['C++', 'Python', 'ESP32-CAM', 'Telegram API', 'Arduino IDE']
  }
];

const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);

  const openModal = (images: string[]) => {
    setModalImages(images);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <img src={project.image} alt={project.title} className="project-image" onError={e => (e.currentTarget.style.display = 'none')} />
              <div className="project-header">
                <img src={project.profileImage} alt={`${project.title} icon`} className="project-profile-image" onError={e => (e.currentTarget.style.display = 'none')} />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github project-link-icon" aria-hidden="true"></i> View on GitHub
                </a>
                {project.screenshots && (
                  <button className="project-images-btn" onClick={() => openModal(project.screenshots)}>Images</button>
                )}
              </div>
              <div className="project-tools">
                {project.tools && project.tools.map((tool, i) => (
                  <span className="project-tool-pill" key={i}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeModal}>&times;</button>
              <h3 className="modal-title">Project Working Images</h3>
              <div className="modal-images">
                {modalImages.map((img, i) => (
                  <div key={i} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img src={img} alt={`${i + 1}`} className="modal-image" />
                    <span className="modal-image-label">{i + 1}</span>
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

export default Projects; 