import {
  createContext,
  useState,
  type FC,
  type ReactNode,
} from 'react';

import Head from 'next/head';

import { contrast, themes, type Theme } from '~/consts/themes.const';

import { useDynamicFavicon } from './useDynamicFavicon';
import { usePreferredContrast } from './usePreferredContrast';
import { usePreferredMotion } from './usePreferredMotion';
import { useThemeApply } from './useThemeApply';
import {
  getStoredColorScheme,
  getStoredTheme,
  setStoredColorScheme,
  setStoredTheme,
} from './utils/themeStorage';

const RANDOM_THEME =
  themes[Math.floor(Math.random() * themes.length)];

const MINIMUM_DURATION = '1ms';

export type ColorScheme = 'dark' | 'light';

export type ThemeContextType = {
  colorScheme: ColorScheme;
  getReducedMotionDuration: (duration: string) => string;
  isContrastMode: boolean;
  isReducedMotion: boolean;
  setColorScheme: (colorScheme: ColorScheme) => void;
  setContrastMode: (value: boolean) => void;
  setReducedMotion: (value: boolean) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  colorScheme: 'dark',
  getReducedMotionDuration: () => MINIMUM_DURATION,
  isContrastMode: false,
  isReducedMotion: false,
  setColorScheme: () => {},
  setContrastMode: () => {},
  setReducedMotion: () => {},
  setTheme: () => {},
  theme: RANDOM_THEME,
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    getStoredTheme() || RANDOM_THEME,
  );
  const [lastTheme, setLastTheme] = useState(theme);

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    getStoredColorScheme() || 'dark',
  );

  const [isContrastMode, setContrastMode] = usePreferredContrast({
    onChangeSystemPreference: (isContrastMode) => {
      if (isContrastMode) {
        setLastTheme(theme);
        setTheme(contrast);
      } else if (theme === contrast) {
        setTheme(lastTheme);
      }
    },
  });
  const [isReducedMotion, setReducedMotion] = usePreferredMotion();

  useThemeApply(theme, colorScheme, isReducedMotion);

  const favicon = useDynamicFavicon(theme);
  const getReducedMotionDuration = (duration: string) =>
    isReducedMotion ? MINIMUM_DURATION : duration;

  const context = {
    colorScheme,
    getReducedMotionDuration,
    isContrastMode,
    isReducedMotion,
    setColorScheme: (colorScheme: ColorScheme) => {
      setStoredColorScheme(colorScheme);
      setColorScheme(colorScheme);
    },
    setContrastMode: (value: boolean) => {
      setContrastMode(value);
      if (value) {
        setLastTheme(theme);
        setTheme(contrast);
      } else {
        setTheme(lastTheme);
      }
    },
    setReducedMotion,
    setTheme: (theme: Theme) => {
      setStoredTheme(theme);
      setTheme(theme);
      setContrastMode(theme === contrast);
    },
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
