import React, { useEffect } from 'react';
import { ArrowLeft, Code2, Database, Cpu, Gamepad2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DETAILED_SKILLS_DATA, SkillSection } from '../data/skillsData';
import './SkillsPage.css';

export const SkillsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (id: SkillSection['id']) => {
    switch (id) {
      case 'front-end':
        return <Code2 size={22} />;
      case 'back-end-data':
        return <Database size={22} />;
      case 'ai-automation':
        return <Cpu size={22} />;
      case 'game-development':
        return <Gamepad2 size={22} />;
      case 'tools':
      default:
        return <Wrench size={22} />;
    }
  };

  return (
    <div className="skills-page section-padding">
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div className="page-breadcrumb">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to Overview</span>
          </Link>
        </div>

        {/* Page Header */}
        <header className="page-header">
          <div className="section-prefix">
            <span>04</span>
            <span className="prefix-slash">/</span>
            <span>SKILLS</span>
          </div>
          <h1 className="page-main-title">Technical Skills</h1>
          <p className="page-description">
            The tools, frameworks, and applications I’ve worked with across my projects and experience.
          </p>
        </header>

        {/* Categories Grid - Clean categories with no check marks, no mini-tags, and no section descriptions */}
        <div className="skills-detail-grid">
          {DETAILED_SKILLS_DATA.map((sec) => (
            <div key={sec.id} className="skill-detail-card">
              <div className="skill-detail-header">
                <div className="skill-detail-icon-box">{getIcon(sec.id)}</div>
                <h2 className="skill-detail-category-title">{sec.category}</h2>
              </div>

              <div className="skill-detail-divider" />

              <div className="skill-pills-wrap">
                {sec.skills.map((skill, idx) => (
                  <span key={idx} className="skill-clean-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
