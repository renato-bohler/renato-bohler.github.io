import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { useSwiperSlide } from 'swiper/react';

import styles from './TestimonialCard.module.css';
type Props = {
  children: React.ReactNode;
  authorPicture: string;
  authorName: string;
  authorRole: string;
  currentTestimonial: number;
  totalTestimonial: number;
};

const TestimonialCard: React.FC<Props> = ({
  children,
  authorPicture,
  authorName,
  authorRole,
  currentTestimonial,
  totalTestimonial,
}) => {
  const slide = useSwiperSlide();

  return (
    <div
      className={styles.card}
      aria-hidden={slide.isDuplicate || !slide.isActive}
    >
      <VisuallyHidden>
        Testimonial {currentTestimonial} out of {totalTestimonial}.{' '}
        {authorName}, {authorRole}.
      </VisuallyHidden>

      <div className={styles.quote}>{children}</div>
      <div className={styles.author} aria-hidden>
        <img
          src={authorPicture}
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
};

export default TestimonialCard;
