import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const usePreferredColorScheme = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
] => {
  const [isDarkMode, setDarkMode] = useState(false);

  // Initial color scheme
  useEffect(() => {
    const userPrefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )?.matches;
    setDarkMode(userPrefersDarkMode);
  }, [setDarkMode]);

  // Watches for system color scheme changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    const handleSystemThemeChange = (e: MediaQueryListEvent) =>
      setDarkMode(e.matches);

    mediaQueryList.addEventListener(
      'change',
      handleSystemThemeChange,
    );

    return () =>
      mediaQueryList.removeEventListener(
        'change',
        handleSystemThemeChange,
      );
  }, [setDarkMode]);

  return [isDarkMode, setDarkMode];
};

export default usePreferredColorScheme;
