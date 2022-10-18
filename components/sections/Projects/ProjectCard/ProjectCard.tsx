import { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

import useTheme from '~/hooks/useTheme';

import { Project } from '../projects.const';
import styles from './ProjectCard.module.css';

type Props = {
  order: number;
  project: Project;
};

// TODO(projects): mobile layout
// TODO(projects): add project live URL, github link, stars, watch, forks, NPM downloads
const ProjectCard: React.FC<Props> = ({ order, project }) => {
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
            <h3 className={styles['card-title']}>{project.title}</h3>
            <p className={styles['card-subtitle']}>
              {project.subtitle}
            </p>
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
