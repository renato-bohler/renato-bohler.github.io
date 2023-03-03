import styles from './ExperienceCard.module.css';

type Props = {
  children: React.ReactNode;
  year: number;
};

const ExperienceCard: React.FC<Props> = ({ children, year }) => (
  <li className={styles.card}>
    <div className={styles.dot} />
    <div className={styles.year}>{year}</div>
    <div className={styles.text}>{children}</div>
  </li>
);

export default ExperienceCard;
