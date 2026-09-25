import { EducationItem, LeadershipItem, ExperienceItem } from '../types/portfolio';

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'La Consolacion College Biñan',
  location: 'Biñan, Laguna, Philippines',
  duration: '2023 - May 2027',
  gpa: '1.3 GPA',
  honors: "Dean's Lister",
};

export const WORK_EXPERIENCE_DATA: ExperienceItem = {
  id: 'cloudswyft',
  company: 'CloudSwyft Global Systems, Inc.',
  role: 'Software Engineer Intern - Power Platform & Systems Automation',
  division: 'Enterprise Systems Automation',
  duration: 'July 2026 - September 2026',
  location: 'Manila, Philippines (Online)',
  summary:
    'Built an end-to-end CRM and data automation platform using Power Apps, Power Automate, and SharePoint to streamline lead, support, communication, and reporting workflows.',
  keyContributions: [
    'Engineered multi-channel inbound intake pipelines that ingest, parse, validate, and route incoming web and email data, automatically categorizing submissions into sales leads or customer support records with minimal manual intervention.',
    'Designed a structured CRM data architecture across 10 interconnected entity tables and built event-driven backend workflows to automate record creation and lifecycle transitions, including automated lead-to-client conversion.',
    'Developed a threaded communications hub in Power Apps featuring conversation reconstruction, chronological message sequencing, unassigned ticket triage, priority and assignment handling, and in-app notification flyouts with deep linking.',
    'Built an executive analytics dashboard for pipeline monitoring, customer satisfaction, response and handling metrics, and sales activity, integrating automated web-interaction data synchronization for click-through and campaign engagement reporting.',
  ],
  scopeBadges: [
    'Power Apps',
    'Power Fx',
    'Power Automate',
    'SharePoint',
    'CRM',
  ],
};

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    id: 'igen-society',
    organization: 'IGen Society - LCCB',
    institution: 'La Consolacion College Biñan',
    role: 'Treasurer',
    duration: '2025 - 2026',
    responsibilities: [
      'Managed organizational funds and tracked expenses to support student programs and events.',
      'Coordinated with officers to allocate budget across academic and extracurricular initiatives.',
    ],
  },
  {
    id: 'media-faculty',
    organization: 'Media Faculty',
    institution: 'La Consolacion College Biñan',
    role: 'Treasurer, Video Editor',
    duration: '2023 - 2026',
    responsibilities: [
      'Managed financial records and resource allocation for media production activities.',
      'Produced and edited video content for school events and promotional materials.',
      'Supported documentation and media coverage workflows across multiple school events.',
    ],
  },
];
