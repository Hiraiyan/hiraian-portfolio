import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import './FeaturedProjects.css';

export const FeaturedProjects: React.FC = () => {
  const navigate = useNavigate();
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  const handleCardClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="featured-projects-section section-padding">
      <div className="container">
        <div className="section-header-row">
          <div className="section-prefix">
            <span>02</span>
            <span className="prefix-slash">/</span>
            <span>FEATURED PROJECTS</span>
          </div>

          <Link
            to="/projects"
            className="view-all-projects-btn"
            aria-label="View all projects directory"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={() => handleCardClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
