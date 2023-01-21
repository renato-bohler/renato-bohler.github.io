import { useInView } from 'react-intersection-observer';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import useTheme from '~/hooks/useTheme';

import SkillCard from './SkillCard/SkillCard';
import SkillFeedbacks from './SkillFeedbacks/SkillFeedbacks';
import skills, { getColors } from './skills.const';
import styles from './Skills.module.css';

const HEADER = 'skills';

const Skills: React.FC = () => {
  const { isContrastMode } = useTheme();

  const { ref, entry } = useInView({
    threshold: Array.from(`${HEADER} `).map(
      (_, i) => i / HEADER.length,
    ),
    rootMargin: '100% 0% -25% 0%',
  });

  const currentCharacterIndex = Math.round(
    HEADER.length * (entry?.intersectionRatio || 0),
  );

  return (
    <section className={styles.section}>
      <div className={styles.scroll}>
        <h2 className={styles.title}>
          <span aria-hidden>{`>${HEADER.slice(
            0,
            currentCharacterIndex,
          )}`}</span>
          <span className={styles.caret} aria-hidden>
            _
          </span>

          <VisuallyHidden>{HEADER}</VisuallyHidden>
        </h2>

        <div ref={ref} className={styles.trigger} />
      </div>

      <div id="skills" className={styles.anchor} aria-hidden />

      <h3 className={styles.subtitle}>Competences</h3>
      <em className={styles.subtitleDescription}>
        Based on feedbacks collected from my colleagues
      </em>
      <SkillFeedbacks />

      <h3 className={styles.subtitle}>Technologies</h3>
      <em className={styles.subtitleDescription}>
        Click each one of the cards below for more context on my
        experience with these technologies
      </em>
      <div className={styles.grid}>
        {skills.map((skill) => {
          const colors = getColors(skill, isContrastMode);

          return (
            <SkillCard
              key={skill.id}
              id={skill.id}
              name={skill.name}
              icon={skill?.icon?.(isContrastMode)}
              featured={skill.featured}
              backgroundColor={colors.background}
              textColor={colors.text}
              scrollBarTrackColor={skill.colors.scrollBar?.trackColor}
              usageLevel={skill.usageLevel}
              yearsExperience={skill.yearsExperience}
              studying={skill.studying}
              description={skill.description}
              brief={skill.brief}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
