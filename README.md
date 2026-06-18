# CJK.Portfolio (Chun Joon Ki's Developer Portfolio)

본 프로젝트는 리액트와 타입스크립트, 바닐라 CSS를 기반으로 구현된 **천준기(Chun Joon Ki) 개발자의 One-Page 포트폴리오 웹사이트**입니다.

불필요한 애니메이션과 과도한 시각 장식을 배제하고, 구조적인 정밀성과 가독성을 극대화한 **화이트 테크 미니멀리즘(Clean Minimalism)** 컨셉으로 제작되었습니다.

---

## 🛠️ 주요 기능 및 기술적 특징 (Key Features)

### 1. 데이터 주도형 정적 렌더링 아키텍처 (Data-Driven Architecture)
- 포트폴리오의 모든 텍스트 정보(인적 사항, 보유 기술 스택, 경력, 프로젝트 상세 내용 등)는 단일 파일 [`src/data/portfolioData.ts`](file:///d:/workspace/@private/work-portfolio/src/data/portfolioData.ts)에서 선언적으로 관리됩니다.
- 콘텐츠가 업데이트되거나 이력이 바뀔 때 UI 마크업(TSX)을 전혀 수정하지 않고 데이터 파일만 변경함으로써 즉시 사이트에 배포 반영되는 우수한 유지보수성을 확보하였습니다.

### 2. 백엔드/풀스택 맞춤형 투 트랙(Two-Track) 프로젝트 설계
- **실무 경력 (Work Experience)**: 스마트건설팀 대리로서 해상 공사 관리 시스템(OCMS) 성능 최적화(JPA N+1 쿼리 튜닝, DB 병목 분석, 레거시 코드 리팩토링)를 중심으로 한 견고한 기본기와 비즈니스 가치 창출력을 증명합니다.
- **개인 프로젝트 (Personal Projects)**: React + TypeScript + NestJS + Docker 등 모던 기술셋을 유기적으로 결합한 풀스택 설계 역량을 증명하여 급변하는 기술 트렌드 적응력을 어필합니다.
- **트러블슈팅 아코디언**: 실무 프로젝트에서 마주한 성능 저하 문제의 해결 경로(문제 상황 ➔ 원인 분석 ➔ 해결 방법 ➔ 정량적 결과)를 체계화하여 아코디언 컴포넌트를 통해 몰입도 높게 서술합니다.

### 3. 마이크로 UX (Micro Interaction)
- **스크롤 스파이 (Scroll Spy)**: 브라우저 성능 부담이 큰 스크롤 이벤트를 구독하는 대신, `Intersection Observer API`를 활용하여 뷰포트에 감지되는 각 섹션에 맞춰 네비게이션 활성 메뉴를 자동 변경합니다.
- **원터치 이메일 복사**: 연락처 클릭 시 `navigator.clipboard` API를 사용해 번거로운 수동 드래그 없이 메일 주소를 1-Click으로 복사할 수 있으며, 2초간 즉각적인 피드백(Copied!)을 표시합니다.

---

## 📂 디렉토리 구조 (Directory Structure)

```
src/
  ├── assets/            # 정적 미디어 리소스
  ├── components/        # 관심사 분리가 적용된 재사용 가능 컴포넌트
  │     ├── Header.tsx         # 스크롤 감지 및 활성화 스타일링 헤더
  │     ├── Hero.tsx           # 타이포그래피 슬로건 영역
  │     ├── About.tsx          # 스토리라인 및 채널 링크 그리드
  │     ├── Skills.tsx         # 스택 카테고리별 역량 및 실무 수준 테이블
  │     ├── Projects.tsx       # 필터링 탭 기능 탑재 프로젝트 리스트
  │     ├── TroubleshootingAccordion.tsx # 문제 해결력을 강조하는 전용 아코디언
  │     ├── Experience.tsx     # 2열 연력 테이블
  │     └── Contact.tsx        # 원터치 복사 및 푸터
  ├── data/              # 데이터 바인딩 레이어
  │     ├── portfolioData.ts   # 모든 콘텐츠 텍스트 데이터 정의 (유일한 콘텐츠 관리 지점)
  │     └── types.ts           # 엄격한 데이터 타이핑 스펙 선언
  ├── App.tsx            # 공통 프레임 레이아웃 배치 및 스크롤 옵저버 제어
  ├── index.css          # 미니멀리즘 스타일 시스템 (CSS 변수 및 기본 스타일 리셋)
  └── main.tsx           # 진입점
```

---

## 🚀 시작하기 (Getting Started)

### 의존성 패키지 설치
```bash
npm install
```

### 로컬 개발 서버 구동 (Vite HMR 지원)
```bash
npm run dev
```

### 배포 번들 생성 (TypeScript 빌드 유효성 검증 포함)
```bash
npm run build
```

### 배포 빌드 결과물 미리보기
```bash
npm run preview
```


