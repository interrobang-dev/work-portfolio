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
  level: "Production (3Y+)" | "Production" | "Personal";
  description?: string;
  logos?: string[];
}

export interface SkillCategory {
  category: "Backend" | "Frontend" | "DevOps" | "Methodology & Tools" | "AI & Productivity";
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
  troubleshooting?: Troubleshooting;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'career' | 'education';
  logo?: string;
}


export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  description: string;
  category: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
}



