import { useInView } from 'react-intersection-observer';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import { useTheme } from '~/hooks/useTheme';

import { SkillCard } from './SkillCard/SkillCard';
import { SkillFeedbacks } from './SkillFeedbacks/SkillFeedbacks';
import { SkillVectors } from './SkillVectors/SkillVectors';
import { getColors, skills } from './skills.const';

import styles from './Skills.module.css';

const HEADER = 'skills';

export const Skills: React.FC = () => {
  const { isContrastMode } = useTheme();

  const { entry, ref } = useInView({
    rootMargin: '100% 0% -25% 0%',
    threshold: Array.from(`${HEADER} `).map(
      (_, i) => i / HEADER.length,
    ),
  });

  const currentCharacterIndex = Math.round(
    HEADER.length * (entry?.intersectionRatio || 0),
  );

  return (
    <section className={styles.section}>
      <SkillVectors />

      <div className={styles.scroll}>
        <h2 className={styles.title}>
          <span aria-hidden>{`>${HEADER.slice(
            0,
            currentCharacterIndex,
          )}`}</span>
          <span aria-hidden className={styles.caret}>
            _
          </span>

          <VisuallyHidden>{HEADER}</VisuallyHidden>
        </h2>

        <div className={styles.trigger} ref={ref} />
      </div>

      <div aria-hidden className={styles.anchor} id="skills" />

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
              backgroundColor={colors.background}
              brief={skill.brief}
              description={skill.description}
              featured={skill.featured}
              icon={skill?.icon?.(isContrastMode)}
              id={skill.id}
              key={skill.id}
              name={skill.name}
              scrollBarTrackColor={skill.colors.scrollBar?.trackColor}
              studying={skill.studying}
              textColor={colors.text}
              usageLevel={skill.usageLevel}
              yearsExperience={skill.yearsExperience}
            />
          );
        })}
      </div>
    </section>
  );
};
