import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from 'react-responsive';

import useTypingEffect from '~/hooks/useTypingEffect';

import styles from './About.module.css';

const age = Math.floor(
  (new Date().getTime() - new Date('June 6, 1992').getTime()) /
    (1000 * 60 * 60 * 24 * 365),
);

const About: React.VFC = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });

  const [pictureRef, pictureInView] = useInView({
    triggerOnce: true,
  });
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
  });

  const greeting = useTypingEffect({
    targetText: pictureInView ? 'hello, world!' : '',
    startDelayMs: 2000,
  });

  return (
    <section
      className={styles.scroll}
      id={isTabletOrMobile ? 'about' : ''}
    >
      <div className={styles.about}>
        <div
          className={styles.picture}
          {...(pictureInView ? { 'data-enter': '' } : {})}
        >
          <h2 className={styles.greeting} aria-label="Hello, world!">
            {`>${greeting}`}
          </h2>
          <Tilt className={styles.tilt}>
            <picture className={styles.image}>
              <source
                srcSet="/images/me/full.webp"
                media="(min-width: 1921px)"
              />
              <source
                srcSet="/images/me/full.webp"
                media="(min-height: 1500px)"
              />
              <source
                srcSet="/images/me/300.webp"
                media="(max-width: 360px)"
              />
              <source
                srcSet="/images/me/475.webp"
                media="(max-width: 600px)"
              />
              <source
                srcSet="/images/me/660.webp"
                media="(max-width: 1024px)"
              />
              <source
                srcSet="/images/me/550.webp"
                media="(max-width: 1920px)"
              />
              <img
                src="/images/me/300.webp"
                alt="A smiley Renato"
                loading="lazy"
              />
            </picture>
          </Tilt>
          {isTabletOrMobile && (
            <div
              ref={pictureRef}
              className={styles['picture-trigger']}
              aria-hidden
            />
          )}
        </div>

        <div
          className={styles.content}
          {...(contentInView ? { 'data-enter': '' } : {})}
        >
          <p>
            Hi, I am <strong>Renato Böhler</strong>, {age} years old,
            a Brazilian computer engineer, addicted to soccer, video
            games, and coding.
          </p>
          <p>
            I started my journey as a developer very young, at the age
            of 12. At that time, I began learning some basic concepts
            of programming by myself. Before entering Computer
            Engineering school, I attended a few years of Chemical
            Engineering. At the age of 24, I had my first experience
            as a professional developer. Since then, I&apos;ve been
            learning a lot, both professionally and personally.
          </p>
          <p>
            I love what I do, and I like to work with people that are
            also passionate about what they do. I feel very
            comfortable when working in relaxed environments. I do,
            though, make a point on professionalism, respect, honesty,
            and compromise. I consider myself a pretty easy guy to
            work with. I like making things simpler for people around
            me, and I&apos;m always more than happy to help whoever I
            can.
          </p>
          <p>
            These last couple of years, I&apos;ve been focusing my
            career on frontend development, mainly on{' '}
            <strong>React</strong>, which I&apos;m more enthusiastic
            about.
          </p>
          {isTabletOrMobile && (
            <div
              ref={contentRef}
              className={styles['content-trigger']}
              aria-hidden
            />
          )}
        </div>
      </div>

      {!isTabletOrMobile && (
        <>
          <div
            ref={pictureRef}
            className={styles['picture-trigger']}
            aria-hidden
          />
          <div
            ref={contentRef}
            className={styles['content-trigger']}
            aria-hidden
          />
          <div id="about" aria-hidden />
        </>
      )}
    </section>
  );
};

export default About;
