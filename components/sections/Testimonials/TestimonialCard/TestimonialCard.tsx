import { VisuallyHidden } from 'reakit/VisuallyHidden';
import { useSwiperSlide } from 'swiper/react';

import styles from './TestimonialCard.module.css';

type Props = {
  authorName: string;
  authorPicture: string;
  authorRole: string;
  children: React.ReactNode;
  currentTestimonial: number;
  totalTestimonial: number;
};

const TestimonialCard: React.FC<Props> = ({
  authorName,
  authorPicture,
  authorRole,
  children,
  currentTestimonial,
  totalTestimonial,
}) => {
  const slide = useSwiperSlide();

  return (
    <div
      aria-hidden={slide.isDuplicate || !slide.isActive}
      className={styles.card}
    >
      <VisuallyHidden>
        Testimonial {currentTestimonial} out of {totalTestimonial}.{' '}
        {authorName}, {authorRole}.
      </VisuallyHidden>

      <div className={styles.quote}>{children}</div>
      <div aria-hidden className={styles.author}>
        <img
          alt={`${authorName}'s profile picture'`}
          className={styles.authorPicture}
          src={authorPicture}
        />
        <div className={styles.authorTitle}>
          <span className={styles.authorName}>{authorName}</span>
          <span className={styles.authorRole}>{authorRole}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
