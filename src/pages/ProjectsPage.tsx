import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCategory } from '../types/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import './ProjectsPage.css';

type FilterType = 'All' | ProjectCategory;

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterType>('All');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: FilterType[] = ['All', 'Work', 'Personal', 'School'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="projects-page section-padding">
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
            <span>02</span>
            <span className="prefix-slash">/</span>
            <span>PROJECTS</span>
          </div>
          <h1 className="page-main-title">All Projects</h1>
          <p className="page-description">
            A collection of projects I’ve built for work, school, and personal learning.
          </p>
        </header>

        {/* Category Filters: All, Work, Personal, School */}
        <div className="category-filter-bar" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`category-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="cat-count">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid Gallery */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
