import React from 'react';
import type { SkillCategory } from '../data/types';

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section border-top">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category} className="skills-card">
              <h3 className="skills-category-title">{category.category}</h3>
              <div className="skills-list">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level badge-${skill.level.toLowerCase()}`}>
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
