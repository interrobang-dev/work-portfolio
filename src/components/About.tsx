import React from 'react';
import type { Profile, InterviewQuestion } from '../data/types';

interface AboutProps {
  profile: Profile;
  interviewQuestions: InterviewQuestion[];
}

const About: React.FC<AboutProps> = ({ profile, interviewQuestions }) => {
  return (
    <section id="about" className="section border-top">
      <div className="container">
        <h2>About Me</h2>
        
        {/* Main Intro Story */}
        <div className="about-intro">
          <p className="bio-text">{profile.shortBio}</p>
        </div>

        {/* Bento Q&A Grid */}
        <div className="bento-grid">
          {interviewQuestions.map((q) => (
            <div key={q.id} className="bento-card">
              <div className="bento-card-header">
                <span className="bento-category">{q.category}</span>
                <h3 className="bento-question">{q.question}</h3>
              </div>
              <div className="bento-card-body">
                <h4 className="bento-answer">"{q.answer}"</h4>
                <p className="bento-desc">{q.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

