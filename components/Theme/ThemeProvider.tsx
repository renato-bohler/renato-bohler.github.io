import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';

import Head from 'next/head';

import themes, { contrast, Theme } from '~/consts/themes.const';

import useDynamicFavicon from './useDynamicFavicon';
import usePreferredColorScheme from './usePreferredColorScheme';
import usePreferredContrast from './usePreferredContrast';
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
};

const ThemeContext = createContext<ThemeContextType>({
  theme: RANDOM_THEME,
  setTheme: () => {},
  isDarkMode: false,
  setDarkMode: () => {},
  isContrastMode: false,
  setContrastMode: () => {},
});

export const ThemeProvider: React.FC = (props) => {
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
  useThemeApply(theme, isDarkMode);
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
  };

  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>

      <ThemeContext.Provider value={context}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContext;
