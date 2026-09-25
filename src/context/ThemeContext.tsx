import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types/portfolio';

interface ThemeContextValue {
  theme: ThemeMode;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'rp_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === 'dark' || stored === 'light' || stored === 'system') {
        return stored;
      }
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const computeResolvedTheme = (currentTheme: ThemeMode): 'dark' | 'light' => {
      if (currentTheme === 'system') {
        return mediaQuery.matches ? 'dark' : 'light';
      }
      return currentTheme;
    };

    const activeTheme = computeResolvedTheme(theme);
    setResolvedTheme(activeTheme);
    document.documentElement.setAttribute('data-theme', activeTheme);

    const handleSystemChange = () => {
      if (theme === 'system') {
        const nextTheme = mediaQuery.matches ? 'dark' : 'light';
        setResolvedTheme(nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
