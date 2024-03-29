import { type CSSProperties, type FC } from 'react';

export const ChevronDownIcon: FC<{
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
      d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
      fill="currentColor"
    />
  </svg>
);
