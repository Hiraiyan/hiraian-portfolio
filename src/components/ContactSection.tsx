import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import './ContactSection.css';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  return (
    <footer id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="section-prefix contact-prefix">
          <span>05</span>
          <span className="prefix-slash">/</span>
          <span>CONTACT</span>
        </div>

        {/* Sleek single-row contact bar directly mirroring final-ui-draft.png */}
        <div className="contact-bar">
          <a
            href="mailto:pedegloria.rj@gmail.com"
            className="contact-item"
            title="Email Ryan James Pedegloria"
          >
            <Mail size={18} className="contact-item-icon orange-icon" />
            <span className="contact-item-text">pedegloria.rj@gmail.com</span>
          </a>

          <div className="contact-divider" />

          <a
            href="https://github.com/Hiraiyan"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="Visit GitHub Profile"
          >
            <Github size={18} className="contact-item-icon" />
            <span className="contact-item-text">GitHub</span>
          </a>

          <div className="contact-divider" />

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            title="Connect on LinkedIn"
          >
            <Linkedin size={18} className="contact-item-icon" />
            <span className="contact-item-text">LinkedIn</span>
          </a>

          <div className="contact-divider" />

          <button
            type="button"
            className="contact-item contact-btn-action"
            onClick={onOpenResume}
            title="View & Download Résumé"
          >
            <FileText size={18} className="contact-item-icon" />
            <span className="contact-item-text">Résumé (PDF)</span>
          </button>
        </div>

        <div className="site-footer-bottom">
          <p className="footer-copyright">
            © 2026 Ryan James Pedegloria. Built with React &amp; Vite. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
};
