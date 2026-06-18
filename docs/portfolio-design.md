# One-Page Developer Portfolio Design Specification

본 문서는 리액트와 타입스크립트 기반의 1페이지 개발자 포트폴리오 웹사이트 구축을 위한 설계 명세서입니다.

## 1. 프로젝트 목적 및 타깃 독자 (Goals & Target Audience)
- **주요 목적**: 신입/경력 채용 및 이직을 위한 포트폴리오
- **타깃 독자**: 프론트엔드 및 백엔드 개발자 역량을 종합 검증하는 테크 리더, 리쿠르터 및 채용 담당자
- **전략**: 
  - **실무 영역**: Spring Boot + jQuery 기반의 기존 프로젝트에서 단단한 백엔드 코어 역량(JPA 최적화, DB 튜닝, 리팩토링 및 아키텍처 개선)을 증명.
  - **개인 프로젝트 영역**: React + TypeScript + Vite 기반의 최신 풀스택 기술과 인프라 구성력을 보여주어 신속한 기술 습득 및 아키텍처 구성 역량을 입증.

## 2. 디자인 시스템 (Style Guide)
- **컨셉**: Clean Minimalism (화이트 테크 미니멀리즘)
- **색상 팔레트 (Color Palette)**:
  - `background`: `#fcfcfc` (연한 오프화이트)
  - `card-bg`: `#ffffff` (완전 흰색)
  - `text-primary`: `#0f172a` (Slate 900, 주 텍스트)
  - `text-secondary`: `#475569` (Slate 600, 보조 설명)
  - `text-muted`: `#94a3b8` (Slate 400, 부차적 메타데이터)
  - `border`: `#e2e8f0` (Slate 200, 구분선 및 테두리)
  - `accent`: `#2563eb` (Royal Blue, 제한적으로 인터랙티브 요소에만 사용)
- **타이포그래피**:
  - 서체: **Inter** (기본 본문) 및 **Outfit** (제목용)
  - 자간 및 행간: 가독성을 위해 넓은 행간(`line-height: 1.625`) 및 자간 확보
- **테두리 및 드롭 섀도우**:
  - 모서리 반경 (`border-radius`): `4px` (날카롭고 단단한 미니멀 테크 형상)
  - 그림자 (`box-shadow`): 지양하며, 오직 1px의 명확한 경계선(`border`)으로 구획화
  - 마이크로 인터랙션: 요소 호버 시 테두리 색상이 짙어지거나(`border-color: var(--text-primary)`) 배경색이 아주 은은한 그레이로 변하는 간결한 트랜지션 적용.

## 3. 데이터 구조 명세 (`src/data/portfolioData.ts`)
데이터 기반 렌더링 설계를 구현하기 위해 중앙 집중식 정적 파일로 모든 콘텐츠를 바인딩합니다.

```typescript
export interface Profile {
  name: string;
  englishName: string;
  title: string;
  shortBio: string;
  email: string;
  github: string;
  blog?: string;
}

export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  description?: string; // 실질적인 적용 사례 명시
}

export interface SkillCategory {
  category: "Backend" | "Frontend" | "DevOps" | "Methodology & Tools";
  items: SkillItem[];
}

export interface Troubleshooting {
  problem: string;
  cause: string;
  solution: string;
  result: string;
}

export interface Project {
  id: string;
  title: string;
  type: "work" | "personal";
  period: string;
  role: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  troubleshooting?: Troubleshooting; // 실무 프로젝트의 문제 해결 능력 강조용
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
```

## 4. 레이아웃 및 컴포넌트 아키텍처
화면은 수직 스크롤 기반의 원페이지 레이아웃 구조로 작동합니다.

1. **Header**: 고정식 슬림형 헤더. 스크롤 위치에 맞춰 활성화된 앵커(About, Skills, Projects, Experience, Contact) 하이라이트.
2. **Hero**: 60vh 높이의 시그니처 텍스트 영역. 
3. **About Me**: 2열 그리드를 활용한 프로필 소개 및 링크 목록.
4. **Skills**: 분류별 그리드 테이블 카드 구성.
5. **Projects**: 
   - 상단에 `[전체]` / `[실무]` / `[개인]` 전환 필터 탭 위치.
   - 아코디언 컴포넌트를 사용해 실무 프로젝트 하단의 "Troubleshooting 과정 보기" 클릭 시 상세 트러블슈팅 내역을 부드럽게 노출.
6. **Experience**: 미니멀리즘 2열 그리드로 근무 내역 요약.
7. **Contact**: 대형 이메일 링크 및 클립보드 복사 버튼, 카피라이트 푸터.
