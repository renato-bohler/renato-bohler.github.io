import { useEffect, useState } from 'react';

import classNames from 'classnames';

import Icon from '~/components/Icon/Icon';

import styles from './Header.module.css';
import ThemePicker from './ThemePicker/ThemePicker';
import useTypingEffect from './useTypingEffect';
import WavyBackground from './WavyBackground/WavyBackground';

const Header: React.VFC = () => {
  const [isScrollHintVisible, setScrollHintVisible] = useState(false);

  const {
    ref,
    inView,
    firstName,
    lastName,
    subtitle,
    isNameTypingComplete,
    isLastNameTypingComplete,
  } = useTypingEffect({
    firstName: 'renato',
    lastName: 'Böhler',
    startDelayMs: 1000,
    changeSubtitleDelayMs: 3000,
    keyStrokeMinTimeMs: 50,
    keyStrokeMaxVarianceMs: 70,
    subtitles: [
      'react developer',
      'frontend developer',
      'web developer',
      '.* developer',
      'css enthusiast',
      'bacon lover =)',
    ],
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

  const dataFolded = inView ? {} : { 'data-folded': 'true' };

  return (
    <header ref={ref} className={styles.header}>
      <h1
        className={styles.heading}
        aria-label="Renato Böhler, frontend developer"
        {...dataFolded}
      >
        <span
          className={classNames(styles.title, {
            [styles.caret]: !isNameTypingComplete,
          })}
          aria-hidden
        >
          <em className={styles.initial}>{firstName[0]}</em>
          <em className={styles.name}>{firstName}</em>
        </span>

        <span
          className={classNames(styles.title, {
            [styles.caret]:
              isNameTypingComplete && !isLastNameTypingComplete,
          })}
          aria-hidden
        >
          <em className={styles.initial}>{lastName[0]}</em>
          <em className={styles.name}>{lastName}</em>
        </span>

        <span
          className={classNames(styles.subtitle, {
            [styles['subtitle-caret']]:
              isNameTypingComplete && isLastNameTypingComplete,
          })}
          aria-hidden
        >
          {subtitle}
        </span>
      </h1>

      <div className={styles['navigation-header']} {...dataFolded}>
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

      <WavyBackground waves={20} />
    </header>
  );
};

export default Header;