import { type CSSProperties, type FC } from 'react';

export const PaperPlaneIcon: FC<{
  'aria-label'?: string;
  className?: string;
  style?: CSSProperties;
}> = ({ 'aria-label': ariaLabel, className, style }) => (
  <svg
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    className={className}
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    style={style}
    viewBox="0 0 512 512"
    width="1em"
  >
    <path
      d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6l-126.3-52.5l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488v-96c0-5.3 1.8-10.5 5.1-14.7l165.3-212.6c2.5-7.1-6.5-14.3-13-8.4l-179 161.9l-32 28.9c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8.8 302.2.1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"
      fill="currentColor"
    />
  </svg>
);
