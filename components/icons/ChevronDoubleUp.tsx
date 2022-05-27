const ChevronDoubleUpIcon: React.VFC<{
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}> = ({ className, style, 'aria-label': ariaLabel }) => (
  <svg
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path
      fill="currentColor"
      d="M7.41 18.41L6 17l6-6l6 6l-1.41 1.41L12 13.83l-4.59 4.58m0-6L6 11l6-6l6 6l-1.41 1.41L12 7.83l-4.59 4.58Z"
    />
  </svg>
);

export default ChevronDoubleUpIcon;
