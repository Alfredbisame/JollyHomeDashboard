'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ColorScheme = 'green' | 'blue' | 'purple' | 'orange';
type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  colorScheme: ColorScheme;
  theme: Theme;
  setColorScheme: (scheme: ColorScheme) => void;
  setTheme: (theme: Theme) => void;
  saveTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('green');
  const [theme, setTheme] = useState<Theme>('auto');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme;
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedColorScheme) setColorScheme(savedColorScheme);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const saveTheme = () => {
    localStorage.setItem('colorScheme', colorScheme);
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove existing color scheme classes
    root.classList.remove('theme-green', 'theme-blue', 'theme-purple', 'theme-orange');
    root.classList.add(`theme-${colorScheme}`);
    
    // Apply theme
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      // Auto theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
    
    // Trigger a custom event to notify components of theme change
    window.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { colorScheme, theme } 
    }));
  };

  return (
    <ThemeContext.Provider value={{
      colorScheme,
      theme,
      setColorScheme,
      setTheme,
      saveTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}