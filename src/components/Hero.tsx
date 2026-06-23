import React, { useEffect, useRef } from 'react';
import type { Profile } from '../data/types';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [typedLine1, setTypedLine1] = React.useState('');
  const [typedLine2, setTypedLine2] = React.useState('');
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);

  // 마우스 위치 및 보간 변수 관리 (Ref)
  const coords = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    rafId: 0
  });

  // 타이핑 효과 구현 (순차 2라인 타이핑)
  useEffect(() => {
    const line1Text = profile.title;
    const line2Text = profile.englishName;
    let index1 = 0;
    let index2 = 0;
    let timer: number;

    setTypedLine1('');
    setTypedLine2('');
    setIsTypingComplete(false);

    const typeLine2 = () => {
      if (index2 <= line2Text.length) {
        setTypedLine2(line2Text.slice(0, index2));
        index2++;
        timer = window.setTimeout(typeLine2, 60);
      } else {
        setIsTypingComplete(true);
      }
    };

    const typeLine1 = () => {
      if (index1 <= line1Text.length) {
        setTypedLine1(line1Text.slice(0, index1));
        index1++;
        timer = window.setTimeout(typeLine1, 60);
      } else {
        typeLine2();
      }
    };

    typeLine1();

    return () => {
      window.clearTimeout(timer);
    };
  }, [profile.englishName]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 뷰포트 중심 기준 좌표 계산 (-0.5 ~ 0.5)
      coords.current.targetX = (e.clientX / window.innerWidth) - 0.5;
      coords.current.targetY = (e.clientY / window.innerHeight) - 0.5;
    };

    // 보간 애니메이션 루프
    const updateParallax = () => {
      const c = coords.current;
      c.currentX += (c.targetX - c.currentX) * 0.08;
      c.currentY += (c.targetY - c.currentY) * 0.08;

      if (heroRef.current) {
        heroRef.current.style.setProperty('--mx', c.currentX.toFixed(4));
        heroRef.current.style.setProperty('--my', c.currentY.toFixed(4));
      }

      c.rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    coords.current.rafId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(coords.current.rafId);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-section container">
      <div className="hero-content">
        <span className={`hero-badge fade-in-target ${isTypingComplete ? 'visible' : ''}`}>Introduction</span>
        <h1 className="hero-title" aria-label={profile.title}>
          <span className="hero-title-first">
            {typedLine1}
            {!typedLine2 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </span>
          <br />
          <span className="hero-title-second highlight-accent">
            {typedLine2}
            {typedLine2 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </span>
        </h1>
        <p className={`hero-subtitle fade-in-target ${isTypingComplete ? 'visible' : ''}`}>
          안녕하세요, 풀스택 개발자 {profile.name}입니다.
        </p>
      </div>

      {/* Floating Antigravity Shapes */}
      {/* Shape 1: Double Ring */}
      <div className="floating-shape-wrapper shape-1">
        <div className="floating-shape parallax-deep">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
            <circle cx="70" cy="70" r="50" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="70" cy="70" r="30" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Shape 2: Glow Sphere */}
      <div className="floating-shape-wrapper shape-2">
        <div className="floating-shape parallax-light">
          <div className="glow-sphere"></div>
        </div>
      </div>

      {/* Shape 3: Wireframe Cube */}
      <div className="floating-shape-wrapper shape-3">
        <div className="floating-shape parallax-medium">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 10L90 35V75L50 95L10 75V35L50 10Z" stroke="var(--border)" strokeWidth="1.2" strokeOpacity="0.6" />
            <path d="M50 10V55M50 55L90 35M50 55L10 35M50 55V95" stroke="var(--border)" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M10 75L50 55L90 75" stroke="var(--border)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>

      {/* Shape 4: Dashed Circle */}
      <div className="floating-shape-wrapper shape-4">
        <div className="floating-shape parallax-deep">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="30" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Shape 5: Floating Plus */}
      <div className="floating-shape-wrapper shape-5">
        <div className="floating-shape parallax-light">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5V35M5 20H35" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Shape 6: Small Triangle */}
      <div className="floating-shape-wrapper shape-6">
        <div className="floating-shape parallax-medium">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
            <polygon points="35,10 60,55 10,55" stroke="var(--border)" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="35" cy="40" r="8" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className={`scroll-indicator fade-in-target ${isTypingComplete ? 'visible' : ''}`}
        aria-label="Scroll Down"
      >
        <span className="scroll-mouse pc-only">
          <span className="scroll-wheel"></span>
        </span>
        <div className="scroll-swipe mobile-only">
          <div className="swipe-gesture-wrapper">
            <svg className="swipe-hand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
