export const ChevronDoubleUpIcon: React.FC<{
  'aria-label'?: string;
  className?: string;
  style?: React.CSSProperties;
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
      d="M7.41 18.41L6 17l6-6l6 6l-1.41 1.41L12 13.83l-4.59 4.58m0-6L6 11l6-6l6 6l-1.41 1.41L12 7.83l-4.59 4.58Z"
      fill="currentColor"
    />
  </svg>
);
