import React from 'react';
import type { Profile } from '../data/types';

interface AboutProps {
  profile: Profile;
}

const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="section border-top">
      <div className="container">
        <h2>About Me</h2>
        <div className="grid-2">
          <div className="about-bio">
            <h3 className="mb-4">스토리 & 가치관</h3>
            <p className="bio-text">{profile.shortBio}</p>
          </div>
          <div className="about-info">
            <h3 className="mb-4">핵심 프로필 및 채널</h3>
            <div className="info-box">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{profile.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">GitHub</span>
                <span className="info-value">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-hover">
                    {profile.github.replace('https://', '')}
                  </a>
                </span>
              </div>
              {profile.blog && (
                <div className="info-item">
                  <span className="info-label">Tech Blog</span>
                  <span className="info-value">
                    <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="link-hover">
                      {profile.blog.replace('https://', '')}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
