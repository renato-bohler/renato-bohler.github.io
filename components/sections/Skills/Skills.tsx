import { useInView } from 'react-intersection-observer';

import useTheme from '~/hooks/useTheme';

import SkillCard from './SkillCard/SkillCard';
import SkillFeedbacks from './SkillFeedbacks/SkillFeedbacks';
import skills, { getColors } from './skills.const';
import styles from './Skills.module.css';

const HEADER = 'skills';

const Skills: React.VFC = () => {
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
        <h2 className={styles.title} aria-label="Skills">
          {`>${HEADER.slice(0, currentCharacterIndex)}`}
        </h2>

        <div ref={ref} className={styles.trigger} />
      </div>

      <div id="skills" className={styles.anchor} aria-hidden />

      <SkillFeedbacks />

      <div className={styles.grid}>
        {skills.map((skill) => {
          const colors = getColors(skill, isContrastMode);

          return (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill?.icon?.(isContrastMode)}
              favorite={skill.favorite}
              backgroundColor={colors.background}
              textColor={colors.text}
              usageLevel={skill.usageLevel}
              yearsExperience={skill.yearsExperience}
              studying={skill.studying}
              description={skill.description}
              teaser={skill.teaser}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
