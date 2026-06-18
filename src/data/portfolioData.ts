import type { Profile, SkillCategory, Project, Experience } from './types';

export const profileData: Profile = {
  name: "천준기",
  englishName: "Chun Joon Ki",
  title: "탄탄한 기본기로 성능을 개선하고, 모던 기술로 가치를 연결하는 풀스택 엔지니어",
  shortBio: "레거시 시스템의 복잡한 쿼리와 비효율적인 비즈니스 로직을 분석하여 성능을 수배 이상 향상시키는 일에 보람을 느낍니다. 이에 안주하지 않고 React와 TypeScript, Docker 등 최신 기술 스택을 직접 탐구하며 설계 역량을 키워나가는 자기주도적 엔지니어입니다.",
  email: "joonki.deb@gmail.com",
  github: "https://github.com/interrobang-dev",
  blog: "https://interrobang.tistory.com/"
};

export const skillsData: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Spring Boot / Java",
        level: "Expert",
        description: "MVC 아키텍처 기반의 웹 API 설계와 비즈니스 로직 구현 숙련."
      },
      {
        name: "Spring Data JPA",
        level: "Advanced",
        description: "영속성 컨텍스트 이해, N+1 쿼리 최적화 및 동적 쿼리 작성 경험 다수."
      },
      {
        name: "PostgreSQL / MSSQL / MongoDB",
        level: "Advanced",
        description: "인덱싱 설계를 통한 쿼리 실행 계획 분석 및 튜닝 역량 보유."
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React / TypeScript",
        level: "Intermediate",
        description: "상태 관리 패러다임 및 훅(Hooks)을 활용한 재사용성 높은 컴포넌트 설계 가능."
      },
      {
        name: "JavaScript / jQuery",
        level: "Advanced",
        description: "실무 레거시 유지보수를 위한 DOM 제어 및 비동기 AJAX 통신 원숙."
      }
    ]
  },
  {
    category: "DevOps",
    items: [
      {
        name: "Docker / Docker Compose",
        level: "Intermediate",
        description: "컨테이너 가상화를 통한 로컬 다중 서버 환경 구성 및 빌드 일원화."
      },
      {
        name: "AWS (EC2, RDS, Route53)",
        level: "Intermediate",
        description: "가상 서버 인스턴스 구축, 보안 그룹(SG) 구성 및 도메인 바인딩 자동화."
      }
    ]
  },
  {
    category: "Methodology & Tools",
    items: [
      {
        name: "Git / GitHub Actions",
        level: "Advanced",
        description: "협업을 위한 브랜치 룰 수립 및 CI/CD 파이프라인 자동 빌드 설정 경험."
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ocms-refactoring",
    title: "사내 통합 운영 관리 시스템 (OCMS) 성능 개선 및 유지보수",
    type: "work",
    period: "2023.03 - 현재",
    role: "백엔드 메인 개발자 (기여도 80%)",
    summary: "Spring Boot와 jQuery 기반의 운영 관리 도구로, DB 병목과 레거시 비효율성 요소를 분석하여 전체 시스템 처리량을 획성적으로 증대시켰습니다.",
    techStack: ["Spring Boot", "Spring Data JPA", "Oracle DB", "jQuery", "Thymeleaf"],
    highlights: [
      "JPA N+1 쿼리 버그를 포착하여 Batch Size 조정 및 Join Fetch로 튜닝하여 로딩 지연 개선.",
      "실무 통계 대시보드 내 인덱스 부재 쿼리를 분석하고 결합 인덱스 설계를 통해 조회 속도 향상.",
      "스파게티형 jQuery 코드를 기능 단위 모듈러 함수 구조로 점진적 리팩토링 수행."
    ],
    troubleshooting: {
      problem: "사내 대시보드 통계 조회 및 엑셀 다운로드 요청 시 최대 7.2초 수준의 API 응답 지연 현상 발생.",
      cause: "연관 엔티티 FetchType.EAGER 설정 및 무분별한 루프 내 추가 SQL 발행(N+1 조회 문제)으로 인한 DB 커넥션 풀 고갈.",
      solution: "연관 관계를 FetchType.LAZY로 일괄 전환하고, 통계성 복잡 쿼리는 QueryDSL 동적 쿼리와 Fetch Join을 사용하여 단일 쿼리로 병합 조회하도록 로직 재작성.",
      result: "해당 API 평균 응답 지연을 7.2초에서 0.3초로 단축(약 95% 개선)하였고, 피크타임 DB 서버 CPU 부하율을 40% 이상 안정화."
    }
  },
  {
    id: "taskflow",
    title: "TaskFlow: 실시간 협업 애자일 칸반 보드",
    type: "personal",
    period: "2024.11 - 2024.12",
    role: "1인 풀스택 개발 (기여도 100%)",
    summary: "팀원 간 실시간 작업 상태 변경과 이슈 추적을 돕는 모던 풀스택 협업 플랫폼입니다.",
    techStack: ["React", "TypeScript", "NestJS", "Socket.io", "MongoDB", "Docker", "AWS"],
    highlights: [
      "Socket.io를 이용한 실시간 변경 내용 브로드캐스트 구현으로 협업 동기성 보장.",
      "React-Beautiful-Dnd 라이브러리를 적용하여 드래그 앤 드롭을 통한 카드 상태 이동 마이크로 UX 설계.",
      "Docker Compose를 사용하여 백엔드, 프론트엔드, DB 환경을 로컬 컨테이너로 추상화하여 배포 안정화."
    ],
    githubUrl: "https://github.com/example-github/taskflow"
  },
  {
    id: "logtrace",
    title: "LogTrace: 실시간 경량 로그 모니터링 대시보드",
    type: "personal",
    period: "2025.02 - 2025.03",
    role: "1인 백엔드 및 프론트엔드 개발 (기여도 100%)",
    summary: "분산 노드 환경에서 발생하는 시스템 로그 데이터를 Redis Pub/Sub 구조로 수집하여 실시간 가시화 및 Alerting을 제공하는 유틸리티 대시보드입니다.",
    techStack: ["React", "TypeScript", "FastAPI", "Redis", "SQLite", "Discord Webhook"],
    highlights: [
      "Redis Pub/Sub을 활용하여 초당 500개 이상의 유입 로그 메시지를 백그라운드 스레드에서 유실 없이 소비.",
      "특정 키워드(ERROR, FATAL) 출현 빈도가 임계치를 초과할 시 Discord Webhook과 즉각 연동하여 온콜(On-Call) 알림 발송 시스템 완비.",
      "미니멀한 모노톤 UI 디자인으로 차트 시각화 오버헤드를 낮추어 반응성 향상."
    ],
    githubUrl: "https://github.com/example-github/logtrace"
  }
];

export const experienceData: Experience[] = [
  {
    company: "(주)이엔지소프트",
    role: "스마트건설팀 | 웹 개발자 / 대리",
    period: "2023.02 - 현재",
    description: [
      "B2B 맞춤형 솔루션인 해상 공사 관리 시스템(OCMS)의 기능 개발 및 유지보수 총괄",
      "오래된 레거시 코드의 안정화를 위한 리팩토링 및 시스템 성능 최적화 작업 주도",
      "기존 고객사들의 높은 만족도를 바탕으로 신규 업체 계약 수주 연속 달성에 크게 기여"
    ]
  },
  {
    company: "스파르타 내일배움캠프",
    role: "백엔드 엔지니어 양성과정 이수 (조기 취업으로 잔여 과정 생략)",
    period: "2022.10 - 2023.02",
    description: [
      "웹 개발 기본기(HTML/CSS/JS, SQL, CS 기초) 및 Node.js 심화 과정 이수",
      "Git을 활용한 형상관리 및 팀원 간의 소통을 조율한 협업 프로세스 경험",
      "매일 12시간 넘게 문제를 해결하며 비전공자에서 '몰입하는 개발자'로의 확신을 얻은 시간"
    ]
  }
];
