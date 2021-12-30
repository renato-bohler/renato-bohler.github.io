import { RefObject } from 'react';

import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { useMediaQuery } from 'react-responsive';
import { Tabbable } from 'reakit/Tabbable';

import styles from './About.module.css';

type Props = {
  firstRef: RefObject<HTMLHeadingElement>;
};

const age = Math.floor(
  (new Date().getTime() - new Date('June 6, 1992').getTime()) /
    (1000 * 60 * 60 * 24 * 365),
);

const About: React.VFC<Props> = ({ firstRef }) => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });

  const { ref: pictureRef, inView: pictureInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.scroll}>
      <div className={styles.about}>
        <div
          className={styles.picture}
          {...(pictureInView ? { 'data-enter': '' } : {})}
        >
          <Tabbable
            as="h2"
            className={styles.greeting}
            ref={firstRef}
          >
            Hello world!
          </Tabbable>
          <Tilt className={styles.tilt}>
            <img
              src="/images/me.webp"
              loading="lazy"
              alt="A picture of a smiley Renato"
              className={styles.image}
            />
          </Tilt>
          {isTabletOrMobile && (
            <div
              ref={pictureRef}
              className={styles['picture-trigger']}
              aria-hidden="true"
            />
          )}
        </div>

        <div
          className={styles.content}
          {...(contentInView ? { 'data-enter': '' } : {})}
        >
          <Tabbable as="p">
            Hi, I am <strong>Renato Böhler</strong>, {age} years old,
            a Brazilian computer engineer, addicted to soccer, video
            games, and coding.
          </Tabbable>
          <Tabbable as="p">
            I started my journey as a developer very young, at the age
            of 12. At that time, I began learning some basic concepts
            of programming by myself. Before entering Computer
            Engineering school, I attended a few years of Chemical
            Engineering. At the age of 24, I had my first experience
            as a professional developer. Since then, I&apos;ve been
            learning a lot, both professionally and personally.
          </Tabbable>
          <Tabbable as="p">
            I love what I do, and I like to work with people that are
            also passionate about what they do. I feel very
            comfortable when working in relaxed environments. I do,
            though, make a point on professionalism, respect, honesty,
            and compromise. I consider myself a pretty easy guy to
            work with. I like making things simpler for people around
            me, and I&apos;m always more than happy to help whoever I
            can.
          </Tabbable>
          <Tabbable as="p">
            These last couple of years, I&apos;ve been focusing my
            career on frontend development, mainly on{' '}
            <strong>React</strong>, which I&apos;m more enthusiastic
            about.
          </Tabbable>
          {isTabletOrMobile && (
            <div
              ref={contentRef}
              className={styles['content-trigger']}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      {!isTabletOrMobile && (
        <>
          <div
            ref={pictureRef}
            className={styles['picture-trigger']}
            aria-hidden="true"
          />
          <div
            ref={contentRef}
            className={styles['content-trigger']}
            aria-hidden="true"
          />
        </>
      )}
    </section>
  );
};

export default About;
