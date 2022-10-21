import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import { RepositoryInfo } from '~/api/fetchProjectDetails';

import ProjectCard from './ProjectCard/ProjectCard';
import projects from './projects.const';
import styles from './Projects.module.css';

type Props = {
  repositories: RepositoryInfo[];
};

const Projects: React.FC<Props> = ({ repositories }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const title = 'open.source.projects';

  return (
    <section>
      <div id="projects" aria-hidden className={styles.anchor} />

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
          repository={repositories.find(
            (repository) => repository.name === project.repo,
          )}
        />
      ))}
    </section>
  );
};

export default Projects;
