import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectItem } from '../types/portfolio';
import './ProjectsModal.css';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProject?: ProjectItem | null;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({
  isOpen,
  onClose,
  selectedProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedProject) {
      setExpandedProjectId(selectedProject.id);
    } else {
      setExpandedProjectId(null);
    }
  }, [selectedProject, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai-game') {
      return project.id === 'tindai' || project.id === 'nakem' || project.id === 'genai-broll';
    }
    if (activeFilter === 'enterprise') {
      return project.id === 'cloudswyft-crm' || project.id === 'genai-broll';
    }
    if (activeFilter === 'web') {
      return (
        project.id === 'mern-ecommerce' ||
        project.id === 'computer-parts' ||
        project.id === 'foundit'
      );
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-archive-title"
    >
      <div
        className="modal-container"
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="section-prefix modal-prefix">
              <span>02</span>
              <span className="prefix-slash">/</span>
              <span>PROJECT ARCHIVE</span>
            </div>
            <h2 id="modal-archive-title" className="modal-main-title">
              Complete Portfolio & Systems Breakdown
            </h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project archive modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="modal-filter-bar">
          <button
            type="button"
            className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Systems (7)
          </button>
          <button
            type="button"
            className={`filter-chip ${activeFilter === 'ai-game' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai-game')}
          >
            AI & Game Architectures
          </button>
          <button
            type="button"
            className={`filter-chip ${activeFilter === 'enterprise' ? 'active' : ''}`}
            onClick={() => setActiveFilter('enterprise')}
          >
            Enterprise Automation
          </button>
          <button
            type="button"
            className={`filter-chip ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Applications
          </button>
        </div>

        {/* Projects Scroll Area */}
        <div className="modal-body-scroll">
          <div className="modal-projects-list">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <div
                  key={project.id}
                  id={`project-item-${project.id}`}
                  className={`modal-project-item ${isExpanded ? 'expanded' : ''}`}
                >
                  <div className="modal-item-top" onClick={() => toggleExpand(project.id)}>
                    <div className="modal-item-info">
                      <div className="modal-item-title-row">
                        <h3 className="modal-item-name">{project.title}</h3>
                        {project.badgeLabel && (
                          <span className="modal-item-badge">{project.badgeLabel}</span>
                        )}
                        {project.featured && (
                          <span className="modal-featured-tag">Featured</span>
                        )}
                      </div>
                      <p className="modal-item-subtitle">{project.subtitle}</p>
                    </div>

                    <div className="modal-item-expand-action">
                      <span className="expand-label">
                        {isExpanded ? 'Hide Details' : 'View Details'}
                      </span>
                    </div>
                  </div>

                  <p className="modal-item-desc">{project.description}</p>

                  {/* Metrics Badges */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="modal-item-metrics">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="metric-chip">
                          <CheckCircle2 size={13} className="metric-icon" />
                          <span>{metric}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tag Badges (No 'Tech Stack' text) */}
                  <div className="modal-item-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Architectural Case Study */}
                  {isExpanded && project.caseStudy && (
                    <div className="modal-case-study">
                      <div className="case-study-block">
                        <h4 className="case-study-heading">
                          <Layers size={15} /> Overview & Problem Context
                        </h4>
                        <p>{project.caseStudy.overview}</p>
                      </div>

                      <div className="case-study-block">
                        <h4 className="case-study-heading">
                          <Cpu size={15} /> Technical Architecture
                        </h4>
                        <ul className="case-study-bullets">
                          {project.caseStudy.architectureNotes.map((note, idx) => (
                            <li key={idx}>{note}</li>
                          ))}
                        </ul>
                      </div>

                      {project.id === 'cloudswyft-crm' && (
                        <div className="nda-compliance-notice">
                          <ShieldCheck size={16} />
                          <span>
                            <strong>Strict Zero-UI / NDA Compliance:</strong> Confined strictly to
                            systems architecture and data flow modeling without exposing proprietary
                            client assets or live UI screenshots.
                          </span>
                        </div>
                      )}

                      <div className="case-study-block">
                        <h4 className="case-study-heading">Key Implementation Highlights</h4>
                        <ul className="case-study-bullets">
                          {project.caseStudy.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Links if available */}
                      <div className="modal-item-links">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                          >
                            <Github size={14} />
                            <span>Repository</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                          >
                            <ExternalLink size={14} />
                            <span>Explore Details</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
