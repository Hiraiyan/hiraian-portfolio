import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import './Header.css';

interface NavLinkItem {
  label: string;
  path: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'EXPERIENCE', path: '/experience' },
  { label: 'SKILLS', path: '/skills' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        {/* Brand */}
        <Link to="/" className="header-brand">
          <span className="brand-badge">RP</span>
          <span className="brand-slash">/</span>
          <span className="brand-name">RYAN PEDEGLORIA</span>
        </Link>

        {/* Primary Page Navigation Bar */}
        <nav className="header-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={location.pathname === '/' ? '#contact' : '/#contact'}
                className="nav-link"
                onClick={handleContactClick}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle (Icons Only) */}
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
