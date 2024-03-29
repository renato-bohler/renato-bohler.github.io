import { useInView } from 'react-intersection-observer';

import { useTheme } from '~/hooks/useTheme';

import { Company, Period } from '../experiences.const';

import styles from './ExperienceCard.module.css';

type Props = {
  children: React.ReactNode;
  company: Company;
  consultant?: boolean;
  jobTitle: string;
  period: Period;
  title: string;
};

const formatDate = (date?: Date) =>
  date
    ? date.toLocaleDateString('en', {
        month: 'long',
        timeZone: 'UTC',
        year: 'numeric',
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

export const ExperienceCard: React.FC<Props> = ({
  children,
  company,
  consultant,
  jobTitle,
  period,
  title,
}) => {
  const { isReducedMotion } = useTheme();

  const [ref, inView] = useInView({
    rootMargin: '-100px',
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <li
      className={styles.card}
      data-revealed={inView || isReducedMotion}
      ref={ref}
    >
      <div className={styles.dot} />
      <div
        className={styles.companyLogo}
        style={{
          background: company.color,
          padding: company.padding,
        }}
      >
        <svg>
          <use fill="white" xlinkHref={`#${company.logo}`} />
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
        <div>{children}</div>
      </div>
      <div className={styles.reveal} />
    </li>
  );
};
