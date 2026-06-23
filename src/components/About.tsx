import React, { useState } from 'react';
import type { Profile, InterviewQuestion } from '../data/types';

interface AboutProps {
  profile: Profile;
  interviewQuestions: InterviewQuestion[];
}

const About: React.FC<AboutProps> = ({ profile, interviewQuestions }) => {
  // Magazine Active Question ID (Default to the first item)
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(
    interviewQuestions.length > 0 ? interviewQuestions[0].id : ''
  );

  return (
    <section id="about" className="section border-top">
      <div className="container">
        <h2>About</h2>

        {/* 1. Nickname Intro & Simple Keywords Section */}
        <div className="about-intro-section">
          <div className="about-nickname-intro">
            <span className="nickname-badge">Nickname</span>
            <h3 className="nickname-title">{profile.nickname}</h3>
            <p className="nickname-intro-quote">"{profile.nicknameIntro}"</p>
            <p className="nickname-story-text">{profile.nicknameDetail}</p>

            <div className="nickname-blog-link-wrapper">
              <a
                href="https://interrobang.tistory.com/25"
                target="_blank"
                rel="noopener noreferrer"
                className="nickname-blog-link"
              >
                블로그에서 관련 글 읽기 ➔
              </a>
            </div>
          </div>

          {/* Simple Keyword Badges List */}
          <div className="about-keywords-simple">
            <span className="keywords-label">Core Keywords :</span>
            <div className="keywords-badges-list">
              {profile.keywords.map((kw) => (
                <span
                  key={kw}
                  className="keyword-badge-tag"
                >
                  ✦ {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Self Interview Section - Magazine Split Layout */}
        <div className="interview-section">
          <h3 className="about-subtitle">Self Interview</h3>

          <div className="interview-magazine-wrapper">
            {/* Left Question List */}
            <div className="magazine-questions-column">
              {interviewQuestions.map((q, idx) => {
                const isSelected = selectedQuestionId === q.id;
                const displayIndex = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={q.id}
                    type="button"
                    className={`magazine-question-item ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedQuestionId(q.id)}
                  >
                    <span className="magazine-question-num">{displayIndex}</span>
                    <span className="magazine-question-text">{q.question}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Answer Detail Panel */}
            <div className="magazine-answer-column">
              {interviewQuestions.map((q) => {
                if (q.id !== selectedQuestionId) return null;
                return (
                  <div key={q.id} className="magazine-answer-content fade-in-active">
                    <span className="magazine-answer-category">{q.category}</span>
                    <blockquote className="magazine-blockquote">
                      "{q.answer}"
                    </blockquote>
                    <p className="magazine-desc-text">
                      {q.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
