import React, { useState } from 'react';
import type { Project } from '../data/types';
import TroubleshootingAccordion from './TroubleshootingAccordion';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'work' | 'personal'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <section id="projects" className="section border-top">
      <div className="container">
        <div className="projects-header">
          <h2>Projects</h2>
          <div className="filter-tabs">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              전체 (All)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'work' ? 'active' : ''}`}
              onClick={() => setFilter('work')}
            >
              실무 경험 (Work)
            </button>
            <button
              type="button"
              className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
              onClick={() => setFilter('personal')}
            >
              개인 프로젝트 (Personal)
            </button>
          </div>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-meta-row">
                <span className="project-period">{project.period}</span>
                <span className={`project-type-tag type-${project.type}`}>
                  {project.type === 'work' ? 'Work Experience' : 'Personal Project'}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role-text">{project.role}</p>
              <p className="project-summary">{project.summary}</p>

              <div className="project-tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-highlights">
                <h4>주요 역할 및 구현 성과</h4>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {project.troubleshooting && (
                <TroubleshootingAccordion data={project.troubleshooting} />
              )}

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                  >
                    GitHub 소스 보기
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    라이브 서비스 보기
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
