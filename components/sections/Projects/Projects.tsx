import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import ProjectCard from './ProjectCard/ProjectCard';
import projects from './projects.const';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const title = 'open.source.projects';

  return (
    <section>
      {/* TODO(projects): improve section title design */}
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

      {projects.map((project, index) => (
        <ProjectCard
          key={project.folder}
          order={index + 1}
          project={project}
        />
      ))}

      <div style={{ minHeight: '200vh' }} />
    </section>
  );
};

export default Projects;
