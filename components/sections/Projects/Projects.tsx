import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const title = 'open.source.projects';

  return (
    // TODO(renato): fix horizontal scroll
    // TODO(renato): font too small on mobile
    <section>
      <h2 className={styles.title} ref={ref}>
        {Array.from(title).map((character, index) => (
          <span
            key={index}
            className={classNames({ [styles.animate]: inView })}
            style={
              { '--i': 0.3 + 0.1 * index } as React.CSSProperties
            }
          >
            {character}
          </span>
        ))}
      </h2>

      <div style={{ minHeight: '200vh' }} />
    </section>
  );
};

export default Projects;
