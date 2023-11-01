import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import Head from 'next/head';

import themes, { Theme, contrast } from '~/consts/themes.const';

import useDynamicFavicon from './useDynamicFavicon';
import usePreferredContrast from './usePreferredContrast';
import usePreferredMotion from './usePreferredMotion';
import useThemeApply from './useThemeApply';

const RANDOM_THEME =
  themes[Math.floor(Math.random() * themes.length)];

export type ThemeContextType = {
  isContrastMode: boolean;
  isDarkMode: boolean;
  isReducedMotion: boolean;
  setContrastMode: (value: boolean) => void;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setReducedMotion: (value: boolean) => void;
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  isContrastMode: false,
  isDarkMode: true,
  isReducedMotion: false,
  setContrastMode: () => {},
  setDarkMode: () => {},
  setReducedMotion: () => {},
  setTheme: () => {},
  theme: RANDOM_THEME,
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

  const [isDarkMode, setDarkMode] = useState(true);
  const isContrastMode = usePreferredContrast(theme, setContrastMode);
  const [isReducedMotion, setReducedMotion] = usePreferredMotion();
  useThemeApply(theme, isDarkMode, isReducedMotion);
  const favicon = useDynamicFavicon(theme);

  useEffect(() => {
    if (isContrastMode) setTheme(contrast);
  }, [isContrastMode]);

  const context = {
    isContrastMode,
    isDarkMode,
    isReducedMotion,
    setContrastMode,
    setDarkMode,
    setReducedMotion,
    setTheme,
    theme,
  };

  return (
    <>
      <Head>
        <link href={favicon} rel="icon" />
      </Head>

      <ThemeContext.Provider value={context}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContext;
