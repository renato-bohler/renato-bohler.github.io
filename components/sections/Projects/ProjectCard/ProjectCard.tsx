import { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

import { RepositoryInfo } from '~/api/fetchProjectDetails';
import useTheme from '~/hooks/useTheme';

import { Project } from '../projects.const';
import styles from './ProjectCard.module.css';
import RepositoryDetails from './RepositoryDetails/RepositoryDetails';

type Props = {
  order: number;
  project: Project;
  repository?: RepositoryInfo;
};

const ProjectCard: React.FC<Props> = ({
  order,
  project,
  repository,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isReducedMotion } = useTheme();
  const [cardRef, cardInView] = useInView({ threshold: 0.75 });

  useEffect(() => {
    if (!isReducedMotion) return;

    if (cardInView) videoRef.current?.pause();
    else videoRef.current?.play();
  }, [cardInView, isReducedMotion]);

  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const quality = isMobile ? 'low' : 'high';

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          styles['sticky-container'],
          styles.size,
        )}
      >
        <span className={styles['side-title']}>
          {order}.{project.name}
        </span>
        <div className={styles['video-container']}>
          <video
            ref={videoRef}
            src={`/videos/${project.folder}/${quality}.mp4`}
            autoPlay
            loop
            muted
            playsInline
            poster={`/videos/${project.folder}/poster.png`}
            preload="auto"
            className={styles.video}
          >
            <img
              src={`/videos/${project.folder}/poster.png`}
              alt="Project poster"
            />
          </video>
        </div>
      </div>
      <article
        ref={cardRef}
        className={classNames(styles.card, styles.size)}
      >
        <div className={styles['card-content']}>
          <header className={styles['card-header']}>
            <div>
              <h3 className={styles['card-title']}>
                {project.title}
              </h3>
              <p className={styles['card-subtitle']}>
                {project.subtitle}
              </p>
            </div>

            {repository && (
              <RepositoryDetails
                title={project.title}
                owner={repository.owner}
                name={repository.name}
                stars={repository.stars}
                monthlyDownloads={repository.monthlyDownloads}
                lastUpdate={repository.lastUpdate}
                liveUrl={repository.liveUrl}
                repositoryUrl={repository.repositoryUrl}
              />
            )}
          </header>
          <div className={styles['card-description']}>
            {project.description}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;