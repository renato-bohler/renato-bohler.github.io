import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import { experiences } from './experiences.const';
import { ExperienceVectors } from './ExperienceVectors/ExperienceVectors';

import styles from './Experience.module.css';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      if (!containerRef.current) return;
      const windowBottomY =
        document.documentElement.scrollTop + window.innerHeight;
      const targetHeight = containerRef.current.clientHeight;
      const targetY = containerRef.current.offsetTop;

      const percentage = Math.min(
        1,
        (windowBottomY - targetY) / targetHeight,
      );

      setProgress(Math.max(0, percentage));
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () =>
      document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <section className={styles.section}>
      <ExperienceVectors />

      <div aria-hidden className={styles.anchor} id="experience" />

      <h2 className={styles.title}>Experience</h2>

      <div className={styles.transitionContainer} ref={containerRef}>
        <div
          className={styles.transitionOverflow}
          style={{ '--scroll': `${progress}` } as CSSProperties}
        >
          <div className={styles.transitionLine} />
        </div>
      </div>

      <ul className={styles.timeline}>
        {experiences.map((experience) => (
          <ExperienceCard
            company={experience.company}
            consultant={experience.consultant}
            jobTitle={experience.jobTitle}
            key={experience.id}
            period={experience.period}
            title={experience.title}
          >
            {experience.description}
          </ExperienceCard>
        ))}
      </ul>
    </section>
  );
};
