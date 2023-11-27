import { useEffect } from 'react';

import { Theme } from '../../consts/themes.const';

import { ColorScheme } from './ThemeProvider';

const useThemeApply = (
  theme: Theme,
  colorScheme: ColorScheme,
  isReducedMotion: boolean,
): void => {
  useEffect(() => {
    const selectedTheme =
      colorScheme === 'dark' ? theme.dark : theme.light;

    const properties = Object.keys(selectedTheme) as Array<
      keyof typeof selectedTheme
    >;
    properties.forEach((property) => {
      document.documentElement.style.setProperty(
        `--theme-${property}`,
        selectedTheme[property],
      );
    });

    document.documentElement.setAttribute(
      'data-reduced-motion',
      `${isReducedMotion}`,
    );

    document.documentElement.style.colorScheme = colorScheme;
  }, [theme, colorScheme, isReducedMotion]);
};

export default useThemeApply;
