import { useInView } from 'react-intersection-observer';

import { Company, Period } from '../experiences.const';
import styles from './ExperienceCard.module.css';

type Props = {
  title: string;
  jobTitle: string;
  company: Company;
  consultant?: boolean;
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

  const formattedYears = `${years} year${years > 1 ? 's' : ''}`;
  const formattedMonths = `${months} month${months > 1 ? 's' : ''}`;

  if (years === 0 && months <= 1) return '< 1 month';
  if (years === 0) return formattedMonths;
  return `${formattedYears}, ${formattedMonths}`;
};

const ExperienceCard: React.FC<Props> = ({
  title,
  jobTitle,
  company,
  consultant,
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
        <h3 className={styles.company}>
          {title}
          {consultant && '*'}
        </h3>
        <span className={styles.jobTitle}>{jobTitle}</span>
        <em className={styles.period}>
          {formatDate(period.from)} — {formatDate(period.to)} (
          {formatDuration(period.from, period.to || new Date())})
        </em>
        {consultant && (
          <span className={styles.consultant}>
            * as a consultant, I&apos;m not allowed to disclose client
            information
          </span>
        )}
        <span>{children}</span>
      </div>
      <div className={styles.reveal} />
    </li>
  );
};

export default ExperienceCard;
