import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Layers, Cpu, CheckCircle2, Wrench } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import './ProjectDetailPage.css';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = PROJECTS_DATA.find((p) => p.id === id || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const categoryName = project.category.toUpperCase();

  return (
    <div className="project-detail-page section-padding">
      <div className="container project-detail-container">
        {/* Navigation Breadcrumb */}
        <nav className="detail-breadcrumb" aria-label="Breadcrumb navigation">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
        </nav>

        {/* Detail Header: Open layout, single category badge, prominent title, orange subtitle */}
        <header className="detail-header">
          <div className="detail-meta-top">
            <span className={`detail-category-badge category-${project.category.toLowerCase()}`}>
              {categoryName}
            </span>
          </div>

          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">{project.subtitle}</p>
          <p className="detail-lead">{project.fullDescription || project.description}</p>
        </header>

        <div className="detail-divider" />

        {/* Two-Column Layout: Overview & Technical Architecture */}
        <section className="detail-two-col-grid" aria-label="Project Overview and Technical Architecture">
          <div className="detail-col">
            <h2 className="detail-section-heading">
              <Layers size={18} className="heading-icon" />
              <span>Overview</span>
            </h2>
            <p className="detail-body-text">{project.overview}</p>
          </div>

          <div className="detail-col">
            <h2 className="detail-section-heading">
              <Cpu size={18} className="heading-icon" />
              <span>Technical Architecture</span>
            </h2>
            <ul className="detail-bullet-list">
              {(project.architecture || project.architectureNotes).map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="detail-divider" />

        {/* Key Features: Clean open list (not card-styled to prevent bottom-heavy feel) */}
        <section className="detail-section" aria-label="Key Features">
          <h2 className="detail-section-heading">
            <CheckCircle2 size={18} className="heading-icon" />
            <span>Key Features</span>
          </h2>
          <ul className="detail-features-list">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="detail-feature-item">
                <span className="feature-marker" />
                <span className="feature-text">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="detail-divider" />

        {/* Technology Stack: Open pill row above actions (no large dark container) */}
        <section className="detail-section" aria-label="Technologies and Tools">
          <h2 className="detail-section-heading">
            <Wrench size={18} className="heading-icon" />
            <span>Technologies &amp; Tools</span>
          </h2>
          <div className="detail-tech-pill-row">
            {(project.technologies || project.techStack).map((tech) => (
              <span key={tech} className="detail-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Actions: Repository & Live Demo links (dark state when URL is not available) */}
        <div className="detail-actions-row">
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-action-btn action-active"
            >
              <Github size={16} />
              <span>View Repository</span>
            </a>
          ) : (
            <span
              className="detail-action-btn action-dark"
              title="Repository is private or proprietary enterprise software"
              tabIndex={0}
              role="button"
              aria-disabled="true"
            >
              <Github size={16} />
              <span>Private Repository</span>
            </span>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-action-btn action-active"
            >
              <ExternalLink size={16} />
              <span>Live Demo / Details</span>
            </a>
          ) : (
            <span
              className="detail-action-btn action-dark"
              title="Live demo is not available for this project"
              tabIndex={0}
              role="button"
              aria-disabled="true"
            >
              <ExternalLink size={16} />
              <span>Demo Unavailable</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
