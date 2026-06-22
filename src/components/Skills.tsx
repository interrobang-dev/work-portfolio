import React from 'react';
import type { SkillCategory } from '../data/types';

interface SkillsProps {
  skills: SkillCategory[];
}

const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case "Production (3Y+)":
      return "badge-prod-high";
    case "Production":
      return "badge-prod-mid";
    case "Personal":
      return "badge-personal";
    default:
      return "badge-default";
  }
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section border-top">
      <div className="container">
        <div className="skills-header-area">
          <h2>Skills</h2>
          <div className="skills-legend">
            <div className="legend-item">
              <span className="skill-level badge-prod-high">Production (3Y+)</span>
              <span>실무 경험 3년 이상</span>
            </div>
            <div className="legend-item">
              <span className="skill-level badge-prod-mid">Production</span>
              <span>실무 경험</span>
            </div>
            <div className="legend-item">
              <span className="skill-level badge-personal">Personal</span>
              <span>개인 프로젝트 경험</span>
            </div>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category} className="skills-card">
              <h3 className="skills-category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      {skill.logos && skill.logos.length > 0 && (
                        <div className="skill-logos">
                          {skill.logos.map((logo, idx) => (
                            <img key={idx} src={logo} alt="" className="skill-logo-img" />
                          ))}
                        </div>
                      )}
                      <span className={`skill-level ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="skill-desc">{skill.description}</p>
                    )}
                  </div>
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
