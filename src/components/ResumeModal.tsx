import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, MapPin } from 'lucide-react';
import './ResumeModal.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div
      className="resume-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div className="resume-header-title-group">
            <span className="section-prefix">RÉSUMÉ</span>
            <h2 id="resume-title" className="resume-candidate-name">
              Ryan James A. Pedegloria
            </h2>
          </div>

          <div className="resume-header-actions">
            <a
              href="/assets/Ryan_James_Pedegloria_Resume.pdf"
              download="Ryan_James_Pedegloria_Resume.pdf"
              className="resume-download-btn"
              title="Download PDF version"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              className="resume-close-btn"
              onClick={onClose}
              aria-label="Close résumé modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="resume-body-scroll">
          {/* Contact summary */}
          <div className="resume-contact-bar">
            <span className="contact-pill">
              <Mail size={13} /> pedegloria.rj@gmail.com
            </span>
            <span className="contact-pill">
              <MapPin size={13} /> Biñan City, Laguna, Philippines
            </span>
            <a
              href="https://github.com/Hiraiyan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill link"
            >
              <ExternalLink size={13} /> github.com/Hiraiyan
            </a>
          </div>

          {/* Education */}
          <section className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-degree">Bachelor of Science in Computer Science</span>
                  <div className="resume-institution">La Consolacion College Biñan</div>
                </div>
                <div className="resume-date">2023 - Expected May 2027 (GPA: 1.3 • Dean's Lister)</div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL EXPERIENCE</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-job-title">Software Engineer Intern - Power Platform &amp; Systems Automation</span>
                  <div className="resume-company">CloudSwyft Global Systems, Inc.</div>
                </div>
                <div className="resume-date">July 2026 - September 2026</div>
              </div>
              <ul className="resume-bullets">
                <li>
                  Built an end-to-end CRM and data automation platform using Power Apps, Power Automate, and SharePoint to streamline lead, support, communication, and reporting workflows.
                </li>
                <li>
                  Engineered multi-channel inbound intake pipelines that ingest, parse, validate, and route incoming web and email data, automatically categorizing submissions into sales leads or customer support records.
                </li>
                <li>
                  Designed a structured CRM data architecture across 10 interconnected entity tables and built event-driven backend workflows to automate record creation and lifecycle transitions.
                </li>
                <li>
                  Developed a threaded communications hub in Power Apps featuring conversation reconstruction, chronological message sequencing, and in-app notification flyouts with deep linking.
                </li>
                <li>
                  Built an executive analytics dashboard for pipeline monitoring, customer satisfaction, response and handling metrics, and sales activity.
                </li>
              </ul>
            </div>
          </section>

          {/* Leadership & Activities */}
          <section className="resume-section">
            <h3 className="resume-section-title">LEADERSHIP &amp; ACTIVITIES</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-job-title">Treasurer</span>
                  <div className="resume-company">IGen Society - LCCB (La Consolacion College Biñan)</div>
                </div>
                <div className="resume-date">2025 - 2026</div>
              </div>
              <ul className="resume-bullets">
                <li>Managed organizational funds and tracked expenses to support student programs and events.</li>
                <li>Coordinated with officers to allocate budget across academic and extracurricular initiatives.</li>
              </ul>
            </div>
            <div className="resume-item" style={{ marginTop: '0.75rem' }}>
              <div className="resume-item-header">
                <div>
                  <span className="resume-job-title">Treasurer, Video Editor</span>
                  <div className="resume-company">Media Faculty (La Consolacion College Biñan)</div>
                </div>
                <div className="resume-date">2023 - 2026</div>
              </div>
              <ul className="resume-bullets">
                <li>Managed financial records and resource allocation for media production activities.</li>
                <li>Produced and edited video content for school events and promotional materials.</li>
                <li>Supported documentation and media coverage workflows across multiple school events.</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="resume-section">
            <h3 className="resume-section-title">KEY ENGINEERING PROJECTS</h3>

            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-project-name">NAKEM (Undergraduate Thesis - Active R&amp;D)</span>
                <span className="resume-tech">Godot, GDScript, Utility AI, GOAP, Behavior Trees</span>
              </div>
              <p className="resume-project-desc">
                Multi-layered decision-making architecture for culturally grounded behaviors of Philippine mythological creatures, combining utility desires with sequence planning.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-project-name">TindAI (Edge AI for Micro-Retailers)</span>
                <span className="resume-tech">Python, Local LLMs (Qwen), LM Studio, Mobile Prototype</span>
              </div>
              <p className="resume-project-desc">
                100% offline inventory and transaction ledger system for sari-sari stores utilizing quantized local language models for natural language stock and credit queries.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <span className="resume-project-name">GenAI B-Roll Sourcing Pipeline</span>
                <span className="resume-tech">Python, Qwen 35B Local Vision, LM Studio, Pexels API, Asyncio</span>
              </div>
              <p className="resume-project-desc">
                Automated ETL pipeline parsing scripts, retrieving stock media, and scoring video frame relevance locally. Reduced sourcing time by 45-60%.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h3 className="resume-section-title">TECHNICAL TOOLKIT</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Front End:</strong> React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Zustand, Chakra UI, AJAX
              </div>
              <div>
                <strong>Back End and Data:</strong> Node.js, Express.js, MongoDB, Firebase, SQL, PHP, Java, SharePoint Lists, Relational Schema Design, REST APIs, Power BI
              </div>
              <div>
                <strong>AI and Automation:</strong> Python, LLM Integration &amp; APIs (Claude, Gemini, OpenAI), Prompt Engineering, Local LLM Deployment (Qwen via LM Studio), Microsoft Power Apps, Power Automate, Power Fx
              </div>
              <div>
                <strong>Game Development:</strong> C++, C, Unreal Engine 5, Unity 6, Godot Engine, GDScript, Utility AI, GOAP, Behavior Trees, Blueprint Scripting
              </div>
              <div>
                <strong>Tools:</strong> Git &amp; GitHub, VS Code, Figma, Blender, Notion, Linux / Windows CLI
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
