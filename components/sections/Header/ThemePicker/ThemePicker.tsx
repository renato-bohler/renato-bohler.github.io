import { memo } from 'react';

import { Button } from 'reakit/Button';
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';

import { AnimatedIcon } from '~/components/icons/AnimatedIcon/AnimatedIcon';
import { DarkIcon } from '~/components/icons/DarkIcon';
import { LightIcon } from '~/components/icons/LightIcon';
import { ThemeIcon } from '~/components/icons/ThemeIcon';
import { themes } from '~/consts/themes.const';
import { useTheme } from '~/hooks/useTheme';

import styles from './ThemePicker.module.css';

const BasePicker: React.FC = () => {
  const {
    colorScheme,
    isContrastMode,
    isReducedMotion,
    setColorScheme,
    setContrastMode,
    setReducedMotion,
    setTheme,
    theme,
  } = useTheme();

  const popover = usePopoverState({
    animated: 500,
    placement: 'bottom-start',
  });

  return (
    <>
      <Button
        className={styles.button}
        onClick={() =>
          setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
        title={
          colorScheme === 'dark'
            ? 'Switch to light mode'
            : 'Switch to dark mode'
        }
      >
        <AnimatedIcon animationDelay={500}>
          {colorScheme === 'dark' ? <DarkIcon /> : <LightIcon />}
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
              const colors = t[colorScheme];
              const primary = colors['primary-bright'];
              const secondary = colors['secondary-bright'];

              return (
                <Button
                  aria-pressed={t.name === theme.name}
                  className={styles.themeButton}
                  key={t.name}
                  onClick={() => setTheme(t)}
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
                  title={t.name}
                />
              );
            })}
          </div>

          <div
            style={{
              background: colorScheme === 'dark' ? 'white' : 'black',
              borderRadius: 'inherit',
              color: colorScheme === 'dark' ? 'black' : 'white',
            }}
          >
            <label className={styles.checkbox}>
              <input
                checked={isContrastMode}
                onChange={(e) => setContrastMode(e.target.checked)}
                type="checkbox"
              />
              Contrast mode
            </label>

            <label className={styles.checkbox}>
              <input
                checked={isReducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                type="checkbox"
              />
              Reduce motion
            </label>
          </div>
        </div>
      </Popover>
    </>
  );
};

export const ThemePicker = memo(BasePicker);
