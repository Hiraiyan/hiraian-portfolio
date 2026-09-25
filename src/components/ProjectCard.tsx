import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectItem } from '../types/portfolio';
import './ProjectCard.css';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  const categoryName = project.category.toUpperCase();

  return (
    <article
      className="project-card"
      onClick={handleCardClick}
      tabIndex={0}
      role="link"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View ${project.title} project`}
    >
      {/* Top Row: Title aligned left, single category badge aligned right */}
      <div className="project-card-header">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <span className={`project-category-badge category-${project.category.toLowerCase()}`}>
            {categoryName}
          </span>
        </div>
        {/* Subtitle / Tagline: Left aligned, orange accent color */}
        <p className="project-subtitle">{project.subtitle}</p>
      </div>

      {/* Short Description */}
      <p className="project-description">{project.shortDescription || project.description}</p>

      <div className="project-card-divider" />

      {/* Card Footer: Compact Technology Tags & Circular Arrow Action */}
      <div className="project-card-footer">
        <div className="project-tags" aria-label={`Technologies used in ${project.title}`}>
          {(project.technologies || project.techStack || project.tags).slice(0, 5).map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Circular Diagonal Arrow Action Button */}
        <div className="project-card-action">
          <span
            className="project-card-arrow-btn"
            aria-label={`View ${project.title} project`}
            title={`View ${project.title} project`}
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
};
