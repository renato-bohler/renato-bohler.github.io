import { themes, type Theme } from '~/consts/themes.const';

import { type ColorScheme } from '../ThemeProvider';

const THEME_KEY = 'theme';

export const getStoredTheme = () => {
  if (typeof localStorage === 'undefined') return null;

  const themeName = localStorage.getItem(THEME_KEY);
  if (!themeName) return null;
  return themes.find((theme) => theme.name === themeName);
};

export const setStoredTheme = (theme: Theme) =>
  localStorage.setItem(THEME_KEY, theme.name);

const COLOR_SCHEME_KEY = 'dark_mode';

export const getStoredColorScheme = () => {
  if (typeof localStorage === 'undefined') return null;

  return localStorage.getItem(COLOR_SCHEME_KEY) as ColorScheme;
};

export const setStoredColorScheme = (colorScheme: ColorScheme) => {
  if (typeof localStorage === 'undefined') return null;

  return localStorage.setItem(COLOR_SCHEME_KEY, colorScheme);
};
