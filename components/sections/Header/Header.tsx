import { useEffect, useState } from 'react';

import classNames from 'classnames';

import Icon from '~/components/Icon/Icon';
import useTheme from '~/hooks/useTheme';

import styles from './Header.module.css';
import ThemePicker from './ThemePicker/ThemePicker';
import useHeaderTypingEffect from './useHeaderTypingEffect';
import WavyBackground from './WavyBackground/WavyBackground';

const SUBTITLES = [
  'react developer',
  'frontend developer',
  'web developer',
  '.* developer',
  'css enthusiast',
  'bacon lover =)',
];

const Header: React.VFC = () => {
  const { isContrastMode } = useTheme();

  const [isScrollHintVisible, setScrollHintVisible] = useState(false);

  const {
    ref,
    inView,
    firstName,
    lastName,
    subtitle,
    isFirstNameTypingComplete,
    isLastNameTypingComplete,
    isFullNameTypingComplete,
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
    }, 8000);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <header ref={ref} className={styles.header}>
      <h1
        className={styles.heading}
        aria-label="Renato Böhler, frontend developer"
        data-folded={!inView}
      >
        <span
          className={classNames(styles.title, {
            [styles.caret]: !isFirstNameTypingComplete,
          })}
          aria-hidden
        >
          <em className={styles.initial}>{firstName[0]}</em>
          <em
            className={styles.name}
            data-complete={isFullNameTypingComplete}
          >
            {firstName}
          </em>
        </span>

        <span
          className={classNames(styles.title, {
            [styles.caret]:
              isFirstNameTypingComplete && !isLastNameTypingComplete,
          })}
          aria-hidden
        >
          <em className={styles.initial}>{lastName[0]}</em>
          <em
            className={styles.name}
            data-complete={isFullNameTypingComplete}
          >
            {lastName}
          </em>
        </span>

        <span
          className={classNames(styles.subtitle, {
            [styles['subtitle-caret']]:
              isFirstNameTypingComplete && isLastNameTypingComplete,
          })}
          aria-hidden
        >
          {subtitle}
        </span>
      </h1>

      <div
        className={classNames(styles['navigation-header'], {
          [styles['navigation-header-contrast']]: isContrastMode,
        })}
        data-folded={!inView}
      >
        <div className={styles.container}>
          <ThemePicker />
        </div>

        <nav className={styles.container}>
          <a
            title="Twitter"
            href="https://twitter.com/renato_bohler"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <Icon name="twitter-twotone" animationDelay={4000} />
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/renato-b%C3%B6hler-5b2202157/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <Icon name="linkedin" animationDelay={3000} />
          </a>
          <a
            title="GitHub"
            href="https://github.com/renato-bohler/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <Icon name="github-twotone" animationDelay={2000} />
          </a>
        </nav>
      </div>

      <Icon
        name="arrow-small-down"
        className={styles['scroll-down']}
        style={{ display: isScrollHintVisible ? 'block' : 'none' }}
        aria-hidden
      />

      <WavyBackground />
    </header>
  );
};

export default Header;
