import { useCallback, useEffect, useState } from 'react';

type Options = {
  onChangeSystemPreference?: (isPreferredContrast: boolean) => void;
};

export const usePreferredContrast = ({
  onChangeSystemPreference,
}: Options): [boolean, (value: boolean) => void] => {
  const [isPreferredContrast, setPreferredContrast] = useState(() => {
    if (typeof window === 'undefined') return false;

    const { matches } = window.matchMedia('(prefers-contrast: more)');
    onChangeSystemPreference?.(matches);
    return matches;
  });

  const setSystemPreference = useCallback(
    (value: boolean) => {
      setPreferredContrast(value);
      onChangeSystemPreference?.(value);
    },
    [onChangeSystemPreference],
  );

  // Watches for system contrast preferences changes
  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-contrast: more)',
    );
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) =>
      setSystemPreference(e.matches);

    mediaQueryList.addEventListener(
      'change',
      handleSystemPreferenceChange,
    );

    return () =>
      mediaQueryList.removeEventListener(
        'change',
        handleSystemPreferenceChange,
      );
  }, [setSystemPreference]);

  return [isPreferredContrast, setPreferredContrast];
};
