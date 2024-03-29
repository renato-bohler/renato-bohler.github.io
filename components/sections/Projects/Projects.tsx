import { Fragment } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import { RepositoryInfo } from '~/api/fetchProjectDetails';

import { ProjectCard } from './ProjectCard/ProjectCard';
import { getProjects } from './projects.const';

import styles from './Projects.module.css';

type Props = {
  onEmailDialogOpen: () => void;
  repositories: RepositoryInfo[];
};

export const Projects: React.FC<Props> = ({
  onEmailDialogOpen,
  repositories,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const title = 'personal projects';

  return (
    <section className={styles.section}>
      <div aria-hidden className={styles.anchor} id="projects" />

      <h2 className={styles.title} ref={ref}>
        <VisuallyHidden>{title}</VisuallyHidden>

        <span aria-hidden>
          {title.split(' ').map((word) => {
            const wordIndex = title.indexOf(word);

            return (
              <Fragment key={word}>
                <span>
                  {Array.from(word).map(
                    (character, characterIndex) => {
                      const index = wordIndex + characterIndex;

                      return (
                        <span
                          className={classNames({
                            [styles.animate]: inView,
                          })}
                          key={index}
                          style={
                            {
                              '--i': 0.3 + 0.1 * index,
                            } as React.CSSProperties
                          }
                        >
                          {character}
                        </span>
                      );
                    },
                  )}
                </span>
                {wordIndex === 0 && <br />}
              </Fragment>
            );
          })}
        </span>
      </h2>

      {getProjects(onEmailDialogOpen).map((project, index) => (
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
