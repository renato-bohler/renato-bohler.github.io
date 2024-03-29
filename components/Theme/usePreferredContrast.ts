import { useEffect } from 'react';

import { contrast, type Theme } from '~/consts/themes.const';

export const usePreferredContrast = (
  theme: Theme,
  setContrastMode: (value: boolean) => void,
): boolean => {
  // Initial contrast preferences
  useEffect(() => {
    const userPrefersContrastMode = window.matchMedia(
      '(prefers-contrast: more)',
    )?.matches;
    setContrastMode(userPrefersContrastMode);
  }, [setContrastMode]);

  // Watches for system contrast preferences changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-contrast: more)',
    );
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) =>
      setContrastMode(e.matches);

    mediaQueryList.addEventListener(
      'change',
      handleSystemPreferenceChange,
    );

    return () =>
      mediaQueryList.removeEventListener(
        'change',
        handleSystemPreferenceChange,
      );
  }, [setContrastMode]);

  return theme.name === contrast.name;
};
