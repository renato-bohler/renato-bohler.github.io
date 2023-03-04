import { useInView } from 'react-intersection-observer';

import styles from './ExperienceCard.module.css';

type Props = {
  children: React.ReactNode;
  year: number;
};

const ExperienceCard: React.FC<Props> = ({ children, year }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });

  return (
    <li className={styles.card} data-revealed={inView}>
      <div className={styles.dot} ref={ref} />
      <div className={styles.year}>{year}</div>
      <div className={styles.text}>{children}</div>
    </li>
  );
};

export default ExperienceCard;
