import React, { useState } from 'react';
import type { Troubleshooting } from '../data/types';
import { ChevronDown, Wrench } from 'lucide-react';

interface TroubleshootingAccordionProps {
  data: Troubleshooting;
}

const TroubleshootingAccordion: React.FC<TroubleshootingAccordionProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`trouble-accordion ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="trigger-title">
          <Wrench size={16} className="trigger-title-icon" />
          기술적 트러블슈팅 및 리팩토링 과정 보기
        </span>
        <ChevronDown className="trigger-icon" size={20} />
      </button>
      <div className="accordion-content">
        <div className="accordion-body">
          <div className="trouble-grid">
            <div className="trouble-item">
              <span className="trouble-label">1. 문제 상황 (Problem)</span>
              <p className="trouble-text">{data.problem}</p>
            </div>
            <div className="trouble-item">
              <span className="trouble-label">2. 원인 분석 (Cause)</span>
              <p className="trouble-text">{data.cause}</p>
            </div>
            <div className="trouble-item">
              <span className="trouble-label">3. 해결 방안 (Solution)</span>
              <p className="trouble-text">{data.solution}</p>
            </div>
            <div className="trouble-item">
              <span className="trouble-label">4. 결과 및 성과 (Result)</span>
              <p className="trouble-text highlight-result">{data.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TroubleshootingAccordion;
