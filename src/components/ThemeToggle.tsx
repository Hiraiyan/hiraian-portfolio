import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeMode } from '../types/portfolio';
import './ThemeToggle.css';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'system', label: 'System', icon: <Laptop size={14} /> },
    { mode: 'light', label: 'Light', icon: <Sun size={14} /> },
    { mode: 'dark', label: 'Dark', icon: <Moon size={14} /> },
  ];

  return (
    <div className="theme-toggle-group" role="radiogroup" aria-label="Theme mode switcher">
      {options.map((opt) => {
        const isActive = theme === opt.mode;
        return (
          <button
            key={opt.mode}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`theme-toggle-btn ${isActive ? 'active' : ''}`}
            onClick={() => setTheme(opt.mode)}
            title={`Switch to ${opt.label} mode`}
            aria-label={`${opt.label} mode`}
          >
            {opt.icon}
          </button>
        );
      })}
    </div>
  );
};
