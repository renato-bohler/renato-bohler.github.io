import { themes, type Theme } from '~/consts/themes.const';

import { type ColorScheme } from '../ThemeProvider';

const THEME_KEY = 'theme';

export const getStoredTheme = (): Theme | undefined => {
  if (typeof window === 'undefined') return;

  const themeName = localStorage.getItem(THEME_KEY);
  if (!themeName) return;
  return themes.find((theme) => theme.name === themeName);
};

export const setStoredTheme = (theme: Theme): void =>
  localStorage.setItem(THEME_KEY, theme.name);

const COLOR_SCHEME_KEY = 'dark_mode';

export const getStoredColorScheme = (): ColorScheme | null => {
  if (typeof window === 'undefined') return null;

  return localStorage.getItem(COLOR_SCHEME_KEY) as ColorScheme;
};

export const setStoredColorScheme = (
  colorScheme: ColorScheme,
): void => {
  if (typeof window === 'undefined') return;

  return localStorage.setItem(COLOR_SCHEME_KEY, colorScheme);
};
