import React from 'react';
import lightTheme from './light';
import darkTheme from './dark';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const themes = {
  [THEMES.LIGHT]: lightTheme,
  [THEMES.DARK]: darkTheme,
};

const ThemeContextP = React.createContext();

export {ThemeContextP, THEMES, themes};
