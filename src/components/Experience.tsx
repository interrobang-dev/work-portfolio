import React from 'react';
import type { Experience as ExperienceType } from '../data/types';

interface ExperienceProps {
  experienceList: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experienceList }) => {
  return (
    <section id="experience" className="section border-top">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experienceList.map((exp, idx) => (
            <div key={idx} className="experience-row">
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.company}</h3>
                <span className="experience-role">{exp.role}</span>
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
    </section>
  );
};

export default Experience;
