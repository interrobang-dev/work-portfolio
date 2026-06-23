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
    <footer id="contact" className="section border-top contact-section">
      <div className="container contact-container">
        <h2>Contact</h2>
        <p className="contact-subtitle">함께 성장할 수 있는 제안이나 궁금한 점이 있으시다면 언제든 연락해 주십시오.</p>

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

        <p className="copyright">
          © {new Date().getFullYear()} {profile.name}. Powered by React & Vite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;


