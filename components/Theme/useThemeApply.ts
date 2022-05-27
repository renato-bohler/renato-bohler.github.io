import { useEffect } from 'react';

import { Theme } from '../../consts/themes.const';

const useThemeApply = (
  theme: Theme,
  isDarkMode: boolean,
  isReducedMotion: boolean,
): void => {
  useEffect(() => {
    const selectedTheme = isDarkMode ? theme.dark : theme.light;

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
  }, [theme, isDarkMode, isReducedMotion]);
};

export default useThemeApply;
