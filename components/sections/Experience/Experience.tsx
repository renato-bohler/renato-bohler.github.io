import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import experiences from './experiences.const';
import ExperienceVectors from './ExperienceVectors/ExperienceVectors';

const Experience: React.FC = () => (
  <section className={styles.section}>
    <ExperienceVectors />

    <div id="experience" aria-hidden className={styles.anchor} />

    <h2 className={styles.title}>Experience</h2>

    <div className={styles.transitionContainer}>
      <div className={styles.transitionOverflow}>
        <div className={styles.transitionLine} />
      </div>
    </div>

    <ul className={styles.timeline}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          title={experience.title}
          jobTitle={experience.jobTitle}
          company={experience.company}
          consultant={experience.consultant}
          period={experience.period}
        >
          {experience.description}
        </ExperienceCard>
      ))}
    </ul>
  </section>
);

export default Experience;
