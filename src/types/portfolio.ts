export type ThemeMode = 'system' | 'light' | 'dark';

export type ProjectCategory = 'Work' | 'Personal' | 'School';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  description: string;
  technologies: string[];
  techStack: string[];
  tags: string[];
  featured: boolean;
  order: number;
  overview: string;
  highlights: string[];
  architecture: string[];
  architectureNotes: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  domain?: string;
  badgeLabel?: string;
  metrics?: string[];
  caseStudy?: {
    overview: string;
    architectureNotes: string[];
    highlights: string[];
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  division: string;
  duration: string;
  location: string;
  summary: string;
  keyContributions: string[];
  scopeBadges: string[];
}

export interface LeadershipItem {
  id: string;
  organization: string;
  institution: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  honors: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'code' | 'cpu' | 'gamepad' | 'wrench';
  skills: string[];
}
