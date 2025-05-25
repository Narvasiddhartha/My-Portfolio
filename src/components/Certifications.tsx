import React from 'react';
import '../styles/Certifications.css';

const certifications = [
  { name: 'Oracle AI Vector Search Certified', link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5881E78046A72B5D73AE82B7B74AA3E02CA25A61E9D611B22616FAAFD6056E31' },
  { name: 'NVIDIA CUDA Python', link: 'https://learn.nvidia.com/certificates?id=I9LgYK5BRcmcBW16Gsjmrg' },
  { name: 'Microsoft Azure AI Fundamentals', link: 'https://drive.google.com/file/d/1xUe1YrXnVfLdWKFWq8NZ4mg-vZTxGGO3/view' },
  { name: 'IBM Machine Learning', link: 'https://drive.google.com/file/d/1wuUP5ZSuE7HgrcM5HoMIhdRzFTGvwfcI/view' },
  { name: 'Postman API Student Expert', link: 'https://badgr.com/public/assertions/Wft5_eYyRWitQ8xRM-2S-A' },
];

const Certifications: React.FC = () => (
  <section id="certifications" className="certifications">
    <div className="container">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-card-list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <span className="cert-badge">🏅</span>
            <span className="cert-name">{cert.name}</span>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify-btn">Verify</a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications; 