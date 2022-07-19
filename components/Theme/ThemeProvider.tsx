import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';

import themes, { contrast, Theme } from '~/consts/themes.const';

import useDynamicFavicon from './useDynamicFavicon';
import usePreferredColorScheme from './usePreferredColorScheme';
import usePreferredContrast from './usePreferredContrast';
import usePreferredMotion from './usePreferredMotion';
import useThemeApply from './useThemeApply';

const RANDOM_THEME =
  themes[Math.floor(Math.random() * themes.length)];

export type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  isContrastMode: boolean;
  setContrastMode: (value: boolean) => void;
  isReducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: RANDOM_THEME,
  setTheme: () => {},
  isDarkMode: false,
  setDarkMode: () => {},
  isContrastMode: false,
  setContrastMode: () => {},
  isReducedMotion: false,
  setReducedMotion: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(RANDOM_THEME);
  const [lastTheme, setLastTheme] = useState(theme);

  useEffect(() => {
    if (theme.name === contrast.name) return;
    setLastTheme(theme);
  }, [theme]);

  const setContrastMode = useCallback(
    (value: boolean) => {
      if (value) setTheme(contrast);
      else setTheme(lastTheme);
    },
    [lastTheme],
  );

  const [isDarkMode, setDarkMode] = usePreferredColorScheme();
  const isContrastMode = usePreferredContrast(theme, setContrastMode);
  const [isReducedMotion, setReducedMotion] = usePreferredMotion();
  useThemeApply(theme, isDarkMode, isReducedMotion);
  const favicon = useDynamicFavicon(theme);

  useEffect(() => {
    if (isContrastMode) setTheme(contrast);
  }, [isContrastMode]);

  const context = {
    theme,
    setTheme,
    isDarkMode,
    setDarkMode,
    isContrastMode,
    setContrastMode,
    isReducedMotion,
    setReducedMotion,
  };

  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>

      <ThemeContext.Provider value={context}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContext;
