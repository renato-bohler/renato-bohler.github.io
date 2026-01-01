import {
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

export const usePreferredMotion = (): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
] => {
  const [isReducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;
  });

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
