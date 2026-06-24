import React, { useState } from 'react';
import type { Profile } from '../data/types';
import githubLogo from '../assets/logos/github-logo.svg';
import gmailLogo from '../assets/logos/gmail-iogo.png';
import tistoryLogo from '../assets/logos/tistory-logo.svg';

interface ContactProps {
  profile: Profile;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault(); // mailto 트리거 방지
    e.stopPropagation(); // 카드 전체 클릭 이동 방지
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <footer id="contact" className="section border-top contact-section contact-section-dark-fixed">
      <div className="container contact-container">
        {/* 상단 슬로건 영역 */}
        <div className="contact-slogan-wrapper">
          <h2 className="contact-slogan">
            <span className="highlight-white">Let's create</span>
            <span className="highlight-muted">incredible work together.</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Email (Gmail) Card */}
          <a
            href={`mailto:${profile.email}`}
            className="contact-card card-gmail"
            title="이메일 보내기"
          >
            <div className="contact-card-header">
              <div className="contact-logo-wrapper">
                <img src={gmailLogo} alt="Gmail" className="contact-card-logo" />
              </div>
              <button
                type="button"
                className={`btn-card-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                title="이메일 복사"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="contact-card-body">
              <span className="contact-label">Email</span>
              <span className="contact-value">{profile.email}</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card card-github"
            title="GitHub 방문하기"
          >
            <div className="contact-card-header">
              <div className="contact-logo-wrapper">
                <img src={githubLogo} alt="GitHub" className="contact-card-logo" />
              </div>
              <span className="contact-card-arrow">→</span>
            </div>
            <div className="contact-card-body">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{profile.github.replace('https://', '')}</span>
            </div>
          </a>

          {/* Tistory Blog Card */}
          {profile.blog && (
            <a
              href={profile.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card card-tistory"
              title="Blog 방문하기"
            >
              <div className="contact-card-header">
                <div className="contact-logo-wrapper">
                  <img src={tistoryLogo} alt="Tech Blog" className="contact-card-logo" />
                </div>
                <span className="contact-card-arrow">→</span>
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Tech Blog</span>
                <span className="contact-value">{profile.blog.replace('https://', '')}</span>
              </div>
            </a>
          )}
        </div>

        {/* 구분선 및 메타 정보 */}
        <div className="contact-footer-divider" />
        
        <div className="contact-footer-meta">
          <div className="contact-status">
            <span className="status-dot"></span>
            <span className="status-text">Available for new opportunities</span>
          </div>
          
          <p className="copyright">
            © {new Date().getFullYear()} {profile.englishName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* 최하단 거대 이름 타이포그래피 */}
      <div className="contact-giant-name-wrapper">
        <div className="contact-giant-name">{profile.englishName}</div>
      </div>
    </footer>
  );
};

export default Contact;


