import { type CSSProperties, type FC } from 'react';

export const ChevronTripleUpIcon: FC<{
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
    viewBox="0 0 24 24"
    width="1em"
  >
    <path
      d="M16.59 9.42L12 4.83L7.41 9.42L6 8l6-6l6 6l-1.41 1.42m0 6L12 10.83l-4.59 4.59L6 14l6-6l6 6l-1.41 1.42m0 6L12 16.83l-4.59 4.59L6 20l6-6l6 6l-1.41 1.42Z"
      fill="currentColor"
    />
  </svg>
);
