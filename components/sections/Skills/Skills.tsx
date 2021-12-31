import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import SkillCard from './SkillCard/SkillCard';
import SkillRadar from './SkillRadar/SkillRadar';
import skills from './skills.const';
import styles from './Skills.module.css';

const Skills: React.VFC = () => {
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
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  useEffect(() => {
    if (inView6) return setHeader('skills');
    if (inView5) return setHeader('skill');
    if (inView4) return setHeader('skil');
    if (inView3) return setHeader('ski');
    if (inView2) return setHeader('sk');
    if (inView1) return setHeader('s');
    setHeader('');
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

  return (
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

      <SkillRadar />

      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill?.icon?.()}
            favorite={skill.favorite}
            color={skill.color}
            textColor={skill.textColor}
            usageLevel={skill.usageLevel}
            yearsExperience={skill.yearsExperience}
            studying={skill.studying}
            description={skill.description}
            teaser={skill.teaser}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
