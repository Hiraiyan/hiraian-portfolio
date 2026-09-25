import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="hero-section section-padding">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="section-prefix hero-prefix">
            <span>01</span>
            <span className="prefix-slash">/</span>
            <span>ABOUT ME</span>
          </div>

          <h1 className="hero-title">RYAN PEDEGLORIA</h1>

          <p className="hero-subtitle">
            I build practical software across automation, local AI, and interactive systems.
          </p>

          <div className="hero-status-list">
            <div className="status-card">
              <div className="status-icon-wrapper">
                <Briefcase size={18} className="status-icon" />
              </div>
              <div className="status-text-wrapper">
                <span className="status-title">Software Engineering Intern @ CloudSwyft</span>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon-wrapper">
                <GraduationCap size={18} className="status-icon" />
              </div>
              <div className="status-text-wrapper">
                <span className="status-title">4th Year BSCS @ La Consolacion College Biñan</span>
              </div>
            </div>

            <div className="status-card">
              <div className="status-icon-wrapper">
                <MapPin size={18} className="status-icon" />
              </div>
              <div className="status-text-wrapper">
                <span className="status-title">Biñan, Laguna, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img
              src="/assets/mypicture.png"
              alt="Ryan James Pedegloria"
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
