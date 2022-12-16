import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import AnimatedIcon from '~/components/icons/AnimatedIcon/AnimatedIcon';
import ArrowDownIcon from '~/components/icons/ArrowDown';
import GitHubIcon from '~/components/icons/GitHub';
import LinkedInIcon from '~/components/icons/LinkedIn';
import TwitterIcon from '~/components/icons/Twitter';
import socials from '~/consts/socials.const';
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

type Props = {
  isNavigationHeaderHidden: boolean;
};

const Header: React.FC<Props> = ({ isNavigationHeaderHidden }) => {
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
        className={classNames(styles.heading, {
          [styles.navigationHeaderHidden]: isNavigationHeaderHidden,
        })}
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
            [styles.caret]:
              isFirstNameTypingComplete && isLastNameTypingComplete,
          })}
          aria-hidden
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
          <a
            title="Twitter"
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <AnimatedIcon animationDelay={5500}>
              <TwitterIcon />
            </AnimatedIcon>
          </a>
          <a
            title="LinkedIn"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <AnimatedIcon animationDelay={4500}>
              <LinkedInIcon />
            </AnimatedIcon>
          </a>
          <a
            title="GitHub"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <AnimatedIcon animationDelay={3500}>
              <GitHubIcon />
            </AnimatedIcon>
          </a>
        </nav>
      </div>

      {isScrollHintVisible && (
        <AnimatedIcon className={styles.scrollDown} aria-hidden>
          <ArrowDownIcon />
        </AnimatedIcon>
      )}

      <WavyBackground />
    </header>
  );
};

export default Header;
