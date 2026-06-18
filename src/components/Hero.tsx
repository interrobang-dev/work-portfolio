import React from 'react';
import type { Profile } from '../data/types';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <span className="hero-badge">{profile.englishName}</span>
        <h1 className="hero-title">{profile.title}</h1>
        <p className="hero-subtitle">안녕하세요, 백엔드 및 풀스택 개발자 {profile.name}입니다.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            프로젝트 리스트 보기
          </a>
          <a href="#contact" className="btn">
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
