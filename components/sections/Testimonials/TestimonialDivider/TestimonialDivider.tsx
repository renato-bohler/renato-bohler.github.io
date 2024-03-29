import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './TestimonialDivider.module.css';

type Props = {
  position: 'bottom' | 'top';
};

const TOP_VIEWBOX = '0 142 400 164';
const TOP_STROKE_PATH =
  'M -26.681 177.616 C 1.219 189.616 49.8 209.8 77.2 222.7 C 115 240.4 154.5 248.7 196.1 247.8 C 227.3 247.1 258.1 242.2 289 237.7 C 313.1 234.2 337.3 231 361.7 232.2 C 379.902 233.09 397.45 236.598 413.92 243.994';

export const TestimonialDivider: React.FC<Props> = ({ position }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  if (position === 'top') {
    return (
      <>
        <svg
          aria-hidden
          className={classNames(
            styles.divider,
            styles.dividerStroke,
            {
              [styles.animate]: inView,
            },
          )}
          preserveAspectRatio="xMinYMax slice"
          ref={ref}
          viewBox={TOP_VIEWBOX}
        >
          <path
            d="M -30.7 201.426 C -24.514 203.225 -6.801 208.333 -6.3 208.5 C 21.6 220.5 49.8 231.8 77.2 244.7 C 115 262.4 154.5 270.7 196.1 269.8 C 227.3 269.1 258.1 264.2 289 259.7 C 313.1 256.2 337.3 253 361.7 254.2 C 379.91 255.09 397.464 258.601 413.94 266.003 L 413.94 343.161 L -30.7 343.829 L -30.7 201.426 Z"
            stroke="none"
          />
          <path d={TOP_STROKE_PATH} fill="none" />
        </svg>
        <svg
          aria-hidden
          className={classNames(
            styles.dividerGlow,
            styles.dividerStroke,
            {
              [styles.animate]: inView,
            },
          )}
          preserveAspectRatio="xMinYMax slice"
          viewBox={TOP_VIEWBOX}
        >
          <path d={TOP_STROKE_PATH} />
        </svg>
      </>
    );
  }

  return (
    <svg
      aria-hidden
      className={classNames(styles.dividerBottom, {
        [styles.animate]: inView,
      })}
      preserveAspectRatio="xMinYMax slice"
      ref={ref}
      viewBox="-10 133 600 80"
    >
      <path
        d="M -14.658 120.423 L 600.516 120.423 L 600.516 155.761 C 591.254 152.531 581.914 149.539 572.386 147.11 C 542.986 139.71 513.286 138.31 483.086 141.11 C 449.486 144.21 418.086 155.31 386.186 165.11 C 359.986 173.11 333.786 181.11 306.686 185.31 C 280.486 189.41 254.186 189.71 227.786 188.21 C 200.886 186.71 174.086 183.01 147.486 178.61 C 123.586 174.61 99.886 169.31 75.986 165.11 C 53.686 161.21 31.586 157.31 10.086 149.91 C 1.735 147.068 -6.495 143.96 -14.658 140.698 Z"
        fill="none"
      />
      <path
        d="M -14.658 120.423 L 600.516 120.423 L 600.516 155.761 C 591.254 152.531 581.914 149.539 572.386 147.11 C 542.986 139.71 513.286 138.31 483.086 141.11 C 449.486 144.21 418.086 155.31 386.186 165.11 C 359.986 173.11 333.786 181.11 306.686 185.31 C 280.486 189.41 254.186 189.71 227.786 188.21 C 200.886 186.71 174.086 183.01 147.486 178.61 C 123.586 174.61 99.886 169.31 75.986 165.11 C 53.686 161.21 31.586 157.31 10.086 149.91 C 1.735 147.068 -6.495 143.96 -14.658 140.698 Z"
        stroke="none"
      />
    </svg>
  );
};
