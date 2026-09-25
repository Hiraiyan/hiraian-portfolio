import React, { useEffect, useState } from 'react';
import './SideDotNav.css';

interface NavSection {
  id: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  { id: 'about', label: 'Ryan' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const SideDotNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-dot-nav" aria-label="Section navigation">
      <div className="dot-nav-line" />
      <ul className="dot-nav-list">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <li key={sec.id} className={`dot-nav-item ${isActive ? 'active' : ''}`}>
              <button
                type="button"
                className="dot-nav-btn"
                onClick={() => scrollTo(sec.id)}
                aria-label={`Scroll to ${sec.label}`}
              >
                <span className="dot-indicator" />
                <span className="dot-label">{sec.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
