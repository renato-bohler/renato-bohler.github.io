import { CSSProperties, useEffect, useRef, useState } from 'react';

import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import experiences from './experiences.const';
import ExperienceVectors from './ExperienceVectors/ExperienceVectors';

const Experience: React.FC = () => {
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

      <div id="experience" aria-hidden className={styles.anchor} />

      <h2 className={styles.title}>Experience</h2>

      <div ref={containerRef} className={styles.transitionContainer}>
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
            key={experience.id}
            title={experience.title}
            company={experience.company}
            period={experience.period}
          >
            {experience.description}
          </ExperienceCard>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
