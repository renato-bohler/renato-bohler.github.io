import { useEffect, useMemo, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import useTheme from '~/hooks/useTheme';

import SkillCard from './SkillCard/SkillCard';
import SkillFeedbacks from './SkillFeedbacks/SkillFeedbacks';
import skills, { getColors } from './skills.const';
import styles from './Skills.module.css';

const HEADER = '>skills';

const Skills: React.VFC = () => {
  const { isContrastMode } = useTheme();

  const [header, setHeader] = useState('');

  const [ref1, inView1] = useInView({ threshold: 1 });
  const [ref2, inView2] = useInView({ threshold: 1 });
  const [ref3, inView3] = useInView({ threshold: 1 });
  const [ref4, inView4] = useInView({ threshold: 1 });
  const [ref5, inView5] = useInView({ threshold: 1 });
  const [ref6, inView6] = useInView({
    threshold: 1,
    rootMargin: '100% 0% 0% 0%',
  });

  const inView = useMemo(
    () => [inView1, inView2, inView3, inView4, inView5, inView6],
    [inView1, inView2, inView3, inView4, inView5, inView6],
  );
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  useEffect(() => {
    const newHeader = inView.reverse().reduce((acc, value, index) => {
      if (acc.length > 1) return acc;
      if (value) return HEADER.slice(0, Math.abs(5 - index) + 2);
      return HEADER[0];
    }, HEADER[0]);

    setHeader(newHeader);
  }, [inView]);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.scroll}>
          <h2 className={styles.title} aria-label="Skills">
            {header}
          </h2>

          {refs.map((ref, index) => (
            <div
              key={index}
              ref={ref}
              className={styles.trigger}
              style={{
                top: `${40 + index * 10}%`,
              }}
            ></div>
          ))}
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
    </div>
  );
};

export default Skills;
