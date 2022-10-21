import { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

import { RepositoryInfo } from '~/api/fetchProjectDetails';
import GitHubIcon from '~/components/icons/GitHub';
import PlayIcon from '~/components/icons/Play';
import useTheme from '~/hooks/useTheme';
import * as format from '~/utils/format';

import { Project } from '../projects.const';
import styles from './ProjectCard.module.css';

type Props = {
  order: number;
  project: Project;
  repository?: RepositoryInfo;
};

// TODO(projects): mobile layout
// TODO(projects): add project live URL, github link, stars, watch, forks, NPM downloads
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
              <div className={styles['repository-info']}>
                <div className={styles['repository-links']}>
                  <a
                    href={repository.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`See "${project.title}" in action`}
                  >
                    Live
                    <PlayIcon />
                  </a>
                  <a
                    href={repository.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`See "${repository.owner}/${repository.name}" on GitHub`}
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                </div>
                {repository.monthlyDownloads ? (
                  <span>
                    downloaded{' '}
                    <strong>
                      {format.number(repository.monthlyDownloads)}
                    </strong>{' '}
                    times last month
                  </span>
                ) : (
                  <span>
                    last updated{' '}
                    <strong>
                      {format.relativeTime(
                        new Date(repository.lastUpdate),
                      )}
                    </strong>
                  </span>
                )}
                <span>
                  <strong>{format.number(repository.stars)}</strong>{' '}
                  stars
                </span>
              </div>
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
