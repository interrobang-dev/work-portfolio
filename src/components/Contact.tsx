import React, { useState } from 'react';
import type { Profile } from '../data/types';

interface ContactProps {
  profile: Profile;
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
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
        
        <div className="email-box">
          <a href={`mailto:${profile.email}`} className="email-link">
            {profile.email}
          </a>
          <button
            type="button"
            className={`btn btn-copy ${copied ? 'copied' : ''}`}
            onClick={handleCopyEmail}
          >
            {copied ? '이메일 주소 복사됨!' : '이메일 주소 복사'}
          </button>
        </div>

        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-channel">
            <span className="channel-emoji" style={{ marginRight: '0.375rem' }}>🐙</span> GitHub
          </a>
          {profile.blog && (
            <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="btn btn-channel">
              <span className="channel-emoji" style={{ marginRight: '0.375rem' }}>✍️</span> Tech Blog
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

