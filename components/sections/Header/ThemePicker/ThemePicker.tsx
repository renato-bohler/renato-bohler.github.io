import { memo } from 'react';

import { useMediaQuery } from 'react-responsive';
import { Button } from 'reakit/Button';
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';

import AnimatedIcon from '~/components/icons/AnimatedIcon/AnimatedIcon';
import DarkIcon from '~/components/icons/Dark';
import LightIcon from '~/components/icons/Light';
import ThemeIcon from '~/components/icons/Theme';
import themes from '~/consts/themes.const';
import useFirstMount from '~/hooks/useFirstMount';
import useTheme from '~/hooks/useTheme';

import styles from './ThemePicker.module.css';

const ThemePicker: React.FC = () => {
  const {
    theme,
    setTheme,
    isDarkMode,
    setDarkMode,
    isContrastMode,
    setContrastMode,
    isReducedMotion,
    setReducedMotion,
  } = useTheme();

  const isFirstMount = useFirstMount();

  const isMobile = useMediaQuery({
    query: '(max-width: 550px)',
  });
  const popover = usePopoverState({
    placement: isMobile ? 'bottom-start' : 'right-start',
    animated: 500,
  });

  return (
    <>
      <Button
        title={
          isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
        }
        className={styles.button}
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <AnimatedIcon animationDelay={500}>
          {isDarkMode ? <DarkIcon /> : <LightIcon />}
        </AnimatedIcon>
      </Button>

      <PopoverDisclosure
        {...popover}
        className={styles.button}
        title="Switch theme color"
      >
        <AnimatedIcon animationDelay={1000}>
          <ThemeIcon />
        </AnimatedIcon>
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Theme color select popover">
        <div className={styles.popover}>
          <PopoverArrow
            {...popover}
            className={styles.popoverArrow}
          />
          <span className={styles.title}>Select your theme</span>
          <div className={styles.themeGrid}>
            {themes.map((t) => {
              const colors = isDarkMode ? t.dark : t.light;
              const primary = colors['primary-bright'];
              const secondary = colors['secondary-bright'];

              return (
                <Button
                  key={t.name}
                  title={t.name}
                  className={styles.themeButton}
                  aria-pressed={
                    !isFirstMount && t.name === theme.name
                  }
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
                  onClick={() => setTheme(t)}
                />
              );
            })}
          </div>

          <div
            style={{
              background: isDarkMode ? 'white' : 'black',
              color: isDarkMode ? 'black' : 'white',
              borderRadius: 'inherit',
            }}
          >
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={isContrastMode}
                onChange={(e) => setContrastMode(e.target.checked)}
              />
              Contrast mode
            </label>

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={isReducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
              />
              Reduce motion
            </label>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default memo(ThemePicker);
