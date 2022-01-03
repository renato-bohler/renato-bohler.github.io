import { useEffect } from 'react';

import { Theme } from '../../consts/themes.const';

const useThemeApply = (theme: Theme, isDarkMode: boolean): void => {
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
  }, [theme, isDarkMode]);
};

export default useThemeApply;
