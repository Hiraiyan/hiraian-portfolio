export interface SkillSection {
  id: string;
  category: string;
  skills: string[];
}

export const DETAILED_SKILLS_DATA: SkillSection[] = [
  {
    id: 'front-end',
    category: 'Front End',
    skills: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Zustand',
      'Chakra UI',
      'AJAX',
    ],
  },
  {
    id: 'back-end-data',
    category: 'Back End and Data',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'SQL',
      'PHP',
      'Java',
      'SharePoint Lists',
      'Relational Schema Design',
      'REST APIs',
      'Power BI',
    ],
  },
  {
    id: 'ai-automation',
    category: 'AI and Automation',
    skills: [
      'Python',
      'LLM Integration & APIs (Claude, Gemini, OpenAI)',
      'Prompt Engineering',
      'Local LLM Deployment (Qwen via LM Studio)',
      'Microsoft Power Apps',
      'Power Automate',
      'Power Fx',
    ],
  },
  {
    id: 'game-development',
    category: 'Game Development',
    skills: [
      'C++',
      'C',
      'Unreal Engine 5',
      'Unity 6',
      'Godot Engine',
      'GDScript',
      'Utility AI',
      'GOAP',
      'Behavior Trees',
      'Blueprint Scripting',
    ],
  },
  {
    id: 'tools',
    category: 'Tools',
    skills: [
      'Git & GitHub',
      'VS Code',
      'Figma',
      'Blender',
      'Notion',
      'Linux / Windows CLI',
    ],
  },
];
