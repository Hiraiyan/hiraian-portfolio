import React, { useEffect } from 'react';
import { ArrowLeft, Cloud, GraduationCap, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EDUCATION_DATA, WORK_EXPERIENCE_DATA, LEADERSHIP_DATA } from '../data/experienceData';
import './ExperiencePage.css';

export const ExperiencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-page section-padding">
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
            <span>03</span>
            <span className="prefix-slash">/</span>
            <span>EXPERIENCE</span>
          </div>
          <h1 className="page-main-title">Experience &amp; Education</h1>
          <p className="page-description">
            My work experience, leadership roles, and education so far.
          </p>
        </header>

        {/* Section 1: Experience */}
        <section className="exp-page-section">
          <div className="sub-section-header">
            <div className="sub-section-icon">
              <Cloud size={20} />
            </div>
            <div>
              <h2 className="sub-section-title">Experience</h2>
            </div>
          </div>

          <div className="exp-page-card">
            <div className="exp-card-header">
              <div>
                <h3 className="exp-title-lg">{WORK_EXPERIENCE_DATA.company}</h3>
                <div className="exp-role-name">{WORK_EXPERIENCE_DATA.role}</div>
              </div>

              <div className="exp-meta-group">
                <div className="exp-meta-pill">
                  <Calendar size={14} className="meta-icon" />
                  <span>{WORK_EXPERIENCE_DATA.duration}</span>
                </div>
                <div className="exp-meta-pill">
                  <MapPin size={14} className="meta-icon" />
                  <span>{WORK_EXPERIENCE_DATA.location}</span>
                </div>
              </div>
            </div>

            <p className="exp-body-text">{WORK_EXPERIENCE_DATA.summary}</p>

            <div className="contributions-block">
              <h4 className="block-heading">Key Contributions:</h4>
              <ul className="contributions-list">
                {WORK_EXPERIENCE_DATA.keyContributions.map((contrib, idx) => (
                  <li key={idx}>{contrib}</li>
                ))}
              </ul>
            </div>

            <div className="exp-scope-row">
              {WORK_EXPERIENCE_DATA.scopeBadges.map((badge, idx) => (
                <span key={idx} className="scope-pill">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Leadership & Activities */}
        <section className="exp-page-section">
          <div className="sub-section-header">
            <div className="sub-section-icon">
              <Users size={20} />
            </div>
            <div>
              <h2 className="sub-section-title">Leadership &amp; Activities</h2>
            </div>
          </div>

          <div className="leadership-cards-grid">
            {LEADERSHIP_DATA.map((item) => (
              <div key={item.id} className="exp-page-card leadership-card">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-title-lg">{item.organization}</h3>
                    <div className="exp-role-name">{item.role}</div>
                    <div className="exp-division-name">{item.institution}</div>
                  </div>

                  <div className="exp-meta-pill">
                    <Calendar size={14} className="meta-icon" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="contributions-block">
                  <h4 className="block-heading">Responsibilities &amp; Impact:</h4>
                  <ul className="contributions-list">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Education */}
        <section className="exp-page-section">
          <div className="sub-section-header">
            <div className="sub-section-icon">
              <GraduationCap size={20} />
            </div>
            <div>
              <h2 className="sub-section-title">Education</h2>
            </div>
          </div>

          <div className="exp-page-card education-full-card">
            <div className="exp-card-header">
              <div>
                <h3 className="exp-title-lg">{EDUCATION_DATA.institution}</h3>
                <div className="exp-role-name">{EDUCATION_DATA.degree}</div>
                <div className="exp-division-name">{EDUCATION_DATA.location}</div>
              </div>

              <div className="exp-meta-pill">
                <Calendar size={14} className="meta-icon" />
                <span>{EDUCATION_DATA.duration}</span>
              </div>
            </div>

            <p className="exp-body-text">
              Undergraduate coursework in Data Structures and Algorithms, Object-Oriented Programming,
              Database Management Systems, Software Engineering, Autonomous Agents, and Operating Systems.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
