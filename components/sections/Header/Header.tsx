import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import classNames from 'classnames';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import { AnimatedIcon } from '~/components/icons/AnimatedIcon/AnimatedIcon';
import { ArrowDownIcon } from '~/components/icons/ArrowDownIcon';
import { useTheme } from '~/hooks/useTheme';

import { SocialLinks } from './SocialLinks/SocialLinks';
import { WavyBackground } from './WavyBackground/WavyBackground';
import { useHeaderTypingEffect } from './useHeaderTypingEffect';

import styles from './Header.module.css';

const SUBTITLES = [
  'frontend developer',
  'react developer',
  'web developer',
  '.* developer',
  'css enthusiast',
  'bacon lover =)',
];

type Props = {
  isNavigationHeaderHidden: boolean;
  onEmailDialogOpen: () => void;
};

// TODO(renato): leave as default?
const ThemePicker = dynamic(
  () =>
    import('./ThemePicker/ThemePicker').then(
      ({ ThemePicker }) => ThemePicker,
    ),
  { ssr: false },
);

export const Header: React.FC<Props> = ({
  isNavigationHeaderHidden,
  onEmailDialogOpen,
}) => {
  const { isContrastMode } = useTheme();

  const [isScrollHintVisible, setScrollHintVisible] = useState(false);

  const {
    firstName,
    inView,
    isFirstNameTypingComplete,
    isFullNameTypingComplete,
    isLastNameTypingComplete,
    isSubtitleTypingComplete,
    lastName,
    ref,
    subtitle,
  } = useHeaderTypingEffect({
    firstName: 'renato',
    lastName: 'Böhler',
    subtitles: SUBTITLES,
  });

  useEffect(() => {
    if (!inView) {
      setScrollHintVisible(false);
      return;
    }

    const timeout = setTimeout(() => {
      setScrollHintVisible(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <header className={styles.header} ref={ref}>
      <h1
        className={classNames(styles.heading, {
          [styles.navigationHeaderHidden]: isNavigationHeaderHidden,
        })}
        data-complete={
          isFullNameTypingComplete && isSubtitleTypingComplete
        }
        data-folded={!inView}
      >
        <span
          aria-hidden
          className={classNames(styles.title, {
            [styles.caret]: !isFirstNameTypingComplete,
          })}
        >
          <a
            className={styles.initial}
            href="#"
            title="Scroll back to top"
          >
            {firstName[0]}
          </a>
          <em
            className={styles.name}
            data-complete={isFullNameTypingComplete}
          >
            {firstName}
          </em>
        </span>

        <span
          aria-hidden
          className={classNames(styles.title, {
            [styles.caret]:
              isFirstNameTypingComplete && !isLastNameTypingComplete,
          })}
        >
          <a
            className={styles.initial}
            href="#"
            title="Scroll back to top"
          >
            {lastName[0]}
          </a>
          <em
            className={styles.name}
            data-complete={isFullNameTypingComplete}
          >
            {lastName}
          </em>
        </span>

        <span
          aria-hidden
          className={classNames(styles.subtitle, {
            [styles.caret]:
              isFirstNameTypingComplete && isLastNameTypingComplete,
          })}
        >
          {subtitle}
        </span>

        <VisuallyHidden>
          Renato Böhler, frontend developer
        </VisuallyHidden>
      </h1>

      <div
        className={classNames(styles.navigationHeader, {
          [styles.navigationHeaderContrast]: isContrastMode,
          [styles.navigationHeaderHidden]: isNavigationHeaderHidden,
        })}
        data-folded={!inView}
      >
        <div className={styles.container}>
          <ThemePicker />
        </div>

        <nav className={styles.container}>
          <SocialLinks onEmailDialogOpen={onEmailDialogOpen} />
        </nav>
      </div>

      {isScrollHintVisible && (
        <div className={styles.scrollDown}>
          <AnimatedIcon aria-hidden className={styles.scrollDownIcon}>
            <ArrowDownIcon />
          </AnimatedIcon>
          <span className={styles.scrollDownLabel}>Scroll down</span>
        </div>
      )}

      <WavyBackground />
    </header>
  );
};
