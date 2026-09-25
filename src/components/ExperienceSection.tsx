import React from 'react';
import { Cloud, Calendar, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WORK_EXPERIENCE_DATA, EDUCATION_DATA } from '../data/experienceData';
import './ExperienceSection.css';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="section-header-row">
          <div className="section-prefix exp-prefix">
            <span>03</span>
            <span className="prefix-slash">/</span>
            <span>EXPERIENCE</span>
          </div>

          <Link to="/experience" className="view-all-projects-btn" aria-label="View detailed experience and education page">
            <span>VIEW FULL EXPERIENCE</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="experience-cards-stack">
          {/* Work Experience Card: CloudSwyft */}
          <div className="experience-card">
            <div className="exp-icon-col">
              <div className="exp-logo-box">
                <Cloud size={28} className="exp-cloud-icon" />
              </div>
            </div>

            <div className="exp-main-col">
              <div className="exp-header-row">
                <div className="exp-title-block">
                  <h3 className="exp-company">{WORK_EXPERIENCE_DATA.company}</h3>
                  <div className="exp-role-title">{WORK_EXPERIENCE_DATA.role}</div>
                </div>

                <div className="exp-meta-col">
                  <div className="exp-meta-item">
                    <Calendar size={14} className="exp-meta-icon" />
                    <span>{WORK_EXPERIENCE_DATA.duration}</span>
                  </div>
                  <div className="exp-meta-item">
                    <MapPin size={14} className="exp-meta-icon" />
                    <span>{WORK_EXPERIENCE_DATA.location}</span>
                  </div>
                </div>
              </div>

              <p className="exp-description">{WORK_EXPERIENCE_DATA.summary}</p>

              <div className="exp-scope-badges">
                {WORK_EXPERIENCE_DATA.scopeBadges.map((badge, idx) => (
                  <span key={idx} className="scope-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card: La Consolacion College Biñan */}
          <div className="experience-card education-card">
            <div className="exp-icon-col">
              <div className="exp-logo-box education-logo-box">
                <GraduationCap size={28} className="exp-edu-icon" />
              </div>
            </div>

            <div className="exp-main-col">
              <div className="exp-header-row">
                <div className="exp-title-block">
                  <h3 className="exp-company">{EDUCATION_DATA.institution}</h3>
                  <div className="exp-role-title">{EDUCATION_DATA.degree}</div>
                </div>

                <div className="exp-meta-col">
                  <div className="exp-meta-item">
                    <Calendar size={14} className="exp-meta-icon" />
                    <span>{EDUCATION_DATA.duration}</span>
                  </div>
                  <div className="exp-meta-item">
                    <MapPin size={14} className="exp-meta-icon" />
                    <span>{EDUCATION_DATA.location}</span>
                  </div>
                </div>
              </div>

              <p className="exp-description">
                Four-year undergraduate program in computer science covering advanced algorithm design, autonomous agent systems,
                database design, and full-stack software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
