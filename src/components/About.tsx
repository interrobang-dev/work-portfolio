import React, { useState, useRef, useEffect } from 'react';
import type { Profile, InterviewQuestion } from '../data/types';
import { keywordStories } from '../data/portfolioData';
import { User, Info, ChevronDown, ArrowRight } from 'lucide-react';

interface AboutProps {
  profile: Profile;
  interviewQuestions: InterviewQuestion[];
}

interface ActiveModalState {
  type: 'nickname' | 'keyword';
  title: string;
  description: string;
  intro?: string;
  image: string;
  badge: string;
  keywordIndex?: number;
}

const About: React.FC<AboutProps> = ({ profile, interviewQuestions }) => {
  // Magazine Active Question ID (Default to the first item)
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(
    interviewQuestions.length > 0 ? interviewQuestions[0].id : ''
  );

  // Unified Story Modal State
  const [activeModal, setActiveModal] = useState<ActiveModalState | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 300);
  };

  // Self Interview Fold/Unfold State
  const [isInterviewOpen, setIsInterviewOpen] = useState<boolean>(false);
  const interviewSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInterviewOpen && interviewSectionRef.current) {
      const timer = setTimeout(() => {
        interviewSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isInterviewOpen]);

  const handleSectionClick = () => {
    if (!isInterviewOpen) {
      setIsInterviewOpen(true);
    }
  };

  const handleHeaderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInterviewOpen(!isInterviewOpen);
  };

  const handleJumpKeyword = (idx: number) => {
    const story = keywordStories[idx];
    setActiveModal({
      type: 'keyword',
      keywordIndex: idx,
      title: story.title,
      description: story.description,
      image: story.image,
      badge: `Core Value - ${story.keyword}`
    });
  };

  const isModalOpen = !!activeModal;

  // Handle Keyboard ESC and Body Scroll Lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section id="about" className="section border-top">
      <div className="container">
        <h2>About</h2>

        {/* 1. Profile Grid Section */}
        <div className="about-profile-grid">
          {/* Left Column: Photo Frame */}
          <div className="profile-photo-wrapper">
            <div className="profile-photo-container">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="profile-photo"
                  onError={(e) => {
                    // Fallback to placeholder if image loading fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.profile-photo-placeholder');
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = 'flex';
                      }
                    }
                  }}
                />
              ) : null}
              {/* High-quality Fallback SVG Placeholder */}
              <div
                className="profile-photo-placeholder"
                style={{ display: profile.avatarUrl ? 'none' : 'flex' }}
              >
                <User size={64} strokeWidth={1} />
                <span className="placeholder-text">Photo Frame</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Information */}
          <div className="profile-info-wrapper">
            <div className="profile-info-header">
              <h3 className="profile-name">{profile.name}</h3>
              <span className="profile-eng-name">{profile.englishName}</span>
            </div>

            <p className="profile-bio">"{profile.shortBio}"</p>

            <div className="profile-meta-list">
              <div className="profile-meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">Full-Stack Engineer</span>
              </div>

              {/* Nickname Row with Modal Trigger */}
              <div className="profile-meta-item nickname-row">
                <span className="meta-label">Nickname</span>
                <button
                  type="button"
                  className="nickname-toggle-btn"
                  onClick={() => setActiveModal({
                    type: 'nickname',
                    title: profile.nickname,
                    intro: profile.nicknameIntro,
                    description: profile.nicknameDetail,
                    image: profile.nicknameImage || profile.avatarUrl || "/profile.jpg",
                    badge: "Developer Nickname"
                  })}
                >
                  <span className="nickname-value">{profile.nickname}</span>
                  <span className="nickname-toggle-icon"><Info size={14} /></span>
                </button>
              </div>

              {/* Core Values Item */}
              <div className="profile-meta-item profile-keywords-item">
                <span className="meta-label">Core Values</span>
                <div className="keywords-list">
                  {keywordStories.map((story, storyIndex) => (
                    <button
                      key={story.id}
                      type="button"
                      className="keyword-tag"
                      onClick={() => {
                        setActiveModal({
                          type: 'keyword',
                          keywordIndex: storyIndex,
                          title: story.title,
                          description: story.description,
                          image: story.image,
                          badge: `Core Value - ${story.keyword}`
                        });
                      }}
                    >
                      <span className="keyword-value">{story.keyword}</span>
                      <span className="keyword-info-icon"><Info size={14} /></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.1 Unified Story Glassmorphism Modal */}
        {activeModal && (
          <div 
            className={`nickname-modal-overlay ${isClosing ? 'closing' : ''}`} 
            onClick={handleCloseModal}
          >
            <div
              className={`nickname-modal-content ${activeModal.type === 'nickname' ? 'modal-style-nickname' : 'modal-style-keyword'} ${isClosing ? 'closing' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={handleCloseModal}
                aria-label="Close Story"
              >
                &times;
              </button>

              {/* A. Nickname Modal Header: Rounded Profile Avatar */}
              {activeModal.type === 'nickname' && (
                <div className="modal-avatar-header">
                  <div className="modal-avatar-container">
                    <img
                      src={activeModal.image}
                      alt="Profile Avatar"
                      className="modal-avatar-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.modal-avatar-fallback');
                          if (fallback) (fallback as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    <div className="modal-avatar-fallback" style={{ display: 'none' }}>
                      <User size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="modal-badge">{activeModal.badge}</span>
                  <h4 className="modal-title">{activeModal.title}</h4>
                </div>
              )}

              {/* B. Keyword Modal Header: Wide Banner */}
              {activeModal.type === 'keyword' && (
                <div className="modal-banner-header modal-tab-transition" key={`banner-${activeModal.keywordIndex}`}>
                  <div className="modal-banner-container">
                    <img
                      src={activeModal.image}
                      alt="Value Banner"
                      className="modal-banner-img"
                    />
                    <div className="modal-banner-overlay-gradient"></div>
                  </div>
                  <div className="modal-banner-text-wrapper">
                    <span className="modal-badge">{activeModal.badge}</span>
                    <h4 className="modal-title">{activeModal.title}</h4>
                  </div>
                </div>
              )}

              {/* Common Body Content */}
              <div className="modal-body-content modal-tab-transition" key={`body-${activeModal.keywordIndex}`}>
                {activeModal.intro && (
                  <blockquote className="modal-quote">
                    "{activeModal.intro}"
                  </blockquote>
                )}
                <div className="modal-desc-container">
                  {activeModal.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="modal-desc">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {activeModal.type === 'nickname' && profile.blog && (
                  <div className="modal-blog-link-wrapper">
                    <a
                      href="https://interrobang.tistory.com/25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-blog-link"
                    >
                      블로그에서 관련 글 읽기 <ArrowRight size={14} className="modal-blog-link-arrow" />
                    </a>
                  </div>
                )}

              </div>

              {/* Text Chip Navigator (Core Value Only) */}
              {activeModal.type === 'keyword' && activeModal.keywordIndex !== undefined && (
                <div className="modal-chip-navigation">
                  {keywordStories.map((story, idx) => {
                    const isActive = activeModal.keywordIndex === idx;
                    return (
                      <button
                        key={story.id}
                        type="button"
                        className={`modal-nav-chip ${isActive ? 'active' : ''}`}
                        onClick={() => handleJumpKeyword(idx)}
                        aria-label={`Go to ${story.keyword}`}
                      >
                        {story.keyword}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. Self Interview Section - Editorial Spotlight Layout (Hidden under profile card, expandable) */}
        <div
          ref={interviewSectionRef}
          className={`interview-section ${isInterviewOpen ? 'open' : 'collapsed'}`}
          onClick={handleSectionClick}
        >
          {/* Gradual fade-out overlay for collapsed state */}
          <div className="interview-section-fade" />

          <div
            className="interview-header-group"
            onClick={handleHeaderClick}
          >
            <span className="interview-pre-title">Editorial Spotlight</span>
            <h3 className="about-subtitle interview-main-title">
              Self Interview
              <ChevronDown className={`interview-toggle-arrow ${isInterviewOpen ? 'open' : ''}`} size={20} />
            </h3>
            <p className="interview-lead-text">
              엔지니어로서의 가치관과 개발을 대하는 태도에 관한 자문자답입니다.
            </p>
          </div>

          <div className="interview-magazine-wrapper">
            {/* Left Interactive Question Cards */}
            <div className="magazine-questions-column">
              {interviewQuestions.map((q, idx) => {
                const isSelected = selectedQuestionId === q.id;
                const displayIndex = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={q.id}
                    type="button"
                    className={`magazine-question-card ${isSelected ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent collapsing the section when clicking a question card
                      setSelectedQuestionId(q.id);
                    }}
                  >
                    <div className="card-indicator" />
                    <span className="magazine-question-num">{displayIndex}</span>
                    <div className="card-text-group">
                      <span className="card-category-tag">{q.category}</span>
                      <span className="magazine-question-text">{q.question}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Editorial Answer Panel */}
            <div className="magazine-answer-column">
              <span className="giant-interrobang-mark">‽</span>
              {interviewQuestions.map((q) => {
                if (q.id !== selectedQuestionId) return null;
                return (
                  <div key={q.id} className="magazine-answer-content">
                    <span className="magazine-answer-category delay-1">{q.category}</span>
                    <h4 className="magazine-answer-headline delay-2">
                      {q.answer}
                    </h4>
                    <p className="magazine-desc-text delay-3">
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
