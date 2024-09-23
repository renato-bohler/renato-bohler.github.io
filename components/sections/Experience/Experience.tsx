import { ExperienceCard } from './ExperienceCard/ExperienceCard';
import { ExperienceVectors } from './ExperienceVectors/ExperienceVectors';
import { experiences } from './experiences.const';

import styles from './Experience.module.css';

export const Experience = () => (
  <section className={styles.section}>
    <ExperienceVectors />

    <div aria-hidden className={styles.anchor} id="experience" />

    <h2 className={styles.title}>Experience</h2>

    <div className={styles.transitionContainer}>
      <div className={styles.transitionOverflow}>
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
