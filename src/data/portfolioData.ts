import type { Profile, SkillCategory, Project, Experience, InterviewQuestion, Certificate } from './types';
import engsoftLogo from '../assets/engsoft_logo.png';
import spartaLogo from '../assets/sparta_logo.png';
import kuLogo from '../assets/ku_logo.png';

export const profileData: Profile = {
  name: "천준기",
  englishName: "Chun Joon Ki",
  title: "탄탄한 기본기로 성능을 개선하고, 모던 기술로 가치를 연결하는 풀스택 엔지니어",
  shortBio: "레거시 시스템의 복잡한 쿼리와 비효율적인 비즈니스 로직을 분석하여 성능을 수배 이상 향상시키는 일에 보람을 느낍니다. 이에 안주하지 않고 React와 TypeScript, Docker 등 최신 기술 스택을 직접 탐구하며 설계 역량을 키워나가는 자기주도적 엔지니어입니다.",
  email: "joonki.dev@gmail.com",
  github: "https://github.com/interrobang-dev",
  blog: "https://interrobang.tistory.com"
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
  },
  {
    category: "AI & Productivity",
    items: [
      {
        name: "AI Co-programming (Cursor / Claude CLI / Antigravity)",
        level: "Advanced",
        description: "Cursor, Claude CLI, Antigravity 등의 AI 도구 및 에이전트를 활용하여 보일러플레이트 작성과 레거시 리팩토링 과정을 가속화하고, 아키텍처 초안 교차 검증 도구로 활용합니다."
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ocms",
    title: "OCMS: 해상 공사관리 시스템",
    type: "work",
    period: "2024.03 - 현재",
    role: "백엔드 메인 개발자 / 개발 리드 (기여도 80%)",
    summary: "해상 공사 환경에 특화된 B2B 솔루션으로, 기획 단계부터 직접 참여하여 아키텍처 설계, 기술 스택 현대화, 배포 파이프라인 구축을 주도하고 있습니다.",
    techStack: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "MongoDB", "Docker", "AWS (EC2 - Ubuntu)"],
    highlights: [
      "전남해상풍력 1단지(완료), 영광낙월 해상풍력단지(진행중), 신한우이 해상풍력단지(진행중) 3개 해상 풍력단지 건설 현장의 커스텀 솔루션 개발 및 유지보수 총괄.",
      "JPA 도입 및 DB 마이그레이션: 기존 레거시 환경에서 PostgreSQL 마이그레이션을 주도하고, Spring Data JPA를 전면 도입하여 생산성 향상.",
      "데이터 저장소 이원화: 대용량 비정형 로그 및 실시간 센서/이벤트 데이터 적재를 위해 MongoDB를 도입하여 데이터 성격에 최적화된 설계 수립.",
      "인프라 현대화 및 비용 절감: 기존 Windows OS 기반 AWS 환경을 Ubuntu로 전환하여 서버 운영 라이선스 비용을 절감하고, Docker 기반 배포를 도입하여 로컬-상용 환경 정합성 확보."
    ],
    troubleshooting: {
      problem: "시스템 대시보드 통계 조회 및 실시간 공사 이력 다운로드 시 최대 7.2초 수준의 API 응답 지연 현상 발생.",
      cause: "JPA 도입 초기 연관 엔티티 FetchType.EAGER 설정 남용 및 루프 내부 추가 SQL 발행(N+1 조회 문제)으로 인한 DB 커넥션 풀 고갈.",
      solution: "연관 관계를 FetchType.LAZY로 전환하고, 통계성 복잡 쿼리는 QueryDSL 동적 쿼리와 Fetch Join을 사용하여 단일 쿼리로 병합 조회하도록 최적화.",
      result: "해당 API 평균 응답 시간을 7.2초에서 0.3초로 대폭 단축(약 95% 개선)하고 DB CPU 부하를 대폭 안정화."
    }
  },
  {
    id: "s-vord",
    title: "S-VORD: 스마트 공사 관리 대시보드",
    type: "work",
    period: "2023.02 - 2024.02",
    role: "백엔드 및 프론트엔드 유지보수 개발자 (기여도 50%)",
    summary: "다양한 토목 공사 현장의 관리를 돕는 스마트 대시보드로, 레거시 시스템 리팩토링 및 현장별 커스텀 요구사항 대응, 성능 개선을 전담하였습니다.",
    techStack: ["Spring Boot", "MSSQL", "jQuery", "JavaScript", "HTML/CSS"],
    highlights: [
      "김포-파주 고속국도, 인천 신항, 광양항 준설토투기장, 제주 한림 해상풍력단지 등 4개 주요 현장의 커스텀 기능 개발 및 유지보수 전담.",
      "레거시 스파게티형 jQuery 코드를 기능 단위 모듈러 구조로 점진적 리팩토링하여 유지보수 용이성 확보.",
      "현장별 데이터 요구사항에 맞춘 시각화 차트 대시보드 설계 및 데이터 바인딩 로직 최적화."
    ]
  }
];

export const experienceData: Experience[] = [
  {
    company: "(주)이엔지소프트",
    role: "스마트건설팀 | 웹 개발자 / 대리",
    period: "2023.02 - 현재",
    description: [
      "B2B 해상 공사 관리 솔루션(OCMS) 및 스마트 대시보드(S-VORD) 개발 및 유지보수 총괄",
      "기술 스택 현대화(Spring JPA, PostgreSQL, MongoDB, Docker 도입) 및 AWS 인프라 최적화 주도",
      "레거시 코드 리팩토링 및 쿼리 튜닝을 통해 대규모 데이터 조회 성능 95% 향상 및 시스템 안정성 확보"
    ],
    type: "career",
    logo: engsoftLogo
  },
  {
    company: "스파르타 내일배움캠프",
    role: "백엔드 엔지니어 양성과정 이수 (조기 취업으로 잔여 과정 생략)",
    period: "2022.10 - 2023.02",
    description: [
      "웹 개발 기본기(HTML/CSS/JS, SQL, CS 기초) 및 Node.js 심화 과정 이수",
      "Git을 활용한 형상관리 및 팀원 간의 소통을 조율한 협업 프로세스 경험",
      "매일 12시간 넘게 문제를 해결하며 비전공자에서 '몰입하는 개발자'로의 확신을 얻은 시간"
    ],
    type: "education",
    logo: spartaLogo
  },
  {
    company: "고려대학교 (Korea Univ.)",
    role: "건축사회환경공학 학사 및 석사 졸업",
    period: "2016.03 - 2022.08",
    description: [
      "공학적 수치 해석 및 통계적 데이터 분석 기법을 학습하며 정밀한 데이터 설계 논리력 체화",
      "현장 실무 도메인에 대한 깊은 이해를 바탕으로 스마트건설팀의 B2B 해상 공사 관리 솔루션 요구사항 분석 및 데이터 모델 설계 시 핵심적인 가치 제공"
    ],
    type: "education",
    logo: kuLogo
  }
];



export const interviewQuestions: InterviewQuestion[] = [
  {
    id: "q-strength",
    question: "Q. 백엔드 엔지니어로서 가장 몰입하는 영역은 무엇인가요?",
    answer: "레거시 분석과 성능 최적화입니다.",
    description: "실무에서 JPA N+1 문제 해결 및 복잡한 통계 쿼리를 튜닝하여 API 응답 지연을 95% 단축했습니다. 보이지 않는 시스템의 병목을 분석하고 걷어내는 과정에서 희열을 느낍니다.",
    category: "Core Strength"
  },
  {
    id: "q-learning",
    question: "Q. 기술을 습득하는 원칙은 무엇인가요?",
    answer: "직접 만들어보며 체득합니다.",
    description: "개념 이해에 그치지 않고, React/TypeScript 환경을 구축하거나 Docker 컨테이너를 로컬에 직접 띄워 테스트하며 지식을 체화합니다.",
    category: "Learning"
  },
  {
    id: "q-collaboration",
    question: "Q. 협업 시 소통 방식은 어떤가요?",
    answer: "끈기 있는 소통과 유연한 수용력",
    description: "문제를 해결할 때까지 물고 늘어지는 집요함을 발휘하면서도, 설계 및 코드 리뷰 과정에서는 동료의 피드백을 유연하게 수용하여 최선의 결론을 도출합니다.",
    category: "Collaboration"
  },
  {
    id: "q-vision",
    question: "Q. 궁극적으로 지향하는 엔지니어상은 무엇인가요?",
    answer: "비즈니스에 가치를 더하는 아키텍트",
    description: "기술적 화려함에 매몰되지 않고, 비즈니스의 성장 속도에 기민하게 대응할 수 있도록 아키텍처의 단순함과 확장성을 동시에 지향합니다.",
    category: "Vision"
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    name: "SQL 개발자 (SQLD)",
    issuer: "한국데이터산업진흥원",
    date: "2022.12"
  },
  {
    id: "cert-2",
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2022.06"
  }
];



