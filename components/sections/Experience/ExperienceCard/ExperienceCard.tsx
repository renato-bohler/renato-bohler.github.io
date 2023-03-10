import { useInView } from 'react-intersection-observer';

import { Company, Period } from '../experiences.const';
import styles from './ExperienceCard.module.css';

type Props = {
  title: string;
  company: Company;
  period: Period;
  children: React.ReactNode;
};

const formatDate = (date?: Date) =>
  date
    ? date.toLocaleDateString('en', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })
    : 'Present';

const formatDuration = (from: Date, to: Date) => {
  const diff = new Date(to.getTime() - from.getTime());

  const years = diff.getUTCFullYear() - 1970;
  const months = diff.getUTCMonth() + 1;

  if (years === 0 && months <= 1) return '< 1 month';

  return `${years} year${years > 1 ? 's' : ''}, ${months} month${
    months > 1 ? 's' : ''
  }`;
};

const ExperienceCard: React.FC<Props> = ({
  title,
  company,
  period,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
    threshold: 0.1,
  });

  return (
    <li ref={ref} className={styles.card} data-revealed={inView}>
      <div className={styles.dot} />
      <div
        className={styles.companyLogo}
        style={{ background: company.color }}
      >
        <svg>
          <use xlinkHref={`#${company.logo}`} fill="white" />
        </svg>
      </div>
      <div className={styles.content}>
        <h3 className={styles.company}>{title}</h3>
        <em className={styles.period}>
          {formatDate(period.from)} — {formatDate(period.to)} (
          {formatDuration(period.from, period.to || new Date())})
        </em>
        <span className={styles.description}>{children}</span>
      </div>
      <div className={styles.reveal} />
    </li>
  );
};

export default ExperienceCard;
