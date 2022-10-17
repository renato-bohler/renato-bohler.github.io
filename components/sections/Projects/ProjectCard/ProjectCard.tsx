import { useMediaQuery } from 'react-responsive';

import { Project } from '../projects.const';
import styles from './ProjectCard.module.css';

type Props = {
  order: number;
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ order, project }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const quality = isMobile ? 'low' : 'high';

  return (
    <article className={styles.container}>
      <h3 className={styles.title}>
        {order}.{project.name}
      </h3>
      <div className={styles['video-container']}>
        <video
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
    </article>
  );
};

export default ProjectCard;
