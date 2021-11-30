import styles from './TestimonialCard.module.css';

type Props = {
  authorPicture: string;
  authorName: string;
  authorRole: string;
};

const TestimonialCard: React.FC<Props> = ({
  children,
  authorPicture,
  authorName,
  authorRole,
}) => (
  <div className={styles.card}>
    <div className={styles.quote}>{children}</div>
    <div className={styles.author}>
      <img
        src={authorPicture}
        loading="lazy"
        alt={`${authorName}'s profile picture'`}
        className={styles['author-picture']}
      />
      <div className={styles['author-title']}>
        <span className={styles['author-name']}>{authorName}</span>
        <span className={styles['author-role']}>{authorRole}</span>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
