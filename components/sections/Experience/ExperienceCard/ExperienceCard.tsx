import { useInView } from 'react-intersection-observer';

import styles from './ExperienceCard.module.css';

type Props = {
  children: React.ReactNode;
  year: number;
};

const ExperienceCard: React.FC<Props> = ({ children, year }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
    threshold: 0.1,
  });

  return (
    <li ref={ref} className={styles.card} data-revealed={inView}>
      <div className={styles.dot} />
      <div className={styles.year}>{year}</div>
      <div className={styles.text}>{children}</div>
      <div className={styles.reveal} />
    </li>
  );
};

export default ExperienceCard;
