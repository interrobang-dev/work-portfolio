import React from 'react';
import type { Experience as ExperienceType, Certificate } from '../data/types';
import { Award } from 'lucide-react';

interface ExperienceProps {
  experienceList: ExperienceType[];
  certificates: Certificate[];
}

const Experience: React.FC<ExperienceProps> = ({ experienceList, certificates }) => {
  return (
    <section id="experience" className="section border-top">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-grid">
          {/* Timeline Section (Career & Education) */}
          <div className="timeline-container">
            <h3 className="experience-section-title">Career & Education</h3>
            <div className="timeline-flow">
              {experienceList.map((exp, idx) => (
                <div key={idx} className={`timeline-item ${exp.type}`}>
                  <div className="timeline-badge-wrapper">
                    <span className={`badge-tag ${exp.type}`}>
                      {exp.type === 'career' ? 'Career' : 'Education'}
                    </span>
                  </div>
                  <div className="timeline-marker">
                    <div className="marker-circle"></div>
                    {idx < experienceList.length - 1 && <div className="marker-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="experience-period-row">
                        <span className="experience-period">{exp.period}</span>
                        <span className={`badge-tag mobile-badge ${exp.type}`}>
                          {exp.type === 'career' ? 'Career' : 'Education'}
                        </span>
                      </div>
                      <div className="experience-company-row">
                        {exp.logo && (
                          <div className="experience-logo-wrapper">
                            <img src={exp.logo} alt={exp.company} className="experience-logo" />
                          </div>
                        )}
                        <h4 className="experience-title">{exp.company}</h4>
                      </div>
                      <span className="experience-role">{exp.role}</span>
                    </div>
                    <ul className="experience-desc-list">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="experience-desc-item">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="certificates-container">
            <h3 className="experience-section-title">Certificates</h3>
            <div className="certs-list">
              {certificates.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-header-row">
                    <Award size={18} className="cert-icon" />
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

