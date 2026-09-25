import React from 'react';
import { Code2, Database, Cpu, Gamepad2, Wrench, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SkillsSection.css';

interface HomepageSkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const HOMEPAGE_SKILLS: HomepageSkillCategory[] = [
  {
    id: 'front-end',
    title: 'FRONT END',
    icon: <Code2 size={20} />,
    skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Zustand & CSS3'],
  },
  {
    id: 'back-end',
    title: 'BACK END & DATA',
    icon: <Database size={20} />,
    skills: ['Node.js & Express', 'MongoDB', 'SQL & Relational Schema', 'Firebase', 'REST APIs'],
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    icon: <Cpu size={20} />,
    skills: ['Python', 'Local LLMs (Qwen via LM Studio)', 'Power Apps & Automate', 'Prompt Engineering'],
  },
  {
    id: 'game-development',
    title: 'GAME DEV (C++)',
    icon: <Gamepad2 size={20} />,
    skills: ['C++', 'Godot Engine & GDScript', 'Unreal Engine 5', 'Unity 6', 'GOAP & Utility AI'],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    icon: <Wrench size={20} />,
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Blender', 'Linux / Windows CLI'],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header-row">
          <div className="section-prefix skills-prefix">
            <span>04</span>
            <span className="prefix-slash">/</span>
            <span>SKILLS</span>
          </div>

          <Link
            to="/skills"
            className="view-all-projects-btn"
            aria-label="View comprehensive technical skills directory"
          >
            <span>VIEW FULL SKILLS DIRECTORY</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="skills-grid five-col-grid">
          {HOMEPAGE_SKILLS.map((cat) => (
            <div key={cat.id} className="skill-card">
              <div className="skill-card-header">
                <div className="skill-icon-box">{cat.icon}</div>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>

              <div className="skill-card-divider" />

              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot" />
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
