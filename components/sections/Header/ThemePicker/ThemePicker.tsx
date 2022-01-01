import { memo, useState } from 'react';

import Head from 'next/head';

import { Button } from 'reakit/Button';
import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
  PopoverArrow,
} from 'reakit/Popover';

import Icon from '~/components/Icon/Icon';

import styles from './ThemePicker.module.css';
import themes, { Theme } from './themes.const';
import useDynamicFavicon from './useDynamicFavicon';
import usePreferredColorScheme from './usePreferredColorScheme';
import useTheme from './useTheme';

const ThemePicker: React.FC = () => {
  const popover = usePopoverState({
    placement: 'right-start',
    animated: 500,
  });
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    themes[Math.floor(Math.random() * themes.length)],
  );

  useTheme(theme, isDarkMode);
  usePreferredColorScheme(setDarkMode);
  const favicon = useDynamicFavicon(theme);

  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>

      <Button
        title={
          isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
        }
        className={styles.button}
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <Icon
          set="mdi"
          name={isDarkMode ? 'weather-sunny' : 'weather-night'}
        />
      </Button>

      <PopoverDisclosure
        {...popover}
        className={styles.button}
        title="Switch theme color"
      >
        <Icon name="paint-drop-half-twotone" animationDelay={1000} />
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Theme color select popover">
        <div className={styles.popover}>
          <PopoverArrow
            {...popover}
            className={styles['popover-arrow']}
          />
          <span className={styles.title}>Select your theme</span>
          <div className={styles['theme-grid']}>
            {themes.map((t) => {
              const colors = isDarkMode ? t.dark : t.light;
              const primary = colors['primary-bright'];
              const secondary = colors['secondary-bright'];
              return (
                <Button
                  key={t.name}
                  title={t.name}
                  className={styles['theme-button']}
                  style={{
                    background: `
                  linear-gradient(
                    135deg,
                    ${primary} 0%,
                    ${primary} 50%,
                    ${secondary} 50%,
                    ${secondary} 50%
                  )
                `,
                  }}
                  onClick={() => {
                    setTheme(t);
                    setTimeout(popover.hide, 100);
                  }}
                ></Button>
              );
            })}
          </div>
        </div>
      </Popover>
    </>
  );
};

export default memo(ThemePicker);
