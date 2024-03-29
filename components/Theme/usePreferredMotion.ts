import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const usePreferredMotion = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
] => {
  const [isReducedMotion, setReducedMotion] = useState(false);

  // Initial motion preferences
  useEffect(() => {
    const userPrefersContrastMode = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )?.matches;
    setReducedMotion(userPrefersContrastMode);
  }, [setReducedMotion]);

  // Watches for system motion preferences changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);

    mediaQueryList.addEventListener(
      'change',
      handleSystemPreferenceChange,
    );

    return () =>
      mediaQueryList.removeEventListener(
        'change',
        handleSystemPreferenceChange,
      );
  }, [setReducedMotion]);

  return [isReducedMotion, setReducedMotion];
};
