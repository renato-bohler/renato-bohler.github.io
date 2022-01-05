import { memo } from 'react';

import { useMediaQuery } from 'react-responsive';
import { Button } from 'reakit/Button';
import {
  usePopoverState,
  Popover,
  PopoverDisclosure,
  PopoverArrow,
} from 'reakit/Popover';

import Icon from '~/components/Icon/Icon';
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
                ></Button>
              );
            })}
          </div>

          <label
            className={styles.checkbox}
            style={{
              background: isDarkMode ? 'white' : 'black',
              color: isDarkMode ? 'black' : 'white',
            }}
          >
            <input
              type="checkbox"
              checked={isContrastMode}
              onChange={(e) => setContrastMode(e.target.checked)}
            />
            High contrast mode
          </label>
        </div>
      </Popover>
    </>
  );
};

export default memo(ThemePicker);
