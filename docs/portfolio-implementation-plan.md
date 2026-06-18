# One-Page Developer Portfolio Implementation Plan

본 문서는 `portfolio-design.md` 설계 명세를 바탕으로 한 단계별 구현 계획서입니다. 모든 구현 단계는 점진적 빌드 및 무결성 검증을 거칩니다.

## Phase 1: Foundation & Data Layer (기반 환경 및 데이터 정의)
- [ ] **Task 1.1: 글로벌 스타일 시스템 정의 (`src/index.css`)**
  - 화이트 테크 미니멀리즘 테마에 맞춘 CSS 변수 정의 (배경색, 텍스트 색상, 보더색 등).
  - 기본 폰트(Inter, Outfit) 지정 및 모서리 모노 테마(`border-radius: 4px`) 세팅.
- [ ] **Task 1.2: 정적 데이터 소스 구축 (`src/data/portfolioData.ts`)**
  - 설계 명세서에 수립된 TypeScript 인터페이스 작성 및 내보내기(`export`).
  - 사용자의 실제 이력서 정보와 프로젝트 리스트, 기술 스택 요약문이 포함된 샘플 데이터셋 구성.
- [ ] **Task 1.3: 빌드 검증**
  - `npm run build`를 통해 데이터 레이어와 기본 CSS가 정상 컴파일되는지 확인.

## Phase 2: Layout & Core Components (레이아웃 및 핵심 공통 컴포넌트)
- [ ] **Task 2.1: 레이아웃 프레임 및 헤더 구현 (`src/components/Header.tsx`, `src/App.tsx`)**
  - 상단 고정형 얇은 네비게이션 바 구현.
  - 임시 앵커 링크 구성 및 반응형 메뉴 대응.
- [ ] **Task 2.2: Hero 및 About Me 컴포넌트 구현 (`src/components/Hero.tsx`, `src/components/About.tsx`)**
  - 대형 타이포그래피 기반 슬로건 렌더링.
  - 2열 그리드 구조의 자기소개 및 핵심 링크 목록(GitHub, Email 등) 구현.

## Phase 3: Detail Content Components (상세 정보 컴포넌트)
- [ ] **Task 3.1: Skills 테이블 컴포넌트 구현 (`src/components/Skills.tsx`)**
  - Backend, Frontend, DevOps 등 도메인별 그리드 테이블 디자인.
  - 단순 나열이 아닌, 스택별 활용 능력 요약(description) 표출 레이아웃 적용.
- [ ] **Task 3.2: Experience 연력 컴포넌트 구현 (`src/components/Experience.tsx`)**
  - 타임라인 생략형 2열 그리드 레이아웃(기간 / 회사 및 업무 요약) 구현.

## Phase 4: Filter & Troubleshooting Interactivity (필터 및 아코디언 인터랙션)
- [ ] **Task 4.1: Projects 카드 리스트 구현 (`src/components/Projects.tsx`)**
  - 전체 / 실무 / 개인 프로젝트 필터 상태(State) 구현.
  - 필터링 결과에 따른 카드 그리드 렌더링.
- [ ] **Task 4.2: 아코디언 상세 아웃라인 구현 (`src/components/TroubleshootingAccordion.tsx`)**
  - 실무 프로젝트에서 트러블슈팅 세부 정보(문제-원인-해결-결과)를 볼 수 있는 접이식 아코디언 컴포넌트 구현.
  - 미니멀 테마에 어울리는 슬라이드 애니메이션 및 아이콘 회전 효과 적용.

## Phase 5: Polish & Final Verification (인터랙션 정밀화 및 배포 검증)
- [ ] **Task 5.1: 스크롤 스파이(Scroll Spy) 연동**
  - `Intersection Observer API`를 사용해 사용자가 스크롤한 위치에 맞춰 상단 네비게이션 활성 메뉴 자동 하이라이트.
- [ ] **Task 5.2: 이메일 클립보드 복사 숏컷**
  - Contact 섹션의 이메일 클릭 시 즉시 복사되고 피드백 메시지(Copied!)를 표시하는 마이크로 UX 적용.
- [ ] **Task 5.3: 최종 빌드 및 번들 최적화**
  - `npm run build`를 통한 최종 컴파일 검증 및 번들 사이즈 검토.
