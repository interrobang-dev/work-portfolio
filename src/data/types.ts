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
  description?: string;
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
  troubleshooting?: Troubleshooting;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
