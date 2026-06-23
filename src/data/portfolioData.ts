import type { Profile, SkillCategory, Project, Experience, InterviewQuestion, Certificate } from './types';
import engsoftLogo from '../assets/logos/engsoft-logo.png';
import spartaLogo from '../assets/logos/sparta-logo.png';
import kuLogo from '../assets/logos/ku-logo.png';

// Technology stack logos
import javaLogo from '../assets/logos/java-logo.svg';
import springBootLogo from '../assets/logos/spring-boot-logo.svg';
import pgsqlLogo from '../assets/logos/pgsql-logo.svg';
import mssqlLogo from '../assets/logos/mssql-logo.svg';
import mongodbLogo from '../assets/logos/mongodb-logo.svg';
import reactLogo from '../assets/logos/react-logo.svg';
import typescriptLogo from '../assets/logos/typescript-logo.svg';
import javascriptLogo from '../assets/logos/javascript-logo.svg';
import jqueryLogo from '../assets/logos/jquery-logo.svg';
import dockerLogo from '../assets/logos/docker-logo.svg';
import awsLogo from '../assets/logos/aws-ec2-logo.svg';
import gitLogo from '../assets/logos/git-logo.svg';
import githubActionsLogo from '../assets/logos/github-actions-logo.png';
import claudeLogo from '../assets/logos/claude-logo.svg';
import antigravityLogo from '../assets/logos/antigravity-logo.svg';
import codexLogo from '../assets/logos/codex-logo.svg';

export const profileData: Profile = {
  name: "천준기",
  englishName: "Joonki Chun",
  title: "Hello, my name is",
  shortBio: "레거시 시스템의 복잡한 쿼리와 비효율적인 비즈니스 로직을 분석하여 성능을 수배 이상 향상시키는 일에 보람을 느낍니다. 이에 안주하지 않고 React와 TypeScript, Docker 등 최신 기술 스택을 직접 탐구하며 설계 역량을 키워나가는 자기주도적 엔지니어입니다.",
  email: "joonki.dev@gmail.com",
  github: "https://github.com/interrobang-dev",
  blog: "https://interrobang.tistory.com",
  nickname: "Interrobang",
  nicknameIntro: "의문을 명쾌한 느낌표로 바꾸는, 집요하게 답을 찾아내는 풀스택 엔지니어",
  nicknameDetail: "Interrobang은 의문을 나타내는 물음표(?)와 감탄을 나타내는 느낌표(!)가 결합된 문장 기호(‽)입니다. 개발을 마주하며 직면하는 수많은 '왜 그럴까?'라는 물음표를, 집요한 분석과 쿼리 최적화 및 비즈니스 코드 튜닝을 통해 감탄할 만한 성능 향상이라는 '느낌표'로 바꾸는 저의 개발 신조를 표현합니다. 레거시 코드의 기술 부채를 해소하고 비즈니스 가치를 극대화하는 것에 가장 큰 희열을 느낍니다.",
  keywords: ["책임감", "끈기", "넓은 시야", "배려심"]
};

export const skillsData: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      {
        name: "Spring Boot / Java",
        level: "Production (3Y+)",
        description: "MVC 아키텍처 기반의 웹 API 설계와 비즈니스 로직 구현 숙련.",
        logos: [springBootLogo, javaLogo]
      },
      {
        name: "Spring Data JPA",
        level: "Production",
        description: "영속성 컨텍스트 이해, N+1 쿼리 최적화 및 동적 쿼리 작성 경험 다수.",
        logos: [springBootLogo]
      },
      {
        name: "MSSQL",
        level: "Production (3Y+)",
        description: "실무 대시보드 및 통계 쿼리 최적화를 위한 인덱싱 설계 및 쿼리 튜닝 숙련.",
        logos: [mssqlLogo]
      },
      {
        name: "PostgreSQL",
        level: "Production",
        description: "기존 레거시 Oracle 환경의 엔티티 구조를 분석하여 PostgreSQL 스키마 설계 및 대규모 마이그레이션을 안정적으로 수행.",
        logos: [pgsqlLogo]
      },
      {
        name: "MongoDB",
        level: "Production",
        description: "대용량 비정형 로그 데이터 및 IoT 기반 실시간 센서 적재 처리를 위한 분산 적재 스키마 설계 및 운영.",
        logos: [mongodbLogo]
      },
      {
        name: "Supabase",
        level: "Personal",
        description: "PostgreSQL 기반 BaaS 솔루션으로 인증(Auth), 실시간 DB 및 Storage를 연동한 서버리스 프로토타이핑 구현.",
        logos: []
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript / jQuery",
        level: "Production (3Y+)",
        description: "실무 레거시 유지보수를 위한 DOM 제어 및 비동기 AJAX 통신 원숙.",
        logos: [javascriptLogo, jqueryLogo]
      },
      {
        name: "React / TypeScript",
        level: "Personal",
        description: "상태 관리 패러다임 및 훅(Hooks)을 활용한 재사용성 높은 컴포넌트 설계 가능.",
        logos: [reactLogo, typescriptLogo]
      }
    ]
  },
  {
    category: "DevOps",
    items: [
      {
        name: "Docker / Docker Compose",
        level: "Production",
        description: "컨테이너 가상화를 통한 로컬 다중 서버 환경 구성 및 빌드 일원화.",
        logos: [dockerLogo]
      },
      {
        name: "AWS (EC2)",
        level: "Production",
        description: "Ubuntu 기반 가상 인프라 인스턴스 프로비저닝 및 보안 그룹(SG) 설정을 통한 네트워크 접근 제어와 애플리케이션 무중단 가동 환경 구축.",
        logos: [awsLogo]
      },
      {
        name: "AWS (RDS, Route53)",
        level: "Personal",
        description: "RDS 가상 데이터베이스 인프라 셋업 및 Route53 도메인 라우팅, HTTPS SSL 보안 인증서 적용 자동화 구현.",
        logos: []
      },
      {
        name: "Nginx",
        level: "Production",
        description: "리버스 프록시(Reverse Proxy) 설정을 통한 내부 WAS 포트 추상화, SSL/TLS 보안 인증서 적용 및 웹 서버 정적 자원 호스팅 최적화.",
        logos: []
      }
    ]
  },
  {
    category: "Methodology & Tools",
    items: [
      {
        name: "Git / GitHub Actions",
        level: "Production",
        description: "협업을 위한 브랜치 룰 수립 및 CI/CD 파이프라인 자동 빌드 설정 경험.",
        logos: [gitLogo, githubActionsLogo]
      }
    ]
  },
  {
    category: "AI & Productivity",
    items: [
      {
        name: "AI Co-programming (Cursor / Claude CLI / Antigravity)",
        level: "Production",
        description: "Cursor, Claude CLI, Antigravity 등의 AI 도구 및 에이전트를 활용하여 보일러플레이트 작성과 레거시 리팩토링 과정을 가속화하고, 아키텍처 초안 교차 검증 도구로 활용합니다.",
        logos: [antigravityLogo, claudeLogo, codexLogo]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ocms",
    title: "OCMS: 해상 공사관리 시스템",
    type: "work",
    period: "2024.01 - 현재",
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
    period: "2023.02 - 2024.01",
    role: "백엔드 및 프론트엔드 유지보수 개발자 (기여도 50%)",
    summary: "다양한 토목 공사 현장의 관리를 돕는 스마트 대시보드로, 레거시 시스템 리팩토링 및 현장별 커스텀 요구사항 대응, 성능 개선을 전담하였습니다.",
    techStack: ["Spring Boot", "MSSQL", "jQuery", "JavaScript", "HTML/CSS"],
    highlights: [
      "김포-파주 고속국도, 인천 신항, 광양항 준설토투기장, 제주 한림 해상풍력단지 등 4개 주요 현장의 커스텀 기능 개발 및 유지보수 전담.",
      "레거시 스파게티형 jQuery 코드를 기능 단위 모듈러 구조로 점진적 리팩토링하여 유지보수 용이성 확보.",
      "현장별 데이터 요구사항에 맞춘 시각화 차트 대시보드 설계 및 데이터 바인딩 로직 최적화."
    ]
  },
  {
    id: "portfolio-website",
    title: "개발자 포트폴리오 웹사이트 (본 웹사이트)",
    type: "personal",
    period: "2026.06",
    role: "1인 개발 (기여도 100%)",
    summary: "개인 브랜딩과 핵심 엔지니어링 역량 어필을 위해 React와 TypeScript 기반으로 개발된 반응형 단일 페이지 포트폴리오 웹사이트입니다.",
    techStack: ["React", "TypeScript", "Vite", "Vanilla CSS"],
    highlights: [
      "Vite 번들 최적화를 통해 빌드 타임 및 정적 로딩 속도 100ms 이내로 단축.",
      "CSS Variable을 활용한 전역 테마 관리 구조 설계 및 Flex/Grid 기반의 완벽한 모바일 반응형 레이아웃 구현.",
      "실무 숙련도를 담백하고 신뢰성 있게 기술하기 위해 nY+ 기반의 기술 명세 컴포넌트(Skills) 및 아키텍처 트러블슈팅 아코디언 설계."
    ],
    githubUrl: "https://github.com/interrobang-dev/work-portfolio"
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



